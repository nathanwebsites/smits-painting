import Link from "next/link";

const realPhotos = [
  {
    url: "https://images.squarespace-cdn.com/content/v1/67f5aad5d1ef1273c18dcece/591ad513-b2f8-4645-9931-fb1a47059af4/IMG_1082.jpeg",
    caption: "Completed Project",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/67f5aad5d1ef1273c18dcece/90488901-4afe-4734-a373-f48fa5c8ed8b/IMG_1147+2.jpeg",
    caption: "Completed Project",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/67f5aad5d1ef1273c18dcece/569381ba-c461-4377-84db-3b12e53fef45/IMG_1154.jpg",
    caption: "Completed Project",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/67f5aad5d1ef1273c18dcece/9aa2a7cb-8139-4ec1-b46a-e7cc7df5e03f/IMG_0176.jpeg",
    caption: "Completed Project",
  },
];

const placeholderPhotos = [
  { seed: "interior1", w: 600, h: 420, caption: "Interior Refresh" },
  { seed: "exterior2", w: 600, h: 500, caption: "Exterior Coat" },
  { seed: "commercial3", w: 600, h: 380, caption: "Commercial Fitout" },
  { seed: "roof4", w: 600, h: 440, caption: "Roof Painting" },
  { seed: "feature5", w: 600, h: 600, caption: "Feature Wall" },
  { seed: "plaster6", w: 600, h: 460, caption: "Plastered & Painted" },
  { seed: "bedroom7", w: 600, h: 520, caption: "Bedroom Transformation" },
  { seed: "entrance8", w: 600, h: 400, caption: "Entrance & Hallway" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative py-20 bg-[#F5EDD9] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 60% at 30% 50%, #8B5A2B 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#8B5A2B] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Our Work
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2C1A0E] mb-4">
            Project Gallery
          </h1>
          <div className="w-16 h-0.5 bg-[#8B5A2B] mx-auto mb-6" />
          <p className="text-[#2C1A0E] max-w-2xl mx-auto text-lg">
            A selection of completed projects — from cosy interiors to full
            exterior coats. Every finish tells a story.
          </p>
        </div>
      </section>

      {/* Real project photos */}
      <section className="py-12 px-4 bg-[#F5EDD9]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-[#8B5A2B] rounded-full" />
            <h2 className="text-lg font-semibold text-[#2C1A0E]">
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {realPhotos.map((img, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl border border-[#C8B89A] hover:border-[#8B5A2B] hover:shadow-lg transition-all duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-56 object-cover block group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#8B5A2B]/0 group-hover:bg-[#8B5A2B]/60 transition-all duration-300 flex items-end justify-start p-4">
                  <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0 transform">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Masonry fill */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-[#C8B89A] rounded-full" />
            <h2 className="text-lg font-semibold text-[#2C1A0E]">
              More Projects <span className="text-sm font-normal">(photos coming soon)</span>
            </h2>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {placeholderPhotos.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-4 relative group overflow-hidden rounded-xl border border-[#C8B89A] hover:border-[#8B5A2B] hover:shadow-md transition-all duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/${img.seed}/${img.w}/${img.h}`}
                  alt={img.caption}
                  className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#8B5A2B]/0 group-hover:bg-[#8B5A2B]/60 transition-all duration-300 flex flex-col items-center justify-center">
                  <span className="text-white text-base font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform">
                    {img.caption}
                  </span>
                  <span className="text-white/70 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 mt-1">
                    Smit&apos;s Painting Co.
                  </span>
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
            Love What You See?
          </h2>
          <p className="text-[#2C1A0E] text-lg mb-8">
            Let us bring the same quality to your property. Contact us today
            for a free, no-obligation quote.
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
