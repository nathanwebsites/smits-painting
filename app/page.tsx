import Link from "next/link";
import Image from "next/image";
import HeroBackground from "@/components/HeroBackground";

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
    heading: "No Hesitation",
    review: "I have absolutely no hesitation in recommending Josh and his team.",
    photo:
      "https://images.squarespace-cdn.com/content/v1/67f5aad5d1ef1273c18dcece/591ad513-b2f8-4645-9931-fb1a47059af4/IMG_1082.jpeg",
  },
  {
    name: "Marie D.",
    heading: "Efficient & Professional",
    review: "Efficient, reliable and professional service. A fantastic job. Thanks team.",
    photo:
      "https://images.squarespace-cdn.com/content/v1/67f5aad5d1ef1273c18dcece/90488901-4afe-4734-a373-f48fa5c8ed8b/IMG_1147+2.jpeg",
  },
  {
    name: "Traycee",
    heading: "Above & Beyond",
    review:
      "Josh and his most excellent crew were so professional and competent when they painted my home. A fantastic, above-&-beyond approach from Josh.",
    photo:
      "https://images.squarespace-cdn.com/content/v1/67f5aad5d1ef1273c18dcece/569381ba-c461-4377-84db-3b12e53fef45/IMG_1154.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero — parallax + gradient-mask fade ── */}
      <section className="relative min-h-screen flex items-center justify-center">
        <HeroBackground />

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          {/* Logo — hero centrepiece */}
          <div className="mb-6 flex justify-center">
            <Image
              src="/logo.png"
              alt="Smit's Painting Company"
              width={320}
              height={96}
              className="w-48 sm:w-64 md:w-80 h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>

          <p className="text-[#D4956A] text-sm sm:text-base font-semibold tracking-[0.25em] uppercase mb-4">
            Professional Painting Services
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]">
            Smit&apos;s{" "}
            <span className="text-[#D4956A]">Painting</span>
            <br />
            Company
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 font-light tracking-wide">
            Quality Craftsmanship, Every Stroke
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#8B5A2B] hover:bg-[#A06B35] text-white font-semibold px-10 py-4 rounded-md text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,90,43,0.55)] hover:-translate-y-0.5 transform"
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
          <svg className="w-5 h-5 text-[#D4956A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 px-4 bg-[#F5EDD9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#8B5A2B] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
              Our Promise
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C1A0E] mb-4">
              Why Choose <span className="text-[#8B5A2B]">Smit&apos;s</span>?
            </h2>
            <div className="w-16 h-0.5 bg-[#8B5A2B] mx-auto mb-4" />
            <p className="text-[#2C1A0E] max-w-2xl mx-auto text-lg">
              We bring passion and precision to every project, big or small.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((card, i) => (
              <div
                key={i}
                className="bg-[#EDE0C4] rounded-xl p-8 border border-[#C8B89A] hover:border-[#8B5A2B] hover:shadow-md transition-all duration-300 group hover:-translate-y-1 transform"
              >
                <div className="text-[#8B5A2B] mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                  {card.icon}
                </div>
                <h3 className="text-[#2C1A0E] font-bold text-xl mb-3">{card.title}</h3>
                <p className="text-[#2C1A0E] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-[#F5EDD9]">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <p className="text-[#8B5A2B] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            What Our Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C1A0E]">
            Customer <span className="text-[#8B5A2B]">Testimonials</span>
          </h2>
        </div>

        {/* Testimonial rows — alternating layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
          {testimonials.map((t, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={i}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch gap-0`}
                style={{ minHeight: "460px" }}
              >
                {/* Text side */}
                <div
                  className={`flex-1 flex flex-col justify-center py-10 lg:py-0 ${
                    isReversed ? "lg:pl-16 xl:pl-24" : "lg:pr-16 xl:pr-24"
                  }`}
                >
                  <h3 className="text-4xl sm:text-5xl font-bold text-[#2C1A0E] leading-tight mb-5">
                    {t.heading}
                  </h3>
                  <p className="text-[#2C1A0E]/75 text-lg leading-relaxed mb-10">
                    &ldquo;{t.review}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-[#8B5A2B]" />
                    <span className="text-[#8B5A2B] font-semibold text-base">{t.name}</span>
                  </div>
                </div>

                {/* Photo side */}
                <div className="w-full lg:w-[48%] flex-shrink-0 h-72 lg:h-auto overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.photo}
                    alt="Smit's Painting work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Services Teaser ── */}
      <section className="py-16 bg-[#F5EDD9] border-t border-[#C8B89A]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C1A0E] mb-4">
            Full Range of Painting Services
          </h2>
          <p className="text-[#2C1A0E] text-lg mb-8">
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
                className="bg-[#EDE0C4] border border-[#8B5A2B] text-[#8B5A2B] text-sm font-medium px-4 py-1.5 rounded-full"
              >
                {svc}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#8B5A2B] hover:bg-[#A06B35] text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,90,43,0.35)]"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <g transform="rotate(45 12 12)">
                  <path d="M10.5 3C10.5 2 11.2 1.5 12 1.5C12.8 1.5 13.5 2 13.5 3L13.5 12L10.5 12Z" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
                  <circle cx="12" cy="3.5" r="0.9" fill="rgba(44,26,14,0.5)" stroke="white" strokeWidth="0.5"/>
                  <rect x="9.5" y="12" width="5" height="2.5" fill="rgba(255,255,255,0.55)" stroke="white" strokeWidth="1"/>
                  <path d="M8 14.5L16 14.5L15.5 22L8.5 22Z" fill="rgba(255,255,255,0.9)" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
                </g>
              </svg>
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="border border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white font-semibold px-8 py-3 rounded-md transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
