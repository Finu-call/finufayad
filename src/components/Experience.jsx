import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TIMELINE = [
  {
    title: "B.Tech Electrical & Electronics Engineering",
    subtitle: "College of Engineering Cherthala",
    type: "Education"
  },
  {
    title: "Technology & Development Projects",
    subtitle: "Web, Apps, and AI Integrations",
    type: "Experience"
  },
  {
    title: "Robotics & Embedded Systems",
    subtitle: "IoT, Microcontrollers, Prototyping",
    type: "Experience"
  },
  {
    title: "Creative Design & Content Creation",
    subtitle: "UI/UX, Video Editing, Posters",
    type: "Creative"
  },
  {
    title: "Ethical Hacking Fundamentals",
    subtitle: "Security concepts & application",
    type: "Learning"
  },
  {
    title: "Internship",
    subtitle: "KSEB 110/11 kV Substation, Kinalur",
    type: "Experience"
  }
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="experience" ref={containerRef} className="relative w-full py-32 bg-transparent">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-sm font-mono tracking-[0.3em] text-accent-violet mb-16 text-center">THE JOURNEY</h2>

        <div className="relative">
          {/* Glowing Line Background */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>
          
          {/* Active Glowing Path */}
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-accent-violet -translate-x-1/2 origin-top box-glow"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>

          <div className="flex flex-col space-y-24 py-12">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-dark border-2 border-accent-violet -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-white"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                    />
                  </div>

                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="expandable group"
                    >
                      <span className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">
                        {item.type}
                      </span>
                      <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-white/60 font-light">
                        {item.subtitle}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
