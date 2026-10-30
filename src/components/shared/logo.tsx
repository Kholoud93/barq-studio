import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { image: 32, text: "text-lg" },
  md: { image: 40, text: "text-xl" },
  lg: { image: 56, text: "text-2xl" },
};

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const { image, text } = sizes[size];

  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      <Image
        src="/logo.svg"
        alt="Barq Studio"
        width={image}
        height={image}
        className="rounded-full transition-transform duration-300 group-hover:scale-105"
        priority
      />
      {showText && (
        <div className="flex flex-col">
          <span className={cn("font-bold tracking-tight leading-none", text)}>
            <span className="text-foreground">BARQ </span>
            <span className="gradient-text">STUDIO</span>
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Software Agency
          </span>
        </div>
      )}
    </Link>
  );
}
