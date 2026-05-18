import { cloneElement, isValidElement, lazy, Suspense, useState } from 'react';

const QuoteDialog = lazy(() =>
  import('@/components/QuoteDialog').then((module) => ({ default: module.QuoteDialog }))
);

interface QuoteFormProps {
  children: React.ReactNode;
}

export const QuoteForm = ({ children }: QuoteFormProps) => {
  const [open, setOpen] = useState(false);

  const trigger = isValidElement<{ onClick?: React.MouseEventHandler }>(children)
    ? cloneElement(children, {
        onClick: (event) => {
          children.props.onClick?.(event);
          if (!event.defaultPrevented) setOpen(true);
        },
      })
    : children;

  return (
    <>
      {trigger}
      {open && (
        <Suspense fallback={null}>
          <QuoteDialog open={open} onOpenChange={setOpen} />
        </Suspense>
      )}
    </>
  );
};