export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What types of projects does Barq Studio specialize in?",
    answer:
      "We specialize in enterprise web applications, mobile apps, SaaS platforms, dashboards, CRM systems, and e-commerce solutions. Our team has delivered 80+ projects across fintech, healthcare, real estate, insurance, and non-profit sectors.",
  },
  {
    id: "2",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A focused MVP typically takes 8–12 weeks, while enterprise platforms range from 4–8 months. We provide detailed timelines during our discovery phase and maintain transparent milestone tracking throughout.",
  },
  {
    id: "3",
    question: "What is your development process?",
    answer:
      "We follow a structured six-phase process: Discovery, Strategy, Design, Development, Testing, and Launch. Each phase includes client checkpoints, deliverable reviews, and iterative feedback loops to ensure alignment at every stage.",
  },
  {
    id: "4",
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer flexible maintenance and support packages including bug fixes, security updates, performance monitoring, feature enhancements, and dedicated technical support. Most clients continue with us long-term for continuous improvement.",
  },
  {
    id: "5",
    question: "What technologies do you work with?",
    answer:
      "Our core stack includes React, Next.js, Vue, Nuxt, TypeScript, Node.js, PostgreSQL, MongoDB, Redis, React Native, and Expo. We select technologies based on project requirements, scalability needs, and long-term maintainability.",
  },
  {
    id: "6",
    question: "How do you handle project communication?",
    answer:
      "We assign a dedicated project manager and use structured weekly sprint reviews, shared project dashboards, and real-time messaging channels. You'll always have visibility into progress, blockers, and upcoming milestones.",
  },
  {
    id: "7",
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. We frequently collaborate with in-house development teams, providing specialized expertise, code reviews, architecture guidance, or augmenting capacity during critical phases. We adapt to your workflow, not the other way around.",
  },
  {
    id: "8",
    question: "How do we get started?",
    answer:
      "Reach out through our contact form or WhatsApp. We'll schedule a free 30-minute discovery call to understand your goals, discuss technical requirements, and provide a preliminary scope and timeline estimate within 48 hours.",
  },
];
