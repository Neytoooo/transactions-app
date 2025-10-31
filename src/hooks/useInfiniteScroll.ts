import { useEffect, useRef } from 'react';

export function useInfiniteScroll(onReachEnd: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && onReachEnd());
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [onReachEnd]);

  return ref;
}
