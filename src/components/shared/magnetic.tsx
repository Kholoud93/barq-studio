"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const frameRef = useRef(0);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 20 });
  const springY = useSpring(y, { stiffness: 280, damping: 20 });

  function cacheRect() {
    const el = ref.current;
    if (!el) return;
    rectRef.current = el.getBoundingClientRect();
  }

  function onMove(e: React.MouseEvent) {
    if (reduceMotion) return;
    if (frameRef.current) return;
    const { clientX, clientY } = e;
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = 0;
      const rect = rectRef.current;
      if (!rect) return;
      const dx = clientX - (rect.left + rect.width / 2);
      const dy = clientY - (rect.top + rect.height / 2);
      x.set(dx * strength);
      y.set(dy * strength);
    });
  }

  function onLeave() {
    x.set(0);
    y.set(0);
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    }
  }

  if (reduceMotion) {
    return <div className={cn("inline-flex", className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseEnter={cacheRect}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.div>
  );
}
