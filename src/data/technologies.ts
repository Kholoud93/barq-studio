export interface Technology {
  name: string;
  category: string;
}

export const technologies: Technology[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue", category: "Frontend" },
  { name: "Nuxt", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "GraphQL", category: "API" },
  { name: "React Native", category: "Mobile" },
  { name: "Expo", category: "Mobile" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Figma", category: "Design" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Stripe", category: "Payments" },
];
