// components/SkinConditions.tsx
"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SkinCondition {
  name: string;
  image: string;
  link: string;
}

const skinConditions: SkinCondition[] = [
  {
    name: "Acne Scarring",
    image:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772992781/vcdffpmmkqzw0lmtx1ux.avif",
    link: "/skin-condition/acne-scarring",
  },
  {
    name: "Surgical scars",
    image:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772992921/rotjwqq8gcfxwbcaldhf.avif",
    link: "/skin-condition/spider-thread-veins",
  },
  {
    name: "Stretch marks",
    image:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772993005/lssgwszxv71txe1nthao.avif",
    link: "/skin-condition/anti-ageing-wrinkle-reduction",
  },
  {
    name: "Fine lines and wrinkles",
    image:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772993127/cq5rswcqdbjg7jsc5bwa.avif",
    link: "/skin-condition/eyebags-tired-looking-eyes",
  },
  {
    name: "Sun damage",
    image:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772993217/szmjskfdtek4ljtaqbjv.avif",
    link: "/skin-condition/double-chin-saggy-neck",
  },
  {
    name: "Pigmentation irregularities",
    image:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772993299/s8s6a6bjxpuyn1x2sahj.avif",
    link: "/skin-condition/stretch-marks",
  },
  {
    name: "Enlarged pores",
    image:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772993399/kh33o6tibmia7fmjneza.avif",
    link: "/skin-condition/milia-spots",
  },
  {
    name: "Oily skin",
    image:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772993476/wsvyx9zomqhnpxov5tih.avif",
    link: "/skin-condition/seborrhoeic-warts",
  },

];

export default function SkinConditions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 640) setVisibleSlides(1);
      else if (window.innerWidth < 1024) setVisibleSlides(2);
      else if (window.innerWidth < 1280) setVisibleSlides(3);
      else setVisibleSlides(4);
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const maxIndex = Math.max(0, skinConditions.length - visibleSlides);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleConditions = skinConditions.slice(
    currentIndex,
    currentIndex + visibleSlides,
  );

  return (
    <section className="skin-conditions-wrp light-overlay py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="pulse-subtitle text-xs sm:text-sm md:text-base tracking-wide uppercase block mb-2 text-gray-600 dark:text-gray-400 font-medium">
            Beam & Bloom
          </span>
          <h2 className="pulse-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Skin Conditions
          </h2>
          <p className="pulse-light-description max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg">
            We specialize in treating a wide range of skin conditions with
            cutting-edge laser and aesthetic technology.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {visibleConditions.map((condition) => (
              <ViewTransitionLink
                key={condition.link}
                href={condition.link as Href}
                className="group block"
              >
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[470px] w-full overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl">
                  <Image
                    src={condition.image}
                    alt={condition.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                    <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl drop-shadow-md">
                      {condition.name}
                    </h3>
                  </div>
                </div>
              </ViewTransitionLink>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Previous skin condition"
            >
              <ChevronLeft
                size={20}
                className="sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200"
              />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Next skin condition"
            >
              <ChevronRight
                size={20}
                className="sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
