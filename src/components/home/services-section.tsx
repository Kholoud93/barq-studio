"use client";

import Link from "next/link";
import { Monitor, Server, Smartphone, Palette, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
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

  return (
    <AnimatedSection className="py-24 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.services.badge}
          title={t.services.title}
          description={t.services.description}
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2">
          {serviceKeys.map((key) => {
            const Icon = iconMap[key];
            const item = t.services.items[key];
            return (
              <StaggerItem key={key}>
                <Card className="group h-full border-border bg-card/80 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {techMap[key].map((tech) => (
                        <span key={tech} className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
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
