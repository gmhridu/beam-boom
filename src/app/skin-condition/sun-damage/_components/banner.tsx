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
    subtitle: "BEAM & BLOOM CLINIC",
    title: "SUN DAMAGE",
    description: "Repair and rejuvenate sun-damaged skin with our advanced laser treatments. Targeted solutions for pigmentation, uneven tone, and texture.",
    backgroundImage:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772993687/afnkbgzglz8tm4yy3uva.avif",
    foregroundImage:
      "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1773076620/yxxpzv0ynyvwvejgh4go.avif",
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

  return (
    <section
      aria-label="Promotional banner"
      className="relative h-160 md:h-190 lg:h-220 overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
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
            <div className="absolute inset-0 banner-img z-10">
              <Image
                src={slide.backgroundImage}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(min-width: 1024px) 100vw, 100vw"
              />
            </div>

            {/* Content */}
            <div className="relative container mx-auto h-full z-20">
              <div className="flex  h-full">
                <div className="grid lg:grid-cols-12 gap-8 w-full items-center">
                  {/* Left Content */}
                  <div className="lg:col-span-7 xl:col-span-8 space-y-4 sm:space-y-6 pt-16 pl-4 sm:pt-20 sm:pl-0 md:pt-24 lg:pt-0">
                    <span className="bb-subtitle text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase transition-colors duration-300">
                      {slide.subtitle}
                    </span>
                    <h1 className="bb-title mb-8 text-black dark:text-white transition-colors duration-300">{slide.title}</h1>
                    <p className="bb-light-description text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-2xl mb-10 transition-colors duration-300">
                      {slide.description}
                    </p>
                    <ViewTransitionLink
                      href={"/contact-us" as Href}
                      className="btn btn-black dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-300"
                    >
                      {slide.buttonText}
                    </ViewTransitionLink>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* Social Media */}
        <div className="absolute left-17.5 bottom-12.5 z-30 hidden md:block">
          <ul className="flex items-center p-0 m-0">

            {/* Facebook */}
            <li className="list-none text-[20px] leading-5 text-black dark:text-white px-5 border-r border-dashed border-[#4995D1] dark:border-gray-700 first:pl-0 transition-colors duration-300">
              <a
                href="https://www.facebook.com/share/17CxaNUTbm/?mibextid=wwXIfr"
                target="_blank"
                className="flex items-center transition-all duration-500 no-underline text-inherit outline-none"
              >
                <svg
                  className="h-5 w-auto"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                  />
                </svg>
                <span className="ml-2.5">Facebook</span>
              </a>
            </li>

            {/* TikTok */}
            <li className="list-none text-[20px] leading-5 text-black dark:text-white px-5 border-r border-dashed border-[#4995D1] dark:border-gray-700 transition-colors duration-300">
              <a
                href="https://www.tiktok.com/@beamandbloomclinic?_r=1&_t=ZN-952YImbFqC7" // replace with your real TikTok link
                target="_blank"
                className="flex items-center transition-all duration-500 no-underline text-inherit outline-none"
              >
                <svg
                  className="h-5 w-auto"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M448,209.9a210.1,210.1,0,0,1-122.8-39.5V349.7A162.6,162.6,0,1,1,185,188.3v89.2a74.6,74.6,0,1,0,52.2,71.3V0h88a121.2,121.2,0,0,0,122.8,121.2Z"
                  />
                </svg>
                <span className="ml-2.5">TikTok</span>
              </a>
            </li>

            {/* Instagram */}
            <li className="list-none text-[20px] leading-5 text-black dark:text-white px-5 transition-colors duration-300">
              <a
                href="https://www.instagram.com/beamandbloomclinic?igsh=MWZhNm0xN3BlOWw4Zw%3D%3D&utm_source=qr"
                target="_blank"
                className="flex items-center transition-all duration-500 no-underline text-inherit outline-none"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.75 2C4.68 2 2 4.68 2 7.75v8.5C2 19.32 4.68 22 7.75 22h8.5C19.32 22 22 19.32 22 16.25v-8.5C22 4.68 19.32 2 16.25 2h-8.5zm0 2h8.5C18.43 4 20 5.57 20 7.75v8.5c0 2.18-1.57 3.75-3.75 3.75h-8.5C5.57 20 4 18.43 4 16.25v-8.5C4 5.57 5.57 4 7.75 4zm4.25 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-2.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
                </svg>
                <span className="ml-2.5">Instagram</span>
              </a>
            </li>

          </ul>
        </div>
        {/* Scroll Down */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block transition-colors duration-300">
          <ViewTransitionLink
            href={"/about" as Href}
            className="bb-light-description flex flex-col items-center text-gray-700 dark:text-gray-300 transition-colors duration-300"
          >
            <span className="text-lg mb-2">Scroll Down</span>
            <CaretRightIcon size={24} className="rotate-90" />
          </ViewTransitionLink>
        </div>
      </div>
    </section>
  );
}
