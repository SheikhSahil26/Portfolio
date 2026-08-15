import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/variants';
import { useCursor } from '../../components/cursor/CustomCursor';
import { scrollTo } from '../../hooks/useLenis';

export default function Footer() {
  const { setCursorVariant } = useCursor();

  return (
    <footer className="relative border-t border-white/5">
      <div className="section-container py-12 md:py-16">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <button
              onClick={() => scrollTo(0)}
              className="font-mono text-[0.7rem] tracking-[0.2em] text-text-primary hover:text-accent transition-colors duration-300"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              SAHIL.SHEIKH
            </button>
            <span className="hidden md:block w-[1px] h-4 bg-white/10" />
            <span className="font-mono text-[0.6rem] tracking-[0.15em] text-text-muted">
              SOFTWARE ENGINEER
            </span>
          </div>

          {/* Right */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <span className="font-mono text-[0.55rem] tracking-[0.15em] text-text-muted">
              © {new Date().getFullYear()}
            </span>
            <span className="hidden md:block w-[1px] h-4 bg-white/10" />
            <span className="font-mono text-[0.55rem] tracking-[0.15em] text-text-muted">
              BUILT WITH REACT + TYPESCRIPT
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
