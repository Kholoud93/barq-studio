"use client";

import { Search, Map, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { SectionHeader } from "@/components/shared/section-header";
import { useApp } from "@/providers/app-provider";

const icons = [Search, Map, PenTool, Code2, ShieldCheck, Rocket];

export function DevelopmentProcess() {
  const { t } = useApp();

  return (
    <AnimatedSection className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.process.badge}
          title={t.process.title}
          description={t.process.description}
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.process.steps.map((step, index) => {
            const Icon = icons[index] || Search;
            return (
              <StaggerItem key={step.title}>
                <div className="relative rounded-xl border border-border bg-card/50 p-6 transition-all duration-500 hover:border-primary/20">
                  <div className="mb-4 flex items-center gap-3 rtl:flex-row-reverse">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {index + 1}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
