"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { useApp } from "@/providers/app-provider";

export function Testimonials() {
  const { t } = useApp();
  const items = t.testimonials.items;
  const loop = [...items, ...items];

  return (
    <AnimatedSection className="overflow-x-hidden bg-card/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.testimonials.badge}
          title={t.testimonials.title}
          description={t.testimonials.description}
        />
      </div>
      <div dir="ltr" className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--background)] to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--background)] to-transparent sm:w-32" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-6 px-4"
        >
          {loop.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              dir="auto"
              className="w-[350px] shrink-0 rounded-xl border border-border bg-card/80 p-6 sm:w-[400px]"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                {testimonial.content}
              </p>
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
