"use client";

import { Project } from "@/data/projects";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { getDriveDirectLink } from "@/lib/image-utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const imageUrl = getDriveDirectLink(project.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block space-y-4">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-4/5 md:aspect-3/4 bg-secondary/10">
          <div className="absolute inset-0 bg-structure/0 group-hover:bg-structure/10 transition-colors duration-500 z-10" />
          
          <Image
            src={imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale"
            unoptimized={project.image.includes("drive.google.com")}
          />

          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-structure">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-serif font-medium text-structure group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-sm font-sans tracking-wide text-structure/60 uppercase">
              {project.category} <span className="mx-1">/</span> {project.location}
            </p>
            <p className="text-xs font-sans text-structure/40 italic">
              Client: {project.clientName}
            </p>
          </div>
          <span className="text-sm font-sans text-structure/40">
            {project.year}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
