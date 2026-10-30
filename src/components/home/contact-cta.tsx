"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { Magnetic } from "@/components/shared/magnetic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useApp } from "@/providers/app-provider";
import { buildQuickLeadMessage, openWhatsApp } from "@/lib/whatsapp";

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
    <AnimatedSection>
      <div className="relative overflow-hidden border-y border-primary/10">
        <Image
          src="/scenes/cta-astronaut-portal.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-background/40 to-background/25 dark:from-background/70 dark:via-background/50 dark:to-background/35" />
        <div className="neon-project-glow absolute inset-0 opacity-40" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <div className="rtl:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.cta.title}{" "}
              <GradientText as="span">{t.cta.titleHighlight}</GradientText>?
            </h2>
            <p className="mt-4 max-w-lg text-base text-white/75 sm:text-lg">
              {t.cta.description}
            </p>
            <div className="mt-8">
              <Magnetic>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/25 bg-black/30 text-white backdrop-blur-md hover:bg-black/45 hover:text-white"
                >
                  <Link href="/portfolio" className="rtl:flex-row-reverse">
                    {t.cta.portfolio}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-black/45 p-6 shadow-[0_0_48px_rgba(182,255,53,0.12)] backdrop-blur-xl sm:p-8">
            {sent ? (
              <div className="flex h-full min-h-[220px] flex-col items-center justify-center text-center">
                <CheckCircle className="mb-4 h-10 w-10 text-primary" />
                <p className="text-lg font-medium text-white">{t.cta.success}</p>
                <Button
                  variant="outline"
                  className="mt-6 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
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
                  className="border-white/15 bg-black/35 text-white placeholder:text-white/45"
                />
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder={t.cta.emailPlaceholder}
                  className="border-white/15 bg-black/35 text-white placeholder:text-white/45"
                />
                <Textarea
                  name="message"
                  required
                  rows={3}
                  placeholder={t.cta.messagePlaceholder}
                  className="border-white/15 bg-black/35 text-white placeholder:text-white/45"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full shadow-[0_0_28px_rgba(182,255,53,0.3)] rtl:flex-row-reverse"
                  disabled={loading}
                >
                  {loading ? t.cta.sending : t.cta.quickSend}
                  {!loading && <ArrowRight className="h-4 w-4 rtl:rotate-180" />}
                </Button>
                <p className="text-center text-xs text-white/55">
                  <Link href="/contact" className="underline-offset-4 hover:underline">
                    {t.cta.contact}
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
