import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Mail, Globe, Briefcase, GraduationCap, Code2, FolderGit2 } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { projects } from '../../data/projects';
import { experiences } from '../../data/experience';
import { skillCategories } from '../../data/technologies';
import { useCursor } from '../cursor/CustomCursor';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { setCursorVariant } = useCursor();
  const [viewMode, setViewMode] = useState<'pdf' | 'document'>('pdf');
  const resumeUrl = personalInfo.resumeUrl || '/sahil_latest_cv_22_may.pdf';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[110] bg-black/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="fixed inset-0 z-[111] flex items-center justify-center p-2 sm:p-6 md:p-8 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl h-[92vh] bg-[#0A0A0A] border border-white/10 flex flex-col shadow-2xl pointer-events-auto overflow-hidden rounded-sm"
              initial={{ y: 50, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 50, scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Header */}
              <div className="bg-primary/95 border-b border-white/10 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-xs tracking-[0.2em] text-text-primary uppercase font-semibold">
                    RESUME PREVIEW — {personalInfo.name.toUpperCase()}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* View Mode Switcher */}
                  <div className="flex items-center bg-white/[0.05] border border-white/10 rounded p-0.5">
                    <button
                      onClick={() => setViewMode('document')}
                      className={`font-mono text-[0.6rem] tracking-wider px-2.5 py-1 rounded-xs transition-colors ${
                        viewMode === 'document'
                          ? 'bg-accent/20 text-accent font-semibold'
                          : 'text-text-muted hover:text-text-primary'
                      }`}
                    >
                      PREVIEW
                    </button>
                    <button
                      onClick={() => setViewMode('pdf')}
                      className={`font-mono text-[0.6rem] tracking-wider px-2.5 py-1 rounded-xs transition-colors ${
                        viewMode === 'pdf'
                          ? 'bg-accent/20 text-accent font-semibold'
                          : 'text-text-muted hover:text-text-primary'
                      }`}
                    >
                      PDF EMBED
                    </button>
                  </div>

                  {/* Open in new tab */}
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.15em] text-text-secondary hover:text-accent px-3 py-1.5 border border-white/10 hover:border-accent/30 transition-colors"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <ExternalLink size={12} />
                    FULLSCREEN
                  </a>

                  {/* Download PDF */}
                  <a
                    href={resumeUrl}
                    download="sahil_latest_cv_22_may.pdf"
                    className="flex items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.15em] text-accent px-3.5 py-1.5 border border-accent/40 bg-accent/10 hover:bg-accent/20 transition-colors"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <Download size={12} />
                    DOWNLOAD PDF
                  </a>

                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="p-1.5 text-text-secondary hover:text-text-primary transition-colors ml-1"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                    aria-label="Close resume preview"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-surface/50 font-sans" data-lenis-prevent>
                {viewMode === 'document' ? (
                  /* Formatted Resume Preview Document */
                  <div className="max-w-3xl mx-auto bg-[#070707] border border-white/10 p-6 sm:p-10 text-text-primary shadow-xl space-y-8">
                    {/* CV Header */}
                    <div className="border-b border-white/10 pb-6">
                      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
                        {personalInfo.name}
                      </h1>
                      <p className="font-mono text-sm tracking-widest text-accent mt-1">
                        {personalInfo.role.toUpperCase()}
                      </p>

                      <div className="flex flex-wrap gap-4 mt-4 font-mono text-xs text-text-secondary">
                        <span className="flex items-center gap-1.5">
                          <Mail size={13} className="text-accent" />
                          {personalInfo.email}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Globe size={13} className="text-accent" />
                          github.com/SheikhSahil26
                        </span>
                        <span className="flex items-center gap-1.5">
                          <ExternalLink size={13} className="text-accent" />
                          linkedin.com/in/sahil-sheikh
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    <div>
                      <h2 className="font-mono text-xs tracking-[0.2em] text-accent uppercase font-semibold mb-2 flex items-center gap-2">
                        <span>SUMMARY</span>
                        <div className="flex-1 h-[1px] bg-white/10" />
                      </h2>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {personalInfo.bio}
                      </p>
                    </div>

                    {/* Technical Skills */}
                    <div>
                      <h2 className="font-mono text-xs tracking-[0.2em] text-accent uppercase font-semibold mb-3 flex items-center gap-2">
                        <Code2 size={14} />
                        <span>TECHNICAL SKILLS</span>
                        <div className="flex-1 h-[1px] bg-white/10" />
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                        {skillCategories.map((cat) => (
                          <div key={cat.title} className="p-2.5 border border-white/5 bg-white/[0.01]">
                            <span className="text-accent font-semibold block mb-1 text-[0.65rem] tracking-wider">
                              {cat.title}
                            </span>
                            <span className="text-text-secondary text-[0.75rem]">
                              {cat.skills.map((s) => s.name).join(' · ')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <h2 className="font-mono text-xs tracking-[0.2em] text-accent uppercase font-semibold mb-3 flex items-center gap-2">
                        <Briefcase size={14} />
                        <span>EXPERIENCE</span>
                        <div className="flex-1 h-[1px] bg-white/10" />
                      </h2>
                      <div className="space-y-4">
                        {experiences.filter(e => e.type === 'work').map((exp) => (
                          <div key={exp.id} className="border-l-2 border-accent/40 pl-4 py-1">
                            <div className="flex justify-between items-start flex-wrap gap-1">
                              <h3 className="font-bold text-sm text-text-primary">{exp.title}</h3>
                              <span className="font-mono text-xs text-accent">{exp.period}</span>
                            </div>
                            <p className="font-mono text-xs text-text-secondary">{exp.organization}</p>
                            {exp.description && (
                              <p className="text-xs text-text-muted mt-1 leading-relaxed">{exp.description}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Featured Projects */}
                    <div>
                      <h2 className="font-mono text-xs tracking-[0.2em] text-accent uppercase font-semibold mb-3 flex items-center gap-2">
                        <FolderGit2 size={14} />
                        <span>KEY PROJECTS</span>
                        <div className="flex-1 h-[1px] bg-white/10" />
                      </h2>
                      <div className="space-y-4">
                        {projects.map((proj) => (
                          <div key={proj.id} className="p-3 border border-white/5 bg-white/[0.01]">
                            <div className="flex justify-between items-start flex-wrap gap-1 mb-1">
                              <h3 className="font-bold text-sm text-text-primary">{proj.title}</h3>
                            </div>
                            <p className="text-xs text-text-secondary mb-2">{proj.description}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {proj.stack.map((t) => (
                                <span key={t} className="font-mono text-[0.6rem] px-2 py-0.5 border border-white/10 text-accent">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Education */}
                    <div>
                      <h2 className="font-mono text-xs tracking-[0.2em] text-accent uppercase font-semibold mb-3 flex items-center gap-2">
                        <GraduationCap size={14} />
                        <span>EDUCATION</span>
                        <div className="flex-1 h-[1px] bg-white/10" />
                      </h2>
                      <div className="space-y-4">
                        {experiences.filter(e => e.type === 'education').map((edu) => (
                          <div key={edu.id} className="border-l-2 border-white/20 pl-4 py-1">
                            <div className="flex justify-between items-start flex-wrap gap-1">
                              <h3 className="font-bold text-sm text-text-primary">{edu.title}</h3>
                              <span className="font-mono text-xs text-text-secondary">{edu.period}</span>
                            </div>
                            <p className="font-mono text-xs text-text-muted">{edu.organization}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Raw PDF Embed Frame */
                  <div className="w-full h-full min-h-[500px] bg-surface relative">
                    <iframe
                      src={`${resumeUrl}#toolbar=0`}
                      className="w-full h-full min-h-[550px] border-none"
                      title="Sahil Sheikh Resume PDF"
                    />
                  </div>
                )}
              </div>

              {/* Footer Bar */}
              <div className="bg-primary/95 border-t border-white/10 px-5 py-2.5 flex items-center justify-between text-text-muted font-mono text-[0.6rem] tracking-widest shrink-0">
                <span>SAHIL SHEIKH — CURRICULUM VITAE</span>
                <span className="hidden sm:inline">PRESS ESC OR CLICK X TO CLOSE</span>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
