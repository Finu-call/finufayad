import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { num: "01", label: "Engineer" },
  { num: "02", label: "Creative Developer" },
  { num: "03", label: "Builder" },
  { num: "04", label: "Problem Solver" }
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Circuit drawing animation based on scroll
  const pathLength = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  return (
    <section id="about" ref={containerRef} className="relative w-full min-h-screen bg-transparent py-32 overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <motion.div style={{ y, opacity }} className="flex flex-col">
            <h2 className="text-sm font-mono tracking-[0.3em] text-accent-blue mb-4">WHO AM I?</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white mb-8">
              Engineering ideas <br/>
              <span className="text-white/40">into digital experiences.</span>
            </h3>
            
            <p className="text-lg text-white/70 font-sans font-light leading-relaxed mb-8 max-w-xl">
              I am Finu Fayad K, a B.Tech Electrical and Electronics Engineering student who enjoys building digital products, experimenting with technology, robotics, creative design, and innovative ideas.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-4">
              {stats.map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <div className="text-3xl font-display font-bold text-white group-hover:text-accent-blue transition-colors duration-300">
                    {stat.num}
                  </div>
                  <div className="text-xs font-mono text-white/50 tracking-widest mt-2">
                    {stat.label}
                  </div>
                  <div className="w-full h-[1px] bg-white/10 mt-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-0 bg-accent-blue group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Circuit Graphic */}
          <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end">
            <svg viewBox="0 0 400 400" className="w-full max-w-[400px] h-auto drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              {/* Circuit Grid Background */}
              <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

              {/* Main Animated Circuit Paths */}
              <motion.path 
                d="M 20 200 L 140 200 L 170 140 L 230 140 L 260 200 L 380 200" 
                fill="none" 
                stroke="#00f0ff" 
                strokeWidth="2"
                style={{ pathLength }}
              />
              <motion.path 
                d="M 200 20 L 200 140 M 200 260 L 200 380" 
                fill="none" 
                stroke="#7000ff" 
                strokeWidth="2"
                style={{ pathLength }}
              />
              <motion.path 
                d="M 72 72 L 140 140 M 328 328 L 260 260 M 72 328 L 140 260 M 328 72 L 260 140" 
                fill="none" 
                stroke="#a855f7" 
                strokeWidth="1.5"
                style={{ pathLength }}
                strokeDasharray="4 4"
              />

              {/* Glowing Nodes */}
              {[
                {cx: 140, cy: 200}, {cx: 260, cy: 200}, {cx: 170, cy: 140}, {cx: 230, cy: 140},
                {cx: 140, cy: 140}, {cx: 260, cy: 260}, {cx: 140, cy: 260}, {cx: 260, cy: 140}
              ].map((node, i) => (
                <motion.circle 
                  key={i}
                  cx={node.cx} 
                  cy={node.cy} 
                  r="4" 
                  fill="#00f0ff"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="animate-pulse"
                />
              ))}

              {/* Center Core */}
              <motion.circle 
                cx="200" 
                cy="200" 
                r="15" 
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="box-glow"
              />
              <circle cx="200" cy="200" r="5" fill="#fff" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
