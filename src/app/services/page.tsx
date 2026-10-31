import { ServicesContent } from "@/components/pages/services-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Software Services Egypt | Web, Mobile, CRM, UI/UX & AI",
  description:
    "BARQ STUDIO Egypt services: web development, mobile apps, e-commerce, custom CRM systems, UI/UX design, and AI automation for growing businesses.",
  path: "/services",
  keywords: [
    "خدمات برق ستوديو مصر",
    "خدمات تطوير برمجيات مصر",
    "تطوير مواقع وتطبيقات مصر",
    "تصميم UI UX مصر",
    "تطوير CRM مصر",
  ],
});

export default function ServicesPage() {
  return <ServicesContent />;
}
