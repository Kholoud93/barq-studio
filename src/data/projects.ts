export interface Project {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  duration: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  services: string[];
  featured: boolean;
  gradient: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: "crm-system",
    title: "Enterprise CRM System",
    category: "Enterprise Software",
    client: "Al Noor Trading Group",
    year: "2025",
    duration: "6 months",
    description:
      "A comprehensive customer relationship management platform designed to unify sales, marketing, and support operations for a multi-branch trading conglomerate with 2,000+ employees.",
    challenge:
      "The client managed customer data across five disconnected legacy systems, resulting in duplicate records, missed follow-ups, and a 40% lead conversion loss. Sales teams lacked real-time visibility into pipeline health.",
    solution:
      "We architected a modular CRM with unified contact management, automated lead scoring, pipeline analytics, and role-based dashboards. Custom integrations connected existing ERP and email systems without disrupting daily operations.",
    results: [
      "47% increase in lead conversion rate",
      "3.2x faster sales cycle completion",
      "Eliminated 98% of duplicate customer records",
      "Unified 5 legacy systems into one platform",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Node.js"],
    services: ["Frontend Development", "Backend Development", "UI/UX Design"],
    featured: true,
    gradient: "from-blue-600 to-cyan-500",
    image: "/projects/crm-system.jpg",
  },
  {
    slug: "insurance-dashboard",
    title: "Insurance Analytics Dashboard",
    category: "FinTech",
    client: "Gulf Shield Insurance",
    year: "2025",
    duration: "4 months",
    description:
      "A real-time analytics dashboard enabling insurance underwriters and executives to monitor claims, assess risk portfolios, and generate compliance reports across multiple product lines.",
    challenge:
      "Underwriters spent hours compiling data from siloed databases before making coverage decisions. Executive reporting required manual spreadsheet work that delayed strategic decisions by days.",
    solution:
      "We built an interactive dashboard with real-time data pipelines, customizable risk heatmaps, automated compliance reporting, and predictive claim analytics powered by historical trend analysis.",
    results: [
      "85% reduction in report generation time",
      "Real-time visibility across 12 product lines",
      "22% improvement in risk assessment accuracy",
      "Automated regulatory compliance exports",
    ],
    technologies: ["React", "D3.js", "Python", "PostgreSQL", "AWS"],
    services: ["Frontend Development", "Backend Development"],
    featured: true,
    gradient: "from-indigo-600 to-blue-500",
    image: "/projects/insurance-dashboard.jpg",
  },
  {
    slug: "real-estate-platform",
    title: "Real Estate Platform",
    category: "PropTech",
    client: "Horizon Properties",
    year: "2024",
    duration: "5 months",
    description:
      "A full-featured property marketplace with advanced search, virtual tours, mortgage calculators, and agent management tools serving buyers, sellers, and brokers across the Gulf region.",
    challenge:
      "The client's outdated listing website had poor search functionality, no mobile optimization, and zero lead tracking. Agents managed inquiries manually via WhatsApp and spreadsheets.",
    solution:
      "We delivered a responsive platform with map-based search, 3D virtual tour integration, automated lead routing to agents, and a comprehensive broker portal with performance analytics.",
    results: [
      "312% increase in qualified leads",
      "68% of traffic now from mobile devices",
      "Average time-on-site increased to 4.7 minutes",
      "Agent response time reduced by 60%",
    ],
    technologies: ["Next.js", "Mapbox", "Node.js", "MongoDB", "Stripe"],
    services: [
      "Frontend Development",
      "Backend Development",
      "UI/UX Design",
    ],
    featured: true,
    gradient: "from-emerald-600 to-teal-500",
    image: "/projects/real-estate-platform.jpg",
  },
  {
    slug: "ecommerce-dashboard",
    title: "E-commerce Operations Dashboard",
    category: "E-commerce",
    client: "Luxe Retail Co.",
    year: "2024",
    duration: "3 months",
    description:
      "A centralized operations dashboard for a multi-brand e-commerce retailer managing inventory, orders, fulfillment, and customer analytics across three online storefronts.",
    challenge:
      "Operations teams juggled three separate admin panels with inconsistent data. Inventory discrepancies caused overselling, and customer support lacked order history visibility.",
    solution:
      "We unified all storefront data into a single dashboard with real-time inventory sync, order lifecycle tracking, automated low-stock alerts, and integrated customer support tools.",
    results: [
      "99.2% inventory accuracy across channels",
      "45% faster order fulfillment",
      "Reduced overselling incidents by 94%",
      "Single-pane view for 3 storefronts",
    ],
    technologies: ["Vue", "Nuxt", "PostgreSQL", "Shopify API", "Redis"],
    services: ["Frontend Development", "Backend Development"],
    featured: true,
    gradient: "from-violet-600 to-purple-500",
    image: "/projects/ecommerce-dashboard.jpg",
  },
  {
    slug: "donation-platform",
    title: "Donation Platform",
    category: "Non-Profit",
    client: "Giving Hands Foundation",
    year: "2024",
    duration: "4 months",
    description:
      "A transparent donation platform enabling charitable organizations to launch campaigns, accept multi-currency payments, and provide donors with real-time impact tracking and tax receipts.",
    challenge:
      "The foundation relied on manual bank transfers and lacked transparency in fund allocation. Donors had no visibility into how contributions were used, reducing repeat donation rates.",
    solution:
      "We built a campaign management platform with secure payment processing, automated tax receipt generation, real-time fund allocation dashboards, and impact storytelling features for donors.",
    results: [
      "156% increase in online donations",
      "89% donor retention rate after first gift",
      "Automated tax receipts for 12,000+ donors",
      "Full fund allocation transparency",
    ],
    technologies: ["Next.js", "Stripe", "PostgreSQL", "SendGrid", "AWS S3"],
    services: [
      "Frontend Development",
      "Backend Development",
      "UI/UX Design",
    ],
    featured: false,
    gradient: "from-rose-600 to-pink-500",
    image: "/projects/donation-platform.jpg",
  },
  {
    slug: "healthcare-management",
    title: "Healthcare Management System",
    category: "HealthTech",
    client: "MedCare Clinics Network",
    year: "2025",
    duration: "7 months",
    description:
      "An end-to-end clinic management system covering patient records, appointment scheduling, billing, pharmacy inventory, and insurance claim processing for a network of 18 clinics.",
    challenge:
      "Paper-based patient records and manual scheduling caused appointment conflicts, billing errors, and HIPAA compliance risks. Doctors spent 30% of their time on administrative tasks.",
    solution:
      "We developed a HIPAA-compliant platform with electronic health records, intelligent scheduling, integrated billing, pharmacy management, and automated insurance claim submission.",
    results: [
      "70% reduction in administrative workload",
      "Zero appointment scheduling conflicts",
      "Full HIPAA compliance certification",
      "18 clinics migrated in 3 weeks",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "HL7 FHIR", "Docker"],
    services: [
      "Frontend Development",
      "Backend Development",
      "UI/UX Design",
    ],
    featured: false,
    gradient: "from-cyan-600 to-blue-500",
    image: "/projects/healthcare-management.jpg",
  },
  {
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    category: "FinTech",
    client: "Nova Digital Bank",
    year: "2025",
    duration: "8 months",
    description:
      "A feature-rich mobile banking application offering account management, instant transfers, bill payments, investment tracking, and biometric authentication for a digital-first bank.",
    challenge:
      "The bank needed to launch a mobile-first experience to compete with established players. Security, regulatory compliance, and sub-second transaction speeds were non-negotiable requirements.",
    solution:
      "We engineered a React Native application with end-to-end encryption, biometric authentication, real-time transaction notifications, and a modular architecture supporting rapid feature releases.",
    results: [
      "250,000 downloads in first 90 days",
      "4.8-star rating on both app stores",
      "Sub-200ms transaction processing",
      "99.99% uptime since launch",
    ],
    technologies: ["React Native", "Expo", "Node.js", "PostgreSQL", "AWS"],
    services: ["Mobile App Development", "Backend Development", "UI/UX Design"],
    featured: true,
    gradient: "from-amber-600 to-orange-500",
    image: "/projects/mobile-banking-app.jpg",
  },
  {
    slug: "saas-analytics-platform",
    title: "SaaS Analytics Platform",
    category: "SaaS",
    client: "MetricFlow Inc.",
    year: "2024",
    duration: "5 months",
    description:
      "A multi-tenant analytics platform providing real-time business intelligence, custom report builders, and team collaboration tools for B2B SaaS companies tracking product usage and revenue metrics.",
    challenge:
      "SaaS companies struggled to correlate product usage with revenue metrics using generic analytics tools. MetricFlow needed a purpose-built platform with customizable dashboards and team sharing.",
    solution:
      "We built a scalable analytics engine with real-time event processing, drag-and-drop report builders, role-based team workspaces, and white-label embedding for client-facing dashboards.",
    results: [
      "10,000+ dashboards created in 6 months",
      "Processing 50M events per day",
      "40% reduction in customer churn for clients",
      "White-label deployed by 35 SaaS companies",
    ],
    technologies: ["Next.js", "TypeScript", "ClickHouse", "Redis", "Kubernetes"],
    services: [
      "Frontend Development",
      "Backend Development",
      "UI/UX Design",
    ],
    featured: true,
    gradient: "from-sky-600 to-indigo-500",
    image: "/projects/saas-analytics-platform.jpg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
