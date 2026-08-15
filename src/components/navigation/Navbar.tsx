import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems, personalInfo } from '../../data/personal';
import { scrollTo } from '../../hooks/useLenis';
import { useCursor } from '../cursor/CustomCursor';
import MobileMenu from './MobileMenu';
import { Menu } from 'lucide-react';

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setCursorVariant } = useCursor();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);

      if (currentY > 300) {
        setVisible(currentY < lastScrollY);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
              scrolled ? 'bg-primary/80 backdrop-blur-sm' : 'bg-transparent'
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-container flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <button
                onClick={() => scrollTo(0)}
                className="font-mono text-[0.7rem] tracking-[0.2em] text-text-primary hover:text-accent transition-colors duration-300"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                SAHIL.SHEIKH
              </button>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="font-mono text-[0.65rem] tracking-[0.2em] text-text-secondary hover:text-accent transition-colors duration-300 relative group"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
                <button
                  onClick={() => onOpenResume ? onOpenResume() : window.open(personalInfo.resumeUrl || '/sahil_latest_cv_22_may.pdf', '_blank')}
                  className="font-mono text-[0.65rem] tracking-[0.15em] px-3 py-1.5 border border-accent/40 text-accent hover:bg-accent/10 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  RESUME
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-text-primary p-2"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onNavClick={handleNavClick}
        onOpenResume={onOpenResume}
      />
    </>
  );
}
