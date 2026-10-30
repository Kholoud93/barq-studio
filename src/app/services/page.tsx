import { ServicesContent } from "@/components/pages/services-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Digital Services | Web, Mobile, CRM, UI/UX & AI",
  description:
    "BARQ STUDIO services include web development, mobile apps, e-commerce, custom CRM systems, UI/UX design, and AI automation for businesses in Egypt.",
  path: "/services",
  keywords: [
    "خدمات برق ستوديو",
    "خدمات تطوير برمجيات",
    "تطوير مواقع وتطبيقات",
    "تطوير واجهات أمامية",
    "تطوير تطبيقات الجوال",
    "تصميم UI UX مصر",
  ],
});

export default function ServicesPage() {
  return <ServicesContent />;
}
