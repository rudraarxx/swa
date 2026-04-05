'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface CharacterRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function CharacterReveal({ text, className, delay = 0 }: CharacterRevealProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  const characters = text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      },
    },
  };

  const charVariants = {
    hidden: { y: '110%' },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Quintic Out
      },
    },
  };

  return (
    <motion.h1
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`overflow-hidden flex flex-wrap ${className}`}
    >
      {characters.map((char, index) => (
        <span key={index} className="relative overflow-hidden inline-block">
          <motion.span
            variants={charVariants}
            className="inline-block"
            // Ensure spaces preserve their width
            style={{ display: char === ' ' ? 'inline' : 'inline-block', minWidth: char === ' ' ? '0.25em' : 'auto' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
