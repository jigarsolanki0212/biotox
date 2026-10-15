import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import FaqAccordion from '@/components/FaqAccordion';
import ServiceCard from '@/components/ServiceCard';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import { services } from '@/lib/data';
import { getService, serviceHref } from '@/lib/service-details';
import { siteConfig, getBreadcrumbSchema, getFaqSchema, getServiceDetailSchema } from '@/lib/seo-config';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<'/expertise/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const url = `${siteConfig.url}${serviceHref(slug)}`;
  return {
    title: `${s.title} — ${s.tag}`,
    description: s.desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${s.title} — BIOTOX by MedReg`,
      description: s.desc,
      url,
      images: [{ url: s.img.replace('w=800', 'w=1200'), width: 1200, height: 630, alt: s.title }],
    },
  };
}

const SECTIONS = [
  ['overview', 'Overview'],
  ['when', 'When you need it'],
  ['deliverables', 'What you receive'],
  ['approach', 'Our approach'],
  ['standards', 'Standards'],
  ['faq', 'FAQs'],
];

export default async function ServiceDetailPage({ params }: PageProps<'/expertise/[slug]'>) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = s.related.map((r) => services.find((x) => x.slug === r)).filter((x): x is (typeof services)[number] => Boolean(x));
  const heroImg = s.img.replace('w=800', 'w=1800');

  return (
    <>
      <JsonLd
        schema={getBreadcrumbSchema([
          { name: 'Home', item: '/' },
          { name: 'Expertise', item: '/expertise' },
          { name: s.title, item: serviceHref(slug) },
        ])}
      />
      <JsonLd schema={getServiceDetailSchema(s)} />
      <JsonLd schema={getFaqSchema(s.faqs)} />

      <PageHero
        eyebrow={s.tag}
        title={s.title}
        lead={s.headline}
        img={heroImg}
        crumbs={[{ name: 'Expertise', href: '/expertise' }, { name: s.title }]}
      >
        <div className="hero-cta">
          <Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="btn btn-primary">
            Discuss your device <Icon name="arrow" />
          </Link>
          <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-glass">
            WhatsApp an expert
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container sd-layout">
          <div className="sd-main">
            <section id="overview">
              <div className="sd-overview">
                <div data-reveal="up">
                  <div className="eyebrow">Overview</div>
                  <h2>What is {s.title.replace(/ Compliance$/, ' compliance')}?</h2>
                  <div className="prose">
                    {s.overview.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                  </div>
                </div>
                <div className="img" data-reveal="clip">
                  <Image src={s.sideImg} alt={`${s.title} at BIOTOX by MedReg`} width={600} height={750} sizes="(max-width:980px) 90vw, 360px" style={{ height: '100%' }} />
                </div>
              </div>
              <div className="sd-outcomes" style={{ marginTop: 36 }}>
                {s.outcomes.map((o, i) => (
                  <div key={o.label} data-reveal="up" style={{ ['--d' as string]: i * 90 }}>
                    <strong>{o.value}</strong>
                    <span>{o.label}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="when">
              <div className="panel tinted" data-reveal="up">
                <div className="eyebrow">When you need it</div>
                <h2>Typical triggers for this service</h2>
                <ul className="check-list" style={{ marginBottom: 0 }}>
                  {s.whenNeeded.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="deliverables">
              <div data-reveal="up">
                <div className="eyebrow">What you receive</div>
                <h2>Deliverables</h2>
              </div>
              <div className="deliv-grid">
                {s.deliverables.map((d, i) => (
                  <div className="deliv" key={d} data-reveal="up" style={{ ['--d' as string]: (i % 2) * 80 }}>
                    <span className="n">{String(i + 1).padStart(2, '0')}</span>
                    {d}
                  </div>
                ))}
              </div>
            </section>

            <section id="approach">
              <div data-reveal="up">
                <div className="eyebrow">Our approach</div>
                <h2>How we run the engagement</h2>
              </div>
              <div className="approach">
                {s.approach.map((a, i) => (
                  <div className="approach-step" key={a.title} data-reveal="left" style={{ ['--d' as string]: i * 80 }}>
                    <span className="n">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{a.title}</h3>
                      <p>{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="standards">
              <div data-reveal="up">
                <div className="eyebrow">Standards &amp; guidance</div>
                <h2>Aligned with</h2>
                <div className="std-chips">
                  {s.standards.map((st) => (
                    <span key={st}>{st}</span>
                  ))}
                </div>
              </div>
            </section>

            <section id="faq">
              <div data-reveal="up">
                <div className="eyebrow">FAQs</div>
                <h2>{s.title}: common questions</h2>
              </div>
              <FaqAccordion items={s.faqs} />
            </section>
          </div>

          <aside className="sd-aside">
            <nav className="toc" aria-label="On this page">
              <h4>On this page</h4>
              {SECTIONS.map(([id, label]) => (
                <a key={id} href={`#${id}`}>{label}</a>
              ))}
            </nav>
            <div className="aside-cta">
              <h4>Talk to a toxicologist</h4>
              <p>Get a scoped proposal for {s.title.toLowerCase()} — direct expert response within 2 hours.</p>
              <Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="btn btn-light">
                Request a proposal <Icon name="arrow" />
              </Link>
              <div className="contact-lines">
                <a href={`tel:${siteConfig.contact.phonePrimaryRaw}`}>{siteConfig.contact.phonePrimary}</a>
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </div>
            </div>
            <nav className="other-services" aria-label="Other services">
              <h4>All services</h4>
              {services.map((o) => (
                <Link key={o.slug} href={serviceHref(o.slug)} aria-current={o.slug === slug ? 'page' : undefined} style={o.slug === slug ? { color: 'var(--accent)', background: 'var(--bg-soft)' } : undefined}>
                  {o.title} <Icon name="chevronRight" />
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head" data-reveal="up">
            <div className="eyebrow">Related services</div>
            <h2>Often combined <em>with this service</em></h2>
          </div>
          <div className="grid grid-3">
            {related.map((r) => (
              <ServiceCard key={r.slug} item={r} index={services.indexOf(r)} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={<>Need {s.title.toLowerCase()} for your device?</>} />
      <ContactSection defaultService={s.title} />
    </>
  );
}
