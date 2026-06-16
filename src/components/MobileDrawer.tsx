interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  return (
    <div id="mobile-drawer" className={`mobile-drawer ${isOpen ? 'active' : ''}`}>
      <div className="drawer-links">
        <a href="#expertise" onClick={onClose}>Expertise</a>
        <a href="#process" onClick={onClose}>BEP + BER</a>
        <a href="#advantages" onClick={onClose}>Why Us</a>
        <a href="#devices" onClick={onClose}>Devices</a>
        <a href="#standards" onClick={onClose}>Standards</a>
        <a href="#contact" className="drawer-cta" onClick={onClose}>Enquire Now →</a>
      </div>
    </div>
  );
};
