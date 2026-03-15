"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 playfair text-center">
              Sah Veh
            </h3>

            <p className="text-white/80 leading-relaxed text-center mb-4">
              Your holistic wellness destination. Supporting your mind, body,
              and spirit through natural supplements and conscious living.
            </p>

            <Link
              href="/about"
              className="text-green-300 text-center justify-center  flex hover:text-white transition font-medium"
            >
              Learn more about us →
            </Link>
          </div>

          {/* Social */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 playfair">Follow Us</h3>

            <div className="flex justify-center gap-4">
              {["facebook", "instagram", "twitter", "linkedin"].map(
                (social) => (
                  <Link
                    key={social}
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-green-700 transition transform hover:scale-110"
                  >
                    <span className="sr-only">{social}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {social === "facebook" && (
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      )}
                      {social === "instagram" && (
                        <>
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="18"
                            cy="6"
                            r="0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </>
                      )}
                      {social === "twitter" && (
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      )}
                      {social === "linkedin" && (
                        <>
                          <rect
                            x="2"
                            y="9"
                            width="4"
                            height="12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="4"
                            cy="4"
                            r="2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </>
                      )}
                    </svg>
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-center">
            <h3 className="text-2xl font-bold mb-4 playfair">Contact</h3>

            <div className="space-y-3 justify-between text-white/80">
              <p className="flex justify-center md:justify-center gap-2">
                <span>
                  <a href="telto:27827642367">+27 82 764 2367</a>
                </span>
              </p>

              <p className="flex justify-center md:justify-center gap-2">
                <span>
                  <a href="mailto:info@sahvehinvestment.co.za">
                    info@sahvehinvestment.co.za
                  </a>
                </span>
              </p>

              <p className="flex justify-center md:justify-center gap-2">
                <span>South Africa</span>
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="bg-green-800/40 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-2 playfair">
            Join Our Wellness Community
          </h3>

          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Get wellness tips, exclusive offers, and natural health insights
            delivered straight to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-green-900 placeholder-green-700/60 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg font-semibold transition"
            >
              Subscribe
            </button>
          </form>

          <p className="text-white/60 text-sm mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </div> */}

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Sah Veh. All rights reserved. Developed by{" "}
            <a
              href="https://ttfrech.co.za/tafadzwa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-white underline"
            >
              Tafadzwa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
