import { motion, AnimatePresence } from 'framer-motion';
import { navItems, personalInfo } from '../../data/personal';
import { menuOverlay, menuItem, staggerContainer } from '../../animations/variants';
import { X, Download } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (href: string) => void;
  onOpenResume?: () => void;
}

export default function MobileMenu({ isOpen, onClose, onNavClick, onOpenResume }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-primary flex flex-col justify-center"
          variants={menuOverlay}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-text-primary p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {/* Menu Items */}
          <motion.div
            className="section-container"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                variants={menuItem}
                onClick={() => onNavClick(item.href)}
                className="block w-full text-left py-4 border-b border-white/5"
              >
                <span className="font-mono text-mono-sm text-accent mr-4">
                  0{i + 1}
                </span>
                <span className="text-display-lg font-bold text-text-primary tracking-tight">
                  {item.label}
                </span>
              </motion.button>
            ))}
            <motion.button
              variants={menuItem}
              onClick={() => {
                onClose();
                if (onOpenResume) onOpenResume();
              }}
              className="inline-flex items-center gap-3 mt-6 font-mono text-xs tracking-[0.2em] px-6 py-3 border border-accent/40 bg-accent/10 text-accent cursor-pointer"
            >
              <Download size={14} />
              VIEW CV / RESUME
            </motion.button>
          </motion.div>

          {/* Bottom Info */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 section-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="font-mono text-[0.6rem] tracking-[0.15em] text-text-muted">
              SAHIL SHEIKH — SOFTWARE ENGINEER
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
