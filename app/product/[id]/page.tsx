"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductById, getProductImage, Product } from "../../data/products";
import { notFound } from "next/navigation";

// WhatsApp phone number (NO +)
const WHATSAPP_NUMBER = "27827642367";

interface ProductPageContentProps {
  product: Product;
}

function ProductPageContent({ product }: ProductPageContentProps) {
  const productImage = getProductImage(product.image);

  const message = encodeURIComponent(
    `Hi, I'm interested in the product: ${product.name} (R${product.price.toFixed(
      2,
    )}). Is it available?`,
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8 mt-16">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={productImage}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 playfair">
              {product.name}
            </h1>

            <p className="text-2xl text-green-600 font-bold mb-4">
              R{product.price.toFixed(2)}
            </p>

            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Description:</span>{" "}
              {product.description}
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.details}
            </p>

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition duration-200 font-semibold flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              Buy on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

// Server wrapper
interface ServerProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ServerProductPage({
  params,
}: ServerProductPageProps) {
  const { id } = await params;
  const productId = parseInt(id, 10);

  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  return <ProductPageContent product={product} />;
}
