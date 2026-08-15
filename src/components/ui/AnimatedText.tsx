import { motion } from 'framer-motion';
import { textReveal } from '../../animations/variants';

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
}

export default function AnimatedText({
  text,
  className = '',
  as: Tag = 'span',
  delay = 0,
}: AnimatedTextProps) {
  return (
    <Tag className={`overflow-hidden block ${className}`}>
      <motion.span
        className="block"
        variants={textReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay }}
      >
        {text}
      </motion.span>
    </Tag>
  );
}

// Split text into words and animate each
export function AnimatedWords({
  text,
  className = '',
  as: Tag = 'span',
}: {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}) {
  const words = text.split(' ');

  return (
    <Tag className={`flex flex-wrap gap-x-[0.3em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
