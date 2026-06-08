"use client";

import { useState } from "react";

const subjects = [
  { value: "", label: "Select a topic" },
  { value: "product", label: "Product Inquiry" },
  { value: "order", label: "Order Support" },
  { value: "wellness", label: "Wellness Advice" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to your form backend / email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f0e8da] text-[#7a5c2e] mb-6">
          <svg
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </span>
        <h3
          className="text-[1.6rem] text-[#2d2416] mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
        >
          Message Received
        </h3>
        <p
          className="text-[0.85rem] leading-relaxed text-[#7a6650] max-w-xs"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Thank you for reaching out. Our wellness team will get back to you
          within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
    >
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="firstName"
            className="text-[0.65rem] tracking-[0.22em] uppercase text-[#9c8060]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            First Name{" "}
            <span
              className="text-[#7a5c2e]"
              aria-hidden="true"
            >
              *
            </span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            className="px-5 py-3.5 rounded-xl border border-[#ede5d8] bg-[#faf7f2] text-[0.88rem] text-[#2d2416]
              placeholder-[#c8b89a] focus:outline-none focus:border-[#7a5c2e] focus:bg-white transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            placeholder="Jane"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="lastName"
            className="text-[0.65rem] tracking-[0.22em] uppercase text-[#9c8060]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Last Name{" "}
            <span
              className="text-[#7a5c2e]"
              aria-hidden="true"
            >
              *
            </span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            className="px-5 py-3.5 rounded-xl border border-[#ede5d8] bg-[#faf7f2] text-[0.88rem] text-[#2d2416]
              placeholder-[#c8b89a] focus:outline-none focus:border-[#7a5c2e] focus:bg-white transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            placeholder="Doe"
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-[0.65rem] tracking-[0.22em] uppercase text-[#9c8060]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Email Address{" "}
            <span
              className="text-[#7a5c2e]"
              aria-hidden="true"
            >
              *
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="px-5 py-3.5 rounded-xl border border-[#ede5d8] bg-[#faf7f2] text-[0.88rem] text-[#2d2416]
              placeholder-[#c8b89a] focus:outline-none focus:border-[#7a5c2e] focus:bg-white transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            placeholder="jane@example.com"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phone"
            className="text-[0.65rem] tracking-[0.22em] uppercase text-[#9c8060]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Phone <span className="text-[#c8b89a]">(Optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="px-5 py-3.5 rounded-xl border border-[#ede5d8] bg-[#faf7f2] text-[0.88rem] text-[#2d2416]
              placeholder-[#c8b89a] focus:outline-none focus:border-[#7a5c2e] focus:bg-white transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            placeholder="+27 82 000 0000"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="subject"
          className="text-[0.65rem] tracking-[0.22em] uppercase text-[#9c8060]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Subject{" "}
          <span
            className="text-[#7a5c2e]"
            aria-hidden="true"
          >
            *
          </span>
        </label>
        <div className="relative">
          <select
            id="subject"
            name="subject"
            required
            defaultValue=""
            className="w-full appearance-none px-5 py-3.5 rounded-xl border border-[#ede5d8] bg-[#faf7f2] text-[0.88rem] text-[#2d2416]
              focus:outline-none focus:border-[#7a5c2e] focus:bg-white transition-all duration-200 cursor-pointer"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {subjects.map(({ value, label }) => (
              <option
                key={value}
                value={value}
                disabled={value === ""}
              >
                {label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#9c8060]">
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-[0.65rem] tracking-[0.22em] uppercase text-[#9c8060]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Message{" "}
          <span
            className="text-[#7a5c2e]"
            aria-hidden="true"
          >
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="px-5 py-3.5 rounded-xl border border-[#ede5d8] bg-[#faf7f2] text-[0.88rem] text-[#2d2416]
            placeholder-[#c8b89a] focus:outline-none focus:border-[#7a5c2e] focus:bg-white transition-all duration-200 resize-none"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          placeholder="Tell us how we can help you..."
        />
      </div>

      <button
        type="submit"
        className="mt-1 w-full py-4 rounded-full bg-[#2d2416] text-[#f5ede0] text-[0.75rem] tracking-[0.2em] uppercase font-semibold
          transition-all duration-300 hover:bg-[#7a5c2e] hover:shadow-[0_8px_30px_rgba(122,92,46,0.3)]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Send Message
      </button>
    </form>
  );
}
