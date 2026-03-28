"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { getDriveDirectLink } from "@/lib/image-utils";

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
  title?: string;
}

export function ImageLightbox({ images, initialIndex, onClose, title }: ImageLightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, images.length, onClose]);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-100 flex flex-col bg-black/98 backdrop-blur-md"
      >
        {/* Header Controls */}
        <div className="flex items-center justify-between p-6 z-20">
          <div className="flex flex-col">
            {title && (
              <h3 className="font-serif text-white text-lg tracking-wide uppercase">{title}</h3>
            )}
            <span className="font-sans text-white/40 text-[10px] uppercase tracking-[0.4em] mt-1">
              Ref. {index + 1} / {images.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Stage */}
        <div className="relative flex-1 flex items-center justify-center px-4 md:px-24 overflow-hidden">
          {/* Navigation Buttons (Desktop) */}
          <button
            onClick={prev}
            className="absolute left-8 flex max-md:hidden w-14 h-14 rounded-full border border-white/5 items-center justify-center text-white/20 hover:text-white hover:border-white/20 hover:bg-white/5 z-30 transition-all duration-500"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -10 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="relative w-full h-[65vh] md:h-[75vh]"
            >
              <Image
                src={getDriveDirectLink(images[index])}
                alt={`Perspective ${index + 1}`}
                fill
                priority
                className="object-contain"
                unoptimized={images[index].includes("drive.google.com")}
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={next}
            className="absolute right-8 flex max-md:hidden w-14 h-14 rounded-full border border-white/5 items-center justify-center text-white/20 hover:text-white hover:border-white/20 hover:bg-white/5 z-30 transition-all duration-500"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>
        </div>

        {/* Thumbnails Navigator */}
        <div className="pb-12 pt-6 px-6 overflow-hidden">
           <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 overflow-x-auto no-scrollbar scroll-smooth">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`relative shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-500 transform ${
                    index === i 
                      ? "opacity-100 scale-110 border-2 border-primary ring-8 ring-primary/10" 
                      : "opacity-20 hover:opacity-60 scale-95"
                  }`}
                >
                  <Image
                    src={getDriveDirectLink(img)}
                    alt={`Thumb ${i + 1}`}
                    fill
                    className="object-cover"
                    unoptimized={img.includes("drive.google.com")}
                  />
                </button>
              ))}
           </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
