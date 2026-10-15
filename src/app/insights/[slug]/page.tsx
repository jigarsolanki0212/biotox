import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import FaqAccordion from '@/components/FaqAccordion';
import RelatedServices from '@/components/RelatedServices';
import { visibleInsights, getInsight, insightHref } from '@/lib/insights';
import { siteConfig, getBreadcrumbSchema, getFaqSchema } from '@/lib/seo-config';

export const dynamicParams = false;

export function generateStaticParams() {
  return visibleInsights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<'/insights/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const a = getInsight(slug);
  if (!a) return {};
  return {
    title: a.title.length <= 46 ? a.title : a.title.split(':')[0],
    description: a.description,
    alternates: { canonical: `${siteConfig.url}${insightHref(slug)}` },
    openGraph: {
      type: 'article',
      title: `${a.title} — BIOTOX by MedReg`,
      description: a.description,
      url: `${siteConfig.shareUrl}${insightHref(slug)}`,
      publishedTime: a.date,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: a.title }],
    },
  };
}

const formatDate = (d: string) => new Date(`${d}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export default async function InsightPage({ params }: PageProps<'/insights/[slug]'>) {
  const { slug } = await params;
  const a = getInsight(slug);
  if (!a) notFound();
  const url = `${siteConfig.url}${insightHref(slug)}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: a.title,
    description: a.description,
    image: a.img,
    datePublished: a.date,
    dateModified: a.date,
    inLanguage: 'en',
    mainEntityOfPage: url,
    keywords: a.tags.join(', '),
    author: { '@type': 'Organization', name: 'BIOTOX by MedReg Toxicology Team', url: siteConfig.url },
    publisher: { '@id': `${siteConfig.url}/#organization` },
  };

  return (
    <>
      <JsonLd schema={getBreadcrumbSchema([{ name: 'Home', item: '/' }, { name: 'Insights', item: '/insights' }, { name: a.title, item: insightHref(slug) }])} />
      <JsonLd schema={articleSchema} />
      {a.faqs && <JsonLd schema={getFaqSchema(a.faqs)} />}

      <PageHero
        eyebrow={a.tags.join(' · ')}
        title={a.title}
        lead={a.description}
        img={a.img}
        crumbs={[{ name: 'Insights', href: '/insights' }, { name: a.title }]}
      >
        <p className="insight-byline">BIOTOX by MedReg Toxicology Team · {formatDate(a.date)} · {a.readMinutes} min read</p>
      </PageHero>

      <section className="section">
        <div className="container sd-layout">
          <article className="sd-main">
            {!a.published && (
              <div className="draft-note" role="note">
                <strong>Draft, not on the live site.</strong> A toxicologist should review it before it is published.
                {a.reviewNotes && <ul>{a.reviewNotes.map((n) => <li key={n}>{n}</li>)}</ul>}
              </div>
            )}
            <div className="prose article-body">
              {a.body.map((b, i) =>
                'h2' in b ? <h2 key={i}>{b.h2}</h2> : 'p' in b ? <p key={i}>{b.p}</p> : <ul key={i}>{b.ul.map((li) => <li key={li}>{li}</li>)}</ul>
              )}
            </div>
            {a.faqs && (
              <section id="faq" style={{ marginTop: 48 }}>
                <div className="eyebrow">FAQs</div>
                <h2>Common questions</h2>
                <FaqAccordion items={a.faqs} />
              </section>
            )}
          </article>

          <aside className="sd-aside">
            <div className="aside-cta">
              <h2>Talk to a toxicologist</h2>
              <p>Questions about your own device? Get a direct expert response within 2 hours.</p>
              <Link href="/contact" className="btn btn-light">
                Ask an expert <Icon name="arrow" />
              </Link>
              <div className="contact-lines">
                <a href={`tel:${siteConfig.contact.phonePrimaryRaw}`}>{siteConfig.contact.phonePrimary}</a>
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </div>
            </div>
            {visibleInsights.length > 1 && (
              <nav className="other-services" aria-label="More insights">
                <h2>More insights</h2>
                {visibleInsights.filter((o) => o.slug !== slug).map((o) => (
                  <Link key={o.slug} href={insightHref(o.slug)}>
                    {o.title} <Icon name="chevronRight" />
                  </Link>
                ))}
              </nav>
            )}
          </aside>
        </div>
      </section>

      <RelatedServices slugs={a.relatedServices} eyebrow="Related services" title={<>How we can <em>help</em></>} />
      <CtaBand />
    </>
  );
}
