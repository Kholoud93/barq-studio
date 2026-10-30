"use client";

import { Focus, HeartHandshake, MessagesSquare, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { TiltCard } from "@/components/shared/tilt-card";
import { useApp } from "@/providers/app-provider";

const icons = [HeartHandshake, ShieldCheck, MessagesSquare, Focus];

export function Statistics() {
  const { t } = useApp();

  return (
    <AnimatedSection variant="fadeScale" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(184,243,75,0.05),transparent_70%)] dark:block" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.trust.badge}
          title={t.trust.title}
          description={t.trust.description}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.trust.items.map((item, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard maxTilt={10} scale={1.02}>
                  <div className="h-full rounded-2xl border border-primary/15 bg-card/55 p-6 backdrop-blur-md transition-all duration-500 hover:border-primary/35 hover:shadow-[0_0_28px_rgba(184,243,75,0.1)] active:border-primary/35 active:shadow-[0_0_28px_rgba(184,243,75,0.1)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
