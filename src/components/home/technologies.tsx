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
    <AnimatedSection className="py-24 sm:py-32 overflow-hidden bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.tech.badge}
          title={t.tech.title}
          description={t.tech.description}
        />
      </div>
      <div className="relative mt-8">
        <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 w-max"
        >
          {doubled.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex shrink-0 items-center gap-3 rounded-xl border border-border bg-card/80 px-6 py-4 rtl:flex-row-reverse"
            >
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{tech.name}</span>
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
