"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function FounderSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <Reveal width="100%">
              <div className="relative aspect-square md:aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/shubhangi_portrait.png"
                  alt="Ar. Shubhangi Wahane"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>
            </Reveal>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 md:right-8 bg-structure text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Status</p>
                    <p className="text-sm font-sans font-semibold">COA Verified</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Reach</p>
                    <p className="text-sm font-sans font-semibold">15+ Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-4">
              <Reveal width="100%">
                <h3 className="text-xs font-sans uppercase tracking-[0.3em] text-structure/40">
                  The Visionary
                </h3>
              </Reveal>
              <Reveal delay={0.2} width="100%">
                <h2 className="text-5xl md:text-7xl font-serif leading-tight">
                  Ar. Shubhangi <br />
                  <span className="italic text-primary">Wahane.</span>
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.4} width="100%">
              <div className="space-y-8 max-w-lg">
                <p className="text-xl text-structure/80 leading-relaxed font-light font-sans">
                  "Architecture is not just about buildings; it's about bringing dreams to life with a touch of artistry."
                </p>
                <p className="text-base text-structure/60 leading-relaxed">
                  Based between <span className="text-structure font-medium">Nagpur & Mumbai</span>, Shubhangi blends architectural rigour with the soul of an artist. Her approach is rooted in empathy and intuition, ensuring every space reflects the core identity of its inhabitant.
                </p>
                
                <div className="pt-4">
                  <Link
                    href="/about"
                    className="group flex items-center gap-6 text-sm font-sans uppercase tracking-[0.2em] text-structure w-fit"
                  >
                    <span className="relative">
                      Meet the Artist
                      <span className="absolute -bottom-2 left-0 w-full h-px bg-structure/20 group-hover:bg-primary transition-colors" />
                    </span>
                    <div className="w-10 h-10 rounded-full border border-structure/20 flex items-center justify-center group-hover:bg-structure group-hover:text-white transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
