"use client";

import { Hero } from "@/components/home/hero";
import { ProjectsSection } from "@/components/home/projects-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <ProjectsSection />
    </div>
  );
}
