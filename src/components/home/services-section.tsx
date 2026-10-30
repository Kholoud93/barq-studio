"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-container";
import { SectionHeader } from "@/components/shared/section-header";
import { TiltCard } from "@/components/shared/tilt-card";
import { Button } from "@/components/ui/button";
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
  backend: ["APIs", "Auth", "Databases", "Admin", "CRM"],
  mobile: ["React Native", "Expo", "Android", "iOS"],
  design: ["Research", "Wireframing", "Prototyping", "Design Systems"],
};

export function ServicesSection() {
  const { t } = useApp();

  return (
    <AnimatedSection className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/scenes/section-rocky-glow.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.services.badge}
          title={t.services.title}
          description={t.services.description}
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2">
          {serviceKeys.map((key, index) => {
            const item = t.services.items[key];
            return (
              <StaggerItem key={key} className="[perspective:1200px]">
                <TiltCard className="h-full rounded-2xl" maxTilt={9}>
                  <Link
                    href={`/services/${getServiceById(key)?.slug ?? key}`}
                    className="group relative flex h-full min-h-[240px] overflow-hidden rounded-2xl border border-primary/15 bg-card/70 shadow-[0_0_40px_rgba(184,243,75,0.06)] transition-shadow duration-500 hover:border-primary/35 hover:shadow-[0_0_48px_rgba(184,243,75,0.18)]"
                  >
                    <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-8 rtl:text-right">
                      <span className="text-xs font-semibold tracking-[0.2em] text-primary">
                        0{index + 1}
                      </span>
                      <h3 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <p className="mt-4 text-sm font-medium text-primary">{item.outcome}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {techMap[key].slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-primary/15 bg-black/25 px-2.5 py-1 text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="mt-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground rtl:mr-auto">
                        <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                      </span>
                    </div>
                    <div className="relative hidden w-[42%] shrink-0 sm:block">
                      <Image
                        src={imageMap[key]}
                        alt=""
                        fill
                        sizes="240px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="neon-project-glow absolute inset-0" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-card/80 rtl:bg-gradient-to-r" />
                    </div>
                  </Link>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services" className="rtl:flex-row-reverse">
              {t.services.explore}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
