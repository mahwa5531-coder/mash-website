import * as React from "react";
import { cn, assetPath } from "@/lib/utils";

interface WindowMockupProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  // Kept optional for backward-compatibility with call sites
  title?: string;
  badge?: string;
  activeFile?: string;
}

export function WindowMockup({
  src,
  alt,
  className,
  priority = false,
}: WindowMockupProps) {
  return (
    <div
      className={cn(
        "group relative mx-auto w-full max-w-5xl rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] transition-shadow duration-300 overflow-hidden",
        className
      )}
    >
      <div className="relative aspect-[16/10] w-full bg-slate-50 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(src)}
          alt={alt}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-top select-none transition-transform duration-500 group-hover:scale-[1.003]"
        />
      </div>
    </div>
  );
}
