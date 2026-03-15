import React from "react";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogById, blogs } from "@/app/data/blogs";
import BlogShare from "@/components/blog-share";

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

// SEO metadata
export async function generateMetadata({ params }: BlogPageProps) {
  const { id } = await params;
  const blogId = parseInt(id, 10);
  const blog = getBlogById(blogId);

  if (!blog) {
    return { title: "Blog Not Found - Sah Veh" };
  }

  return {
    title: `${blog.title} - Sah Veh Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { id } = await params;
  const blogId = parseInt(id, 10);
  const blog = getBlogById(blogId);

  if (!blog) notFound();

  const relatedBlogs = blogs
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 2);

  // SEO structured data JSON-LD
  const currentUrl = `https://sahveh.com/blog/${id}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    image: [blog.image],
    author: {
      "@type": "Organization",
      name: "Sah Veh",
    },
    publisher: {
      "@type": "Organization",
      name: "Sah Veh",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
      },
    },
    datePublished: blog.date,
    dateModified: blog.date,
    description: blog.excerpt,
    mainEntityOfPage: currentUrl,
  };

  return (
    <main className="bg-white min-h-screen w-full">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Neatened Breadcrumb - Green theme */}

      {/* Hero Section */}
      <section className="relative bg-green-900 py-16">
        <nav className="50 py-4 px-6 rounded-2xl mb-8 shadow-lg container mx-auto text-sm backdrop-blur-md">
          <ol className="flex items-center gap-2 text-gray-800 font-medium">
            <li>
              <Link
                href="/"
                className=" text-white hover:text-green-700 transition-all p-2 rounded-lg hover:bg-white/50"
              >
                Home
              </Link>
            </li>
            <li className="text-green-400 font-bold text-lg">/</li>
            <li>
              <Link
                href="/blog"
                className=" text-white hover:text-green-700 transition-all p-2 rounded-lg hover:bg-white/50"
              >
                Blog
              </Link>
            </li>
            <li className="text-green-400 font-bold text-lg">/</li>
            <li className="text-white font-bold truncate max-w-md px-3 py-1 rounded-lg shadow-sm">
              {blog.title}
            </li>
          </ol>
        </nav>
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-white/80">{blog.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 playfair">
            {blog.title}
          </h1>
          <p className="text-white/80">{blog.date}</p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-lg mb-12 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title || "Blog Image"}
                fill
                priority
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Excerpt */}
            <div className="mb-8">
              <p className="text-xl text-gray-600 leading-relaxed italic">
                {blog.excerpt}
              </p>
            </div>

            {/* Blog Body */}
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed prose-headings:text-gray-900 prose-a:text-green-600 prose-strong:font-bold"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Share this article
              </h3>
              <BlogShare title={blog.title} />
            </div>

            {/* Related Posts */}
            {relatedBlogs.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 playfair">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedBlogs.map((b) => (
                    <Link
                      key={b.id}
                      href={`/blog/${b.id}`}
                      className="block bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <span className="text-green-600 text-sm font-medium">
                        {b.category}
                      </span>
                      <h4 className="text-lg font-semibold text-gray-900 mt-2 line-clamp-2">
                        {b.title}
                      </h4>
                      <span className="text-green-600 text-sm font-medium mt-2 inline-block">
                        Read more →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      {/* <section className="py-16 bg-green-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 playfair">
            Enjoyed This Article?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to receive more wellness tips and health insights directly
            to your inbox.
          </p>
          <form
            action="/api/newsletter"
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto"
          >
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-green-900 placeholder-green-700/60 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-200 font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section> */}
    </main>
  );
}
