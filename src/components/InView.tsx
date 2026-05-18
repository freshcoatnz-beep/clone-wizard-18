import { useEffect, useRef, useState, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  rootMargin?: string;
  minHeight?: string;
}

/**
 * Renders children only once the placeholder scrolls within `rootMargin`
 * of the viewport. Keeps initial JS/DOM work low for below-the-fold blocks.
 */
export const InView = ({ children, rootMargin = '400px', minHeight = '400px' }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown || !ref.current) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [shown, rootMargin]);

  return shown ? <>{children}</> : <div ref={ref} style={{ minHeight }} aria-hidden="true" />;
};