"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { getDriveDirectLink } from "@/lib/image-utils";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(slideNext, 6000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const project = projects[currentIndex];
  // Make sure we have a valid URL before using string methods
  const imageUrl = getDriveDirectLink(project?.image || "");
  const isDriveImage = project?.image?.includes("drive.google.com") ?? false;

  if (!project) return null;

  return (
    <section className="relative w-full pt-32 pb-12 px-6 md:px-12 bg-background min-h-[90vh] flex flex-col">
      {/* Premium Framed Container */}
      <div className="relative grow w-full rounded-3xl overflow-hidden bg-secondary/5 group">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Image Container with subtle motion */}
            <motion.div 
              className="relative w-full h-full"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "linear" }}
            >
              <Image
                src={imageUrl}
                alt={project.title}
                fill
                priority
                className="object-cover"
                unoptimized={isDriveImage}
              />
              {/* Subtle bottom gradient just for text readability, not darkening the whole image */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80" />
            </motion.div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end pointer-events-none p-8 md:p-16">
              <div className="w-full pointer-events-auto flex flex-col md:flex-row md:items-end justify-between gap-8 z-10">
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="space-y-4 max-w-2xl"
                >
                  <div className="space-y-2">
                    <span className="text-white/80 text-xs md:text-sm font-sans uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-white/30 backdrop-blur-sm inline-block">
                      {project.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
                      {project.title}
                    </h1>
                  </div>
                  <p className="text-white/80 font-sans text-sm md:text-base max-w-md line-clamp-2 md:line-clamp-none">
                    {project.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="shrink-0"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-center w-14 h-14 md:w-32 md:h-32 rounded-full bg-white text-structure hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
                    aria-label={`View ${project.title}`}
                  >
                    <div className="flex flex-col items-center justify-center gap-1">
                      <span className="hidden md:block text-xs font-sans uppercase tracking-widest font-medium">View</span>
                      <ArrowRight size={24} className="md:-rotate-45 transition-transform" />
                    </div>
                  </Link>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls Overlay */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 md:px-8 flex justify-between pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={slidePrev}
            className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-structure transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={slideNext}
            className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-structure transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === currentIndex ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
