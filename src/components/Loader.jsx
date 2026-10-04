import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [loadingText, setLoadingText] = useState("");
  const fullName = "FINU FAYAD K";
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx <= fullName.length) {
        setLoadingText(fullName.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return p + 2;
      });
    }, 40);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-dark flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, y: -50, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-violet/10 via-dark to-dark opacity-50"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="h-16 flex items-center justify-center">
          <motion.h1 className="text-4xl md:text-6xl font-display font-bold tracking-widest text-white text-glow">
            {loadingText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-3 h-10 md:h-12 bg-accent-blue ml-2 translate-y-2"
            />
          </motion.h1>
        </div>
        
        <div className="mt-12 w-48 md:w-64 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-accent-blue box-glow"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mt-4 text-xs font-mono text-white/50 tracking-[0.3em]">
          {progress.toString().padStart(3, '0')}% INITIALIZING...
        </div>
      </div>
    </motion.div>
  );
}
