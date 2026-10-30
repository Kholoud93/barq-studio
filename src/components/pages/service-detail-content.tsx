"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle,
  LayoutDashboard,
  Monitor,
  Palette,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { ProjectCard } from "@/components/shared/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactCTA } from "@/components/home/contact-cta";
import { useApp } from "@/providers/app-provider";
import type { Service } from "@/data/services";
import { getServiceById, services } from "@/data/services";
import { getProjectsByService } from "@/data/projects";
import { faqs } from "@/data/faq";

const iconMap = {
  Monitor,
  Smartphone,
  ShoppingBag,
  LayoutDashboard,
  Palette,
  Bot,
} as const;

interface ServiceDetailContentProps {
  service: Service;
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const { t, locale } = useApp();
  const isAr = locale === "ar";
  const title = isAr ? service.titleAr : service.title;
  const description = isAr ? service.descriptionAr : service.description;
  const features = isAr ? service.featuresAr : service.features;
  const problems = isAr ? service.problemsAr : service.problems;
  const approach = isAr ? service.approachAr : service.approach;
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Monitor;
  const related = service.relatedServices
    .map((id) => getServiceById(id))
    .filter(Boolean) as Service[];
  const relatedProjects = getProjectsByService(service.slug, 3);
  const serviceFaqs = faqs.slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-32">
        <div className="hero-glow absolute inset-0" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link href="/services" className="rtl:flex-row-reverse">
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              {t.nav.services}
            </Link>
          </Button>
          <div className="max-w-3xl rtl:text-right">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-7 w-7" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <GradientText as="span">{title}</GradientText>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact" className="rtl:flex-row-reverse">
                  {t.services.discuss}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="pb-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rtl:text-right">
            <h2 className="text-2xl font-bold sm:text-3xl">{t.services.problems}</h2>
            <ul className="mt-6 space-y-4">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3 rtl:flex-row-reverse">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rtl:text-right">
            <h2 className="text-2xl font-bold sm:text-3xl">{t.services.approach}</h2>
            <ul className="mt-6 space-y-4">
              {approach.map((item, index) => (
                <li key={item} className="flex items-start gap-3 rtl:flex-row-reverse">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl rtl:text-right">{t.services.included}</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-border bg-card/70 p-4 rtl:flex-row-reverse"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <h3 className="text-lg font-semibold rtl:text-right">{t.services.technologies}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {relatedProjects.length > 0 && (
        <AnimatedSection className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold sm:text-3xl rtl:text-right">
              {t.services.relatedProjects}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} variant="card" />
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection className="bg-card/30 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl rtl:text-right">
            {t.services.faqTitle}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {serviceFaqs.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-start">
                  {isAr ? item.question : item.questionEn}
                </AccordionTrigger>
                <AccordionContent>
                  {isAr ? item.answer : item.answerEn}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold rtl:text-right">{t.services.relatedServices}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/services/${item.slug}`}
                className="rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/30"
              >
                <p className="font-medium text-foreground">
                  {isAr ? item.titleAr : item.title}
                </p>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {isAr ? item.shortDescriptionAr : item.shortDescription}
                </p>
              </Link>
            ))}
            {related.length === 0 &&
              services
                .filter((item) => item.id !== service.id)
                .slice(0, 3)
                .map((item) => (
                  <Link
                    key={item.id}
                    href={`/services/${item.slug}`}
                    className="rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/30"
                  >
                    <p className="font-medium text-foreground">
                      {isAr ? item.titleAr : item.title}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {isAr ? item.shortDescriptionAr : item.shortDescription}
                    </p>
                  </Link>
                ))}
          </div>
        </div>
      </AnimatedSection>

      <ContactCTA />
    </>
  );
}
