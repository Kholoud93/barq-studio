"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { technologies, technologyCategories } from "@/data/technologies";
import { useApp } from "@/providers/app-provider";

export function Technologies() {
  const { t } = useApp();

  return (
    <AnimatedSection className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.tech.badge}
          title={t.tech.title}
          description={t.tech.description}
        />
        <div className="mt-12 space-y-8">
          {technologyCategories.map((category) => {
            const items = technologies.filter((tech) => tech.category === category);
            return (
              <div key={category}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                  {t.tech.categories[category]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((tech) => (
                    <span
                      key={tech.name}
                      className="rounded-xl border border-border bg-card/70 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/30"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
