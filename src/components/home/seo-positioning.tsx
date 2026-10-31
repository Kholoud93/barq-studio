"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { SectionHeader } from "@/components/shared/section-header";
import { useApp } from "@/providers/app-provider";

const links = [
  "/services/web-development",
  "/services/mobile-app-development",
  "/services/ecommerce-development",
  "/services/ai-automation",
] as const;

export function SeoPositioning() {
  const { t } = useApp();

  return (
    <AnimatedSection className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(184,243,75,0.05),transparent_70%)] dark:block" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.seoBand.badge}
          title={t.seoBand.title}
          description={t.seoBand.description}
        />
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.seoBand.items.map((item, index) => (
            <StaggerItem key={item.title}>
              <Link
                href={links[index] ?? "/services"}
                className="group flex h-full flex-col rounded-2xl border border-primary/15 bg-card/70 p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_28px_rgba(184,243,75,0.1)]"
              >
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary rtl:flex-row-reverse">
                  {t.services.learnMore}
                  <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
