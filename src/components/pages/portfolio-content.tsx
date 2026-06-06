"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { ProjectCard } from "@/components/shared/project-card";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { ContactCTA } from "@/components/home/contact-cta";
import { useApp } from "@/providers/app-provider";
import type { Project } from "@/data/projects";

interface PortfolioContentProps {
  projects: Project[];
}

export function PortfolioContent({ projects }: PortfolioContentProps) {
  const { t } = useApp();

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="hero-glow absolute inset-0" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">{t.projects.pageBadge}</span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <GradientText as="span">{t.projects.pageTitle}</GradientText>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.projects.pageDescription}</p>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={t.projects.badge} title={t.projects.caseStudies} description={t.projects.caseDescription} />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      <ContactCTA />
    </>
  );
}
