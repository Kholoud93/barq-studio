"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle,
  Sparkles,
  Tag,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { ProjectCard } from "@/components/shared/project-card";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAdjacentProjects, getRelatedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { useApp } from "@/providers/app-provider";
import { localizeProject } from "@/lib/projects-i18n";
import type { Project } from "@/data/projects";

const ContactCTA = dynamic(
  () =>
    import("@/components/home/contact-cta").then((mod) => ({
      default: mod.ContactCTA,
    })),
  { ssr: true }
);

interface ProjectDetailContentProps {
  project: Project;
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const { t, locale } = useApp();
  const isAr = locale === "ar";
  const localized = localizeProject(project, locale);
  const { prev, next } = getAdjacentProjects(project.slug);
  const related = getRelatedProjects(project.slug, 3);
  const prevLocalized = prev ? localizeProject(prev, locale) : null;
  const nextLocalized = next ? localizeProject(next, locale) : null;
  const hasResults = localized.localizedResults.length > 0;

  const relatedServiceLabels = project.services
    .map((slug) => services.find((service) => service.slug === slug))
    .filter(Boolean)
    .map((service) => (isAr ? service!.titleAr : service!.title));

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative flex min-h-[70vh] items-end sm:min-h-[80vh]">
          <motion.div layoutId={`project-image-${project.slug}`} className="absolute inset-0">
            <Image
              src={project.image}
              alt={localized.localizedTitle}
              fill
              preload
              fetchPriority="high"
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="neon-project-glow absolute inset-0 z-[1] opacity-90" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background/70 via-background/35 to-black/20 dark:from-background dark:via-background/55 dark:to-black/30" />
          <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_70%_30%,rgba(182,255,53,0.2),transparent_50%)]" />
          <div className="case-study-orb absolute -right-20 top-24 h-72 w-72" />
          <div className="case-study-orb absolute -left-16 bottom-32 h-56 w-56 opacity-60" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="mb-8 border border-white/10 bg-black/30 text-white backdrop-blur-md hover:bg-black/45 hover:text-white"
            >
              <Link href="/portfolio" className="rtl:flex-row-reverse">
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                {t.projects.back}
              </Link>
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl rtl:text-right"
            >
              <div className="mb-5 flex flex-wrap items-center gap-3 rtl:flex-row-reverse">
                <Badge className="border-primary/40 bg-primary/15 text-primary">
                  {localized.localizedKind}
                </Badge>
                <Badge variant="outline" className="border-white/20 bg-white/10 text-white">
                  {localized.localizedCategory}
                </Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
                {localized.localizedTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                {localized.localizedDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/70 rtl:flex-row-reverse">
                <span className="inline-flex items-center gap-2 rtl:flex-row-reverse">
                  <Tag className="h-4 w-4 text-primary" />
                  {t.projects.kind}: {localized.localizedKind}
                </span>
                <span className="inline-flex items-center gap-2 rtl:flex-row-reverse">
                  <Calendar className="h-4 w-4 text-primary" />
                  {t.projects.year}: {project.year}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/15 neon-rim">
              <div className="relative aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src={project.image}
                  alt={localized.localizedTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="neon-project-glow absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-primary/10" />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-10 rtl:text-right">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary rtl:flex-row-reverse">
                  <Sparkles className="h-3.5 w-3.5" />
                  {t.projects.overview}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  {t.projects.challenge}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {localized.localizedChallenge}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {t.projects.solution}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {localized.localizedSolution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(182,255,53,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {hasResults ? (
            <>
              <div className="mb-10 max-w-2xl rtl:text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  {t.projects.impact}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  <GradientText as="span">{t.projects.results}</GradientText>
                </h2>
              </div>
              <div className="mb-12 grid gap-4 sm:grid-cols-2">
                {localized.localizedResults.map((result, index) => (
                  <motion.div
                    key={result}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06, duration: 0.45 }}
                    className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-card/60 p-5 backdrop-blur-sm rtl:flex-row-reverse"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary shadow-[0_0_20px_rgba(182,255,53,0.25)]">
                      <CheckCircle className="h-4 w-4" />
                    </span>
                    <p className="text-base leading-relaxed text-foreground/90">{result}</p>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <p className="mb-12 max-w-2xl text-sm text-muted-foreground rtl:text-right">
              {t.projects.resultsNote}
            </p>
          )}

          <div className="grid gap-6 rounded-[1.75rem] border border-primary/15 bg-card/50 p-6 neon-rim sm:grid-cols-2 sm:p-8">
            <div className="rtl:text-right">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t.projects.technologies}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2 rtl:flex-row-reverse">
                {project.technologies.map((tech) => (
                  <Badge key={tech} className="border-primary/20 bg-primary/10 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="rtl:text-right">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t.projects.servicesProvided}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2 rtl:flex-row-reverse">
                {relatedServiceLabels.map((service) => (
                  <Badge key={service} variant="outline">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="border-y border-primary/10">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2">
          {prev && prevLocalized ? (
            <Link
              href={`/portfolio/${prev.slug}`}
              className="group relative flex min-h-[220px] flex-col justify-end overflow-hidden border-b border-primary/10 p-8 sm:border-b-0 sm:border-e"
            >
              <Image
                src={prev.image}
                alt={prevLocalized.localizedTitle}
                fill
                sizes="50vw"
                className="object-cover opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-55"
              />
              <div className="neon-project-glow absolute inset-0 opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <div className="relative z-10 rtl:text-right">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary rtl:flex-row-reverse">
                  <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
                  {t.projects.prevProject}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {prevLocalized.localizedTitle}
                </h3>
              </div>
            </Link>
          ) : (
            <div className="hidden min-h-[220px] sm:block" />
          )}
          {next && nextLocalized ? (
            <Link
              href={`/portfolio/${next.slug}`}
              className="group relative flex min-h-[220px] flex-col justify-end overflow-hidden p-8"
            >
              <Image
                src={next.image}
                alt={nextLocalized.localizedTitle}
                fill
                sizes="50vw"
                className="object-cover opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-55"
              />
              <div className="neon-project-glow absolute inset-0 opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <div className="relative z-10 text-end rtl:text-left">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary rtl:flex-row-reverse">
                  {t.projects.nextProject}
                  <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {nextLocalized.localizedTitle}
                </h3>
              </div>
            </Link>
          ) : (
            <div className="hidden min-h-[220px] sm:block" />
          )}
        </div>
      </section>

      <AnimatedSection className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {t.projects.moreProjects}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              <GradientText as="span">{t.projects.title}</GradientText>
            </h2>
          </div>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <StaggerItem key={item.slug}>
                <ProjectCard project={item} variant="card" />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/contact">{t.projects.startProject}</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <ContactCTA />
    </>
  );
}
