"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, MapPin, Sparkles, TrendingUp } from "lucide-react";
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
    <div className="min-h-screen bg-background pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 mb-24 md:mb-32">
        <div className="max-w-7xl mx-auto">
          <Reveal width="100%">
            <h1 className="text-6xl md:text-9xl font-serif text-structure leading-none mb-8">
              Ar. Shubhangi <br />
              <span className="italic text-primary">Wahane.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3} width="100%">
            <p className="text-xl md:text-2xl font-sans font-light tracking-widest uppercase text-structure/60">
              Architect & Artist / Nagpur — Mumbai
            </p>
          </Reveal>
        </div>
      </section>

      {/* Portrait & Biography */}
      <section className="px-6 md:px-12 mb-32 md:mb-48">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/shubhangi_portrait.png"
              alt="Ar. Shubhangi Wahane"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="space-y-12">
            <Reveal width="100%">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif text-structure">
                  A Love Affair <span className="italic">with Art.</span>
                </h2>
                <p className="text-lg md:text-xl text-structure/70 leading-relaxed font-light">
                  "My love affair with art fuels every project I take on, infusing each design with creativity and soul. Architecture is not just about buildings; it's about bringing architectural dreams to life with a touch of artistry."
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} width="100%">
              <p className="text-base md:text-lg text-structure/60 leading-relaxed">
                With a deep understanding of my clients' needs, I bring empathy and intuition to every project, ensuring that the results exceed expectations. My journey over the last 3 years has been one of constant collaboration—working alongside architects, artists, contractors, and realtors across Nagpur and Mumbai to create spaces that breathe.
              </p>
            </Reveal>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-structure/10">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.1 * i}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      {stat.icon}
                      <span className="text-2xl font-serif text-structure">{stat.value}</span>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-structure/40 font-sans">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
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
                <h2 className="text-5xl md:text-7xl font-serif leading-tight">
                  The Core <br />
                  <span className="italic text-primary">of Connection.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.3} width="100%">
                <p className="text-lg text-white/60 leading-relaxed font-light font-sans max-w-lg">
                  Beyond the technical blueprints lies the heart of the home. We prioritize the human experience, using intuition and empathy to bridge the gap between imagination and reality. This is our Spatial Alchemy.
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
              <h2 className="text-4xl font-serif text-structure">Full Spectrum Architecture.</h2>
              <p className="text-structure/60 leading-relaxed">
                From initial design consultancy and plan approvals to advanced BIM technology and final construction drawings. Our services cover every phase of the project lifecycle.
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
