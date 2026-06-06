"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { GitHubProjectCard } from "@/components/shared/github-project-card";
import { GitHubIcon } from "@/components/shared/github-icon";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { Button } from "@/components/ui/button";
import { useApp } from "@/providers/app-provider";
import type { GitHubProject } from "@/lib/github";

interface GitHubProjectsProps {
  projects: GitHubProject[];
}

export function GitHubProjects({ projects }: GitHubProjectsProps) {
  const { t } = useApp();
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  if (featured.length === 0) return null;

  return (
    <AnimatedSection className="py-24 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.github.badge}
          title={t.github.title}
          description={t.github.description}
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.id}>
              <GitHubProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row rtl:sm:flex-row-reverse">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio" className="rtl:flex-row-reverse">
              {t.github.viewAll}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="https://github.com/Kholoud93" target="_blank" rel="noopener noreferrer" className="rtl:flex-row-reverse">
              <GitHubIcon className="h-4 w-4" />
              {t.github.profile}
            </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
