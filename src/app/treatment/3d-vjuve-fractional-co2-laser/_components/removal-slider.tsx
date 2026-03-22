"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface RemovalItem {
  id: string;
  image: string;
  slug: string;
  title?: string;
}

const removalItems: RemovalItem[] = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1774117892/wi2rcgq2fpjmnypq4cmg.avif", // replace with combined image
    slug: "advanced-laser-tattoo-removal",
    title: "Neck Ornamental Design",
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1774118671/tqipuag83qsaqdlmmodi.avif",
    slug: "complete-tattoo-removal",
    title: "Detailed Finger Tattoo",
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1774118771/sn5xujbj4lcawys492ls.avif",
    slug: "safe-laser-tattoo-removal",
    title: "Script Tattoo Removal",
  },
  {
    id: "4",
    image:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1774118818/usksvyte7endkxop4t0s.avif",
    slug: "custom-design-fade",
    title: "Custom Design Fade",
  },
];

export default function RemovalSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(2);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, removalItems.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleItems = removalItems.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <section
      className="py-16 md:py-24 relative bg-gray-900 text-white overflow-hidden"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dyq0ij1yk/image/upload/v1773073650/q4kbnu9g2hktj4opewzm.avif")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Real Patient Results
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced picosecond laser technology delivers safe, effective tattoo
            fading and complete removal with minimal risk of scarring.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {visibleItems.map((item) => (
              <div key={item.id} className="space-y-6">
                {item.title && (
                  <h3 className="text-xl font-semibold text-center">
                    {item.title}
                  </h3>
                )}

                <ViewTransitionLink
                  href={`/treatment/${item.slug}` as Href}
                  className="group relative overflow-hidden rounded-xl shadow-xl bg-gray-800"
                >
                  <div className="relative aspect-4/5 md:aspect-3/4 lg:aspect-square">

                    {/* Image */}
                    <Image
                      src={item.image}
                      alt="Before and After tattoo removal"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-sm"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Divider */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white/70"></div>

                    {/* Before label */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-4 py-2 bg-black/60 rounded-full text-sm font-medium uppercase">
                        Before
                      </span>
                    </div>

                    {/* After label */}
                    <div className="absolute bottom-4 right-4">
                      <span className="px-4 py-2 bg-black/60 rounded-full text-sm font-medium uppercase">
                        After
                      </span>
                    </div>

                  </div>
                </ViewTransitionLink>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-6 mt-12">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all border border-white/20"
            >
              <ArrowLeftIcon size={24} />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all border border-white/20"
            >
              <ArrowRightIcon size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
