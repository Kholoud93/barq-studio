"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/shared/gradient-text";
import { FloatingOrbs } from "@/components/shared/floating-orbs";
import { CursorSpotlight } from "@/components/shared/cursor-spotlight";
import { Magnetic } from "@/components/shared/magnetic";
import { HeroMock } from "@/components/home/hero-mock";
import { useApp } from "@/providers/app-provider";

export function HeroSection() {
  const { t } = useApp();

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-background/20 dark:bg-background/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
      <div className="hero-glow absolute inset-0" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <FloatingOrbs />
      <CursorSpotlight />

      <div className="relative z-[2] mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="hero-brand font-bold"
          >
            <span className="text-foreground">BARQ </span>
            <GradientText as="span">STUDIO</GradientText>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.45 }}
            className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl"
          >
            <span className="block">{t.hero.line1}</span>
            <span className="block text-muted-foreground">{t.hero.line2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.55 }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.65 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row rtl:sm:flex-row-reverse"
          >
            <Magnetic>
              <Button asChild size="lg">
                <Link href="/contact" className="rtl:flex-row-reverse">
                  {t.hero.cta1}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
              </Button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">{t.hero.cta2}</Link>
              </Button>
            </Magnetic>
          </motion.div>
        </div>

        <HeroMock />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
        >
          <span>{t.hero.trust1}</span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span>{t.hero.trust2}</span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span>{t.hero.trust3}</span>
        </motion.div>
      </div>
    </section>
  );
}
