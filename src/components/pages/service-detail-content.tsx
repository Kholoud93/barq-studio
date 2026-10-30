"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Monitor, Server, Smartphone, Palette } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactCTA } from "@/components/home/contact-cta";
import { useApp } from "@/providers/app-provider";
import type { Service } from "@/data/services";
import { services } from "@/data/services";

const iconMap = {
  frontend: Monitor,
  backend: Server,
  mobile: Smartphone,
  design: Palette,
};

interface ServiceDetailContentProps {
  service: Service;
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const { t, locale } = useApp();
  const isAr = locale === "ar";
  const title = isAr ? service.titleAr : service.title;
  const description = isAr ? service.descriptionAr : service.description;
  const features = isAr ? service.featuresAr : service.features;
  const Icon = iconMap[service.id as keyof typeof iconMap] || Monitor;
  const related = services.filter((item) => item.id !== service.id);

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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <GradientText as="span">{title}</GradientText>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
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

      <AnimatedSection className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold sm:text-3xl">{t.services.included}</h2>
              <ul className="mt-6 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 rtl:flex-row-reverse">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{t.nav.services}</h3>
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/services/${item.slug}`}
                  className="block rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-primary/30"
                >
                  <p className="font-medium text-foreground">
                    {isAr ? item.titleAr : item.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                    {isAr ? item.descriptionAr : item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <ContactCTA />
    </>
  );
}
