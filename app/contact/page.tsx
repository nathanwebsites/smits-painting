"use client";

import { useState } from "react";

const services = [
  "Interior Painting",
  "Exterior Painting",
  "Commercial Painting",
  "Roof Painting",
  "Waterproofing",
  "Plastering",
  "Other / Not Sure",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <>
      {/* Page header */}
      <section className="relative py-20 bg-[#F5EDD9] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 60% at 80% 50%, #8B5A2B 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#8B5A2B] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Let&apos;s Talk
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2C1A0E] mb-4">
            Contact Us
          </h1>
          <div className="w-16 h-0.5 bg-[#8B5A2B] mx-auto mb-6" />
          <p className="text-[#2C1A0E] max-w-2xl mx-auto text-lg">
            Get in touch for a free, no-obligation quote or to discuss your
            project. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-16 px-4 bg-[#F5EDD9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#EDE0C4] rounded-2xl p-8 border border-[#C8B89A]">
                <h2 className="text-2xl font-bold text-[#2C1A0E] mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[#8B5A2B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-[#8B5A2B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-[#2C1A0E] text-xl font-bold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[#2C1A0E]">
                      Thank you, {form.name}. We&apos;ll be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", phone: "", service: "", message: "" });
                      }}
                      className="mt-6 text-[#8B5A2B] text-sm hover:text-[#A06B35] transition-colors duration-200"
                    >
                      Send another message →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-[#2C1A0E] mb-1.5"
                        >
                          Full Name <span className="text-[#8B5A2B]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full bg-white border border-[#C8B89A] focus:border-[#8B5A2B] text-[#2C1A0E] placeholder-[#aaa] rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#2C1A0E] mb-1.5"
                        >
                          Email Address <span className="text-[#8B5A2B]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          className="w-full bg-white border border-[#C8B89A] focus:border-[#8B5A2B] text-[#2C1A0E] placeholder-[#aaa] rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-[#2C1A0E] mb-1.5"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="022 000 0000"
                          className="w-full bg-white border border-[#C8B89A] focus:border-[#8B5A2B] text-[#2C1A0E] placeholder-[#aaa] rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-[#2C1A0E] mb-1.5"
                        >
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full bg-white border border-[#C8B89A] focus:border-[#8B5A2B] text-[#2C1A0E] rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 appearance-none"
                        >
                          <option value="">Select a service…</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#2C1A0E] mb-1.5"
                      >
                        Message <span className="text-[#8B5A2B]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project — size, location, timeline, or anything else we should know…"
                        className="w-full bg-white border border-[#C8B89A] focus:border-[#8B5A2B] text-[#2C1A0E] placeholder-[#aaa] rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#8B5A2B] hover:bg-[#A06B35] disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,90,43,0.4)] flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#EDE0C4] rounded-2xl p-7 border border-[#C8B89A]">
                <h2 className="text-xl font-bold text-[#2C1A0E] mb-5">
                  Contact Details
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      label: "Phone",
                      value: "022 435 6714",
                      sub: "Mon – Fri, 7am – 5pm",
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                    },
                    {
                      label: "Email",
                      value: "smitspaintingcompany@gmail.com",
                      sub: "We reply within 24 hours",
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                    },
                    {
                      label: "Address",
                      value: "Gray Avenue, Paraparaumu",
                      sub: "Kapiti Coast, New Zealand",
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-10 h-10 bg-[#F5EDD9] rounded-lg flex items-center justify-center text-[#8B5A2B] flex-shrink-0 border border-[#C8B89A]">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[#9a9a9a] text-xs uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[#2C1A0E] text-sm font-medium">{item.value}</p>
                        <p className="text-[#9a9a9a] text-xs">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-[#C8B89A] h-56 relative bg-[#EDE0C4]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12225.123456789!2d175.0190!3d-40.9140!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3f5b1b1b1b1b1b%3A0x0!2sParaparaumu%2C%20Kapiti%20Coast%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1700000000000!5m2!1sen!2snz"
                  className="w-full h-full border-0 opacity-90"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Smit's Painting Company Location"
                />
                <div className="absolute inset-0 pointer-events-none border border-[#8B5A2B]/20 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
