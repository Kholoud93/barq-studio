"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { TiltCard } from "@/components/shared/tilt-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DevelopmentProcess } from "@/components/home/development-process";
import { ContactCTA } from "@/components/home/contact-cta";
import { useApp } from "@/providers/app-provider";
import { getServiceById } from "@/data/services";

const serviceKeys = ["frontend", "backend", "mobile", "design"] as const;
const imageMap = {
  frontend: "/services/web.jpg",
  backend: "/services/backend.jpg",
  mobile: "/services/mobile.jpg",
  design: "/services/design.jpg",
};
const techMap = {
  frontend: ["React", "Next.js", "Vue", "Nuxt", "TypeScript"],
  backend: ["APIs", "Authentication", "Databases", "Admin Systems", "CRM Systems"],
  mobile: ["React Native", "Expo", "Android", "iOS"],
  design: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
};

export function ServicesContent() {
  const { t } = useApp();

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-32">
        <Image
          src="/scenes/section-rocky-glow.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/70 to-background" />
        <div className="neon-project-glow absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
              {t.services.badge}
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <GradientText as="span">{t.services.pageTitle}</GradientText>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              {t.services.pageDescription}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {serviceKeys.map((key, index) => {
          const item = t.services.items[key];
          const isEven = index % 2 === 0;
          return (
            <AnimatedSection key={key} id={key} className="py-16 sm:py-20">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={isEven ? "" : "lg:order-2"}>
                  <div className="[perspective:1200px]">
                    <TiltCard className="rounded-[1.75rem]" maxTilt={8}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-primary/20 neon-rim">
                        <Image
                          src={imageMap[key]}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                        <div className="neon-project-glow absolute inset-0" />
                      </div>
                    </TiltCard>
                  </div>
                </div>
                <div className={`rtl:text-right ${isEven ? "" : "lg:order-1"}`}>
                  <span className="text-xs font-semibold tracking-[0.22em] text-primary">
                    0{index + 1}
                  </span>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{item.title}</h2>
                  <p className="mt-3 text-sm font-medium text-primary">{item.outcome}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {techMap[key].map((tech) => (
                      <Badge key={tech} className="border-primary/20 bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="mt-8 space-y-3">
                    {item.features.slice(0, 4).map((feature) => (
                      <AnimatedItem key={feature}>
                        <li className="flex items-start gap-3 rtl:flex-row-reverse">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      </AnimatedItem>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3 rtl:flex-row-reverse">
                    <Button asChild>
                      <Link
                        href={`/services/${getServiceById(key)?.slug ?? key}`}
                        className="rtl:flex-row-reverse"
                      >
                        {t.services.explore}
                        <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contact">{t.services.discuss}</Link>
                    </Button>
                  </div>
                </div>
              </div>
              {index < serviceKeys.length - 1 && (
                <div className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
              )}
            </AnimatedSection>
          );
        })}
      </div>

      <DevelopmentProcess />
      <ContactCTA />
    </>
  );
}
