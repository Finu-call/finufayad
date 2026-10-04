import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loader is active
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return (
    <div className="bg-dark text-white min-h-screen selection:bg-accent-violet selection:text-white relative">
      <CustomCursor />
      
      {/* Global Cinematic Video Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-dark">
        <div className="absolute top-1/2 left-1/2 w-[200vw] md:w-[150vw] h-[200vh] md:h-[150vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50 mix-blend-screen overflow-hidden">
          <iframe 
            src="https://www.youtube.com/embed/a9LDPn-MO4I?autoplay=1&mute=1&controls=0&loop=1&playlist=a9LDPn-MO4I&showinfo=0&modestbranding=1&disablekb=1&iv_load_policy=3" 
            className="w-full h-full scale-[1.3] md:scale-[1.1] pointer-events-none"
            allow="autoplay; encrypted-media" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/80 to-dark"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>
      
      <div className="relative z-10">
        {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Contact />
          </main>
        </>
      )}
      </div>
    </div>
  );
}

export default App;
