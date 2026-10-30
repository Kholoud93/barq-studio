"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { earlyViewport, easeOutExpo } from "@/lib/motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={earlyViewport}
      transition={{ duration: 0.65, ease: easeOutExpo }}
      className={cn(
        "mb-12 max-w-3xl rtl:text-right",
        align === "center" && "mx-auto text-center rtl:text-center",
        className
      )}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={earlyViewport}
          transition={{ delay: 0.08, duration: 0.4, ease: easeOutExpo }}
          className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary"
        >
          {badge}
        </motion.span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={earlyViewport}
          transition={{ delay: 0.12, duration: 0.5, ease: easeOutExpo }}
          className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
