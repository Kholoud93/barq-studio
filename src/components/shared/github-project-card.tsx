"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GitHubIcon } from "@/components/shared/github-icon";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useApp } from "@/providers/app-provider";
import type { GitHubProject } from "@/lib/github";

interface GitHubProjectCardProps {
  project: GitHubProject;
  className?: string;
}

export function GitHubProjectCard({ project, className }: GitHubProjectCardProps) {
  const { t } = useApp();

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn("h-full", className)}
    >
      <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
        <div className={cn("relative h-40 overflow-hidden bg-gradient-to-br sm:h-48", project.gradient)}>
          <motion.div
            className="absolute inset-0 grid-pattern opacity-30"
            animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/10" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rtl:flex-row-reverse">
            <Badge variant="outline" className="bg-black/30 text-white border-white/20 backdrop-blur-sm">
              {project.category}
            </Badge>
            {project.stars > 0 && (
              <span className="flex items-center gap-1 rounded-full bg-black/30 px-2 py-1 text-xs text-white backdrop-blur-sm">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                {project.stars}
              </span>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, rotate: -45 }}
            whileHover={{ opacity: 1, rotate: 0 }}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm rtl:right-auto rtl:left-4"
          >
            <GitHubIcon className="h-5 w-5 text-white" />
          </motion.div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">{project.description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {project.language && <Badge variant="secondary">{project.language}</Badge>}
            <Badge variant="outline" className="text-primary border-primary/20">{t.github.openSource}</Badge>
          </div>
          <div className="mt-5 flex gap-3 rtl:flex-row-reverse">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary rtl:flex-row-reverse">
              <GitHubIcon className="h-3.5 w-3.5" />
              {t.github.sourceCode}
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-accent rtl:flex-row-reverse">
                <ExternalLink className="h-3.5 w-3.5" />
                {t.github.liveDemo}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
