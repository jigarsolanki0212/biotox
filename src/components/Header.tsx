'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/expertise', label: 'Expertise' },
    { href: '/process', label: 'BEP + BER' },
    { href: '/advantages', label: 'Why Us' },
    { href: '/devices', label: 'Devices' },
    { href: '/standards', label: 'Standards' },
  ];

  return (
    <>
      <header id="siteHeader" className={isScrolled ? 'scrolled' : ''}>
        <div className="container nav-wrap">
          <Link href="/" className="logo" aria-label="BIOTOX by MedReg Home">
            <Image
              src="/images/logo-full.png"
              alt="BIOTOX by MedReg"
              width={220}
              height={50}
              priority
              className="logo-img"
              id="headerLogo"
            />
          </Link>

          <nav className="main-nav" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? 'active' : ''}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <a
            href="https://www.medreg.in"
            target="_blank"
            rel="noopener noreferrer"
            className="medreg-partner-logo"
            aria-label="Visit MedReg website"
          >
            <Image
              src="/images/medreg-logo.png"
              alt="MedReg"
              width={110}
              height={32}
              className="medreg-logo-light"
            />
            <Image
              src="/images/medreg-logo-dark.png"
              alt="MedReg"
              width={110}
              height={32}
              className="medreg-logo-dark"
            />
          </a>

          <div className="header-actions">
            <ThemeToggle />
            <Link href="/contact" className="btn btn-primary btn-sm">
              Enquire Now →
            </Link>
            <button
              className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
              id="hamburger"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer navigation */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} id="mobileNav">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMobileMenuOpen(false)}
          className="btn btn-primary"
          style={{ marginTop: '16px', display: 'inline-block', textAlign: 'center' }}
        >
          Enquire Now →
        </Link>
      </div>
    </>
  );
}
