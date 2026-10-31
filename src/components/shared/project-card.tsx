"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/shared/tilt-card";
import { cn } from "@/lib/utils";
import { useApp } from "@/providers/app-provider";
import { localizeProject } from "@/lib/projects-i18n";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
  variant?: "card" | "bleed";
  priority?: boolean;
}

export function ProjectCard({
  project,
  className,
  priority = false,
}: ProjectCardProps) {
  const { locale } = useApp();
  const localized = localizeProject(project, locale);

  return (
    <div className={cn("h-full [perspective:1200px]", className)}>
      <TiltCard className="h-full rounded-2xl">
        <Link
          href={`/portfolio/${project.slug}`}
          className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_8px_30px_rgba(5,8,6,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_16px_40px_rgba(142,219,32,0.14)] active:-translate-y-1 active:border-primary/35 active:shadow-[0_16px_40px_rgba(142,219,32,0.14)] dark:border-primary/15 dark:bg-card/80 dark:shadow-[0_0_0_1px_rgba(184,243,75,0.06)] dark:hover:shadow-[0_0_48px_rgba(184,243,75,0.18)] dark:active:shadow-[0_0_48px_rgba(184,243,75,0.18)]"
        >
          <div className="relative h-48 overflow-hidden sm:h-56 lg:h-60">
            <div className="neon-project-glow absolute inset-0 z-[1] opacity-35 dark:opacity-100" />
            <Image
              src={project.image}
              alt={localized.localizedTitle}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 group-active:scale-105"
              priority={priority}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent dark:from-black/70 dark:via-black/20 dark:to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rtl:text-right">
              <Badge
                variant="outline"
                className="border-primary/30 bg-card/95 text-primary backdrop-blur-sm dark:bg-black/40"
              >
                {localized.localizedCategory}
              </Badge>
            </div>
          </div>
          <div className="relative flex flex-1 flex-col p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {localized.localizedTitle}
            </h3>
            <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {localized.localizedDescription}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-foreground/80 dark:border-primary/20 dark:bg-secondary/80"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground rtl:mr-auto">
              <ArrowUpRight className="h-4 w-4 rtl:rotate-180" />
            </span>
          </div>
        </Link>
      </TiltCard>
    </div>
  );
}
