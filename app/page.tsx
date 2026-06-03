import Link from "next/link";
import Image from "next/image";

const highlights = [
  {
    title: "15+ Years Experience",
    desc: "Over a decade of delivering flawless finishes to homes and businesses across the region.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Premium Quality",
    desc: "We use only top-grade paints and materials, ensuring a lasting finish that stands the test of time.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Fully Reliable",
    desc: "On time, on budget — every time. We respect your space and keep disruption to a minimum.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Brendon P.",
    review: "I have absolutely no hesitation in recommending Josh and his team.",
    photo:
      "https://images.squarespace-cdn.com/content/v1/67f5aad5d1ef1273c18dcece/591ad513-b2f8-4645-9931-fb1a47059af4/IMG_1082.jpeg",
  },
  {
    name: "Marie D.",
    review: "Efficient, reliable and professional service. A fantastic job. Thanks team.",
    photo:
      "https://images.squarespace-cdn.com/content/v1/67f5aad5d1ef1273c18dcece/90488901-4afe-4734-a373-f48fa5c8ed8b/IMG_1147+2.jpeg",
  },
  {
    name: "Traycee",
    review:
      "Josh and his most excellent crew were so professional and competent when they painted my home. A fantastic, above-&-beyond approach from Josh.",
    photo:
      "https://images.squarespace-cdn.com/content/v1/67f5aad5d1ef1273c18dcece/569381ba-c461-4377-84db-3b12e53fef45/IMG_1154.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero — stays dark/dramatic ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=85&auto=format&fit=crop"
          alt="Beautifully painted home interior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(26,10,4,0.55) 0%, rgba(107,68,35,0.18) 45%, rgba(15,8,3,0.70) 100%)",
          }}
        />

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <p className="text-[#8B5E3C] text-sm sm:text-base font-semibold tracking-[0.25em] uppercase mb-4">
            Professional Painting Services
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]">
            Smit&apos;s{" "}
            <span className="text-[#8B5E3C]">Painting</span>
            <br />
            Company
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 font-light tracking-wide">
            Quality Craftsmanship, Every Stroke
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#6b4423] hover:bg-[#8B5E3C] text-white font-semibold px-10 py-4 rounded-md text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(107,68,35,0.55)] hover:-translate-y-0.5 transform"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="inline-block border border-white/40 text-white hover:bg-white/10 font-semibold px-10 py-4 rounded-md text-lg transition-all duration-300 hover:-translate-y-0.5 transform"
            >
              Our Services
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce z-20">
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 text-[#8B5E3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 px-4 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#8B5E3C] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
              Our Promise
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] mb-4">
              Why Choose <span className="text-[#8B5E3C]">Smit&apos;s</span>?
            </h2>
            <div className="w-16 h-0.5 bg-[#6b4423] mx-auto mb-4" />
            <p className="text-[#6b6b6b] max-w-2xl mx-auto text-lg">
              We bring passion and precision to every project, big or small.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((card, i) => (
              <div
                key={i}
                className="bg-[#EDE8E3] rounded-xl p-8 border border-[#D5CFC9] hover:border-[#6b4423] hover:shadow-md transition-all duration-300 group hover:-translate-y-1 transform"
              >
                <div className="text-[#8B5E3C] mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                  {card.icon}
                </div>
                <h3 className="text-[#2C2C2C] font-bold text-xl mb-3">{card.title}</h3>
                <p className="text-[#6b6b6b] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 px-4 bg-[#EDE8E3]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#8B5E3C] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
              What Our Clients Say
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] mb-4">
              Customer <span className="text-[#8B5E3C]">Testimonials</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#6b4423] mx-auto" />
          </div>

          <div className="flex flex-col gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500"
                style={{ minHeight: "360px" }}
              >
                {/* Left: real work photo */}
                <div className="sm:w-[40%] flex-shrink-0 relative h-64 sm:h-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.photo}
                    alt="Smit's Painting work"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle warm gradient bleed at the right edge to merge into dark panel */}
                  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-[#1C0E07] hidden sm:block" />
                </div>

                {/* Right: dark warm panel */}
                <div
                  className="flex-1 flex flex-col items-center justify-between px-8 sm:px-12 py-10 text-center"
                  style={{
                    background:
                      "linear-gradient(145deg, #1C0E07 0%, #231208 60%, #1a0d06 100%)",
                  }}
                >
                  {/* Top: decorative quote + label */}
                  <div className="flex flex-col items-center gap-2">
                    <svg
                      className="w-12 h-9 text-[#6b4423]"
                      fill="currentColor"
                      viewBox="0 0 48 36"
                      aria-hidden="true"
                    >
                      <path d="M0 36V21.818C0 9.455 7.273 2.545 21.818 0L24 4.364C18.182 5.455 14.182 7.455 12.727 10.545 11.636 12.909 11.273 14.909 11.636 16.909H21.818V36H0ZM26.182 36V21.818C26.182 9.455 33.455 2.545 48 0V4.364C42.182 5.455 38.182 7.455 36.727 10.545 35.636 12.909 35.273 14.909 35.636 16.909H45.818V36H26.182Z" />
                    </svg>
                    <p className="text-[#8B5E3C] text-[10px] font-bold tracking-[0.35em] uppercase">
                      Testimonial
                    </p>
                  </div>

                  {/* Middle: review text */}
                  <p className="text-white/80 text-base sm:text-lg italic leading-relaxed max-w-sm">
                    &ldquo;{t.review}&rdquo;
                  </p>

                  {/* Bottom: divider + name in script */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-px bg-[#6b4423]/60" />
                    <p
                      className="text-[#8B5E3C] text-2xl sm:text-3xl"
                      style={{ fontFamily: "var(--font-dancing)" }}
                    >
                      {t.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Teaser ── */}
      <section className="py-16 bg-[#F5F0EB] border-t border-[#D5CFC9]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] mb-4">
            Full Range of Painting Services
          </h2>
          <p className="text-[#6b6b6b] text-lg mb-8">
            From interior transformations to commercial coatings — we do it all.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {[
              "Interior Painting",
              "Exterior Painting",
              "Commercial Painting",
              "Roof Painting",
              "Waterproofing",
              "Plastering",
            ].map((svc) => (
              <span
                key={svc}
                className="bg-[#EDE8E3] border border-[#6b4423] text-[#6b4423] text-sm font-medium px-4 py-1.5 rounded-full"
              >
                {svc}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#6b4423] hover:bg-[#8B5E3C] text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(107,68,35,0.35)]"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="border border-[#6b4423] text-[#6b4423] hover:bg-[#6b4423] hover:text-white font-semibold px-8 py-3 rounded-md transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
