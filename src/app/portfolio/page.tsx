import { PortfolioContent } from "@/components/pages/portfolio-content";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Selected Projects | BARQ STUDIO",
  description:
    "Explore selected BARQ STUDIO work across web apps, mobile concepts, CRM dashboards, e-commerce hubs, and corporate websites — clearly labeled concept and selected projects.",
  path: "/portfolio",
  keywords: [
    "أعمال برق ستوديو",
    "مشاريع برق",
    "Barq Studio portfolio",
    "digital product portfolio Egypt",
  ],
});

export default function PortfolioPage() {
  return <PortfolioContent projects={projects} />;
}
