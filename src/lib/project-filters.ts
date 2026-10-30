import type { Project } from "@/data/projects";

export type ProjectFilter = "all" | "web" | "mobile" | "crm" | "ecommerce" | "design";

export function matchesProjectFilter(project: Project, filter: ProjectFilter): boolean {
  if (filter === "all") return true;

  const services = project.services.map((s) => s.toLowerCase());
  const category = project.category.toLowerCase();

  if (filter === "mobile") {
    return services.some((s) => s.includes("mobile")) || category.includes("mobile");
  }
  if (filter === "crm") {
    return services.some((s) => s.includes("crm")) || category.includes("crm");
  }
  if (filter === "ecommerce") {
    return services.some((s) => s.includes("ecommerce")) || category.includes("e-commerce");
  }
  if (filter === "design") {
    return services.some((s) => s.includes("ui-ux") || s.includes("design"));
  }
  if (filter === "web") {
    return (
      services.some((s) => s.includes("web") || s.includes("ecommerce")) ||
      category.includes("web") ||
      category.includes("dashboard") ||
      category.includes("corporate")
    );
  }
  return true;
}
