"use client";

import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { TiltCard } from "@/components/shared/tilt-card";
import { useApp } from "@/providers/app-provider";

export function Testimonials() {
  const { t } = useApp();

  return (
    <AnimatedSection className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_50%_100%,rgba(184,243,75,0.06),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.commitment.badge}
          title={t.commitment.title}
          description={t.commitment.description}
        />
        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2">
          {t.commitment.items.map((item) => (
            <StaggerItem key={item.title}>
              <TiltCard maxTilt={6} className="h-full">
                <div className="h-full rounded-2xl border border-primary/15 bg-card/55 p-6 backdrop-blur-md transition-all duration-500 hover:border-primary/35 hover:shadow-[0_0_28px_rgba(184,243,75,0.1)]">
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
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
