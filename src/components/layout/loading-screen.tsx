"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useApp } from "@/providers/app-provider";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const { t } = useApp();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <Image src="/logo.svg" alt="Barq Studio" width={80} height={80} className="rounded-full glow-blue" priority />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 text-center"
            >
              <h2 className="text-xl font-bold tracking-tight">
                <span className="text-foreground">BARQ </span>
                <span className="gradient-text">STUDIO</span>
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {t.common.loading}
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
            className="mt-8 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
