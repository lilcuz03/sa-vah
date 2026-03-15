import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <main className="bg-white min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative bg-green-900 py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 playfair">
            About Sah Veh
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your holistic wellness destination. Empowering your mind, body, and
            spirit with natural healing and personalized care.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 playfair">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              We believe that true wellness comes from nurturing the whole self
              — mind, body, and spirit. Our journey began with a simple vision:
              to make premium natural supplements accessible to everyone seeking
              a healthier, more vibrant life.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We partner with ethical farmers and artisans who share our
              commitment to quality and sustainability. Every product we create
              is crafted with intention, using only the purest organic
              ingredients backed by traditional wisdom and modern science.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 playfair text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Value Item */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Pure & Natural
              </h3>
              <p className="text-gray-600">
                We source only the finest organic ingredients, free from
                artificial additives and harmful chemicals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Holistic Wellness
              </h3>
              <p className="text-gray-600">
                We embrace a whole-person approach to health, supporting your
                physical, mental, and spiritual well-being.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We are committed to environmentally responsible practices that
                protect our planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 playfair text-center">
            Why Choose Sah Veh?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              {
                title: "Premium Quality",
                desc: "Every batch is third-party tested for purity and potency.",
              },
              {
                title: "Ethically Sourced",
                desc: "We work directly with sustainable farms and fair trade partners.",
              },
              {
                title: "Expert Formulated",
                desc: "Our products are developed by certified herbalists and nutritionists.",
              },
              {
                title: "Satisfaction Guaranteed",
                desc: "Not satisfied? We offer a full refund within 30 days.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-green-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 playfair">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of premium supplements designed to support
            your natural vitality and well-being.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition duration-300 font-semibold"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
