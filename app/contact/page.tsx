"use client";

import { useState } from "react";
import Link from "next/link";

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What are your shipping times?",
    a: "We process and ship orders within 1–2 business days. Standard shipping takes 3–5 business days, while express shipping delivers within 1–2 business days.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes — we offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase for any reason, contact us for a full, no-questions-asked refund.",
  },
  {
    q: "Are your products organic?",
    a: "All of our supplements are made with 100% certified organic ingredients, sourced from ethical farms and third-party tested every batch for purity and potency.",
  },
  {
    q: "Can I take multiple supplements together?",
    a: "Most of our supplements can be combined safely. We recommend reaching out to our wellness team or your healthcare provider for personalised guidance.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we ship to over 50 countries. International shipping typically takes 7–14 business days. Customs fees may apply depending on your destination.",
  },
  {
    q: "Are your products vegan-friendly?",
    a: "100% — all Sah Veh supplements are entirely plant-based and vegan. We never use animal products or by-products in any of our formulations.",
  },
  {
    q: "Do you offer wholesale or bulk orders?",
    a: "Yes. We offer wholesale pricing for retailers, wellness practitioners, and bulk buyers. Contact our team via WhatsApp or email for more information.",
  },
  {
    q: "What makes Sah Veh different?",
    a: "We prioritise quality, purity, and transparency above all else. Every product is made with premium organic botanicals, manufactured to high standards, and independently tested for contaminants before reaching you.",
  },
];

const topics = [
  "Select a topic",
  "Product Inquiry",
  "Order Support",
  "Wellness Advice",
  "Partnership",
  "Other",
];

// ─── FAQ Accordion Item ────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#ede5d8] last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span
          className="text-[0.9rem] text-[#2d2416] group-hover:text-[#7a5c2e] transition-colors duration-200"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "1.05rem",
          }}
        >
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border border-[#ede5d8] flex items-center justify-center text-[#7a5c2e] transition-transform duration-300 ${open ? "rotate-45 bg-[#f0e8da]" : ""}`}
          aria-hidden="true"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M12 5v14M5 12h14"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 pb-5" : "max-h-0"}`}
      >
        <p
          className="text-[0.85rem] leading-[1.85] text-[#7a6650]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-[#f0e8da] flex items-center justify-center mb-5 text-[#7a5c2e]">
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <h3
          className="text-[1.6rem] text-[#2d2416] mb-2"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
        >
          Message Sent
        </h3>
        <p
          className="text-[0.85rem] text-[#7a6650] max-w-xs leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Thank you for reaching out. Our team will get back to you within 1
          business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      noValidate
    >
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="firstName"
            className="text-[0.65rem] tracking-[0.22em] uppercase text-[#9c8060]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            First Name <span className="text-[#7a5c2e]">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Amara"
            className="px-5 py-3.5 rounded-xl border border-[#ede5d8] bg-[#faf7f2] text-[#2d2416] text-[0.85rem]
              placeholder-[#c8b89a] focus:outline-none focus:border-[#7a5c2e] focus:bg-white transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="lastName"
            className="text-[0.65rem] tracking-[0.22em] uppercase text-[#9c8060]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Last Name <span className="text-[#7a5c2e]">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Dlamini"
            className="px-5 py-3.5 rounded-xl border border-[#ede5d8] bg-[#faf7f2] text-[#2d2416] text-[0.85rem]
              placeholder-[#c8b89a] focus:outline-none focus:border-[#7a5c2e] focus:bg-white transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-[0.65rem] tracking-[0.22em] uppercase text-[#9c8060]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Email <span className="text-[#7a5c2e]">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="px-5 py-3.5 rounded-xl border border-[#ede5d8] bg-[#faf7f2] text-[#2d2416] text-[0.85rem]
              placeholder-[#c8b89a] focus:outline-none focus:border-[#7a5c2e] focus:bg-white transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phone"
            className="text-[0.65rem] tracking-[0.22em] uppercase text-[#9c8060]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Phone{" "}
            <span className="text-[#c8b89a] text-[0.6rem]">(Optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+27 82 000 0000"
            className="px-5 py-3.5 rounded-xl border border-[#ede5d8] bg-[#faf7f2] text-[#2d2416] text-[0.85rem]
              placeholder-[#c8b89a] focus:outline-none focus:border-[#7a5c2e] focus:bg-white transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>
      </div>

      {/* Topic */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="topic"
          className="text-[0.65rem] tracking-[0.22em] uppercase text-[#9c8060]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Topic <span className="text-[#7a5c2e]">*</span>
        </label>
        <select
          id="topic"
          required
          defaultValue="Select a topic"
          className="px-5 py-3.5 rounded-xl border border-[#ede5d8] bg-[#faf7f2] text-[#2d2416] text-[0.85rem]
            focus:outline-none focus:border-[#7a5c2e] focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {topics.map((t) => (
            <option
              key={t}
              value={t}
              disabled={t === "Select a topic"}
            >
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-[0.65rem] tracking-[0.22em] uppercase text-[#9c8060]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Message <span className="text-[#7a5c2e]">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Tell us how we can help you..."
          className="px-5 py-4 rounded-xl border border-[#ede5d8] bg-[#faf7f2] text-[#2d2416] text-[0.85rem]
            placeholder-[#c8b89a] focus:outline-none focus:border-[#7a5c2e] focus:bg-white transition-all duration-200 resize-none"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-2 w-full py-4 rounded-full bg-[#2d2416] text-[#f5ede0] text-[0.75rem] tracking-[0.2em] uppercase font-semibold
          transition-all duration-300 hover:bg-[#7a5c2e] hover:shadow-[0_8px_30px_rgba(122,92,46,0.3)]
          disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <main className="bg-[#faf7f2] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 px-5 sm:px-8 lg:px-12 overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #7a5c2e 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-10"
          >
            <ol
              className="flex items-center gap-2 text-[0.68rem] tracking-[0.2em] uppercase text-[#9c8060]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <li>
                <Link
                  href="/"
                  className="hover:text-[#7a5c2e] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li
                aria-hidden="true"
                className="text-[#c8b89a]"
              >
                —
              </li>
              <li
                aria-current="page"
                className="text-[#4a3f32]"
              >
                Contact
              </li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <p
              className="text-[0.68rem] tracking-[0.38em] uppercase text-[#9c8060] mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Get In Touch
            </p>
            <h1
              className="text-[3rem] sm:text-[4rem] leading-[1.0] text-[#2d2416] mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
            >
              We&apos;re Here
              <br />
              <em className="italic text-[#7a5c2e]">to Help</em>
            </h1>
            <p
              className="text-[0.93rem] leading-[1.85] text-[#6b5c46] max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Have a question about our products, need wellness advice, or want
              to place a bulk order? Our team is ready to guide you — reach out
              any way that suits you best.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section
        aria-label="Contact channels"
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-16"
      >
        <ul
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          role="list"
        >
          {[
            {
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              ),
              label: "WhatsApp",
              value: "+27 82 764 2367",
              sub: "Fastest response",
              href: "https://wa.me/27827642367",
            },
            {
              icon: (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              ),
              label: "Email",
              value: "info@sahvehinvestment.co.za",
              sub: "Reply within 1 business day",
              href: "mailto:info@sahvehinvestment.co.za",
            },
            {
              icon: (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              ),
              label: "Hours",
              value: "Mon – Fri, 9am – 6pm",
              sub: "SAST · South Africa",
              href: null,
            },
          ].map(({ icon, label, value, sub, href }) => (
            <li key={label}>
              <div className="h-full bg-white border border-[#ede5d8] rounded-2xl px-7 py-7 flex flex-col gap-4">
                <span className="w-11 h-11 rounded-full bg-[#f0e8da] flex items-center justify-center text-[#7a5c2e]">
                  {icon}
                </span>
                <div>
                  <p
                    className="text-[0.62rem] tracking-[0.22em] uppercase text-[#9c8060] mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-[1rem] text-[#2d2416] hover:text-[#7a5c2e] transition-colors break-all"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                      }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      className="text-[#2d2416]"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                      }}
                    >
                      {value}
                    </p>
                  )}
                  <p
                    className="text-[0.75rem] text-[#9c8060] mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {sub}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Form + FAQ ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div>
            <p
              className="text-[0.65rem] tracking-[0.3em] uppercase text-[#9c8060] mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Send a Message
            </p>
            <h2
              className="text-[2rem] sm:text-[2.4rem] text-[#2d2416] mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
            >
              We&apos;d Love to Hear
              <br />
              From You
            </h2>
            <div className="bg-white border border-[#ede5d8] rounded-2xl p-8">
              <ContactForm />
            </div>
          </div>

          {/* FAQ */}
          <div>
            <p
              className="text-[0.65rem] tracking-[0.3em] uppercase text-[#9c8060] mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              FAQ
            </p>
            <h2
              className="text-[2rem] sm:text-[2.4rem] text-[#2d2416] mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
            >
              Frequently Asked
              <br />
              Questions
            </h2>
            <div className="bg-white border border-[#ede5d8] rounded-2xl px-8 py-2">
              {faqs.map((faq) => (
                <FaqItem
                  key={faq.q}
                  q={faq.q}
                  a={faq.a}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="mx-5 sm:mx-8 lg:mx-12 mb-20 rounded-3xl overflow-hidden">
        <div
          className="relative px-8 sm:px-14 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          style={{
            background:
              "linear-gradient(135deg, #2d2416 0%, #4a3520 60%, #7a5c2e 100%)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #f5ede0 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-lg">
            <p
              className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c8a96a] mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Still have questions?
            </p>
            <h2
              className="text-[1.8rem] sm:text-[2.2rem] leading-tight text-[#f5ede0] mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
            >
              Not sure which supplement is right for you?
            </h2>
            <p
              className="text-[0.85rem] leading-relaxed text-[#d4c4a8]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Our wellness experts offer free, personalised guidance to help you
              find the perfect formula for your body and goals.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="https://wa.me/27827642367"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#f5ede0] text-[#2d2416]
                text-[0.72rem] tracking-[0.18em] uppercase font-semibold transition-all duration-300
                hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/products"
              className="flex items-center justify-center px-7 py-3.5 rounded-full border border-white/20 text-[#f5ede0]
                text-[0.72rem] tracking-[0.18em] uppercase font-medium transition-all duration-300 hover:bg-white/10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
