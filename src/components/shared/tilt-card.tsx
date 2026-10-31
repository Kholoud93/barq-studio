"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
  scale?: number;
}

export function TiltCard({
  children,
  className,
  maxTilt = 14,
  glare = true,
  scale = 1.03,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const frameRef = useRef(0);
  const [active, setActive] = useState(false);
  const reduceMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 260, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);
  const glareX = useSpring(useTransform(rawX, [-0.5, 0.5], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(rawY, [-0.5, 0.5], [0, 100]), springConfig);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(184,243,75,0.28), transparent 55%)`;

  function cacheRect() {
    const el = ref.current;
    if (!el) return;
    rectRef.current = el.getBoundingClientRect();
  }

  function updateFromPoint(clientX: number, clientY: number) {
    if (reduceMotion) return;
    const rect = rectRef.current;
    if (!rect || rect.width === 0 || rect.height === 0) return;
    const px = (clientX - rect.left) / rect.width - 0.5;
    const py = (clientY - rect.top) / rect.height - 0.5;
    rawX.set(px);
    rawY.set(py);
  }

  function onMove(e: React.MouseEvent) {
    if (reduceMotion) return;
    if (frameRef.current) return;
    const { clientX, clientY } = e;
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = 0;
      updateFromPoint(clientX, clientY);
    });
  }

  function reset() {
    setActive(false);
    rawX.set(0);
    rawY.set(0);
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => {
        setActive(true);
        cacheRect();
      }}
      onMouseLeave={reset}
      onTouchStart={() => setActive(true)}
      onTouchEnd={reset}
      onTouchCancel={reset}
      style={
        reduceMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              transformPerspective: 1100,
            }
      }
      whileTap={reduceMotion ? undefined : { scale }}
      animate={active && !reduceMotion ? { scale } : { scale: 1 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative h-full will-change-transform", className)}
    >
      <div
        style={
          reduceMotion
            ? undefined
            : { transform: "translateZ(28px)", transformStyle: "preserve-3d" }
        }
        className="h-full"
      >
        {children}
      </div>
      {glare && !reduceMotion && (
        <motion.div
          aria-hidden
          style={{ background: glareBg, opacity: active ? 1 : 0.35 }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        />
      )}
    </motion.div>
  );
}
