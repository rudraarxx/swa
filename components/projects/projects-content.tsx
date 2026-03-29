"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/home/project-card";
import { Reveal } from "@/components/motion/reveal";

export function ProjectsContent() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-6 max-w-2xl text-center mx-auto mb-20">
          <Reveal width="100%">
            <h1 className="text-4xl md:text-6xl font-serif text-structure">
              Portfolio
            </h1>
          </Reveal>
          <Reveal delay={0.2} width="100%">
            <p className="text-lg md:text-xl font-sans text-structure/60 leading-relaxed">
              Expeditions in light, materiality, and the architecture of
              weightlessness. A curated journey through our architectural
              landmarks.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index % 3} />
          ))}
        </div>
      </div>
    </div>
  );
}
