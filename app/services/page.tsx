import Link from "next/link";

const services = [
  {
    title: "Interior Painting",
    description:
      "Transform your living and working spaces with expertly applied interior paint. We handle walls, ceilings, trims, cornices, and feature walls with precision.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="6" height="5" rx="1" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 8h6a2 2 0 012 2v0a2 2 0 01-2 2H9" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12v8M4.5 20h3" />
      </svg>
    ),
  },
  {
    title: "Exterior Painting",
    description:
      "Boost your property's kerb appeal and protect it from the elements. We prepare, prime, and coat all exterior surfaces to a durable, beautiful finish.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    title: "Commercial Painting",
    description:
      "Professional painting for offices, retail spaces, warehouses, and industrial facilities. We minimise downtime and deliver a polished result.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="18" rx="1" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 10h20M8 10V22M16 10v12" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 4V2h6v2" />
      </svg>
    ),
  },
  {
    title: "Roof Painting",
    description:
      "Extend the life of your roof with high-quality roof paint and sealants. We clean, treat, and coat all roof types — tiles, IBR, and corrugated iron.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12L12 3l10 9" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10v10h14V10" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Waterproofing",
    description:
      "Prevent costly water damage with our professional waterproofing solutions. We treat flat roofs, parapets, balconies, basements, and wet areas.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C7 8 4.5 12 4.5 15a7.5 7.5 0 0015 0C19.5 12 17 8 12 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.5 16a3.5 3.5 0 003.5-3.5" />
      </svg>
    ),
  },
  {
    title: "Plastering",
    description:
      "Achieve perfectly smooth, crack-free walls before painting. We offer skimming, patching, and full plaster applications to bring any surface to standard.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="10" width="14" height="9" rx="1" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 14h3l3-10" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10V7a2 2 0 012-2h4a2 2 0 012 2v3" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative py-20 bg-[#F5F0EB] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 60% at 70% 50%, #8B5E3C 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#8B5E3C] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4">
            Our Services
          </h1>
          <div className="w-16 h-0.5 bg-[#6b4423] mx-auto mb-6" />
          <p className="text-[#6b6b6b] max-w-2xl mx-auto text-lg">
            From preparation to final coat — we cover every aspect of painting
            and surface treatment with skill and care.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-[#EDE8E3] rounded-xl p-8 border border-[#D5CFC9] hover:border-[#6b4423] hover:shadow-md transition-all duration-300 group hover:-translate-y-1 transform flex flex-col"
              >
                <div className="text-[#8B5E3C] mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                  {service.icon}
                </div>
                <h3 className="text-[#2C2C2C] font-bold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6b6b6b] leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-6 pt-5 border-t border-[#D5CFC9]">
                  <Link
                    href="/contact"
                    className="text-[#6b4423] text-sm font-semibold hover:text-[#8B5E3C] transition-colors duration-200 flex items-center gap-2 group/link"
                  >
                    Get a Quote
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#EDE8E3] border-t border-[#D5CFC9]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-[#2C2C2C] mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-[#6b6b6b] text-lg mb-8">
            Contact us and we&apos;ll assess your property and recommend the right
            solution — completely free of charge.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#6b4423] hover:bg-[#8B5E3C] text-white font-semibold px-10 py-4 rounded-md text-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(107,68,35,0.4)]"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
