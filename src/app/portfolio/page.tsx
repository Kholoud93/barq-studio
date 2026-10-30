import { PortfolioContent } from "@/components/pages/portfolio-content";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Portfolio — Enterprise Case Studies",
  description:
    "Explore Vision Hub portfolio: CRM systems, fintech dashboards, real estate platforms, mobile banking apps, and SaaS products.",
  path: "/portfolio",
  keywords: [
    "Vision Hub portfolio",
    "software case studies",
    "أعمال Vision Hub",
  ],
});

export default function PortfolioPage() {
  return <PortfolioContent projects={projects} />;
}
