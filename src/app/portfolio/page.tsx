import { PortfolioContent } from "@/components/pages/portfolio-content";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects | BARQ STUDIO Egypt Software Portfolio",
  description:
    "Explore BARQ STUDIO Egypt software portfolio across web apps, mobile concepts, CRM dashboards, e-commerce hubs, and business websites.",
  path: "/portfolio",
  absoluteTitle: true,
  keywords: [
    "BARQ STUDIO portfolio Egypt",
    "software development projects Egypt",
    "أعمال برق ستوديو مصر",
  ],
});

export default function PortfolioPage() {
  return <PortfolioContent projects={projects} />;
}
