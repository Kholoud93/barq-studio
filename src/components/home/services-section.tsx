"use client";

import Link from "next/link";
import { Monitor, Server, Smartphone, Palette, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { useApp } from "@/providers/app-provider";

const serviceKeys = ["frontend", "backend", "mobile", "design"] as const;
const iconMap = { frontend: Monitor, backend: Server, mobile: Smartphone, design: Palette };
const techMap = {
  frontend: ["React", "Next.js", "Vue", "Nuxt", "TypeScript"],
  backend: ["APIs", "Auth", "Databases", "Admin", "CRM"],
  mobile: ["React Native", "Expo", "Android", "iOS"],
  design: ["Research", "Wireframing", "Prototyping", "Design Systems"],
};

export function ServicesSection() {
  const { t } = useApp();
  const featuredKey = "frontend";
  const FeaturedIcon = iconMap[featuredKey];
  const featured = t.services.items[featuredKey];
  const compactKeys = serviceKeys.filter((key) => key !== featuredKey);

  return (
    <AnimatedSection className="bg-card/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.services.badge}
          title={t.services.title}
          description={t.services.description}
        />
        <StaggerContainer className="grid gap-6 lg:grid-cols-5">
          <StaggerItem className="lg:col-span-3">
            <Link
              href="/services#frontend"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/80 p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between gap-4 rtl:flex-row-reverse">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <FeaturedIcon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                    {t.services.featuredLabel}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {featured.description}
                </p>
                <p className="mt-5 text-sm font-medium text-primary">{featured.outcome}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {techMap[featuredKey].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-primary rtl:flex-row-reverse">
                  {t.services.explore}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </span>
              </div>
            </Link>
          </StaggerItem>

          <div className="flex flex-col gap-4 lg:col-span-2">
            {compactKeys.map((key) => {
              const Icon = iconMap[key];
              const item = t.services.items[key];
              return (
                <StaggerItem key={key}>
                  <Link
                    href={`/services#${key}`}
                    className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card/80 p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 rtl:flex-row-reverse"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1 rtl:text-right">
                      <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm font-medium text-primary">{item.outcome}</p>
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services" className="rtl:flex-row-reverse">
              {t.services.explore}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
