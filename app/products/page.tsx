import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import products from "../../lib/products";
// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Natural Wellness Supplements | Sah Veh",
  description:
    "Shop Sah Veh's premium plant-based supplements — Ashwagandha, Moringa, Hibiscus Tea, Aloe Colon Cleanse, Kombucha Gummies and more. 100% organic, third-party tested. Order via WhatsApp.",
  keywords: [
    "natural supplements South Africa",
    "plant-based wellness",
    "organic supplements",
    "ashwagandha South Africa",
    "moringa powder",
    "hibiscus tea",
    "holistic health",
    "Sah Veh products",
  ],
  openGraph: {
    title: "Natural Wellness Supplements | Sah Veh",
    description:
      "Premium plant-based supplements crafted to support your energy, immunity, and everyday vitality.",
    url: "https://sa-vah.vercel.app/products",
    siteName: "Sah Veh",
    type: "website",
    images: [
      {
        url: "https://sa-vah.vercel.app/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "Sah Veh Natural Wellness Supplements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Wellness Supplements | Sah Veh",
    description:
      "Premium plant-based supplements crafted to support your energy, immunity, and everyday vitality.",
    images: ["https://sa-vah.vercel.app/og-products.jpg"],
  },
  alternates: {
    canonical: "https://sa-vah.vercel.app/products",
  },
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sah Veh Wellness Supplements",
  description:
    "Premium plant-based supplements by Sah Veh — organic, third-party tested, and crafted for holistic wellbeing.",
  url: "https://sa-vah.vercel.app/products",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Aloe Colon Cleanse Granules",
        description: "Natural colon cleanse and digestive detox support",
        offers: {
          "@type": "Offer",
          priceCurrency: "ZAR",
          price: "120.00",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Sah Veh" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Ashwagandha",
        description: "Stress relief and mental wellness support",
        offers: {
          "@type": "Offer",
          priceCurrency: "ZAR",
          price: "90.00",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Sah Veh" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Hibiscus Tea",
        description: "Heart health and blood pressure support",
        offers: {
          "@type": "Offer",
          priceCurrency: "ZAR",
          price: "70.00",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Sah Veh" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Kombucha Gummies",
        description: "Probiotic gut health and digestion support",
        offers: {
          "@type": "Offer",
          priceCurrency: "ZAR",
          price: "80.00",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Sah Veh" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Product",
        name: "Moringa Raw & Organic",
        description: "Superfood nutrition and energy boost",
        offers: {
          "@type": "Offer",
          priceCurrency: "ZAR",
          price: "60.00",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Sah Veh" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Product",
        name: "Ndolwani Gummies",
        description: "Relaxation and deep sleep support",
        offers: {
          "@type": "Offer",
          priceCurrency: "ZAR",
          price: "120.00",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Sah Veh" },
        },
      },
    },
  ],
};

// ─── Product Data ─────────────────────────────────────────────────────────────

const trust = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
    title: "100% Organic",
    body: "Certified organic ingredients — no fillers, no synthetics, no compromises.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1 1 .03 2.798-1.442 2.798H4.24c-1.47 0-2.441-1.798-1.442-2.798L4.2 15.3"
        />
      </svg>
    ),
    title: "Third-Party Tested",
    body: "Every batch independently verified for purity, potency, and safety.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
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
    title: "Direct Delivery",
    body: "Order via WhatsApp and receive your supplements delivered to your door.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
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
    title: "Wellness Guidance",
    body: "Our experts help you choose the right supplements for your unique needs.",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────
export default function ProductsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#faf7f2] min-h-screen">
        {/* ── Hero Banner ── */}
        <section className="relative pt-36 pb-20 px-5 sm:px-8 lg:px-12 overflow-hidden">
          {/* background texture ring */}
          <div
            className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-[0.06] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #7a5c2e 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto">
            {/* breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8"
            >
              <ol
                className="flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase text-[#9c8060]"
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
                  Products
                </li>
              </ol>
            </nav>

            <div className="max-w-2xl">
              <p
                className="text-[0.7rem] tracking-[0.35em] uppercase text-[#9c8060] mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Plant-Based · Organic · Tested
              </p>
              <h1
                className="text-[2.8rem] sm:text-[3.8rem] leading-[1.05] text-[#2d2416] mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                Wellness,
                <br />
                <em className="italic text-[#7a5c2e]">Rooted in Nature</em>
              </h1>
              <p
                className="text-[1rem] leading-relaxed text-[#6b5c46] max-w-lg"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Every Sah Veh supplement is formulated from pure organic
                botanicals — harvested responsibly, tested rigorously, and
                crafted to support your body&apos;s natural rhythm.
              </p>
            </div>
          </div>
        </section>

        {/* ── Trust Bar ── */}
        <section
          aria-label="Our promises"
          className="border-y border-[#e8ddd0] bg-[#f5efe6]"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10">
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {trust.map(({ icon, title, body }) => (
                <li
                  key={title}
                  className="flex flex-col gap-3"
                >
                  <span className="text-[#7a5c2e]">{icon}</span>
                  <div>
                    <p
                      className="text-[0.75rem] tracking-[0.15em] uppercase font-semibold text-[#2d2416] mb-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {title}
                    </p>
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
        </section>

        {/* ── Product Grid ── */}
        <section
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20"
          aria-labelledby="products-heading"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p
                className="text-[0.7rem] tracking-[0.3em] uppercase text-[#9c8060] mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our Collection
              </p>
              <h2
                id="products-heading"
                className="text-[2rem] sm:text-[2.6rem] text-[#2d2416] leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                Premium Supplements
              </h2>
            </div>
            <p
              className="text-[0.82rem] text-[#9c8060] max-w-xs sm:text-right leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {products.length} carefully sourced formulas — each one a result
              of nature&apos;s wisdom.
            </p>
          </div>

          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            role="list"
          >
            {products.map((product) => (
              <li
                key={product.id}
                className="group"
              >
                <article className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-[#ede5d8] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(120,100,60,0.12)] hover:-translate-y-1">
                  {/* Image */}
                  <Link
                    href={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative block overflow-hidden aspect-[4/3] bg-[#f5efe6]"
                    aria-label={`View ${product.name}`}
                  >
                    <Image
                      src={product.image}
                      alt={`${product.name} — ${product.tagline}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* badge */}
                    {product.badge && (
                      <span
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-[0.62rem] tracking-[0.15em] uppercase font-medium bg-[#2d2416] text-[#f5ede0]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {product.badge}
                      </span>
                    )}
                    {/* benefit pill */}
                    <span
                      className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-[0.62rem] tracking-[0.12em] uppercase bg-white/90 backdrop-blur-sm text-[#7a5c2e] border border-[#ede5d8]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {product.category}
                    </span>
                  </Link>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <p
                      className="text-[0.65rem] tracking-[0.25em] uppercase text-[#9c8060] mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {product.tagline}
                    </p>
                    <Link
                      href={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <h3
                        className="text-[1.25rem] leading-snug text-[#2d2416] mb-3 hover:text-[#7a5c2e] transition-colors"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 600,
                        }}
                      >
                        {product.name}
                      </h3>
                    </Link>
                    <p
                      className="text-[0.83rem] leading-relaxed text-[#7a6650] flex-1 mb-5"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {product.benefits}
                    </p>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#ede5d8]">
                      <div>
                        <p
                          className="text-[0.65rem] tracking-[0.15em] uppercase text-[#9c8060]"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          Price
                        </p>
                        <p
                          className="text-[1.35rem] text-[#2d2416]"
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontWeight: 600,
                          }}
                        >
                          R{product.price.toFixed(2)}
                        </p>
                      </div>
                      <a
                        href={`https://wa.me/27827642367?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(product.name)}%20(R${product.price.toFixed(2)}).%20Is%20it%20available%3F`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Order ${product.name} on WhatsApp`}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[0.7rem] tracking-[0.15em] uppercase font-medium
                          bg-[#2d2416] text-[#f5ede0] transition-all duration-300
                          hover:bg-[#7a5c2e] hover:shadow-[0_4px_16px_rgba(122,92,46,0.3)]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <WhatsAppIcon />
                        Order
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* ── CTA Banner ── */}
        <section className="mx-5 sm:mx-8 lg:mx-12 mb-20 rounded-3xl overflow-hidden">
          <div
            className="relative px-8 sm:px-14 py-16 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
            style={{
              background:
                "linear-gradient(135deg, #2d2416 0%, #4a3520 60%, #7a5c2e 100%)",
            }}
          >
            {/* decorative circle */}
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
                Personalised Wellness
              </p>
              <h2
                className="text-[1.9rem] sm:text-[2.4rem] leading-tight text-[#f5ede0] mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                Not sure where
                <br />
                to begin?
              </h2>
              <p
                className="text-[0.88rem] leading-relaxed text-[#d4c4a8]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our wellness experts will help you find the right combination of
                supplements for your body, lifestyle, and goals — completely
                free of charge.
              </p>
            </div>
            <a
              href="https://wa.me/27827642367"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-full
                bg-[#f5ede0] text-[#2d2416] text-[0.75rem] tracking-[0.18em] uppercase font-semibold
                transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <WhatsAppIcon />
              Chat With Us
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
