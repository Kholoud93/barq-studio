export interface ServiceFaq {
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  h1: string;
  h1Ar: string;
  shortDescription: string;
  shortDescriptionAr: string;
  intro: string;
  introAr: string;
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
  benefits: string[];
  benefitsAr: string[];
  suitableFor: string;
  suitableForAr: string;
  problems: string[];
  problemsAr: string[];
  approach: string[];
  approachAr: string[];
  relatedServices: string[];
  featuredProjectSlugs: string[];
  ctaLabel: string;
  ctaLabelAr: string;
  faqs: ServiceFaq[];
  keywords: string[];
}

export const services: Service[] = [
  {
    id: "web",
    slug: "web-development",
    title: "Web Development",
    titleAr: "تطوير مواقع الويب",
    h1: "Web Development Company in Egypt",
    h1Ar: "شركة تصميم مواقع وتطوير ويب في مصر",
    shortDescription:
      "Responsive, high-performance websites that help businesses grow online.",
    shortDescriptionAr:
      "مواقع سريعة ومتجاوبة تساعد الشركات على النمو عبر الإنترنت.",
    intro:
      "BARQ STUDIO builds clear, fast websites and web applications for businesses that need a credible digital presence — from corporate sites to product-facing web apps.",
    introAr:
      "برق ستوديو تبني مواقع وتطبيقات ويب واضحة وسريعة للشركات التي تحتاج حضوراً رقمياً موثوقاً — من مواقع الشركات إلى تطبيقات الويب الموجهة للمنتج.",
    description:
      "We plan structure and content, design usable interfaces, and implement with modern stacks such as React, Next.js, TypeScript, and Tailwind. Our focus is clarity, mobile experience, maintainability, and solid SEO foundations.",
    descriptionAr:
      "نخطط الهيكل والمحتوى، ونصمم واجهات سهلة الاستخدام، وننفّذ بأطر حديثة مثل React و Next.js و TypeScript و Tailwind. تركيزنا على الوضوح وتجربة الجوال وقابلية الصيانة وأساسيات تحسين محركات البحث.",
    seoTitle: "Web Development Company Egypt | BARQ STUDIO",
    seoTitleAr: "شركة تصميم مواقع في مصر | برق ستوديو",
    seoDescription:
      "BARQ STUDIO is a web development company in Egypt (شركة تصميم مواقع في مصر) building business websites, landing pages, and web apps with React, Next.js, and modern performance practices.",
    seoDescriptionAr:
      "برق ستوديو شركة تصميم مواقع في مصر لبناء مواقع أعمال وصفحات هبوط وتطبيقات ويب باستخدام React و Next.js وممارسات أداء حديثة.",
    icon: "Monitor",
    image: "/services/web.jpg",
    technologies: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Business and corporate websites",
      "Landing pages",
      "Web applications",
      "Performance and technical SEO foundations",
    ],
    featuresAr: [
      "مواقع أعمال ومواقع شركات",
      "صفحات هبوط",
      "تطبيقات ويب",
      "أساسيات الأداء وتحسين محركات البحث التقني",
    ],
    benefits: [
      "Clearer brand presence",
      "Fast and usable pages",
      "Easier content and feature growth",
      "Stronger foundations for SEO and conversions",
    ],
    benefitsAr: [
      "حضور أوضح للعلامة التجارية",
      "صفحات سريعة وسهلة الاستخدام",
      "نمو أسهل للمحتوى والميزات",
      "أساس أقوى لتحسين الظهور والتحويل",
    ],
    suitableFor:
      "SMEs, startups, and teams that need a new or rebuilt marketing website or a custom web application.",
    suitableForAr:
      "الشركات الصغيرة والمتوسطة والشركات الناشئة والفرق التي تحتاج موقعاً تسويقياً جديداً أو إعادة بناء، أو تطبيقاً ويب مخصصاً.",
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
    relatedServices: ["ecommerce", "uiux", "mobile"],
    featuredProjectSlugs: [
      "real-estate-platform",
      "insurance-dashboard",
      "saas-analytics-platform",
    ],
    ctaLabel: "Discuss Your Website Project",
    ctaLabelAr: "ناقش مشروع موقعك",
    faqs: [
      {
        question: "Do you only build marketing websites?",
        questionAr: "هل تبنون مواقع تسويقية فقط؟",
        answer:
          "No. BARQ STUDIO also builds custom web applications when project requirements call for them.",
        answerAr:
          "لا. تبني برق ستوديو أيضاً تطبيقات ويب مخصصة عندما تتطلب متطلبات المشروع ذلك.",
      },
      {
        question: "Which technologies do you use?",
        questionAr: "ما التقنيات التي تستخدمونها؟",
        answer:
          "React, Next.js, Vue/Nuxt, TypeScript, and Tailwind, depending on project requirements.",
        answerAr:
          "React و Next.js و Vue/Nuxt و TypeScript و Tailwind حسب متطلبات كل مشروع.",
      },
      {
        question: "Is SEO included in website development?",
        questionAr: "هل يشمل تطوير الموقع تحسين محركات البحث؟",
        answer:
          "Technical SEO foundations such as structure, semantics, and performance can be included. Ongoing content SEO is scoped separately.",
        answerAr:
          "يمكن تضمين أساسيات تحسين محركات البحث التقنية مثل الهيكل والدلالة والأداء. تحسين المحتوى المستمر يُحدد نطاقه بشكل منفصل.",
      },
      {
        question: "Can you redesign an existing website?",
        questionAr: "هل يمكنكم إعادة تصميم موقع قائم؟",
        answer:
          "Yes, when the project scope and requirements are clearly defined.",
        answerAr: "نعم، عندما يكون نطاق المشروع والمتطلبات واضحة.",
      },
    ],
    keywords: [
      "Web Development Company Egypt",
      "Website Design Company Egypt",
      "شركة تصميم مواقع في مصر",
      "تطوير مواقع إلكترونية",
      "web development Egypt",
    ],
  },
  {
    id: "mobile",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    titleAr: "تطوير تطبيقات الجوال",
    h1: "Mobile App Development in Egypt",
    h1Ar: "تطوير وتصميم تطبيقات الجوال في مصر",
    shortDescription:
      "Modern mobile applications with seamless experiences across iOS and Android.",
    shortDescriptionAr:
      "تطبيقات جوال حديثة بتجربة سلسة على iOS و Android.",
    intro:
      "Practical mobile products for businesses that need reliable access on iOS and Android — without unnecessary complexity.",
    introAr:
      "منتجات جوال عملية للشركات التي تحتاج وصولاً موثوقاً على iOS و Android — دون تعقيد غير ضروري.",
    description:
      "Cross-platform development when suitable, using React Native, Expo, TypeScript, and APIs. Focus on core user journeys, clear interfaces on small screens, and real-device testing before release.",
    descriptionAr:
      "تطوير متعدد المنصات عند المناسبة باستخدام React Native و Expo و TypeScript وواجهات البرمجة. نركز على رحلات المستخدم الأساسية وواجهات واضحة على الشاشات الصغيرة والاختبار على أجهزة حقيقية قبل الإطلاق.",
    seoTitle: "Mobile App Development Egypt | BARQ STUDIO",
    seoTitleAr: "شركة تصميم تطبيقات | برق ستوديو",
    seoDescription:
      "Mobile app development in Egypt by BARQ STUDIO — iOS and Android apps with React Native and Expo, focused on usability and maintainable architecture.",
    seoDescriptionAr:
      "تطوير تطبيقات الجوال في مصر من برق ستوديو — تطبيقات iOS و Android باستخدام React Native و Expo مع التركيز على سهولة الاستخدام والبنية القابلة للصيانة.",
    icon: "Smartphone",
    image: "/services/mobile.jpg",
    technologies: ["React Native", "Expo", "TypeScript", "REST APIs"],
    features: [
      "iOS applications",
      "Android applications",
      "Cross-platform apps",
      "React Native solutions",
      "Store deployment support",
    ],
    featuresAr: [
      "تطبيقات iOS",
      "تطبيقات Android",
      "تطبيقات متعددة المنصات",
      "حلول React Native",
      "دعم النشر على المتاجر",
    ],
    benefits: [
      "A maintainable codebase when cross-platform is suitable",
      "Clearer mobile user experience",
      "A focused path toward an MVP",
      "App-store deployment support when included in project scope",
    ],
    benefitsAr: [
      "قاعدة كود قابلة للصيانة عند مناسبة الحلول متعددة المنصات",
      "تجربة مستخدم أوضح على الجوال",
      "مسار مركّز نحو نسخة أولى (MVP)",
      "دعم النشر على المتاجر عند إدراجه في نطاق المشروع",
    ],
    suitableFor:
      "Operations and field teams, customer-facing applications, and products that need mobile as a primary channel.",
    suitableForAr:
      "فرق التشغيل والميدان، والتطبيقات الموجهة للعملاء، والمنتجات التي تحتاج الجوال كقناة أساسية.",
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
    featuredProjectSlugs: ["healthcare-management"],
    ctaLabel: "Start Your App Project",
    ctaLabelAr: "ابدأ مشروع تطبيقك",
    faqs: [
      {
        question: "Should I build a native or cross-platform application?",
        questionAr: "هل أبني تطبيقاً أصلياً أم متعدد المنصات؟",
        answer:
          "The decision depends on product requirements. Cross-platform development is considered when it fits the project.",
        answerAr:
          "يعتمد القرار على متطلبات المنتج. ننظر في التطوير متعدد المنصات عندما يناسب المشروع.",
      },
      {
        question: "Do you work with React Native?",
        questionAr: "هل تعملون بـ React Native؟",
        answer:
          "Yes, when the project requirements are suitable for React Native.",
        answerAr: "نعم، عندما تكون متطلبات المشروع مناسبة لـ React Native.",
      },
      {
        question: "Can you help build an MVP?",
        questionAr: "هل يمكنكم المساعدة في بناء نسخة أولى (MVP)؟",
        answer:
          "Yes. We can define the essential user journeys and prioritize the first version.",
        answerAr:
          "نعم. يمكننا تحديد رحلات المستخدم الأساسية وترتيب أولويات النسخة الأولى.",
      },
      {
        question: "Can the app connect to an existing backend?",
        questionAr: "هل يمكن ربط التطبيق بخادم خلفي قائم؟",
        answer:
          "Yes, when the backend provides suitable APIs, such as REST APIs.",
        answerAr:
          "نعم، عندما يوفّر الخادم الخلفي واجهات برمجة مناسبة مثل REST APIs.",
      },
    ],
    keywords: [
      "Mobile App Development Egypt",
      "شركة تصميم تطبيقات",
      "React Native company",
      "تطوير تطبيقات الجوال",
      "تصميم تطبيقات موبايل",
    ],
  },
  {
    id: "ecommerce",
    slug: "ecommerce-development",
    title: "E-commerce Solutions",
    titleAr: "حلول التجارة الإلكترونية",
    h1: "E-commerce Development in Egypt",
    h1Ar: "تصميم وتطوير متاجر إلكترونية في مصر",
    shortDescription:
      "Scalable online stores designed to simplify shopping and support growth.",
    shortDescriptionAr:
      "متاجر إلكترونية قابلة للتوسع تبسط التسوق وتدعم النمو.",
    intro:
      "Online stores built for clarity and conversion — from product catalogs to checkout — for businesses ready to sell digitally.",
    introAr:
      "متاجر إلكترونية مبنية للوضوح والتحويل — من كتالوج المنتجات حتى الدفع — للشركات الجاهزة للبيع رقمياً.",
    description:
      "We plan shopping journeys, product experiences, and checkout flows. Solutions may include product catalogs, carts, orders, and payment integration, using technologies that fit the project requirements.",
    descriptionAr:
      "نخطط رحلات التسوق وتجربة المنتج ومسارات الدفع. قد تشمل الحلول كتالوج المنتجات والسلة والطلبات وتكامل الدفع، باستخدام تقنيات تناسب متطلبات المشروع.",
    seoTitle: "E-commerce Development Egypt | BARQ STUDIO",
    seoTitleAr: "شركة تصميم متاجر إلكترونية | برق ستوديو",
    seoDescription:
      "E-commerce development in Egypt by BARQ STUDIO — online stores with catalogs, carts, checkout, and payment integration when required.",
    seoDescriptionAr:
      "تطوير متاجر إلكترونية في مصر من برق ستوديو — متاجر أونلاين مع كتالوج وسلة ومسار دفع وتكامل دفع عند الحاجة.",
    icon: "ShoppingBag",
    image: "/services/web.jpg",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
    features: [
      "Online stores",
      "Product management",
      "Shopping carts",
      "Checkout flows",
      "Payment integration when required",
    ],
    featuresAr: [
      "متاجر إلكترونية",
      "إدارة المنتجات",
      "سلال تسوق",
      "مسارات الدفع",
      "تكامل الدفع عند الحاجة",
    ],
    benefits: [
      "More organized online ordering",
      "Better mobile product browsing",
      "Clearer product and checkout journeys",
      "An architecture that can support future growth",
    ],
    benefitsAr: [
      "طلبات أونلاين أكثر تنظيماً",
      "تصفح منتجات أفضل على الجوال",
      "رحلات منتج ودفع أوضح",
      "بنية تدعم النمو المستقبلي",
    ],
    suitableFor:
      "Retail and product businesses moving from manual or fragmented selling to a structured online storefront.",
    suitableForAr:
      "أعمال التجزئة والمنتجات التي تنتقل من البيع اليدوي أو المجزأ إلى واجهة متجر إلكتروني منظمة.",
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
    featuredProjectSlugs: ["ecommerce-dashboard"],
    ctaLabel: "Plan Your Online Store",
    ctaLabelAr: "خطط لمتجرك الإلكتروني",
    faqs: [
      {
        question: "Can you integrate online payments?",
        questionAr: "هل يمكن دمج الدفع الإلكتروني؟",
        answer:
          "Payment integration can be included when required and supported by the chosen provider and project scope.",
        answerAr:
          "يمكن تضمين تكامل الدفع عند الحاجة وعندما يدعمه مزوّد الدفع المختار ونطاق المشروع.",
      },
      {
        question: "Do you build custom online stores?",
        questionAr: "هل تبنون متاجر إلكترونية مخصصة؟",
        answer:
          "Yes. The solution is planned around the product catalog and customer journey.",
        answerAr: "نعم. تُخطَّط الحل حول كتالوج المنتجات ورحلة العميل.",
      },
      {
        question: "Can the store support order and inventory management?",
        questionAr: "هل يدعم المتجر إدارة الطلبات والمخزون؟",
        answer:
          "The system can be designed to provide clearer order and operational visibility according to requirements.",
        answerAr:
          "يمكن تصميم النظام لتوفير رؤية أوضح للطلبات والعمليات وفق المتطلبات.",
      },
      {
        question: "Can an online store connect to a CRM?",
        questionAr: "هل يمكن ربط المتجر بنظام CRM؟",
        answer:
          "Yes, when the business workflow and integration requirements are defined.",
        answerAr: "نعم، عندما تكون سير العمل ومتطلبات التكامل واضحة.",
      },
    ],
    keywords: [
      "E-commerce Development Egypt",
      "شركة تصميم متاجر إلكترونية",
      "online store Egypt",
      "تطوير متجر إلكتروني",
      "تصميم متجر إلكتروني",
    ],
  },
  {
    id: "crm",
    slug: "crm-development",
    title: "CRM & Custom Business Systems",
    titleAr: "أنظمة CRM والأنظمة المخصصة",
    h1: "Custom CRM Development in Egypt",
    h1Ar: "تطوير أنظمة CRM وأنظمة أعمال مخصصة في مصر",
    shortDescription:
      "Custom systems that help companies manage operations, customers, and workflows.",
    shortDescriptionAr:
      "أنظمة مخصصة تساعد الشركات على إدارة العمليات والعملاء وسير العمل.",
    intro:
      "Software designed around how your team actually works — customers, operations, and internal processes — instead of forcing your business into a rigid off-the-shelf system.",
    introAr:
      "برمجيات مصممة وفق طريقة عمل فريقك فعلياً — العملاء والعمليات والعمليات الداخلية — بدل إجبار عملك على نظام جاهز جامد.",
    description:
      "We help define workflows, prioritize modules, and build role-based dashboards and internal tools using technologies such as Next.js, Node.js, PostgreSQL, APIs, and TypeScript when suitable.",
    descriptionAr:
      "نساعد على تحديد سير العمل وترتيب أولويات الوحدات وبناء لوحات تحكم وأدوات داخلية بصلاحيات حسب الدور باستخدام تقنيات مثل Next.js و Node.js و PostgreSQL وواجهات البرمجة و TypeScript عند المناسبة.",
    seoTitle: "Custom CRM Development Egypt | BARQ STUDIO",
    seoTitleAr: "تطوير أنظمة CRM مخصصة في مصر | برق ستوديو",
    seoDescription:
      "Custom CRM and business systems in Egypt by BARQ STUDIO — dashboards, management tools, and internal software shaped around real workflows.",
    seoDescriptionAr:
      "تطوير أنظمة CRM وأنظمة أعمال مخصصة في مصر من برق ستوديو — لوحات تحكم وأدوات إدارة وبرمجيات داخلية وفق سير العمل الحقيقي.",
    icon: "LayoutDashboard",
    image: "/services/backend.jpg",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "REST APIs", "TypeScript"],
    features: [
      "Custom CRM systems",
      "Admin dashboards",
      "Management systems",
      "Internal tools",
      "Custom business software",
    ],
    featuresAr: [
      "أنظمة CRM مخصصة",
      "لوحات تحكم إدارية",
      "أنظمة إدارة",
      "أدوات داخلية",
      "برمجيات أعمال مخصصة",
    ],
    benefits: [
      "Less scattered business data",
      "Clearer ownership and follow-ups",
      "Better visibility into workflows",
      "Less dependence on disconnected spreadsheets",
      "A shared view of customer and operational activity",
    ],
    benefitsAr: [
      "بيانات أعمال أقل تشتتاً",
      "ملكية ومتابعة أوضح",
      "رؤية أفضل لسير العمل",
      "اعتماد أقل على جداول بيانات منفصلة",
      "رؤية مشتركة لنشاط العملاء والعمليات",
    ],
    suitableFor:
      "Growing teams that manage customers and operations across spreadsheets, chats, or disconnected tools, and need a tailored system.",
    suitableForAr:
      "الفرق النامية التي تدير العملاء والعمليات عبر جداول ودردشات أو أدوات منفصلة وتحتاج نظاماً مخصصاً.",
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
    featuredProjectSlugs: [
      "crm-system",
      "insurance-dashboard",
      "saas-analytics-platform",
    ],
    ctaLabel: "Discuss Your CRM System",
    ctaLabelAr: "ناقش نظام الـ CRM",
    faqs: [
      {
        question: "Do you only build traditional CRM systems?",
        questionAr: "هل تبنون أنظمة CRM تقليدية فقط؟",
        answer:
          "No. We build custom CRM solutions and broader internal business systems based on workflow requirements.",
        answerAr:
          "لا. نبني حلول CRM مخصصة وأنظمة أعمال داخلية أوسع وفق متطلبات سير العمل.",
      },
      {
        question: "Can we start with a small number of modules?",
        questionAr: "هل يمكننا البدء بعدد صغير من الوحدات؟",
        answer:
          "Yes. The project can prioritize the highest-value modules first.",
        answerAr: "نعم. يمكن للمشروع ترتيب أولوية الوحدات الأعلى قيمة أولاً.",
      },
      {
        question: "Can the system support user roles and permissions?",
        questionAr: "هل يدعم النظام أدوار المستخدمين والصلاحيات؟",
        answer:
          "Role-based access can be included according to system requirements.",
        answerAr: "يمكن تضمين صلاحيات حسب الدور وفق متطلبات النظام.",
      },
      {
        question: "Can AI automation be added later?",
        questionAr: "هل يمكن إضافة أتمتة بالذكاء الاصطناعي لاحقاً؟",
        answer:
          "AI automation can be considered when there is a clear use case and suitable integration requirements.",
        answerAr:
          "يمكن النظر في أتمتة الذكاء الاصطناعي عندما تكون حالة الاستخدام ومتطلبات التكامل واضحة.",
      },
    ],
    keywords: [
      "Custom CRM Development",
      "CRM Development Company Egypt",
      "تطوير أنظمة CRM مخصصة في مصر",
      "business systems Egypt",
      "لوحات تحكم مخصصة",
    ],
  },
  {
    id: "uiux",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    titleAr: "تصميم UI/UX",
    h1: "UI/UX Design Agency in Egypt",
    h1Ar: "تصميم واجهات وتجربة مستخدم UI/UX في مصر",
    shortDescription:
      "Intuitive, user-centered interfaces that combine usability and aesthetics.",
    shortDescriptionAr:
      "واجهات بديهية تركز على المستخدم وتجمع بين سهولة الاستخدام والجمال.",
    intro:
      "Interfaces that look intentional and remain usable — aligned with real user journeys and what engineering can build.",
    introAr:
      "واجهات تبدو مقصودة وتبقى سهلة الاستخدام — متوافقة مع رحلات المستخدم الحقيقية وما يمكن للهندسة بناؤه.",
    description:
      "The design process can include research, information architecture, wireframes, high-fidelity UI, prototypes, and handoff using Figma and design-system practices.",
    descriptionAr:
      "يمكن أن تشمل عملية التصميم البحث وهندسة المعلومات والمخططات وواجهات عالية الدقة والنماذج الأولية وتسليم التصميم باستخدام Figma وممارسات أنظمة التصميم.",
    seoTitle: "UI/UX Design Agency Egypt | BARQ STUDIO",
    seoTitleAr: "تصميم UI/UX في مصر | برق ستوديو",
    seoDescription:
      "UI/UX design agency services in Egypt by BARQ STUDIO — research, wireframes, UI, prototypes, and design systems for web and mobile.",
    seoDescriptionAr:
      "خدمات تصميم UI/UX في مصر من برق ستوديو — بحث ومخططات وواجهات ونماذج أولية وأنظمة تصميم للويب والجوال.",
    icon: "Palette",
    image: "/services/design.jpg",
    technologies: ["Figma", "Design Systems", "Prototyping", "User Research"],
    features: [
      "UX research",
      "Wireframes",
      "UI design",
      "Interactive prototypes",
      "Design systems",
    ],
    featuresAr: [
      "بحث تجربة المستخدم",
      "مخططات Wireframes",
      "تصميم واجهات",
      "نماذج أولية تفاعلية",
      "أنظمة تصميم",
    ],
    benefits: [
      "Clearer user journeys",
      "Consistency across screens",
      "Design decisions before costly implementation",
      "More usable and coherent product experiences",
    ],
    benefitsAr: [
      "رحلات مستخدم أوضح",
      "اتساق عبر الشاشات",
      "قرارات تصميم قبل التنفيذ المكلف",
      "تجارب منتج أكثر سهولة وتماسكاً",
    ],
    suitableFor:
      "Teams preparing to build a product or improving an existing web or mobile experience.",
    suitableForAr:
      "الفرق التي تستعد لبناء منتج أو تحسين تجربة ويب أو جوال قائمة.",
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
    featuredProjectSlugs: [
      "real-estate-platform",
      "healthcare-management",
      "ecommerce-dashboard",
    ],
    ctaLabel: "Improve Your Product UX",
    ctaLabelAr: "حسّن تجربة منتجك",
    faqs: [
      {
        question: "Do you offer design-only projects?",
        questionAr: "هل تقدمون مشاريع تصميم فقط؟",
        answer:
          "Yes. UI/UX design can be scoped independently or alongside development.",
        answerAr:
          "نعم. يمكن تحديد نطاق تصميم UI/UX بشكل مستقل أو إلى جانب التطوير.",
      },
      {
        question: "Do you create design systems?",
        questionAr: "هل تنشئون أنظمة تصميم؟",
        answer:
          "Yes, when the product and its scale require a reusable design system.",
        answerAr:
          "نعم، عندما يتطلب المنتج وحجمه نظام تصميم قابلاً لإعادة الاستخدام.",
      },
      {
        question: "Do you design both web and mobile interfaces?",
        questionAr: "هل تصممون واجهات الويب والجوال؟",
        answer: "Yes, based on the product requirements.",
        answerAr: "نعم، وفق متطلبات المنتج.",
      },
      {
        question: "Can you redesign an existing product?",
        questionAr: "هل يمكنكم إعادة تصميم منتج قائم؟",
        answer:
          "Yes, after understanding its current experience, goals, and constraints.",
        answerAr:
          "نعم، بعد فهم التجربة الحالية والأهداف والقيود.",
      },
    ],
    keywords: [
      "UI/UX Design Agency Egypt",
      "تصميم واجهات وتجربة مستخدم",
      "UI UX design services",
      "تصميم واجهات المستخدم",
      "product design Egypt",
    ],
  },
  {
    id: "ai",
    slug: "ai-automation",
    title: "AI Automation",
    titleAr: "أتمتة الأعمال بالذكاء الاصطناعي",
    h1: "AI Automation Services in Egypt",
    h1Ar: "أتمتة الأعمال بالذكاء الاصطناعي في مصر",
    shortDescription:
      "Practical AI-powered automation that improves workflows and reduces repetitive work.",
    shortDescriptionAr:
      "أتمتة عملية بالذكاء الاصطناعي تحسّن سير العمل وتقلل المهام المتكررة.",
    intro:
      "Practical automation for repetitive work and slow handoffs — focused on clear use cases rather than AI hype.",
    introAr:
      "أتمتة عملية للمهام المتكررة وعمليات التسليم البطيئة — مع التركيز على حالات استخدام واضحة بدل المبالغة حول الذكاء الاصطناعي.",
    description:
      "We identify repetitive workflows, evaluate where automation or AI can provide value, and connect suitable systems through APIs and webhooks. The implementation should be based on actual business requirements and real usage.",
    descriptionAr:
      "نحدد سير العمل المتكرر، ونقيّم أين يمكن للأتمتة أو الذكاء الاصطناعي أن يضيف قيمة، ونربط الأنظمة المناسبة عبر واجهات البرمجة و Webhooks. يجب أن يستند التنفيذ إلى متطلبات العمل الفعلية والاستخدام الحقيقي.",
    seoTitle: "AI Automation Services Egypt | BARQ STUDIO",
    seoTitleAr: "خدمات أتمتة الذكاء الاصطناعي في مصر | برق ستوديو",
    seoDescription:
      "AI automation services in Egypt by BARQ STUDIO — workflow automation, chatbots, process automation, and API integrations focused on practical operational gains.",
    seoDescriptionAr:
      "خدمات أتمتة الذكاء الاصطناعي في مصر من برق ستوديو — أتمتة سير العمل وروبوتات محادثة وأتمتة العمليات وتكاملات API لنتائج تشغيلية عملية.",
    icon: "Bot",
    image: "/services/backend.jpg",
    technologies: ["OpenAI", "Node.js", "REST APIs", "Webhooks", "Automation"],
    features: [
      "Workflow automation",
      "AI integrations",
      "Chatbots",
      "Process automation",
      "API integrations",
    ],
    featuresAr: [
      "أتمتة سير العمل",
      "تكاملات الذكاء الاصطناعي",
      "روبوتات محادثة",
      "أتمتة العمليات",
      "تكاملات API",
    ],
    benefits: [
      "Reduce repetitive manual work where suitable",
      "Improve inquiry handling through appropriate automation",
      "Reduce repeated copy-and-paste between connected tools",
      "Create more consistent workflows",
    ],
    benefitsAr: [
      "تقليل العمل اليدوي المتكرر عند المناسبة",
      "تحسين التعامل مع الاستفسارات عبر أتمتة مناسبة",
      "تقليل النسخ واللصق المتكرر بين الأدوات المتصلة",
      "إنشاء سير عمل أكثر اتساقاً",
    ],
    suitableFor:
      "Businesses with repeatable processes and systems that can be connected, especially alongside CRM and web applications.",
    suitableForAr:
      "الشركات ذات العمليات المتكررة والأنظمة القابلة للربط، خاصة إلى جانب أنظمة CRM وتطبيقات الويب.",
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
    featuredProjectSlugs: [],
    ctaLabel: "Explore Automation Opportunities",
    ctaLabelAr: "استكشف فرص الأتمتة",
    faqs: [
      {
        question: "Is AI automation limited to chatbots?",
        questionAr: "هل تقتصر أتمتة الذكاء الاصطناعي على روبوتات المحادثة؟",
        answer:
          "No. It can also include workflow and process automation.",
        answerAr: "لا. يمكن أن تشمل أيضاً أتمتة سير العمل والعمليات.",
      },
      {
        question: "Can you connect automation to existing systems?",
        questionAr: "هل يمكن ربط الأتمتة بأنظمة قائمة؟",
        answer:
          "Yes, when the existing systems provide suitable APIs or integration options.",
        answerAr:
          "نعم، عندما توفّر الأنظمة الحالية واجهات برمجة أو خيارات تكامل مناسبة.",
      },
      {
        question: "Do you guarantee a specific ROI?",
        questionAr: "هل تضمنون عائداً استثمارياً محدداً؟",
        answer:
          "No. Expected value depends on the workflow, scope, and implementation. Requirements should be assessed before making any business estimate.",
        answerAr:
          "لا. تعتمد القيمة المتوقعة على سير العمل والنطاق والتنفيذ. يجب تقييم المتطلبات قبل أي تقدير تجاري.",
      },
      {
        question: "Can AI automation work with a CRM?",
        questionAr: "هل يمكن أن تعمل أتمتة الذكاء الاصطناعي مع نظام CRM؟",
        answer:
          "Yes. It can complement CRM and custom business systems when the use case is clear.",
        answerAr:
          "نعم. يمكن أن تكمل أنظمة CRM وأنظمة الأعمال المخصصة عندما تكون حالة الاستخدام واضحة.",
      },
    ],
    keywords: [
      "AI Automation Services Egypt",
      "AI Automation for Businesses",
      "خدمات أتمتة الذكاء الاصطناعي في مصر",
      "أتمتة الأعمال بالذكاء الاصطناعي",
      "business process automation",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug || service.id === slug);
}

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedServices
    .map((id) => getServiceById(id))
    .filter((item): item is Service => Boolean(item));
}
