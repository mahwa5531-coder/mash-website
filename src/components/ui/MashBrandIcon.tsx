import React from "react";
import { assetPath } from "@/lib/utils";

export interface MashBrandIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number | string;
  className?: string;
}

/**
 * Official MASH Celtic Infinity Knot Gradient Brand Icon.
 * Uses responsive multi-density pixel-sharpened assets (1x, 2x, 3x) for ultra-high clarity across all displays.
 */
export function MashBrandIcon({
  size = 24,
  className = "",
  alt = "MASH Brand Mark",
  ...props
}: MashBrandIconProps) {
  const pixelSize = typeof size === "number" ? `${size}px` : size;
  const svgSrc = assetPath("/brand-logo.svg");

  return (
    <img
      src={svgSrc}
      alt={alt}
      width={typeof size === "number" ? size : undefined}
      height={typeof size === "number" ? size : undefined}
      style={{ width: pixelSize, height: pixelSize, objectFit: "contain" }}
      className={`shrink-0 select-none ${className}`}
      draggable={false}
      decoding="async"
      {...props}
    />
  );
}

export default MashBrandIcon;
