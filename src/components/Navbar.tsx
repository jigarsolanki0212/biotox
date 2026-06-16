import { useTheme } from '../context/ThemeContext';
import { LOGO_BASE64 } from '../assets/logo';

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Navbar = ({ isMenuOpen, toggleMenu }: NavbarProps) => {
  const { toggleTheme } = useTheme();

  return (
    <nav>
      <div className="nav-logo">
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={LOGO_BASE64} className="nav-logo-img" alt="BIOTOX Logo" />
        </a>
        <div>
          <div className="brand-name">BIOTOX <span>by MedReg</span></div>
          <div className="brand-sub">Science · Safety · Compliance</div>
        </div>
      </div>
      <div className="nav-links">
        <a href="#expertise">Expertise</a>
        <a href="#process">BEP + BER</a>
        <a href="#advantages">Why Us</a>
        <a href="#devices">Devices</a>
        <a href="#standards">Standards</a>
      </div>
      <div className="nav-actions">
        <button id="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          <i className="ti ti-sun icon-sun"></i>
          <i className="ti ti-moon icon-moon"></i>
        </button>
        <a href="#contact" className="nav-cta">Enquire Now →</a>
        <button 
          id="menu-toggle" 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          <i className="ti ti-menu icon-menu"></i>
          <i className="ti ti-x icon-close"></i>
        </button>
      </div>
    </nav>
  );
};
