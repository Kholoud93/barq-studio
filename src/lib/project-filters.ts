import type { Project } from "@/data/projects";

export type ProjectFilter = "all" | "web" | "mobile" | "design";

export function matchesProjectFilter(project: Project, filter: ProjectFilter): boolean {
  if (filter === "all") return true;

  const services = project.services.map((s) => s.toLowerCase());
  const hasMobile = services.some((s) => s.includes("mobile"));
  const hasDesign = services.some((s) => s.includes("ui") || s.includes("ux") || s.includes("design"));
  const hasWeb = services.some(
    (s) =>
      s.includes("frontend") ||
      s.includes("backend") ||
      s.includes("web")
  );

  if (filter === "mobile") return hasMobile;
  if (filter === "design") return hasDesign;
  if (filter === "web") return hasWeb && !hasMobile;
  return true;
}
