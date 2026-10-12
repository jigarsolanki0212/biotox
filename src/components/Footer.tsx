import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ color: '#fff' }} aria-label="BIOTOX by MedReg">
              <Image
                src="/images/logo-full.png"
                alt="BIOTOX by MedReg"
                width={200}
                height={46}
                className="logo-img"
                id="footerLogo"
                style={{ filter: 'brightness(0) invert(1) opacity(0.92)' }}
              />
            </Link>
            <p>
              Let&apos;s decode the regulations together — expert toxicology solutions for safe, compliant, successful products.
            </p>
          </div>
          <div className="footer-col">
            <h5>Navigate</h5>
            <Link href="/expertise">Expertise</Link>
            <Link href="/process">BEP + BER</Link>
            <Link href="/advantages">Why Us</Link>
            <Link href="/devices">Devices</Link>
            <Link href="/standards">Standards</Link>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <a href="mailto:enquiry@medregbiotox.com">enquiry@medregbiotox.com</a>
            <a href="tel:+918866461989">+91 88664 61989</a>
            <a href="tel:+919409406215">+91 94094 06215</a>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link href="/contact">Enquire Now</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Science · Safety · Compliance</span>
          <span id="year">© {currentYear} BIOTOX by MedReg. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
