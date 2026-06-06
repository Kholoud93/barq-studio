export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We dive deep into your business goals, user needs, and technical requirements through structured workshops and stakeholder interviews.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Strategy",
    description:
      "We define the product roadmap, technical architecture, and project milestones with clear deliverables and success metrics.",
    icon: "Map",
  },
  {
    step: 3,
    title: "Design",
    description:
      "Our designers create wireframes, interactive prototypes, and a comprehensive design system aligned with your brand identity.",
    icon: "PenTool",
  },
  {
    step: 4,
    title: "Development",
    description:
      "Agile sprints with bi-weekly demos ensure transparent progress. Code reviews and automated testing maintain enterprise-grade quality.",
    icon: "Code2",
  },
  {
    step: 5,
    title: "Testing",
    description:
      "Rigorous QA including unit tests, integration tests, performance audits, security scans, and cross-browser compatibility checks.",
    icon: "ShieldCheck",
  },
  {
    step: 6,
    title: "Launch",
    description:
      "Coordinated deployment with monitoring setup, documentation handoff, team training, and post-launch support to ensure a smooth transition.",
    icon: "Rocket",
  },
];
