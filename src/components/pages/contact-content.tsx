"use client";

import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { ContactForm } from "@/components/shared/contact-form";
import { useApp } from "@/providers/app-provider";
import { getWhatsAppUrl, siteConfig } from "@/lib/metadata";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

export function ContactContent() {
  const { t } = useApp();

  const contactInfo = [
    { icon: Mail, label: t.contact.email, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: t.contact.phone, value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      value: siteConfig.phone,
      href: getWhatsAppUrl(),
      external: true,
    },
    {
      icon: FacebookIcon,
      label: t.contact.facebook,
      value: "Barq Studio",
      href: siteConfig.social.facebook,
      external: true,
    },
    { icon: MapPin, label: t.contact.location, value: siteConfig.address },
    { icon: Clock, label: t.contact.hours, value: t.contact.hoursValue },
  ];

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="hero-glow absolute inset-0" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">{t.contact.badge}</span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t.contact.title}{" "}
              <GradientText as="span">{t.contact.titleHighlight}</GradientText>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.contact.description}</p>
          </div>
        </div>
      </section>

      <AnimatedSection className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold">{t.contact.getInTouch}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{t.contact.getInTouchDesc}</p>
              </div>
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-5 rtl:flex-row-reverse">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.label}</p>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          target={"external" in item && item.external ? "_blank" : undefined}
                          rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
                          className="mt-1 break-words text-sm font-medium text-foreground transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 break-words text-sm font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                <p className="text-sm text-primary">{siteConfig.tagline}</p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card/50 p-5 sm:p-8 lg:p-10">
                <h2 className="mb-6 text-xl font-semibold">{t.contact.sendMessage}</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
