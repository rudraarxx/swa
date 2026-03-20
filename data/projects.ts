import projectsData from "./projects.json";

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  slug: string;
  clientName: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = projectsData;
