"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { useApp } from "@/providers/app-provider";

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const target = parseInt(value, 10);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (2000 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl font-bold text-foreground sm:text-5xl">
      {count}{suffix}
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
    <AnimatedSection className="py-24 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card/80 p-8 sm:p-12 glow-blue">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
