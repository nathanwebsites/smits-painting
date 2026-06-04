"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#2C1A0E]/97 backdrop-blur-sm border-b border-[#1A0E06] shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center opacity-90 hover:opacity-100 transition-opacity duration-200">
            <Image
              src="/logo.png"
              alt="Smit's Painting Company"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 relative group pb-1 ${
                  pathname === link.href
                    ? "text-[#D4956A]"
                    : "text-white/75 hover:text-[#D4956A]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#8B5A2B] transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 bg-[#8B5A2B] hover:bg-[#A06B35] text-white text-sm font-semibold px-5 py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,90,43,0.5)]"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded-md hover:bg-[#1A0E06] transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#1A0E06] py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 px-4 text-sm font-medium rounded-md transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#D4956A] bg-[#1A0E06]"
                    : "text-white/75 hover:text-[#D4956A] hover:bg-[#1A0E06]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-[#8B5A2B] hover:bg-[#A06B35] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-all duration-300"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
