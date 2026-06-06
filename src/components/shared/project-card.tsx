"use client";

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
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { locale } = useApp();
  const localized = localizeProject(project, locale);

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn("h-full", className)}
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
      >
        <div
          className={cn(
            "relative h-48 overflow-hidden bg-gradient-to-br sm:h-56",
            project.gradient
          )}
        >
          <motion.div
            className="absolute inset-0 grid-pattern opacity-30"
            animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/10" />
          <div className="absolute bottom-4 left-4 right-4 rtl:text-right">
            <Badge
              variant="outline"
              className="bg-black/30 text-white border-white/20 backdrop-blur-sm"
            >
              {localized.localizedCategory}
            </Badge>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm rtl:right-auto rtl:left-4"
          >
            <ArrowUpRight className="h-5 w-5 text-white rtl:rotate-180" />
          </motion.div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {localized.localizedTitle}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {localized.localizedDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
