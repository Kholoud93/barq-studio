import { ServicesContent } from "@/components/pages/services-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services — Web, Mobile, Backend & UI/UX",
  description:
    "Barq Studio services: frontend development, backend APIs, mobile apps with React Native, and UI/UX design. Enterprise digital solutions in Egypt and the Middle East.",
  path: "/services",
  keywords: [
    "software development services",
    "frontend backend mobile UI UX",
    "خدمات تطوير برمجيات",
    "تطوير مواقع وتطبيقات",
  ],
});

export default function ServicesPage() {
  return <ServicesContent />;
}
