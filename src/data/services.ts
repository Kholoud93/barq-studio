export interface Service {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  seoTitle: string;
  seoTitleAr: string;
  seoDescription: string;
  seoDescriptionAr: string;
  icon: string;
  technologies: string[];
  features: string[];
  featuresAr: string[];
  keywords: string[];
}

export const services: Service[] = [
  {
    id: "frontend",
    slug: "frontend-development",
    title: "Frontend Development",
    titleAr: "تطوير الواجهات الأمامية",
    description:
      "We craft blazing-fast, pixel-perfect interfaces that convert visitors into customers. Our frontend engineers build scalable component architectures with modern frameworks and rigorous performance standards.",
    descriptionAr:
      "نصمم واجهات سريعة ودقيقة تحول الزوار إلى عملاء. يبني مهندسو الواجهات لدينا هياكل مكونات قابلة للتوسع بأحدث الأطر ومعايير أداء صارمة.",
    seoTitle: "Frontend Development Services | React Next.js Vue",
    seoTitleAr: "خدمات تطوير الواجهات الأمامية | React Next.js Vue",
    seoDescription:
      "Vision Hub frontend development services with React, Next.js, Vue, and TypeScript. Fast, accessible, SEO-friendly enterprise interfaces.",
    seoDescriptionAr:
      "خدمات تطوير الواجهات الأمامية من Vision Hub باستخدام React و Next.js و Vue و TypeScript. واجهات مؤسسية سريعة ومتوافقة مع السيو.",
    icon: "Monitor",
    technologies: ["React", "Next.js", "Vue", "Nuxt", "TypeScript"],
    features: [
      "Component-driven architecture",
      "Server-side rendering & static generation",
      "Performance optimization & Core Web Vitals",
      "Accessibility compliance (WCAG 2.1)",
      "Design system implementation",
    ],
    featuresAr: [
      "هندسة قائمة على المكونات",
      "عرض من جانب الخادم والتوليد الثابت",
      "تحسين الأداء ومؤشرات الويب الأساسية",
      "الامتثال لمعايير الوصول (WCAG 2.1)",
      "تنفيذ أنظمة التصميم",
    ],
    keywords: [
      "frontend development",
      "React developer Egypt",
      "Next.js agency",
      "تطوير واجهات أمامية",
      "تطوير React",
    ],
  },
  {
    id: "backend",
    slug: "backend-development",
    title: "Backend Development",
    titleAr: "تطوير الخلفية",
    description:
      "Robust, secure, and scalable server infrastructure that powers mission-critical applications. We design APIs and backend systems built to handle enterprise workloads with confidence.",
    descriptionAr:
      "بنية تحتية للخوادم قوية وآمنة وقابلة للتوسع تدعم التطبيقات الحيوية. نصمم واجهات برمجة وأنظمة خلفية تتحمل أعباء العمل المؤسسية بثقة.",
    seoTitle: "Backend Development & API Engineering",
    seoTitleAr: "تطوير الخلفية وهندسة واجهات البرمجة",
    seoDescription:
      "Secure backend development by Vision Hub: REST/GraphQL APIs, authentication, databases, admin systems, and CRM automation.",
    seoDescriptionAr:
      "تطوير خلفية آمن من Vision Hub: واجهات REST/GraphQL والمصادقة وقواعد البيانات ولوحات الإدارة وأتمتة CRM.",
    icon: "Server",
    technologies: ["APIs", "Authentication", "Databases", "Admin Systems", "CRM Systems"],
    features: [
      "RESTful & GraphQL API design",
      "OAuth 2.0 & JWT authentication",
      "PostgreSQL, MongoDB & Redis",
      "Custom admin dashboards",
      "CRM & workflow automation",
    ],
    featuresAr: [
      "تصميم واجهات RESTful و GraphQL",
      "مصادقة OAuth 2.0 و JWT",
      "PostgreSQL و MongoDB و Redis",
      "لوحات تحكم إدارية مخصصة",
      "أتمتة CRM وسير العمل",
    ],
    keywords: [
      "backend development",
      "API development",
      "Node.js backend",
      "تطوير خلفية",
      "تطوير API",
    ],
  },
  {
    id: "mobile",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    titleAr: "تطوير تطبيقات الجوال",
    description:
      "Native-quality mobile experiences for iOS and Android. From concept to App Store launch, we deliver polished applications that users love and businesses rely on.",
    descriptionAr:
      "تجارب جوال بجودة التطبيقات الأصلية لنظامي iOS و Android. من الفكرة إلى الإطلاق في المتاجر، نقدم تطبيقات مصقولة يحبها المستخدمون وتعتمد عليها الشركات.",
    seoTitle: "Mobile App Development | React Native Expo",
    seoTitleAr: "تطوير تطبيقات الجوال | React Native Expo",
    seoDescription:
      "Build iOS and Android apps with Vision Hub using React Native and Expo. Store-ready mobile products with strong performance.",
    seoDescriptionAr:
      "ابنِ تطبيقات iOS و Android مع Vision Hub باستخدام React Native و Expo. منتجات جوال جاهزة للمتاجر بأداء قوي.",
    icon: "Smartphone",
    technologies: ["React Native", "Expo", "Android", "iOS"],
    features: [
      "Cross-platform development",
      "Native module integration",
      "Push notifications & offline support",
      "App Store & Play Store deployment",
      "Performance profiling & optimization",
    ],
    featuresAr: [
      "تطوير متعدد المنصات",
      "تكامل الوحدات الأصلية",
      "إشعارات فورية ودعم بدون اتصال",
      "النشر في App Store و Play Store",
      "تحليل الأداء والتحسين",
    ],
    keywords: [
      "mobile app development",
      "React Native agency",
      "iOS Android development Egypt",
      "تطوير تطبيقات الجوال",
      "تطوير تطبيقات موبايل",
    ],
  },
  {
    id: "design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    titleAr: "تصميم UI/UX",
    description:
      "Human-centered design that bridges business goals and user needs. We transform complex requirements into intuitive, beautiful interfaces that drive engagement and retention.",
    descriptionAr:
      "تصميم يركز على الإنسان يربط أهداف العمل باحتياجات المستخدم. نحول المتطلبات المعقدة إلى واجهات بديهية وجميلة تزيد التفاعل والاحتفاظ.",
    seoTitle: "UI UX Design Services & Design Systems",
    seoTitleAr: "خدمات تصميم UI UX وأنظمة التصميم",
    seoDescription:
      "UI/UX design by Vision Hub: research, wireframes, prototypes, and scalable design systems for web and mobile products.",
    seoDescriptionAr:
      "تصميم UI/UX من Vision Hub: بحث مستخدمين ومخططات ونماذج أولية وأنظمة تصميم قابلة للتوسع لمنتجات الويب والجوال.",
    icon: "Palette",
    technologies: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    features: [
      "User interviews & persona development",
      "Information architecture",
      "High-fidelity interactive prototypes",
      "Comprehensive design systems",
      "Usability testing & iteration",
    ],
    featuresAr: [
      "مقابلات المستخدمين وتطوير الشخصيات",
      "هندسة المعلومات",
      "نماذج أولية تفاعلية عالية الدقة",
      "أنظمة تصميم شاملة",
      "اختبار قابلية الاستخدام والتكرار",
    ],
    keywords: [
      "UI UX design",
      "product design agency",
      "design system",
      "تصميم واجهات",
      "تصميم تجربة مستخدم",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug || service.id === slug);
}

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
