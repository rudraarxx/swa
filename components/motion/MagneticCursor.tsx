'use client';

import { motion, useSpring, useMotionValue } from 'framer-motion';
import { ReactNode, useRef, useState, useEffect } from 'react';

interface MagneticCursorProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticCursor({ children, className, strength = 0.5 }: MagneticCursorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(useMotionValue(0), springConfig);
  const y = useSpring(useMotionValue(0), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (ref.current) {
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      x.set(mouseX * strength);
      y.set(mouseY * strength);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
