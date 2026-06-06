"use client";

import { useApp } from "@/providers/app-provider";
import { cn } from "@/lib/utils";

export function LocaleToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useApp();

  return (
    <div
      className={cn(
        "flex items-center rounded-lg border border-border p-0.5",
        className
      )}
    >
      <button
        onClick={() => setLocale("en")}
        className={cn(
          "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
          locale === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {t.common.langEn}
      </button>
      <button
        onClick={() => setLocale("ar")}
        className={cn(
          "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
          locale === "ar"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {t.common.langAr}
      </button>
    </div>
  );
}
