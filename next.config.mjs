const isDev = process.env.NODE_ENV !== 'production';

// Only the sources the site actually uses. Next.js and the theme/JSON-LD snippets need inline scripts on this
// statically generated site (nonces would force every page to render per request). vercel.live is Vercel's
// preview toolbar; Google is the office map embed.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://vercel.live`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.pexels.com https://images.unsplash.com https://medreg.in https://vercel.live https://vercel.com",
  "font-src 'self' data: https://vercel.live",
  `connect-src 'self' https://vercel.live wss://ws-us3.pusher.com${isDev ? ' ws: http://localhost:*' : ''}`,
  'frame-src https://www.google.com https://maps.google.com https://vercel.live',
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
    deviceSizes: [480, 640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [96, 160, 256, 384],
    qualities: [55, 70, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'medreg.in',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/expertise.html',
        destination: '/expertise',
        permanent: true,
      },
      {
        source: '/process.html',
        destination: '/process',
        permanent: true,
      },
      {
        source: '/advantages.html',
        destination: '/advantages',
        permanent: true,
      },
      {
        source: '/devices.html',
        destination: '/devices',
        permanent: true,
      },
      {
        source: '/standards.html',
        destination: '/standards',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          // No includeSubDomains: cPanel/webmail subdomains stay on the old host with their own certificates.
          { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), bluetooth=(), browsing-topics=()',
          },
        ],
      },
      {
        // Enquiries are private: never cache API responses anywhere.
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store' },
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
    ];
  },
};

export default nextConfig;
