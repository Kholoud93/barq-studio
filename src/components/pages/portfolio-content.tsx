"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { ProjectCard } from "@/components/shared/project-card";
import { ContactCTA } from "@/components/home/contact-cta";
import { useApp } from "@/providers/app-provider";
import { matchesProjectFilter, type ProjectFilter } from "@/lib/project-filters";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface PortfolioContentProps {
  projects: Project[];
}

export function PortfolioContent({ projects }: PortfolioContentProps) {
  const { t } = useApp();
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const filters: { id: ProjectFilter; label: string }[] = [
    { id: "all", label: t.projects.filterAll },
    { id: "web", label: t.projects.filterWeb },
    { id: "mobile", label: t.projects.filterMobile },
    { id: "design", label: t.projects.filterDesign },
  ];

  const filtered = projects.filter((project) => matchesProjectFilter(project, filter));

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-32">
        <Image
          src="/scenes/section-rocky-glow.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="neon-project-glow absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
              {t.projects.pageBadge}
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <GradientText as="span">{t.projects.pageTitle}</GradientText>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              {t.projects.pageDescription}
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="relative overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/scenes/section-rocky-glow.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t.projects.badge}
            title={t.projects.caseStudies}
            description={t.projects.caseDescription}
          />

          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={cn(
                  "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  filter === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {filter === item.id && (
                  <motion.span
                    layoutId="portfolio-filter"
                    className="absolute inset-0 rounded-lg border border-primary/30 bg-primary/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          <LayoutGroup>
            <motion.div layout className="grid gap-6 sm:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className={cn(index === 0 && filter === "all" && "sm:col-span-2")}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </AnimatedSection>

      <ContactCTA />
    </>
  );
}
