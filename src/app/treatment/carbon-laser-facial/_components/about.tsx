"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ExternalLink } from 'lucide-react';
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-8 md:py-16 lg:py-24 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">

      {/* Left leaf decoration */}
      <div className="absolute top-0 left-0 w-20 h-20 md:w-132 opacity-5">
        <img src={"/images/about-us-leaves.png"} alt="Round shape" />
      </div>

      {/* Right gray vertical panel - lg only */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 dark:bg-gray-900 z-0 pointer-events-none transition-colors duration-300" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">

          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <span className="bb-subtitle text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wide uppercase transition-colors duration-300">
              Beam & Boom
            </span>
            <h2 className="bb-title text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
              Advanced Carbon Laser Facial
            </h2>
            <div className="bb-light-description text-sm sm:text-base md:text-lg max-w-2xl space-y-3 md:space-y-4 dark:text-gray-300 transition-colors duration-300">
              <p>
                At Beam and Bloom in Dartford, we offer the Advanced Carbon Laser Facial — a highly effective, non-invasive treatment designed to deeply cleanse, refine and revitalise the skin.
              </p>
              <p>
                Often referred to as the “Hollywood Facial,” this treatment uses a layer of medical-grade carbon applied to the skin, which is then targeted with laser energy. The laser works to gently heat and remove the carbon particles along with impurities, oil and dead skin cells, leaving the skin clearer, smoother and more radiant.
              </p>
              <p>This advanced treatment helps to exfoliate the skin, reduce excess oil, minimise the appearance of pores, and improve overall skin tone, all with little to no downtime.</p>
            </div>
            <div className="pt-2">
              <ViewTransitionLink
                href={"/about-us" as Href}
                target="_blank"
                className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
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
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1774162490/s8aixrpquvwgdjve50hx.avif"
                alt="Clear and glowing skin after Carbon Laser Facial treatment at Beam & Bloom"
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
