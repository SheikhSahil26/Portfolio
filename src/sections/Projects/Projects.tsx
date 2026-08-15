import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { useCursor } from '../../components/cursor/CustomCursor';
import SectionHeader from '../../components/ui/SectionHeader';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import ProjectModal from './ProjectModal';
import type { Project } from '../../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { setCursorVariant } = useCursor();

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <SectionHeader label="FEATURED WORK" number="03" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeInUp}
              className="group py-12 md:py-16 border-b border-white/5 cursor-pointer relative"
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setCursorVariant('project')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="font-mono text-4xl md:text-5xl font-bold text-white/5 group-hover:text-accent/20 transition-colors duration-500">
                    {project.number}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="lg:col-span-7">
                  <h3 className="text-heading font-bold text-text-primary group-hover:text-accent transition-colors duration-500 leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-body text-text-secondary max-w-xl">
                    {project.subtitle}
                  </p>
                </div>

                {/* Stack */}
                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[0.55rem] tracking-[0.1em] text-text-muted group-hover:text-text-secondary transition-colors duration-300"
                    >
                      {tech.toUpperCase()}
                      {tech !== project.stack[project.stack.length - 1] && (
                        <span className="ml-2 text-white/10">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent/40 group-hover:w-full transition-all duration-700 ease-smooth" />

              {/* Explore indicator */}
              <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                <span className="font-mono text-[0.6rem] tracking-[0.15em] text-accent">
                  EXPLORE
                </span>
                <span className="text-accent">→</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => {
          setSelectedProject(null);
          setCursorVariant('default');
        }}
      />
    </section>
  );
}
