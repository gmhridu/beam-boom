"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export default function OurPrices() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 300; // Approximate card width + gap
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

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const pricingCategories = [
    {
      id: "full-treatment-menu",
      title: "Full Treatment Menu",
      subtitle: "",
      items: [
        {
          name: "Full Treatment Menu and Price List",
          price: "",
          note: "View complete pricing",
        },
      ],
    },
    {
      id: "skin-boosters",
      title: "Skin boosters & Bio-stimulators",
      subtitle: "Prices from, Per session",
      items: [
        { name: "Profhilo", price: "1 session £350", note: "" },
        { name: "Profhilo", price: "2 sessions £630", note: "" },
        { name: "Sculptra", price: "£500", note: "" },
        { name: "Polynucleotides Eyes", price: "£300", note: "" },
        { name: "Polynucleotides Face", price: "£300", note: "" },
        {
          name: "Polynucleotides Eyes and Face in same session",
          price: "£540",
          note: "",
        },
      ],
    },
    {
      id: "anti-wrinkle",
      title: "Anti Wrinkle injections",
      subtitle: "Prices from, per session",
      items: [
        { name: "1 Area", price: "£210", note: "" },
        { name: "2 Areas", price: "£270", note: "" },
        { name: "3 Areas", price: "£330", note: "" },
        { name: "Gummy smile", price: "£400", note: "" },
        { name: "Teeth Grinding", price: "£420", note: "" },
        { name: "Male 1 Area", price: "£220", note: "" },
        { name: "Male 2 Areas", price: "£310", note: "" },
        { name: "Male 3 areas", price: "£350", note: "" },
        { name: "Hyperhidrosis (Sweating)", price: "£600", note: "" },
      ],
    },
    {
      id: "dermal-fillers",
      title: "Dermal Fillers",
      subtitle: "Prices from, per session",
      items: [
        { name: "Lip 1/2 ml", price: "£300", note: "" },
        { name: "Lip 1ml", price: "£400", note: "" },
        { name: "Cheeks 1ml", price: "£400", note: "" },
        { name: "Tear Trough", price: "£400", note: "" },
        { name: "Nose correction", price: "£450", note: "" },
        { name: "Nasolabial lines", price: "£350", note: "" },
        { name: "Temples", price: "£420", note: "" },
        { name: "Marionette lines", price: "£400", note: "" },
      ],
    },

    {
      id: "soprano-hair",
      title: "Soprano Hair Removal",
      subtitle: "Course of 6 sessions",
      items: [
        { name: "Upper Lip", price: "£250", note: "" },
        { name: "Chin", price: "£250", note: "" },
        { name: "Underarms", price: "£375", note: "" },
        { name: "Lower Face", price: "£625", note: "" },
        { name: "Brazilian Bikini", price: "£650", note: "" },
        { name: "Hollywood Bikini", price: "£750", note: "" },
        { name: "Lower Legs incl knee", price: "£875", note: "" },
        { name: "Full Legs", price: "£1400", note: "" },
        { name: "Full arms", price: "£875", note: "" },
        { name: "Full Body and Face", price: "£3000", note: "" },
      ],
      note: "20% discount when treating 2 or more areas",
    },
    {
      id: "pico-tattoo",
      title: "Pico Laser Tattoo Removal",
      subtitle: "Prices from, per session",
      items: [
        { name: "Eyebrows", price: "£150", note: "" },
        { name: "Extra Small (>3cm)", price: "£70", note: "" },
        { name: "Small (4-6cm)", price: "£110", note: "" },
        { name: "Medium (7-9cm)", price: "£160", note: "" },
        { name: "Large (10-12cm)", price: "£225", note: "" },
        { name: "Major (<13cm)", price: "by consultation", note: "" },
        { name: "Semi-Permanent Makeup", price: "by consultation", note: "" },
      ],
    },
    {
      id: "rosacea-veins",
      title: "Rosacea / Thread Veins",
      subtitle: "Course of 4 and 6 sessions",
      items: [
        { name: "Half Face", price: "£540 / £750", note: "" },
        { name: "Full Face", price: "£810 / £1125", note: "" },
        { name: "Décolleté", price: "£1080 / £1500", note: "" },
        { name: "Small Facial area", price: "£450 / £625", note: "" },
        { name: "Leg Veins (30 mins)", price: "£630 / £875", note: "" },
        { name: "Leg Veins (60 minutes)", price: "£1080 / £1500", note: "" },
      ],
    },
    {
      id: "picoway",
      title: "PicoWay Picosecond Laser",
      subtitle: "Prices from, per session / Course of 3",
      items: [
        { name: "Half face", price: "£300 / £700", note: "" },
        { name: "Full Face", price: "£450 / £1050", note: "" },
        { name: "Full Face and Neck", price: "£540 / £1260", note: "" },
        { name: "Small Area", price: "£200 / £470", note: "" },
      ],
      note: "Offer: 20% off prices until 28 February",
    },
    {
      id: "hybrid-co2",
      title: "Hybrid Fractional CO2 Laser",
      subtitle: "Prices from, Per session / Course of 3",
      items: [
        { name: "Full face", price: "£750 / £1750", note: "" },
        { name: "Eyes", price: "£300 / £750", note: "" },
        { name: "Lips", price: "£200 / £560", note: "" },
      ],
    },
    {
      id: "clearlift",
      title: "ClearLift Laser",
      subtitle: "Course of 3 and 6 sessions",
      items: [
        { name: "Eyes", price: "£490 / £875", note: "" },
        { name: "Half face", price: "£630 / £1125", note: "" },
        { name: "Full Face", price: "£840 / £1500", note: "" },
        { name: "Full Face and Neck", price: "£1330 / £2375", note: "" },
      ],
    },
    {
      id: "pigmentation",
      title: "Pigmentation Laser",
      subtitle: "Course of 4 and 6 sessions",
      items: [
        { name: "Small Area", price: "£450 / £625", note: "" },
        { name: "Half face", price: "£540 / £750", note: "" },
        { name: "Full Face", price: "£810 / £1125", note: "" },
        { name: "Décolleté", price: "£1085 / £1460", note: "" },
        { name: "Hands", price: "£650 / £875", note: "" },
      ],
    },
    {
      id: "skinpen",
      title: "SkinPen Microneedling",
      subtitle: "Prices from, per session",
      items: [
        { name: "Full Face", price: "£300", note: "" },
        { name: "Full Face and Neck", price: "£350", note: "" },
        { name: "Full Face, Neck and Decollete", price: "£400", note: "" },
        { name: "Additional Areas", price: "+£50", note: "" },
        { name: "With Exosomes", price: "+£150", note: "" },
      ],
    },
    {
      id: "ipixel",
      title: "iPixel Resurfacing",
      subtitle: "Course of 3 and 6 sessions",
      items: [
        { name: "Half Face", price: "£700 / £1250", note: "" },
        { name: "Full Face", price: "£1120 / £2000", note: "" },
        { name: "Full Face and Neck", price: "£1540 / £2750", note: "" },
        { name: "Additional Areas", price: "on consultation", note: "" },
      ],
    },
    {
      id: "morpheus8",
      title: "Morpheus8",
      subtitle: "Course of 3 sessions",
      items: [
        { name: "Eyes only", price: "£945", note: "" },
        { name: "Lower face and neck", price: "£1350", note: "" },
        { name: "Full face and neck", price: "£1750", note: "" },
        { name: "Abdomen", price: "£1890", note: "" },
        { name: "Buttocks", price: "£1890", note: "" },
        { name: "Thighs", price: "£1890", note: "" },
      ],
    },
    {
      id: "medical-facials",
      title: "Medical Facials",
      subtitle: "Prices from, per session",
      items: [
        {
          name: "pHFormula Skin Resurfacing with LED",
          price: "£200",
          note: "",
        },
        {
          name: "DermaClear Hydradermabrasion Facial",
          price: "£175",
          note: "",
        },
        { name: "Deep Extraction Facial", price: "£150", note: "" },
        { name: "Obagi Blue Radiance Peel", price: "£150", note: "" },
        { name: "Bright Eye Treatment", price: "£150", note: "" },
        { name: "Pregnancy Facial", price: "£175", note: "" },
        { name: "Vitamin C GLOW Facial", price: "£150", note: "" },
      ],
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-18 lg:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10 mb-10 md:mb-14">
          <div className="order-2 lg:order-1">
            <p className="pulse-light-description text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Please speak to a member of the reception team for more information. This is what helps us deliver the superior results our clients have come to expect of us.
            </p>

            {/* Arrows – bigger touch target on mobile */}
            <div className="flex items-center gap-3 mt-5 sm:mt-6">
              <button
                onClick={() => scroll("left")}
                className="p-3 sm:p-4 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-200" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-3 sm:p-4 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-200" />
              </button>
            </div>
          </div>

          <div className="text-left lg:text-right order-1 lg:order-2">
            <span className="pulse-subtitle text-xs sm:text-sm md:text-base tracking-wider uppercase font-medium text-gray-600 dark:text-gray-400 block mb-2">
              Pulse Laser
            </span>
            <h2 className="pulse-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Our Prices
            </h2>
          </div>
        </div>

        {/* Cards slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-5 md:gap-6 pb-6 sm:pb-8 scrollbar-hide scroll-smooth -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
          style={{ scrollSnapType: "x mandatory" }} // fallback + stronger enforcement
        >
          {pricingCategories.map((card, i) => (
            <div
              key={card.id || i}
              className={`
                flex-none w-[85vw] sm:w-[75vw] md:w-[45vw] lg:w-[38vw] xl:w-[32vw] 2xl:w-[28vw]
                max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px]
                snap-start
                bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl
                border border-gray-100 dark:border-gray-700
                transition-all duration-300
              `}
            >
              <div className="p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col h-full text-center">
                <h3 className="review-title text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {card.title}
                </h3>

                {card.subtitle && (
                  <div className="mb-4 sm:mb-6">
                    <span className="detail inline-block border-b-2 border-blue-500 dark:border-blue-600 pb-1 text-xs sm:text-sm uppercase tracking-wider font-medium text-gray-600 dark:text-gray-300">
                      {card.subtitle}
                    </span>
                  </div>
                )}

                {card.note && (
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic mb-4 sm:mb-6">
                    {card.note}
                  </p>
                )}

                <div className="space-y-2.5 sm:space-y-3 md:space-y-3.5 flex-1 mb-6 sm:mb-8">
                  {card.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex flex-wrap justify-center items-baseline gap-x-2 gap-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-200"
                    >
                      <span className="font-light text-center">{item.name}</span>
                      {item.price && (
                        <span className="font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          {item.price}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <button className="mt-auto w-full bg-black dark:bg-white dark:text-black text-white py-3 sm:py-3.5 px-5 sm:px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm sm:text-base font-medium uppercase tracking-wide">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
