import { ServicesContent } from "@/components/pages/services-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Software Development Services Egypt | Web, Mobile, CRM & AI",
  description:
    "Explore BARQ STUDIO services in Egypt: web development company solutions, mobile app development, e-commerce development, custom CRM, UI/UX design, and AI automation.",
  path: "/services",
  absoluteTitle: true,
  keywords: [
    "Software Development Company Egypt",
    "Web Development Company Egypt",
    "Mobile App Development Egypt",
    "E-commerce Development Egypt",
    "Custom CRM Development",
    "AI Automation Services Egypt",
    "شركة برمجة في مصر",
    "شركة تصميم مواقع في مصر",
  ],
});

export default function ServicesPage() {
  return <ServicesContent />;
}
