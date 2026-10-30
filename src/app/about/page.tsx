import { AboutContent } from "@/components/pages/about-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Barq Studio | برق ستوديو",
  description:
    "About Barq Studio (Barq / برق ستوديو): a premium software agency from Alexandria, Egypt delivering enterprise-grade web, mobile, and design solutions.",
  path: "/about",
  keywords: ["about Barq Studio", "عن برق ستوديو", "Barq company"],
});

export default function AboutPage() {
  return <AboutContent />;
}
