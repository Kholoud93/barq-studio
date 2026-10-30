"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
}

export function ProjectCard({ project, className, variant = "bleed" }: ProjectCardProps) {
  const { locale } = useApp();
  const localized = localizeProject(project, locale);

  if (variant === "card") {
    return (
      <div className={cn("h-full [perspective:1200px]", className)}>
        <TiltCard className="h-full rounded-2xl">
          <Link
            href={`/portfolio/${project.slug}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/15 bg-card/80 shadow-[0_0_0_1px_rgba(184,243,75,0.06)] transition-shadow duration-500 hover:border-primary/35 hover:shadow-[0_0_48px_rgba(184,243,75,0.18)]"
          >
            <div className="relative h-48 overflow-hidden sm:h-56">
              <div className="neon-project-glow absolute inset-0 z-[1]" />
              <Image
                src={project.image}
                alt={localized.localizedTitle}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rtl:text-right">
                <Badge
                  variant="outline"
                  className="border-primary/30 bg-black/40 text-primary backdrop-blur-sm"
                >
                  {localized.localizedCategory}
                </Badge>
              </div>
            </div>
            <div className="relative flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {localized.localizedTitle}
              </h3>
              <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {localized.localizedDescription}
              </p>
              <span className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground rtl:mr-auto">
                <ArrowUpRight className="h-4 w-4 rtl:rotate-180" />
              </span>
            </div>
          </Link>
        </TiltCard>
      </div>
    );
  }

  return (
    <div className={cn("h-full [perspective:1400px]", className)}>
      <TiltCard className="h-full rounded-2xl" maxTilt={10}>
        <Link
          href={`/portfolio/${project.slug}`}
          className="group relative flex min-h-[300px] overflow-hidden rounded-2xl border border-primary/10 shadow-[0_0_0_1px_rgba(184,243,75,0.05)] transition-shadow duration-500 hover:border-primary/30 hover:shadow-[0_0_60px_rgba(184,243,75,0.2)] sm:min-h-[360px]"
        >
          <motion.div
            layoutId={`project-image-${project.slug}`}
            className="absolute inset-0"
          >
            <Image
              src={project.image}
              alt={localized.localizedTitle}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority={project.featured}
            />
          </motion.div>
          <div className="neon-project-glow absolute inset-0 z-[1]" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/45 to-black/10 transition-opacity duration-500 group-hover:from-black/95" />
          <div className="absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -inset-8 bg-[radial-gradient(circle_at_70%_40%,rgba(184,243,75,0.22),transparent_55%)]" />
          </div>
          <span className="absolute bottom-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-primary text-primary-foreground opacity-90 shadow-[0_0_24px_rgba(184,243,75,0.45)] transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 rtl:right-auto rtl:left-5">
            <ArrowUpRight className="h-5 w-5 rtl:rotate-180" />
          </span>
          <div className="relative z-10 mt-auto flex w-full flex-col p-6 sm:p-8 rtl:text-right">
            <Badge
              variant="outline"
              className="mb-3 w-fit border-primary/35 bg-primary/10 text-primary backdrop-blur-sm"
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
                  className="rounded-md border border-primary/20 bg-black/35 px-2.5 py-1 text-xs text-white/85 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </TiltCard>
    </div>
  );
}
