"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { useApp } from "@/providers/app-provider";

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);
  const target = parseInt(value, 10);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1600;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
      {count}
      {suffix}
    </span>
  );
}

export function Statistics() {
  const { t } = useApp();
  const stats = [
    { value: "80", suffix: "+", label: t.stats.projects },
    { value: "50", suffix: "+", label: t.stats.clients },
    { value: "98", suffix: "%", label: t.stats.satisfaction },
    { value: "6", suffix: "+", label: t.stats.years },
  ];

  return (
    <AnimatedSection className="bg-card/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-y border-border py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:py-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
