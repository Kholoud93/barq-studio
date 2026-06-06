import { AboutContent } from "@/components/pages/about-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Vision Hub — a premium software agency delivering enterprise-grade digital solutions.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
