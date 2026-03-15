import React from "react";
import HeroSlider from "@/components/swiper";
import ProductCard from "@/components/product_card";
import Link from "next/link";
import { products, getProductImage } from "./data/products";
import { blogs, getBlogImage } from "@/app/data/blogs";
import Image from "next/image";

const Home = () => {
  return (
    <main className="bg-white min-h-screen w-full relative">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/27827642367"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative flex items-center justify-center">
          {/* Pulse Ring */}
          <span className="absolute w-16 h-16 rounded-full bg-green-500/40 animate-ping"></span>

          {/* Main Button */}
          <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </div>
      </a>

      {/* Hero Section */}
      <section className="relative min-h-screen">
        <HeroSlider />

        <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 to-green-700/60 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 playfair">
            Natural Wellness, Simplified
          </h1>

          <p className="text-lg text-white/90 max-w-2xl mb-8">
            Premium plant-based supplements crafted to support energy, immunity,
            and everyday vitality — made with pure organic ingredients.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/products"
              className="px-8 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
            >
              Shop Now
            </Link>

            <Link
              href="/about"
              className="px-8 py-3 border border-white text-white rounded-md hover:bg-white hover:text-green-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 playfair">
            Our Wellness Essentials
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Carefully crafted supplements designed to support your daily
            wellness routine.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={getProductImage(product.image)}
            />
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 playfair">
            Wellness Blog
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover insights on natural health, nutrition tips, and holistic
            well-being.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 6).map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <div className="text-sm text-gray-500 mb-3">
                  {blog.date} • {blog.readTime}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 playfair">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4">{blog.excerpt}</p>

                <Link
                  href={`/blog/${blog.id}`}
                  className="text-green-600 font-semibold hover:text-green-700"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            View All Blog Posts
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      {/* <section className="py-20 bg-green-900 px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 playfair">
          Join Our Wellness Community
        </h2>

        <p className="text-white/90 max-w-xl mx-auto mb-8">
          Subscribe to receive wellness tips, special offers, and inspiration
          for your health journey.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg text-green-900"
          />

          <button className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
            Subscribe
          </button>
        </form>
      </section> */}
    </main>
  );
};

export default Home;
