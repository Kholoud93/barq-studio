"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const particles = [
  { left: "8%", top: "18%", size: 2, delay: "0s", duration: "7s" },
  { left: "18%", top: "72%", size: 3, delay: "1.2s", duration: "9s" },
  { left: "28%", top: "36%", size: 2, delay: "0.4s", duration: "8s" },
  { left: "42%", top: "14%", size: 2, delay: "2s", duration: "10s" },
  { left: "55%", top: "58%", size: 3, delay: "0.8s", duration: "7.5s" },
  { left: "67%", top: "28%", size: 2, delay: "1.6s", duration: "9.5s" },
  { left: "78%", top: "66%", size: 2, delay: "0.2s", duration: "8.5s" },
  { left: "88%", top: "22%", size: 3, delay: "2.4s", duration: "11s" },
  { left: "12%", top: "48%", size: 2, delay: "3s", duration: "8s" },
  { left: "73%", top: "82%", size: 2, delay: "1s", duration: "9s" },
  { left: "36%", top: "88%", size: 3, delay: "2.8s", duration: "10s" },
  { left: "92%", top: "44%", size: 2, delay: "0.6s", duration: "7.2s" },
];

export function EnergyParticles({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {particles.map((particle) => (
        <span
          key={`${particle.left}-${particle.top}`}
          className="energy-particle absolute rounded-full bg-primary"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            boxShadow: "0 0 10px rgba(184,243,75,0.8)",
          }}
        />
      ))}
      <div className="lightning-pulse absolute left-1/2 top-[28%] h-40 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary to-transparent opacity-40" />
    </div>
  );
}
