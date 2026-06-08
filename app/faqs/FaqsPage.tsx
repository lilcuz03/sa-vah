import type { Metadata } from "next";
import FaqsPage from "./FaqsPage";

export const metadata: Metadata = {
  title: "FAQs — Common Questions Answered | Sah Veh",
  description:
    "Find answers to the most common questions about Sah Veh's organic supplements — covering orders, shipping, ingredients, wellness guidance, refunds, and wholesale partnerships.",
  keywords: [
    "Sah Veh FAQs",
    "natural supplements FAQ",
    "organic wellness questions",
    "supplement shipping South Africa",
    "plant-based supplement refund policy",
    "wholesale organic supplements",
  ],
  openGraph: {
    title: "FAQs | Sah Veh — Common Questions Answered",
    description:
      "Everything you need to know about Sah Veh products, orders, ingredients, and wellness guidance.",
    url: "https://sa-vah.vercel.app/faqs",
    siteName: "Sah Veh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | Sah Veh",
    description:
      "Everything you need to know about Sah Veh products, orders, ingredients, and wellness guidance.",
  },
  alternates: {
    canonical: "https://sa-vah.vercel.app/faqs",
  },
};

export default function Page() {
  return <FaqsPage />;
}
