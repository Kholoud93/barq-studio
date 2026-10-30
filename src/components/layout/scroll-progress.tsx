"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduceMotion) {
    return (
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-primary/40" />
    );
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_18px_rgba(182,255,53,0.55)]"
      style={{ scaleX }}
    />
  );
}
