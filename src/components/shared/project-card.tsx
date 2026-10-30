"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useApp } from "@/providers/app-provider";
import { localizeProject } from "@/lib/projects-i18n";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
  variant?: "card" | "bleed";
}

export function ProjectCard({ project, className, variant = "bleed" }: ProjectCardProps) {
  const { locale } = useApp();
  const localized = localizeProject(project, locale);

  if (variant === "card") {
    return (
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn("h-full", className)}
        layout
      >
        <Link
          href={`/portfolio/${project.slug}`}
          className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
        >
          <div className="relative h-48 overflow-hidden sm:h-56">
            <Image
              src={project.image}
              alt={localized.localizedTitle}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rtl:text-right">
              <Badge
                variant="outline"
                className="border-white/20 bg-black/30 text-white backdrop-blur-sm"
              >
                {localized.localizedCategory}
              </Badge>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {localized.localizedTitle}
            </h3>
            <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {localized.localizedDescription}
            </p>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div layout className={cn("h-full", className)}>
      <Link
        href={`/portfolio/${project.slug}`}
        className="group relative flex min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[340px]"
      >
        <Image
          src={project.image}
          alt={localized.localizedTitle}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={project.featured}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15 transition-opacity duration-500 group-hover:from-black/90" />
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 rtl:right-auto rtl:left-4">
          <ArrowUpRight className="h-5 w-5 text-white rtl:rotate-180" />
        </div>
        <div className="relative mt-auto flex w-full flex-col p-6 sm:p-8 rtl:text-right">
          <Badge
            variant="outline"
            className="mb-3 w-fit border-white/25 bg-white/10 text-white backdrop-blur-sm"
          >
            {localized.localizedCategory}
          </Badge>
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            {localized.localizedTitle}
          </h3>
          <p className="mt-2 line-clamp-2 max-w-lg text-sm leading-relaxed text-white/75">
            {localized.localizedDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/15 bg-white/10 px-2.5 py-1 text-xs text-white/80 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
