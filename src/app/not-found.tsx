"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useApp } from "@/providers/app-provider";

export default function NotFound() {
  const { t } = useApp();

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold gradient-text">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">{t.notFound.title}</h2>
      <p className="mt-2 max-w-md text-muted-foreground">{t.notFound.description}</p>
      <Button asChild className="mt-8">
        <Link href="/">{t.notFound.back}</Link>
      </Button>
    </div>
  );
}
