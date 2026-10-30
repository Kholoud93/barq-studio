import { AboutContent } from "@/components/pages/about-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About BARQ STUDIO | Digital Solutions Studio in Egypt",
  description:
    "BARQ STUDIO is a digital solutions studio in Egypt focused on websites, mobile apps, CRM systems, UI/UX design, and practical AI automation — without inflated claims.",
  path: "/about",
  keywords: ["عن برق ستوديو", "عن برق", "about Barq Studio", "شركة برق ستوديو"],
});

export default function AboutPage() {
  return <AboutContent />;
}
