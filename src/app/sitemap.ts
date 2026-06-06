import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/services", "/portfolio", "/contact"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const projectPages = projects.map((project) => ({
    url: `${siteConfig.url}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
