import { AboutContent } from "@/components/pages/about-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "عن برق ستوديو | About Barq Studio",
  description:
    "تعرف على برق ستوديو (Barq Studio): وكالة برمجيات من الإسكندرية، مصر تقدم حلول ويب وجوال وتصميم بمستوى مؤسسي للشركات الطموحة.",
  path: "/about",
  keywords: ["عن برق ستوديو", "عن برق", "about Barq Studio", "شركة برق ستوديو"],
});

export default function AboutPage() {
  return <AboutContent />;
}
