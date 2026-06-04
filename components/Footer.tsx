import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2C1A0E] border-t border-[#1A0E06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-1">
              Smit&apos;s Painting Company
            </h3>
            <p className="text-[#D4956A] text-sm font-medium italic mb-3">
              Bringing Colour to Life
            </p>
            <p className="text-[#C4A882] text-sm leading-relaxed mb-4">
              Quality craftsmanship in every stroke. Serving residential and
              commercial clients with pride and precision.
            </p>
            <p className="text-[#D4956A] text-sm font-medium italic">
              &ldquo;Quality Craftsmanship, Every Stroke&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#C4A882] text-sm hover:text-[#D4956A] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#8B5A2B] rounded-full group-hover:bg-[#D4956A] transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-2 mb-6">
              <p className="text-[#C4A882] text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D4956A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                022 435 6714
              </p>
              <p className="text-[#C4A882] text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D4956A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                smitspaintingcompany@gmail.com
              </p>
              <p className="text-[#C4A882] text-sm flex items-start gap-2">
                <svg className="w-4 h-4 text-[#D4956A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Gray Avenue, Paraparaumu,<br />Kapiti Coast, New Zealand
              </p>
            </div>

            {/* Social links removed — update with real URLs when client provides them */}
          </div>
        </div>

        <div className="border-t border-[#1A0E06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#8a7060] text-sm">
            &copy; {year} Smit&apos;s Painting Company. All rights reserved.
          </p>
          <p className="text-[#6a5040] text-xs">
            Professional Painting Services
          </p>
        </div>
      </div>
    </footer>
  );
}
