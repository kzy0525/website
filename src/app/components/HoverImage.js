'use client';
import { useState } from "react";
import Image from "next/image";

export default function HoverImage({ baseSrc, overlaySrc, alt, width, height }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-sm"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Base Image */}
      <Image
        src={baseSrc}
        alt={alt}
        width={width}
        height={height}
        className="rounded-2xl object-cover"
        priority
      />

      {/* Overlay Image (always rendered, toggled with opacity) */}
      <Image
        src={overlaySrc}
        alt="Overlay"
        width={width}
        height={height}
        className={`absolute top-0 left-0 rounded-2xl object-cover transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
        priority
      />
    </div>
  );
}
