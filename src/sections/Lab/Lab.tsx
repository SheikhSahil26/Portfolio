import { motion } from 'framer-motion';
import { experiments } from '../../data/experiments';
import { useCursor } from '../../components/cursor/CustomCursor';
import SectionHeader from '../../components/ui/SectionHeader';
import { fadeInUp, staggerContainer } from '../../animations/variants';

export default function Lab() {
  const { setCursorVariant } = useCursor();

  return (
    <section id="lab" className="section-padding relative">
      <div className="section-container">
        <SectionHeader label="ENGINEERING LAB" number="04" />

        <motion.p
          className="text-text-secondary text-body-lg max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experimental projects and technical explorations in backend engineering,
          real-time systems, and AI.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {experiments.map((exp) => (
            <motion.article
              key={exp.id}
              variants={fadeInUp}
              className="bg-primary p-8 md:p-10 group cursor-pointer relative overflow-hidden"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              {/* Background number */}
              <span className="absolute -top-2 -right-2 font-mono text-[5rem] font-bold text-white/[0.02] group-hover:text-accent/[0.05] transition-colors duration-700 select-none">
                {exp.number}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[0.6rem] tracking-[0.2em] text-accent">
                    EXPERIMENT {exp.number}
                  </span>
                  <div className="flex-1 h-[1px] bg-white/5" />
                </div>

                <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-300 mb-3">
                  {exp.title}
                </h3>

                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.5rem] tracking-[0.12em] px-2 py-1 border border-white/5 text-text-muted group-hover:border-accent/20 group-hover:text-accent/60 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-accent/10 transition-colors duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
