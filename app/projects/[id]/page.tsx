"use client";

import { use, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { ArrowLeft, MapPin, Calendar, Ruler, Hammer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, getNextProject } from "@/data/projects";
import { getDriveDirectLink } from "@/lib/image-utils";

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const containerRef = useRef(null);

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
      {/* Project Hero */}
      <div className="h-[80vh] w-full relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt={project.title}
            fill
            priority
            className="object-cover"
            unoptimized={isDriveImage}
          />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-t from-canvas to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
          <Link href="/" className="inline-flex items-center gap-2 text-structure/70 hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-sans text-sm uppercase tracking-widest">Back to Projects</span>
          </Link>
          
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-structure/20 text-structure/70 inline-block">
                {project.category}
              </span>
              <span className="text-xs md:text-sm font-sans text-structure/50">
                {project.year}
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif text-structure mb-4">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
             <p className="font-sans text-primary text-xl md:text-2xl max-w-xl">
               {project.description}
             </p>
          </Reveal>
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

      {/* Gallery */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-4">
          {project.images.map((img, i) => {
            const imgUrl = getDriveDirectLink(img);
            const isGdrive = img.includes("drive.google.com");
            return (
              <Reveal key={i} width="100%">
                <div className="relative w-full aspect-video bg-secondary/5 overflow-hidden group">
                  <Image
                    src={imgUrl}
                    alt={`${project.title} - Image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    unoptimized={isGdrive}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Next Project */}
      <Link href={`/projects/${nextProject.slug}`} className="block">
        <section className="h-[50vh] flex items-center justify-center bg-structure text-canvas relative group cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="z-10 text-center">
            <p className="font-sans text-sm tracking-widest uppercase mb-4 opacity-70">Next Project</p>
            <h2 className="text-4xl md:text-6xl font-serif">{nextProject.title}</h2>
            <p className="font-sans text-sm mt-3 opacity-50">{nextProject.category} / {nextProject.location}</p>
          </div>
        </section>
      </Link>
    </div>
  );
}
