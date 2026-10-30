"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { Magnetic } from "@/components/shared/magnetic";
import { EnergyParticles } from "@/components/shared/energy-particles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useApp } from "@/providers/app-provider";
import { buildQuickLeadMessage, openWhatsApp } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/metadata";

export function ContactCTA() {
  const { t, locale } = useApp();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) return;

    setLoading(true);
    openWhatsApp(
      buildQuickLeadMessage({
        name,
        email,
        message,
        locale,
      })
    );
    setLoading(false);
    setSent(true);
    form.reset();
  }

  return (
    <AnimatedSection variant="blur">
      <div className="relative min-h-[70vh] overflow-hidden border-y border-border dark:border-primary/10">
        <Image
          src="/scenes/cta-astronaut-portal.jpg"
          alt=""
          fill
          sizes="100vw"
          className="hidden object-cover object-center scale-105 dark:block"
        />
        <div className="absolute inset-0 bg-secondary dark:bg-gradient-to-r dark:from-background/90 dark:via-background/60 dark:to-background/30" />
        <div className="neon-project-glow absolute inset-0 hidden opacity-40 dark:block" />
        <EnergyParticles className="hidden dark:block" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center rtl:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t.cta.title}{" "}
              <GradientText as="span">{t.cta.titleHighlight}</GradientText>
            </h2>
            <p className="mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
              {t.cta.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row rtl:sm:flex-row-reverse">
              <Magnetic>
                <Button asChild size="lg" className="shadow-[0_0_28px_rgba(184,243,75,0.3)]">
                  <Link href="/contact" className="rtl:flex-row-reverse">
                    {t.cta.contact}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/25 bg-secondary/40 backdrop-blur-md"
                >
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rtl:flex-row-reverse"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t.cta.portfolio}
                  </a>
                </Button>
              </Magnetic>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-card/55 p-6 shadow-[0_0_48px_rgba(184,243,75,0.12)] backdrop-blur-xl sm:p-8">
            {sent ? (
              <div className="flex h-full min-h-[220px] flex-col items-center justify-center text-center">
                <CheckCircle className="mb-4 h-10 w-10 text-primary" />
                <p className="text-lg font-medium text-foreground">{t.cta.success}</p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSent(false)}
                >
                  {t.contact.form.sendAnother}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  required
                  placeholder={t.cta.namePlaceholder}
                  className="border-border bg-secondary/50"
                />
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder={t.cta.emailPlaceholder}
                  className="border-border bg-secondary/50"
                />
                <Textarea
                  name="message"
                  required
                  rows={3}
                  placeholder={t.cta.messagePlaceholder}
                  className="border-border bg-secondary/50"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full shadow-[0_0_28px_rgba(184,243,75,0.28)] rtl:flex-row-reverse"
                  disabled={loading}
                >
                  {loading ? t.cta.sending : t.cta.quickSend}
                  {!loading && <ArrowRight className="h-4 w-4 rtl:rotate-180" />}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
