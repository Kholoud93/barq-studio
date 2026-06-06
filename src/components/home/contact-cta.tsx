"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { Button } from "@/components/ui/button";
import { useApp } from "@/providers/app-provider";

export function ContactCTA() {
  const { t } = useApp();

  return (
    <AnimatedSection className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 sm:p-16 text-center glow-blue">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {t.cta.title}{" "}
              <GradientText as="span">{t.cta.titleHighlight}</GradientText>?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {t.cta.description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row rtl:sm:flex-row-reverse">
              <Button asChild size="lg">
                <Link href="/contact" className="rtl:flex-row-reverse">
                  {t.cta.contact}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">{t.cta.portfolio}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
