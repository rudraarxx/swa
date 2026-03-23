#!/usr/bin/env node
/**
 * SWA Data Transformer — Option B (Heuristic)
 *
 * Reads client_data.json and generates a complete projects.json
 * using name-based heuristics to infer category, description, tags, and materials.
 *
 * Usage:
 *   node scripts/transform-data.mjs <path-to-client_data.json>
 *
 * Example:
 *   node scripts/transform-data.mjs ~/Downloads/client_data.json
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

// ─── Configuration ─────────────────────────────────────────────────────────

const DEFAULT_LOCATION = "Nagpur, India";
const DEFAULT_YEAR = "2024";
const DEFAULT_STATUS = "Completed";
const FEATURED_COUNT = 3; // First N projects marked as featured

// ─── Heuristic Rules ───────────────────────────────────────────────────────

/**
 * Rules map: if the projectName matches a keyword,
 * we assign a category + default metadata.
 */
const CATEGORY_RULES = [
  {
    keywords: ["clinic", "hospital", "medical"],
    category: "Healthcare",
    descTemplate: (name) =>
      `A modern healthcare facility designed for ${name}, blending clinical precision with warm, patient-centered interiors that put comfort at the forefront.`,
    tags: ["Healthcare", "Modern", "Functional Design", "Patient-Centric"],
    materials: ["Vitrified Tiles", "Laminate Panels", "Glass Partitions", "Stainless Steel"],
  },
  {
    keywords: ["gym", "fitness"],
    category: "Commercial Fitness",
    descTemplate: (name) =>
      `A high-energy fitness space at ${name}, where industrial raw finishes meet bold lighting to inspire movement and push beyond limits.`,
    tags: ["Fitness", "Industrial", "Bold Design", "Commercial"],
    materials: ["Exposed Concrete", "Rubber Flooring", "Steel Framework", "LED Panels"],
  },
  {
    keywords: ["chowk", "square", "plaza", "public"],
    category: "Urban Design",
    descTemplate: (name) =>
      `An urban intervention for ${name} — reimagining public space through considered material choices, shaded gathering zones, and pedestrian-first design.`,
    tags: ["Urban Design", "Public Space", "Landscape", "Community"],
    materials: ["Paver Blocks", "Corten Steel", "Sandstone", "Native Plantings"],
  },
  {
    keywords: ["mumbai", "pune", "delhi", "bangalore", "hyderabad"],
    category: "Residential",
    descTemplate: (name) =>
      `A metropolitan residence in ${name}, crafted as a sanctuary within the urban pulse — where panoramic views, layered textures, and quiet luxury converge.`,
    tags: ["Urban Living", "Contemporary", "Luxury", "Metropolitan"],
    materials: ["Italian Marble", "Tinted Glass", "Engineered Wood", "Metallic Accents"],
    locationOverride: (name) => `${toTitleCase(name)}, India`,
  },
  {
    keywords: ["house", "home", "villa", "residence", "bungalow"],
    category: "Residential",
    descTemplate: (name) =>
      `${name} — a bespoke residence where architecture becomes a daily experience, weaving natural light, open volumes, and curated materiality into the rhythm of home.`,
    tags: ["Residential", "Bespoke", "Natural Light", "Open Plan"],
    materials: ["Exposed Brick", "Teak Wood", "Kota Stone", "Glass Curtain Walls"],
  },
];

/** Fallback for person-name projects (most common — these are residential interiors) */
const DEFAULT_RESIDENTIAL = {
  category: "Residential Interior",
  descTemplate: (name) =>
    `A thoughtfully designed private residence for ${name}, where contemporary elegance meets everyday warmth — refined surfaces, ambient lighting, and spaces that breathe.`,
  tags: ["Interior Design", "Contemporary", "Luxury", "Residential"],
  materials: ["Fluted Wood Panels", "Marble Flooring", "Cove Lighting", "Lacquered Finishes"],
};

// ─── Helpers ────────────────────────────────────────────────────────────────

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Generate a creative project title from the client/project name.
 * Person names get poetic titles; named projects keep their name stylized.
 */
function generateTitle(projectName) {
  const lower = projectName.toLowerCase();

  // Named projects — keep the name, just title-case it
  const namedKeywords = ["house", "clinic", "gym", "chowk", "square", "plaza", "mumbai"];
  if (namedKeywords.some((kw) => lower.includes(kw))) {
    return toTitleCase(projectName);
  }

  // Person names — use as-is in title case (client name goes in clientName field)
  return toTitleCase(projectName) + " Residence";
}

/**
 * Determine if a project name is a person's name (vs a place/type name).
 */
function isPersonName(projectName) {
  const typeKeywords = [
    "house", "clinic", "gym", "chowk", "square", "plaza",
    "mumbai", "pune", "delhi", "bangalore", "hyderabad",
    "villa", "home", "residence", "bungalow", "hospital",
    "medical", "fitness", "public",
  ];
  const lower = projectName.toLowerCase();
  return !typeKeywords.some((kw) => lower.includes(kw));
}

/**
 * Match project name to the best category rule.
 */
function matchRule(projectName) {
  const lower = projectName.toLowerCase();
  for (const rule of CATEGORY_RULES) {
    if (rule.keywords.some((kw) => lower.includes(kw))) {
      return rule;
    }
  }
  return DEFAULT_RESIDENTIAL;
}

// ─── Main Transform ─────────────────────────────────────────────────────────

function transform(inputPath) {
  const raw = readFileSync(inputPath, "utf-8");
  const clientData = JSON.parse(raw);

  const projects = clientData.projects.map((proj, index) => {
    const rule = matchRule(proj.projectName);
    const displayName = toTitleCase(proj.projectName);

    // Build the project entry
    const title = generateTitle(proj.projectName);
    const clientName = isPersonName(proj.projectName) ? displayName : "—";
    const location = rule.locationOverride
      ? rule.locationOverride(proj.projectName)
      : DEFAULT_LOCATION;

    return {
      id: index + 1,
      title,
      category: rule.category,
      location,
      year: DEFAULT_YEAR,
      slug: toSlug(proj.projectName),
      clientName,
      description: rule.descTemplate(displayName),
      tags: rule.tags,
      featured: index < FEATURED_COUNT,
      featuredImage: proj.photos[0]?.url || "",
      images: proj.photos.map((p) => p.url),
      area: "—",
      status: DEFAULT_STATUS,
      materials: rule.materials,
    };
  });

  return projects;
}

// ─── CLI Entry Point ────────────────────────────────────────────────────────

const inputArg = process.argv[2];
if (!inputArg) {
  console.error("Usage: node scripts/transform-data.mjs <path-to-client_data.json>");
  process.exit(1);
}

const inputPath = resolve(inputArg);
console.log(`\n📂 Reading: ${inputPath}`);

const projects = transform(inputPath);

console.log(`\n✅ Transformed ${projects.length} projects:\n`);
projects.forEach((p, i) => {
  const star = p.featured ? "⭐" : "  ";
  console.log(
    `  ${star} ${i + 1}. ${p.title} [${p.category}] — ${p.images.length} photos`
  );
});

// Write output
const outputPath = resolve("data/projects.json");
writeFileSync(outputPath, JSON.stringify(projects, null, 2) + "\n", "utf-8");
console.log(`\n📝 Written to: ${outputPath}`);
console.log(`\n💡 Tip: Open projects.json to review & adjust titles, area, year, featured flags.\n`);
