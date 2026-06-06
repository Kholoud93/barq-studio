"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/shared/gradient-text";
import { FloatingOrbs } from "@/components/shared/floating-orbs";
import { useApp } from "@/providers/app-provider";
import { siteConfig } from "@/lib/metadata";

export function HeroSection() {
  const { t } = useApp();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="hero-glow absolute inset-0" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <FloatingOrbs />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary rtl:flex-row-reverse">
              <Sparkles className="h-3.5 w-3.5" />
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.3 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {[t.hero.line1, t.hero.line2, t.hero.line3].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.3 + i * 0.15 }}
                className="block"
              >
                {i === 1 ? (
                  <GradientText as="span">{line}</GradientText>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.hero.description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="mt-4 text-sm text-primary"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row rtl:sm:flex-row-reverse"
          >
            <Button asChild size="lg">
              <Link href="/contact" className="rtl:flex-row-reverse">
                {t.hero.cta1}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">{t.hero.cta2}</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
          >
            <span>{t.hero.trust1}</span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span>{t.hero.trust2}</span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span>{t.hero.trust3}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
