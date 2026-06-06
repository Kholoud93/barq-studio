"use client";

import { Moon, Sun } from "lucide-react";
import { useApp } from "@/providers/app-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, t } = useApp();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary",
        className
      )}
      aria-label={theme === "dark" ? t.common.themeLight : t.common.themeDark}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
