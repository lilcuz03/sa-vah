import type { Metadata } from "next";
import ContactPage from "./page";

export const metadata: Metadata = {
  title: "Contact Us — Wellness Guidance & Support | Sah Veh",
  description:
    "Get in touch with the Sah Veh team for personalised wellness guidance, product enquiries, order support, and partnership opportunities. We're here to help you thrive.",
  keywords: [
    "contact Sah Veh",
    "wellness support South Africa",
    "natural supplements enquiry",
    "holistic health advice",
    "Sah Veh contact",
  ],
  openGraph: {
    title: "Contact Sah Veh — We're Here to Help",
    description:
      "Reach out for personalised wellness guidance, product enquiries, or order support. Our team responds within 1 business day.",
    url: "https://sa-vah.vercel.app/contact",
    siteName: "Sah Veh",
    type: "website",
    images: [
      {
        url: "https://sa-vah.vercel.app/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Sah Veh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sah Veh — We're Here to Help",
    description:
      "Reach out for personalised wellness guidance, product enquiries, or order support.",
  },
  alternates: {
    canonical: "https://sa-vah.vercel.app/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
