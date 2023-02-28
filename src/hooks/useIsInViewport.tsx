import { RefObject, useEffect, useMemo, useState } from 'react';

export function useIsInViewport(ref: RefObject<HTMLElement>) {
  const [isInViewport, setIsInViewport] = useState(false);

  const observer = useMemo(
    () =>
      typeof window !== 'undefined'
        ? new IntersectionObserver(
            ([entry]) =>
              entry.isIntersecting !== isInViewport && setIsInViewport(entry.isIntersecting)
          )
        : null,
    [isInViewport]
  );

  useEffect(() => {
    ref?.current && observer?.observe(ref.current);

    return () => {
      observer?.disconnect();
    };
  }, [ref, observer]);

  return isInViewport;
}
