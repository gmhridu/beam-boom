"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { CaretRightIcon } from "@phosphor-icons/react";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Slide {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
  foregroundImage: string;
  buttonText: string;
}

const slides: Slide[] = [
  {
    id: 1,
    subtitle: "Beam & Bloom",
    title: "Pricing",
    description:
      "At Beam & Bloom, we offer a range of treatments to help you achieve your desired results. Our prices are transparent and competitive, and we offer a range of payment options to make our treatments accessible to everyone.",
    backgroundImage:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1773076620/yxxpzv0ynyvwvejgh4go.avif",
    foregroundImage:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772384750/rtzfjtzanlhnrvza0zbx.avif",
    buttonText: "Contact Us",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      aria-label="Promotional banner"
      className="relative banner-wrp h-160 md:h-190 lg:h-220 overflow-hidden bg-gray-50"
    >
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            aria-hidden={index !== currentSlide}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 banner-img max-w-392 z-10">
              <Image
                src={slide.backgroundImage}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(min-width: 1024px) 100vw, 100vw"
              />
            </div>

            {/* Content */}
            <div className="relative container mx-auto h-full z-20">
              <div className="flex  h-full">
                <div className="grid lg:grid-cols-12 gap-8 w-full items-center">
                  {/* Left Content */}
                  <div className="lg:col-span-7 xl:col-span-8 space-y-4 sm:space-y-6 pt-16 pl-4 sm:pt-20 sm:pl-0 md:pt-24 lg:pt-0">
                    <span className="pulse-subtitle text-sm md:text-base font-medium tracking-wide uppercase">
                      {slide.subtitle}
                    </span>
                    <h1 className="pulse-title mb-8">{slide.title}</h1>
                    <p className="pulse-light-description text-black! text-base md:text-lg  max-w-2xl mb-10">
                      {slide.description}
                    </p>
                    <ViewTransitionLink
                      href={"/contact-us" as Href}
                      className="btn btn-black"
                    >
                      {slide.buttonText}
                    </ViewTransitionLink>
                  </div>
                </div>
                {/* Right Image */}

                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-140 w-2/8 z-20">
                  <Image
                    src={slide.foregroundImage}
                    alt={slide.title}
                    fill
                    className="object-cover rounded-lg hidden md:block"
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(min-width: 1024px) 33vw, 50vw"
                  />

                  <div className="absolute top-45 -right-23.75 w-20 h-20 md:w-132">
                    <img
                      src={"https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772993867/lefcoitigvkj21s8geax.avif"}
                      alt="Round shape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}


        {/* Scroll Down */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
          <ViewTransitionLink
            href={"/about" as Href}
            className="pulse-light-description flex flex-col items-center"
          >
            <span className="text-lg mb-2">Scroll Down</span>
            <CaretRightIcon size={24} className="rotate-90" />
          </ViewTransitionLink>
        </div>
      </div>
    </section>
  );
}
