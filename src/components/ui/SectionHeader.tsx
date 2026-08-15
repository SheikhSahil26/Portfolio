import { motion } from 'framer-motion';
import { lineExpand } from '../../animations/variants';

interface SectionHeaderProps {
  label: string;
  number?: string;
}

export default function SectionHeader({ label, number }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-16 md:mb-20">
      {number && (
        <span className="font-mono text-mono-sm text-accent tracking-widest">
          {number}
        </span>
      )}
      <span className="font-mono text-mono-sm uppercase tracking-[0.2em] text-text-secondary">
        {label}
      </span>
      <motion.div
        className="flex-1 h-[1px] bg-white/10 origin-left"
        variants={lineExpand}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
    </div>
  );
}
