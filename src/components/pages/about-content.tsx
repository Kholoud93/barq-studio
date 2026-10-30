"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Globe,
  Heart,
  Lightbulb,
  RefreshCw,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { Button } from "@/components/ui/button";
import { Statistics } from "@/components/home/statistics";
import { useApp } from "@/providers/app-provider";
import { siteConfig } from "@/lib/metadata";

const valueIcons = [Target, Users, Lightbulb, RefreshCw, Heart];

export function AboutContent() {
  const { t, locale } = useApp();
  const tagline = locale === "ar" ? siteConfig.taglineAr : siteConfig.tagline;

  const pillars = [
    { title: t.about.whoTitle, text: t.about.whoText, icon: Compass },
    { title: t.about.whatTitle, text: t.about.whatText, icon: Sparkles },
    { title: t.about.approachTitle, text: t.about.approachText, icon: Globe },
  ];

  return (
    <>
      <section className="relative min-h-[56vh] overflow-hidden pb-16 pt-32">
        <Image
          src="/scenes/about-lightning-rock.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/8 via-background/15 to-background/50 dark:from-background/25 dark:via-background/35 dark:to-background" />
        <div className="neon-project-glow absolute inset-0 opacity-25 dark:opacity-40" />
        <div className="relative mx-auto flex min-h-[40vh] max-w-7xl items-end px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl rtl:text-right">
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
              {t.about.badge}
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.about.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              {t.about.description}
            </p>
            <p className="mt-3 text-sm text-primary">{tagline}</p>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="rtl:text-right">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.about.story}</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t.about.storyP1}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.about.storyP2}</p>
            </div>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/20 neon-rim">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/scenes/hero-astronaut-moon.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="neon-project-glow absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent dark:from-background/80" />
              </div>
              <div className="absolute inset-x-0 bottom-0 space-y-3 p-6 sm:p-8">
                <div className="rounded-2xl border border-primary/20 bg-black/50 p-5 backdrop-blur-md">
                  <h3 className="text-lg font-semibold text-white">{t.about.mission}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{t.about.missionText}</p>
                </div>
                <div className="rounded-2xl border border-primary/15 bg-black/45 p-5 backdrop-blur-md">
                  <h3 className="text-lg font-semibold text-white">{t.about.vision}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{t.about.visionText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-secondary/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <AnimatedItem key={pillar.title} delay={index * 0.08}>
                  <div className="h-full rounded-2xl border border-border bg-card/80 p-6 rtl:text-right">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-semibold text-foreground">{pillar.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <Statistics />

      <AnimatedSection className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t.about.valuesBadge}
            title={t.about.valuesTitle}
            description={t.about.valuesDescription}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.about.values.map((value, index) => {
              const Icon = valueIcons[index] || Target;
              return (
                <AnimatedItem key={value.title} delay={index * 0.08}>
                  <div className="h-full rounded-xl border border-border bg-card/50 p-6 rtl:text-right">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.about.ready}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t.about.readyDesc}</p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact" className="rtl:flex-row-reverse">
              {t.cta.contact}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </AnimatedSection>
    </>
  );
}
