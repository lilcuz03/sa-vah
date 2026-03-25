"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import hero from "../assets/images/hero.png";
import hero1 from "../assets/images/hero1.png";
import hero3 from "../assets/images/hero3.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

const slides = [
  {
    title: "Holistic Wellness",
    description: "Empowering your mind, body and spirit.",
    image: hero,
  },
  {
    title: "Natural Healing",
    description: "Restore balance and inner peace.",
    image: hero1,
  },
  {
    title: "Personalized Care",
    description: "Wellness tailored just for you.",
    image: hero3,
  },
];

export default function HeroSlider() {
  return (
    <div className="w-full h-[60vh] md:h-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet-custom",
          bulletActiveClass: "swiper-pagination-bullet-active-custom",
        }}
        effect="fade"
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-green-900/60 to-green-600/40 flex flex-col items-center justify-center text-white text-center p-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 playfair">
                  {slide.title}
                </h2>
                <p className="max-w-xl text-lg md:text-xl">
                  {slide.description}
                </p>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
