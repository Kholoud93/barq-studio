"use client";

import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Separator } from "@/components/ui/separator";
import { useApp } from "@/providers/app-provider";
import { getWhatsAppUrl, siteConfig } from "@/lib/metadata";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  const { t } = useApp();

  const footerLinks = {
    company: [
      { href: "/about", label: t.footer.aboutUs },
      { href: "/services", label: t.nav.services },
      { href: "/portfolio", label: t.nav.projects },
      { href: "/blog", label: t.footer.insights },
      { href: "/contact", label: t.nav.contact },
    ],
    services: [
      { href: "/services/web-development", label: t.footer.web },
      { href: "/services/mobile-app-development", label: t.footer.mobile },
      { href: "/services/ecommerce-development", label: t.footer.ecommerce },
      { href: "/services/crm-development", label: t.footer.crm },
      { href: "/services/ui-ux-design", label: t.footer.design },
      { href: "/services/ai-automation", label: t.footer.ai },
    ],
    legal: [
      { href: "/privacy", label: t.footer.privacy },
      { href: "/terms", label: t.footer.terms },
    ],
  };

  return (
    <footer className="border-t border-primary/10 bg-secondary/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t.footer.description}
            </p>
            <p className="mt-3 text-sm text-primary">{t.footer.signature}</p>
            <div className="mt-6 flex gap-3 rtl:flex-row-reverse">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer me"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-[#1877F2]/50 hover:text-[#1877F2]"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-[#25D366]/50 hover:text-[#25D366]"
                aria-label={t.contact.whatsapp}
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.company}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2 rtl:flex-row-reverse">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="min-w-0 break-all hover:text-primary">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 rtl:flex-row-reverse">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="min-w-0 break-words hover:text-primary">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 rtl:flex-row-reverse">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 break-words hover:text-primary"
                >
                  {t.contact.whatsapp}: {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 rtl:flex-row-reverse">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="min-w-0 break-words">{siteConfig.address}</span>
              </li>
            </ul>
            <ul className="mt-6 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row rtl:sm:flex-row-reverse">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
          </p>
          <p>{t.footer.crafted}</p>
        </div>
      </div>
    </footer>
  );
}
