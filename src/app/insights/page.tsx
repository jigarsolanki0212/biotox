import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import { visibleInsights, insightHref } from '@/lib/insights';
import { siteConfig, getBreadcrumbSchema } from '@/lib/seo-config';

const description =
  'Practical guidance on medical device biocompatibility, ISO 10993, BEP/BER and toxicological risk assessment from BIOTOX by MedReg toxicologists.';

export const metadata: Metadata = {
  title: 'Insights — Medical Device Toxicology Guides',
  description,
  alternates: { canonical: `${siteConfig.url}/insights` },
  openGraph: {
    title: 'Insights — BIOTOX by MedReg',
    description,
    url: `${siteConfig.shareUrl}/insights`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'BIOTOX by MedReg Insights' }],
  },
};

const formatDate = (d: string) => new Date(`${d}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export default function InsightsPage() {
  // Nothing published yet on the live site: the section stays hidden.
  if (visibleInsights.length === 0) notFound();

  return (
    <>
      <JsonLd schema={getBreadcrumbSchema([{ name: 'Home', item: '/' }, { name: 'Insights', item: '/insights' }])} />
      <PageHero
        eyebrow="Insights"
        title={<>Guides from our <em>toxicologists</em></>}
        lead="Clear, practical explanations of biocompatibility, ISO 10993 and the biological evaluation process for medical device teams."
        img="https://images.pexels.com/photos/7550538/pexels-photo-7550538.jpeg?auto=compress&cs=tinysrgb&w=1800"
        crumbs={[{ name: 'Insights' }]}
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {visibleInsights.map((a, i) => (
              <article className="card service-card" key={a.slug} data-reveal="up" style={{ ['--d' as string]: (i % 3) * 90 }}>
                <div className="card-img-wrap">
                  <Image src={a.img} alt={a.title} fill sizes="(max-width:640px) 100vw, (max-width:980px) 50vw, 400px" />
                  <span className="tag">{a.tags[0]}</span>
                  {!a.published && <span className="service-num">Draft</span>}
                </div>
                <div className="card-body">
                  <span className="insight-meta">{formatDate(a.date)} · {a.readMinutes} min read</span>
                  <h3 style={{ marginTop: 10 }}>{a.title}</h3>
                  <p>{a.description}</p>
                  <span className="link-arrow">Read the guide <Icon name="arrow" /></span>
                </div>
                <Link href={insightHref(a.slug)} className="card-link" aria-label={`Read: ${a.title}`} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
