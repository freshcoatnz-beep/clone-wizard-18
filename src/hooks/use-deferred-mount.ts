import { useEffect, useState } from 'react';

export function useDeferredMount(delay = 1500) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const w = window as any;
    const id = w.requestIdleCallback
      ? w.requestIdleCallback(() => setReady(true), { timeout: delay })
      : window.setTimeout(() => setReady(true), 600);
    return () => {
      if (w.cancelIdleCallback && typeof id === 'number') w.cancelIdleCallback(id);
      else window.clearTimeout(id as number);
    };
  }, [delay]);
  return ready;
}
