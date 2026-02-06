"use client";

import { use, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const containerRef = useRef(null);

  // Parallax for hero image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-canvas" ref={containerRef}>
      {/* Project Hero */}
      <div className="h-[80vh] w-full relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
           <div className="w-full h-full bg-structure/10 relative">
             <div className="absolute inset-0 flex items-center justify-center text-structure/20 text-9xl font-serif">
               {id}
             </div>
           </div>
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-canvas to-transparent z-10" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
          <Link href="/" className="inline-flex items-center gap-2 text-structure/70 hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-sans text-sm uppercase tracking-widest">Back to Projects</span>
          </Link>
          
          <Reveal>
            <h1 className="text-5xl md:text-8xl font-serif text-structure mb-4">
              Project {id}
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
             <p className="font-sans text-primary text-xl md:text-2xl max-w-xl">
               A detailed exploration of form, void, and material density.
             </p>
          </Reveal>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-sans opacity-80 leading-relaxed">
           <Reveal>
             <p>
               The concept revolves around the interplay of heavy stone structures and light, ephemeral glass partitions. 
               We wanted to challenge the notion that "grounded" means "static".
             </p>
           </Reveal>
           <Reveal delay={0.3}>
             <p>
               Every corner tells a story of resistance and release. The architecture does not just sit on the site; 
               it engages in a conversation with the gravity that holds it there.
             </p>
           </Reveal>
        </div>

        {/* Gallery Placeholder */}
        <div className="grid grid-cols-1 gap-8">
           {[1, 2, 3].map((i) => (
             <Reveal key={i} width="100%">
               <div className="aspect-video bg-structure/5 w-full relative group overflow-hidden">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
               </div>
             </Reveal>
           ))}
        </div>
      </section>

      {/* Next Project */}
      <section className="h-[50vh] flex items-center justify-center bg-structure text-canvas relative group cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="z-10 text-center">
          <p className="font-sans text-sm tracking-widest uppercase mb-4 opacity-70">Next Project</p>
          <h2 className="text-4xl md:text-6xl font-serif">The Ethereal House</h2>
        </div>
      </section>
    </div>
  );
}
