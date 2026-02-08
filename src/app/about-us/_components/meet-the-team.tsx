"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Href, ViewTransitionLink } from "@/components/view-transition-link";

interface Treatment {
  id: string;
  name: string;
  image: string;
  slug: string;
}

const treatments: Treatment[] = [
  {
    id: "1",
    name: "Maria",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/0O9A2624-edit-Edit-crop-copy-2-scaled.jpg",
    slug: "maria",
  },
  {
    id: "2",
    name: "Dr Christina",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/0O9A2644-edit-Edit-crop-copy-scaled.jpg",
    slug: "dr-christina",
  },
  {
    id: "3",
    name: "Vanessa",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/10/PHOTO-2024-10-31-16-57-28.jpg",
    slug: "vanessa",
  },
  {
    id: "4",
    name: "Yasmina",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/0O9A2616-edit-Edit-crop-copy-scaled.jpg",
    slug: "yasmina",
  },
  {
    id: "5",
    name: "Lauren",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/0O9A2611-edit-Edit-crop-copy-4-scaled.jpg",
    slug: "lauren",
  },
  {
    id: "6",
    name: "Lytsa",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/0O9A2600-edit-Edit-crop-copy.jpg",
    slug: "lytsa",
  },
  {
    id: "7",
    name: "Hillary Baldelomar",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/10/Hillary.jpg",
    slug: "hillary-baldelomar",
  },
  {
    id: "8",
    name: "Binti",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/IMG_6834.jpg",
    slug: "binti",
  },
  {
    id: "9",
    name: "Mojan",
    image:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2025/06/cb08c198-5ca7-449d-928c-ba69e12c55bc-e1750340309804.jpg",
    slug: "morjan",
  },
];

export default function MeetTheTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleSlides = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const visibleSlides = getVisibleSlides();
  const maxIndex = Math.max(0, treatments.length - visibleSlides);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleTreatments = treatments.slice(
    currentIndex,
    currentIndex + visibleSlides,
  );

  return (
    <div className="py-16 md:py-24  bg-gray-50">
      <div className="container mx-auto px-4 max-w-8xl w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="md:max-w-2xl">
            {/* <p className="pulse-light-description mb-4">
              We are committed to sourcing and offering the latest, safest and most effective treatments in our clinic, which is why we use only the most advanced laser technology and skin products.
            </p> */}
          </div>
          <div className="text-right">
            <h2 className="pulse-title">Meet The Team</h2>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Treatments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleTreatments.map((treatment) => (
              <ViewTransitionLink
                key={treatment.id}
                href={`/treatment/${treatment.slug}` as Href}
                className="group"
              >
                <div className="relative h-117.5 w-full overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="pulse-light-description absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-medium text-sm md:text-base">
                      {treatment.name}
                    </h3>
                  </div>
                </div>
              </ViewTransitionLink>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="flex justify-end gap-2 mt-8">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Previous treatments"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Next treatments"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
