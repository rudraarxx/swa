import { Metadata } from "next";
import { ProjectsContent } from "@/components/projects/projects-content";

export const metadata: Metadata = {
  title: "Portfolio | Luxury Architectural Projects by SWA Architects",
  description: "A curated journey through our architectural landmarks in Nagpur and Mumbai. Explore our expertise in residential, interior, and sustainable design.",
  keywords: ["architectural portfolio India", "luxury home design", "SWA Architects projects", "Nagpur architecture", "Mumbai interiors"],
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
