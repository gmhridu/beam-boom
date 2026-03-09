"use client";

import { ArrowRightIcon, CaretDownIcon } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';

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


const pricingCategories: PricingCategory[] = [
  {
    id: "diode-laser-hair-removal-for-women",
    title: "Diode Laser Hair Removal for Women",
    subtitle: "Prices from, Per session",
    items: [
      { name: "Underarms & full bikini", price: "£60" },
      { name: "Lower legs, underarms & full bikini", price: "£140" },
      { name: "Full legs, underarms & full bikini", price: "£160" },
      { name: "Full body", price: "£600" },
      { name: "Nipples / naval line / hands / feet", price: "£40" },
      { name: "Underarms", price: "£30" },
      { name: "Bikini line", price: "£20" },
      { name: "Upper lip & chin", price: "£35" },
      { name: "Lower face", price: "£45" },
      { name: "Brazilian bikini (inc. peri-anal)", price: "£55" },
      { name: "Hollywood bikini (inc. peri-anal)", price: "£55" },
      { name: "Lower leg & knee", price: "£60" },
      { name: "Lower face & neck", price: "£60" },
      { name: "Full arms (inc. hands & fingers)", price: "£70" },
      { name: "Full face & neck", price: "£70" },
      { name: "Full back", price: "£100" },
      { name: "Chest & abdomen", price: "£100" },
      { name: "Upper legs & knee", price: "£60" },
      { name: "Full legs (inc. feet & toes)", price: "£80" },
    ],
  },
  {
    id: "3d-vjuve",
    title: "3D Vjuve™ Fractional CO₂ Laser",
    subtitle: "Prices from, per session",
    items: [
      { name: "Half face", price: "£200" },
      { name: "Full face", price: "£400" },
      { name: "Full face & neck", price: "£500" },
      { name: "Stretch marks (starting from)", price: "£200–£400" },
      { name: "Décolletage", price: "£250" },
    ],
  },
  {
    id: "permanent-make-up",
    title: "Permanent Make Up",
    subtitle: "Brows • Lips • Eyeliner",
    items: [
      { name: "Powder / Ombré Brows", session: "Single Session", price: "£270" },
      { name: "Powder / Ombré Brows", session: "Annual Colour Boost", price: "£150" },
      { name: "Lip Blush", session: "Single Session", price: "£270" },
      { name: "Lip Blush", session: "Annual Colour Boost", price: "£150" },
      { name: "Lash Enhancement", session: "Single Session", price: "£200" },
      { name: "Lash Enhancement", session: "Annual Colour Boost", price: "£120" },
    ],
  },
  {
    id: "laser-tattoo-removal",
    title: "Laser Tattoo Removal",
    subtitle: "Prices from, per session",
    items: [
      { name: "Eyebrows", price: "£80" },
      { name: "Extra small (up to 3 cm)", price: "£30" },
      { name: "Small (4–6 cm)", price: "£50" },
      { name: "Medium (7–9 cm)", price: "£100" },
      { name: "Large (10–12 cm)", price: "£150" },
      { name: "Major (13 cm+)", session: "By consultation" },
    ],
  },
  {
    id: "injectable-anti-wrinkle",
    title: "Injectable Treatments",
    subtitle: "Anti-Wrinkle · Per session",
    items: [
      { name: "1 area", price: "£160" },
      { name: "2 areas", price: "£180" },
      { name: "3 areas", price: "£200" },
      { name: "4 areas", price: "£250" },
      { name: "Gummy smile", price: "£150" },
      { name: "Masseter (teeth grinding)", price: "£225" },
      { name: "Anti-sweat — underarms (from)", price: "£225" },
      { name: "Nefertiti neck lift", price: "£225" },
      { name: "Hyaluronidase", price: "£175" },
      { name: "Lip flip", price: "£100" },
      { name: "Dimple chin", price: "£100" },
      { name: "Downturned smile", price: "£100" },
    ],
  },
  {
    id: "injectable-lip-fillers",
    title: "Injectable Treatments",
    subtitle: "Lip Fillers · Per session",
    items: [
      { name: "0.5 ml — Subtle volume & definition", price: "£350" },
      { name: "1 ml — Fuller volume & contour", price: "£450" },
    ],
  },
  {
    id: "injectable-skin",
    title: "Injectable Treatments",
    subtitle: "Skin Boosters · Per session",
    items: [
      { name: "Profhilo (1 treatment)", price: "£200" },
      { name: "Profhilo (2 treatments)", price: "£360" },
      { name: "Polynucleotides — Eyes (Nucleofill)", price: "£190" },
      { name: "Polynucleotides — Face (iluma Luna)", price: "£130" },
      { name: "Polynucleotides — Eyes & Face (same appt.)", price: "£300" },
    ],
  },
];

// ─── Accordion body with proper animated height ───────────────────────────────
function AccordionBody({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Measure real height once mounted / content changes
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [children]);

  return (
    <div
      style={{
        maxHeight: isOpen ? `${height}px` : "0px",
        overflow: "hidden",
        transition: "max-height 0.35s ease",
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}

// ─── Individual card ──────────────────────────────────────────────────────────
function PriceCard({
  card,
  isOpen,
  onToggle,
}: {
  card: PricingCategory;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const lowestPrice = card.items.map((i) => i.price).filter(Boolean)[0];

  return (
    <div className="bg-white shadow-md flex flex-col transition-shadow duration-300 hover:shadow-xl">

      {/* ── Header — always visible ── */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-5 sm:p-6 md:p-8 flex items-start justify-between gap-4 cursor-pointer"
      >
        <div className="flex-1 min-w-0">
          {card.subtitle && (
            <span className="detail inline-block border-b-2 border-blue-400 pb-0.5 uppercase tracking-wider text-xs text-gray-500 font-medium mb-2 sm:mb-3">
              {card.subtitle}
            </span>
          )}
          <h3 className="review-title text-gray-900 text-sm sm:text-base font-semibold leading-snug">
            {card.title}
          </h3>
          {!isOpen && lowestPrice && (
            <p className="text-xs text-gray-400 font-light mt-1.5">
              From{" "}
              <span className="text-gray-700 font-medium">{lowestPrice}</span>
            </p>
          )}
        </div>
        <CaretDownIcon
          size={18}
          className={`text-gray-400 shrink-0 mt-0.5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
            }`}
        />
      </button>

      {/* ── Animated accordion body ── */}
      <AccordionBody isOpen={isOpen}>
        <div className="mx-5 sm:mx-6 md:mx-8 border-t border-gray-100" />

        <div className="px-5 sm:px-6 md:px-8 pt-4 pb-2">
          {card.items.map((item, j) => (
            <div
              key={j}
              className="flex items-start justify-between gap-3 py-2.5 border-b border-gray-50 last:border-0"
            >
              <div className="flex-1 min-w-0">
                <span className="block text-xs sm:text-sm text-gray-600 font-light leading-snug">
                  {item.name}
                </span>
                {item.session && (
                  <span className="block text-xs text-gray-400 font-light mt-0.5 uppercase tracking-wide">
                    {item.session}
                  </span>
                )}
              </div>
              {item.price ? (
                <span className="text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap text-right shrink-0">
                  {item.price}
                </span>
              ) : (
                <span className="text-xs text-gray-400 whitespace-nowrap text-right shrink-0 italic">
                  —
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 pt-3">
          <button className="w-full bg-black text-white py-2.5 sm:py-3 px-4 sm:px-6 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors uppercase text-xs sm:text-sm tracking-wide font-medium">
            <ArrowRightIcon size={14} />
            Book Now
          </button>
        </div>
      </AccordionBody>

      {/* ── Collapsed CTA — only when closed ── */}
      {!isOpen && (
        <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 mt-auto">
          <button
            type="button"
            onClick={onToggle}
            className="w-full border border-gray-200 text-gray-700 py-2.5 px-4 flex items-center justify-center gap-2 hover:border-gray-900 hover:text-gray-900 transition-colors uppercase text-xs tracking-wide font-medium"
          >
            View Prices
            <ArrowRightIcon size={12} />
          </button>
        </div>
      )}
    </div>
  );
}

const PricingSection = () => {

  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));
  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Right gray vertical panel – full height, fixed to right edge */}
      <div className="absolute top-0 right-0 bottom-0 w-[17.7%]  bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        <h2 className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Treatment Prices
        </h2>
        <p className="text-center md:text-left text-lg text-gray-600 mb-12 max-w-3xl">
          Transparent pricing for our most popular laser and aesthetic
          treatments
        </p>

        {/* Cards – now pushed a bit left / constrained so gray shows on right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-start">
          {pricingCategories.map((card) => (
            <PriceCard
              key={card.id}
              card={card}
              isOpen={openId === card.id}
              onToggle={() => toggle(card.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
