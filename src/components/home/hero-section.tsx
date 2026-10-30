"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/shared/gradient-text";
import { Magnetic } from "@/components/shared/magnetic";
import { EnergyParticles } from "@/components/shared/energy-particles";
import { Floating3D, Parallax } from "@/components/shared/parallax";
import { TiltCard } from "@/components/shared/tilt-card";
import { useApp } from "@/providers/app-provider";
import { easeOutExpo } from "@/lib/motion";

export function HeroSection() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const initial = { opacity: 0, y: 20 };
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden pt-20 sm:pt-24"
    >
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <Image
          src="/scenes/hero-astronaut-moon.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 opacity-95"
        />
        <div className="cinematic-scrim absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_70%_35%,rgba(184,243,75,0.18),transparent_60%)]" />
        <EnergyParticles />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="relative z-[2] mx-auto grid max-w-7xl items-center gap-8 px-4 pb-16 pt-8 sm:gap-10 sm:px-6 sm:pb-20 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:pb-24"
      >
        <div className="rtl:text-right">
          <motion.span
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-[11px]"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_10px_rgba(184,243,75,0.9)]" />
            {t.hero.label}
          </motion.span>

          <motion.h1
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 text-[2.35rem] font-bold leading-[1.05] tracking-tight text-foreground sm:mt-6 sm:text-6xl lg:text-[4.25rem] lg:leading-[0.98]"
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
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row rtl:sm:flex-row-reverse"
          >
            <Magnetic className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full shadow-[0_0_32px_rgba(184,243,75,0.35)] sm:w-auto"
              >
                <Link href="/contact" className="rtl:flex-row-reverse">
                  {t.hero.cta1}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
              </Button>
            </Magnetic>
            <Magnetic strength={0.2} className="w-full sm:w-auto">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-primary/25 bg-secondary/40 backdrop-blur-md sm:w-auto"
              >
                <Link href="/portfolio" className="rtl:flex-row-reverse">
                  <Play className="h-4 w-4 fill-current" />
                  {t.hero.cta2}
                </Link>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35, ease: easeOutExpo }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground sm:mt-10 rtl:flex-row-reverse"
          >
            <span>{t.hero.trust1}</span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span>{t.hero.trust2}</span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span>{t.hero.trust3}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
          className="relative mx-auto w-full max-w-md pb-10 sm:max-w-lg lg:max-w-none lg:pb-8"
          style={{ perspective: 1400 }}
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,rgba(184,243,75,0.22),transparent_65%)] blur-2xl sm:-inset-8" />
          <Floating3D intensity={8} duration={6.5}>
            <TiltCard maxTilt={7} scale={1.01}>
              <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-card/80 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                <div className="flex items-center gap-1.5 border-b border-border bg-secondary/70 px-3 py-2.5 sm:px-4 sm:py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
                  <span className="ms-3 text-xs text-muted-foreground">dashboard.barq</span>
                </div>
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/projects/crm-system.jpg"
                    alt="BARQ STUDIO product dashboard preview"
                    fill
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/35 via-transparent to-primary/10" />
                </div>
              </div>
              <Parallax offset={10} className="absolute -bottom-5 end-3 w-[30%] sm:-bottom-6 sm:end-4 sm:w-[34%]">
                <div className="overflow-hidden rounded-[1.1rem] border border-primary/30 bg-card shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:rounded-[1.35rem]">
                  <div className="relative aspect-[9/16]">
                    <Image
                      src="/projects/healthcare-management.jpg"
                      alt="BARQ STUDIO mobile app preview"
                      fill
                      sizes="(max-width: 1024px) 28vw, 180px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Parallax>
            </TiltCard>
          </Floating3D>
        </motion.div>
      </motion.div>
    </section>
  );
}
