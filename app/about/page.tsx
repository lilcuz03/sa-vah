import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// ─── SEO ──────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "About Us — Our Story & Mission | Sah Veh",
  description:
    "Learn about Sah Veh's story, mission, and values. We craft premium plant-based supplements rooted in African botanical wisdom and modern science — empowering your mind, body, and spirit naturally.",
  keywords: [
    "about Sah Veh",
    "holistic wellness South Africa",
    "natural supplements brand",
    "organic wellness mission",
    "plant-based health South Africa",
    "ethical supplements",
  ],
  openGraph: {
    title: "About Sah Veh — Rooted in Nature, Guided by Science",
    description:
      "We craft premium plant-based supplements rooted in African botanical wisdom and modern science.",
    url: "https://sa-vah.vercel.app/about",
    siteName: "Sah Veh",
    type: "website",
    images: [
      {
        url: "https://sa-vah.vercel.app/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Sah Veh — Holistic Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sah Veh — Rooted in Nature, Guided by Science",
    description:
      "Premium plant-based supplements rooted in African botanical wisdom and modern science.",
  },
  alternates: {
    canonical: "https://sa-vah.vercel.app/about",
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sah Veh",
  url: "https://sa-vah.vercel.app",
  logo: "https://sa-vah.vercel.app/logo.png",
  description:
    "Sah Veh is a South African holistic wellness brand crafting premium plant-based supplements rooted in African botanical wisdom and modern nutritional science.",
  foundingLocation: { "@type": "Place", name: "South Africa" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+27827642367",
    email: "info@sahvehinvestment.co.za",
    contactType: "Customer Service",
    areaServed: "ZA",
  },
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
    "https://linkedin.com",
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const values = [
  {
    label: "Pure & Natural",
    body: "We source only the finest certified organic botanicals — free from artificial additives, fillers, and harmful chemicals. What goes into our products is exactly what nature intended.",
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    ),
  },
  {
    label: "Holistic Wellness",
    body: "True health encompasses the whole self — mind, body, and spirit. Every formula we create is designed with this philosophy at its core, supporting you at every dimension.",
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
  },
  {
    label: "Sustainability",
    body: "We partner with ethical growers and fair-trade cooperatives who share our deep respect for the earth. Sustainable sourcing isn't a feature — it's a foundation.",
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.249 2.249 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643"
        />
      </svg>
    ),
  },
  {
    label: "Rooted in Africa",
    body: "Africa's botanical heritage is ancient, vast, and largely untold. We are proud to bring indigenous wellness knowledge — like Ndolwani and Moringa — to the world with integrity.",
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
  },
];

const pillars = [
  { number: "100%", label: "Organic Ingredients" },
  { number: "6+", label: "Signature Formulas" },
  { number: "3rd", label: "Party Tested" },
  { number: "30", label: "Day Satisfaction Guarantee" },
];

const whyUs = [
  {
    title: "Premium Quality",
    body: "Every batch is independently tested for purity, potency, and safety before it reaches you.",
  },
  {
    title: "Ethically Sourced",
    body: "We work directly with sustainable farms and fair-trade cooperatives across Africa and beyond.",
  },
  {
    title: "Expert Formulated",
    body: "Our products are developed alongside certified herbalists, nutritionists, and wellness practitioners.",
  },
  {
    title: "Satisfaction Guaranteed",
    body: "If you're not fully satisfied, we offer a no-questions-asked full refund within 30 days.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#faf7f2] min-h-screen">
        {/* ── Hero ── */}
        <section className="relative pt-36 pb-24 px-5 sm:px-8 lg:px-12 overflow-hidden">
          {/* Decorative glow */}
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.07]"
            style={{
              background:
                "radial-gradient(circle, #7a5c2e 0%, transparent 70%)",
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
                  About
                </li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p
                  className="text-[0.68rem] tracking-[0.38em] uppercase text-[#9c8060] mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Our Story
                </p>
                <h1
                  className="text-[3rem] sm:text-[4rem] leading-[1.0] text-[#2d2416] mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                  }}
                >
                  Rooted in Nature,
                  <br />
                  <em className="italic text-[#7a5c2e]">Guided by Science</em>
                </h1>
                <p
                  className="text-[0.95rem] leading-[1.85] text-[#6b5c46] max-w-lg"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Sah Veh was born from a deep belief — that the earth already
                  holds everything we need to thrive. We exist to bridge ancient
                  botanical wisdom with modern nutritional science, making
                  premium natural wellness accessible to every body.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {pillars.map(({ number, label }) => (
                  <div
                    key={label}
                    className="bg-white border border-[#ede5d8] rounded-2xl px-7 py-8"
                  >
                    <p
                      className="text-[2.6rem] leading-none text-[#2d2416] mb-2"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 600,
                      }}
                    >
                      {number}
                    </p>
                    <p
                      className="text-[0.72rem] tracking-[0.15em] uppercase text-[#9c8060] leading-snug"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Mission ── */}
        <section
          className="relative overflow-hidden"
          aria-labelledby="mission-heading"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(160deg, #2d2416 0%, #3a2d18 60%, #4a3520 100%)",
            }}
            aria-hidden="true"
          />
          {/* Glow */}
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10"
            style={{
              background:
                "radial-gradient(circle, #c8a96a 0%, transparent 70%)",
              transform: "translate(30%, 30%)",
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24">
            <div className="max-w-3xl mx-auto text-center">
              <p
                className="text-[0.65rem] tracking-[0.38em] uppercase text-[#c8a96a] mb-5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our Mission
              </p>
              <h2
                id="mission-heading"
                className="text-[2.4rem] sm:text-[3.2rem] leading-[1.1] text-[#f5ede0] mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                &quot;True wellness comes from nurturing the whole self — mind,
                body, and spirit.&quot;
              </h2>
              <p
                className="text-[0.9rem] leading-[1.9] text-[#c4aa88] max-w-2xl mx-auto mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our journey began with a simple vision: to make premium natural
                supplements accessible to everyone seeking a healthier, more
                vibrant life. We partner with ethical farmers and artisans who
                share our commitment to quality and sustainability. Every
                product is crafted with intention — using only the purest
                organic ingredients, backed by traditional wisdom and modern
                science.
              </p>
              <div
                className="w-12 h-px bg-[#c8a96a] mx-auto"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24"
          aria-labelledby="values-heading"
        >
          <div className="text-center mb-16">
            <p
              className="text-[0.65rem] tracking-[0.35em] uppercase text-[#9c8060] mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              What We Stand For
            </p>
            <h2
              id="values-heading"
              className="text-[2.2rem] sm:text-[2.8rem] text-[#2d2416]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
            >
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ label, body, icon }) => (
              <article
                key={label}
                className="group bg-white border border-[#ede5d8] rounded-2xl px-8 py-9 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(120,100,60,0.10)] hover:-translate-y-0.5"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#f0e8da] text-[#7a5c2e] mb-5">
                  {icon}
                </span>
                <h3
                  className="text-[1.3rem] text-[#2d2416] mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                  }}
                >
                  {label}
                </h3>
                <p
                  className="text-[0.85rem] leading-[1.8] text-[#7a6650]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section
          className="bg-[#f0e8da] border-y border-[#ede5d8]"
          aria-labelledby="why-heading"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p
                  className="text-[0.65rem] tracking-[0.35em] uppercase text-[#9c8060] mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  The Sah Veh Difference
                </p>
                <h2
                  id="why-heading"
                  className="text-[2.2rem] sm:text-[2.8rem] leading-tight text-[#2d2416] mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                  }}
                >
                  Why Choose
                  <br />
                  <em className="italic text-[#7a5c2e]">Sah Veh?</em>
                </h2>
                <p
                  className="text-[0.88rem] leading-[1.8] text-[#6b5c46] max-w-md"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  In a market full of shortcuts and synthetics, we choose the
                  longer, harder, better path — because your health deserves
                  nothing less.
                </p>
              </div>

              <ul
                className="flex flex-col gap-5"
                role="list"
              >
                {whyUs.map(({ title, body }, i) => (
                  <li
                    key={title}
                    className="flex items-start gap-5 bg-white rounded-2xl border border-[#ede5d8] px-6 py-5"
                  >
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2d2416] text-[#f5ede0] flex items-center justify-center text-[0.72rem] font-semibold"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className="text-[1rem] text-[#2d2416] mb-1"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 600,
                        }}
                      >
                        {title}
                      </h3>
                      <p
                        className="text-[0.82rem] leading-relaxed text-[#7a6650]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24">
          <div
            className="relative rounded-3xl overflow-hidden px-8 sm:px-16 py-16 sm:py-20 text-center"
            style={{
              background:
                "linear-gradient(135deg, #2d2416 0%, #4a3520 60%, #7a5c2e 100%)",
            }}
          >
            {/* Decorative ring */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10"
              style={{
                background:
                  "radial-gradient(circle, #f5ede0 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative max-w-xl mx-auto">
              <p
                className="text-[0.65rem] tracking-[0.38em] uppercase text-[#c8a96a] mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Begin Your Journey
              </p>
              <h2
                className="text-[2rem] sm:text-[2.8rem] leading-tight text-[#f5ede0] mb-5"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                Ready to start your wellness journey?
              </h2>
              <p
                className="text-[0.88rem] leading-relaxed text-[#c4aa88] mb-10"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Explore our collection of premium supplements designed to
                support your natural vitality, energy, and well-being — every
                single day.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/products"
                  className="px-9 py-4 rounded-full bg-[#f5ede0] text-[#2d2416] text-[0.75rem] tracking-[0.18em] uppercase font-semibold
                    transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Shop Our Products
                </Link>
                <a
                  href="https://wa.me/27827642367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-9 py-4 rounded-full border border-white/20 text-[#f5ede0]
                    text-[0.75rem] tracking-[0.18em] uppercase font-medium transition-all duration-300
                    hover:bg-white/10"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat With Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
