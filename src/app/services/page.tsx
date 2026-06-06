import { ServicesContent } from "@/components/pages/services-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Vision Hub offers frontend, backend, mobile, and UI/UX design services for enterprise clients.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesContent />;
}
