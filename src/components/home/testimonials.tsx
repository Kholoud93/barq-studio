"use client";

import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { useApp } from "@/providers/app-provider";

export function Testimonials() {
  const { t } = useApp();

  return (
    <AnimatedSection className="bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.commitment.badge}
          title={t.commitment.title}
          description={t.commitment.description}
        />
        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2">
          {t.commitment.items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-2xl border border-border bg-card/70 p-6 transition-colors hover:border-primary/30">
                <div className="flex items-start gap-3 rtl:flex-row-reverse">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="rtl:text-right">
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
