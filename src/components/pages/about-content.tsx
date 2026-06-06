"use client";

import Link from "next/link";
import { Target, Lightbulb, Heart, Globe, ArrowRight } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { Button } from "@/components/ui/button";
import { Statistics } from "@/components/home/statistics";
import { useApp } from "@/providers/app-provider";
import { siteConfig } from "@/lib/metadata";

const valueIcons = [Target, Lightbulb, Heart, Globe];

const team = [
  { name: "Ahmed Al-Farsi", role: "CEO & Founder", bio: "15+ years leading digital transformation initiatives across the Gulf region." },
  { name: "Noura Al-Salem", role: "CTO", bio: "Former principal engineer at a Fortune 500 company, specializing in scalable architecture." },
  { name: "David Park", role: "Head of Design", bio: "Award-winning product designer with expertise in enterprise UX and design systems." },
  { name: "Layla Mansouri", role: "Head of Engineering", bio: "Full-stack architect who has shipped 40+ production applications across fintech and healthtech." },
];

export function AboutContent() {
  const { t } = useApp();

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="hero-glow absolute inset-0" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">{t.about.badge}</span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t.about.title.split("Vision Hub")[0]}
              <GradientText as="span">Vision Hub</GradientText>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.about.description}</p>
            <p className="mt-3 text-sm text-primary">{siteConfig.tagline}</p>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.about.story}</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t.about.storyP1}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.about.storyP2}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card/50 p-8 sm:p-10">
              <h3 className="text-xl font-semibold text-foreground">{t.about.mission}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.about.missionText}</p>
              <div className="my-6 h-px bg-border" />
              <h3 className="text-xl font-semibold text-foreground">{t.about.vision}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.about.visionText}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Statistics />

      <AnimatedSection className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={t.about.valuesBadge} title={t.about.valuesTitle} description={t.about.valuesDescription} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((value, index) => {
              const Icon = valueIcons[index] || Target;
              return (
                <AnimatedItem key={value.title} delay={index * 0.1}>
                  <div className="rounded-xl border border-border bg-card/50 p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
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

      <AnimatedSection className="py-16 sm:py-24 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={t.about.teamBadge} title={t.about.teamTitle} description={t.about.teamDescription} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <AnimatedItem key={member.name} delay={index * 0.1}>
                <div className="rounded-xl border border-border bg-card/80 p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xl font-bold text-white">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
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
