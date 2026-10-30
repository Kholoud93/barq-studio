"use client";

import Image from "next/image";
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
    <AnimatedSection className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/scenes/section-rocky-glow.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="neon-project-glow absolute inset-0 opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.projects.badge}
          title={t.projects.title}
          description={t.projects.description}
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <StaggerItem
              key={project.slug}
              className={cn(index === 0 && "sm:col-span-2 lg:col-span-2")}
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
