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

function LogoMark({ size }: { size: number }) {
  const id = `logo-${size}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      width={size}
      height={size}
      className="rounded-full transition-transform duration-300 group-hover:scale-105"
      aria-hidden
    >
      <defs>
        <linearGradient id={`${id}-bolt`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4FF7A" />
          <stop offset="45%" stopColor="#B8F34B" />
          <stop offset="100%" stopColor="#9ADF2F" />
        </linearGradient>
        <radialGradient id={`${id}-bg`} cx="50%" cy="42%" r="58%">
          <stop offset="0%" stopColor="#202621" />
          <stop offset="100%" stopColor="#101311" />
        </radialGradient>
        <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#B8F34B" floodOpacity="0.28" />
        </filter>
      </defs>
      <circle cx="200" cy="200" r="190" fill={`url(#${id}-bg)`} />
      <circle
        cx="200"
        cy="200"
        r="190"
        fill="none"
        stroke={`url(#${id}-bolt)`}
        strokeWidth="2.5"
        opacity="0.85"
      />
      <circle
        cx="200"
        cy="200"
        r="186"
        fill="none"
        stroke={`url(#${id}-bolt)`}
        strokeWidth="0.5"
        opacity="0.35"
      />
      <path
        d="M232 95 L155 205 H205 L168 305 L255 185 H200 Z"
        fill={`url(#${id}-bolt)`}
        filter={`url(#${id}-glow)`}
      />
      <text
        x="200"
        y="338"
        textAnchor="middle"
        fill="#F5F7F2"
        fontFamily="system-ui,sans-serif"
        fontSize="28"
        fontWeight="800"
        letterSpacing="4"
      >
        BARQ
      </text>
      <text
        x="200"
        y="362"
        textAnchor="middle"
        fill={`url(#${id}-bolt)`}
        fontFamily="system-ui,sans-serif"
        fontSize="12"
        fontWeight="600"
        letterSpacing="6"
      >
        STUDIO
      </text>
    </svg>
  );
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const { image, text } = sizes[size];

  return (
    <Link
      href="/"
      aria-label="Barq Studio"
      className={cn("flex items-center gap-3 group", className)}
    >
      <LogoMark size={image} />
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
