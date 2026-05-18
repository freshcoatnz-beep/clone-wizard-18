import { Children, isValidElement, useLayoutEffect, useRef, type ReactNode } from 'react';

/**
 * Tiny drop-in replacement for react-helmet-async's <Helmet> that we use here.
 * Walks children (<title>, <meta>, <link>, <script>), and upserts them into
 * document.head. Tags are tracked with a data-head-id attribute so we can
 * clean them up on unmount and avoid duplicates across renders.
 *
 * Limitations vs real Helmet: no SSR, no priority/seo overrides — sufficient
 * for this project where every page mounts client-side.
 */

let counter = 0;

interface Props {
  children?: ReactNode;
}

type TagDescriptor = {
  tag: string;
  attrs: Record<string, string>;
  text?: string;
};

function describeChild(node: ReactNode): TagDescriptor | null {
  if (!isValidElement(node)) return null;
  const type = typeof node.type === 'string' ? node.type : null;
  if (!type) return null;
  const props = node.props as Record<string, unknown>;
  const attrs: Record<string, string> = {};
  for (const [k, v] of Object.entries(props)) {
    if (k === 'children') continue;
    if (v == null || v === false) continue;
    attrs[k] = String(v);
  }
  const children = props.children;
  let text: string | undefined;
  if (typeof children === 'string') text = children;
  else if (typeof children === 'number') text = String(children);
  else if (Array.isArray(children)) {
    text = children
      .map((c) => (typeof c === 'string' || typeof c === 'number' ? String(c) : ''))
      .join('');
  }
  return { tag: type, attrs, text };
}

function applyAttrs(el: Element, attrs: Record<string, string>) {
  for (const [k, v] of Object.entries(attrs)) {
    // React uses className/htmlFor — map back to DOM names
    const name = k === 'className' ? 'class' : k === 'htmlFor' ? 'for' : k;
    el.setAttribute(name, v);
  }
}

export const Helmet = ({ children }: Props) => {
  const idRef = useRef<string | null>(null);
  if (idRef.current === null) idRef.current = `h${++counter}`;
  const id = idRef.current;

  useLayoutEffect(() => {
    const head = document.head;
    // Remove any previously inserted tags for this instance
    head.querySelectorAll(`[data-head-id="${id}"]`).forEach((n) => n.remove());

    let titleSnapshot: string | null = null;

    Children.forEach(children, (child) => {
      const d = describeChild(child);
      if (!d) return;

      if (d.tag === 'title') {
        if (titleSnapshot === null) titleSnapshot = document.title;
        document.title = d.text ?? '';
        return;
      }

      // Deduplicate meta by name|property; canonical by rel
      if (d.tag === 'meta') {
        const key = d.attrs.name || d.attrs.property;
        if (key) {
          const existing = head.querySelector(
            d.attrs.name ? `meta[name="${key}"]` : `meta[property="${key}"]`
          );
          if (existing && existing.getAttribute('data-head-id') !== id) existing.remove();
        }
      }
      if (d.tag === 'link' && d.attrs.rel === 'canonical') {
        const existing = head.querySelector('link[rel="canonical"]');
        if (existing && existing.getAttribute('data-head-id') !== id) existing.remove();
      }

      const el = document.createElement(d.tag);
      applyAttrs(el, d.attrs);
      if (d.text != null) el.textContent = d.text;
      el.setAttribute('data-head-id', id);
      head.appendChild(el);
    });

    return () => {
      head.querySelectorAll(`[data-head-id="${id}"]`).forEach((n) => n.remove());
      if (titleSnapshot !== null) document.title = titleSnapshot;
    };
    // Re-run when the children identity changes (page navigations etc.)
     
  }, [children, id]);

  return null;
};

export default Helmet;

/** No-op passthrough — preserved so existing <HelmetProvider> usage keeps working. */
export const HelmetProvider = ({ children }: { children?: ReactNode }) => <>{children}</>;