import { StaticImageData } from "next/image";
import ashwagandha from "../../assets/images/product-ashwagandha.jpg";
import hibiscus from "../../assets/images/product-hibiscus.jpg";
import kombucha from "../../assets/images/product-kombucha.jpg";
import moringa from "../../assets/images/product-moringa.jpg";
import ndolwani from "../../assets/images/product-ndolwani.jpg";
import aloe from "../../assets/images/product-aloe.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  details?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Aloe Colon Cleanse Granules",
    price: 120.00,
    description: "Natural colon cleanse and digestive detox support",
    image: "aloe",
    details:
      "Our Aloe Colon Cleanse Granules are specially formulated with pure aloe vera to support digestive health and natural detoxification. Helps promote regular bowel movements, cleanse the colon, and maintain a healthy digestive system. Made with premium-quality aloe vera extract for gentle yet effective cleansing.",
  },
  {
    id: 2,
    name: "Ashwagandha",
    price: 90.00,
    description: "Stress relief and mental wellness support",
    image: "ashwagandha",
    details:
      "Premium Ashwagandha root extract known for its adaptogenic properties. Helps reduce stress and anxiety, boosts energy levels, improves focus and concentration, and supports overall mental wellness. Perfect for managing daily stressors and promoting a sense of calm and balance.",
  },
  {
    id: 3,
    name: "Hibiscus Tea",
    price: 70.00,
    description: "Heart health and blood pressure support",
    image: "hibiscus",
    details:
      "Premium organic hibiscus tea known for its cardiovascular benefits. Helps support healthy blood pressure levels, promotes heart health, and provides rich antioxidants. A delicious and refreshing tea that supports overall wellness and vitality.",
  },
  {
    id: 4,
    name: "Kombucha Gummies",
    price: 80.00,
    description: "Probiotic gut health and digestion support",
    image: "kombucha",
    details:
      "Delicious kombucha gummies packed with probiotics to support digestive health and gut wellness. These tasty gummies contain beneficial bacteria that help maintain a healthy gut microbiome, support digestion, and boost immune function. Perfect for on-the-go gut health support.",
  },
  {
    id: 5,
    name: "Moringa Raw & Organic",
    price: 60.00,
    description: "Superfood nutrition and energy boost",
    image: "moringa",
    details:
      "Raw and organic Moringa powder, known as the 'miracle tree.' Packed with vitamins, minerals, and antioxidants to support overall health and energy. Helps fight inflammation, supports immune function, and provides natural energy without caffeine. A powerful superfood for daily nutrition.",
  },
  {
    id: 6,
    name: "Ndolwani Gummies",
    price: 120.00,
    description: "Relaxation and deep sleep support",
    image: "ndolwani",
    details:
      "Premium sleep support gummies formulated to help you relax and achieve restful sleep. Contains natural ingredients that promote relaxation, reduce stress, and support healthy sleep patterns. Wake up feeling refreshed and energized with these calming sleep gummies.",
  },
];

export const getProductImage = (imageName: string): StaticImageData => {
  const imageMap: Record<string, StaticImageData> = {
    aloe,
    ashwagandha,
    hibiscus,
    kombucha,
    moringa,
    ndolwani,
  };
  return imageMap[imageName] || aloe;
};

export const getProductById = (id: number): Product | undefined => {
  return products.find((p) => p.id === id);
};
