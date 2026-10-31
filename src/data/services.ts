export interface Service {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  shortDescription: string;
  shortDescriptionAr: string;
  description: string;
  descriptionAr: string;
  seoTitle: string;
  seoTitleAr: string;
  seoDescription: string;
  seoDescriptionAr: string;
  icon: string;
  image: string;
  technologies: string[];
  features: string[];
  featuresAr: string[];
  problems: string[];
  problemsAr: string[];
  approach: string[];
  approachAr: string[];
  relatedServices: string[];
  keywords: string[];
}

export const services: Service[] = [
  {
    id: "web",
    slug: "web-development",
    title: "Web Development",
    titleAr: "تطوير مواقع الويب",
    shortDescription:
      "Responsive, high-performance websites that help businesses grow online.",
    shortDescriptionAr:
      "مواقع سريعة ومتجاوبة تساعد الشركات على النمو عبر الإنترنت.",
    description:
      "We build responsive, high-performance websites that provide excellent user experiences and help businesses grow online. From corporate sites and landing pages to custom web applications, every project is designed for clarity, speed, and conversion.",
    descriptionAr:
      "نبني مواقع سريعة ومتجاوبة توفر تجربة مستخدم ممتازة وتساعد الشركات على النمو عبر الإنترنت. من المواقع المؤسسية والصفحات التعريفية إلى تطبيقات الويب المخصصة، نصمم كل مشروع للوضوح والسرعة والتحويل.",
    seoTitle: "Web Development Company in Egypt",
    seoTitleAr: "شركة تطوير مواقع إلكترونية في مصر",
    seoDescription:
      "BARQ STUDIO builds modern websites, landing pages, and web applications for businesses in Egypt. Fast, responsive, and SEO-ready web development.",
    seoDescriptionAr:
      "برق ستوديو تطور مواقع حديثة وصفحات هبوط وتطبيقات ويب للشركات في مصر. تطوير مواقع سريع ومتجاوب وجاهز لمحركات البحث.",
    icon: "Monitor",
    image: "/services/web.jpg",
    technologies: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Business and corporate websites",
      "Landing pages",
      "Web applications",
      "E-commerce websites",
      "Performance and SEO foundations",
    ],
    featuresAr: [
      "مواقع أعمال ومواقع شركات",
      "صفحات هبوط",
      "تطبيقات ويب",
      "مواقع تجارة إلكترونية",
      "أساسيات الأداء وتحسين محركات البحث",
    ],
    problems: [
      "Outdated websites that do not reflect the brand",
      "Slow pages that hurt conversions and SEO",
      "Poor mobile experience",
      "Hard-to-manage content and features",
    ],
    problemsAr: [
      "مواقع قديمة لا تعكس هوية العلامة",
      "صفحات بطيئة تؤثر على التحويل والظهور في البحث",
      "تجربة ضعيفة على الجوال",
      "محتوى وميزات يصعب إدارتها",
    ],
    approach: [
      "Clarify goals, audience, and content structure",
      "Design a clean interface aligned with the brand",
      "Build with modern frameworks and accessibility in mind",
      "Test performance, responsiveness, and usability before launch",
    ],
    approachAr: [
      "نوضح الأهداف والجمهور وهيكل المحتوى",
      "نصمم واجهة واضحة متوافقة مع الهوية",
      "نبني بأطر حديثة مع مراعاة إمكانية الوصول",
      "نختبر الأداء والتجاوب وسهولة الاستخدام قبل الإطلاق",
    ],
    relatedServices: ["ecommerce", "uiux", "crm"],
    keywords: [
      "web development Egypt",
      "website development company",
      "تطوير مواقع إلكترونية",
      "شركة برمجة في مصر",
      "تصميم مواقع إلكترونية",
    ],
  },
  {
    id: "mobile",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    titleAr: "تطوير تطبيقات الجوال",
    shortDescription:
      "Modern mobile applications with seamless experiences across iOS and Android.",
    shortDescriptionAr:
      "تطبيقات جوال حديثة بتجربة سلسة على iOS و Android.",
    description:
      "We create modern mobile applications that deliver seamless experiences across iOS and Android. Using cross-platform approaches when suitable, we focus on usability, performance, and maintainable architecture.",
    descriptionAr:
      "نطور تطبيقات جوال حديثة تقدم تجارب سلسة على iOS و Android. نستخدم الحلول متعددة المنصات عند الحاجة، مع التركيز على سهولة الاستخدام والأداء والبنية القابلة للصيانة.",
    seoTitle: "Mobile App Development Egypt",
    seoTitleAr: "تطوير تطبيقات الجوال في مصر",
    seoDescription:
      "Mobile app development in Egypt by BARQ STUDIO for iOS and Android using React Native and Expo. Practical apps for growing businesses.",
    seoDescriptionAr:
      "تطوير تطبيقات الجوال في مصر من برق ستوديو لنظامي iOS و Android باستخدام React Native و Expo. تطبيقات عملية للشركات النامية.",
    icon: "Smartphone",
    image: "/services/mobile.jpg",
    technologies: ["React Native", "Expo", "TypeScript", "REST APIs"],
    features: [
      "iOS applications",
      "Android applications",
      "Cross-platform apps",
      "React Native solutions",
      "App store deployment support",
    ],
    featuresAr: [
      "تطبيقات iOS",
      "تطبيقات Android",
      "تطبيقات متعددة المنصات",
      "حلول React Native",
      "دعم النشر على المتاجر",
    ],
    problems: [
      "Business processes that need mobile access",
      "Separate native builds that are costly to maintain",
      "Apps that feel slow or confusing",
      "Lack of a clear product roadmap for mobile",
    ],
    problemsAr: [
      "عمليات تحتاج وصولاً عبر الجوال",
      "تطوير أصلي منفصل مكلف في الصيانة",
      "تطبيقات بطيئة أو مربكة",
      "غياب خارطة طريق واضحة للمنتج الجوال",
    ],
    approach: [
      "Define the core user journeys and MVP scope",
      "Design screens that are clear on small devices",
      "Build with a maintainable cross-platform stack when suitable",
      "Test on real devices before release",
    ],
    approachAr: [
      "نحدد رحلات المستخدم الأساسية ونطاق النسخة الأولى",
      "نصمم شاشات واضحة على الشاشات الصغيرة",
      "نبني ببنية متعددة المنصات قابلة للصيانة عند المناسبة",
      "نختبر على أجهزة حقيقية قبل الإطلاق",
    ],
    relatedServices: ["web", "uiux", "ai"],
    keywords: [
      "mobile app development Egypt",
      "React Native company",
      "شركة تطوير تطبيقات في مصر",
      "تصميم تطبيقات موبايل",
      "تطوير تطبيقات",
    ],
  },
  {
    id: "ecommerce",
    slug: "ecommerce-development",
    title: "E-commerce Solutions",
    titleAr: "حلول التجارة الإلكترونية",
    shortDescription:
      "Scalable online stores designed to simplify shopping and support growth.",
    shortDescriptionAr:
      "متاجر إلكترونية قابلة للتوسع تبسط التسوق وتدعم النمو.",
    description:
      "We develop scalable online stores designed to simplify shopping experiences and support business growth. From product catalogs and carts to checkout flows, we focus on clarity, trust, and conversion.",
    descriptionAr:
      "نطور متاجر إلكترونية قابلة للتوسع تبسط تجربة التسوق وتدعم نمو الأعمال. من كتالوج المنتجات والسلة إلى مسار الدفع، نركز على الوضوح والثقة والتحويل.",
    seoTitle: "E-commerce Development Egypt",
    seoTitleAr: "تطوير متاجر إلكترونية في مصر",
    seoDescription:
      "E-commerce development in Egypt by BARQ STUDIO: online stores, catalogs, carts, and checkout flows for businesses ready to sell online.",
    seoDescriptionAr:
      "تطوير متاجر إلكترونية في مصر من برق ستوديو: متاجر أونلاين وكتالوج وسلة ومسار دفع للشركات الجاهزة للبيع عبر الإنترنت.",
    icon: "ShoppingBag",
    image: "/services/web.jpg",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
    features: [
      "Online stores",
      "Product management",
      "Shopping cart",
      "Checkout integration",
      "Payment integration when required",
    ],
    featuresAr: [
      "متاجر إلكترونية",
      "إدارة المنتجات",
      "سلة التسوق",
      "تكامل مسار الدفع",
      "تكامل الدفع عند الحاجة",
    ],
    problems: [
      "Manual order handling that does not scale",
      "Stores that are hard to browse on mobile",
      "Unclear product pages and checkout friction",
      "Limited visibility into inventory and orders",
    ],
    problemsAr: [
      "معالجة طلبات يدوية لا تتوسع",
      "متاجر يصعب تصفحها على الجوال",
      "صفحات منتجات غير واضحة واحتكاك في الدفع",
      "رؤية محدودة للمخزون والطلبات",
    ],
    approach: [
      "Map the shopping journey from discovery to purchase",
      "Design product and checkout flows that reduce friction",
      "Implement catalog, cart, and order management clearly",
      "Prepare for growth with maintainable architecture",
    ],
    approachAr: [
      "نرسم رحلة التسوق من الاكتشاف حتى الشراء",
      "نصمم صفحات المنتجات ومسار الدفع لتقليل الاحتكاك",
      "ننفذ الكتالوج والسلة وإدارة الطلبات بوضوح",
      "نهيئ البنية للنمو المستقبلي",
    ],
    relatedServices: ["web", "uiux", "crm"],
    keywords: [
      "ecommerce website development",
      "online store Egypt",
      "تصميم متجر إلكتروني",
      "تطوير متجر إلكتروني",
      "شركة تجارة إلكترونية",
    ],
  },
  {
    id: "crm",
    slug: "crm-development",
    title: "CRM & Custom Business Systems",
    titleAr: "أنظمة CRM والأنظمة المخصصة",
    shortDescription:
      "Custom systems that help companies manage operations, customers, and workflows.",
    shortDescriptionAr:
      "أنظمة مخصصة تساعد الشركات على إدارة العمليات والعملاء وسير العمل.",
    description:
      "We develop custom business systems that help companies manage operations, customers, teams, and workflows efficiently. From CRM platforms to admin dashboards and internal tools, we build software around real operational needs.",
    descriptionAr:
      "نطور أنظمة أعمال مخصصة تساعد الشركات على إدارة العمليات والعملاء والفرق وسير العمل بكفاءة. من منصات CRM إلى لوحات الإدارة والأدوات الداخلية، نبني برمجيات حول الاحتياجات التشغيلية الحقيقية.",
    seoTitle: "Custom CRM Development Egypt",
    seoTitleAr: "تطوير أنظمة CRM مخصصة في مصر",
    seoDescription:
      "Custom CRM development in Egypt by BARQ STUDIO. Admin dashboards, management tools, and internal software tailored to your workflows.",
    seoDescriptionAr:
      "تطوير أنظمة CRM مخصصة في مصر من برق ستوديو. لوحات إدارة وأدوات داخلية مصممة وفق سير عملك.",
    icon: "LayoutDashboard",
    image: "/services/backend.jpg",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "REST APIs", "TypeScript"],
    features: [
      "CRM systems",
      "Admin dashboards",
      "Management systems",
      "Internal business tools",
      "Custom software",
    ],
    featuresAr: [
      "أنظمة CRM",
      "لوحات تحكم إدارية",
      "أنظمة إدارة",
      "أدوات أعمال داخلية",
      "برمجيات مخصصة",
    ],
    problems: [
      "Customer and operations data scattered across tools",
      "Manual follow-ups and unclear ownership",
      "Spreadsheets that break as the team grows",
      "No shared view of pipeline or operations",
    ],
    problemsAr: [
      "بيانات العملاء والعمليات مشتتة بين أدوات متعددة",
      "متابعة يدوية ومسؤوليات غير واضحة",
      "جداول بيانات تنهار مع نمو الفريق",
      "غياب رؤية مشتركة للعمليات أو خط المبيعات",
    ],
    approach: [
      "Map current workflows and pain points with stakeholders",
      "Prioritize the modules that create the most operational value",
      "Design clear dashboards and role-based access",
      "Build iteratively so teams can adopt the system confidently",
    ],
    approachAr: [
      "نرسم سير العمل الحالي ونقاط الألم مع أصحاب المصلحة",
      "نرتب الأولويات للوحدات الأعلى قيمة تشغيلية",
      "نصمم لوحات واضحة وصلاحيات حسب الدور",
      "نبني بشكل تدريجي ليتمكن الفريق من التبني بثقة",
    ],
    relatedServices: ["web", "ai", "uiux"],
    keywords: [
      "custom CRM development",
      "business systems Egypt",
      "تطوير أنظمة CRM",
      "تطوير أنظمة إدارية",
      "لوحات تحكم مخصصة",
    ],
  },
  {
    id: "uiux",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    titleAr: "تصميم UI/UX",
    shortDescription:
      "Intuitive, user-centered interfaces that combine usability and aesthetics.",
    shortDescriptionAr:
      "واجهات بديهية تركز على المستخدم وتجمع بين سهولة الاستخدام والجمال.",
    description:
      "We design intuitive, user-centered interfaces that combine usability, aesthetics, and business goals. From research and wireframes to polished UI and design systems, we create experiences people can navigate with confidence.",
    descriptionAr:
      "نصمم واجهات بديهية تركز على المستخدم وتجمع بين سهولة الاستخدام والجمال وأهداف العمل. من البحث والمخططات إلى واجهات مصقولة وأنظمة تصميم، نصنع تجارب يتنقل فيها المستخدم بثقة.",
    seoTitle: "UI UX Design Services Egypt",
    seoTitleAr: "خدمات تصميم مواقع وواجهات UI UX في مصر",
    seoDescription:
      "UI/UX design services by BARQ STUDIO: research, wireframes, prototypes, and design systems for web and mobile products.",
    seoDescriptionAr:
      "خدمات تصميم UI/UX من برق ستوديو: بحث ومخططات ونماذج أولية وأنظمة تصميم لمنتجات الويب والجوال.",
    icon: "Palette",
    image: "/services/design.jpg",
    technologies: ["Figma", "Design Systems", "Prototyping", "User Research"],
    features: [
      "UX research",
      "Wireframes",
      "UI design",
      "Prototypes",
      "Design systems",
    ],
    featuresAr: [
      "بحث تجربة المستخدم",
      "مخططات Wireframes",
      "تصميم واجهات",
      "نماذج أولية",
      "أنظمة تصميم",
    ],
    problems: [
      "Interfaces that look polished but confuse users",
      "Inconsistent screens across products",
      "Missing design foundation before development",
      "Low engagement due to unclear flows",
    ],
    problemsAr: [
      "واجهات تبدو جيدة لكنها تربك المستخدم",
      "شاشات غير متسقة عبر المنتجات",
      "غياب أساس تصميمي قبل التطوير",
      "تفاعل منخفض بسبب تدفقات غير واضحة",
    ],
    approach: [
      "Understand users, goals, and constraints",
      "Structure information and key flows first",
      "Design high-fidelity interfaces and interactive prototypes",
      "Hand off clean specs and components for development",
    ],
    approachAr: [
      "نفهم المستخدمين والأهداف والقيود",
      "نرتب المعلومات والتدفقات الأساسية أولاً",
      "نصمم واجهات عالية الدقة ونماذج تفاعلية",
      "نسلم مواصفات ومكونات واضحة للتطوير",
    ],
    relatedServices: ["web", "mobile", "ecommerce"],
    keywords: [
      "UI UX design services",
      "product design Egypt",
      "تصميم واجهات المستخدم",
      "تصميم تجربة مستخدم",
      "تصميم UI UX",
    ],
  },
  {
    id: "ai",
    slug: "ai-automation",
    title: "AI Automation",
    titleAr: "أتمتة الأعمال بالذكاء الاصطناعي",
    shortDescription:
      "Practical AI-powered automation that improves workflows and reduces repetitive work.",
    shortDescriptionAr:
      "أتمتة عملية بالذكاء الاصطناعي تحسّن سير العمل وتقلل المهام المتكررة.",
    description:
      "We help businesses automate repetitive tasks and improve workflows using modern AI-powered solutions. From workflow automation and chatbots to API integrations, we focus on practical outcomes rather than hype.",
    descriptionAr:
      "نساعد الشركات على أتمتة المهام المتكررة وتحسين سير العمل باستخدام حلول حديثة مدعومة بالذكاء الاصطناعي. من أتمتة العمليات وروبوتات المحادثة إلى تكاملات API، نركز على نتائج عملية لا على المبالغة.",
    seoTitle: "AI Automation Services Egypt",
    seoTitleAr: "خدمات أتمتة الذكاء الاصطناعي في مصر",
    seoDescription:
      "AI automation services in Egypt by BARQ STUDIO: workflow automation, chatbots, process automation, and API integrations for real operational gains.",
    seoDescriptionAr:
      "خدمات أتمتة الذكاء الاصطناعي في مصر من برق ستوديو: أتمتة سير العمل وروبوتات محادثة وأتمتة العمليات وتكاملات API.",
    icon: "Bot",
    image: "/services/backend.jpg",
    technologies: ["OpenAI", "Node.js", "REST APIs", "Webhooks", "Automation"],
    features: [
      "Workflow automation",
      "AI integrations",
      "Chatbots",
      "Business process automation",
      "API integrations",
    ],
    featuresAr: [
      "أتمتة سير العمل",
      "تكاملات الذكاء الاصطناعي",
      "روبوتات محادثة",
      "أتمتة العمليات التجارية",
      "تكاملات API",
    ],
    problems: [
      "Teams spending hours on repetitive manual tasks",
      "Slow response times to customer inquiries",
      "Disconnected tools that require constant copy-paste",
      "Processes that break as volume increases",
    ],
    problemsAr: [
      "فرق تقضي ساعات في مهام يدوية متكررة",
      "بطء الرد على استفسارات العملاء",
      "أدوات منفصلة تتطلب نسخاً ولصقاً مستمراً",
      "عمليات تنهار مع زيادة الحجم",
    ],
    approach: [
      "Identify high-friction repetitive workflows",
      "Choose automation or AI where it creates clear value",
      "Integrate with existing tools through reliable APIs",
      "Monitor results and refine based on real usage",
    ],
    approachAr: [
      "نحدد سير العمل المتكرر عالي الاحتكاك",
      "نختار الأتمتة أو الذكاء الاصطناعي حيث توجد قيمة واضحة",
      "نربط الأدوات الحالية عبر واجهات برمجة موثوقة",
      "نراقب النتائج ونحسّن بناءً على الاستخدام الفعلي",
    ],
    relatedServices: ["crm", "web", "mobile"],
    keywords: [
      "AI automation services",
      "business process automation",
      "أتمتة الأعمال بالذكاء الاصطناعي",
      "أتمتة العمليات",
      "تكامل الذكاء الاصطناعي",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug || service.id === slug);
}

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export const legacyServiceRedirects: Record<string, string> = {
  "frontend-development": "web-development",
  "backend-development": "crm-development",
};
