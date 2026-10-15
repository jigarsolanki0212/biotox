import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo-config';
import { services } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' | 'yearly' = 'monthly') => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page('/', 1.0, 'weekly'),
    page('/expertise', 0.9, 'weekly'),
    ...services.map((s) => page(`/expertise/${s.slug}`, 0.9)),
    page('/process', 0.9),
    page('/about', 0.8),
    page('/advantages', 0.8),
    page('/devices', 0.8),
    page('/standards', 0.8),
    page('/contact', 0.9),
    page('/privacy-policy', 0.3, 'yearly'),
    page('/terms', 0.3, 'yearly'),
  ];
}
