import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal';
import { useCursor } from '../../components/cursor/CustomCursor';
import SectionHeader from '../../components/ui/SectionHeader';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import { Mail, Globe, ExternalLink, Send, CheckCircle } from 'lucide-react';

const socialIcons: Record<string, React.ReactNode> = {
  github: <Globe size={18} />,
  linkedin: <ExternalLink size={18} />,
  mail: <Mail size={18} />,
};

export default function Contact() {
  const { setCursorVariant } = useCursor();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    // Backend integration will go here
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        <SectionHeader label="CONTACT" number="07" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-display font-extrabold text-text-primary tracking-tight leading-[1.05]"
            >
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              <span className="text-gradient">INTERESTING.</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-body-lg text-text-secondary max-w-md"
            >
              Have a project in mind or want to discuss engineering?
              I'm always open to interesting conversations and collaborations.
            </motion.p>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="mt-10 space-y-4">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-300 group"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <span className="text-text-muted group-hover:text-accent transition-colors">
                    {socialIcons[social.icon]}
                  </span>
                  <span className="font-mono text-[0.7rem] tracking-[0.1em]">
                    {social.label.toUpperCase()}
                  </span>
                  <span className="text-text-muted group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <CheckCircle size={48} className="text-accent mb-6" />
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  MESSAGE SENT
                </h3>
                <p className="font-mono text-[0.7rem] tracking-[0.1em] text-text-secondary">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="mt-8 font-mono text-[0.65rem] tracking-[0.15em] text-accent hover:underline"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="font-mono text-[0.6rem] tracking-[0.2em] text-text-muted block mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/10 py-3 text-text-primary outline-none focus:border-accent transition-colors duration-300 text-body"
                    placeholder="Your name"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  />
                  {errors.name && (
                    <span className="font-mono text-[0.6rem] text-red-400 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="font-mono text-[0.6rem] tracking-[0.2em] text-text-muted block mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/10 py-3 text-text-primary outline-none focus:border-accent transition-colors duration-300 text-body"
                    placeholder="your@email.com"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  />
                  {errors.email && (
                    <span className="font-mono text-[0.6rem] text-red-400 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-[0.6rem] tracking-[0.2em] text-text-muted block mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-text-primary outline-none focus:border-accent transition-colors duration-300 text-body resize-none"
                    placeholder="Tell me about your project..."
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  />
                  {errors.message && (
                    <span className="font-mono text-[0.6rem] text-red-400 mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.2em] px-8 py-4 bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all duration-300 mt-8"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  SEND MESSAGE
                  <Send
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
