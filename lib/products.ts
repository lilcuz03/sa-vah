export interface Product {
  id: number;
  name: string;
  price: number;
  slug: string;
  metadescription: string;
  description: string;
  image: string;
  details?: string;
  tagline: string;
  shortDescription?: string;
  benefits: string[];
  howToUse?: string;
  category: string;
  origin?: string;
  format?: string;
  badge?: string | null;
  // SEO fields
  seo: {
    title: string; // <title> tag — 50–60 chars
    metaDescription: string; // <meta name="description"> — 150–160 chars
    keywords: string[]; // informational; not a ranking factor but useful for internal search
    ogTitle: string; // Open Graph title for social sharing
    ogDescription: string; // Open Graph description for social sharing
    canonicalSlug: string; // canonical URL path segment
    schemaDescription: string; // Product schema "description" — plain, factual, no health claims
  };
}

export const getProductImage = (imageName: string): string => {
  const imageMap: Record<string, string> = {
    aloe: "/images/product-aloe.jpg",
    ashwagandha: "/images/product-ashwagandha.jpg",
    hibiscus: "/images/product-hibiscus.jpg",
    kombucha: "/images/product-kombucha.jpg",
    moringa: "/images/product-moringa.jpg",
    ndolwani: "/images/product-ndolwani.png",
  };
  return imageMap[imageName] || "/images/product-aloe.jpg";
};

export const products: Product[] = [
  {
    id: 1,
    name: "Aloe Colon Cleanse Granules",
    tagline: "Digestive Detox",
    shortDescription:
      "Organic aloe vera granules formulated to support daily digestive comfort and regularity.",
    description:
      "Our Aloe Colon Cleanse Granules are crafted from pure organic aloe vera — a plant with centuries of traditional use for digestive wellness. Each dissolvable sachet is designed to be taken as part of a morning routine, supporting comfortable digestion and helping your gut feel at its best. Free from artificial additives, this is a clean, plant-based option for those looking to include a natural digestive supplement in their daily wellness ritual.",
    benefits: [
      "Made with organic aloe vera",
      "Convenient single-serve dissolvable sachets",
      "Free from artificial colours, flavours, and preservatives",
      "Suitable for a daily wellness routine",
    ],
    howToUse:
      "Dissolve one sachet into a glass of warm water each morning, preferably on an empty stomach. For best results, use consistently as part of a balanced diet and healthy lifestyle. Consult your healthcare provider before use if you are pregnant, nursing, or taking medication.",
    price: 120,
    image: "/images/product-aloe.jpg",
    category: "Digestive Health",
    origin: "South Africa",
    format: "Granules",
    badge: "Bestseller",
    slug: "aloe-colon-cleanse-granules",
    metadescription:
      "Shop Sah Veh Aloe Colon Cleanse Granules — organic aloe vera sachets designed to support daily digestive comfort. Natural, plant-based, and free from artificial additives.",
    seo: {
      title: "Aloe Colon Cleanse Granules | Sah Veh Natural Wellness",
      metaDescription:
        "Sah Veh Aloe Colon Cleanse Granules — organic aloe vera sachets to support daily digestive comfort and gut wellness. Plant-based, no artificial additives. Shop now.",
      keywords: [
        "aloe vera granules",
        "aloe colon cleanse",
        "digestive supplement South Africa",
        "organic aloe supplement",
        "natural digestive support",
        "gut wellness supplement",
        "aloe vera detox",
      ],
      ogTitle:
        "Aloe Colon Cleanse Granules — Organic Digestive Support | Sah Veh",
      ogDescription:
        "Pure organic aloe vera in a convenient daily sachet. Support your digestive wellness the natural way with Sah Veh's Aloe Colon Cleanse Granules.",
      canonicalSlug: "aloe-colon-cleanse-granules",
      schemaDescription:
        "Sah Veh Aloe Colon Cleanse Granules are dissolvable sachets made with organic aloe vera, formulated to support digestive comfort as part of a daily wellness routine. Origin: South Africa. Format: Granules.",
    },
  },
  {
    id: 2,
    name: "Ashwagandha",
    tagline: "Stress & Mind",
    shortDescription:
      "Premium KSM-66 ashwagandha root extract capsules rooted in Ayurvedic tradition.",
    description:
      "Ashwagandha (Withania somnifera) has been a cornerstone of Ayurvedic wellness for over 3,000 years. Sah Veh's Ashwagandha capsules use a concentrated root extract — the most studied part of the plant — standardised for consistency in every capsule. Adaptogenic herbs like ashwagandha are traditionally used to support the body's response to everyday stress and fatigue. Vegan-friendly, with no unnecessary fillers, this is a straightforward supplement for those looking to incorporate a time-honoured botanical into their daily routine.",
    benefits: [
      "Standardised ashwagandha root extract",
      "Rooted in 3,000+ years of Ayurvedic tradition",
      "Vegan capsules with no artificial fillers",
      "Convenient twice-daily serving",
    ],
    howToUse:
      "Take one capsule twice daily with food, or as directed by your healthcare practitioner. Consistent daily use over 4–8 weeks is recommended to allow the herb to work as part of your routine. Not recommended during pregnancy without medical guidance.",
    price: 90,
    image: "/images/product-ashwagandha.jpg",
    category: "Stress & Mind",
    origin: "India",
    format: "Capsules",
    badge: "Most Loved",
    slug: "ashwagandha",
    metadescription:
      "Sah Veh Ashwagandha capsules — standardised root extract rooted in Ayurvedic tradition. A vegan-friendly daily botanical supplement. Shop natural wellness online.",
    seo: {
      title: "Ashwagandha Capsules | Ayurvedic Root Extract | Sah Veh",
      metaDescription:
        "Sah Veh Ashwagandha — standardised root extract capsules inspired by 3,000 years of Ayurvedic tradition. Vegan, no artificial fillers. A daily botanical for your wellness routine.",
      keywords: [
        "ashwagandha capsules South Africa",
        "ashwagandha supplement",
        "adaptogen supplement",
        "Ayurvedic herbs online",
        "withania somnifera supplement",
        "natural stress support supplement",
        "ashwagandha root extract",
      ],
      ogTitle: "Ashwagandha Root Extract Capsules | Sah Veh Natural Wellness",
      ogDescription:
        "3,000 years of Ayurvedic tradition in a daily capsule. Sah Veh's standardised Ashwagandha root extract — vegan, clean, and consistent.",
      canonicalSlug: "ashwagandha",
      schemaDescription:
        "Sah Veh Ashwagandha capsules contain standardised ashwagandha (Withania somnifera) root extract, a botanical used in Ayurvedic tradition. Vegan capsules with no artificial fillers. Origin: India. Format: Capsules.",
    },
  },
  {
    id: 3,
    name: "Hibiscus Tea",
    tagline: "Heart & Circulation",
    shortDescription:
      "Loose-leaf hibiscus tea rich in antioxidants — a vibrant, naturally tart daily brew.",
    description:
      "Hibiscus sabdariffa — the deep crimson flower behind this tea — has been enjoyed across East Africa, the Middle East, and the Caribbean for generations, valued as much for its bold, tart flavour as for its rich natural colour. Our loose-leaf Hibiscus Tea is minimally processed to preserve its naturally occurring anthocyanins (the pigments that give it that striking red hue) and vitamin C content. Enjoyed hot or cold, it makes a beautiful, caffeine-free addition to any daily tea ritual.",
    benefits: [
      "Naturally rich in anthocyanins and vitamin C",
      "100% pure hibiscus — no additives or blending agents",
      "Caffeine-free — suitable for any time of day",
      "Sustainably sourced from East Africa",
    ],
    howToUse:
      "Steep one heaped teaspoon of loose-leaf hibiscus in freshly boiled water for 5–7 minutes. Strain and enjoy hot, or brew double-strength and pour over ice for a chilled version. One to two cups daily as part of a balanced diet.",
    price: 70,
    image: "/images/product-hibiscus.jpg",
    category: "Heart Health",
    origin: "East Africa",
    format: "Loose Leaf Tea",
    badge: null,
    slug: "hibiscus-tea",
    metadescription:
      "Sah Veh Loose Leaf Hibiscus Tea — pure, minimally processed hibiscus sabdariffa from East Africa. Naturally rich in anthocyanins. Caffeine-free and deeply flavourful.",
    seo: {
      title: "Hibiscus Tea Loose Leaf | Pure & Caffeine-Free | Sah Veh",
      metaDescription:
        "Sah Veh Hibiscus Tea — 100% pure loose-leaf hibiscus sabdariffa from East Africa. Naturally rich in anthocyanins and vitamin C. Caffeine-free. Enjoy hot or iced daily.",
      keywords: [
        "hibiscus tea South Africa",
        "loose leaf hibiscus tea",
        "hibiscus sabdariffa tea",
        "caffeine free herbal tea",
        "hibiscus tea buy online",
        "natural herbal tea",
        "East African hibiscus",
      ],
      ogTitle: "Pure Loose Leaf Hibiscus Tea | Sah Veh Natural Wellness",
      ogDescription:
        "Bold, tart, and deeply red — Sah Veh's Hibiscus Tea is 100% pure hibiscus sabdariffa from East Africa. Caffeine-free and naturally rich in anthocyanins.",
      canonicalSlug: "hibiscus-tea",
      schemaDescription:
        "Sah Veh Hibiscus Tea is a loose-leaf herbal tea made from 100% hibiscus sabdariffa flowers, minimally processed and free from additives. Caffeine-free. Origin: East Africa. Format: Loose Leaf Tea.",
    },
  },
  {
    id: 4,
    name: "Kombucha Gummies",
    tagline: "Gut Probiotics",
    shortDescription:
      "Chewable probiotic gummies inspired by live-culture fermented kombucha.",
    description:
      "Kombucha has been celebrated in fermentation cultures across Asia and Eastern Europe for centuries — known for its naturally occurring beneficial cultures produced during the brewing process. Sah Veh's Kombucha Gummies bring the essence of that tradition into a convenient, great-tasting chewable format. Each gummy is formulated to complement your daily diet as a probiotic supplement, making it easy to keep gut wellness on your radar without any brewing or preparation. A simple, enjoyable addition to your morning or mealtime routine.",
    benefits: [
      "Contains probiotic cultures inspired by fermented kombucha",
      "Convenient chewable format — no brewing required",
      "Great-tasting with no artificial sweeteners",
      "Easy to incorporate into any daily routine",
    ],
    howToUse:
      "Chew 2 gummies daily, with or without food. Store in a cool, dry place away from direct sunlight. Keep out of reach of children. Not a substitute for a varied and balanced diet.",
    price: 80,
    image: "/images/product-kombucha.jpg",
    category: "Gut Health",
    origin: "South Africa",
    format: "Gummies",
    badge: "New",
    slug: "kombucha-gummies",
    metadescription:
      "Sah Veh Kombucha Gummies — chewable probiotic gummies inspired by fermented kombucha culture. Convenient, great-tasting daily gut supplement. No brewing needed.",
    seo: {
      title: "Kombucha Probiotic Gummies | Chewable Gut Supplement | Sah Veh",
      metaDescription:
        "Sah Veh Kombucha Gummies — chewable probiotic supplement inspired by fermented kombucha. Great-tasting, no brewing required. A simple addition to your daily gut wellness routine.",
      keywords: [
        "kombucha gummies South Africa",
        "probiotic gummies",
        "gut supplement gummies",
        "chewable probiotic supplement",
        "fermented kombucha supplement",
        "gut wellness supplement",
        "probiotic supplement online",
      ],
      ogTitle: "Kombucha Probiotic Gummies | Sah Veh Natural Wellness",
      ogDescription:
        "All the gut-culture tradition of kombucha in a chewable gummy. Sah Veh Kombucha Gummies — convenient, tasty, and free from artificial sweeteners.",
      canonicalSlug: "kombucha-gummies",
      schemaDescription:
        "Sah Veh Kombucha Gummies are chewable probiotic supplements formulated with cultures inspired by fermented kombucha. Free from artificial sweeteners. Origin: South Africa. Format: Gummies.",
    },
  },
  {
    id: 5,
    name: "Moringa Raw & Organic",
    tagline: "Superfood Energy",
    shortDescription:
      "Raw organic moringa leaf powder — a nutrient-dense African superfood in its purest form.",
    description:
      "Moringa oleifera — known across sub-Saharan Africa as the 'miracle tree' — has been a valued food source and botanical for generations, prized for the natural nutrient density of its leaves. Sah Veh's Moringa powder is harvested from organic-farmed moringa trees, dried at low temperatures to preserve its naturally occurring vitamins and minerals, and milled into a fine, versatile powder. A single teaspoon adds a plant-based nutritional boost to smoothies, juices, or meals — making it one of the easiest ways to diversify your daily nutrient intake with a whole-food ingredient.",
    benefits: [
      "Certified organic and minimally processed",
      "Naturally contains iron, calcium, and vitamins A, C & E",
      "Versatile — blends into smoothies, food, or warm water",
      "Sustainably farmed across sub-Saharan Africa",
    ],
    howToUse:
      "Add one level teaspoon to a smoothie, juice, yoghurt, or warm water daily. Can also be mixed into sauces or sprinkled onto food. Start with half a teaspoon if new to moringa. Not recommended as a sole source of nutrition.",
    price: 60,
    image: "/images/product-moringa.jpg",
    category: "Superfoods",
    origin: "Sub-Saharan Africa",
    format: "Powder",
    badge: null,
    slug: "moringa-raw-organic",
    metadescription:
      "Sah Veh Organic Moringa Powder — raw, low-temperature dried moringa oleifera leaf powder from sub-Saharan Africa. Naturally nutrient-dense. Add to smoothies, food, and more.",
    seo: {
      title: "Organic Moringa Powder | Raw & Unprocessed | Sah Veh",
      metaDescription:
        "Sah Veh Organic Moringa Powder — raw moringa oleifera leaf powder sustainably farmed in sub-Saharan Africa. Naturally rich in vitamins and minerals. Versatile daily superfood.",
      keywords: [
        "organic moringa powder South Africa",
        "moringa leaf powder",
        "moringa oleifera supplement",
        "African superfood powder",
        "raw moringa powder",
        "buy moringa powder online",
        "plant based supplement powder",
      ],
      ogTitle: "Raw Organic Moringa Powder | Sah Veh Natural Wellness",
      ogDescription:
        "Pure, raw moringa oleifera leaf powder from sub-Saharan Africa — minimally processed and certified organic. One teaspoon a day, endless ways to use it.",
      canonicalSlug: "moringa-raw-organic",
      schemaDescription:
        "Sah Veh Moringa Raw & Organic is a certified organic moringa oleifera leaf powder, low-temperature dried and minimally processed. Origin: Sub-Saharan Africa. Format: Powder.",
    },
  },
  {
    id: 6,
    name: "Ndolwani Gummies",
    tagline: "Sleep & Calm",
    shortDescription:
      "Traditional African botanical gummies formulated to support evening relaxation and restful sleep.",
    description:
      "Ndolwani is a traditional botanical native to Southern Africa, long used in indigenous wellness practices to ease restlessness and support a calm state before sleep. Sah Veh's Ndolwani Gummies bring this heritage ingredient into a modern, gentle chewable format — formulated without habit-forming compounds and designed to complement your natural sleep cycle rather than override it. Whether you're winding down after a long day or establishing a more consistent bedtime routine, these gummies are a considered, plant-rooted option for evening calm.",
    benefits: [
      "Formulated with traditional Southern African ndolwani botanical",
      "Non-habit-forming formula",
      "Convenient pre-bedtime gummy format",
      "No artificial sedatives or synthetic sleep aids",
    ],
    howToUse:
      "Chew 1–2 gummies 30 minutes before bedtime. Do not exceed 3 gummies in a 24-hour period. Not recommended for use alongside sedative or sleep medication without medical advice. Keep out of reach of children. Consult a healthcare provider before use if pregnant or nursing.",
    price: 120,
    image: "/images/product-ndolwani.jpg",
    category: "Sleep & Calm",
    origin: "Southern Africa",
    format: "Gummies",
    badge: "Heritage Formula",
    slug: "ndolwani-gummies",
    metadescription:
      "Sah Veh Ndolwani Gummies — traditional Southern African botanical in a modern chewable format. Non-habit-forming evening supplement for relaxation and restful sleep.",
    seo: {
      title: "Ndolwani Sleep Gummies | Traditional Botanical | Sah Veh",
      metaDescription:
        "Sah Veh Ndolwani Gummies — a traditional Southern African botanical in a modern chewable form. Non-habit-forming. Designed to support evening calm and restful sleep naturally.",
      keywords: [
        "ndolwani gummies South Africa",
        "natural sleep supplement",
        "sleep gummies South Africa",
        "African botanical sleep supplement",
        "herbal sleep support gummies",
        "non habit forming sleep supplement",
        "evening calm supplement",
      ],
      ogTitle: "Ndolwani Sleep & Calm Gummies | Sah Veh Natural Wellness",
      ogDescription:
        "A revered traditional Southern African botanical, now in a gentle chewable gummy. Sah Veh Ndolwani Gummies — non-habit-forming support for your evening wind-down.",
      canonicalSlug: "ndolwani-gummies",
      schemaDescription:
        "Sah Veh Ndolwani Gummies are chewable wellness gummies formulated with ndolwani, a traditional botanical from Southern Africa historically used to support relaxation. Non-habit-forming, no artificial sedatives. Origin: Southern Africa. Format: Gummies.",
    },
  },
];

export default products;
