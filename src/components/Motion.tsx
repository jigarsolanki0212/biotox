'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

type LenisWindow = Window & { __lenis?: Lenis };

const FADE_IMG = '.card-img-wrap img, .bento-item img, .device-tile img, .page-hero .bg img, .hv-frame img, .split-media img, .sd-overview img, .mega-feature img';

/**
 * Site-wide motion: smooth wheel scrolling (Lenis, desktop only — touch devices keep native
 * scrolling), scroll-triggered reveals for `data-reveal`, photo fade-in on load, the card
 * spotlight, the top progress bar and the process timeline fill. All scroll work runs at most
 * once per animation frame, and nothing animates for visitors who prefer reduced motion.
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    let lenis: Lenis | null = null;
    if (!reduce && finePointer) {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true, autoRaf: true, anchors: { offset: -100 } });
      (window as LenisWindow).__lenis = lenis;
    }

    const bar = document.querySelector<HTMLElement>('.scroll-progress');
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
      document.querySelectorAll<HTMLElement>('.timeline').forEach((tl) => {
        const r = tl.getBoundingClientRect();
        if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
        const p = Math.min(1, Math.max(0, (window.innerHeight * 0.7 - r.top) / r.height));
        tl.style.setProperty('--p', p.toFixed(3));
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    let pointerFrame = 0;
    const onPointer = (e: PointerEvent) => {
      if (pointerFrame) return;
      pointerFrame = requestAnimationFrame(() => {
        pointerFrame = 0;
        const card = (e.target as HTMLElement | null)?.closest?.<HTMLElement>('.card');
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    };
    if (finePointer) window.addEventListener('pointermove', onPointer, { passive: true });

    // Photos fade in once decoded instead of popping in line by line.
    const onLoad = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.tagName === 'IMG') t.classList.add('loaded');
    };
    document.addEventListener('load', onLoad, true);

    return () => {
      lenis?.destroy();
      (window as LenisWindow).__lenis = undefined;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointer);
      document.removeEventListener('load', onLoad, true);
    };
  }, []);

  // Re-arm reveals and image fades on every route change.
  useEffect(() => {
    const lenis = (window as LenisWindow).__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    let frame = 0;
    const scan = () => {
      frame = 0;
      document.querySelectorAll('[data-reveal]:not(.in), .t-step:not(.in)').forEach((el) => io.observe(el));
      document.querySelectorAll<HTMLImageElement>(`${FADE_IMG}`).forEach((img) => {
        img.classList.add('fade-img');
        if (img.complete && img.naturalWidth > 0) img.classList.add('loaded');
      });
    };
    scan();
    const mo = new MutationObserver(() => {
      if (!frame) frame = requestAnimationFrame(scan);
    });
    mo.observe(document.getElementById('mainContent') ?? document.body, { childList: true, subtree: true });
    // Safety net: never leave content hidden if an observer misses it.
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll('.fade-img:not(.loaded)').forEach((img) => img.classList.add('loaded'));
    }, 6000);
    return () => {
      io.disconnect();
      mo.disconnect();
      cancelAnimationFrame(frame);
      clearTimeout(failsafe);
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
