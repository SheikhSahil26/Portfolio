import { useState } from 'react';
import { CursorProvider } from './components/cursor/CustomCursor';
import NoiseOverlay from './components/effects/NoiseOverlay';
import GridBackground from './components/effects/GridBackground';
import Navbar from './components/navigation/Navbar';
import SystemStatus from './components/ui/SystemStatus';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import TechConstellation from './sections/Skills/TechConstellation';
import SkillsGrid from './sections/Skills/SkillsGrid';
import Projects from './sections/Projects/Projects';
import Lab from './sections/Lab/Lab';
import Experience from './sections/Experience/Experience';
import Terminal from './sections/Terminal/Terminal';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import ResumeModal from './components/ui/ResumeModal';
import useLenis from './hooks/useLenis';

function App() {
  useLenis();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  return (
    <CursorProvider>
      {/* Global Effects */}
      <NoiseOverlay />
      <GridBackground />

      {/* Navigation */}
      <Navbar onOpenResume={handleOpenResume} />
      <SystemStatus />

      {/* Sections */}
      <main>
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <TechConstellation />
        <SkillsGrid />
        <Projects />
        <Lab />
        <Experience />
        <Terminal />
        <Contact />
      </main>

      <Footer />

      {/* Resume Preview Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </CursorProvider>
  );
}

export default App;
