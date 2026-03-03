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
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">

          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <span className="pulse-subtitle text-xs sm:text-sm font-medium text-gray-600 tracking-wide uppercase">
              Pulse Laser
            </span>
            <h2 className="pulse-title text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Laser Tattoo Removal at Beam and Bloom
            </h2>
            <div className="pulse-light-description text-sm sm:text-base md:text-lg max-w-2xl space-y-3 md:space-y-4">
              <p>
                Do you have a tattoo you regret and want safely removed? At Beam and Bloom in Dartford, we specialise in advanced laser tattoo removal for tattoos of all sizes and colours.
              </p>
              <p>
                Using high-powered laser technology, we deliver precise energy in ultra-short pulses directly into the tattoo ink. This energy breaks the ink down into tiny fragments without damaging the surrounding skin. Over time, your body’s natural healing processes gradually flush away these fragments, allowing the tattoo to fade safely and effectively.
              </p>
              <p>
                Our advanced laser system can target different ink colours using specific wavelengths of light. Darker pigments such as black and blue respond to 1064nm wavelengths, while brighter colours such as red and orange are treated using 532nm. This allows us to treat a wide range of tattoo colours across different skin types.
              </p>
              <p>
                Laser tattoo removal is non-invasive and designed to minimise the risk of scarring or unwanted pigmentation changes. Every treatment begins with a consultation to assess your skin and create a personalised treatment plan.
              </p>
              <p>
                If you have any questions or would like to book a consultation at our Dartford clinic, our team at Beam and Bloom will be happy to help.
              </p>
            </div>
            <div className="pt-2">
              <ViewTransitionLink
                href={"/about-us" as Href}
                target="_blank"
                className="inline-flex items-center gap-2 bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors"
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
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/09/0O9A2759-edit-Edit-copy-scaled.jpg"
                alt="About Pulse Laser Clinic"
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
