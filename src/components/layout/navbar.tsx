"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LocaleToggle } from "@/components/layout/locale-toggle";
import { useApp } from "@/providers/app-provider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useApp();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass-strong shadow-lg shadow-black/10 dark:shadow-black/20" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo size="sm" />

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <LocaleToggle />
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">{t.nav.startProject}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LocaleToggle />
          <ThemeToggle />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link href="/contact">{t.nav.startProject}</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
