import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
}

const sizes = {
  sm: { image: 36, text: "text-lg" },
  md: { image: 44, text: "text-xl" },
  lg: { image: 72, text: "text-2xl" },
};

export function Logo({
  className,
  showText = true,
  size = "md",
  priority = false,
}: LogoProps) {
  const { image, text } = sizes[size];

  return (
    <Link
      href="/"
      aria-label="BARQ STUDIO"
      className={cn("flex items-center gap-3 group", className)}
    >
      <Image
        src="/logo.jpg"
        alt="BARQ STUDIO"
        width={image}
        height={image}
        priority={priority}
        sizes={`${image}px`}
        className="rounded-xl object-cover shadow-[0_0_18px_rgba(184,243,75,0.25)] transition-transform duration-300 group-hover:scale-105"
      />
      {showText && (
        <div className="hidden min-[400px]:flex flex-col">
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
