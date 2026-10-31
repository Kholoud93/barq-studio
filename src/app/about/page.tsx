import { AboutContent } from "@/components/pages/about-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About BARQ STUDIO Egypt | Software & Digital Product Studio",
  description:
    "Learn about BARQ STUDIO Egypt — a software and digital product studio building websites, mobile apps, CRM systems, UI/UX, and AI automation for businesses.",
  path: "/about",
  keywords: [
    "عن برق ستوديو مصر",
    "about BARQ STUDIO Egypt",
    "شركة برق ستوديو برمجيات",
    "software studio Egypt",
  ],
});

export default function AboutPage() {
  return <AboutContent />;
}
