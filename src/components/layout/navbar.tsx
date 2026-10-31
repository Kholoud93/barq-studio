"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Monitor,
  Smartphone,
  ShoppingBag,
  LayoutDashboard,
  Palette,
  Bot,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LocaleToggle } from "@/components/layout/locale-toggle";
import { useApp } from "@/providers/app-provider";
import { cn } from "@/lib/utils";

const servicePreview = [
  { key: "web" as const, icon: Monitor, href: "/services/web-development" },
  { key: "mobile" as const, icon: Smartphone, href: "/services/mobile-app-development" },
  { key: "ecommerce" as const, icon: ShoppingBag, href: "/services/ecommerce-development" },
  { key: "crm" as const, icon: LayoutDashboard, href: "/services/crm-development" },
  { key: "uiux" as const, icon: Palette, href: "/services/ui-ux-design" },
  { key: "ai" as const, icon: Bot, href: "/services/ai-automation" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuPath, setMenuPath] = useState("");
  const pathname = usePathname();
  const { t } = useApp();

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services, mega: true },
    { href: "/portfolio", label: t.nav.projects },
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 20);
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "glass-strong border-primary/15 shadow-lg shadow-black/20"
          : "border-transparent bg-transparent"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-500 sm:px-6 lg:px-8",
          scrolled ? "h-14" : "h-16"
        )}
      >
        <Logo size="sm" className={cn("transition-transform duration-500", scrolled && "scale-95")} />

        <div className="hidden items-center gap-1 lg:flex">
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
                    "relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                    pathname.startsWith(link.href) ? "text-primary" : "text-muted-foreground"
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
                      className="absolute top-full left-1/2 z-50 w-[min(540px,calc(100vw-2rem))] -translate-x-1/2 pt-3 rtl:left-auto rtl:right-1/2 rtl:translate-x-1/2"
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
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                  <Icon className="h-4 w-4" />
                                </div>
                                <div className="min-w-0 rtl:text-right">
                                  <p className="text-sm font-medium text-foreground">{service.title}</p>
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
                  "relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
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

        <div className="hidden items-center gap-2 lg:flex">
          <LocaleToggle />
          <ThemeToggle />
          <Button asChild size={scrolled ? "sm" : "default"}>
            <Link href="/contact" className="rtl:flex-row-reverse">
              {t.nav.startProject}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LocaleToggle />
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
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
            className="glass-strong border-t border-border lg:hidden"
          >
            <div className="flex max-h-[80vh] flex-col gap-1 overflow-y-auto px-4 py-4">
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
