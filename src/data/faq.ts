export interface FAQ {
  id: string;
  question: string;
  answer: string;
  questionEn: string;
  answerEn: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "ما أنواع المشاريع التي تتخصص فيها برق ستوديو؟",
    answer:
      "تتخصص برق ستوديو (Barq Studio) في تطبيقات الويب المؤسسية وتطبيقات الجوال ومنصات SaaS ولوحات التحكم وأنظمة CRM وحلول التجارة الإلكترونية، مع أكثر من 80 مشروعاً في التقنية المالية والرعاية الصحية والعقارات والتأمين والقطاع غير الربحي.",
    questionEn: "What types of projects does Barq Studio specialize in?",
    answerEn:
      "We specialize in enterprise web applications, mobile apps, SaaS platforms, dashboards, CRM systems, and e-commerce solutions. Our team has delivered 80+ projects across fintech, healthcare, real estate, insurance, and non-profit sectors.",
  },
  {
    id: "2",
    question: "كم يستغرق المشروع النموذجي مع برق ستوديو؟",
    answer:
      "تختلف الجداول الزمنية حسب النطاق والتعقيد. يستغرق MVP المركز عادة 8–12 أسبوعاً، بينما تتراوح المنصات المؤسسية بين 4–8 أشهر. نقدم جداول زمنية مفصلة في مرحلة الاكتشاف ونتابع المعالم بشفافية.",
    questionEn: "How long does a typical project take?",
    answerEn:
      "Project timelines vary based on scope and complexity. A focused MVP typically takes 8–12 weeks, while enterprise platforms range from 4–8 months. We provide detailed timelines during our discovery phase and maintain transparent milestone tracking throughout.",
  },
  {
    id: "3",
    question: "ما هي خدمات تطوير البرمجيات التي تقدمها برق ستوديو؟",
    answer:
      "نقدم تطوير الواجهات الأمامية (React و Next.js و Vue)، وتطوير الخلفية وواجهات البرمجة، وتطوير تطبيقات الجوال بـ React Native و Expo، وتصميم UI/UX وأنظمة التصميم للشركات في مصر والشرق الأوسط.",
    questionEn: "What software development services does Barq Studio offer?",
    answerEn:
      "We offer frontend development (React, Next.js, Vue), backend and API engineering, mobile app development with React Native and Expo, and UI/UX design with design systems for businesses in Egypt and the Middle East.",
  },
  {
    id: "4",
    question: "هل تقدمون دعماً مستمراً بعد الإطلاق؟",
    answer:
      "نعم. نقدم باقات صيانة ودعم مرنة تشمل إصلاح الأخطاء وتحديثات الأمان ومراقبة الأداء وتحسينات الميزات ودعماً تقنياً مخصصاً. يستمر معظم العملاء معنا طويل الأمد.",
    questionEn: "Do you provide ongoing support after launch?",
    answerEn:
      "Yes. We offer flexible maintenance and support packages including bug fixes, security updates, performance monitoring, feature enhancements, and dedicated technical support. Most clients continue with us long-term for continuous improvement.",
  },
  {
    id: "5",
    question: "ما التقنيات التي تعمل بها برق ستوديو؟",
    answer:
      "تشمل تقنياتنا الأساسية React و Next.js و Vue و Nuxt و TypeScript و Node.js و PostgreSQL و MongoDB و Redis و React Native و Expo. نختار التقنيات بناءً على متطلبات المشروع وقابلية التوسع.",
    questionEn: "What technologies do you work with?",
    answerEn:
      "Our core stack includes React, Next.js, Vue, Nuxt, TypeScript, Node.js, PostgreSQL, MongoDB, Redis, React Native, and Expo. We select technologies based on project requirements, scalability needs, and long-term maintainability.",
  },
  {
    id: "6",
    question: "كيف نبدأ مشروعاً مع برق ستوديو؟",
    answer:
      "تواصل عبر نموذج الاتصال أو واتساب. سنحدد مكالمة اكتشاف مجانية لمدة 30 دقيقة لفهم أهدافك ومناقشة المتطلبات التقنية وتقديم تقدير أولي للنطاق والجدول خلال 48 ساعة.",
    questionEn: "How do we get started?",
    answerEn:
      "Reach out through our contact form or WhatsApp. We'll schedule a free 30-minute discovery call to understand your goals, discuss technical requirements, and provide a preliminary scope and timeline estimate within 48 hours.",
  },
];
