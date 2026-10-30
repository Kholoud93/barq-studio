"use client";

import Link from "next/link";
import { Monitor, Server, Smartphone, Palette, ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DevelopmentProcess } from "@/components/home/development-process";
import { ContactCTA } from "@/components/home/contact-cta";
import { useApp } from "@/providers/app-provider";

const serviceKeys = ["frontend", "backend", "mobile", "design"] as const;
const iconMap = { frontend: Monitor, backend: Server, mobile: Smartphone, design: Palette };
const techMap = {
  frontend: ["React", "Next.js", "Vue", "Nuxt", "TypeScript"],
  backend: ["APIs", "Authentication", "Databases", "Admin Systems", "CRM Systems"],
  mobile: ["React Native", "Expo", "Android", "iOS"],
  design: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
};

export function ServicesContent() {
  const { t } = useApp();

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="hero-glow absolute inset-0" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">{t.services.badge}</span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <GradientText as="span">{t.services.pageTitle}</GradientText>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.services.pageDescription}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {serviceKeys.map((key, index) => {
          const Icon = iconMap[key];
          const item = t.services.items[key];
          const isEven = index % 2 === 0;
          return (
            <AnimatedSection key={key} id={key} className="py-16 sm:py-20">
              <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${isEven ? "" : "lg:[direction:rtl]"}`}>
                <div className={isEven ? "" : "lg:[direction:ltr]"}>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{item.title}</h2>
                  <p className="mt-3 text-sm font-medium text-primary">{item.outcome}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {techMap[key].map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <Button asChild className="mt-8">
                    <Link href="/contact" className="rtl:flex-row-reverse">
                      {t.services.discuss}
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                    </Link>
                  </Button>
                </div>
                <div className={isEven ? "" : "lg:[direction:ltr]"}>
                  <div className="rounded-2xl border border-border bg-card/50 p-8">
                    <h3 className="text-lg font-semibold text-foreground mb-6">{t.services.included}</h3>
                    <ul className="space-y-4">
                      {item.features.map((feature) => (
                        <AnimatedItem key={feature}>
                          <li className="flex items-start gap-3 rtl:flex-row-reverse">
                            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        </AnimatedItem>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {index < serviceKeys.length - 1 && <div className="mt-16 h-px bg-border" />}
            </AnimatedSection>
          );
        })}
      </div>

      <DevelopmentProcess />
      <ContactCTA />
    </>
  );
}
