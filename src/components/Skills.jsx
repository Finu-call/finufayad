import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    title: "ENGINEERING",
    skills: ["Electrical & Electronics", "Circuit Design", "Embedded Systems", "Microcontrollers", "Basic Robotics"]
  },
  {
    title: "DEVELOPMENT",
    skills: ["HTML", "CSS", "JavaScript", "React", "Flutter", "Firebase", "Git & GitHub"]
  },
  {
    title: "CREATIVE",
    skills: ["UI Design", "Graphic Design", "Video Editing", "Content Creation", "Branding"]
  },
  {
    title: "TECHNOLOGY",
    skills: ["AI Tools", "Ethical Hacking Fundamentals", "Automation", "Creative Technology"]
  }
];

const ALL_SKILLS = SKILL_CATEGORIES.flatMap(c => c.skills);

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-32 bg-transparent overflow-hidden">
      
      {/* Horizontal Marquee */}
      <div className="w-full flex overflow-hidden py-12 border-y border-white/5 bg-white/[0.01] mb-24">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap space-x-16 px-8 items-center"
        >
          {[...ALL_SKILLS, ...ALL_SKILLS].map((skill, i) => (
            <div key={i} className="flex items-center space-x-8">
              <span className="text-xl md:text-3xl font-display font-bold text-white/20 uppercase tracking-widest">{skill}</span>
              <span className="w-2 h-2 rounded-full bg-accent-blue/30"></span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-sm font-mono tracking-[0.2em] text-accent-violet mb-8 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-col space-y-4">
                {category.skills.map((skill, i) => (
                  <motion.div 
                    key={skill}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group flex items-center cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent-blue mr-4 transition-colors duration-300"></span>
                    <span className="text-white/70 group-hover:text-white transition-colors duration-300 font-sans">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
