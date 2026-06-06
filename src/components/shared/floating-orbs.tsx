"use client";

import { motion } from "framer-motion";

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -20, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]"
      />
    </div>
  );
}
