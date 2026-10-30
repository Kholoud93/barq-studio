"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { ProjectCard } from "@/components/shared/project-card";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { Parallax } from "@/components/shared/parallax";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";
import { useApp } from "@/providers/app-provider";

export function FeaturedProjects() {
  const { t } = useApp();
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <AnimatedSection variant="blur" className="relative overflow-x-clip py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <Parallax offset={50} scale={1.06} className="absolute inset-[-6%]">
          <div className="relative h-full w-full">
            <Image
              src="/scenes/section-rocky-glow.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-75 dark:opacity-40"
            />
          </div>
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/18 to-background/55 dark:from-background/45 dark:via-background/65 dark:to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(182,255,53,0.08),transparent_70%)] dark:hidden" />
        <div className="neon-project-glow absolute inset-0 opacity-20 dark:opacity-45" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.projects.badge}
          title={t.projects.title}
          description={t.projects.description}
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
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
