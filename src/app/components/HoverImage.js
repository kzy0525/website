'use client';
import { useState } from "react";
import Image from "next/image";

export default function HoverImage({ baseSrc, overlaySrc, alt, width, height }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={baseSrc}
        alt={alt}
        width={width}
        height={height}
        className="object-cover transition duration-300 ease-in-out rounded-2xl"
      />
      {hovered && (
        <Image
          src={overlaySrc}
          alt="Overlay"
          width={width}
          height={height}
          className="absolute top-0 left-0 object-cover rounded-2xl"
        />
      )}
    </div>
  );
}
