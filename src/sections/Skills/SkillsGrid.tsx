import { motion } from 'framer-motion';
import { skillCategories } from '../../data/technologies';
import { useCursor } from '../../components/cursor/CustomCursor';
import SectionHeader from '../../components/ui/SectionHeader';
import { fadeInUp, staggerContainer } from '../../animations/variants';

export default function SkillsGrid() {
  const { setCursorVariant } = useCursor();

  return (
    <section id="skills-grid" className="section-padding relative">
      <div className="section-container">
        <SectionHeader label="SKILL SET" number="02.B" />

        <motion.p
          className="text-text-secondary text-lg md:text-xl max-w-2xl mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          A comprehensive breakdown of my technical toolkit — from core
          languages and frameworks to infrastructure, testing, and system design.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              className="group relative border border-white/[0.06] bg-white/[0.01] p-6 hover:border-white/[0.12] transition-all duration-500"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: category.color }}
                />
                <h3
                  className="font-mono text-[0.65rem] tracking-[0.2em] font-semibold"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between gap-2">
                    <span className="text-sm text-text-primary/90 font-medium">
                      {skill.name}
                    </span>
                    <span
                      className={`font-mono text-[0.5rem] tracking-[0.1em] uppercase px-2 py-0.5 rounded-sm shrink-0 ${
                        skill.level === 'core'
                          ? 'bg-accent/10 text-accent border border-accent/20'
                          : skill.level === 'proficient'
                            ? 'bg-white/[0.04] text-text-secondary border border-white/[0.08]'
                            : 'bg-transparent text-text-muted border border-white/[0.05]'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-700 ease-smooth"
                style={{ backgroundColor: `${category.color}40` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-6 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[
            { label: 'CORE', desc: 'Daily driver' },
            { label: 'PROFICIENT', desc: 'Strong experience' },
            { label: 'FAMILIAR', desc: 'Working knowledge' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="font-mono text-[0.5rem] tracking-[0.1em] text-text-muted">
                {item.label}
              </span>
              <span className="text-[0.55rem] text-text-muted/60">
                — {item.desc}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
