"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { ProjectCard } from "@/components/shared/project-card";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";
import { useApp } from "@/providers/app-provider";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const { t } = useApp();
  const featured = getFeaturedProjects().slice(0, 5);

  return (
    <AnimatedSection className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.projects.badge}
          title={t.projects.title}
          description={t.projects.description}
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2">
          {featured.map((project, index) => (
            <StaggerItem
              key={project.slug}
              className={cn(index === 0 && "sm:col-span-2")}
            >
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio" className="rtl:flex-row-reverse">
              {t.projects.viewAll}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
