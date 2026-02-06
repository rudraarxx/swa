"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { ArrowRight, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full relative">
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        {/* Background Image / Texture */}
        <div className="absolute inset-0 bg-structure/5 z-0" />
        
        {/* SWA Mask Effect - Conceptual */}
        <div className="relative z-10 text-center mix-blend-difference text-white">
           <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[20vw] font-serif leading-none tracking-tighter"
           >
             SWA
           </motion.h1>
           <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl font-sans mt-4 uppercase tracking-widest"
           >
             Shubhangi Wahane Architects
           </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-structure"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-serif text-structure leading-tight">
              We craft spaces that <span className="italic text-primary">breathe</span> and existing between the heavy and the light.
            </h2>
          </Reveal>
          
          <div className="space-y-6 font-sans text-lg opacity-80">
             <Reveal delay={0.3}>
               <p>
                 Our philosophy is grounded in the earth but reaches for the ethereal. 
                 Every structure is a dialogue between mass and void, gravity and weightlessness.
               </p>
             </Reveal>
             <Reveal delay={0.4}>
               <div className="flex items-center gap-2 text-primary font-medium cursor-pointer group">
                 <span>Explore Studio</span>
                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview - Placeholder */}
      <section className="py-20 px-6 md:px-12 bg-structure text-canvas">
         <div className="max-w-7xl mx-auto">
           <Reveal width="100%">
             <div className="flex justify-between items-end mb-16">
               <h3 className="text-3xl md:text-5xl font-serif">Featured Works</h3>
               <span className="font-sans text-sm tracking-widest uppercase border-b border-canvas/30 pb-1">View All</span>
             </div>
           </Reveal>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Mock Project Cards */}
             {[1, 2].map((i) => (
                <Parallax key={i} offset={i % 2 === 0 ? 30 : -30} className="relative aspect-[4/3] bg-canvas/10 overflow-hidden group">
                  <div className="absolute inset-0 bg-neutral-800 animate-pulse" /> 
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                     <span className="text-white font-serif text-3xl">Project {i}</span>
                  </div>
                </Parallax>
             ))}
           </div>
         </div>
      </section>
    </div>
  );
}
