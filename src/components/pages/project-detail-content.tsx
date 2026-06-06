"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Building2, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactCTA } from "@/components/home/contact-cta";
import { useApp } from "@/providers/app-provider";
import { localizeProject } from "@/lib/projects-i18n";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectDetailContentProps {
  project: Project;
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const { t, locale } = useApp();
  const localized = localizeProject(project, locale);

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="hero-glow absolute inset-0" />
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-10", project.gradient)} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link href="/portfolio" className="rtl:flex-row-reverse">
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              {t.projects.back}
            </Link>
          </Button>
          <div className="max-w-4xl">
            <Badge variant="outline" className="mb-4">
              {localized.localizedCategory}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {localized.localizedTitle}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {localized.localizedDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2 rtl:flex-row-reverse">
                <Building2 className="h-4 w-4 text-primary" />
                {project.client}
              </span>
              <span className="flex items-center gap-2 rtl:flex-row-reverse">
                <Calendar className="h-4 w-4 text-primary" />
                {project.year}
              </span>
              <span className="flex items-center gap-2 rtl:flex-row-reverse">
                <Clock className="h-4 w-4 text-primary" />
                {localized.localizedDuration}
              </span>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={cn("mb-16 h-64 rounded-2xl bg-gradient-to-br sm:h-80", project.gradient)}>
            <div className="flex h-full items-center justify-center px-6 text-center">
              <h2 className="text-3xl font-bold text-white/90 sm:text-4xl">
                {localized.localizedTitle}
              </h2>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold">{t.projects.challenge}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {localized.localizedChallenge}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{t.projects.solution}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {localized.localizedSolution}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{t.projects.results}</h2>
                <ul className="mt-6 space-y-4">
                  {localized.localizedResults.map((result) => (
                    <li key={result} className="flex items-start gap-3 rtl:flex-row-reverse">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.projects.technologies}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.projects.servicesProvided}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {localized.localizedServices.map((service) => (
                    <Badge key={service} variant="outline">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                <h3 className="text-lg font-semibold">
                  <GradientText as="span">{t.projects.interested}</GradientText>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.projects.interestedDesc}
                </p>
                <Button asChild className="mt-4 w-full">
                  <Link href="/contact">{t.projects.startProject}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <ContactCTA />
    </>
  );
}
