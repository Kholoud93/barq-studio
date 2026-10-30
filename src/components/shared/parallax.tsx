"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
  scale?: number;
}

export function Parallax({
  children,
  className,
  offset = 80,
  scale = 1,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const scaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [scale, 1, scale]);
  const y = useSpring(yRaw, { stiffness: 90, damping: 28 });
  const animatedScale = useSpring(scaleRaw, { stiffness: 90, damping: 28 });

  return (
    <motion.div
      ref={ref}
      style={{ y, scale: animatedScale }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

interface Floating3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  duration?: number;
}

export function Floating3D({
  children,
  className,
  intensity = 12,
  duration = 5,
}: Floating3DProps) {
  return (
    <motion.div
      className={cn("will-change-transform", className)}
      style={{ transformStyle: "preserve-3d", perspective: 1200 }}
      animate={{
        y: [0, -intensity, 0],
        rotateX: [0, 2.5, 0],
        rotateY: [0, -3, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
