import { AboutContent } from "@/components/pages/about-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Vision Hub | فيجن هب",
  description:
    "About Vision Hub (VisionHub / فيجن هب): a premium software agency from Alexandria, Egypt delivering enterprise-grade web, mobile, and design solutions.",
  path: "/about",
  keywords: ["about Vision Hub", "عن فيجن هب", "VisionHub company"],
});

export default function AboutPage() {
  return <AboutContent />;
}
