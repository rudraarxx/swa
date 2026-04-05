'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { featuredProjects } from '@/data/projects';
import { getDriveDirectLink } from '@/lib/image-utils';
import { CharacterReveal } from '../motion/CharacterReveal';
import { MagneticCursor } from '../motion/MagneticCursor';
import { LightLeak } from '../motion/LightLeak';
import { ArrowUpRight } from 'lucide-react';

const BEZIER = [0.22, 1, 0.36, 1] as any;

export function Hero() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const parallaxTextY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const slideNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % featuredProjects.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(slideNext, 8000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const currentProject = featuredProjects[index];
  if (!currentProject) return null;

  const imageUrl = getDriveDirectLink(currentProject.featuredImage);
  const metaText = `${currentProject.year} / ${currentProject.category.toUpperCase()} / ${currentProject.location.toUpperCase()}`;

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black font-sans selection:bg-white selection:text-black">
      {/* Cinematic Gallery */}
      <div className="absolute inset-0 h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: BEZIER }}
            className="absolute inset-0 h-full w-full"
            style={{ y: parallaxY }}
          >
            {/* Ken Burns 2.0 Effect */}
            <motion.div
              initial={{ scale: 1.25 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 10, ease: 'linear' }}
              className="relative h-full w-full"
            >
              <Image
                src={imageUrl}
                alt={currentProject.title}
                fill
                priority
                className="object-cover brightness-[0.6] grayscale-[0.1]"
                unoptimized={currentProject.featuredImage?.includes('drive.google.com')}
              />
              {/* Dark Gradient Overlay for legibility */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Global Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-20 contrast-[1.1]" style={{ filter: 'url(#noiseFilter)' }} />
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </svg>

      {/* Content Overlay */}
      <motion.div 
        style={{ y: parallaxTextY, opacity }}
        className="relative z-20 flex h-full flex-col justify-between p-6 pt-24 md:p-12 md:pt-32"
      >
        {/* Top Meta: Monospaced Tiny Metadata */}
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <motion.div 
            key={`meta-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-white/70"
          >
            {metaText}
          </motion.div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-white/70">
            0{index + 1} &mdash; 0{featuredProjects.length}
          </div>
        </div>

        {/* Center Content: Massive Typography */}
        <div className="mb-6 md:mb-8 max-w-5xl">
          <motion.div 
            key={`subtitle-${index}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono text-[9px] md:text-[10px] tracking-[0.5em] text-white/80 mb-2 md:mb-3"
          >
            {currentProject.category.toUpperCase()}
          </motion.div>
          
          <CharacterReveal 
            key={`title-${index}`}
            text={currentProject.title.toUpperCase()} 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-extralight tracking-tighter text-white" 
          />
          
          <motion.p
            key={`desc-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: BEZIER }}
            className="mt-6 max-w-sm text-sm font-light leading-relaxed text-white/60 md:text-base"
          >
            {currentProject.description}
          </motion.p>
        </div>

        {/* Explore Button: Moved to the right side (White Dot Position) */}
        <motion.div
          key={`explore-${index}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: BEZIER }}
          className="absolute bottom-32 md:bottom-40 right-6 md:right-16 flex flex-col items-center gap-3 md:gap-4 z-30"
        >
          <MagneticCursor strength={0.3}>
            <button className="group relative flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black">
              <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:rotate-45" />
              <div className="absolute inset-0 rounded-full border border-white/40 opacity-0 group-hover:animate-ping group-hover:opacity-100" />
            </button>
          </MagneticCursor>
          <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-white/50 origin-center">EXPLORE</span>
        </motion.div>

        {/* Bottom Bar: Horizontal Indicators */}
        <div className="flex w-full items-end justify-end border-t border-white/5 pt-4 md:pt-6 pb-4">
          <div className="flex flex-row gap-2 md:gap-3">
            {featuredProjects.map((project, i) => (
              <button
                key={project.id}
                onClick={() => setIndex(i)}
                className="group relative h-[2px] w-8 md:w-12 overflow-hidden bg-white/20 transition-colors hover:bg-white/40"
                aria-label={`Go to slide ${i + 1}`}
              >
                <div
                  className={`absolute inset-y-0 left-0 bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    i === index ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <LightLeak />
    </section>
  );
}
