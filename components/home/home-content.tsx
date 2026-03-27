"use client";

import { Hero } from "@/components/home/hero";
import { ExpertiseSection } from "@/components/home/expertise-section";
import { FounderSection } from "@/components/home/founder-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { TestimonialSection } from "@/components/home/testimonial-section";
import { QuoteSection } from "@/components/home/cta-section";

export function HomeContent() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <ExpertiseSection />
      <FounderSection />
      <ProjectsSection />
      <TestimonialSection />
      <QuoteSection />
    </div>
  );
}
