export interface Product {
  id: number;
  name: string;
  price: number;
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
    shortDescription: "Natural colon cleanse and digestive detox support",
    description:
      "A gentle yet powerful blend of aloe-derived granules that support your digestive system, reduce bloating, and promote a cleaner gut — naturally. Formulated from pure organic aloe vera, this time-tested remedy encourages healthy elimination and restores your body's natural digestive rhythm.",
    benefits: [
      "Supports healthy bowel regularity",
      "Reduces bloating and digestive discomfort",
      "Gentle daily detox for the colon",
      "Promotes nutrient absorption",
    ],
    howToUse:
      "Mix one sachet into a glass of warm water each morning on an empty stomach. Use consistently for best results.",
    price: 120,
    image: "/images/product-aloe.jpg",
    category: "Digestive Health",
    origin: "South Africa",
    format: "Granules",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Ashwagandha",
    tagline: "Stress & Mind",
    shortDescription: "Stress relief and mental wellness support",
    description:
      "Rooted in over 3,000 years of Ayurvedic tradition, Ashwagandha is one of the world's most potent adaptogenic herbs. Our premium root extract helps regulate cortisol levels, ease anxiety, sharpen mental clarity, and restore sustainable energy — your daily shield against modern stress.",
    benefits: [
      "Reduces cortisol and stress hormones",
      "Improves focus and mental clarity",
      "Supports restful sleep",
      "Boosts sustained energy without stimulants",
    ],
    howToUse:
      "Take one capsule twice daily with meals, or as directed by your wellness practitioner. Best taken consistently over 4–8 weeks.",
    price: 90,
    image: "/images/product-ashwagandha.jpg",
    category: "Stress & Mind",
    origin: "India",
    format: "Capsules",
    badge: "Most Loved",
  },
  {
    id: 3,
    name: "Hibiscus Tea",
    tagline: "Heart & Circulation",
    shortDescription: "Heart health and blood pressure support",
    description:
      "Rich in anthocyanins, flavonoids, and vitamin C, our loose-leaf Hibiscus Tea supports healthy blood pressure, cardiovascular function, and vibrant skin from within. Enjoy as a warm or iced daily ritual — tart, floral, and deeply nourishing.",
    benefits: [
      "Supports healthy blood pressure levels",
      "Rich in antioxidants and vitamin C",
      "Promotes cardiovascular health",
      "Natural anti-inflammatory properties",
    ],
    howToUse:
      "Steep one heaped teaspoon in boiling water for 5–7 minutes. Enjoy 1–2 cups daily. Can be served hot or chilled over ice.",
    price: 70,
    image: "/images/product-hibiscus.jpg",
    category: "Heart Health",
    origin: "East Africa",
    format: "Loose Leaf Tea",
    badge: null,
  },
  {
    id: 4,
    name: "Kombucha Gummies",
    tagline: "Gut Probiotics",
    shortDescription: "Probiotic gut health and digestion support",
    description:
      "All the probiotic goodness of live-culture fermented kombucha in a convenient, delicious chewable form. Each gummy supports a thriving microbiome, smoother digestion, and a stronger immune system — no brewing required.",
    benefits: [
      "Replenishes beneficial gut bacteria",
      "Improves digestion and reduces bloating",
      "Strengthens immune function",
      "Convenient daily probiotic dose",
    ],
    howToUse:
      "Chew 2 gummies daily with or without food. Store in a cool, dry place away from direct sunlight.",
    price: 80,
    image: "/images/product-kombucha.jpg",
    category: "Gut Health",
    origin: "South Africa",
    format: "Gummies",
    badge: "New",
  },
  {
    id: 5,
    name: "Moringa Raw & Organic",
    tagline: "Superfood Energy",
    shortDescription: "Superfood nutrition and energy boost",
    description:
      "Harvested from ancient moringa trees in their prime, this nutrient-dense organic powder contains more iron than spinach, more calcium than milk, and more vitamin C than oranges. The original African superfood, now in its purest unprocessed form.",
    benefits: [
      "Packed with iron, calcium, and vitamins A, C & E",
      "Boosts natural energy and vitality",
      "Supports immune system strength",
      "Anti-inflammatory and antioxidant-rich",
    ],
    howToUse:
      "Add one teaspoon to smoothies, juices, or warm water daily. Can also be mixed into yoghurt or sprinkled onto food.",
    price: 60,
    image: "/images/product-moringa.jpg",
    category: "Superfoods",
    origin: "Sub-Saharan Africa",
    format: "Powder",
    badge: null,
  },
  {
    id: 6,
    name: "Ndolwani Gummies",
    tagline: "Sleep & Calm",
    shortDescription: "Relaxation and deep sleep support",
    description:
      "Crafted from a revered traditional African botanical used for generations to ease restlessness and encourage deep, restorative sleep. Ndolwani works gently with your nervous system — calming without sedating, supporting without dependency.",
    benefits: [
      "Promotes deep, restorative sleep",
      "Calms the nervous system naturally",
      "Reduces evening anxiety and restlessness",
      "Non-habit forming formula",
    ],
    howToUse:
      "Chew 1–2 gummies 30 minutes before bedtime. Do not exceed 3 gummies per day. Not recommended for use with sedative medication.",
    price: 120,
    image: "/images/product-ndolwani.jpg",
    category: "Sleep & Calm",
    origin: "Southern Africa",
    format: "Gummies",
    badge: "Heritage Formula",
  },
];
export default products;



