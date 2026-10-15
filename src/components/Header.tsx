'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import Icon from './Icon';
import { services } from '@/lib/data';
import { serviceHref } from '@/lib/service-details';
import { siteConfig } from '@/lib/seo-config';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/process', label: 'BEP + BER' },
  { href: '/advantages', label: 'Why Us' },
  { href: '/devices', label: 'Devices' },
  { href: '/standards', label: 'Standards' },
];

// Pages that open with a dark photo hero, where the header starts in its light-on-dark style.
const DARK_HERO = ['/about', '/expertise', '/process', '/advantages', '/devices', '/standards', '/contact', '/privacy-policy', '/terms'];

export default function Header({ showInsights = false }: { showInsights?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // The Services menu opens on hover / focus. After a link in it is clicked it is held shut until the pointer
  // leaves, otherwise it stays open over the new page (the pointer is still on it and the link keeps focus).
  const [megaClosed, setMegaClosed] = useState(false);
  const closeMega = () => {
    setMegaClosed(true);
    (document.activeElement as HTMLElement | null)?.blur();
  };
  const pathname = usePathname();
  const lastY = useRef(0);

  useEffect(() => {
    // One measurement per animation frame; hide only after a deliberate scroll down, show on any scroll up.
    let ticking = false;
    let down = 0;
    let up = 0;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const dy = y - lastY.current;
      lastY.current = y;
      setIsScrolled(y > 20);
      if (dy > 0) {
        down += dy;
        up = 0;
      } else if (dy < 0) {
        up -= dy;
        down = 0;
      }
      if (y < 400 || up > 20) setHidden(false);
      else if (down > 60) setHidden(true);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    lastY.current = window.scrollY;
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileMenuOpen ? 'hidden' : '';
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  const onDark = DARK_HERO.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <a href="#mainContent" className="skip-link">Skip to content</a>
      <header
        className={`site-header ${isScrolled ? 'scrolled' : ''} ${hidden && !mobileMenuOpen ? 'hidden' : ''} ${onDark && !mobileMenuOpen ? 'on-dark' : ''}`}
      >
        <div className="bar">
          <Link href="/" className="logo" aria-label="BIOTOX by MedReg home">
            <Image src="/images/logo-full.webp" alt="BIOTOX by MedReg" width={158} height={57} preload className="logo-img" id="headerLogo" />
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            <ul>
              <li className={`has-mega ${megaClosed ? 'mega-closed' : ''}`} onMouseLeave={() => setMegaClosed(false)}>
                <Link href="/expertise" className={isActive('/expertise') ? 'active' : ''} aria-haspopup="true" onClick={closeMega}>
                  Services <Icon name="chevron" className="caret" />
                </Link>
                <div className="mega" role="menu" onClick={(e) => (e.target as HTMLElement).closest('a') && closeMega()}>
                  <div className="mega-list">
                    {services.map((s) => (
                      <Link key={s.slug} href={serviceHref(s.slug)} role="menuitem">
                        <span className="icon-box"><Icon name={s.icon} /></span>
                        <span>
                          <strong>{s.title}</strong>
                          <small>{s.tag}</small>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/process" className="mega-feature">
                    <Image src="https://images.pexels.com/photos/7550538/pexels-photo-7550538.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" fill sizes="320px" />
                    <span className="tag">ISO 10993-1:2025</span>
                    <h4>BEP + BER, end to end</h4>
                    <p>From biological evaluation plan to a regulator-ready report.</p>
                    <span className="link-arrow" style={{ color: '#5EEAD4' }}>See the process <Icon name="arrow" /></span>
                  </Link>
                </div>
              </li>
              {(showInsights ? [...navLinks, { href: '/insights', label: 'Insights' }] : navLinks).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={isActive(link.href) ? 'active' : ''}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <Link href="/contact" className="btn btn-primary btn-sm">
              Enquire Now <Icon name="arrow" />
            </Link>
            <button
              className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobileNav"
              onClick={() => setMobileMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} id="mobileNav" data-lenis-prevent aria-hidden={!mobileMenuOpen}>
        <Link href="/" style={{ transitionDelay: '80ms' }}>Home</Link>
        <details>
          <summary style={{ transitionDelay: '130ms' }}>
            Services <Icon name="chevron" />
          </summary>
          <div className="sub">
            <Link href="/expertise">All services</Link>
            {services.map((s) => (
              <Link key={s.slug} href={serviceHref(s.slug)}>{s.title}</Link>
            ))}
          </div>
        </details>
        {(showInsights ? [...navLinks, { href: '/insights', label: 'Insights' }] : navLinks).map((link, i) => (
          <Link key={link.href} href={link.href} style={{ transitionDelay: `${180 + i * 50}ms` }}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-primary">
          Enquire Now <Icon name="arrow" />
        </Link>
        <div className="mobile-nav-contact">
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          <a href={`tel:${siteConfig.contact.phonePrimaryRaw}`}>{siteConfig.contact.phonePrimary}</a>
        </div>
      </div>
    </>
  );
}
