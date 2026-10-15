'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

/** Counts up with an ease-out curve the first time it scrolls into view. */
export default function Counter({ target, suffix = '', className = '', duration = 1800 }: CounterProps) {
  const [count, setCount] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setCount(0);
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setCount(Math.round(target * (1 - Math.pow(1 - t, 4))));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
