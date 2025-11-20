import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { CursorType } from '../types';

interface CustomCursorProps {
  cursorType: CursorType;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ cursorType }) => {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [mouseX, mouseY, isVisible]);

  const variants = {
    [CursorType.DEFAULT]: {
      height: 16,
      width: 16,
      backgroundColor: '#ccf381', // acid-lime
      mixBlendMode: 'difference' as any,
    },
    [CursorType.HOVER]: {
      height: 80,
      width: 80,
      backgroundColor: '#ffffff',
      mixBlendMode: 'difference' as any,
    },
    [CursorType.TEXT]: {
      height: 120,
      width: 4,
      backgroundColor: '#ccf381',
      mixBlendMode: 'difference' as any,
    },
    [CursorType.MAGNETIC]: {
      height: 40,
      width: 40,
      backgroundColor: 'transparent',
      border: '2px solid #ccf381',
      mixBlendMode: 'normal' as any,
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={cursorType}
      variants={variants}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
       {cursorType === CursorType.HOVER && (
         <span className="text-deep-black text-[10px] font-mono font-bold">VIEW</span>
       )}
    </motion.div>
  );
};

export default CustomCursor;