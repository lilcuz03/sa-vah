// app/blog/page.tsx
import type { Metadata } from "next";
import BlogClient from "./blogClient";

export const metadata: Metadata = {
  title: "Wellness Blog | Sah Veh – Natural Health & Holistic Living",
  description:
    "Explore expert-written articles on natural health, herbal remedies, superfoods, gut health, stress relief, and holistic wellness. Discover the Sah Veh blog.",
  keywords: [
    "holistic wellness blog",
    "natural health tips",
    "herbal remedies South Africa",
    "ashwagandha benefits",
    "moringa superfood",
    "gut health probiotics",
    "hibiscus tea heart health",
    "aloe vera digestion",
    "plant-based supplements",
    "Sah Veh wellness",
  ],
  openGraph: {
    title: "Wellness Blog | Sah Veh – Natural Health & Holistic Living",
    description:
      "Expert articles on natural health, herbal remedies, superfoods, and holistic wellness from Sah Veh.",
    url: "https://sa-vah.vercel.app/blog",
    siteName: "Sah Veh",
    images: [
      {
        url: "https://sa-vah.vercel.app/images/01.jpg",
        width: 1200,
        height: 630,
        alt: "Sah Veh Wellness Blog",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness Blog | Sah Veh",
    description:
      "Natural health insights, herbal guides, and holistic wellness tips.",
    images: ["https://sa-vah.vercel.app/images/01.jpg"],
  },
  alternates: {
    canonical: "https://sa-vah.vercel.app/blog",
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

export default function BlogPage() {
  return <BlogClient />;
}
