import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/variants';

export default function SystemStatus() {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-40 hidden lg:block"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ delay: 2 }}
    >
      <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-muted space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="text-text-secondary">SYSTEM STATUS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
          <span className="text-emerald-400">ONLINE</span>
        </div>
        <div className="text-text-muted/60">
          <span className="text-text-muted">CURRENTLY BUILDING</span>
        </div>
        <div className="text-accent/70">
          AI / BACKEND SYSTEMS
        </div>
      </div>
    </motion.div>
  );
}
