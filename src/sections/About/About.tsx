import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal';
import { staggerContainer, fadeInUp } from '../../animations/variants';
import SectionHeader from '../../components/ui/SectionHeader';

const profileData = [
  { label: 'NAME', value: personalInfo.name.toUpperCase() },
  { label: 'ROLE', value: personalInfo.role.toUpperCase() },
  { label: 'EDUCATION', value: personalInfo.education.toUpperCase() },
  { label: 'INSTITUTION', value: personalInfo.institution.toUpperCase() },
  { label: 'FOCUS', value: 'BACKEND · SYSTEM DESIGN · AI / ML' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <SectionHeader label="IDENTITY" number="01" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Profile Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {profileData.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeInUp}
                className="py-5 border-b border-white/5 group"
                custom={i}
              >
                <div className="font-mono text-[0.65rem] tracking-[0.2em] text-text-secondary mb-2">
                  {item.label}
                </div>
                <div className="text-lg md:text-xl font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xl md:text-2xl lg:text-[1.75rem] text-text-secondary leading-relaxed font-light">
              {personalInfo.bio}
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="font-mono text-[0.6rem] tracking-[0.2em] text-accent">
                BASED IN INDIA
              </span>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: '5+', label: 'PROJECTS' },
                { value: '10+', label: 'TECHNOLOGIES' },
                { value: '1+', label: 'YEARS EXP' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-text-primary font-mono">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-mono text-[0.6rem] tracking-[0.2em] text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
