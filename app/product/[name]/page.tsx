// import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import products from "../../../lib/products";
import { Metadata } from "next";
// ─── Product Data ─────────────────────────────────────────────────────────────

// ─── Related products (exclude current) ──────────────────────────────────────
function getRelated(currentId: number) {
  return products.filter((p) => p.id !== currentId).slice(0, 3);
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) return { title: "Product Not Found | Sah Veh" };

  return {
    title: `${product.name} — ${product.tagline} | Sah Veh`,
    description: `${product.shortDescription}. ${product.description.slice(0, 120)}... Shop Sah Veh natural wellness supplements.`,
    keywords: [
      product.name.toLowerCase(),
      product.category.toLowerCase(),
      "natural supplements South Africa",
      "organic wellness",
      "Sah Veh",
      product.tagline.toLowerCase(),
    ],
    openGraph: {
      title: `${product.name} | Sah Veh`,
      description: product.shortDescription,
      url: `https://sa-vah.vercel.app/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`,
      siteName: "Sah Veh",
      type: "website",
      images: [
        {
          url: `https://sa-vah.vercel.app/og-product-${product.name}.jpg`,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Sah Veh`,
      description: product.shortDescription,
    },
    alternates: {
      canonical: `https://sa-vah.vercel.app/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`,
    },
  };
}

// ─── Static Params ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) notFound();

  const related = getRelated(product.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://sa-vah.vercel.app${product.image}`,
    brand: { "@type": "Brand", name: "Sah Veh" },
    category: product.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "ZAR",
      price: product.price.toFixed(2),
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Sah Veh" },
      url: `https://sa-vah.vercel.app/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`,
    },
  };

  const whatsappMsg = `Hi, I'm interested in ${product.name} (R${product.price.toFixed(2)}). Is it available?`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#faf7f2] min-h-screen">
        {/* ── Breadcrumb ── */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-4">
          <nav aria-label="Breadcrumb">
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
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#7a5c2e] transition-colors"
                >
                  Products
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
                className="text-[#4a3f32] truncate max-w-[160px]"
              >
                {product.name}
              </li>
            </ol>
          </nav>
        </div>

        {/* ── Hero: Image + Details ── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image panel */}
            <div className="relative">
              {/* Badge */}
              {product.badge && (
                <span
                  className="absolute top-5 left-5 z-10 px-3 py-1.5 rounded-full text-[0.62rem] tracking-[0.18em] uppercase font-medium bg-[#2d2416] text-[#f5ede0]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {product.badge}
                </span>
              )}
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#f0e8da]">
                <Image
                  src={product.image}
                  alt={`${product.name} — ${product.shortDescription}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Meta pills below image */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  { label: "Category", value: product.category },
                  { label: "Origin", value: product.origin },
                  { label: "Format", value: product.format },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#ede5d8]"
                  >
                    <span
                      className="text-[0.6rem] tracking-[0.2em] uppercase text-[#9c8060]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {label}
                    </span>
                    <span
                      className="w-px h-3 bg-[#ede5d8]"
                      aria-hidden="true"
                    />
                    <span
                      className="text-[0.75rem] text-[#4a3f32] font-medium"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Details panel */}
            <div className="flex flex-col">
              <p
                className="text-[0.65rem] tracking-[0.35em] uppercase text-[#9c8060] mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {product.tagline}
              </p>

              <h1
                className="text-[2.4rem] sm:text-[3rem] leading-[1.05] text-[#2d2416] mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span
                  className="text-[2rem] text-[#2d2416]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                  }}
                >
                  R{product.price.toFixed(2)}
                </span>
                <span
                  className="text-[0.72rem] tracking-[0.15em] uppercase text-[#9c8060]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Incl. VAT
                </span>
              </div>

              {/* Divider */}
              <div
                className="w-12 h-px bg-[#c8b89a] mb-6"
                aria-hidden="true"
              />

              {/* Description */}
              <p
                className="text-[0.9rem] leading-[1.8] text-[#6b5c46] mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {product.description}
              </p>

              {/* Benefits */}
              <div className="mb-8">
                <p
                  className="text-[0.65rem] tracking-[0.25em] uppercase text-[#9c8060] mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Key Benefits
                </p>
                <ul
                  className="flex flex-col gap-3"
                  role="list"
                >
                  {product.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-[0.85rem] text-[#4a3f32]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <span
                        className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#7a5c2e]"
                        aria-hidden="true"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to use */}
              <div className="rounded-2xl bg-[#f0e8da] border border-[#ede5d8] px-6 py-5 mb-8">
                <p
                  className="text-[0.62rem] tracking-[0.25em] uppercase text-[#9c8060] mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  How to Use
                </p>
                <p
                  className="text-[0.85rem] leading-relaxed text-[#5a4a35]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {product.howToUse}
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/27827642367?text=${encodeURIComponent(whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 px-8 py-4 rounded-full
                    bg-[#2d2416] text-[#f5ede0] text-[0.75rem] tracking-[0.18em] uppercase font-semibold
                    transition-all duration-300 hover:bg-[#7a5c2e] hover:shadow-[0_8px_30px_rgba(122,92,46,0.3)]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <WhatsAppIcon />
                  Order on WhatsApp
                </a>
                <Link
                  href="/products"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#c8b89a] text-[#7a5c2e]
                    text-[0.75rem] tracking-[0.18em] uppercase font-medium transition-all duration-200
                    hover:bg-[#f0e8da]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  ← All Products
                </Link>
              </div>

              {/* Trust line */}
              <div
                className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-[#ede5d8] text-[0.7rem] tracking-[0.12em] uppercase text-[#9c8060]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="flex items-center gap-1.5">
                  <LeafIcon /> 100% Organic
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldIcon /> Third-Party Tested
                </span>
                <span className="flex items-center gap-1.5">
                  <TruckIcon /> Direct Delivery
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Products ── */}
        <section
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20"
          aria-labelledby="related-heading"
        >
          <div className="flex items-end justify-between mb-10">
            <div>
              <p
                className="text-[0.65rem] tracking-[0.3em] uppercase text-[#9c8060] mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Continue Your Journey
              </p>
              <h2
                id="related-heading"
                className="text-[1.8rem] sm:text-[2.2rem] text-[#2d2416]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                You May Also Like
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:flex items-center gap-2 text-[0.72rem] tracking-[0.18em] uppercase text-[#7a5c2e]
                hover:text-[#2d2416] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              View All →
            </Link>
          </div>

          <ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            role="list"
          >
            {related.map((item) => (
              <li
                key={item.id}
                className="group"
              >
                <article className="bg-white rounded-2xl overflow-hidden border border-[#ede5d8] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(120,100,60,0.10)] hover:-translate-y-1">
                  <Link
                    href={`/product/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative block aspect-4/3 bg-[#f5efe6] overflow-hidden"
                    aria-label={`View ${item.name}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-[0.6rem] tracking-[0.12em] uppercase bg-white/90 backdrop-blur-sm text-[#7a5c2e] border border-[#ede5d8]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.category}
                    </span>
                  </Link>
                  <div className="p-5">
                    <p
                      className="text-[0.62rem] tracking-[0.22em] uppercase text-[#9c8060] mb-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.tagline}
                    </p>
                    <Link href={`/product/${item.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      <h3
                        className="text-[1.15rem] text-[#2d2416] mb-1 hover:text-[#7a5c2e] transition-colors"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 600,
                        }}
                      >
                        {item.name}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#ede5d8]">
                      <span
                        className="text-[1.2rem] text-[#2d2416]"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 600,
                        }}
                      >
                        R{item.price.toFixed(2)}
                      </span>
                      <a
                        href={`https://wa.me/27827642367?text=${encodeURIComponent(`Hi, I'm interested in ${item.name} (R${item.price.toFixed(2)}). Is it available?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Order ${item.name} on WhatsApp`}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.68rem] tracking-[0.12em] uppercase
                          bg-[#2d2416] text-[#f5ede0] hover:bg-[#7a5c2e] transition-colors duration-200"
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
function LeafIcon() {
  return (
    <svg
      width="13"
      height="13"
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
  );
}
function ShieldIcon() {
  return (
    <svg
      width="13"
      height="13"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}
function TruckIcon() {
  return (
    <svg
      width="13"
      height="13"
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
  );
}
