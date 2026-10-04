import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark z-10 opacity-70"></div>
        <motion.div 
          animate={{ 
            x: mousePos.x * -1, 
            y: mousePos.y * -1 
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.2 }}
          className="absolute inset-0 bg-grid-pattern opacity-[0.03] scale-110"
        />
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-accent-blue/10 blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 50, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full bg-accent-violet/10 blur-[120px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm inline-flex items-center"
        >
          <span className="w-2 h-2 rounded-full bg-accent-blue mr-3 animate-pulse"></span>
          <span className="text-xs font-mono tracking-widest text-white/70 uppercase">
            Building ideas into reality.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          style={{
            x: mousePos.x * 1.5,
            y: mousePos.y * 1.5,
          }}
        >
          <h1 className="text-[12vw] sm:text-[10vw] md:text-8xl lg:text-[120px] font-display font-bold leading-[0.9] tracking-tighter text-white mb-2 text-glow">
            FINU
            <br />
            FAYAD K
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-base md:text-xl text-white/60 font-sans max-w-2xl font-light"
        >
          Electrical & Electronics Engineering Student <br className="hidden md:block" />
          <span className="text-white/90 font-medium">Developer • Creator • Robotics Enthusiast</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a 
            href="#skills"
            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold tracking-widest text-xs uppercase overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-accent-blue scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
            <span className="relative z-10 flex items-center">
              EXPLORE MY SKILLS
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="#contact"
            className="group px-8 py-4 border border-white/20 rounded-full font-bold tracking-widest text-xs uppercase text-white hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
          >
            LET'S CONNECT
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] font-mono tracking-widest text-white/40 mb-4 rotate-90 origin-left ml-4">SCROLL</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent-blue"
          />
        </div>
      </motion.div>
    </section>
  );
}
