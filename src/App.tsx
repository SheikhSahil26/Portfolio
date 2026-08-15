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
import useLenis from './hooks/useLenis';

function App() {
  useLenis();

  return (
    <CursorProvider>
      {/* Global Effects */}
      <NoiseOverlay />
      <GridBackground />

      {/* Navigation */}
      <Navbar />
      <SystemStatus />

      {/* Sections */}
      <main>
        <Hero />
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
    </CursorProvider>
  );
}

export default App;
