'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export function LightLeak() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 300 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-soft-light"
      style={{
        background: `radial-gradient(600px circle at var(--x) var(--y), rgba(255, 255, 255, 0.05), transparent 80%)`,
        // @ts-ignore
        '--x': sx + 'px',
        // @ts-ignore
        '--y': sy + 'px',
      }}
    />
  );
}
