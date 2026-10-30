export type ProjectKind = "selected" | "concept" | "demo";

export interface Project {
  slug: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  kind: ProjectKind;
  year: string;
  description: string;
  descriptionAr: string;
  challenge: string;
  challengeAr: string;
  solution: string;
  solutionAr: string;
  results: string[];
  resultsAr: string[];
  technologies: string[];
  services: string[];
  featured: boolean;
  image: string;
}

export const projects: Project[] = [
  {
    slug: "crm-system",
    title: "Business CRM Platform",
    titleAr: "منصة CRM للأعمال",
    category: "CRM Systems",
    categoryAr: "أنظمة CRM",
    kind: "concept",
    year: "2025",
    description:
      "A concept CRM platform designed to unify contacts, pipelines, and team follow-ups in one clear workspace.",
    descriptionAr:
      "منصة CRM نموذجية مصممة لتوحيد جهات الاتصال وخطوط المبيعات ومتابعة الفريق في مساحة عمل واضحة.",
    challenge:
      "Many growing teams track customers across chats, spreadsheets, and disconnected tools, which makes follow-ups easy to miss.",
    challengeAr:
      "كثير من الفرق المتنامية تتابع العملاء عبر المحادثات والجداول والأدوات المنفصلة، مما يجعل المتابعة سهلة الإغفال.",
    solution:
      "We designed modular CRM screens for contacts, pipeline stages, reminders, and role-based dashboards focused on daily sales operations.",
    solutionAr:
      "صممنا شاشات CRM معيارية لجهات الاتصال ومراحل خط المبيعات والتذكيرات ولوحات حسب الدور تركز على العمليات اليومية للمبيعات.",
    results: [],
    resultsAr: [],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Node.js"],
    services: ["crm-development", "ui-ux-design", "web-development"],
    featured: true,
    image: "/projects/crm-system.jpg",
  },
  {
    slug: "insurance-dashboard",
    title: "Insurance Analytics Dashboard",
    titleAr: "لوحة تحليلات للتأمين",
    category: "Dashboards",
    categoryAr: "لوحات تحكم",
    kind: "concept",
    year: "2025",
    description:
      "A concept analytics dashboard for monitoring claims activity, portfolio summaries, and operational reporting.",
    descriptionAr:
      "لوحة تحليلات نموذجية لمتابعة نشاط المطالبات وملخصات المحفظة والتقارير التشغيلية.",
    challenge:
      "Decision makers often wait for manually prepared reports before they can review risk and performance trends.",
    challengeAr:
      "صناع القرار غالباً ينتظرون تقارير تُعد يدوياً قبل مراجعة اتجاهات المخاطر والأداء.",
    solution:
      "We designed a dashboard layout with summary cards, filterable tables, and visual charts that keep key metrics easy to scan.",
    solutionAr:
      "صممنا تخطيط لوحة تحكم ببطاقات ملخص وجداول قابلة للتصفية ومخططات بصرية تجعل المؤشرات الأساسية سهلة القراءة.",
    results: [],
    resultsAr: [],
    technologies: ["React", "TypeScript", "PostgreSQL", "Node.js"],
    services: ["web-development", "crm-development", "ui-ux-design"],
    featured: true,
    image: "/projects/insurance-dashboard.jpg",
  },
  {
    slug: "healthcare-management",
    title: "Healthcare Mobile App",
    titleAr: "تطبيق رعاية صحية للجوال",
    category: "Mobile Applications",
    categoryAr: "تطبيقات جوال",
    kind: "concept",
    year: "2025",
    description:
      "A concept mobile experience for appointment booking, patient updates, and clinic communication.",
    descriptionAr:
      "تجربة جوال نموذجية لحجز المواعيد وتحديثات المرضى والتواصل مع العيادة.",
    challenge:
      "Patients and clinic staff often rely on calls and messages that are hard to track and easy to lose.",
    challengeAr:
      "يعتمد المرضى وموظفو العيادة غالباً على المكالمات والرسائل التي يصعب تتبعها ويسهل فقدانها.",
    solution:
      "We designed a mobile flow for booking, reminders, and status updates with a calm, accessible interface.",
    solutionAr:
      "صممنا تدفقاً للجوال للحجز والتذكيرات وتحديثات الحالة بواجهة هادئة وسهلة الوصول.",
    results: [],
    resultsAr: [],
    technologies: ["React Native", "Expo", "TypeScript", "Node.js"],
    services: ["mobile-app-development", "ui-ux-design"],
    featured: true,
    image: "/projects/healthcare-management.jpg",
  },
  {
    slug: "ecommerce-dashboard",
    title: "E-commerce Operations Hub",
    titleAr: "مركز عمليات للتجارة الإلكترونية",
    category: "E-commerce",
    categoryAr: "تجارة إلكترونية",
    kind: "concept",
    year: "2024",
    description:
      "A concept operations hub for catalog visibility, order tracking, and store performance monitoring.",
    descriptionAr:
      "مركز عمليات نموذجي لرؤية الكتالوج وتتبع الطلبات ومراقبة أداء المتجر.",
    challenge:
      "Store teams often jump between admin panels and spreadsheets to understand inventory and order status.",
    challengeAr:
      "فرق المتاجر غالباً تنتقل بين لوحات إدارة وجداول لفهم المخزون وحالة الطلبات.",
    solution:
      "We designed a unified operations view for products, orders, and simple alerts that keep daily work organized.",
    solutionAr:
      "صممنا واجهة عمليات موحدة للمنتجات والطلبات والتنبيهات البسيطة التي تنظم العمل اليومي.",
    results: [],
    resultsAr: [],
    technologies: ["Next.js", "Vue", "PostgreSQL", "Node.js"],
    services: ["ecommerce-development", "web-development", "ui-ux-design"],
    featured: true,
    image: "/projects/ecommerce-dashboard.jpg",
  },
  {
    slug: "real-estate-platform",
    title: "Corporate Property Website",
    titleAr: "موقع عقاري للشركات",
    category: "Corporate Websites",
    categoryAr: "مواقع شركات",
    kind: "concept",
    year: "2024",
    description:
      "A concept corporate website and listing experience for browsing properties with clearer search and inquiry flows.",
    descriptionAr:
      "موقع شركات وتجربة قوائم نموذجية لتصفح العقارات مع بحث أوضح ومسارات استفسار أفضل.",
    challenge:
      "Property seekers struggle when listings are hard to filter and inquiries disappear into chat threads.",
    challengeAr:
      "الباحثون عن عقارات يواجهون صعوبة عندما يصعب تصفية القوائم وتضيع الاستفسارات في المحادثات.",
    solution:
      "We designed a clean browsing experience with structured listing pages and a simple inquiry path.",
    solutionAr:
      "صممنا تجربة تصفح واضحة مع صفحات قوائم منظمة ومسار استفسار بسيط.",
    results: [],
    resultsAr: [],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    services: ["web-development", "ui-ux-design"],
    featured: false,
    image: "/projects/real-estate-platform.jpg",
  },
  {
    slug: "saas-analytics-platform",
    title: "Analytics Dashboard Concept",
    titleAr: "مفهوم لوحة تحليلات",
    category: "Dashboards",
    categoryAr: "لوحات تحكم",
    kind: "concept",
    year: "2024",
    description:
      "A concept analytics workspace for product and business metrics with customizable summary views.",
    descriptionAr:
      "مساحة تحليلات نموذجية لمؤشرات المنتج والأعمال مع ملخصات قابلة للتخصيص.",
    challenge:
      "Teams often need a clearer way to review usage and performance without jumping across disconnected reports.",
    challengeAr:
      "تحتاج الفرق غالباً طريقة أوضح لمراجعة الاستخدام والأداء دون التنقل بين تقارير منفصلة.",
    solution:
      "We designed dashboard modules for KPI cards, trend charts, and filterable metric tables.",
    solutionAr:
      "صممنا وحدات لوحة تحكم لبطاقات المؤشرات ومخططات الاتجاهات وجداول قابلة للتصفية.",
    results: [],
    resultsAr: [],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    services: ["web-development", "crm-development", "ui-ux-design"],
    featured: false,
    image: "/projects/saas-analytics-platform.jpg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  return projects.filter((p) => p.slug !== slug).slice(0, limit);
}

export function getProjectsByService(serviceSlug: string, limit = 3): Project[] {
  return projects
    .filter((p) => p.services.includes(serviceSlug))
    .slice(0, limit);
}
