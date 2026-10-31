"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    let cancelled = false;
    const enable = () => {
      if (!cancelled) setReady(true);
    };

    const idle = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (typeof idle.requestIdleCallback === "function") {
      const id = idle.requestIdleCallback(enable, { timeout: 1200 });
      return () => {
        cancelled = true;
        idle.cancelIdleCallback?.(id);
      };
    }

    const timer = window.setTimeout(enable, 600);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  if (!ready || reduceMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_18px_rgba(184,243,75,0.55)]"
      style={{ scaleX }}
    />
  );
}
