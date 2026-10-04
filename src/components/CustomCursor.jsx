import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState(null); // null, 'hover', 'view', 'open'
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile / touch
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isButton = target.closest('button') || target.closest('a') || target.tagName.toLowerCase() === 'button';
      const isProject = target.closest('.project-card');
      const isExpandable = target.closest('.expandable');

      if (isProject) {
        setHoverState('view');
      } else if (isExpandable) {
        setHoverState('open');
      } else if (isButton) {
        setHoverState('hover');
      } else {
        setHoverState(null);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  const variants = {
    default: {
      x: position.x - 8,
      y: position.y - 8,
      width: 16,
      height: 16,
      backgroundColor: "white",
      mixBlendMode: "difference",
      opacity: 1,
    },
    hover: {
      x: position.x - 24,
      y: position.y - 24,
      width: 48,
      height: 48,
      backgroundColor: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.5)",
      mixBlendMode: "normal",
      opacity: 1,
    },
    view: {
      x: position.x - 40,
      y: position.y - 40,
      width: 80,
      height: 80,
      backgroundColor: "rgba(112, 0, 255, 0.9)",
      border: "none",
      mixBlendMode: "normal",
      opacity: 1,
    },
    open: {
      x: position.x - 40,
      y: position.y - 40,
      width: 80,
      height: 80,
      backgroundColor: "white",
      mixBlendMode: "difference",
      opacity: 1,
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
        animate={hoverState || 'default'}
        variants={variants}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
      >
        {hoverState === 'view' && (
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-white text-[10px] font-bold tracking-widest"
          >
            VIEW
          </motion.span>
        )}
        {hoverState === 'open' && (
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-black text-[10px] font-bold tracking-widest"
          >
            OPEN
          </motion.span>
        )}
      </motion.div>
      <motion.div 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent-blue rounded-full pointer-events-none z-[9999]"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          opacity: hoverState ? 0 : 1
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.02 }}
      />
    </>
  );
}
