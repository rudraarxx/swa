"use client";

import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  MapPin,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Float } from "@/components/motion/float";

const services = [
  "Design Consultancy",
  "Interior Designing",
  "3D Rendering",
  "Plan Approvals",
  "Construction Drawings",
  "Vastu Consultation",
  "BIM Technology",
  "Concept Development",
  "BOQs & Estimation",
];

const stats = [
  { label: "Projects Completed", value: "15+", icon: <TrendingUp size={20} /> },
  { label: "Experience", value: "3 Years", icon: <Award size={20} /> },
  { label: "Verified", value: "COA India", icon: <CheckCircle2 size={20} /> },
  { label: "Presence", value: "Nagpur & Mumbai", icon: <MapPin size={20} /> },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Biography Section (Now New Hero) */}
      <section className="px-6 md:px-12 pt-48 pb-32 md:pb-48 relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-16">
          <div className="space-y-8">
            <Reveal width="100%">
              <h1 className="text-4xl md:text-6xl font-serif text-structure leading-[0.9] tracking-tight">
                A Love Affair <br />
                <span className="text-primary uppercase tracking-widest text-sm font-sans font-bold">with Art.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2} width="100%">
              <p className="text-xl md:text-2xl text-structure/80 leading-relaxed font-light font-sans max-w-2xl mx-auto">
                "My love affair with art fuels every project I take on, infusing
                each design with creativity and soul."
              </p>
            </Reveal>
          </div>

          <div className="space-y-8 max-w-2xl">
            <Reveal delay={0.3} width="100%">
              <p className="text-lg md:text-xl text-structure/60 leading-relaxed font-sans font-light">
                Architecture is not just about buildings; it's about bringing
                architectural dreams to life with a touch of artistry. With a
                deep understanding of my clients' needs, I bring empathy and
                intuition to every project, ensuring that the results exceed
                expectations.
              </p>
            </Reveal>
            <Reveal delay={0.4} width="100%">
              <p className="text-lg md:text-xl text-structure/60 leading-relaxed font-sans font-light">
                My journey over the last 3 years has been one of constant
                collaboration—working alongside architects, artists,
                contractors, and realtors across Nagpur and Mumbai to create
                spaces that breathe.
              </p>
            </Reveal>
          </div>

          {/* Stats Grid - Premium horizontal layout */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-16 border-t border-structure/10">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.1 * i}>
                <div className="space-y-3 group">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-structure/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {stat.icon}
                    </div>
                    <span className="text-3xl font-serif text-structure tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-structure/40 font-sans font-medium">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Spatial Alchemy */}
      <section className="py-24 md:py-32 bg-structure text-white px-6 md:px-12 mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Reveal width="100%">
                <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                  The Core <br />
                  <span className="text-primary font-bold">of Connection.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.3} width="100%">
                <p className="text-lg text-white/60 leading-relaxed font-light font-sans max-w-lg">
                  Beyond the technical blueprints lies the heart of the home. We
                  prioritize the human experience, using intuition and empathy
                  to bridge the gap between imagination and reality. This is our
                  Spatial Alchemy.
                </p>
              </Reveal>
            </div>

            <div className="flex justify-center">
              <Float>
                <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse" />
                  <Sparkles size={48} className="text-primary/50" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-[10px] uppercase tracking-widest">
                    Empathy First
                  </div>
                </div>
              </Float>
            </div>
          </div>
        </div>
      </section>

      {/* Services Checklist */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-md space-y-6">
              <h2 className="text-2xl font-serif text-structure">
                Full Spectrum Architecture.
              </h2>
              <p className="text-structure/60 leading-relaxed">
                From initial design consultancy and plan approvals to advanced
                BIM technology and final construction drawings. Our services
                cover every phase of the project lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 w-full md:w-auto">
              {services.map((service, i) => (
                <Reveal key={service} delay={0.05 * i}>
                  <div className="flex items-center gap-3 py-3 border-b border-structure/5 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    <span className="text-sm font-sans uppercase tracking-[0.2em] text-structure/80">
                      {service}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
