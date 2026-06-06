"use client";

import { Award, Eye, Users, Clock, Handshake, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { SectionHeader } from "@/components/shared/section-header";
import { useApp } from "@/providers/app-provider";

const icons = [Award, Eye, Users, Clock, Handshake, Zap];

export function WhyChooseUs() {
  const { t } = useApp();

  return (
    <AnimatedSection className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.why.badge}
          title={t.why.title}
          description={t.why.description}
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, index) => {
            const Icon = icons[index] || Award;
            return (
              <StaggerItem key={item.title}>
                <div className="group rounded-xl border border-border bg-card/50 p-6 transition-all duration-500 hover:border-primary/20 hover:bg-card hover:-translate-y-1">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
