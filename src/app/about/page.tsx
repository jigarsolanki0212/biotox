import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import Counter from '@/components/Counter';
import Icon from '@/components/Icon';
import { siteConfig, getBreadcrumbSchema } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'About Us — Medical Device Toxicologists',
  description:
    'Medical device toxicology and biological safety evaluation worldwide, with 20+ years of expertise and DABT · ERT · UKRT certified toxicologists.',
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: 'About BIOTOX by MedReg',
    description: 'Expert toxicology solutions for safe, compliant, successful medical devices.',
    url: `${siteConfig.url}/about`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'About BIOTOX by MedReg' }],
  },
};

const px = (id: number, w = 1200) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const VALUES = [
  { icon: 'flask', title: 'Science first', desc: 'Every conclusion rests on data, literature and sound toxicological reasoning — never on templates.' },
  { icon: 'shield', title: 'Patient safety', desc: 'We evaluate devices as if our own families were the patients, because ultimately someone’s are.' },
  { icon: 'droplet', title: 'Fewer tests, not less rigour', desc: 'Risk-based strategies and justified waivers reduce animal testing and cost without cutting corners.' },
  { icon: 'globe', title: 'Global by design', desc: 'One cohesive documentation strategy for FDA, EU MDR, CDSCO, Gulf and ASEAN markets.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={getBreadcrumbSchema([{ name: 'Home', item: '/' }, { name: 'About', item: '/about' }])} />
      <JsonLd
        schema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About BIOTOX by MedReg',
          url: `${siteConfig.url}/about`,
          about: { '@id': `${siteConfig.url}/#organization` },
        }}
      />

      <PageHero
        eyebrow="About BIOTOX by MedReg"
        title={<>Let&apos;s Decode The <em>Regulations</em> Together</>}
        lead="Expert toxicology solutions for safe, compliant, successful products — smarter toxicology for better regulatory decisions, delivering comprehensive biological safety evaluation for medical devices worldwide."
        img={px(4031692, 1800)}
        crumbs={[{ name: 'About' }]}
        chips={['20+ Years Expertise', 'DABT · ERT · UKRT', 'Class I–III Devices']}
      />

      <section className="section">
        <div className="container split">
          <div className="split-media" data-reveal="left">
            <div className="main-img">
              <Image src={px(7651804)} alt="Biological evaluation of medical device materials" width={800} height={1000} style={{ height: '100%' }} sizes="(max-width:980px) 90vw, 560px" />
            </div>
            <div className="sub-img">
              <Image src={px(8325713, 600)} alt="Chemical structure modelling for toxicological assessment" width={400} height={400} style={{ height: '100%' }} sizes="260px" />
            </div>
            <div className="exp-badge">
              <strong><Counter target={20} suffix="+" /></strong>
              <span>Years of toxicology<br />expertise</span>
            </div>
          </div>
          <div data-reveal="right">
            <div className="eyebrow">Who we are</div>
            <h2 style={{ fontSize: 'clamp(28px,3.4vw,42px)', marginBottom: 18 }}>
              Toxicology specialists for the <span className="grad-text">medical device industry</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16.5, marginBottom: 14 }}>
              BIOTOX by MedReg is a dedicated toxicology and biological safety practice. We help medical device manufacturers prove that their products are biologically safe — and get that proof accepted by regulators the first time.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: 16.5 }}>
              Our internationally certified toxicologists prepare Biological Evaluation Plans and Reports, toxicological risk assessments and in-silico safety assessments for devices of every risk class, from skin-contact accessories to long-term implants.
            </p>
            <ul className="check-list two-col">
              <li>DABT, ERT &amp; UKRT certified</li>
              <li>ISO 10993-1:2025 aligned</li>
              <li>Class I, II &amp; III devices</li>
              <li>FDA, EU MDR &amp; CDSCO</li>
              <li>Non-animal approaches</li>
              <li>Response within 2 hours</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="grid grid-2">
            <div className="feature" data-reveal="up">
              <span className="icon-box"><Icon name="target" /></span>
              <h3>Our mission</h3>
              <p>To make biological safety evaluation faster, more scientific and less dependent on animal testing — so that safe medical devices reach patients sooner, in every market.</p>
            </div>
            <div className="feature" data-reveal="up" style={{ ['--d' as string]: 100 }}>
              <span className="icon-box"><Icon name="eye" /></span>
              <h3>Our vision</h3>
              <p>To be the toxicology partner manufacturers trust for regulator-ready biological safety documentation, wherever in the world they choose to sell.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center" data-reveal="up">
            <div className="eyebrow">What drives us</div>
            <h2>Our <em>values</em></h2>
          </div>
          <div className="grid grid-4">
            {VALUES.map((v, i) => (
              <div className="feature" key={v.title} data-reveal="up" style={{ ['--d' as string]: i * 90 }}>
                <span className="icon-box"><Icon name={v.icon} /></span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stats-band" data-reveal="zoom">
            <div className="grid">
              <div><div className="stat-num"><Counter target={20} suffix="+" /></div><div className="stat-lbl">Years of regulatory toxicology</div></div>
              <div><div className="stat-num">DABT</div><div className="stat-lbl">ERT · UKRT certified</div></div>
              <div><div className="stat-num">I–III</div><div className="stat-lbl">All device risk classes</div></div>
              <div><div className="stat-num">2 hrs</div><div className="stat-lbl">Expert response time</div></div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }} data-reveal="up">
            <Link href="/expertise" className="btn btn-primary">Explore our services <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
