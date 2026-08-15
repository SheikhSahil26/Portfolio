import { useCursor } from '../cursor/CustomCursor';

interface TechTagProps {
  label: string;
  variant?: 'default' | 'accent' | 'muted';
}

export default function TechTag({ label, variant = 'default' }: TechTagProps) {
  const { setCursorVariant } = useCursor();

  const baseClasses = 'font-mono text-[0.65rem] tracking-[0.15em] uppercase px-3 py-1.5 border transition-all duration-300';

  const variantClasses = {
    default: 'border-white/10 text-text-secondary hover:border-accent/40 hover:text-accent',
    accent: 'border-accent/30 text-accent bg-accent/5',
    muted: 'border-white/5 text-text-muted',
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]}`}
      onMouseEnter={() => setCursorVariant('hover')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      {label}
    </span>
  );
}
