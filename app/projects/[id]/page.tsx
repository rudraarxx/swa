"use client";

import { use, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { ArrowLeft, MapPin, Calendar, Ruler, Hammer, Maximize2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, getNextProject } from "@/data/projects";
import { getDriveDirectLink } from "@/lib/image-utils";
import { ImageLightbox } from "@/components/projects/image-lightbox";

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const containerRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const project = getProjectBySlug(id);
  const nextProject = getNextProject(id);

  // Parallax for hero image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  if (!project) {
    return (
      <div className="min-h-screen bg-canvas flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-serif text-structure">Project Not Found</h1>
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-structure transition-colors font-sans text-sm uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const heroImageUrl = getDriveDirectLink(project.featuredImage);
  const isDriveImage = project.featuredImage.includes("drive.google.com");

  return (
    <div className="min-h-screen bg-canvas" ref={containerRef}>
      {/* Light Editorial Project Hero */}
      <div className="pt-40 pb-16 px-6 md:px-12 bg-canvas overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Editorial Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="space-y-12 max-w-4xl">
              <Link href="/" className="group inline-flex items-center gap-4 text-structure/30 hover:text-primary transition-all duration-300">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="font-sans text-[10px] uppercase tracking-[0.4em]">Index / Projects</span>
              </Link>
              
              <Reveal>
                <h1 className="text-7xl md:text-[8rem] font-serif text-structure leading-[0.8] tracking-tight">
                  {project.title.split(' ').map((word, i) => (
                    <span key={i} className={i % 2 !== 0 ? 'text-primary/90' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="flex flex-col items-end gap-6 text-right pb-4">
                <span className="text-[10px] font-sans uppercase tracking-[0.3em] px-5 py-2 rounded-full border border-structure/10 text-structure/60 bg-white/50 backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-structure/30 font-medium">
                  Project No. {project.year}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Framed Hero Image (Artistic Frame) */}
          <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] bg-secondary/5 group">
            <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-32">
              <Image
                src={heroImageUrl}
                alt={project.title}
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                unoptimized={isDriveImage}
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 pt-12 items-start">
            <Reveal delay={0.4}>
              <p className="font-sans text-structure/60 text-xl md:text-3xl leading-relaxed font-light tracking-tight max-w-2xl">
                {project.description}
              </p>
            </Reveal>
            <div className="space-y-8 flex flex-col items-end">
               <div className="h-px w-full bg-structure/5" />
               <div className="flex items-center gap-12">
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-structure/30 mb-1">Status</p>
                    <p className="text-sm font-sans font-semibold text-structure">{project.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-structure/30 mb-1">Presence</p>
                    <p className="text-sm font-sans font-semibold text-structure">{project.location}</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info Bar */}
      <section className="py-12 px-6 md:px-12 border-b border-secondary/30">
        <div className="max-w-5xl mx-auto">
          <Reveal width="100%">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="space-y-1">
                <span className="font-sans text-xs uppercase tracking-widest text-structure/40 flex items-center gap-1.5">
                  <MapPin size={12} /> Location
                </span>
                <p className="font-serif text-lg text-structure">{project.location}</p>
              </div>
              <div className="space-y-1">
                <span className="font-sans text-xs uppercase tracking-widest text-structure/40 flex items-center gap-1.5">
                  <Calendar size={12} /> Year
                </span>
                <p className="font-serif text-lg text-structure">{project.year}</p>
              </div>
              <div className="space-y-1">
                <span className="font-sans text-xs uppercase tracking-widest text-structure/40 flex items-center gap-1.5">
                  <Ruler size={12} /> Area
                </span>
                <p className="font-serif text-lg text-structure">{project.area}</p>
              </div>
              <div className="space-y-1">
                <span className="font-sans text-xs uppercase tracking-widest text-structure/40">Client</span>
                <p className="font-serif text-lg text-structure">{project.clientName}</p>
              </div>
              <div className="space-y-1">
                <span className="font-sans text-xs uppercase tracking-widest text-structure/40 flex items-center gap-1.5">
                  <Hammer size={12} /> Status
                </span>
                <p className="font-serif text-lg text-structure">{project.status}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Materials & Tags */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Reveal width="100%">
            <div className="flex flex-wrap gap-3">
              {project.materials.map((material) => (
                <span
                  key={material}
                  className="px-4 py-2 rounded-full font-sans text-sm border border-secondary/40 text-structure/70"
                >
                  {material}
                </span>
              ))}
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full font-sans text-sm bg-secondary/15 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:grid-cols-3 md:gap-3">
            {project.images.map((img, i) => {
              const imgUrl = getDriveDirectLink(img);
              const isGdrive = img.includes("drive.google.com");
              return (
                <Reveal key={i} width="100%" delay={i * 0.05}>
                  <div 
                    onClick={() => setSelectedIndex(i)}
                    className="relative w-full aspect-square bg-secondary/5 overflow-hidden group cursor-zoom-in rounded-sm"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${project.title} - Image ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      unoptimized={isGdrive}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                       <Maximize2 size={24} className="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all" strokeWidth={1} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {selectedIndex !== null && (
        <ImageLightbox 
          images={project.images}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          title={project.title}
        />
      )}

      {/* Next Project */}
      <Link href={`/projects/${nextProject.slug}`} className="block">
        <section className="h-[50vh] flex items-center justify-center bg-structure text-canvas relative group cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="z-10 text-center">
            <p className="font-sans text-sm tracking-widest uppercase mb-4 opacity-70">Next Project</p>
            <h2 className="text-2xl md:text-4xl font-serif">{nextProject.title}</h2>
            <p className="font-sans text-sm mt-3 opacity-50">{nextProject.category} / {nextProject.location}</p>
          </div>
        </section>
      </Link>
    </div>
  );
}
