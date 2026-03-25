"use client";
import React, { useState, useTransition } from "react";
import Link from "next/link";
import type { ContactFormData } from "./actions";
import { sendContactEmail } from "./actions";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    startTransition(async () => {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setMessage("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setMessage("Failed to send message. Please try again.");
      }
    });
  };

  return (
    <main className="bg-white min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative bg-green-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white mb-6 playfair">
            Contact Us
          </h1>
          <p className="text-lg text-white/90 text-center max-w-2xl mx-auto">
            Get in touch with us for personalized wellness guidance and care. We
            are here to help you on your journey to better health.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 playfair">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Have questions about our products or need personalized wellness
                advice? Our team of experts is here to help. Reach out to us
                through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Our Location
                    </h3>
                    <p className="text-gray-600">South Africa</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Email Us
                    </h3>
                    <p className="text-gray-600">info@sahvehinvestment.co.za</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Call Us
                    </h3>
                    <p className="text-gray-600">+27 82 764 2367</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Mon - Fri: 9am - 6pm SAST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              {message && (
                <div
                  className={`p-4 rounded-md mb-4 ${message.includes("success") ? "bg-green-100 text-green-800 border border-green-300" : "bg-red-100 text-red-800 border border-red-300"}`}
                >
                  {message}
                </div>
              )}
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+27 82 000 0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full text-black px-4 py-2 border  rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select a topic</option>
                    <option
                      value="product"
                      className="text-green-600"
                    >
                      Product Inquiry
                    </option>
                    <option
                      value="order"
                      className="text-green-600"
                    >
                      Order Support
                    </option>
                    <option
                      value="wellness"
                      className="text-green-600"
                    >
                      Wellness Advice
                    </option>
                    <option
                      value="partnership"
                      className="text-green-600"
                    >
                      Partnership
                    </option>
                    <option
                      value="other"
                      className="text-green-600"
                    >
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2  text-black rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition duration-200 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 playfair text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What are your shipping times?
              </h3>
              <p className="text-gray-600">
                We typically process and ship orders within 1-2 business days.
                Standard shipping takes 3-5 business days, while express
                shipping delivers within 1-2 business days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 30-day satisfaction guarantee. If you are not
                completely satisfied with your purchase, contact us for a full
                refund.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are your products organic?
              </h3>
              <p className="text-gray-600">
                Yes, all of our supplements are made with 100% organic
                ingredients. We source from certified organic farms and
                third-party test every batch for purity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I take multiple supplements together?
              </h3>
              <p className="text-gray-600">
                Most of our supplements can be taken together. However, we
                recommend consulting with one of our wellness experts or your
                healthcare provider for personalized guidance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you ship internationally?
              </h3>
              <p className="text-gray-600">
                Yes, we ship to over 50 countries worldwide. International
                shipping typically takes 7-14 business days depending on the
                destination. Customs fees may apply.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How should I store your supplements?
              </h3>
              <p className="text-gray-600">
                Store our supplements in a cool, dry place away from direct
                sunlight. Keep the container tightly closed and out of reach of
                children. Most products have a shelf life of 2 years when stored
                properly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are your products vegan-friendly?
              </h3>
              <p className="text-gray-600">
                Yes, all of our supplements are 100% vegan and plant-based. We
                never use animal products or by-products in our formulations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I cancel or modify my order after placing it?
              </h3>
              <p className="text-gray-600">
                You can cancel or modify your order within 24 hours of placing
                it. Please contact our customer support team as soon as possible
                with your order number.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer wholesale or bulk orders?
              </h3>
              <p className="text-gray-600">
                Yes, we offer wholesale pricing for retailers, wellness
                practitioners, and bulk orders. Please contact our partnership
                team at wholesale@sahveh.com for more information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What makes Sah Veh supplements different?
              </h3>
              <p className="text-gray-600">
                We prioritize quality, purity, and transparency. All our
                products are made with premium organic ingredients, manufactured
                in FDA-registered facilities, and third-party tested for
                contaminants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I know which supplements are right for me?
              </h3>
              <p className="text-gray-600">
                Our team of wellness experts is here to help! You can schedule a
                free consultation or reach out through our contact form for
                personalized recommendations based on your health goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 playfair">
            Still Have Questions?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our wellness team is here to help you find the right supplements for
            your needs.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition duration-200 font-semibold"
          >
            Browse Products
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;
