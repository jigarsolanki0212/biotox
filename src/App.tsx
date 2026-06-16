import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MobileDrawer } from './components/MobileDrawer';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { Process } from './components/Process';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DeviceCategories } from './components/DeviceCategories';
import { Standards } from './components/Standards';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize intersection observer for scroll-reveal animations
  useIntersectionObserver();

  // Toggle mobile menu drawer
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close mobile menu drawer
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent scroll when mobile drawer is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MobileDrawer isOpen={isMenuOpen} onClose={closeMenu} />
      <main>
        <Hero />
        <Expertise />
        <Process />
        <WhyChooseUs />
        <DeviceCategories />
        <Standards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
