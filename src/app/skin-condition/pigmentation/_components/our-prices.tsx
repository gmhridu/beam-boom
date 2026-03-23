"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { useRef, useState } from "react";

export interface PriceItem {
  name: string;
  price?: string;
  session?: string;
  note?: string;
  link?: string;
}

export interface PricingCategory {
  id: string;
  title: string;
  subtitle?: string;
  note?: string;
  items: PriceItem[];
}

export default function OurPrices() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        direction === "left"
          ? sliderRef.current.scrollLeft - scrollAmount
          : sliderRef.current.scrollLeft + scrollAmount;

      sliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const pricingCategories: PricingCategory[] = [
    {
      id: "pigmentation-removal",
      title: "PIGMENTATION REMOVAL",
      subtitle: "Prices from, per session",
      items: [
        { name: "Single Sun Spot/Lesion", session: "1 session", price: "£65", note: "" },
        { name: "Small area", session: "1 session", price: "£100", note: "" },
        { name: "Medium area", session: "1 session", price: "£145", note: "" },
        { name: "Large area", session: "1 session", price: "£195", note: "" },
      ],
    },
    {
      id: "package-offers",
      title: "PACKAGE OFFERS",
      subtitle: "Recommended course",
      items: [
        { name: "Pack of 3 (Medium)", session: "3 sessions", price: "£385", note: "Save £50" },
        { name: "Pack of 6 (Medium)", session: "6 sessions", price: "£720", note: "Save £150" },
      ],
    },
    {
      id: "full-treatment-menu",
      title: "Full Treatment Menu",
      subtitle: "",
      items: [
        {
          name: "Full Treatment Menu and Price List",
          price: "",
          note: "View complete pricing",
          link: "/Beam and Bloom Treatment Menu.pdf",
        },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      {/* Left vertical panel — lg only */}
      <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-[22%] bg-white dark:bg-gray-900 z-0 pointer-events-none transition-colors duration-300">
        <div className="absolute top-0 left-0 w-20 h-20 md:w-132 opacity-5">
          <img
            src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772995282/pdfqaiq7knldhi9y3prm.avif"
            alt="Decorative leaves"
            className="object-contain"
          />
        </div>
      </div>

      {/* Main content wrapper */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:pl-[16%] lg:pr-8">

        {/* Section Header */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-14 items-end">
          <div>
            <p className="bb-light-description font-sans text-sm sm:text-base dark:text-gray-300 transition-colors duration-300">
              Speak with our specialists about our advanced treatment options for reducing pigmentation, clearing sun spots, and achieving a more radiant, even skin tone.
            </p>
            {/* Navigation arrows */}
            <div className="flex items-center gap-2 mt-4 sm:mt-6 transition-colors duration-300">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 sm:w-10 sm:h-10 border border-border dark:border-gray-700 flex items-center justify-center hover:bg-secondary dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
              >
                <ArrowLeftIcon size={16} className="text-foreground dark:text-white transition-colors duration-300" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 sm:w-10 sm:h-10 border border-border dark:border-gray-700 flex items-center justify-center hover:bg-secondary dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
              >
                <ArrowRightIcon size={16} className="text-foreground dark:text-white transition-colors duration-300" />
              </button>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="bb-subtitle tracking-wide uppercase block mb-2 text-gray-600 dark:text-gray-400 font-medium text-xs sm:text-sm transition-colors duration-300">
              Beam & Bloom
            </span>
            <h2 className="bb-title text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4 transition-colors duration-300">
              Our Prices
            </h2>
          </div>
        </div>

        {/* Price cards slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 sm:pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
        >
          {pricingCategories.map((card, i) => (
            <div
              key={i}
              className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] flex-none snap-start bg-white dark:bg-gray-800 shadow-lg p-5 sm:p-6 md:p-8 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-xl border border-transparent dark:border-gray-700"
            >
              <div className="our-price-item flex-1 w-full flex flex-col items-center">
                <h3 className="review-title mb-3 sm:mb-4 text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300">
                  {card.title}
                </h3>

                {card.subtitle && (
                  <div className="mb-4 sm:mb-6 w-full flex justify-center transition-colors duration-300">
                    <span className="detail Laser inline-block border-b-2 border-blue-400 pb-1 uppercase tracking-wider text-xs sm:text-sm dark:text-white transition-colors duration-300">
                      {card.subtitle}
                    </span>
                  </div>
                )}

                {card.note && (
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4 italic transition-colors duration-300">
                    {card.note}
                  </p>
                )}

                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 w-full transition-colors duration-300">
                  {card.items.map((item, j) => (
                    <div
                      key={j}
                      className="grid grid-cols-[1fr_auto_auto] items-center text-gray-600 dark:text-gray-400 font-light text-sm md:text-base lg:text-lg gap-1 sm:gap-2 transition-colors duration-300"
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-left text-xs sm:text-sm md:text-base text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors duration-300"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span className="text-left text-xs sm:text-sm md:text-base">{item.name}</span>
                      )}
                      <span className="text-center whitespace-nowrap text-xs sm:text-sm md:text-base">
                        {item.session}
                      </span>
                      {item.price && (
                        <span className="font-medium text-gray-900 dark:text-white text-right whitespace-nowrap text-xs sm:text-sm md:text-base transition-colors duration-300">
                          {item.price}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-black dark:bg-white text-white dark:text-black py-2.5 sm:py-3 px-4 sm:px-6 flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors uppercase text-xs sm:text-sm tracking-wide font-medium mt-auto">
                <ArrowRightIcon size={14} />
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
