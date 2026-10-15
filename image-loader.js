'use client';

/**
 * Serves every photo straight from its own CDN (Pexels / Unsplash already resize and
 * compress on the fly), so pages never wait on a cold image-optimisation round trip.
 * Local files in /public are already optimised at build time and are returned as-is.
 */
export default function imageLoader({ src, width, quality }) {
  const q = quality || 70;
  if (src.startsWith('https://images.pexels.com/')) {
    const base = src.split('?')[0];
    return `${base}?auto=compress&cs=tinysrgb&fit=crop&w=${width}&q=${q}`;
  }
  if (src.startsWith('https://images.unsplash.com/')) {
    const base = src.split('?')[0];
    return `${base}?auto=format&fit=crop&w=${width}&q=${q}`;
  }
  return `${src}${src.includes('?') ? '&' : '?'}w=${width}`;
}
