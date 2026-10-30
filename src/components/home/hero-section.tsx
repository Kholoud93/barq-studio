"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/shared/gradient-text";
import { CursorSpotlight } from "@/components/shared/cursor-spotlight";
import { Magnetic } from "@/components/shared/magnetic";
import { useApp } from "@/providers/app-provider";

export function HeroSection() {
  const { t } = useApp();

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <Image
        src="/scenes/hero-astronaut-moon.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/25 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-transparent to-background/30" />
      <div className="neon-project-glow absolute inset-0 opacity-50" />
      <div className="hero-glow absolute inset-0" />
      <CursorSpotlight />

      <div className="relative z-[2] mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-end px-4 pb-20 pt-24 sm:px-6 sm:pb-28 lg:px-8">
        <div className="max-w-3xl rtl:text-right">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="hero-brand font-bold"
          >
            <span className="ltr:hidden">
              <span className="text-white">برق </span>
              <GradientText as="span">ستوديو</GradientText>
            </span>
            <span className="rtl:hidden">
              <span className="text-white">BARQ </span>
              <GradientText as="span">STUDIO</GradientText>
            </span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.35 }}
            className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            <span className="block">{t.hero.line1}</span>
            <span className="block">
              <GradientText as="span">{t.hero.line2}</GradientText>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row rtl:sm:flex-row-reverse"
          >
            <Magnetic>
              <Button asChild size="lg" className="shadow-[0_0_32px_rgba(184,243,75,0.35)]">
                <Link href="/contact" className="rtl:flex-row-reverse">
                  {t.hero.cta1}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
              </Button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/25 bg-black/30 text-white backdrop-blur-md hover:bg-black/45 hover:text-white"
              >
                <Link href="/portfolio">{t.hero.cta2}</Link>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/65 rtl:flex-row-reverse"
          >
            <span>{t.hero.trust1}</span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span>{t.hero.trust2}</span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span>{t.hero.trust3}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
