"use client";

import Image from "next/image";
import { Search, Map, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { SectionHeader } from "@/components/shared/section-header";
import { useApp } from "@/providers/app-provider";

const icons = [Search, Map, PenTool, Code2, ShieldCheck, Rocket];

export function DevelopmentProcess() {
  const { t } = useApp();

  return (
    <AnimatedSection className="relative overflow-x-clip py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/scenes/cta-astronaut-portal.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_70%] opacity-45 dark:opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background/90 dark:from-background/50 dark:via-background/70 dark:to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.process.badge}
          title={t.process.title}
          description={t.process.description}
        />

        <div className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          <div className="process-track pointer-events-none absolute left-0 right-0 top-8 hidden h-px xl:block" />
          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {t.process.steps.map((step, index) => {
              const Icon = icons[index] || Search;
              return (
                <StaggerItem key={step.title} className="min-w-0">
                  <div className="relative h-full rounded-2xl border border-primary/15 bg-card/60 p-5 backdrop-blur-sm transition-all duration-500 hover:border-primary/35 hover:shadow-[0_0_32px_rgba(182,255,53,0.12)]">
                    <div className="mb-5 flex items-center gap-3 rtl:flex-row-reverse">
                      <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background text-sm font-bold text-primary shadow-[0_0_18px_rgba(182,255,53,0.25)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
