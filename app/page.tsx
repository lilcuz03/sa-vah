import type { Metadata } from "next";
import React from "react";
import HeroSlider from "@/components/swiper";
import ProductCard from "@/components/productCard";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import blogs from "@/app/data/blogs";

export const metadata: Metadata = {
  title: "Natural Wellness, Simplified | Sah Veh",
  description:
    "Shop premium organic plant-based supplements crafted to support energy, immunity, and everyday vitality. Pure ingredients, transparent sourcing, and science-backed formulas.",
  keywords: [
    "plant-based supplements",
    "organic wellness",
    "natural health",
    "immunity support",
    "energy supplements",
    "holistic nutrition",
    "South Africa supplements",
  ],
  openGraph: {
    title: "Natural Wellness, Simplified | Sah Veh",
    description:
      "Premium plant-based supplements crafted to support energy, immunity, and everyday vitality — made with pure organic ingredients.",
    type: "website",
    locale: "en_ZA",
    siteName: "Sah Veh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Wellness, Simplified | Sah Veh",
    description:
      "Premium plant-based supplements crafted to support energy, immunity, and everyday vitality.",
  },
  robots: { index: true, follow: true },
};

/* ─────────────────────────────────────────
   Reusable primitives
───────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#8aab8a] mb-4">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a2e1a] leading-[1.1]">
      {children}
    </h2>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */

const Home = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-dm        { font-family: 'DM Sans', sans-serif; }

        .grain::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 999;
          opacity: 0.028;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 256px 256px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .reveal { animation: fadeUp 0.7s ease forwards; }
        .reveal-d1 { animation-delay: 0.1s; opacity: 0; }
        .reveal-d2 { animation-delay: 0.22s; opacity: 0; }
        .reveal-d3 { animation-delay: 0.34s; opacity: 0; }
        .reveal-d4 { animation-delay: 0.46s; opacity: 0; }

        .link-underline {
          background-image: linear-gradient(currentColor, currentColor);
          background-size: 0% 1px;
          background-repeat: no-repeat;
          background-position: 0 100%;
          transition: background-size 0.3s ease;
        }
        .link-underline:hover { background-size: 100% 1px; }
      `}</style>

      <main className="grain bg-[#f7f3ec] min-h-screen w-full font-dm overflow-x-hidden">
        {/* ── WhatsApp FAB ─────────────────────────────────────── */}
        <a
          href="https://wa.me/27827642367"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-6 right-6 z-50 group"
        >
          <span className="absolute inset-0 rounded-full bg-green-400/25 animate-ping" />
          <div className="relative w-[52px] h-[52px] bg-[#1a2e1a] rounded-full flex items-center justify-center shadow-xl shadow-[#1a2e1a]/30 group-hover:scale-110 group-hover:bg-[#b8975a] transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </a>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          className="relative min-h-screen overflow-hidden"
          aria-label="Hero"
        >
          <div className="absolute inset-0">
            <HeroSlider />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f0d]/75 via-[#0d1f0d]/50 to-[#0d1f0d]/80" />

          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-8 pb-16">
            <p className="reveal reveal-d1 font-dm text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-[#b8975a] mb-8 font-medium">
              Organic · Plant-Based · South Africa
            </p>
            <h1 className="reveal reveal-d2 font-cormorant text-[clamp(3rem,10vw,8rem)] font-bold text-[#f7f3ec] leading-[0.95] mb-6 max-w-5xl">
              Natural Wellness,{" "}
              <em
                className="italic text-[#b8975a]"
                style={{ fontStyle: "italic" }}
              >
                Simplified
              </em>
            </h1>
            <p className="reveal reveal-d3 font-dm font-light text-[#f7f3ec]/70 max-w-md text-base sm:text-lg leading-relaxed mb-12">
              Premium plant-based supplements crafted to support energy,
              immunity, and everyday vitality.
            </p>
            <div className="reveal reveal-d4 flex flex-wrap gap-4 justify-center">
              <Link
                href="/products"
                className="px-9 py-3.5 bg-[#b8975a] text-[#1a2e1a] text-sm font-semibold tracking-wide rounded-full hover:bg-[#caa96a] transition-colors duration-300 shadow-lg shadow-[#b8975a]/30"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="px-9 py-3.5 border border-[#f7f3ec]/40 text-[#f7f3ec] text-sm font-medium tracking-wide rounded-full backdrop-blur-sm hover:border-[#f7f3ec]/70 hover:bg-[#f7f3ec]/10 transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
            <span className="font-dm text-[10px] tracking-[0.2em] uppercase text-[#f7f3ec]">
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-[#f7f3ec] to-transparent" />
          </div>
        </section>

        {/* ── PHILOSOPHY PILLARS ───────────────────────────────── */}
        <section
          aria-label="Brand philosophy"
          className="bg-[#1a2e1a] py-14 px-4 sm:px-8"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-0 sm:divide-x divide-[#8aab8a]/20">
            {[
              {
                num: "01",
                title: "Pure Ingredients",
                body: "Every formula starts with a single question: would nature approve? No fillers, no synthetics.",
              },
              {
                num: "02",
                title: "Science-Backed",
                body: "Traditional plant wisdom, validated by modern research. Efficacy you can measure.",
              },
              {
                num: "03",
                title: "Radically Transparent",
                body: "Full ingredient disclosure, sourcing origins, and third-party testing. Always.",
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="px-8 py-10 sm:py-6 first:pl-0 last:pr-0"
              >
                <p className="font-cormorant text-[#b8975a] text-5xl font-bold leading-none mb-4">
                  {pillar.num}
                </p>
                <h3 className="font-cormorant text-[#f7f3ec] text-2xl font-semibold mb-3">
                  {pillar.title}
                </h3>
                <p className="font-dm text-[#8aab8a] text-sm leading-relaxed font-light">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRODUCTS ─────────────────────────────────────────── */}
        <section
          id="products"
          aria-labelledby="products-heading"
          className="py-24 sm:py-32 px-4 sm:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
              <div>
                <SectionLabel>Our Range</SectionLabel>
                <SectionHeading>
                  Wellness <em className="italic text-[#8aab8a]">Essentials</em>
                </SectionHeading>
              </div>
              <Link
                href="/products"
                className="link-underline self-start sm:self-auto font-dm text-sm text-[#1a2e1a] font-medium pb-0.5"
              >
                View all products →
              </Link>
            </div>

            {/* FIX: products typed as Product[] from lib/products — matches ProductCard's import */}
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              role="list"
            >
              {products.map((product) => (
                <li
                  key={product.id}
                  className="group"
                >
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── BRAND STATEMENT ──────────────────────────────────── */}
        <section
          aria-label="Brand statement"
          className="relative overflow-hidden bg-[#1a2e1a] py-24 sm:py-36 px-4 sm:px-8"
        >
          <span
            aria-hidden="true"
            className="absolute -right-6 top-1/2 -translate-y-1/2 font-cormorant text-[20rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none"
          >
            W
          </span>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-[#b8975a] mb-8">
              Our Philosophy
            </p>
            <blockquote className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#f7f3ec] leading-[1.15] mb-10">
              &quot;We believe wellness shouldn&apos;t be complicated — just{" "}
              <em className="italic text-[#b8975a]">honest ingredients</em>,
              done right.&quot;
            </blockquote>
            <div className="w-12 h-px bg-[#b8975a] mx-auto mb-6" />
            <p className="font-dm text-sm text-[#8aab8a] tracking-widest uppercase">
              Founder, Sah Veh
            </p>
          </div>
        </section>

        {/* ── INGREDIENT HIGHLIGHTS ────────────────────────────── */}
        <section
          aria-label="Key ingredients"
          className="py-24 sm:py-32 px-4 sm:px-8 bg-[#f7f3ec]"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel>What&apos;s Inside</SectionLabel>
              <SectionHeading>
                Ingredients that{" "}
                <em className="italic text-[#8aab8a]">matter</em>
              </SectionHeading>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: "🌿",
                  name: "Ashwagandha",
                  benefit: "Stress & energy balance",
                },
                {
                  icon: "🍄",
                  name: "Lion's Mane",
                  benefit: "Cognitive clarity",
                },
                { icon: "🌱", name: "Moringa", benefit: "Nutrient density" },
                {
                  icon: "🫐",
                  name: "Elderberry",
                  benefit: "Immune resilience",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="group bg-white border border-[#e8e0d0] rounded-2xl p-6 sm:p-8 hover:border-[#b8975a]/50 hover:shadow-lg hover:shadow-[#b8975a]/10 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-cormorant text-xl font-semibold text-[#1a2e1a] mb-2">
                    {item.name}
                  </h3>
                  <p className="font-dm text-xs text-[#8aab8a] leading-relaxed">
                    {item.benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG ─────────────────────────────────────────────── */}
        <section
          id="blog"
          aria-labelledby="blog-heading"
          className="py-24 sm:py-32 px-4 sm:px-8 bg-[#f0ebe0]"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
              <div>
                <SectionLabel>From the Journal</SectionLabel>
                <h2
                  id="blog-heading"
                  className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a2e1a] leading-[1.1]"
                >
                  Wellness <em className="italic text-[#8aab8a]">Reads</em>
                </h2>
              </div>
              <Link
                href="/blog"
                className="link-underline self-start sm:self-auto font-dm text-sm text-[#1a2e1a] font-medium pb-0.5"
              >
                All articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogs.slice(0, 6).map((blog, i) => (
                <article
                  key={blog.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#e8e0d0] hover:border-[#b8975a]/40 hover:shadow-xl hover:shadow-[#1a2e1a]/8 transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden bg-[#f0ebe0]">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      priority={i < 3}
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1a]/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-7">
                    <p className="font-dm text-[10px] tracking-[0.2em] uppercase text-[#b8975a] mb-3 font-medium">
                      {blog.date} · {blog.readTime}
                    </p>
                    <h3 className="font-cormorant text-xl font-semibold text-[#1a2e1a] mb-3 leading-snug group-hover:text-[#3b6d11] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="font-dm text-sm text-[#6b6558] leading-relaxed mb-6 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="link-underline font-dm text-xs font-semibold tracking-[0.12em] uppercase text-[#1a2e1a] pb-0.5"
                      aria-label={`Read: ${blog.title}`}
                    >
                      Read Article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER ───────────────────────────────────────── */}
        <section
          aria-label="Newsletter signup"
          className="py-24 sm:py-32 px-4 sm:px-8 bg-[#1a2e1a]"
        >
          <div className="max-w-2xl mx-auto text-center">
            <SectionLabel>Stay Connected</SectionLabel>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#f7f3ec] mb-5">
              Join the Wellness Circle
            </h2>
            <p className="font-dm font-light text-[#8aab8a] text-base leading-relaxed mb-10">
              Receive exclusive formulas, seasonal wellness guides, and early
              access to new products — delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-[#f7f3ec] placeholder-[#8aab8a] text-sm rounded-full focus:outline-none focus:border-[#b8975a] transition-colors"
              />
              <button
                type="button"
                className="px-8 py-3.5 bg-[#b8975a] text-[#1a2e1a] text-sm font-semibold rounded-full hover:bg-[#caa96a] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            <p className="font-dm text-[11px] text-[#8aab8a]/60 mt-4 tracking-wide">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
