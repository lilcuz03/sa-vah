// app/blog/[id]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostById, getAllPostIds } from "./blog";
import BlogPostClient from "./BlogPostClient";

// ─── Static generation ────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllPostIds().map((id) => ({ id }));
}

// ─── Dynamic SEO metadata ─────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return {
      title: "Article Not Found | Sah Veh Blog",
      description: "The article you are looking for could not be found.",
    };
  }

  const canonicalUrl = `https://sa-vah.vercel.app/blog/${post.slug}`;
  const imageUrl = `https://sa-vah.vercel.app${post.ogImage}`;

  return {
    title: `${post.title} | Sah Veh Wellness Blog`,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: `${post.title} | Sah Veh`,
      description: post.metaDescription,
      url: canonicalUrl,
      siteName: "Sah Veh",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_ZA",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) notFound();

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `https://sa-vah.vercel.app${post.ogImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://sa-vah.vercel.app/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Sah Veh",
      logo: {
        "@type": "ImageObject",
        url: "https://sa-vah.vercel.app/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sa-vah.vercel.app/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "en-ZA",
    about: {
      "@type": "Thing",
      name: post.category,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://sa-vah.vercel.app",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://sa-vah.vercel.app/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `https://sa-vah.vercel.app/blog/${post.slug}`,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
