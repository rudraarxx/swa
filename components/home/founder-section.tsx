"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function FounderSection() {
  return (
    <section className="relative py-32 md:py-56 bg-white overflow-hidden">
      {/* Background Signature Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[30vw] font-serif text-black/5 leading-none whitespace-nowrap">
          SW.
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-16 md:space-y-24">
          
          {/* Label & Title Block */}
          <div className="space-y-8 max-w-4xl">
            <Reveal width="100%">
              <div className="flex items-center justify-center gap-4">
                <span className="w-12 h-px bg-structure/20" />
                <h3 className="text-[10px] md:text-xs font-sans uppercase tracking-[0.5em] text-structure/40 whitespace-nowrap">
                  The Visionary
                </h3>
                <span className="w-12 h-px bg-structure/20" />
              </div>
            </Reveal>

            <Reveal delay={0.2} width="100%">
              <h2 className="text-4xl md:text-6xl font-serif leading-[1.05] tracking-tight">
                Ar. Shubhangi <br />
                <span className="text-primary uppercase tracking-widest text-xs font-sans font-bold">Wahane.</span>
              </h2>
            </Reveal>
          </div>

          {/* Core Vision & Bio */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start w-full">
            {/* The Hero Quote */}
            <div className="md:col-span-12 lg:col-span-8 lg:col-start-3 text-center space-y-12">
              <Reveal delay={0.4} width="100%">
                <p className="text-2xl md:text-4xl font-serif text-structure leading-relaxed max-w-3xl mx-auto">
                  "Architecture is not just about buildings; it's about bringing dreams to life with a touch of artistry."
                </p>
              </Reveal>

              <Reveal delay={0.6} width="100%">
                <p className="text-base md:text-lg text-structure/60 leading-relaxed max-w-2xl mx-auto font-light">
                  Based between <span className="text-structure font-medium">Nagpur & Mumbai</span>, Shubhangi blends architectural rigour with the soul of an artist. Her approach is rooted in empathy and intuition, ensuring every space reflects the core identity of its inhabitant.
                </p>
              </Reveal>

              <Reveal delay={0.8} width="100%">
                <div className="flex justify-center pt-8">
                  <Link
                    href="/about"
                    className="group flex items-center gap-6 text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-structure w-fit"
                  >
                    <span className="relative">
                      Meet the Artist
                      <span className="absolute -bottom-2 left-0 w-full h-px bg-structure/20 group-hover:bg-primary transition-colors" />
                    </span>
                    <div className="w-12 h-12 rounded-full border border-structure/20 flex items-center justify-center group-hover:bg-structure group-hover:text-white transition-all duration-500">
                      <ArrowRight size={18} strokeWidth={1.5} />
                    </div>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
