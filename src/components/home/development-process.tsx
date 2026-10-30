"use client";

import Image from "next/image";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { SectionHeader } from "@/components/shared/section-header";
import { Parallax } from "@/components/shared/parallax";
import { TiltCard } from "@/components/shared/tilt-card";
import { EnergyParticles } from "@/components/shared/energy-particles";
import { useApp } from "@/providers/app-provider";

const icons = [Search, PenTool, Code2, Rocket];

export function DevelopmentProcess() {
  const { t } = useApp();

  return (
    <AnimatedSection variant="blur" className="relative overflow-x-clip py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <Parallax offset={60} scale={1.08} className="absolute inset-[-8%]">
          <div className="relative h-full w-full">
            <Image
              src="/scenes/cta-astronaut-portal.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[center_70%] opacity-80 dark:opacity-40"
            />
          </div>
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/35 to-background/75 dark:from-background/55 dark:via-background/70 dark:to-background" />
        <EnergyParticles className="opacity-70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.process.badge}
          title={t.process.title}
          description={t.process.description}
        />

        <div className="relative">
          <div className="process-track pointer-events-none absolute left-0 right-0 top-10 hidden h-px lg:block" />
          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((step, index) => {
              const Icon = icons[index] || Search;
              return (
                <StaggerItem key={step.title} className="min-w-0">
                  <TiltCard maxTilt={9} scale={1.02}>
                    <div className="relative h-full rounded-2xl border border-primary/20 bg-card/55 p-5 backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_32px_rgba(184,243,75,0.14)]">
                      <div className="mb-5 flex items-center gap-3 rtl:flex-row-reverse">
                        <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/35 bg-background text-sm font-bold text-primary shadow-[0_0_18px_rgba(184,243,75,0.3)]">
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
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}
