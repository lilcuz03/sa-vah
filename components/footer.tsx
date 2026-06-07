"use client";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const products = [
  { label: "Aloe Colon Cleanse", href: "/product/1" },
  { label: "Ashwagandha", href: "/product/2" },
  { label: "Hibiscus Tea", href: "/product/3" },
  { label: "Kombucha Gummies", href: "/product/4" },
  { label: "Moringa Raw & Organic", href: "/product/5" },
  { label: "Ndolwani Gummies", href: "/product/6" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
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
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          ry="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="17.5"
          cy="6.5"
          r="0.5"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/27827642367",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle
          cx="4"
          cy="4"
          r="2"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #1e1509 0%, #2d2416 50%, #3a2d18 100%)",
      }}
      aria-label="Site footer"
    >
      {/* Decorative radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-100 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(122,92,46,0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Newsletter strip ── */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-sm">
            <p
              className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c8a96a] mb-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Wellness Wisdom
            </p>
            <h2
              className="text-[1.6rem] sm:text-[1.9rem] leading-tight text-[#f5ede0]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
            >
              Live well, naturally.
            </h2>
            <p
              className="text-[0.82rem] text-[#a89070] mt-2 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Receive herbal insights, new product launches, and exclusive
              offers — straight to your inbox.
            </p>
          </div>

          {/* Newsletter form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[380px]"
            aria-label="Newsletter signup"
          >
            <label
              htmlFor="footer-email"
              className="sr-only"
            >
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="your@email.com"
              autoComplete="email"
              required
              className="flex-1 px-5 py-3.5 rounded-full bg-white/8 border border-white/15 text-[#f5ede0] text-[0.82rem] placeholder-[#6b5c46]
                focus:outline-none focus:border-[#c8a96a] focus:bg-white/12 transition-all duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
            <button
              type="submit"
              className="flex-shrink-0 px-7 py-3.5 rounded-full bg-[#c8a96a] text-[#1e1509] text-[0.72rem] tracking-[0.18em] uppercase font-semibold
                transition-all duration-300 hover:bg-[#e2c080] hover:shadow-[0_4px_20px_rgba(200,169,106,0.35)]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block mb-5"
              aria-label="Sah Veh Home"
            >
              <span
                className="block text-[1.6rem] tracking-[0.1em] text-[#f5ede0]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                SAH VEH
              </span>
              <span
                className="block text-[0.55rem] tracking-[0.35em] uppercase text-[#c8a96a] mt-[-3px]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Holistic Wellness
              </span>
            </Link>
            <p
              className="text-[0.83rem] leading-relaxed text-[#a89070] mb-7 max-w-[240px]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Supporting your mind, body, and spirit through the wisdom of
              nature — one plant at a time.
            </p>

            {/* Socials */}
            <div
              className="flex items-center gap-2"
              role="list"
              aria-label="Social media links"
            >
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  role="listitem"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#a89070]
                    transition-all duration-200 hover:border-[#c8a96a] hover:text-[#c8a96a] hover:bg-white/5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p
              className="text-[0.65rem] tracking-[0.3em] uppercase text-[#c8a96a] mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.85rem] text-[#a89070] hover:text-[#f5ede0] transition-colors duration-200 group flex items-center gap-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span
                      className="w-0 group-hover:w-3 h-px bg-[#c8a96a] transition-all duration-300 overflow-hidden"
                      aria-hidden="true"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p
              className="text-[0.65rem] tracking-[0.3em] uppercase text-[#c8a96a] mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Our Products
            </p>
            <ul className="flex flex-col gap-3">
              {products.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.85rem] text-[#a89070] hover:text-[#f5ede0] transition-colors duration-200 group flex items-center gap-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span
                      className="w-0 group-hover:w-3 h-px bg-[#c8a96a] transition-all duration-300 overflow-hidden"
                      aria-hidden="true"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[0.65rem] tracking-[0.3em] uppercase text-[#c8a96a] mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Get In Touch
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://wa.me/27827642367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-[#a89070] hover:text-[#f5ede0] transition-colors duration-200"
                >
                  <span className="mt-0.5 flex-shrink-0 text-[#c8a96a]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>
                  <span
                    className="text-[0.83rem]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    +27 82 764 2367
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sahvehinvestment.co.za"
                  className="group flex items-start gap-3 text-[#a89070] hover:text-[#f5ede0] transition-colors duration-200"
                >
                  <span className="mt-0.5 flex-shrink-0 text-[#c8a96a]">
                    <svg
                      width="15"
                      height="15"
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
                  </span>
                  <span
                    className="text-[0.83rem] break-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    info@sahvehinvestment.co.za
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#a89070]">
                  <span className="mt-0.5 flex-shrink-0 text-[#c8a96a]">
                    <svg
                      width="15"
                      height="15"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
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
                  </span>
                  <span
                    className="text-[0.83rem]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    South Africa
                  </span>
                </div>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/27827642367"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-7 px-5 py-2.5 rounded-full border border-[#c8a96a]/40 text-[#c8a96a]
                text-[0.7rem] tracking-[0.15em] uppercase transition-all duration-300
                hover:bg-[#c8a96a] hover:text-[#1e1509] hover:border-[#c8a96a]"
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
              Order Now
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[0.72rem] text-[#6b5c46] text-center sm:text-left"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © {year} Sah Veh. All rights reserved.
          </p>

          {/* Divider dot */}
          <span
            className="hidden sm:block w-1 h-1 rounded-full bg-[#6b5c46]"
            aria-hidden="true"
          />

          <p
            className="text-[0.72rem] text-[#6b5c46] text-center sm:text-right"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Developed by{" "}
            <a
              href="https://tafadzwa.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a89070] hover:text-[#c8a96a] transition-colors duration-200"
            >
              Tafadzwa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
