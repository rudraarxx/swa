"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Hexagon, Layers, Maximize, MousePointer2, Wind } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Float } from "@/components/motion/float";
import { Parallax } from "@/components/motion/parallax";
import { Reveal } from "@/components/motion/reveal";

const expertiseAreas = [
  {
    title: "Architecture",
    icon: <Maximize size={24} />,
    image: "/images/expertise/architecture.png",
    description: "Sculpting volumes that resonate with their context, we create enduring structures where light, material, and memory converge into a singular spatial experience.",
    services: ["Plan Approvals", "Construction Drawings", "3D Rendering"],
    offset: 0,
  },
  {
    title: "Urban Design",
    icon: <Layers size={24} />,
    image: "/images/expertise/urban.png",
    description: "Reimagining the urban fabric through systemic thinking—we design micro-cities and public realms that foster community, connectivity, and collective wellbeing.",
    services: ["Master Planning", "Public Realm Design", "Mobility Integration"],
    offset: 100,
  },
  {
    title: "Landscape",
    icon: <Wind size={24} />,
    image: "/images/expertise/landscape.png",
    description: "The dialogue between the built and the natural. We craft living landscapes that evolve with the seasons, integrating ecology with artistic intervention.",
    services: ["Ecological Restoration", "Hardscape Design", "Water Features"],
    offset: -50,
  },
  {
    title: "Consulting",
    icon: <Hexagon size={24} />,
    image: "/images/expertise/consulting.png",
    description: "Strategic guidance at the intersection of feasibility and vision. We provide expert advisory on development potential, site acquisition, and high-level architectural strategy.",
    services: ["Design Consultancy", "Vastu Consultation", "BOQs & Estimation"],
    offset: 80,
  },
];

export function ExpertiseSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden text-white"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-32">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <Reveal width="100%">
              <div className="space-y-4">
                <h2 className="text-xs font-sans uppercase tracking-[0.3em] text-white/40">
                  Disciplines
                </h2>
                <p className="text-5xl md:text-7xl font-serif leading-[1.1]">
                  The Art of <br />
                  <span className="italic text-primary">Spatial Alchemy.</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4} width="100%">
              <div className="max-w-md space-y-8">
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  Pushing beyond traditional boundaries, SWA crafts visionary environments where architecture, nature, and urban life dissolve into a seamless choreography of human experience.
                </p>
                <Link
                  href="/about"
                  className="group flex items-center gap-6 text-sm font-sans uppercase tracking-[0.2em] text-white w-fit"
                >
                  <span className="relative">
                    Explore our Philosophy
                    <span className="absolute -bottom-2 left-0 w-full h-px bg-white/20 group-hover:bg-primary transition-colors" />
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Unique Aura Graphic */}
          <div className="relative flex justify-center items-center h-[400px] md:h-[600px]">
            <motion.div style={{ rotate }} className="relative w-full h-full flex items-center justify-center">
              {/* Circular Energy Paths */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-white/5"
                  style={{
                    width: `${30 + i * 25}%`,
                    height: `${30 + i * 25}%`,
                  }}
                  animate={{
                    rotate: i % 2 === 0 ? 360 : -360,
                  }}
                  transition={{
                    duration: 20 + i * 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
              
              {/* The Core */}
              <Float>
                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                  <span className="text-2xl font-serif italic z-10">SWA.</span>
                </div>
              </Float>

              {/* Floating Discipline Nodes */}
              {expertiseAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  className="absolute"
                  style={{
                    top: `${(50 + 35 * Math.sin((i * 2 * Math.PI) / 4)).toFixed(4)}%`,
                    left: `${(50 + 35 * Math.cos((i * 2 * Math.PI) / 4)).toFixed(4)}%`,
                  }}
                >
                  <Float delay={i * 0.5}>
                    <div className="group relative">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-crosshair">
                        {area.icon}
                      </div>
                      <span className="absolute top-full mt-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-widest whitespace-nowrap bg-white text-black px-3 py-1 rounded-full">
                        {area.title}
                      </span>
                    </div>
                  </Float>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Staggered Interactive Cards */}
        <div className="space-y-32">
          {expertiseAreas.map((area, index) => (
            <div 
              key={area.title}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-24 items-center`}
            >
              {/* Image Side with Parallax */}
              <div className="w-full md:w-7/12">
                <Parallax offset={area.offset} className="w-full overflow-hidden rounded-2xl group">
                  <div className="relative aspect-video">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <span className="text-4xl md:text-6xl font-serif text-white/90">
                        0{index + 1}.
                      </span>
                    </div>
                  </div>
                </Parallax>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-5/12 space-y-6">
                <Reveal delay={0.2}>
                  <h3 className="text-3xl md:text-4xl font-serif">{area.title}</h3>
                </Reveal>
                <Reveal delay={0.4}>
                  <p className="text-white/50 leading-relaxed font-light">
                    {area.description}
                  </p>
                </Reveal>
                <Reveal delay={0.5}>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {area.services.map((service) => (
                      <span 
                        key={service} 
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-white/60 font-sans whitespace-nowrap"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.6}>
                  <div className="pt-4">
                    <Link 
                      href={`/projects?category=${area.title.split(' ')[0]}`}
                      className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary hover:text-white transition-colors"
                    >
                      View Projects
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
