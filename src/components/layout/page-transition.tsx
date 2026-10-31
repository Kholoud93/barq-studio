"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

function isProjectRoute(path: string) {
  return path.startsWith("/portfolio/") && path !== "/portfolio";
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const prevPath = useRef(pathname);
  const isFirstRender = useRef(true);
  const [wipeKey, setWipeKey] = useState(0);
  const [showWipe, setShowWipe] = useState(false);
  const cinematic = isProjectRoute(pathname);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPath.current = pathname;
      return;
    }
    if (prevPath.current === pathname) return;
    const shouldWipe =
      isProjectRoute(pathname) || isProjectRoute(prevPath.current);
    prevPath.current = pathname;
    if (!shouldWipe) return;
    setWipeKey((k) => k + 1);
    setShowWipe(true);
    const timer = window.setTimeout(() => setShowWipe(false), 900);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <motion.div
        key={pathname}
        initial={
          isFirstRender.current
            ? false
            : cinematic
              ? { opacity: 0, y: 24, scale: 0.985 }
              : { opacity: 0, y: 10 }
        }
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: cinematic ? 0.7 : 0.4,
          delay: cinematic ? 0.12 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {showWipe && (
          <motion.div
            key={wipeKey}
            aria-hidden
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none fixed inset-0 z-[90]"
          >
            <div className="cinematic-wipe absolute inset-0 bg-[#0c100d]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,243,75,0.35),transparent_55%)]" />
              <div className="absolute left-1/2 top-1/2 h-px w-[min(70vw,520px)] -translate-x-1/2 -translate-y-1/2 case-study-beam" />
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 shadow-[0_0_60px_rgba(184,243,75,0.55)]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
