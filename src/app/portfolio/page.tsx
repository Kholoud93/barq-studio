import { PortfolioContent } from "@/components/pages/portfolio-content";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "أعمال برق ستوديو | Portfolio",
  description:
    "استعرض أعمال برق ستوديو: أنظمة CRM ولوحات تقنية مالية ومنصات عقارية وتطبيقات بنكية جوالة ومنتجات SaaS.",
  path: "/portfolio",
  keywords: [
    "أعمال برق ستوديو",
    "مشاريع برق",
    "Barq Studio portfolio",
    "software case studies Egypt",
  ],
});

export default function PortfolioPage() {
  return <PortfolioContent projects={projects} />;
}
