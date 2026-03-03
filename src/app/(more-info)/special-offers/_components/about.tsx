"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";



export default function About() {
  return (
    <section id="about" className="py-8 md:py-16 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Left leaf decoration (behind everything) */}
      <div className="absolute top-0 left-0 w-20 h-20 md:w-132 opacity-5">
        <img src={"/images/about-us-leaves.png"} alt="Round shape" />
      </div>

      {/* Right gray vertical panel */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <h2 className="pulse-title text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Laser Hair Removal
            </h2>
            <div className="pulse-light-description text-base md:text-lg  max-w-2xl mb-10 space-y-4">
              <p>
                Treat 2 or more areas & receive 20% ‘multiple area’ discount off
                the standard pricing.
              </p>
              <p>
                Speak to a member of our team for more information or to get a
                bespoke quote
              </p>
            </div>
            <ViewTransitionLink
              href={"/about-us" as Href}
              target="_blank"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              Read more
              <ExternalLink size={16} />
            </ViewTransitionLink>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative h-70 sm:h-87.5 md:h-100 lg:h-125 w-full sm:w-87.5 md:w-112.5 lg:w-150 overflow-hidden z-10">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/09/Heart.jpg"
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
