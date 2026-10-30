export interface Technology {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "Mobile" | "Tools";
}

export const technologies: Technology[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Nuxt.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "Redis", category: "Databases" },
  { name: "React Native", category: "Mobile" },
  { name: "Expo", category: "Mobile" },
  { name: "Docker", category: "Tools" },
  { name: "AWS", category: "Tools" },
  { name: "Git", category: "Tools" },
  { name: "Figma", category: "Tools" },
];

export const technologyCategories = [
  "Frontend",
  "Backend",
  "Databases",
  "Mobile",
  "Tools",
] as const;
