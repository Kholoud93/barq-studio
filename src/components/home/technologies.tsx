"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { technologies } from "@/data/technologies";
import { useApp } from "@/providers/app-provider";
import { motion } from "framer-motion";

export function Technologies() {
  const { t } = useApp();
  const doubled = [...technologies, ...technologies];

  return (
    <AnimatedSection className="overflow-x-hidden bg-card/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.tech.badge}
          title={t.tech.title}
          description={t.tech.description}
        />
      </div>
      <div dir="ltr" className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--background)] to-transparent" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-4"
        >
          {doubled.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex shrink-0 items-center gap-3 rounded-xl border border-border bg-card/80 px-6 py-4"
            >
              <span className="whitespace-nowrap text-sm font-medium text-foreground">
                {tech.name}
              </span>
              <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-primary">
                {tech.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
