"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { useRef, useState } from "react";

export interface PriceItem {
  name: string;
  price?: string;
  session?: string;
  note?: string;
}

export interface PricingCategory {
  id: string;
  title: string;
  subtitle?: string;
  note?: string;
  items: PriceItem[];
}


export default function OurPrices() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 300; // Adjust based on card width + gap
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

  const pricingCategories: PricingCategory[] = [
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
      id: "diode-laser-hair-removal-for-women",
      title: "DIODE LASER HAIR REMOVAL FOR WOMEN",
      subtitle: "Prices from, Per session",
      items: [
        { name: "Underarms & full bikini", session: "1 session", price: "£60", note: "" },
        { name: "Underarms & full bikini", session: "2 sessions", price: "£160", note: "" },
        { name: "Underarms & full bikini", session: "3 sessions", price: "£300", note: "" },
        { name: "Lower legs,underarms & full bikini", session: "1 session", price: "£140", note: "" },
        { name: "Lower legs,underarms & full bikini", session: "2 session", price: "£375", note: "" },
        { name: "Lower legs,underarms & full bikini", session: "3 session", price: "£675", note: "" },
        { name: "Full legs, underarms & full bikini", session: "1 session", price: "£160", note: "" },
        { name: "Full legs, underarms & full bikini", session: "2 session", price: "£425", note: "" },
        { name: "Full legs, underarms & full bikini", session: "3 session", price: "£750", note: "" },
        {
          name: "Full body",
          session: "1 session",
          price: "£600",
          note: "",
        },
        {
          name: "Full body",
          session: "2 session",
          price: "£1500",
          note: "",
        },
        {
          name: "Full body",
          session: "3 session",
          price: "£2500",
          note: "",
        },
        {
          name: "Nipples / naval line / hands / feet",
          session: "1 session",
          price: "£40",
          note: "",
        },
        {
          name: "Nipples / naval line / hands / feet",
          session: "2 session",
          price: "£100",
          note: "",
        },
        {
          name: "Nipples / naval line / hands / feet",
          session: "3 session",
          price: "£175",
          note: "",
        },
        {
          name: "Underarms",
          session: "1 session",
          price: "£30",
          note: "",
        },
        {
          name: "Underarms",
          session: "2 session",
          price: "£80",
          note: "",
        },
        {
          name: "Underarms",
          session: "3 session",
          price: "£150",
          note: "",
        },
        {
          name: "Bikini line",
          session: "1 session",
          price: "£20",
          note: "",
        },
        {
          name: "Bikini line",
          session: "2 session",
          price: "£50",
          note: "",
        },
        {
          name: "Bikini line",
          session: "3 session",
          price: "£90",
          note: "",
        },
        {
          name: "Upper lip & chin",
          session: "1 session",
          price: "£35",
          note: "",
        },
        {
          name: "Upper lip & chin",
          session: "2 session",
          price: "£95",
          note: "",
        },
        {
          name: "Upper lip & chin",
          session: "3 session",
          price: "£180",
          note: "",
        },
        {
          name: "Lower Face",
          session: "1 session",
          price: "£45",
          note: "",
        },
        {
          name: "Lower Face",
          session: "2 session",
          price: "£120",
          note: "",
        },
        {
          name: "Lower Face",
          session: "3 session",
          price: "£220",
          note: "",
        },
        {
          name: "Brazilian bikini (inc. peri-anal)",
          session: "1 session",
          price: "£55",
          note: "",
        },
        {
          name: "Brazilian bikini (inc. peri-anal)",
          session: "2 session",
          price: "£150",
          note: "",
        },
        {
          name: "Brazilian bikini (inc. peri-anal)",
          session: "3 session",
          price: "£280",
          note: "",
        },
        {
          name: "Hollywood bikini (inc. peri-anal)",
          session: "1 session",
          price: "£55",
          note: "",
        },
        {
          name: "Hollywood bikini (inc. peri-anal)",
          session: "2 session",
          price: "£150",
          note: "",
        },
        {
          name: "Hollywood bikini (inc. peri-anal)",
          session: "3 session",
          price: "£280",
          note: "",
        },
        {
          name: "Lower leg & knee",
          session: "1 session",
          price: "£60",
          note: "",
        },
        {
          name: "Lower leg & knee",
          session: "2 session",
          price: "£160",
          note: "",
        },
        {
          name: "Lower leg & knee",
          session: "3 session",
          price: "£300",
          note: "",
        },
        {
          name: "Lower face & neck",
          session: "1 session",
          price: "£60",
          note: "",
        },
        {
          name: "Lower face & neck",
          session: "2 session",
          price: "£160",
          note: "",
        },
        {
          name: "Lower face & neck",
          session: "3 session",
          price: "£300",
          note: "",
        },
        {
          name: "Full arms (inc. hands & fingers)",
          session: "1 session",
          price: "£70",
          note: "",
        },
        {
          name: "Full arms (inc. hands & fingers)",
          session: "2 session",
          price: "£190",
          note: "",
        },
        {
          name: "Full arms (inc. hands & fingers)",
          session: "3 session",
          price: "£350",
          note: "",
        },
        {
          name: "Full face & neck",
          session: "1 session",
          price: "£70",
          note: "",
        },
        {
          name: "Full face & neck",
          session: "2 session",
          price: "£190",
          note: "",
        },
        {
          name: "Full face & neck",
          session: "3 session",
          price: "£350",
          note: "",
        },
        {
          name: "Full back",
          session: "1 session",
          price: "£100",
          note: "",
        },
        {
          name: "Full back",
          session: "2 session",
          price: "£280",
          note: "",
        },
        {
          name: "Full back",
          session: "3 session",
          price: "£500",
          note: "",
        },
        {
          name: "Chest & abdomen",
          session: "1 session",
          price: "£100",
          note: "",
        },
        {
          name: "Chest & abdomen",
          session: "2 session",
          price: "£280",
          note: "",
        },
        {
          name: "Chest & abdomen",
          session: "3 session",
          price: "£500",
          note: "",
        },
        {
          name: "Upper legs & knee",
          session: "1 session",
          price: "£60",
          note: "",
        },
        {
          name: "Upper legs & knee",
          session: "2 session",
          price: "£160",
          note: "",
        },
        {
          name: "Upper legs & knee",
          session: "3 session",
          price: "£300",
          note: "",
        },
        {
          name: "Full legs (inc. feet & toes)",
          session: "1 session",
          price: "£80",
          note: "",
        },
        {
          name: "Full legs (inc. feet & toes)",
          session: "2 session",
          price: "£210",
          note: "",
        },
        {
          name: "Full legs (inc. feet & toes)",
          session: "3 session",
          price: "£1400",
          note: "",
        },
      ],
    },
    {
      id: "3d-vjuve",
      title: "3D VJUVE™ FRACTIONAL CO2 LASER",
      subtitle: "Prices from, per session",
      items: [
        { name: "Half face", session: "1 session", price: "£200", note: "" },
        { name: "Half face", session: "2 session", price: "£500", note: "" },
        { name: "Half face", session: "3 session", price: "£900", note: "" },
        { name: "Full face", session: "1 session", price: "£400", note: "" },
        { name: "Full face", session: "2 session", price: "£900", note: "" },
        { name: "Full face", session: "3 session", price: "£1600", note: "" },
        { name: "Full face & neck", session: "1 session", price: "£500", note: "" },
        { name: "Full face & neck", session: "2 session", price: "£1275", note: "" },
        { name: "Full face & neck", session: "3 session", price: "£2200", note: "" },
        { name: "Stretch Marks (starting from)", session: "1 session", price: "£200-£400", note: "" },
        { name: "Stretch Marks (starting from)", session: "2 session", price: "£500-£1000", note: "" },
        { name: "Stretch Marks (starting from)", session: "3 session", price: "£1500-£2000", note: "" },
        { name: "Decolletage", session: "1 session", price: "£250", note: "" },
        { name: "Decolletage", session: "2 session", price: "£675", note: "" },
        { name: "Decolletage", session: "3 session", price: "£1,050", note: "" },
      ],
    },
    {
      id: "permanent-make-up",
      title: "PERMANENT MAKE UP (Brows • Lips • Eyeliner)",
      subtitle: "Prices from, per session",
      items: [
        { name: "Powder/ Ombre Brows", session: "Single Session", price: "£270", note: "" },
        { name: "Powder/ Ombre Brows", session: "Annual Colour Boost Session", price: "£150", note: "" },
        { name: "Lip Blush", session: "Single Session", price: "£270", note: "" },
        { name: "Lip Blush", session: "Annual Colour Boost Session", price: "£150", note: "" },
        { name: "Lash Enhancement", session: "Single Session", price: "£200", note: "" },
        { name: "Lash Enhancement", session: "Annual Colour Boost Session", price: "£120", note: "" },
      ],
    },

    {
      id: "laser-tattoo-removal",
      title: "LASER TATTOO REMOVAL",
      subtitle: "Prices from, per session",
      items: [
        { name: "Eyebrows", session: "1 session", price: "£80", note: "" },
        { name: "Extra small (up to 3cm)", session: "1 session", price: "£30", note: "" },
        { name: "Extra small (up to 3cm)", session: "3 session", price: "£81", note: "" },
        { name: "Extra small (up to 3cm)", session: "6 session", price: "£153", note: "" },
        { name: "Extra small (up to 3cm)", session: "9 session", price: "£216", note: "" },
        { name: "Small (4-6cm)", session: "1 session", price: "£50", note: "" },
        { name: "Small (4-6cm)", session: "3 session", price: "£135", note: "" },
        { name: "Small (4-6cm)", session: "6 session", price: "£255", note: "" },
        { name: "Small (4-6cm)", session: "9 session", price: "£360", note: "" },
        { name: "Medium (7-9cm)", session: "1 session", price: "£100", note: "" },
        { name: "Medium (7-9cm)", session: "3 session", price: "£270", note: "" },
        { name: "Medium (7-9cm)", session: "6 session", price: "£510", note: "" },
        { name: "Medium (7-9cm)", session: "9 session", price: "£720", note: "" },
        { name: "Large (10-12cm)", session: "1 session", price: "£150", note: "" },
        { name: "Large (10-12cm)", session: "3 session", price: "£405", note: "" },
        { name: "Large (10-12cm)", session: "6 session", price: "£765", note: "" },
        { name: "Large (10-12cm)", session: "9 session", price: "£1080", note: "" },
        { name: "Major (<13cm)", session: "by consultation", price: "", note: "" },
      ],
      note: "",
    },
    {
      id: "injectable-treatments-anti-wrinkle",
      title: "INJECTABLE TREATMENTS (ANTI-WRINKLE)",
      subtitle: "Prices from, per session",
      items: [
        { name: "1 area", price: "£160", note: "" },
        {
          name: "2 area", price: "£180", note: ""
        },
        {
          name: "3 area", price: "£200", note: ""
        },
        {
          name: "4 area", price: "£250", note: ""
        },
        {
          name: "Gummy smile", price: "£150", note: ""
        },
        {
          name: "Masseter (teeth grinding)", price: "£225", note: ""
        },
        {
          name: "Anti-Sweat (excessive underarm sweating) (from)", price: "£225", note: ""
        },
        {
          name: "Neck Platysmal (Nefertiti Neck Lift)", price: "£225", note: ""
        },
        {
          name: "Hyaluridase", price: "£175", note: ""
        },
        {
          name: "Lip Flip", price: "£100", note: ""
        },
        {
          name: "Dimple Chin", price: "£100", note: ""
        },
        {
          name: "Downturned Smile", price: "£100", note: ""
        }
      ],
    },
    {
      id: "injectable-treatments-lip-fillers",
      title: "INJECTABLE TREATMENTS (LIP FILLERS)",
      subtitle: "Prices from, per session",
      items: [
        { name: "0.5ml (Subtle Volume & Definition)", price: "£350", note: "" },
        { name: "1ml (Fuller Volume & Contour)", price: "£450", note: "" },
      ],
    },
    {
      id: "injectable-treatments-skin-boosters",
      title: "INJECTABLE TREATMENTS (SKIN)",
      subtitle: "Prices from, per session",
      items: [
        { name: "Profhilo (1 treatment)", price: "£200", note: "" },
        { name: "Profhilo (2 treatments)", price: "£360", note: "" },
        { name: "Polynucleotides Eyes (Nucleofill)", price: "£190", note: "" },
        { name: "Polynucleotides Face (iluma Luna)", price: "£130", note: "" },
        { name: "Polynucleotides Eyes and Face (to be completed in the same appointment)", price: "£300", note: "" },
      ],
      note: "",
    },

  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Left vertical panel — reduced width slightly for better balance */}
      <div className="absolute top-0 left-0 bottom-0 w-[22%] bg-white z-0 pointer-events-none">
        {/* Optional subtle leaf decoration — lowered opacity */}
        <div className="absolute top-0 left-0 w-20 h-20 md:w-132 opacity-5">
          <img
            src="/images/about-us-leaves.png"
            alt="Decorative leaves"
            className="object-contain"
          />
        </div>
      </div>

      {/* Main content wrapper — pushed right with left offset + max-width */}
      <div className="relative z-10 container mx-auto px-5 sm:px-8 lg:pl-[16%] lg:pr-8 ">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 items-end">
          <div>
            <p className="pulse-light-description max-w- font-sans">
              Please speak to a member of the reception team for more
              information. This is what helps us deliver the superior results
              our clients have come to expect of us.
            </p>
            {/* Navigation arrows */}
            <div className="flex items-center gap-2 mt-6">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 border border-border flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer"
              >
                <ArrowLeftIcon size={18} className="text-foreground" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 border border-border flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer"
              >
                <ArrowRightIcon size={18} className="text-foreground" />
              </button>
            </div>
          </div>
          <div className="text-right">
            <span className="pulse-subtitle tracking-wide uppercase block mb-2 text-gray-600 font-medium">
              Pulse Laser
            </span>
            <h2 className="pulse-title text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Prices
            </h2>
          </div>
        </div>

        {/* Price cards */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        >
          {pricingCategories.map((card, i) => (
            <div
              key={i}
              className=" min-w-70 md:min-w-[320px] flex-none snap-start bg-white shadow-lg p-8 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-xl"
            >
              <div className="our-price-item flex-1 w-full flex flex-col items-center">
                <h3 className="review-title mb-4 text-gray-900">
                  {card.title}
                </h3>

                {card.subtitle && (
                  <div className=" mb-6 w-full flex justify-center">
                    <span className="detail inline-block border-b-2 border-blue-400 pb-1 uppercase tracking-wider">
                      {card.subtitle}
                    </span>
                  </div>
                )}

                {card.note && (
                  <p className="text-sm text-gray-500 mb-4 italic">
                    {card.note}
                  </p>
                )}

                <div className="space-y-3 mb-8 w-full">
                  {card.items.map((item, j) => (
                    <div
                      key={j}
                      className="grid grid-cols-[1fr_auto_auto] items-center text-gray-600 font-light text-base md:text-lg gap-2"
                    >
                      <span className="text-left">{item.name}</span>

                      <span className="text-center whitespace-nowrap">
                        {item.session}
                      </span>

                      {item.price && (
                        <span className="font-medium text-gray-900 text-right whitespace-nowrap">
                          {item.price}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 px-6 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors uppercase text-sm tracking-wide font-medium mt-auto">
                <ArrowRightIcon size={16} />
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
