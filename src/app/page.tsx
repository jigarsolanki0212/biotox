import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Counter from '@/components/Counter';
import FaqAccordion from '@/components/FaqAccordion';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import ServiceCard from '@/components/ServiceCard';
import CtaBand from '@/components/CtaBand';
import { faqs, services, advantages, devices } from '@/lib/data';
import { siteConfig, getFaqSchema, getBreadcrumbSchema, getServiceSchema } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: { absolute: 'BIOTOX by MedReg — Expert Toxicology for Medical Devices' },
  description:
    'Medical device toxicology by DABT · ERT · UKRT certified experts: ISO 10993 biocompatibility, BEP/BER, toxicological risk assessment and global compliance.',
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: 'BIOTOX by MedReg — Expert Toxicology',
    description:
      'Expert toxicology and biological safety evaluation for medical devices — biocompatibility, BEP/BER, risk assessment, and global regulatory compliance.',
    url: siteConfig.url,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'BIOTOX by MedReg' }],
  },
};

const MARQUEE = [
  ['flask', 'ISO 10993-1:2025'],
  ['shield', 'US FDA'],
  ['globe', 'EU MDR 2017/745'],
  ['award', 'CDSCO'],
  ['clipboard', 'OECD GLP'],
  ['target', 'ISO 17025'],
  ['award', 'NABL'],
  ['shield', 'ISO 14971'],
  ['lungs', 'ISO 18562-1:2024'],
  ['tooth', 'ISO 7405:2025'],
  ['globe', 'Gulf & ASEAN'],
];

const FLOW = [
  { title: 'Plan', tag: 'BEP', desc: 'Device categorisation, endpoint mapping and a risk-based test strategy.' },
  { title: 'Characterise', tag: 'E&L · Testing', desc: 'Chemical characterisation and only the biological tests that add information.' },
  { title: 'Assess', tag: 'TRA · QSAR', desc: 'Quantitative toxicological risk assessment of every constituent.' },
  { title: 'Report', tag: 'BER', desc: 'A regulator-ready biological safety conclusion for your submission.' },
];

export default function HomePage() {
  return (
    <>
      <JsonLd schema={getFaqSchema(faqs)} />
      <JsonLd schema={getBreadcrumbSchema([{ name: 'Home', item: '/' }])} />
      <JsonLd schema={getServiceSchema(services)} />

      {/* ───────── Hero ───────── */}
      <section className="hero" id="hero">
        <div className="aurora" aria-hidden="true"><span className="a1" /><span className="a2" /><span className="a3" /></div>
        <div className="dot-grid" aria-hidden="true" />
        <div className="container hero-grid">
          <div>
            <div className="hero-kicker fade-up">
              <b>NEW</b> ISO 10993-1:2025 &amp; ISO 7405:2025 ready
            </div>
            <h1>
              <span className="line"><span style={{ ['--i' as string]: 0 }}>Expert <em>Toxicology.</em></span></span>
              <span className="line"><span style={{ ['--i' as string]: 1 }}>Ensuring Safety.</span></span>
              <span className="line"><span style={{ ['--i' as string]: 2 }}>Enabling Compliance.</span></span>
            </h1>
            <p className="lead fade-up" style={{ ['--d' as string]: '280ms' }}>
              Smarter toxicology for better regulatory decisions — delivering comprehensive biological safety evaluation for medical devices worldwide, backed by 20+ years of expertise, global recognition, and regulator-compliance solutions.
            </p>
            <div className="hero-cta fade-up" style={{ ['--d' as string]: '380ms' }}>
              <Link href="/contact" className="btn btn-primary">
                Get in Touch <Icon name="arrow" />
              </Link>
              <Link href="/expertise" className="btn btn-ghost">
                Explore Services
              </Link>
            </div>
            <div className="hero-trust fade-up" style={{ ['--d' as string]: '480ms' }}>
              <div className="avatars" aria-hidden="true">
                <span style={{ background: '#1548AB' }}>DABT</span>
                <span style={{ background: '#017C77' }}>ERT</span>
                <span style={{ background: '#2563EB' }}>UKRT</span>
              </div>
              <p>
                <strong>Certified toxicologists</strong>
                Recognised by FDA, EU MDR, UK &amp; CDSCO reviewers
              </p>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hv-frame hv-main">
              <Image src="https://images.unsplash.com/photo-1748261348213-62f4c399bb72?auto=format&fit=crop&w=1200&q=75" alt="" fill preload sizes="(max-width:980px) 90vw, 480px" />
            </div>
            <div className="hv-frame hv-side">
              <Image src="https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" fill sizes="(max-width:980px) 60vw, 320px" />
            </div>
            <div className="hv-emblem">
              <Image src="/images/logo-mark.webp" alt="" width={62} height={62} />
            </div>
            <div className="hv-badge hv-b1">
              <span className="icon-box"><Icon name="award" /></span>
              <div><div className="num">20+</div><div className="lbl">Years of<br />expertise</div></div>
            </div>
            <div className="hv-badge hv-b2">
              <span className="icon-box"><Icon name="layers" /></span>
              <div><div className="num">I–III</div><div className="lbl">All device<br />risk classes</div></div>
            </div>
            <div className="hv-badge hv-b3">
              <span className="icon-box"><Icon name="shield" /></span>
              <div><div className="num">DABT</div><div className="lbl">Certified<br />toxicologist</div></div>
            </div>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true"><i />Scroll</div>
      </section>

      {/* ───────── Standards marquee ───────── */}
      <div className="marquee" aria-label="Standards and regulators we work with">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map(([icon, label], i) => (
            <span className="marquee-item" key={i} aria-hidden={i >= MARQUEE.length}>
              <Icon name={icon} /> {label}
            </span>
          ))}
        </div>
      </div>

      {/* ───────── About ───────── */}
      <section className="section" id="about">
        <div className="container split">
          <div className="split-media" data-reveal="left">
            <div className="main-img">
              <Image src="https://images.pexels.com/photos/7651804/pexels-photo-7651804.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Biological safety evaluation in an accredited laboratory" width={800} height={1000} style={{ height: '100%' }} sizes="(max-width:980px) 90vw, 560px" />
            </div>
            <div className="sub-img">
              <Image src="https://images.pexels.com/photos/8730987/pexels-photo-8730987.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Biological evaluation documentation review" width={400} height={400} style={{ height: '100%' }} sizes="260px" />
            </div>
            <div className="exp-badge">
              <strong><Counter target={20} suffix="+" /></strong>
              <span>Years of toxicology<br />expertise</span>
            </div>
          </div>
          <div data-reveal="right">
            <div className="eyebrow">About BIOTOX by MedReg</div>
            <h2 style={{ fontSize: 'clamp(30px,3.8vw,48px)', marginBottom: 18 }}>
              Let&apos;s Decode The <span className="grad-text">Regulations</span> Together
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 17 }}>
              Expert toxicology solutions for safe, compliant, successful products — smarter toxicology for better regulatory decisions, delivering comprehensive biological safety evaluation for medical devices worldwide.
            </p>
            <ul className="check-list">
              <li>DABT, ERT &amp; UKRT certified toxicologists</li>
              <li>Risk-based strategies that cut unnecessary testing</li>
              <li>One documentation strategy for FDA, EU MDR, CDSCO and beyond</li>
            </ul>
            <div className="mini-stats">
              <div><strong>DABT</strong><span>Certified toxicologist</span></div>
              <div><strong>I–III</strong><span>All device types</span></div>
              <div><strong><Counter target={10} /></strong><span>Specialist services</span></div>
            </div>
            <div style={{ marginTop: 32 }}>
              <Link href="/about" className="link-arrow">More about us <Icon name="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Services ───────── */}
      <section className="section alt" id="services">
        <div className="container">
          <div className="section-head-row">
            <div className="section-head" data-reveal="up">
              <div className="eyebrow">Core Services</div>
              <h2>Our <em>Expertise</em></h2>
              <p>Smarter toxicology for better regulatory decisions — covering the full spectrum of biological safety for medical devices from concept to market approval.</p>
            </div>
            <Link href="/expertise" className="btn btn-ghost" data-reveal="up">All services <Icon name="arrow" /></Link>
          </div>
          <div className="grid grid-3">
            {services.map((item, idx) => (
              <ServiceCard key={item.slug} item={item} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Process ───────── */}
      <section className="section" id="process">
        <div className="container">
          <div className="section-head center" data-reveal="up">
            <div className="eyebrow">How We Work</div>
            <h2>From <em>BEP</em> to <em>BER</em>, One Clear Path</h2>
            <p>End-to-end biological safety compliance as per ISO 10993 &amp; global regulations — from planning to final submission.</p>
          </div>
          <div className="flow">
            {FLOW.map((step, i) => (
              <div className="flow-step" key={step.title} data-reveal="up" style={{ ['--d' as string]: i * 120 }}>
                <div className="bubble">{String(i + 1).padStart(2, '0')}</div>
                <span className="tag" style={{ marginBottom: 12 }}>{step.tag}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 56 }} data-reveal="up">
            <Link href="/process" className="btn btn-primary">See the full BEP + BER process <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>

      {/* ───────── Stats ───────── */}
      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stats-band" data-reveal="zoom">
            <div className="grid">
              <div><div className="stat-num"><Counter target={20} suffix="+" /></div><div className="stat-lbl">Years of regulatory toxicology</div></div>
              <div><div className="stat-num"><Counter target={10} /></div><div className="stat-lbl">Specialist services</div></div>
              <div><div className="stat-num"><Counter target={9} /></div><div className="stat-lbl">Device categories covered</div></div>
              <div><div className="stat-num"><Counter target={7} suffix="+" /></div><div className="stat-lbl">Regulatory frameworks</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Why us (bento) ───────── */}
      <section className="section alt" id="why-us">
        <div className="container">
          <div className="section-head-row">
            <div className="section-head" data-reveal="up">
              <div className="eyebrow">Why Choose Us</div>
              <h2>Key Advantages of <em>BIOTOX by MedReg</em></h2>
              <p>Expert guidance at every step — from first documentation to final submission worldwide.</p>
            </div>
            <Link href="/advantages" className="btn btn-ghost" data-reveal="up">Why us <Icon name="arrow" /></Link>
          </div>
          <div className="bento">
            {advantages.map((a, i) => {
              const layout = ['b-span-4 photo', 'b-span-2 gradient', 'b-span-2', 'b-span-2 photo', 'b-span-2', 'b-span-6 photo'][i];
              const isPhoto = layout.includes('photo');
              return (
                <div key={a.title} className={`bento-item ${layout}`} data-reveal="up" style={{ ['--d' as string]: (i % 3) * 90 }}>
                  {isPhoto && <Image src={a.img} alt="" fill sizes="(max-width:980px) 100vw, 800px" />}
                  <span className="icon-box"><Icon name={a.icon} /></span>
                  <h3>{a.title}</h3>
                  <p style={{ maxWidth: 560 }}>{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Devices ───────── */}
      <section className="section" id="devices">
        <div className="container">
          <div className="section-head-row">
            <div className="section-head" data-reveal="up">
              <div className="eyebrow">Devices We Cover</div>
              <h2>Every Device Class. <em>Every Contact Type.</em></h2>
              <p>From skin-contact wearables to long-term implants — biocompatibility support across all risk classes and clinical applications.</p>
            </div>
            <Link href="/devices" className="btn btn-ghost" data-reveal="up">All {devices.length} categories <Icon name="arrow" /></Link>
          </div>
          <div className="grid grid-4">
            {devices.slice(0, 4).map((d, i) => (
              <Link href="/devices" key={d.title} className="device-tile" data-reveal="up" style={{ ['--d' as string]: i * 90 }}>
                <Image src={d.img} alt={d.title} fill sizes="(max-width:640px) 100vw, (max-width:1100px) 50vw, 300px" />
                <span className="icon-box"><Icon name={d.icon} /></span>
                <span className="tag">{d.tag}</span>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-head center" data-reveal="up">
            <div className="eyebrow">Frequently Asked Questions</div>
            <h2>Answers to <em>Key Regulatory &amp; Toxicology</em> Questions</h2>
            <p>Clear, authoritative insights into biocompatibility requirements, BEP/BER roadmaps, and non-animal testing strategies.</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <CtaBand />
      <ContactSection />
    </>
  );
}
