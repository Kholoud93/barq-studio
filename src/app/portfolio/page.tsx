import { PortfolioContent } from "@/components/pages/portfolio-content";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Portfolio",
  description:
    "Explore Vision Hub's portfolio of enterprise software projects.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return <PortfolioContent projects={projects} />;
}
