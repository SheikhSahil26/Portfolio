import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal';
import { scrollTo } from '../../hooks/useLenis';
import { useCursor } from '../../components/cursor/CustomCursor';
import { staggerContainer, fadeInUp, fadeIn } from '../../animations/variants';
import { useIsMobile } from '../../hooks/useMediaQuery';
import useReducedMotion from '../../hooks/useReducedMotion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { setCursorVariant } = useCursor();
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  // ─── Particle Background ─────────────────────────────────────
  const animateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const count = isMobile ? 30 : 70;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10, 255, 231, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      const maxDist = isMobile ? 100 : 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(10, 255, 231, ${0.06 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    if (!reducedMotion) {
      draw();
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [isMobile, reducedMotion]);

  useEffect(() => {
    const cleanup = animateParticles();
    return cleanup;
  }, [animateParticles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, #050505 70%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 section-container text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Mono label */}
        <motion.div
          variants={fadeInUp}
          className="font-mono text-[0.7rem] tracking-[0.3em] text-text-secondary mb-8 md:mb-12"
        >
          SOFTWARE ENGINEER / FULL STACK DEVELOPER
        </motion.div>

        {/* Name */}
        <motion.div variants={fadeInUp}>
          <h1 className="text-display-xl font-extrabold tracking-tighter text-text-primary leading-[0.85]">
            <span className="block">{personalInfo.firstName}</span>
            <span className="block text-gradient">{personalInfo.lastName}</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="mt-8 md:mt-10 text-body-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Tech Tags */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 md:mt-14 flex flex-wrap justify-center gap-3"
        >
          {personalInfo.focus.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.65rem] tracking-[0.15em] px-4 py-2 border border-white/10 text-text-primary/70 hover:border-accent/30 hover:text-accent transition-all duration-300"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="group font-mono text-[0.7rem] tracking-[0.2em] px-8 py-4 bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all duration-300"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            EXPLORE MY WORK
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="font-mono text-[0.7rem] tracking-[0.2em] px-8 py-4 border border-white/10 text-text-secondary hover:border-white/30 hover:text-text-primary transition-all duration-300"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            CONTACT ME
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2 }}
      >
        <button
          onClick={() => scrollTo('#about')}
          className="flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors"
          onMouseEnter={() => setCursorVariant('hover')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          <span className="font-mono text-[0.55rem] tracking-[0.3em]">SCROLL</span>
          <ArrowDown size={14} className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
