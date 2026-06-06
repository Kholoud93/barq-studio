"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { testimonials } from "@/data/testimonials";
import { useApp } from "@/providers/app-provider";

export function Testimonials() {
  const { t } = useApp();

  return (
    <AnimatedSection className="py-24 sm:py-32 bg-card/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.testimonials.badge}
          title={t.testimonials.title}
          description={t.testimonials.description}
        />
      </div>
      <div className="relative mt-8">
        <div className="absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 w-max px-4"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="w-[350px] shrink-0 rounded-xl border border-border bg-card/80 p-6 sm:w-[400px]"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <p className="text-sm leading-relaxed text-muted-foreground">{testimonial.content}</p>
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
