"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
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
  const [active, setActive] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 260, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);
  const glareX = useSpring(useTransform(rawX, [-0.5, 0.5], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(rawY, [-0.5, 0.5], [0, 100]), springConfig);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(184,243,75,0.28), transparent 55%)`;

  function updateFromPoint(clientX: number, clientY: number) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (clientX - rect.left) / rect.width - 0.5;
    const py = (clientY - rect.top) / rect.height - 0.5;
    rawX.set(px);
    rawY.set(py);
  }

  function reset() {
    setActive(false);
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        setActive(true);
        updateFromPoint(e.clientX, e.clientY);
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={reset}
      onTouchStart={() => setActive(true)}
      onTouchEnd={reset}
      onTouchCancel={reset}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1100,
      }}
      whileTap={{ scale: scale }}
      animate={
        active
          ? { scale, y: 0 }
          : { scale: 1, y: [0, -6, 0] }
      }
      transition={
        active
          ? { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
          : {
              y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.28 },
            }
      }
      className={cn("relative h-full will-change-transform", className)}
    >
      <div
        style={{ transform: "translateZ(28px)", transformStyle: "preserve-3d" }}
        className="h-full"
      >
        {children}
      </div>
      {glare && (
        <motion.div
          aria-hidden
          style={{ background: glareBg, opacity: active ? 1 : 0.35 }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        />
      )}
    </motion.div>
  );
}
