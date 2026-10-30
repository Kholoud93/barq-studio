"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOutExpo, mobileViewport } from "@/lib/motion";

type RevealVariant = "fadeUp" | "fadeScale" | "slideLeft" | "slideRight" | "blur";

const variantsMap: Record<RevealVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  },
  fadeScale: {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  blur: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  variant?: RevealVariant;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
  variant = "fadeUp",
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={mobileViewport}
      variants={variantsMap[variant]}
      transition={{
        duration: 0.7,
        delay,
        ease: easeOutExpo,
      }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}

export function AnimatedItem({
  children,
  className,
  delay = 0,
  variant = "fadeScale",
}: AnimatedItemProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={mobileViewport}
      variants={variantsMap[variant]}
      transition={{
        duration: 0.55,
        delay,
        ease: easeOutExpo,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
