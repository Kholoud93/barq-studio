import { AboutContent } from "@/components/pages/about-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About BARQ STUDIO | Software Development Company in Egypt",
  description:
    "About BARQ STUDIO Egypt — a software development company building websites, mobile apps, e-commerce, custom CRM systems, UI/UX, and AI automation for businesses.",
  path: "/about",
  absoluteTitle: true,
  keywords: [
    "About BARQ STUDIO Egypt",
    "Software Development Company Egypt",
    "شركة برمجة في مصر",
    "عن برق ستوديو مصر",
  ],
});

export default function AboutPage() {
  return <AboutContent />;
}
