"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/app/data/blogs";

const BlogPage = () => {
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <main className="bg-white min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative bg-green-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white mb-6 playfair">
            Wellness Blog
          </h1>
          <p className="text-lg text-white/90 text-center max-w-2xl mx-auto">
            Discover the latest insights on natural health, nutrition tips, and
            holistic well-being from our experts.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-green-600 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/20 hover:border-green-200 hover:bg-white"
              >
                <div className="relative h-64 lg:h-80 overflow-hidden rounded-2xl">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm text-green-800 text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-white/50">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-green-600 font-medium mb-4 opacity-80">
                    <time>{blog.date}</time>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 playfair leading-tight group-hover:text-green-900 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 text-lg">
                    {blog.excerpt}
                  </p>
                  <Link
                    href={`/blog/${blog.id}`}
                    className="group/read inline-flex items-center text-green-600 font-bold text-lg hover:text-green-700 transition-all duration-300 hover:underline hover:underline-offset-4"
                  >
                    Read Full Story
                    <svg
                      className="h-5 w-5 ml-2 group-hover/read:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
