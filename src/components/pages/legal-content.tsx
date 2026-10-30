"use client";

import { useApp } from "@/providers/app-provider";

export function LegalContent({ type }: { type: "privacy" | "terms" }) {
  const { t } = useApp();
  const content = type === "privacy" ? t.privacy : t.terms;

  return (
    <section className="pb-24 pt-28 sm:pb-32 sm:pt-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 rtl:text-right">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{content.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{content.updated}</p>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
          {content.content.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
