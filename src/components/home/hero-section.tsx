"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/shared/gradient-text";
import { Magnetic } from "@/components/shared/magnetic";
import { useApp } from "@/providers/app-provider";

export function HeroSection() {
  const { t } = useApp();
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { opacity: 0, y: 16 };

  return (
    <section className="relative overflow-x-clip pt-20 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/scenes/section-rocky-glow.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-85 dark:opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/8 via-background/15 to-background/50 dark:from-background/35 dark:via-background/45 dark:to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(182,255,53,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_10%_80%,rgba(142,219,32,0.05),transparent_55%)]" />
        <div className="grid-pattern absolute inset-0 opacity-15 dark:opacity-20" />
      </div>

      <div className="relative z-[2] mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-8 sm:px-6 sm:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:pb-28 lg:pt-12">
        <div className="relative rtl:text-right">
          <div className="pointer-events-none absolute -inset-x-4 -inset-y-6 rounded-3xl bg-background/20 blur-2xl dark:bg-background/25 lg:-inset-x-6" />
          <div className="relative">
          <motion.span
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex max-w-full rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary sm:text-[11px] sm:tracking-[0.18em]"
          >
            {t.hero.label}
          </motion.span>

          <motion.h1
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
          >
            <span className="block">{t.hero.line1}</span>
            <GradientText as="span" className="block">
              {t.hero.line2}
            </GradientText>
          </motion.h1>

          <motion.p
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row rtl:sm:flex-row-reverse"
          >
            <Magnetic className="w-full sm:w-auto">
              <Button asChild size="lg" className="w-full shadow-[0_0_28px_rgba(182,255,53,0.28)] sm:w-auto">
                <Link href="/contact" className="rtl:flex-row-reverse">
                  {t.hero.cta1}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
              </Button>
            </Magnetic>
            <Magnetic strength={0.2} className="w-full sm:w-auto">
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/portfolio">{t.hero.cta2}</Link>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground rtl:flex-row-reverse"
          >
            <span>{t.hero.trust1}</span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span>{t.hero.trust2}</span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span>{t.hero.trust3}</span>
          </motion.div>
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="relative mx-auto w-full max-w-lg pb-10 sm:pb-12 lg:max-w-none lg:pb-8"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,rgba(182,255,53,0.2),transparent_65%)] blur-2xl sm:-inset-6" />
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-[0_0_0_1px_rgba(182,255,53,0.08),0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="flex items-center gap-1.5 border-b border-border bg-secondary/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <span className="ms-3 text-xs text-muted-foreground">dashboard.barq</span>
              </div>
              <div className="relative aspect-[16/10]">
                <Image
                  src="/projects/crm-system.jpg"
                  alt="BARQ STUDIO digital product dashboard preview"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-primary/10" />
              </div>
            </div>

            <div className="absolute -bottom-4 end-1 w-[42%] max-w-[140px] overflow-hidden rounded-[1.35rem] border border-primary/25 bg-card shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:-bottom-8 sm:end-4 sm:w-[34%] sm:max-w-none">
              <div className="relative aspect-[9/16]">
                <Image
                  src="/projects/healthcare-management.jpg"
                  alt="BARQ STUDIO mobile application preview"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 top-0 h-6 bg-black/40" />
                <div className="absolute inset-x-8 top-1.5 h-1 rounded-full bg-white/20" />
              </div>
            </div>

            <div className="absolute -start-2 top-10 hidden rounded-xl border border-primary/20 bg-card/90 px-3 py-2 text-xs text-primary backdrop-blur-md sm:block">
              {t.intro.tagline}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
