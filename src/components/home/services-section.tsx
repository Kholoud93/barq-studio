"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  LayoutDashboard,
  Monitor,
  Palette,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { useApp } from "@/providers/app-provider";
import { services } from "@/data/services";

const iconMap = {
  Monitor,
  Smartphone,
  ShoppingBag,
  LayoutDashboard,
  Palette,
  Bot,
} as const;

export function ServicesSection() {
  const { t } = useApp();
  const serviceKeys = ["web", "mobile", "ecommerce", "crm", "uiux", "ai"] as const;

  return (
    <AnimatedSection className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(182,255,53,0.06),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.services.badge}
          title={t.services.title}
          description={t.services.description}
        />
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key) => {
            const item = t.services.items[key];
            const service = services.find((s) => s.id === key);
            const Icon = iconMap[service?.icon as keyof typeof iconMap] ?? Monitor;
            return (
              <StaggerItem key={key}>
                <Link
                  href={`/services/${service?.slug ?? key}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_0_40px_rgba(182,255,53,0.08)]"
                >
                  <div className="flex items-start justify-between gap-3 rtl:flex-row-reverse">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-primary/40 group-hover:text-primary">
                      <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-primary">{item.outcome}</p>
                  <span className="mt-3 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    {t.services.learnMore}
                  </span>
                </Link>
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
