"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ExternalLink } from 'lucide-react';
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-8 md:py-16 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">

      {/* Left leaf decoration */}
      <div className="absolute top-0 left-0 w-20 h-20 md:w-132 opacity-5">
        <img src={"/images/about-us-leaves.png"} alt="Round shape" />
      </div>

      {/* Right gray vertical panel - lg only */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 dark:bg-gray-800 z-0 pointer-events-none transition-colors duration-300" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">

          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <span className="bb-subtitle text-xs sm:text-sm font-medium text-gray-600 tracking-wide uppercase">
              Beam & Boom
            </span>
            <h2 className="bb-title text-2xl md:text-5xl font-bold text-nowrap text-gray-900 dark:text-white transition-colors duration-300">
              Stretch Marks
            </h2>
            <div className="bb-light-description text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-10 space-y-4 transition-colors duration-300">
              <p>
                Stretch marks are a natural result of the skin stretching during
                periods of rapid change such as pregnancy, weight fluctuation or
                growth. They commonly appear on areas such as the abdomen, hips,
                thighs and arms, and can affect both men and women.
              </p>

              <p>
                At Beam & Bloom, we offer advanced laser treatments designed to
                visibly improve the appearance of stretch marks while restoring
                smoother, healthier-looking skin. Our treatments work by
                stimulating collagen and elastin deep within the skin,
                encouraging natural regeneration and improving overall skin
                texture and tone.
              </p>
            </div>
            <div className="pt-2">
              <ViewTransitionLink
                href={"/about-us" as Href}
                target="_blank"
                className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
              >
                Read more
                <ExternalLink size={16} />
              </ViewTransitionLink>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative h-70 sm:h-87.5 md:h-100 lg:h-125 w-full sm:w-87.5 md:w-112.5 lg:w-150 overflow-hidden z-10">
              <Image
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1773080339/dm3i9p9pizrudpxicfs4.avif"
                alt="About Beam & Bloom Clinic"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
