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

      // ── Parallax ──────────────────────────────────────────────────────────
      // Image moves at 25% of scroll speed — slower than the page = depth
      imageWrapper.style.transform = `translateY(${scrollY * 0.25}px)`;

      // ── Dynamic mask fade ─────────────────────────────────────────────────
      // No fade at all until the user has scrolled past fadeDelay pixels.
      // After that, the fade zone grows from the bottom upward over fadeDuration px.
      //
      // solidEnd  = where the mask starts going from black → transparent
      //             100% at scroll 0 (whole image opaque), drifts to 55% at full fade
      // fadeEnd   = where the mask reaches full transparency
      //             equals solidEnd at scroll 0 (zero-width = invisible),
      //             grows to solidEnd + 25% at full fade
      const fadeDelay = 90;     // px scrolled before any fade appears
      const fadeDuration = 720; // px of scroll over which fade builds to 100%

      const progress = Math.max(
        0,
        Math.min(1, (scrollY - fadeDelay) / fadeDuration)
      );

      const solidEnd = (100 - progress * 45).toFixed(2);
      const fadeEnd  = (100 - progress * 45 + progress * 25).toFixed(2);

      const mask = `linear-gradient(to bottom, black 0%, black ${solidEnd}%, transparent ${fadeEnd}%)`;
      container.style.setProperty("mask-image", mask);
      container.style.setProperty("-webkit-mask-image", mask);
    };

    // Initialise immediately so scroll-restored pages get the right state
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        // SSR / pre-JS default: fully opaque, no fade visible
        maskImage: "linear-gradient(to bottom, black 0%, black 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 100%)",
      }}
    >
      {/* Oversized wrapper: ±30% vertical headroom so parallax never exposes edges */}
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
