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
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { SectionHeader } from "@/components/shared/section-header";
import { TiltCard } from "@/components/shared/tilt-card";
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
    <AnimatedSection variant="blur" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(184,243,75,0.08),transparent_70%)] dark:block" />
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
                <TiltCard maxTilt={10} scale={1.02} className="h-full">
                  <Link
                    href={`/services/${service?.slug ?? key}`}
                    className="group flex h-full flex-col rounded-2xl border border-primary/15 bg-card/70 p-6 transition-all duration-500 hover:border-primary/40 hover:bg-card/90 hover:shadow-[0_0_40px_rgba(184,243,75,0.12)] active:border-primary/40 active:bg-card/90 active:shadow-[0_0_40px_rgba(184,243,75,0.12)]"
                  >
                    <div className="flex items-start justify-between gap-3 rtl:flex-row-reverse">
                      <motion.div
                        whileHover={{ rotate: -8, scale: 1.08 }}
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(184,243,75,0.45)]"
                      >
                        <Icon className="h-5 w-5" />
                      </motion.div>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-primary/40 group-hover:text-primary group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
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
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="border-primary/25">
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
