export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  features: string[];
}

export const services: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "We craft blazing-fast, pixel-perfect interfaces that convert visitors into customers. Our frontend engineers build scalable component architectures with modern frameworks and rigorous performance standards.",
    icon: "Monitor",
    technologies: ["React", "Next.js", "Vue", "Nuxt", "TypeScript"],
    features: [
      "Component-driven architecture",
      "Server-side rendering & static generation",
      "Performance optimization & Core Web Vitals",
      "Accessibility compliance (WCAG 2.1)",
      "Design system implementation",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Robust, secure, and scalable server infrastructure that powers mission-critical applications. We design APIs and backend systems built to handle enterprise workloads with confidence.",
    icon: "Server",
    technologies: [
      "APIs",
      "Authentication",
      "Databases",
      "Admin Systems",
      "CRM Systems",
    ],
    features: [
      "RESTful & GraphQL API design",
      "OAuth 2.0 & JWT authentication",
      "PostgreSQL, MongoDB & Redis",
      "Custom admin dashboards",
      "CRM & workflow automation",
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "Native-quality mobile experiences for iOS and Android. From concept to App Store launch, we deliver polished applications that users love and businesses rely on.",
    icon: "Smartphone",
    technologies: ["React Native", "Expo", "Android", "iOS"],
    features: [
      "Cross-platform development",
      "Native module integration",
      "Push notifications & offline support",
      "App Store & Play Store deployment",
      "Performance profiling & optimization",
    ],
  },
  {
    id: "design",
    title: "UI/UX Design",
    description:
      "Human-centered design that bridges business goals and user needs. We transform complex requirements into intuitive, beautiful interfaces that drive engagement and retention.",
    icon: "Palette",
    technologies: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
    features: [
      "User interviews & persona development",
      "Information architecture",
      "High-fidelity interactive prototypes",
      "Comprehensive design systems",
      "Usability testing & iteration",
    ],
  },
];
