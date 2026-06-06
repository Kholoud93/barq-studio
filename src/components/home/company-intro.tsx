"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { useApp } from "@/providers/app-provider";

export function CompanyIntro() {
  const { t } = useApp();

  return (
    <AnimatedSection className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.intro.badge}
          title={t.intro.title}
          description={t.intro.description}
        />
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card/50 p-8 sm:p-12">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.intro.p1}
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.intro.p2}
            </p>
            <div className="mt-8 flex items-center gap-4 rtl:flex-row-reverse">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent rtl:bg-gradient-to-l" />
              <GradientText className="text-sm font-medium uppercase tracking-wider">
                {t.intro.tagline}
              </GradientText>
              <div className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent rtl:bg-gradient-to-r" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
