import type { Locale } from "@/i18n";

export interface ProjectTranslation {
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  duration: string;
}

const en: Record<string, ProjectTranslation> = {
  "crm-system": {
    title: "Enterprise CRM System",
    category: "Enterprise Software",
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
    services: ["Frontend Development", "Backend Development", "UI/UX Design"],
    duration: "6 months",
  },
  "insurance-dashboard": {
    title: "Insurance Analytics Dashboard",
    category: "FinTech",
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
    services: ["Frontend Development", "Backend Development"],
    duration: "4 months",
  },
  "real-estate-platform": {
    title: "Real Estate Platform",
    category: "PropTech",
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
    services: ["Frontend Development", "Backend Development", "UI/UX Design"],
    duration: "5 months",
  },
  "ecommerce-dashboard": {
    title: "E-commerce Operations Dashboard",
    category: "E-commerce",
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
    services: ["Frontend Development", "Backend Development"],
    duration: "3 months",
  },
  "donation-platform": {
    title: "Donation Platform",
    category: "Non-Profit",
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
    services: ["Frontend Development", "Backend Development", "UI/UX Design"],
    duration: "4 months",
  },
  "healthcare-management": {
    title: "Healthcare Management System",
    category: "HealthTech",
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
    services: ["Frontend Development", "Backend Development", "UI/UX Design"],
    duration: "7 months",
  },
  "mobile-banking-app": {
    title: "Mobile Banking App",
    category: "FinTech",
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
    services: ["Mobile App Development", "Backend Development", "UI/UX Design"],
    duration: "8 months",
  },
  "saas-analytics-platform": {
    title: "SaaS Analytics Platform",
    category: "SaaS",
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
    services: ["Frontend Development", "Backend Development", "UI/UX Design"],
    duration: "5 months",
  },
};

const ar: Record<string, ProjectTranslation> = {
  "crm-system": {
    title: "نظام CRM مؤسسي",
    category: "برمجيات مؤسسية",
    description:
      "منصة شاملة لإدارة علاقات العملاء مصممة لتوحيد عمليات المبيعات والتسويق والدعم لمؤسسة تجارية متعددة الفروع تضم أكثر من 2000 موظف.",
    challenge:
      "أدار العميل بيانات العملاء عبر خمسة أنظمة قديمة منفصلة، مما أدى إلى سجلات مكررة ومتابعات فائتة وفقدان 40% من تحويل العملاء المحتملين. افتقر فريق المبيعات إلى رؤية فورية لصحة خط الأنابيب.",
    solution:
      "صممنا نظام CRM معياري مع إدارة موحدة للجهات، وتسجيل آلي للعملاء المحتملين، وتحليلات خط الأنابيب، ولوحات تحكم حسب الأدوار. ربطنا التكاملات المخصصة بأنظمة ERP والبريد الإلكتروني دون تعطيل العمليات اليومية.",
    results: [
      "زيادة 47% في معدل تحويل العملاء المحتملين",
      "إنجاز دورة المبيعات أسرع بـ 3.2 مرة",
      "القضاء على 98% من سجلات العملاء المكررة",
      "توحيد 5 أنظمة قديمة في منصة واحدة",
    ],
    services: ["تطوير الواجهات الأمامية", "تطوير الخلفية", "تصميم UI/UX"],
    duration: "6 أشهر",
  },
  "insurance-dashboard": {
    title: "لوحة تحليلات التأمين",
    category: "التقنية المالية",
    description:
      "لوحة تحليلات فورية تمكّن مسؤولي الاكتتاب والتنفيذيين من مراقبة المطالبات وتقييم محافظ المخاطر وإنشاء تقارير الامتثال عبر خطوط منتجات متعددة.",
    challenge:
      "قضى مسؤولو الاكتتاب ساعات في تجميع البيانات من قواعد بيانات معزولة قبل اتخاذ قرارات التغطية. تطلبت التقارير التنفيذية عملاً يدوياً على جداول البيانات مما أخر القرارات الاستراتيجية لأيام.",
    solution:
      "بنينا لوحة تفاعلية مع خطوط بيانات فورية، وخرائط حرارية للمخاطر قابلة للتخصيص، وتقارير امتثال آلية، وتحليلات تنبؤية للمطالبات بناءً على الاتجاهات التاريخية.",
    results: [
      "تقليل 85% في وقت إنشاء التقارير",
      "رؤية فورية عبر 12 خط منتج",
      "تحسين 22% في دقة تقييم المخاطر",
      "تصدير امتثال تنظيمي آلي",
    ],
    services: ["تطوير الواجهات الأمامية", "تطوير الخلفية"],
    duration: "4 أشهر",
  },
  "real-estate-platform": {
    title: "منصة العقارات",
    category: "تقنية العقارات",
    description:
      "سوق عقاري متكامل مع بحث متقدم وجولات افتراضية وحاسبات رهن عقاري وأدوات إدارة الوسطاء لخدمة المشترين والبائعين والوسطاء في منطقة الخليج.",
    challenge:
      "كان موقع العميل القديم يعاني من ضعف البحث وعدم التحسين للجوال وغياب تتبع العملاء المحتملين. أدار الوسطاء الاستفسارات يدوياً عبر واتساب وجداول البيانات.",
    solution:
      "قدمنا منصة متجاوبة مع بحث قائم على الخرائط وتكامل جولات ثلاثية الأبعاد وتوجيه آلي للعملاء المحتملين وبوابة شاملة للوسطاء مع تحليلات الأداء.",
    results: [
      "زيادة 312% في العملاء المحتملين المؤهلين",
      "68% من الزيارات الآن من الأجهزة المحمولة",
      "ارتفع متوسط وقت البقاء إلى 4.7 دقيقة",
      "تقليل وقت استجابة الوسطاء بنسبة 60%",
    ],
    services: ["تطوير الواجهات الأمامية", "تطوير الخلفية", "تصميم UI/UX"],
    duration: "5 أشهر",
  },
  "ecommerce-dashboard": {
    title: "لوحة عمليات التجارة الإلكترونية",
    category: "التجارة الإلكترونية",
    description:
      "لوحة عمليات مركزية لتاجر تجزئة متعدد العلامات يدير المخزون والطلبات والتنفيذ وتحليلات العملاء عبر ثلاثة متاجر إلكترونية.",
    challenge:
      "تنقلت فرق العمليات بين ثلاث لوحات إدارية منفصلة ببيانات غير متسقة. تسببت تناقضات المخزون في البيع الزائد، وافتقر دعم العملاء إلى رؤية سجل الطلبات.",
    solution:
      "وحدنا بيانات جميع المتاجر في لوحة واحدة مع مزامنة مخزون فورية وتتبع دورة حياة الطلبات وتنبيهات انخفاض المخزون وأدوات دعم عملاء متكاملة.",
    results: [
      "دقة مخزون 99.2% عبر القنوات",
      "تنفيذ طلبات أسرع بنسبة 45%",
      "تقليل حوادث البيع الزائد بنسبة 94%",
      "عرض موحد لـ 3 متاجر",
    ],
    services: ["تطوير الواجهات الأمامية", "تطوير الخلفية"],
    duration: "3 أشهر",
  },
  "donation-platform": {
    title: "منصة التبرعات",
    category: "غير ربحي",
    description:
      "منصة تبرعات شفافة تمكّن المنظمات الخيرية من إطلاق حملات وقبول مدفوعات متعددة العملات وتوفير تتبع الأثر الفوري وإيصالات ضريبية للمتبرعين.",
    challenge:
      "اعتمدت المؤسسة على التحويلات البنكية اليدوية وافتقرت إلى الشفافية في توزيع الأموال. لم يكن لدى المتبرعين رؤية لكيفية استخدام مساهماتهم، مما قلل معدلات التبرع المتكرر.",
    solution:
      "بنينا منصة إدارة حملات مع معالجة دفع آمنة وإنشاء إيصالات ضريبية آلية ولوحات توزيع أموال فورية وميزات سرد الأثر للمتبرعين.",
    results: [
      "زيادة 156% في التبرعات الإلكترونية",
      "معدل احتفاظ 89% بالمتبرعين بعد أول تبرع",
      "إيصالات ضريبية آلية لأكثر من 12000 متبرع",
      "شفافية كاملة في توزيع الأموال",
    ],
    services: ["تطوير الواجهات الأمامية", "تطوير الخلفية", "تصميم UI/UX"],
    duration: "4 أشهر",
  },
  "healthcare-management": {
    title: "نظام إدارة الرعاية الصحية",
    category: "تقنية الصحة",
    description:
      "نظام إدارة عيادات متكامل يشمل السجلات الطبية وجدولة المواعيد والفوترة ومخزون الصيدلية ومعالجة مطالبات التأمين لشبكة من 18 عيادة.",
    challenge:
      "تسببت السجلات الورقية والجدولة اليدوية في تعارض المواعيد وأخطاء الفوترة ومخاطر الامتثال. قضى الأطباء 30% من وقتهم في مهام إدارية.",
    solution:
      "طورنا منصة متوافقة مع HIPAA تتضمن سجلات صحية إلكترونية وجدولة ذكية وفوترة متكاملة وإدارة صيدلية وتقديم مطالبات تأمين آلي.",
    results: [
      "تقليل 70% في العبء الإداري",
      "صفر تعارض في جدولة المواعيد",
      "شهادة امتثال HIPAA كاملة",
      "ترحيل 18 عيادة في 3 أسابيع",
    ],
    services: ["تطوير الواجهات الأمامية", "تطوير الخلفية", "تصميم UI/UX"],
    duration: "7 أشهر",
  },
  "mobile-banking-app": {
    title: "تطبيق الخدمات المصرفية",
    category: "التقنية المالية",
    description:
      "تطبيق مصرفي جوال غني بالميزات يقدم إدارة الحسابات والتحويلات الفورية ودفع الفواتير وتتبع الاستثمارات والمصادقة البيومترية لبنك رقمي.",
    challenge:
      "احتاج البنك إلى إطلاق تجربة جوال أولاً للمنافسة مع اللاعبين الراسخين. كانت الأمان والامتثال التنظيمي وسرعة المعاملات أقل من ثانية متطلبات غير قابلة للتفاوض.",
    solution:
      "هندسنا تطبيق React Native مع تشفير شامل ومصادقة بيومترية وإشعارات معاملات فورية وبنية معيارية تدعم إصدارات ميزات سريعة.",
    results: [
      "250000 تحميل في أول 90 يوماً",
      "تقييم 4.8 نجوم في متجري التطبيقات",
      "معالجة معاملات أقل من 200 مللي ثانية",
      "99.99% وقت تشغيل منذ الإطلاق",
    ],
    services: ["تطوير تطبيقات الجوال", "تطوير الخلفية", "تصميم UI/UX"],
    duration: "8 أشهر",
  },
  "saas-analytics-platform": {
    title: "منصة تحليلات SaaS",
    category: "SaaS",
    description:
      "منصة تحليلات متعددة المستأجرين توفر ذكاء أعمال فورياً ومنشئي تقارير مخصصة وأدوات تعاون فريق لشركات SaaS B2B لتتبع استخدام المنتج ومقاييس الإيرادات.",
    challenge:
      "واجهت شركات SaaS صعوبة في ربط استخدام المنتج بمقاييس الإيرادات باستخدام أدوات تحليلات عامة. احتاج MetricFlow إلى منصة مخصصة بلوحات قابلة للتخصيص ومشاركة فريق.",
    solution:
      "بنينا محرك تحليلات قابل للتوسع مع معالجة أحداث فورية ومنشئ تقارير بالسحب والإفلات ومساحات عمل فريق حسب الأدوار وتضمين white-label للوحات موجهة للعملاء.",
    results: [
      "أكثر من 10000 لوحة أُنشئت في 6 أشهر",
      "معالجة 50 مليون حدث يومياً",
      "تقليل 40% في تسرب العملاء للعملاء",
      "نشر white-label من 35 شركة SaaS",
    ],
    services: ["تطوير الواجهات الأمامية", "تطوير الخلفية", "تصميم UI/UX"],
    duration: "5 أشهر",
  },
};

export const projectTranslations: Record<Locale, Record<string, ProjectTranslation>> = {
  en,
  ar,
};

export function getProjectTranslation(slug: string, locale: Locale): ProjectTranslation | undefined {
  return projectTranslations[locale][slug];
}
