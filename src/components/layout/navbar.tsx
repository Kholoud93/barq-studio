"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Monitor, Server, Smartphone, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LocaleToggle } from "@/components/layout/locale-toggle";
import { useApp } from "@/providers/app-provider";
import { cn } from "@/lib/utils";

const servicePreview = [
  { key: "frontend" as const, icon: Monitor, href: "/services#frontend" },
  { key: "backend" as const, icon: Server, href: "/services#backend" },
  { key: "mobile" as const, icon: Smartphone, href: "/services#mobile" },
  { key: "design" as const, icon: Palette, href: "/services#design" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useApp();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services, mega: true },
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
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass-strong shadow-lg shadow-black/10 dark:shadow-black/20" : "bg-transparent"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-500 sm:px-6 lg:px-8",
          scrolled ? "h-14" : "h-16"
        )}
      >
        <Logo size="sm" className={cn("transition-transform duration-500", scrolled && "scale-95")} />

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.mega ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                    pathname.startsWith(link.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  {pathname.startsWith(link.href) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary"
                    />
                  )}
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 z-50 w-[420px] -translate-x-1/2 pt-3 rtl:left-auto rtl:right-1/2 rtl:translate-x-1/2"
                    >
                      <div className="glass-strong rounded-2xl border border-border p-3 shadow-xl shadow-black/10">
                        <div className="grid grid-cols-2 gap-2">
                          {servicePreview.map((item) => {
                            const Icon = item.icon;
                            const service = t.services.items[item.key];
                            return (
                              <Link
                                key={item.key}
                                href={item.href}
                                className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-secondary rtl:flex-row-reverse"
                              >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                  <Icon className="h-4 w-4" />
                                </div>
                                <div className="min-w-0 rtl:text-right">
                                  <p className="text-sm font-medium text-foreground">
                                    {service.title}
                                  </p>
                                  <p className="mt-0.5 truncate text-xs text-muted-foreground">
                                    {service.outcome}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
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
            )
          )}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <div
            className={cn(
              "flex items-center gap-2 transition-all duration-300",
              scrolled ? "opacity-70 scale-95" : "opacity-100"
            )}
          >
            <LocaleToggle />
            <ThemeToggle />
          </div>
          <Button asChild size={scrolled ? "sm" : "default"}>
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
                    pathname === link.href || (link.mega && pathname.startsWith(link.href))
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
