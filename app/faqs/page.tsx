"use client";

import { useState } from "react";
import Link from "next/link";

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const categories = [
  {
    id: "ordering",
    label: "Ordering & Shipping",
    icon: (
      <svg
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
    faqs: [
      {
        q: "What are your shipping times?",
        a: "We process and ship all orders within 1–2 business days. Standard domestic shipping takes 3–5 business days, while express shipping delivers within 1–2 business days. International orders typically take 7–14 business days depending on the destination.",
      },
      {
        q: "How do I place an order?",
        a: "The simplest way to order is via WhatsApp — just tap the 'Order Now' button on any product page and send us a message. We'll confirm availability, process your order, and arrange delivery directly.",
      },
      {
        q: "Can I cancel or modify my order?",
        a: "Yes — you can cancel or modify your order within 24 hours of placing it. Please contact our support team via WhatsApp as soon as possible with your order details.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship to over 50 countries worldwide. Please note that international shipping timelines and customs fees vary by destination. We'll confirm exact costs at the time of your order.",
      },
      {
        q: "How will I know when my order has shipped?",
        a: "Once your order has been dispatched, we'll send you a confirmation message via WhatsApp with your tracking details and estimated delivery window.",
      },
    ],
  },
  {
    id: "products",
    label: "Products & Ingredients",
    icon: (
      <svg
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    ),
    faqs: [
      {
        q: "Are your products 100% organic?",
        a: "Yes. All Sah Veh supplements are made exclusively with certified organic ingredients. We source from ethical farms and never use artificial additives, fillers, or synthetic compounds of any kind.",
      },
      {
        q: "Are your products vegan-friendly?",
        a: "Absolutely — every product in our range is 100% plant-based and vegan. We never use animal products or by-products in any of our formulations.",
      },
      {
        q: "Are your supplements third-party tested?",
        a: "Yes. Every batch is independently tested by a third-party laboratory for purity, potency, and safety before it reaches you. We make quality non-negotiable.",
      },
      {
        q: "How should I store my supplements?",
        a: "Store your supplements in a cool, dry place away from direct sunlight. Keep containers tightly sealed and out of reach of children. Most products have a shelf life of 2 years when stored correctly.",
      },
      {
        q: "Do your products contain allergens?",
        a: "Our products are free from common allergens including gluten, dairy, soy, and nuts. However, we always recommend reading the full ingredient list on your product packaging, particularly if you have specific sensitivities.",
      },
    ],
  },
  {
    id: "wellness",
    label: "Wellness & Usage",
    icon: (
      <svg
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
    faqs: [
      {
        q: "Can I take multiple supplements together?",
        a: "Most of our supplements are designed to complement one another and can be taken together safely. That said, we always recommend reaching out to our wellness team or your healthcare provider for a personalised regimen tailored to your needs.",
      },
      {
        q: "How long does it take to see results?",
        a: "Results vary depending on the supplement and your individual body. Most customers begin noticing meaningful changes within 2–4 weeks of consistent daily use. For best results, we recommend taking your supplements at the same time each day.",
      },
      {
        q: "How do I know which supplement is right for me?",
        a: "Our wellness experts are available to guide you at no charge. Simply reach out via WhatsApp or the contact form and describe your health goals — we'll recommend the most suitable formula for your needs.",
      },
      {
        q: "Are your supplements safe during pregnancy or breastfeeding?",
        a: "We recommend consulting your healthcare provider before using any supplement during pregnancy or breastfeeding. While our products are made from natural botanicals, individual medical circumstances vary.",
      },
      {
        q: "Can children take Sah Veh supplements?",
        a: "Our supplements are formulated for adults. If you're considering supplementation for a child, please consult a paediatrician before proceeding.",
      },
    ],
  },
  {
    id: "returns",
    label: "Returns & Refunds",
    icon: (
      <svg
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
        />
      </svg>
    ),
    faqs: [
      {
        q: "Do you offer refunds?",
        a: "Yes — we offer a 30-day satisfaction guarantee on all purchases. If you're not completely satisfied for any reason, contact us within 30 days of receiving your order for a full, no-questions-asked refund.",
      },
      {
        q: "How do I request a refund?",
        a: "Simply reach out to our team via WhatsApp or email at info@sahvehinvestment.co.za with your order details and reason for the return. We'll process your refund promptly.",
      },
      {
        q: "Do I need to return the product to get a refund?",
        a: "In most cases, no. We trust our customers. For larger orders or specific circumstances, we may request the product be returned — but our team will guide you through the process.",
      },
    ],
  },
  {
    id: "business",
    label: "Wholesale & Partnerships",
    icon: (
      <svg
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
    faqs: [
      {
        q: "Do you offer wholesale or bulk pricing?",
        a: "Yes. We offer competitive wholesale pricing for retailers, wellness practitioners, spas, and bulk buyers. Contact our partnerships team via WhatsApp or email to discuss your requirements.",
      },
      {
        q: "Can I become a Sah Veh stockist?",
        a: "We'd love to hear from you. If you run a wellness store, pharmacy, or health-focused retail space and would like to stock Sah Veh products, please reach out to us directly and we'll share our wholesale catalogue and terms.",
      },
      {
        q: "Do you offer affiliate or referral programmes?",
        a: "We're currently developing our affiliate programme. If you're a wellness influencer, practitioner, or content creator interested in partnering with Sah Veh, get in touch — we'd love to connect.",
      },
    ],
  },
];

// ─── Accordion Item ───────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#ede5d8] last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span
          className="text-[#2d2416] group-hover:text-[#7a5c2e] transition-colors duration-200 leading-snug"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "1.05rem",
          }}
        >
          {q}
        </span>
        <span
          className={`flex-shrink-0 mt-0.5 w-7 h-7 rounded-full border border-[#ede5d8] flex items-center justify-center text-[#7a5c2e] transition-all duration-300 ${open ? "rotate-45 bg-[#f0e8da] border-[#c8b89a]" : ""}`}
          aria-hidden="true"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path
              d="M12 5v14M5 12h14"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-60 pb-5" : "max-h-0"}`}
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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState("ordering");
  const current = categories.find((c) => c.id === activeCategory)!;
  const totalFaqs = categories.reduce((acc, c) => acc + c.faqs.length, 0);

  return (
    <main className="bg-[#faf7f2] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 px-5 sm:px-8 lg:px-12 overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none opacity-[0.07]"
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
                FAQs
              </li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <p
              className="text-[0.68rem] tracking-[0.38em] uppercase text-[#9c8060] mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {totalFaqs} Questions Answered
            </p>
            <h1
              className="text-[3rem] sm:text-[4rem] leading-[1.0] text-[#2d2416] mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
            >
              Frequently Asked
              <br />
              <em className="italic text-[#7a5c2e]">Questions</em>
            </h1>
            <p
              className="text-[0.93rem] leading-[1.85] text-[#6b5c46] max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Everything you need to know about our products, ordering, wellness
              guidance, and more. Can&apos;t find what you&apos;re looking for?{" "}
              <Link
                href="/contact"
                className="text-[#7a5c2e] underline underline-offset-2 hover:text-[#2d2416] transition-colors"
              >
                Contact our team
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Category Tabs + Accordion ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16 items-start">
          {/* Sidebar categories */}
          <nav
            aria-label="FAQ categories"
            className="lg:sticky lg:top-28"
          >
            <p
              className="text-[0.62rem] tracking-[0.28em] uppercase text-[#9c8060] mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Categories
            </p>
            <ul
              className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0"
              role="list"
            >
              {categories.map((cat) => {
                const isActive = cat.id === activeCategory;
                return (
                  <li
                    key={cat.id}
                    className="flex-shrink-0"
                  >
                    <button
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200
                        ${
                          isActive
                            ? "bg-[#2d2416] text-[#f5ede0] shadow-[0_4px_16px_rgba(45,36,22,0.18)]"
                            : "bg-white border border-[#ede5d8] text-[#4a3f32] hover:border-[#c8b89a] hover:text-[#7a5c2e]"
                        }`}
                    >
                      <span
                        className={
                          isActive ? "text-[#c8a96a]" : "text-[#9c8060]"
                        }
                      >
                        {cat.icon}
                      </span>
                      <span
                        className="text-[0.78rem] leading-snug"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: isActive ? 600 : 400,
                        }}
                      >
                        {cat.label}
                      </span>
                      <span
                        className={`ml-auto text-[0.65rem] px-2 py-0.5 rounded-full ${isActive ? "bg-white/15 text-[#f5ede0]" : "bg-[#f0e8da] text-[#9c8060]"}`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {cat.faqs.length}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Contact nudge */}
            <div className="hidden lg:block mt-8 p-5 rounded-2xl bg-[#f0e8da] border border-[#ede5d8]">
              <p
                className="text-[0.75rem] text-[#2d2416] mb-1 font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Still have questions?
              </p>
              <p
                className="text-[0.75rem] text-[#7a6650] mb-4 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our wellness team is available Mon–Fri, 9am–6pm SAST.
              </p>
              <a
                href="https://wa.me/27827642367"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#2d2416] text-[#f5ede0]
                  text-[0.68rem] tracking-[0.15em] uppercase font-medium transition-all duration-200
                  hover:bg-[#7a5c2e]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat With Us
              </a>
            </div>
          </nav>

          {/* FAQ Accordion */}
          <div>
            {/* Active category header */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#ede5d8]">
              <span className="w-10 h-10 rounded-full bg-[#f0e8da] flex items-center justify-center text-[#7a5c2e]">
                {current.icon}
              </span>
              <div>
                <h2
                  className="text-[1.5rem] text-[#2d2416]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                  }}
                >
                  {current.label}
                </h2>
                <p
                  className="text-[0.72rem] text-[#9c8060]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {current.faqs.length} questions
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#ede5d8] rounded-2xl px-8 py-2">
              {current.faqs.map((faq) => (
                <FaqItem
                  key={faq.q}
                  q={faq.q}
                  a={faq.a}
                />
              ))}
            </div>

            {/* Mobile contact nudge */}
            <div className="lg:hidden mt-6 p-5 rounded-2xl bg-[#f0e8da] border border-[#ede5d8] flex items-center justify-between gap-4">
              <p
                className="text-[0.78rem] text-[#4a3f32] leading-snug"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Still need help? Our team is here for you.
              </p>
              <a
                href="https://wa.me/27827642367"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2d2416] text-[#f5ede0]
                  text-[0.68rem] tracking-[0.15em] uppercase font-medium hover:bg-[#7a5c2e] transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="mx-5 sm:mx-8 lg:mx-12 mb-20 rounded-3xl overflow-hidden">
        <div
          className="relative px-8 sm:px-16 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          style={{
            background:
              "linear-gradient(135deg, #2d2416 0%, #4a3520 60%, #7a5c2e 100%)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
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
              Personalised Guidance
            </p>
            <h2
              className="text-[1.8rem] sm:text-[2.3rem] leading-tight text-[#f5ede0] mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
            >
              Didn&apos;t find your answer?
            </h2>
            <p
              className="text-[0.85rem] leading-relaxed text-[#d4c4a8]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Our wellness team is available Monday to Friday, 9am–6pm SAST. We
              typically respond within a few hours.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="https://wa.me/27827642367"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#f5ede0] text-[#2d2416]
                text-[0.72rem] tracking-[0.18em] uppercase font-semibold transition-all duration-300
                hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center px-7 py-3.5 rounded-full border border-white/20 text-[#f5ede0]
                text-[0.72rem] tracking-[0.18em] uppercase font-medium transition-all duration-300 hover:bg-white/10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
