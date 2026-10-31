"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/shared/logo";
import { useApp } from "@/providers/app-provider";

const SESSION_KEY = "barq-intro-seen";

export function LoadingScreen() {
  const { t } = useApp();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {}
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 320);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center">
            <div className="glow-blue rounded-full">
              <Logo showText={false} size="lg" className="pointer-events-none" priority />
            </div>
            <p className="mt-6 text-xl font-bold tracking-tight">
              <span className="text-foreground">BARQ </span>
              <span className="gradient-text">STUDIO</span>
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {t.common.loading}
            </p>
          </div>
          <div className="mt-8 h-0.5 w-[120px] rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
