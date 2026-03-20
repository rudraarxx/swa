"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-sm font-sans uppercase tracking-widest text-structure/60">
              Selected Works
            </h2>
            <p className="text-4xl md:text-6xl font-serif text-structure leading-[1.1]">
              Sculpting space with <br />{" "}
              <i className="font-serif">light, material & memory.</i>
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-sm font-sans uppercase tracking-widest text-structure border-b border-structure/20 pb-1 hover:border-structure transition-all"
            >
              View All Projects
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {projects.map((project, index) => (
            <div key={project.id} className={index % 2 === 1 ? "md:mt-24" : ""}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden flex justify-center pt-8">
          <Link
            href="/projects"
            className="px-8 py-4 border border-structure/20 rounded-full text-sm font-sans uppercase tracking-widest text-structure hover:bg-structure hover:text-white transition-all"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
