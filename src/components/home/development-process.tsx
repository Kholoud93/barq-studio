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

        <div className="relative overflow-x-auto overscroll-x-contain pb-2 lg:overflow-visible lg:pb-0">
          <div className="process-track pointer-events-none absolute left-0 right-0 top-8 hidden h-px lg:block" />
          <StaggerContainer className="flex w-max gap-4 lg:grid lg:w-auto lg:grid-cols-6">
            {t.process.steps.map((step, index) => {
              const Icon = icons[index] || Search;
              return (
                <StaggerItem key={step.title} className="min-w-[240px] shrink-0 lg:min-w-0">
                  <div className="relative h-full rounded-2xl border border-border bg-card/50 p-5 transition-all duration-500 hover:border-primary/25 hover:bg-card">
                    <div className="mb-5 flex items-center gap-3 rtl:flex-row-reverse">
                      <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-background text-sm font-bold text-primary shadow-sm shadow-primary/10">
                        {index + 1}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}
