'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

/**
 * Site-wide motion: smooth scrolling (Lenis), scroll-triggered reveals for any
 * element with `data-reveal`, the cursor spotlight on cards, the top scroll
 * progress bar and the process timeline fill. Respects prefers-reduced-motion.
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lenis: Lenis | null = null;
    let raf = 0;
    if (!reduce) {
      lenis = new Lenis({ duration: 1.15, smoothWheel: true, anchors: { offset: -100 } });
      const loop = (t: number) => {
        lenis?.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    }

    const bar = document.querySelector<HTMLElement>('.scroll-progress');
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      document.querySelectorAll<HTMLElement>('.timeline').forEach((tl) => {
        const r = tl.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (window.innerHeight * 0.7 - r.top) / r.height));
        tl.style.setProperty('--p', p.toFixed(3));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const onPointer = (e: PointerEvent) => {
      const card = (e.target as HTMLElement | null)?.closest?.<HTMLElement>('.card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    window.addEventListener('pointermove', onPointer, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointer);
    };
  }, []);

  // Reveal-on-scroll, re-armed on every route change.
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    const scan = () =>
      document.querySelectorAll('[data-reveal]:not(.in), .t-step:not(.in)').forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
