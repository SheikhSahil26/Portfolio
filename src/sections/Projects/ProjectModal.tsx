import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../types';
import { X, ExternalLink, Globe } from 'lucide-react';
import { useCursor } from '../../components/cursor/CustomCursor';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { setCursorVariant } = useCursor();

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[61] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-surface border border-white/5"
              initial={{ y: 60, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 60, scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              data-lenis-prevent
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-surface/95 backdrop-blur-sm border-b border-white/5 px-8 py-6 flex items-start justify-between">
                <div>
                  <span className="font-mono text-[0.6rem] tracking-[0.2em] text-accent">
                    PROJECT {project.number}
                  </span>
                  <h2 className="mt-2 text-xl md:text-2xl font-bold text-text-primary">
                    {project.title}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-text-muted hover:text-text-primary transition-colors p-2"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="px-8 py-8 space-y-10">
                {/* Problem */}
                {project.problem && (
                  <div>
                    <h3 className="font-mono text-[0.65rem] tracking-[0.2em] text-text-muted mb-3">
                      PROBLEM
                    </h3>
                    <p className="text-body-lg text-text-secondary leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}

                {/* Architecture */}
                {project.architecture && (
                  <div>
                    <h3 className="font-mono text-[0.65rem] tracking-[0.2em] text-text-muted mb-3">
                      ARCHITECTURE
                    </h3>
                    <p className="text-body text-text-secondary leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                )}

                {/* Technology */}
                <div>
                  <h3 className="font-mono text-[0.65rem] tracking-[0.2em] text-text-muted mb-4">
                    TECHNOLOGY
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[0.6rem] tracking-[0.12em] px-3 py-1.5 border border-accent/20 text-accent bg-accent/5"
                      >
                        {tech.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                {project.features && (
                  <div>
                    <h3 className="font-mono text-[0.65rem] tracking-[0.2em] text-text-muted mb-4">
                      KEY FEATURES
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-body text-text-secondary"
                        >
                          <span className="text-accent mt-1.5 text-[0.5rem]">▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Engineering Challenges */}
                {project.challenges && (
                  <div>
                    <h3 className="font-mono text-[0.65rem] tracking-[0.2em] text-text-muted mb-4">
                      ENGINEERING CHALLENGES
                    </h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-body text-text-secondary"
                        >
                          <span className="font-mono text-[0.6rem] text-text-muted mt-0.5">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.15em] text-text-secondary hover:text-accent transition-colors px-4 py-3 border border-white/10 hover:border-accent/30"
                      onMouseEnter={() => setCursorVariant('hover')}
                      onMouseLeave={() => setCursorVariant('default')}
                    >
                      <Globe size={14} />
                      GITHUB
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.15em] text-accent px-4 py-3 border border-accent/30 bg-accent/5 hover:bg-accent/10 transition-colors"
                      onMouseEnter={() => setCursorVariant('hover')}
                      onMouseLeave={() => setCursorVariant('default')}
                    >
                      <ExternalLink size={14} />
                      LIVE DEMO
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
