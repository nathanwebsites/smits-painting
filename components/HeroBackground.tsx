"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageWrapper = imageRef.current;
    if (!container || !imageWrapper) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Parallax: image drifts at 25% of scroll speed (slower than page = depth)
      imageWrapper.style.transform = `translateY(${scrollY * 0.25}px)`;

      // Gentle overall fade — fully gone at 90% of hero height
      const opacity = Math.max(0, 1 - scrollY / (heroHeight * 0.9));
      container.style.opacity = opacity.toString();
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{
        // Gradient mask dissolves the image into transparency from 58% down —
        // no hard cutoff, melts into the page background colour beneath
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.4) 78%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.4) 78%, transparent 100%)",
      }}
    >
      {/* Oversized wrapper gives the parallax room to move without exposing edges */}
      <div
        ref={imageRef}
        className="absolute left-0 right-0"
        style={{ top: "-30%", bottom: "-30%", willChange: "transform" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1652829069834-2c05031199c5?w=1920&q=85&auto=format&fit=crop"
          alt="Professional painter applying warm paint to a wall"
          fill
          className="object-cover object-center"
          style={{ filter: "saturate(1.4) brightness(1.08) sepia(0.3)" }}
          priority
        />
      </div>

      {/* Dark base overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.32)" }} />
      {/* Warm directional gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(74,40,10,0.22) 0%, rgba(74,40,10,0.08) 50%, rgba(74,40,10,0.22) 100%)",
        }}
      />
    </div>
  );
}
