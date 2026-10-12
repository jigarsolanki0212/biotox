import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroBackground from '@/components/HeroBackground';
import Counter from '@/components/Counter';
import FaqAccordion from '@/components/FaqAccordion';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import { faqs } from '@/lib/data';
import { siteConfig, getFaqSchema, getBreadcrumbSchema } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'BIOTOX by MedReg — Expert Toxicology',
  description:
    'Expert toxicology and biological safety evaluation for medical devices — biocompatibility, BEP/BER, risk assessment, and global regulatory compliance.',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: 'BIOTOX by MedReg — Expert Toxicology',
    description:
      'Expert toxicology and biological safety evaluation for medical devices — biocompatibility, BEP/BER, risk assessment, and global regulatory compliance.',
    url: siteConfig.url,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'BIOTOX by MedReg' }],
  },
};

export default function HomePage() {
  const faqSchema = getFaqSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Home', item: '/' }]);

  return (
    <>
      <JsonLd schema={faqSchema} />
      <JsonLd schema={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="hero" id="hero">
        <HeroBackground />
        <div className="container hero-grid">
          <div className="reveal in">
            <div className="hero-badges">
              <span className="badge-pill">ISO 10993</span>
              <span className="badge-pill">FDA</span>
              <span className="badge-pill">EU MDR</span>
              <span className="badge-pill">CDSCO</span>
            </div>
            <h1>
              Expert <span className="accent-word">Toxicology.</span> Ensuring Safety. Enabling Compliance.
            </h1>
            <p className="lead">
              Smarter toxicology for better regulatory decisions — delivering comprehensive biological safety evaluation for medical devices worldwide, backed by 20+ years of expertise, global recognition, and regulator-compliance solutions.
            </p>
            <div className="chip-row">
              <span className="chip">
                <span className="dot" />
                DABT · ERT · UKRT Certified toxicologist
              </span>
              <span className="chip">
                <span className="dot" />
                ISO 10993-1:2025
              </span>
              <span className="chip">
                <span className="dot" />
                FDA · OECD GLP
              </span>
              <span className="chip">
                <span className="dot" />
                EU MDR · NABL
              </span>
              <span className="chip">
                <span className="dot" />
                20+ Years Expertise
              </span>
              <span className="chip">
                <span className="dot" />
                ISO 18562-1:2024
              </span>
              <span className="chip">
                <span className="dot" />
                ISO 7405:2025
              </span>
            </div>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
              <Link href="/process" className="btn btn-outline">
                Our Process →
              </Link>
            </div>
          </div>

          <div className="hero-visual reveal in">
            <div className="float-card fc1">
              <div className="num">20+</div>
              <div className="lbl">Years of Expertise</div>
            </div>
            <div className="float-card fc2">
              <div className="num">DABT</div>
              <div className="lbl">Certified Toxicologist</div>
            </div>
            <div className="float-card fc3">
              <div className="num">I–III</div>
              <div className="lbl">All Device Types</div>
            </div>
            <div className="hero-core">
              <div className="pulse-ring r1" />
              <div className="pulse-ring r2" />
              <div className="hero-core-inner">
                <Image
                  src="/images/logo-mark.png"
                  alt="BIOTOX by MedReg Emblem"
                  width={90}
                  height={90}
                  priority
                  className="hero-core-logo"
                  id="heroCoreLogo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <div className="container about-grid">
          <div className="reveal in">
            <div className="eyebrow">About BIOTOX by MedReg</div>
            <h2 style={{ fontSize: 'clamp(26px,3.2vw,38px)', fontWeight: 700, marginBottom: '16px' }}>
              Let&apos;s Decode The <em style={{ color: 'var(--primary)', fontStyle: 'normal' }}>Regulations</em> Together
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '16.5px', maxWidth: '480px' }}>
              Expert toxicology solutions for safe, compliant, successful products — smarter toxicology for better regulatory decisions, delivering comprehensive biological safety evaluation for medical devices worldwide.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <strong>
                  <Counter target={20} suffix="+" />
                </strong>
                <span>Years of Expertise</span>
              </div>
              <div className="about-stat">
                <strong>DABT</strong>
                <span>Certified Toxicologist</span>
              </div>
              <div className="about-stat">
                <strong>I–III</strong>
                <span>All Device Types</span>
              </div>
            </div>
          </div>

          <div className="about-illustration reveal in">
            <svg viewBox="0 0 420 420" fill="none" aria-hidden="true">
              <g className="orbit-ring">
                <circle cx="210" cy="210" r="170" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="2 10" />
                <circle cx="210" cy="40" r="5" fill="var(--accent)" />
                <circle cx="380" cy="210" r="4" fill="var(--primary)" />
              </g>
              <g className="orbit-ring rev">
                <circle cx="210" cy="210" r="128" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="1 8" />
                <circle cx="82" cy="210" r="4.5" fill="var(--primary)" />
              </g>
              <circle cx="210" cy="210" r="86" fill="var(--card)" stroke="var(--border)" />
              <path
                d="M188 170h20l14 20-14 20h-20l-14-20 14-20Z"
                stroke="var(--primary)"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <path
                d="m196 210 10 10 18-20"
                stroke="var(--accent)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x="210"
                y="252"
                textAnchor="middle"
                fontFamily="var(--font-poppins), sans-serif"
                fontSize="11"
                fontWeight="600"
                fill="var(--text-muted)"
              >
                ISO 10993-1:2025
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* FAQ Section (AEO & AI Search Powerhouse) */}
      <section className="section alt" id="faq">
        <div className="container">
          <div className="section-head center reveal in">
            <div className="eyebrow" style={{ justifyContent: 'center', width: '100%' }}>
              Frequently Asked Questions
            </div>
            <h2>
              Answers to <em>Key Regulatory &amp; Toxicology</em> Questions
            </h2>
            <p>
              Clear, authoritative insights into biocompatibility requirements, BEP/BER roadmaps, and non-animal testing strategies.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
