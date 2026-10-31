import { PortfolioContent } from "@/components/pages/portfolio-content";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects | BARQ STUDIO Egypt Software Portfolio",
  description:
    "Explore BARQ STUDIO Egypt projects across web apps, mobile concepts, CRM dashboards, e-commerce hubs, and business websites.",
  path: "/portfolio",
  keywords: [
    "أعمال برق ستوديو مصر",
    "مشاريع برق ستوديو",
    "BARQ STUDIO portfolio Egypt",
    "software portfolio Egypt",
  ],
});

export default function PortfolioPage() {
  return <PortfolioContent projects={projects} />;
}
