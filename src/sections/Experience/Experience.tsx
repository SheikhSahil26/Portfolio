import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';
import SectionHeader from '../../components/ui/SectionHeader';
import { fadeInUp } from '../../animations/variants';
import { gsap, ScrollTrigger } from '../../animations/gsap';
import { useIsMobile } from '../../hooks/useMediaQuery';
import useReducedMotion from '../../hooks/useReducedMotion';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !lineRef.current || !timelineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: isMobile ? 1 : 0, scaleY: isMobile ? 0 : 1 },
        {
          scaleX: 1,
          scaleY: 1,
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, timelineRef);

    return () => ctx.revert();
  }, [isMobile, reducedMotion]);

  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        <SectionHeader label="EXPERIENCE" number="05" />

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div
            ref={lineRef}
            className={`absolute ${
              isMobile
                ? 'left-4 top-0 bottom-0 w-[1px] origin-top'
                : 'top-1/2 left-0 right-0 h-[1px] origin-left'
            } bg-white/10`}
          />

          {/* Timeline Items */}
          <div
            className={`${
              isMobile
                ? 'space-y-12 pl-12'
                : 'flex gap-8 justify-center items-start pt-16'
            }`}
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative ${isMobile ? '' : 'flex-1 max-w-md'}`}
              >
                {/* Dot */}
                <div
                  className={`absolute ${
                    isMobile
                      ? '-left-12 top-0 w-8 h-8'
                      : 'left-1/2 -translate-x-1/2 -top-16 w-8 h-8'
                  } flex items-center justify-center`}
                >
                  <div className="w-3 h-3 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                </div>

                {/* Card */}
                <div className="p-6 border border-white/5 bg-surface/50 group hover:border-accent/10 transition-colors duration-500">
                  <div className="flex items-center gap-2 mb-4">
                    {exp.type === 'work' ? (
                      <Briefcase size={14} className="text-accent" />
                    ) : (
                      <GraduationCap size={14} className="text-accent" />
                    )}
                    <span className="font-mono text-[0.55rem] tracking-[0.2em] text-accent uppercase">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-1">
                    {exp.title}
                  </h3>
                  <p className="font-mono text-[0.65rem] tracking-[0.1em] text-text-secondary mb-3">
                    {exp.organization}
                  </p>
                  <p className="font-mono text-[0.6rem] tracking-[0.15em] text-text-muted mb-4">
                    {exp.period}
                  </p>
                  {exp.description && (
                    <p className="text-sm text-text-muted leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
