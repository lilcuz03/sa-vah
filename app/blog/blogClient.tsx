"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Types ───────────────────────────────────────────────────────────────────
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  featured?: boolean;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const posts: BlogPost[] = [
  {
    id: 1,
    title: "Ashwagandha and the Science of Stress Reduction",
    excerpt:
      "Ashwagandha is one of the most researched adaptogenic herbs for stress support. Modern studies suggest it may help regulate cortisol, improve sleep quality and support resilience to everyday stress.",
    category: "Wellness",
    date: "March 15, 2026",
    readTime: "9 min read",
    image: "/images/01.jpg",
    slug: "1",
    featured: true,
  },
  {
    id: 2,
    title: "Moringa Oleifera: The Most Nutrient-Dense Plant on Earth",
    excerpt:
      "Moringa leaves are rich in vitamins, minerals, and antioxidants. This superfood helps boost immunity, energy, and overall health naturally.",
    category: "Superfoods",
    date: "March 12, 2026",
    readTime: "9 min read",
    image: "/images/02.jpg",
    slug: "2",
    featured: true,
  },
  {
    id: 3,
    title: "Hibiscus Tea Benefits for Heart Health",
    excerpt:
      "Hibiscus tea supports cardiovascular health and blood pressure regulation through its rich antioxidant profile and natural compounds.",
    category: "Heart Health",
    date: "March 10, 2026",
    readTime: "8 min read",
    image: "/images/04.jpg",
    slug: "3",
  },
  {
    id: 4,
    title: "Aloe Vera for Digestive Wellness",
    excerpt:
      "Natural support for digestion and detoxification using the powerful compounds found in pure aloe vera.",
    category: "Digestive Health",
    date: "March 8, 2026",
    readTime: "7 min read",
    image: "/images/05.jpg",
    slug: "4",
  },
  {
    id: 5,
    title: "Kombucha Probiotics Guide",
    excerpt:
      "Understanding gut health benefits of kombucha — the ancient fermented drink making a modern wellness comeback.",
    category: "Gut Health",
    date: "March 6, 2026",
    readTime: "8 min read",
    image: "/images/06.jpg",
    slug: "5",
  },
  {
    id: 6,
    title: "Ndolwani: A Traditional African Sleep Remedy",
    excerpt:
      "Discover the rich heritage of Ndolwani, a traditional African herb used for generations to promote deep, restful sleep and relaxation.",
    category: "Sleep",
    date: "March 4, 2026",
    readTime: "7 min read",
    image: "/images/07.jpg",
    slug: "6",
  },
  {
    id: 7,
    title: "Superfood Combinations for Daily Wellness",
    excerpt:
      "Optimal combinations of Moringa, Ashwagandha, and other superfoods for sustained energy and holistic health.",
    category: "Superfoods",
    date: "March 2, 2026",
    readTime: "7 min read",
    image: "/images/08.jpg",
    slug: "7",
  },
  {
    id: 8,
    title: "Stress Management Through Herbal Protocols",
    excerpt:
      "Herbal strategies and daily protocols for building long-term stress resilience without pharmaceutical intervention.",
    category: "Wellness",
    date: "February 28, 2026",
    readTime: "8 min read",
    image: "/images/09.jpg",
    slug: "8",
  },
  {
    id: 9,
    title: "Immune Boosting Superfoods",
    excerpt:
      "Nutrient-dense foods and plant-based supplements that support robust immune function throughout the year.",
    category: "Health",
    date: "February 25, 2026",
    readTime: "7 min read",
    image: "/images/10.jpg",
    slug: "9",
  },
  {
    id: 10,
    title: "Digestive Health with Natural Remedies",
    excerpt:
      "Traditional and modern approaches to gut health — from ancient herbal wisdom to contemporary microbiome science.",
    category: "Digestive Health",
    date: "February 20, 2026",
    readTime: "8 min read",
    image: "/images/11.jpg",
    slug: "10",
  },
  {
    id: 11,
    title: "Heart Health with Plant-Based Solutions",
    excerpt:
      "Plant compounds and lifestyle practices that support cardiovascular function and long-term heart wellness.",
    category: "Heart Health",
    date: "February 15, 2026",
    readTime: "7 min read",
    image: "/images/12.jpg",
    slug: "11",
  },
  {
    id: 12,
    title: "Energy and Vitality Protocol",
    excerpt:
      "A daily protocol for sustained, natural energy — no stimulants, no crashes. Pure plant-based vitality.",
    category: "Wellness",
    date: "February 10, 2026",
    readTime: "8 min read",
    image: "/images/14.jpg",
    slug: "12",
  },
];

const CATEGORIES = [
  "All",
  "Wellness",
  "Superfoods",
  "Heart Health",
  "Digestive Health",
  "Gut Health",
  "Sleep",
  "Health",
];

// ─── Category pill colours ────────────────────────────────────────────────────
const categoryColour: Record<string, string> = {
  Wellness:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  Superfoods:
    "bg-lime-100 text-lime-800 dark:bg-lime-900/40 dark:text-lime-300",
  "Heart Health":
    "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
  "Digestive Health":
    "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  "Gut Health":
    "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  Sleep:
    "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
  Health: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
};

// ─── Structured data (JSON-LD) ────────────────────────────────────────────────
function BlogJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Sah Veh Wellness Blog",
    description:
      "Expert articles on natural health, herbal remedies, superfoods, and holistic wellness.",
    url: "https://sa-vah.vercel.app/blog",
    publisher: {
      "@type": "Organization",
      name: "Sah Veh",
      logo: {
        "@type": "ImageObject",
        url: "https://sa-vah.vercel.app/logo.png",
      },
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      url: `https://sa-vah.vercel.app/blog/${p.slug}`,
      image: `https://sa-vah.vercel.app${p.image}`,
      datePublished: p.date,
      author: {
        "@type": "Organization",
        name: "Sah Veh",
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Featured Hero Card ───────────────────────────────────────────────────────
function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-3xl bg-[#1a2e1a] h-[420px] md:h-[480px] shadow-2xl">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a0d] via-[#0d1a0d]/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <span
            className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
              categoryColour[post.category] ?? "bg-green-100 text-green-800"
            }`}
          >
            {post.category}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-white leading-snug mb-3 group-hover:text-[#c8e6c0] transition-colors">
            {post.title}
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-500" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ─── Standard Blog Card ───────────────────────────────────────────────────────
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block h-full"
    >
      <article className="h-full flex flex-col rounded-2xl overflow-hidden border border-[#d8e8d0] dark:border-[#2a3d2a] bg-white dark:bg-[#141f14] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-48 overflow-hidden shrink-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <span
            className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${
              categoryColour[post.category] ?? "bg-green-100 text-green-800"
            }`}
          >
            {post.category}
          </span>
        </div>
        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-serif text-[#1a2e1a] dark:text-[#c8e6c0] text-lg leading-snug mb-2 group-hover:text-[#3d6b3d] dark:group-hover:text-white transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-[#4a5e4a] dark:text-[#8fad8f] leading-relaxed flex-1 line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-[#7a9a7a] dark:text-[#5a7a5a] mt-auto pt-3 border-t border-[#e8f0e8] dark:border-[#2a3d2a]">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <svg
                className="w-3 h-3"
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
        </div>
      </article>
    </Link>
  );
}

// ─── Main Client Component ────────────────────────────────────────────────────
export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featured = posts.filter((p) => p.featured);

  const filtered = posts.filter((post) => {
    const matchCat =
      activeCategory === "All" || post.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  // Featured posts should only show when no filter is active
  const showFeatured = activeCategory === "All" && !searchQuery;
  const gridPosts = showFeatured
    ? filtered.filter((p) => !p.featured)
    : filtered;

  return (
    <>
      <BlogJsonLd />

      <main className="min-h-screen bg-[#f5f8f2] dark:bg-[#0d150d]">
        {/* ── Hero Header ── */}
        <section
          className="relative overflow-hidden bg-[#1a2e1a] pt-20 pb-16 px-4"
          aria-label="Blog header"
        >
          {/* Decorative leaf pattern */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #4ade80 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, #22c55e 0%, transparent 40%)`,
            }}
          />
          <div className="relative max-w-6xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#86c87a] mb-4 px-4 py-1.5 rounded-full border border-[#86c87a]/30 bg-[#86c87a]/10">
              Sah Veh Wellness
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-4">
              The Wellness{" "}
              <span className="text-[#86c87a] italic">Journal</span>
            </h1>
            <p className="text-[#8fad8f] text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Discover insights on natural health, herbal remedies, and the
              science of holistic living — curated by our wellness experts.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8fad8f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="search"
                placeholder="Search articles…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search blog articles"
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-[#6a8a6a] focus:outline-none focus:ring-2 focus:ring-[#86c87a]/50 text-sm backdrop-blur-sm"
              />
            </div>
          </div>
        </section>

        {/* ── Category Filter ── */}
        <nav
          aria-label="Blog categories"
          className="sticky top-0 z-10 bg-[#f5f8f2]/90 dark:bg-[#0d150d]/90 backdrop-blur-md border-b border-[#d8e8d0] dark:border-[#1e2e1e] py-3 px-4"
        >
          <div className="max-w-6xl mx-auto overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 min-w-max">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-[#2d5a2d] text-white shadow-md"
                      : "bg-white dark:bg-[#1a2e1a] text-[#4a5e4a] dark:text-[#8fad8f] border border-[#d8e8d0] dark:border-[#2a3d2a] hover:border-[#2d5a2d] hover:text-[#2d5a2d]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          {/* ── Featured Posts ── */}
          {showFeatured && (
            <section
              aria-label="Featured articles"
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#86c87a]" />
                <h2 className="text-xs font-semibold tracking-widest uppercase text-[#86c87a]">
                  Featured
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {featured.map((post) => (
                  <FeaturedCard
                    key={post.id}
                    post={post}
                  />
                ))}
              </div>
            </section>
          )}

          {/* ── All / Filtered Posts ── */}
          <section aria-label="All blog articles">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-[#86c87a]" />
                <h2 className="text-xs font-semibold tracking-widest uppercase text-[#86c87a]">
                  {activeCategory === "All" && !searchQuery
                    ? "Latest Articles"
                    : searchQuery
                      ? `Results for "${searchQuery}"`
                      : activeCategory}
                </h2>
              </div>
              <span className="text-xs text-[#7a9a7a] dark:text-[#5a7a5a]">
                {filtered.length} article{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>

            {gridPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {gridPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-4xl mb-3">🌿</p>
                <p className="text-[#4a5e4a] dark:text-[#8fad8f] font-medium mb-1">
                  No articles found
                </p>
                <p className="text-sm text-[#7a9a7a]">
                  Try a different search term or category.
                </p>
              </div>
            )}
          </section>

          {/* ── Newsletter CTA ── */}
          <aside
            aria-label="Newsletter signup"
            className="mt-20 rounded-3xl bg-[#1a2e1a] text-white px-6 py-12 md:py-16 text-center relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, #4ade80, transparent 60%),
                                  radial-gradient(circle at 70% 30%, #22c55e, transparent 50%)`,
              }}
            />
            <div className="relative">
              <p className="text-[#86c87a] text-xs font-semibold tracking-widest uppercase mb-3">
                Stay Informed
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-3">
                Wellness wisdom, <br />
                <span className="text-[#86c87a] italic">delivered to you.</span>
              </h2>
              <p className="text-[#8fad8f] text-sm max-w-md mx-auto mb-8">
                Join thousands of readers getting natural health insights,
                herbal guides, and exclusive wellness tips every week.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email for newsletter"
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-[#6a8a6a] focus:outline-none focus:ring-2 focus:ring-[#86c87a]/50 text-sm"
                />
                <button className="px-6 py-3 rounded-full bg-[#86c87a] text-[#0d1a0d] font-semibold text-sm hover:bg-[#a0e090] transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
