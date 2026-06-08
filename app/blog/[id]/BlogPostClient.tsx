"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { BlogPost, BlogSection } from "./blog";

// ─── Category badge colour map ────────────────────────────────────────────────
const categoryColour: Record<string, string> = {
  Wellness: "bg-emerald-100 text-emerald-800",
  Superfoods: "bg-lime-100 text-lime-800",
  "Heart Health": "bg-rose-100 text-rose-800",
  "Digestive Health": "bg-amber-100 text-amber-800",
  "Gut Health": "bg-teal-100 text-teal-800",
  Sleep: "bg-violet-100 text-violet-800",
  Health: "bg-sky-100 text-sky-800",
};

// ─── Section Renderer ────────────────────────────────────────────────────────
function RenderSection({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "heading":
      return (
        <h2 className="font-serif text-2xl md:text-3xl text-[#1a2e1a] mt-10 mb-4 leading-snug">
          {section.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 className="font-serif text-xl text-[#2d4d2d] mt-7 mb-3 leading-snug">
          {section.text}
        </h3>
      );
    case "paragraph":
      return (
        <p className="text-[#374f37] leading-relaxed mb-4 text-base md:text-[17px]">
          {section.text}
        </p>
      );
    case "bullets":
      return (
        <ul className="mb-5 space-y-2 pl-1">
          {section.items?.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-[#374f37] text-base md:text-[17px] leading-relaxed"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#5d9a5d] shrink-0" />
              <span
                dangerouslySetInnerHTML={{
                  __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            </li>
          ))}
        </ul>
      );
    case "numbered":
      return (
        <ol className="mb-5 space-y-3 pl-1">
          {section.items?.map((item, i) => (
            <li
              key={i}
              className="flex gap-4 text-[#374f37] text-base md:text-[17px] leading-relaxed"
            >
              <span className="shrink-0 w-7 h-7 rounded-full bg-[#e8f4e8] text-[#2d5a2d] text-sm font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div className="my-6 border-l-4 border-[#5d9a5d] bg-[#f0f8f0] rounded-r-2xl px-5 py-4">
          <div className="flex gap-3">
            <span className="text-xl mt-0.5">🌿</span>
            <p className="text-[#2d4d2d] text-sm md:text-base leading-relaxed italic">
              {section.text}
            </p>
          </div>
        </div>
      );
    case "quote":
      return (
        <blockquote className="my-7 text-center">
          <p className="font-serif text-xl md:text-2xl text-[#2d5a2d] italic leading-relaxed">
            &ldquo;{section.text}&rdquo;
          </p>
        </blockquote>
      );
    default:
      return null;
  }
}

// ─── Table of Contents ────────────────────────────────────────────────────────
function TableOfContents({ sections }: { sections: BlogSection[] }) {
  const headings = sections.filter((s) => s.type === "heading");
  if (headings.length < 3) return null;
  return (
    <nav
      aria-label="Table of contents"
      className="mb-8 p-5 rounded-2xl bg-[#f0f8f0] border border-[#d0e8d0]"
    >
      <p className="text-xs font-semibold tracking-widest uppercase text-[#5d9a5d] mb-3">
        In This Article
      </p>
      <ol className="space-y-1.5">
        {headings.map((h, i) => (
          <li
            key={i}
            className="flex gap-2.5 items-start"
          >
            <span className="text-[#5d9a5d] text-xs font-bold mt-0.5 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-[#374f37] leading-snug">
              {h.text}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ─── Share Buttons ────────────────────────────────────────────────────────────
function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `https://sa-vah.vercel.app/blog/${slug}`;
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const [copied, setCopied] = useState(false);
  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-10 pt-8 border-t border-[#d8e8d0]">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#7a9a7a] mb-3">
        Share This Article
      </p>
      <div className="flex flex-wrap gap-2">
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-medium hover:opacity-90 transition"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-current"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.854L.057 23.882l6.195-1.442A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.358-.213-3.716.865.935-3.62-.234-.372A9.818 9.818 0 1112 21.818z" />
          </svg>
          WhatsApp
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1877F2] text-white text-sm font-medium hover:opacity-90 transition"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-current"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:opacity-90 transition"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-current"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          X (Twitter)
        </a>
        <button
          onClick={copyLink}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8f4e8] text-[#2d5a2d] text-sm font-medium hover:bg-[#d0e8d0] transition"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}

// ─── Related Posts ────────────────────────────────────────────────────────────
function RelatedPosts({ posts }: { posts: BlogPost["relatedPosts"] }) {
  return (
    <section
      aria-label="Related articles"
      className="mt-14"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-px bg-[#86c87a]" />
        <h2 className="text-xs font-semibold tracking-widest uppercase text-[#86c87a]">
          Continue Reading
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {posts.map((p) => (
          <Link
            key={p.id}
            href={`/blog/${p.slug}`}
            className="group p-4 rounded-2xl border border-[#d8e8d0] bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                categoryColour[p.category] ?? "bg-green-100 text-green-800"
              }`}
            >
              {p.category}
            </span>
            <p className="mt-2 text-sm font-medium text-[#1a2e1a] group-hover:text-[#3d6b3d] leading-snug transition-colors">
              {p.title}
            </p>
            <p className="mt-2 text-xs text-[#86c87a] font-medium flex items-center gap-1">
              Read more
              <svg
                className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <main className="min-h-screen bg-[#f5f8f2]">
      {/* ── Hero Image ── */}
      <div className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden bg-[#1a2e1a]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a0d] via-transparent to-transparent" />

        {/* Category + read time overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                categoryColour[post.category] ?? "bg-green-100 text-green-800"
              }`}
            >
              {post.category}
            </span>
            <span className="text-xs text-gray-300 flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {post.readTime}
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight max-w-3xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white border-b border-[#e8f0e8] px-4 py-2.5"
      >
        <ol className="flex items-center gap-1.5 text-xs text-[#7a9a7a] max-w-4xl mx-auto">
          <li>
            <Link
              href="/"
              className="hover:text-[#2d5a2d] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/blog"
              className="hover:text-[#2d5a2d] transition-colors"
            >
              Blog
            </Link>
          </li>
          <li>/</li>
          <li className="text-[#4a5e4a] truncate max-w-[200px] md:max-w-none">
            {post.title}
          </li>
        </ol>
      </nav>

      {/* ── Article Body ── */}
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          {/* Main content column */}
          <article>
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#7a9a7a] mb-6 pb-6 border-b border-[#d8e8d0]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#2d5a2d] flex items-center justify-center text-white text-xs font-bold">
                  SV
                </div>
                <div>
                  <p className="text-xs font-medium text-[#374f37]">
                    {post.author}
                  </p>
                  <p className="text-xs text-[#7a9a7a]">{post.authorTitle}</p>
                </div>
              </div>
              <span className="hidden sm:block w-px h-4 bg-[#d8e8d0]" />
              <time
                dateTime={post.date}
                className="text-xs"
              >
                {post.date}
              </time>
            </div>

            {/* Subtitle / intro */}
            <p className="font-serif text-lg md:text-xl text-[#2d4d2d] leading-relaxed mb-6 italic">
              {post.subtitle}
            </p>
            <p className="text-[#374f37] leading-relaxed mb-6 text-base md:text-[17px]">
              {post.intro}
            </p>

            {/* Table of Contents (mobile only — desktop shown in sidebar) */}
            <div className="lg:hidden">
              <TableOfContents sections={post.sections} />
            </div>

            {/* Article sections */}
            {post.sections.map((section, i) => (
              <RenderSection
                key={i}
                section={section}
              />
            ))}

            {/* Conclusion */}
            <div className="mt-10 p-6 rounded-2xl bg-[#1a2e1a] text-white">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#86c87a] mb-2">
                Key Takeaway
              </p>
              <p className="text-[#d4e8d4] leading-relaxed text-sm md:text-base">
                {post.conclusion}
              </p>
            </div>

            {/* Product CTA */}
            {post.relatedProduct && (
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl border-2 border-[#d0e8d0] bg-[#f8fcf8]">
                <div className="flex-1">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#5d9a5d] mb-1">
                    Sah Veh Product
                  </p>
                  <p className="font-medium text-[#1a2e1a]">
                    Try <strong>{post.relatedProduct.name}</strong>
                  </p>
                  <p className="text-sm text-[#6a8a6a] mt-0.5">
                    Pure, natural, locally sourced
                  </p>
                </div>
                <Link
                  href={post.relatedProduct.href}
                  className="shrink-0 px-6 py-2.5 rounded-full bg-[#2d5a2d] text-white text-sm font-semibold hover:bg-[#3d6b3d] transition-colors"
                >
                  View Product
                </Link>
              </div>
            )}

            {/* Share */}
            <ShareButtons
              title={post.title}
              slug={post.slug}
            />
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* ToC */}
              <TableOfContents sections={post.sections} />

              {/* Post info card */}
              <div className="p-5 rounded-2xl bg-white border border-[#d8e8d0]">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#7a9a7a] mb-3">
                  About This Article
                </p>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-[#7a9a7a]">Category</dt>
                    <dd>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColour[post.category] ?? ""}`}
                      >
                        {post.category}
                      </span>
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#7a9a7a]">Read time</dt>
                    <dd className="text-[#374f37] font-medium">
                      {post.readTime}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#7a9a7a]">Published</dt>
                    <dd className="text-[#374f37] font-medium">{post.date}</dd>
                  </div>
                </dl>
              </div>

              {/* Back to blog */}
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm text-[#5d9a5d] hover:text-[#2d5a2d] transition-colors font-medium"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                All Blog Posts
              </Link>
            </div>
          </aside>
        </div>

        {/* ── Related Posts ── */}
        <RelatedPosts posts={post.relatedPosts} />
      </div>
    </main>
  );
}
