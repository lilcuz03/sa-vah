import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  slug: string;
  metadescription: string;
  description: string;
  image: string;
  details?: string;
  tagline: string;
  shortDescription?: string;
  benefits: string[];
  howToUse?: string;
  category: string;
  origin?: string;
  format?: string;
  badge?: string | null;
  seo: {
    title: string;
    metaDescription: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    canonicalSlug: string;
    schemaDescription: string;
  };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // FIX 1: destructure ALL fields used in JSX — badge & category were missing
  const { name, image, benefits, price, slug, tagline, badge, category } =
    product;

  return (
    <article className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-[#ede5d8] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(120,100,60,0.13)] hover:-translate-y-1">
      {/* ── Image block ── */}
      <Link
        href={`/product/${slug}`}
        className="relative block overflow-hidden aspect-[4/3] bg-[#f5efe6]"
        aria-label={`View ${name}`}
      >
        <Image
          src={image}
          alt={`${name} — ${tagline}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          // FIX 2: group-hover:scale-105 now works because <article> has className="group"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge — only rendered when truthy */}
        {badge && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[0.62rem] tracking-[0.15em] uppercase font-medium bg-[#2d2416] text-[#f5ede0] font-['DM_Sans',sans-serif]">
            {/* FIX 3: was {badge} referencing an undefined variable; now uses destructured badge */}
            {badge}
          </span>
        )}

        {/* Category pill */}
        {/* FIX 4: was {category} — undefined; now uses destructured category */}
        <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-[0.62rem] tracking-[0.12em] uppercase bg-white/90 backdrop-blur-sm text-[#7a5c2e] border border-[#ede5d8] font-['DM_Sans',sans-serif]">
          {category}
        </span>
      </Link>

      {/* ── Content block ── */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tagline */}
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#9c8060] mb-2 font-['DM_Sans',sans-serif]">
          {tagline}
        </p>

        {/* FIX 5: second <Link> was building slug manually — now uses the slug variable */}
        <Link href={`/product/${slug}`}>
          <h3
            className="text-[1.25rem] leading-snug text-[#2d2416] mb-3 hover:text-[#7a5c2e] transition-colors font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {name}
          </h3>
        </Link>

        {/* FIX 6: benefits is string[] — rendered as a list, not dumped as {product.benefits} */}
        <ul className="flex flex-col gap-1.5 flex-1 mb-5">
          {benefits.slice(0, 3).map((benefit, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[0.8rem] leading-relaxed text-[#7a6650] font-['DM_Sans',sans-serif]"
            >
              {/* Leaf dot */}
              <span className="mt-[0.35em] shrink-0 w-1.5 h-1.5 rounded-full bg-[#a07840] opacity-70" />
              {benefit}
            </li>
          ))}
        </ul>

        {/* ── Price & CTA ── */}
        <div className="flex items-center justify-between pt-4 border-t border-[#ede5d8]">
          <div>
            <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#9c8060] font-['DM_Sans',sans-serif]">
              Price
            </p>
            <p
              className="text-[1.35rem] text-[#2d2416] font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              R{price.toFixed(2)}
            </p>
          </div>

          <a
            href={`https://wa.me/27827642367?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(name)}%20(R${price.toFixed(2)}).%20Is%20it%20available%3F`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${name} on WhatsApp`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[0.7rem] tracking-[0.15em] uppercase font-medium
              bg-[#2d2416] text-[#f5ede0] transition-all duration-300
              hover:bg-[#7a5c2e] hover:shadow-[0_4px_16px_rgba(122,92,46,0.3)]
              font-['DM_Sans',sans-serif]"
          >
            <WhatsAppIcon />
            Order
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

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
