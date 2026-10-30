"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Building2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactCTA } from "@/components/home/contact-cta";
import { useApp } from "@/providers/app-provider";
import { localizeProject } from "@/lib/projects-i18n";
import type { Project } from "@/data/projects";

interface ProjectDetailContentProps {
  project: Project;
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const { t, locale } = useApp();
  const localized = localizeProject(project, locale);

  return (
    <>
      <section className="relative overflow-hidden pt-24">
        <div className="relative flex min-h-[52vh] items-end sm:min-h-[60vh]">
          <Image
            src={project.image}
            alt={localized.localizedTitle}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-black/25" />
          <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" size="sm" className="mb-8 bg-black/20 text-white hover:bg-black/30 hover:text-white">
              <Link href="/portfolio" className="rtl:flex-row-reverse">
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                {t.projects.back}
              </Link>
            </Button>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Badge variant="outline" className="mb-4 border-white/25 bg-white/10 text-white">
                {localized.localizedCategory}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {localized.localizedTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                {localized.localizedDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
            <div className="space-y-14">
              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {t.projects.overview}
                </p>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{t.projects.challenge}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {localized.localizedChallenge}
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold sm:text-3xl">{t.projects.solution}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {localized.localizedSolution}
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold sm:text-3xl">{t.projects.results}</h2>
                <ul className="mt-6 space-y-4">
                  {localized.localizedResults.map((result) => (
                    <li key={result} className="flex items-start gap-3 rtl:flex-row-reverse">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="space-y-4 rounded-2xl border border-border bg-card/60 p-6">
                <div className="space-y-3 text-sm text-muted-foreground">
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
                <div className="border-t border-border pt-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.projects.technologies}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.projects.servicesProvided}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {localized.localizedServices.map((service) => (
                      <Badge key={service} variant="outline">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border pt-4">
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
            </aside>
          </div>
        </div>
      </AnimatedSection>

      <ContactCTA />
    </>
  );
}
