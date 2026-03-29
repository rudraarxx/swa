"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/icons/brandLogo";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // Minimum load time for premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Also wait for window load event
    const handleLoad = () => {
      // We still respect the timer for minimum duration
    };

    window.addEventListener("load", handleLoad);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-canvas overflow-hidden"
        >
          {/* Cinematic Background Video */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover blur-sm grayscale contrast-125"
            >
              <source src="/kling_20260328_VIDEO_Image1A_cl_4659_0.mp4" type="video/mp4" />
            </video>
            {/* Subtle Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-linear-to-b from-canvas/40 via-transparent to-canvas/40" />
          </motion.div>

          <div className="relative flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full flex justify-center mb-8"
            >
              <BrandLogo className="w-32 md:w-48 h-auto" />
            </motion.div>

            {/* Brand Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-[12px] md:text-[14px] leading-tight font-sans tracking-[0.3em] uppercase font-bold text-structure">
                Shubhangi Wahane
              </span>
              <span className="text-[10px] md:text-[12px] leading-tight font-sans tracking-[0.5em] uppercase text-structure/60 mt-1">
                Architects
              </span>
            </motion.div>

            {/* Progress indicator */}
            <div className="mt-12 w-48 h-px bg-structure/10 relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute inset-y-0 left-0 bg-primary"
              />
            </div>

            <motion.span
              className="mt-4 font-sans text-[10px] tracking-widest text-structure/40 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Loading {progress}%
            </motion.span>
          </div>

          {/* Decorative background glow (kept for subtle depth) */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
