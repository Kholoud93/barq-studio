"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface SceneBackdropProps {
  src: string;
  className?: string;
  overlayClassName?: string;
  priority?: boolean;
}

export function SceneBackdrop({
  src,
  className,
  overlayClassName,
  priority = false,
}: SceneBackdropProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-background/55 via-background/45 to-background",
          overlayClassName
        )}
      />
      <div className="neon-project-glow absolute inset-0 opacity-70" />
    </div>
  );
}
