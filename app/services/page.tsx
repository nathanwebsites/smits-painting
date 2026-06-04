import Link from "next/link";

function PaintRollerIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="15" height="8" rx="3"/>
      <path d="M17 8h2a1 1 0 011 1v1a1 1 0 01-1 1h-2"/>
      <line x1="11" y1="12" x2="11" y2="17"/>
      <rect x="8" y="17" width="6" height="4" rx="1"/>
    </svg>
  );
}

const services = [
  {
    title: "Interior Painting",
    description:
      "Transform your living and working spaces with expertly applied interior paint. We handle walls, ceilings, trims, cornices, and feature walls with precision.",
    photo: "https://images.unsplash.com/photo-1652829069834-2c05031199c5?w=800&q=80&auto=format&fit=crop",
    photoAlt: "Professional painter applying paint to a wall with a roller",
  },
  {
    title: "Exterior Painting",
    description:
      "Boost your property's kerb appeal and protect it from the elements. We prepare, prime, and coat all exterior surfaces to a durable, beautiful finish.",
    photo: "https://images.unsplash.com/photo-1774977737078-7ccc2ac697e6?w=800&q=80&auto=format&fit=crop",
    photoAlt: "Painter on a ladder painting the exterior of a building",
  },
  {
    title: "Commercial Painting",
    description:
      "Professional painting for offices, retail spaces, warehouses, and industrial facilities. We minimise downtime and deliver a polished result.",
    photo: "https://images.unsplash.com/photo-1599398766399-07f7a828044b?w=800&q=80&auto=format&fit=crop",
    photoAlt: "Modern commercial office building exterior",
  },
  {
    title: "Roof Painting",
    description:
      "Extend the life of your roof with high-quality roof paint and sealants. We clean, treat, and coat all roof types — tiles, IBR, and corrugated iron.",
    photo: "https://images.unsplash.com/photo-1681049400158-0ff6249ac315?w=800&q=80&auto=format&fit=crop",
    photoAlt: "Workers performing roof maintenance and coating",
  },
  {
    title: "Waterproofing",
    description:
      "Prevent costly water damage with our professional waterproofing solutions. We treat flat roofs, parapets, balconies, basements, and wet areas.",
    photo: "https://images.unsplash.com/photo-1657502481490-9a4938421cc5?w=800&q=80&auto=format&fit=crop",
    photoAlt: "Water droplet on a sealed stone surface demonstrating waterproofing",
  },
  {
    title: "Plastering",
    description:
      "Achieve perfectly smooth, crack-free walls before painting. We offer skimming, patching, and full plaster applications to bring any surface to standard.",
    photo: "https://images.unsplash.com/photo-1701850009190-2859ba2aeea6?w=800&q=80&auto=format&fit=crop",
    photoAlt: "Worker applying plaster to a brick wall",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative py-20 bg-[#F5EDD9] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 60% at 70% 50%, #8B5A2B 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#8B5A2B] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2C1A0E] mb-4">
            Our Services
          </h1>
          <div className="w-16 h-0.5 bg-[#8B5A2B] mx-auto mb-6" />
          <p className="text-[#2C1A0E] max-w-2xl mx-auto text-lg">
            From preparation to final coat — we cover every aspect of painting
            and surface treatment with skill and care.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4 bg-[#F5EDD9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-[#C8B89A] hover:border-[#8B5A2B] hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 transform flex flex-col bg-[#EDE0C4]"
              >
                {/* Service photo */}
                <div className="h-48 w-full flex-shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.photo}
                    alt={service.photoAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Card content */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[#8B5A2B] mb-3">
                    <PaintRollerIcon />
                    <h3 className="text-[#2C1A0E] font-bold text-lg leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-[#2C1A0E] leading-relaxed flex-1 text-sm">
                    {service.description}
                  </p>
                  <div className="mt-5 pt-4 border-t border-[#C8B89A]">
                    <Link
                      href="/contact"
                      className="text-[#8B5A2B] text-sm font-semibold hover:text-[#A06B35] transition-colors duration-200 flex items-center gap-2 group/link"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#EDE0C4] border-t border-[#C8B89A]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-[#2C1A0E] mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-[#2C1A0E] text-lg mb-8">
            Contact us and we&apos;ll assess your property and recommend the right
            solution — completely free of charge.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#8B5A2B] hover:bg-[#A06B35] text-white font-semibold px-10 py-4 rounded-md text-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,90,43,0.4)]"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <g transform="rotate(45 12 12)">
                <path d="M10.5 3C10.5 2 11.2 1.5 12 1.5C12.8 1.5 13.5 2 13.5 3L13.5 12L10.5 12Z" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
                <circle cx="12" cy="3.5" r="0.9" fill="rgba(44,26,14,0.5)" stroke="white" strokeWidth="0.5"/>
                <rect x="9.5" y="12" width="5" height="2.5" fill="rgba(255,255,255,0.55)" stroke="white" strokeWidth="1"/>
                <path d="M8 14.5L16 14.5L15.5 22L8.5 22Z" fill="rgba(255,255,255,0.9)" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
              </g>
            </svg>
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
