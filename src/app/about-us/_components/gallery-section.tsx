"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/0O9A2796-edit-Edit-copy-scaled.jpg",
    alt: "Bathroom sink with floral mirror",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/0O9A2745-edit-Edit-copy-scaled.jpg",
    alt: "Luxury waiting area with plants and modern lighting",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/0O9A2759-edit-Edit-copy-scaled.jpg",
    alt: "Seating area with arched doorway and ambient lighting",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/0O9A2587-edit-B-Edit-copy-scaled.jpg",
    alt: "Reception desk with Pulse Laser branding",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/0O9A2636-edit-Edit-copy-scaled.jpg",
    alt: "Interior view",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/0O9A2808-edit-Edit-copy-scaled.jpg",
    alt: "Waiting area detail",
  },
  {
    src: "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/0O9A2695-edit-Edit-copy-scaled.jpg",
    alt: "Design element",
  },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) setVisibleSlides(1);
      else if (window.innerWidth < 1024) setVisibleSlides(2);
      else setVisibleSlides(4);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = Math.max(0, images.length - visibleSlides);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleImages = images.slice(
    currentIndex,
    currentIndex + visibleSlides,
  );

  return (
    <section className="bg-[#fdfcfb] py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-28">
        <div className="mb-14 text-center">
          <h2 className="font-serif text-5xl font-medium tracking-tight text-gray-900 md:text-6xl">
            Gallery
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
            We are committed to sourcing and offering the latest, safest and
            most effective treatments in our clinic, which is why we use only
            the most advanced laser technology and skin products.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleImages.map((image) => (
              <ViewTransitionLink
                key={image.src}
                href={`/treatment/${image.src}` as Href}
                className="group"
              >
                <div className="relative h-117.5 w-full overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </ViewTransitionLink>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-end gap-2 mt-8">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
