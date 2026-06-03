import Link from "next/link";

const whyUs = [
  {
    title: "Licensed & Insured",
    desc: "Fully registered and insured for your peace of mind on every job.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Free, No-Obligation Quotes",
    desc: "We assess your project and provide a detailed quote at zero cost to you.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Clean & Tidy Work",
    desc: "We treat your property with respect — thorough prep, daily cleanup, minimal disruption.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Premium Materials",
    desc: "We use leading paint brands and quality materials that deliver lasting results.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Experienced Team",
    desc: "Skilled, vetted professionals with years of hands-on experience behind every project.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Satisfaction Guaranteed",
    desc: "We stand behind our work. If you're not happy, we'll make it right — no questions asked.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "6", label: "Service Specialisms" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative py-20 bg-[#F5F0EB] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 60% at 50% 50%, #8B5E3C 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#8B5E3C] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Our Story
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4">
            About Us
          </h1>
          <div className="w-16 h-0.5 bg-[#6b4423] mx-auto mb-6" />
          <p className="text-[#6b6b6b] max-w-2xl mx-auto text-lg">
            A family-built business rooted in craftsmanship, reliability, and
            a genuine pride in every painted surface.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#EDE8E3] border-y border-[#D5CFC9] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-3xl sm:text-4xl font-bold text-[#6b4423]">
                  {s.value}
                </p>
                <p className="text-[#6b6b6b] text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-16 px-4 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] mb-6">
                Built on <span className="text-[#8B5E3C]">Craftsmanship</span>
              </h2>
              <div className="space-y-4 text-[#6b6b6b] leading-relaxed">
                <p>
                  Smit&apos;s Painting Company was founded over 15 years ago with a
                  simple belief: that every surface deserves the same care and
                  attention, whether it&apos;s a modest bedroom wall or the façade of
                  a commercial building.
                </p>
                <p>
                  What started as a one-man operation quickly grew through
                  word-of-mouth referrals — the most powerful testament to
                  quality work. Today, we are a team of skilled tradespeople who
                  share the same values: precision, reliability, and a clean
                  finish every time.
                </p>
                <p>
                  We work closely with homeowners, property managers, architects,
                  and contractors across the region, bringing the same level of
                  professionalism to every engagement, large or small.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block bg-[#6b4423] hover:bg-[#8B5E3C] text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(107,68,35,0.35)]"
                >
                  Work With Us
                </Link>
              </div>
            </div>

            {/* Team photo */}
            <div className="flex flex-col items-center">
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://picsum.photos/seed/portrait1/480/560"
                  alt="Owner of Smit's Painting Company"
                  className="w-full max-w-sm rounded-2xl border-2 border-[#6b4423] shadow-[0_8px_40px_rgba(107,68,35,0.15)]"
                />
                <div className="absolute -bottom-5 -right-5 bg-[#6b4423] rounded-xl px-6 py-4 shadow-lg">
                  <p className="text-white font-bold text-lg">J. Smit</p>
                  <p className="text-white/80 text-sm">Founder & Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-[#EDE8E3] border-t border-[#D5CFC9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] mb-4">
              Why Choose <span className="text-[#8B5E3C]">Smit&apos;s</span>?
            </h2>
            <div className="w-16 h-0.5 bg-[#6b4423] mx-auto mb-4" />
            <p className="text-[#6b6b6b] max-w-2xl mx-auto">
              Six reasons our clients keep coming back — and recommend us to
              their friends and family.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 bg-[#F5F0EB] rounded-xl p-6 border border-[#D5CFC9] hover:border-[#6b4423] hover:shadow-sm transition-all duration-300 group"
              >
                <div className="text-[#8B5E3C] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[#2C2C2C] font-semibold mb-1">{item.title}</h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F5F0EB] border-t border-[#D5CFC9]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-[#2C2C2C] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[#6b6b6b] text-lg mb-8">
            Reach out today and let&apos;s discuss your project over a free, no-pressure quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#6b4423] hover:bg-[#8B5E3C] text-white font-semibold px-10 py-4 rounded-md text-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(107,68,35,0.4)]"
            >
              Contact Us
            </Link>
            <Link
              href="/gallery"
              className="border border-[#6b4423] text-[#6b4423] hover:bg-[#6b4423] hover:text-white font-semibold px-10 py-4 rounded-md text-lg transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
