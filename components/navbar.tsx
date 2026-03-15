"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  const logoContainerClass = scrolled ? "w-60 h-20" : "w-72 h-24";
  const navHeight = scrolled ? "h-12" : "h-16";
  const textSize = scrolled ? "text-sm" : "text-base";
  const py = scrolled ? "py-2" : "py-3";
  const px = scrolled ? "px-3" : "px-4";

  return (
    <nav
      className={`backdrop-blur-xl bg-white/90 border border-white/20 shadow-xl sticky top-0 z-50 transition-all duration-300 ${navHeight}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between ${navHeight}`}>
          {/* Logo */}
          <div className="shrink-0 flex items-center ">
            <Link
              href="/"
              className="block"
            >
              <div className={`relative ${logoContainerClass}`}>
                <Image
                  src="/assets/logo.png"
                  alt="Sah Veh Logo"
                  fill
                  priority
                  sizes="cover"
                  className="object-contain hover:opacity-80    transition-all duration-300"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-medium transition-all duration-300 ${py} ${px} rounded-md ${
                  isActive(href)
                    ? "text-green-600 "
                    : "text-gray-700 hover:text-green-600 "
                } ${textSize}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`p-1 rounded-md transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-green-600"
                  : "text-gray-700 hover:text-green-600"
              }  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500`}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden ${scrolled ? "bg-white/90 backdrop-blur-xl border-t border-white/20" : "bg-white border-t border-gray-200"}`}
        >
          <div
            className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${scrolled ? "backdrop-blur-sm" : ""}`}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block font-medium transition-colors px-3 py-3 text-base rounded-md ${
                  isActive(href)
                    ? "text-green-600 "
                    : "text-gray-700 hover:text-green-600 "
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
