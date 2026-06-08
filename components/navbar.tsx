"use client";
import { useState, useEffect, startTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const lightPages = ["/about", "/products", "/blog", "/faqs", "/contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Bug fix 1: isLightPage was never defined — defined here correctly
  const isLightPage = lightPages.some(
    (p) => pathname === p || pathname.startsWith(p + "/"),
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      startTransition(() => setMenuOpen(false));
    }
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          // Bug fix 2: was using dark green bg — changed to warm cream to match brand
          scrolled || isLightPage
            ? "bg-[#faf7f2]/95 backdrop-blur-md shadow-[0_1px_24px_0_rgba(120,100,60,0.08)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-[72px]">
          {/* ── Brand ── */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Sah Veh Home"
          >
            <span
              className={`font-serif text-[1.55rem] tracking-[0.08em] transition-colors group-hover:text-[#7a5c2e]
                ${scrolled || isLightPage ? "text-[#2d2416]" : "text-[#f5ede0]"}`}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
            >
              SAH VEH
            </span>
            <span
              className={`text-[0.55rem] tracking-[0.3em] uppercase mt-[-2px] transition-colors
                ${scrolled || isLightPage ? "text-[#9c8060]" : "text-[#c8b89a]"}`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Holistic Wellness
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    // Bug fix 3: malformed className string — fixed
                    className={`relative px-4 py-2 text-[0.78rem] tracking-[0.18em] uppercase transition-colors duration-200 group
                      ${isActive ? "text-[#7a5c2e]" : "text-[#4a3f32] hover:text-[#7a5c2e]"}`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {label}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-px bg-[#7a5c2e] transition-transform duration-300 origin-left
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/27827642367"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[0.72rem] tracking-[0.15em] uppercase font-medium
                bg-[#2d2416] text-[#f5ede0] transition-all duration-300
                hover:bg-[#7a5c2e] hover:shadow-[0_4px_20px_rgba(122,92,46,0.35)]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <WhatsAppIcon />
              Order Now
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {/* Bug fix 4: duplicate/conflicting classNames on bars — cleaned up */}
            <span
              className={`block w-6 h-px transition-all duration-300 origin-center
                ${scrolled || isLightPage ? "bg-[#2d2416]" : "bg-[#f5ede0]"}
                ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
            />
            <span
              className={`block h-px transition-all duration-300
                ${scrolled || isLightPage ? "bg-[#2d2416]" : "bg-[#f5ede0]"}
                ${menuOpen ? "w-0 opacity-0" : "w-5 opacity-100"}`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 origin-center
                ${scrolled || isLightPage ? "bg-[#2d2416]" : "bg-[#f5ede0]"}
                ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        style={{
          background: "rgba(30,22,10,0.45)",
          backdropFilter: "blur(4px)",
        }}
        aria-hidden="true"
      />

      {/* ── Mobile Drawer Panel ── */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-[min(320px,85vw)] md:hidden
          bg-[#faf7f2] flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.32,0,0.15,1)]
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-7 h-[72px] border-b border-[#ede5d8]">
          <span
            className="font-serif text-lg tracking-widest text-[#2d2416]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
            }}
          >
            SAH VEH
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#ede5d8] transition-colors"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="flex-1 px-7 py-8 flex flex-col gap-1 overflow-y-auto">
          {navLinks.map(({ label, href }, i) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center justify-between py-4 border-b border-[#ede5d8] text-sm tracking-[0.2em] uppercase transition-colors duration-200
                  ${isActive ? "text-[#7a5c2e]" : "text-[#4a3f32] hover:text-[#7a5c2e]"}`}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                }}
              >
                {label}
                <ChevronIcon />
              </Link>
            );
          })}
        </nav>

        <div className="px-7 pb-10">
          <p
            className="text-[0.68rem] tracking-[0.2em] uppercase text-[#9c8060] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ready to start your wellness journey?
          </p>
          <a
            href="https://wa.me/27827642367"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full
              bg-[#2d2416] text-[#f5ede0] text-[0.75rem] tracking-[0.18em] uppercase font-medium
              transition-all duration-300 hover:bg-[#7a5c2e]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <WhatsAppIcon />
            Order on WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}

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

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path
        d="M18 6 6 18M6 6l12 12"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        d="m9 18 6-6-6-6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
