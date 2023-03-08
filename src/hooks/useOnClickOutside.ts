import { RefObject, useEffect } from 'react';

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
): void {
  useEffect(() => {
    if (typeof window !== 'undefined' && document && ref) {
      const listener = (event: Event) => {
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, handler]);
}
