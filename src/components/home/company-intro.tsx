"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { useApp } from "@/providers/app-provider";

export function CompanyIntro() {
  const { t } = useApp();

  return (
    <AnimatedSection className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-background dark:bg-transparent">
        <Image
          src="/scenes/about-lightning-rock.jpg"
          alt=""
          fill
          sizes="100vw"
          className="hidden object-cover object-center opacity-45 dark:block"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-b from-background/50 via-background/65 to-background dark:block" />
        <div className="neon-project-glow absolute inset-0 hidden opacity-30 dark:block" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.intro.badge}
          title={t.intro.title}
          description={t.intro.description}
        />
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/20 neon-rim">
            <div className="relative aspect-[4/5] sm:aspect-[5/4]">
              <Image
                src="/scenes/about-lightning-rock.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="neon-project-glow absolute inset-0 opacity-50 dark:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent dark:from-background/70" />
            </div>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-card/80 p-5 backdrop-blur-md sm:p-8 lg:p-12">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.intro.p1}
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.intro.p2}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4 rtl:sm:flex-row-reverse">
              <div className="hidden h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent sm:block rtl:bg-gradient-to-l" />
              <GradientText className="max-w-full text-center text-sm font-medium uppercase tracking-wider text-balance">
                {t.intro.tagline}
              </GradientText>
              <div className="hidden h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent sm:block rtl:bg-gradient-to-r" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
