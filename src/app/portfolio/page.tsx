import { PortfolioContent } from "@/components/pages/portfolio-content";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Portfolio — Enterprise Case Studies",
  description:
    "Explore Barq Studio portfolio: CRM systems, fintech dashboards, real estate platforms, mobile banking apps, and SaaS products.",
  path: "/portfolio",
  keywords: [
    "Barq Studio portfolio",
    "software case studies",
    "أعمال Barq Studio",
  ],
});

export default function PortfolioPage() {
  return <PortfolioContent projects={projects} />;
}
