"use client";

import { motion } from "framer-motion";

export function HeroMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-16 w-full max-w-4xl perspective-[1200px]"
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-b from-primary/20 via-accent/10 to-transparent blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/90 shadow-2xl shadow-primary/10 backdrop-blur-sm">
        <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-3 rtl:flex-row-reverse">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <div className="mx-auto h-5 w-40 rounded-md bg-muted" />
        </div>
        <div className="grid gap-4 p-4 sm:grid-cols-[180px_1fr] sm:p-5">
          <div className="hidden space-y-2 sm:block">
            {[72, 56, 64, 48, 60].map((w, i) => (
              <div
                key={i}
                className="h-8 rounded-lg bg-secondary/80"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Revenue", value: "+47%" },
                { label: "Users", value: "12.4k" },
                { label: "Uptime", value: "99.9%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-background/60 p-3"
                >
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-primary sm:text-base">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative h-28 overflow-hidden rounded-xl border border-border bg-background/50 sm:h-36">
              <svg
                viewBox="0 0 400 120"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="heroChart" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(0,112,243,0.35)" />
                    <stop offset="100%" stopColor="rgba(0,112,243,0)" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 90 C40 80, 70 40, 110 55 C150 70, 180 20, 220 35 C260 50, 300 15, 340 30 C370 40, 390 25, 400 20 L400 120 L0 120 Z"
                  fill="url(#heroChart)"
                />
                <path
                  d="M0 90 C40 80, 70 40, 110 55 C150 70, 180 20, 220 35 C260 50, 300 15, 340 30 C370 40, 390 25, 400 20"
                  fill="none"
                  stroke="#0070f3"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-16 rounded-xl border border-border bg-secondary/40" />
              <div className="h-16 rounded-xl border border-border bg-secondary/40" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
