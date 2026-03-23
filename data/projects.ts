import projectsData from "./projects.json";

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  slug: string;
  clientName: string;
  description: string;
  tags: string[];
  featured: boolean;
  featuredImage: string;
  images: string[];
  area: string;
  status: string;
  materials: string[];
}

export const projects: Project[] = projectsData;

/** Only projects marked as featured — used for hero carousel */
export const featuredProjects: Project[] = projectsData.filter(
  (p) => p.featured
);

/** Find a project by its slug */
export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}

/** Get the next project in the list (wraps around) */
export function getNextProject(currentSlug: string): Project {
  const index = projectsData.findIndex((p) => p.slug === currentSlug);
  const nextIndex = (index + 1) % projectsData.length;
  return projectsData[nextIndex];
}
