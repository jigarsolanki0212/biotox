import { LOGO_BASE64 } from '../assets/logo';

export const Footer = () => {
  return (
    <footer>
      <a href="#hero" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src={LOGO_BASE64} className="footer-logo" alt="BIOTOX Logo" />
      </a>
      <div className="footer-brand">BIOTOX <span>by MedReg</span></div>
      <div className="footer-right">Science · Safety · Compliance · www.medreg.in</div>
    </footer>
  );
};
