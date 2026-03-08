"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

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
    subtitle: "BEAM & BLOOM CLINIC",
    title: "Elevating skin. Enhancing confidence.",
    description:
      `Located in Dartford, Beam and Bloom is a boutique aesthetic clinic specialising in advanced laser and skin treatments. We offer carefully curated, non-surgical solutions designed to restore, refine and rejuvenate your skin.

      With a commitment to excellence and client-focused care, every treatment is tailored to achieve natural, confidence-boosting results.
      `,
    backgroundImage:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772993590/uabp4egesz6iryvwgv6w.avif",
    foregroundImage:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772993687/afnkbgzglz8tm4yy3uva.avif",
    buttonText: "Contact Us",
  },
  {
    id: 2,
    subtitle: "BEAM & BLOOM CLINIC",
    title: "Elevated Skin & Laser Clinic",
    description: "Boutique aesthetics in Dartford",
    backgroundImage:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772993590/uabp4egesz6iryvwgv6w.avif",
    foregroundImage:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772993761/c4sehbyzt2sx7kfrspoh.avif",
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

  useEffect(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    const img1 = new window.Image();
    const img2 = new window.Image();

    img1.src = slides[nextIndex].backgroundImage;
    img2.src = slides[nextIndex].foregroundImage;
  }, [currentSlide]);

  return (
    <section
      aria-label="Promotional banner"
      className="banner-wrp relative h-160 md:h-190 lg:h-220 overflow-hidden bg-gray-50"
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
                sizes="(min-width: 1024px) 100vw, 100vw"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>

            {/* Content */}
            <div className="relative container mx-auto h-full z-20">
              <div className="flex h-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 w-full items-center">
                  {/* Left Content */}
                  <div className="lg:col-span-7 xl:col-span-8 space-y-4 sm:space-y-6 pt-16 pl-4 sm:pt-20 sm:pl-0 md:pt-24 lg:pt-0">
                    <span className="pulse-subtitle text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase">
                      {slide.subtitle}
                    </span>
                    <h1 className="pulse-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                      {slide.title}
                    </h1>
                    <p className="pulse-light-description text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mb-6 md:mb-10">
                      {slide.description}
                    </p>
                    <ViewTransitionLink
                      href={"/contact-us" as Href}
                      className="btn btn-black text-sm sm:text-base md:text-lg"
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
                    priority={index === 0}
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

        {/* Slider Controls */}
        <div className="absolute right-4 sm:right-8 md:right-16 lg:right-24 xl:right-70 bottom-4 sm:bottom-6 md:bottom-8 transform -translate-y-1/2 space-x-2 z-10 hidden sm:flex cursor-pointer">
          <button
            type="button"
            onClick={prevSlide}
            className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <CaretLeftIcon
              size={18}
              className="sm:w-5 sm:h-5 text-gray-800 dark:text-white cursor-pointer"
            />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <CaretRightIcon
              size={18}
              className="sm:w-5 sm:h-5 text-gray-800 dark:text-white cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile Slider Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2 z-10 flex sm:hidden cursor-pointer">
          <button
            type="button"
            onClick={prevSlide}
            className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg cursor-pointer"
            aria-label="Previous slide"
          >
            <CaretLeftIcon
              size={16}
              className="text-gray-800 dark:text-white cursor-pointer"
            />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg cursor-pointer"
            aria-label="Next slide"
          >
            <CaretRightIcon
              size={16}
              className="text-gray-800 dark:text-white cursor-pointer"
            />
          </button>
        </div>



        {/* Scroll Down - Hidden on mobile */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
          <ViewTransitionLink
            href={"/about" as Href}
            className="pulse-light-description flex flex-col items-center text-gray-700 dark:text-gray-300"
          >
            <span className="text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
              Scroll Down
            </span>
            <CaretRightIcon size={20} className="sm:w-6 sm:h-6 rotate-90" />
          </ViewTransitionLink>
        </div>
      </div>
    </section>
  );
}
