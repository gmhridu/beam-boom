"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ExternalLink } from 'lucide-react';
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-8 md:py-16 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">

      {/* Left leaf decoration */}
      <div className="absolute top-0 left-0 w-20 h-20 md:w-132 opacity-5">
        <img src={"/images/about-us-leaves.png"} alt="Decorative leaves" />
      </div>

      {/* Right gray vertical panel - lg only */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 dark:bg-gray-800/50 z-0 pointer-events-none transition-colors duration-300" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">

          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <span className="bb-subtitle text-xs sm:text-sm font-medium text-gray-600 tracking-wide uppercase">
              Beam & Bloom
            </span>
            <h2 className="bb-title text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
              3D Vjuve Fractional
              <br />
              CO2 Laser
            </h2>
            <div className="bb-light-description text-sm sm:text-base md:text-lg max-w-2xl space-y-3 md:space-y-4">
              <p>
                <span className="font-bold">3D VJUVE™ Fractional CO2 Laser</span> is an advanced skin resurfacing and rejuvenation treatment designed to dramatically improve skin texture, tone and overall quality. Using precise fractional laser technology, it creates controlled micro-channels within the skin to stimulate natural collagen production and accelerate cellular renewal.
              </p>
              <p className="dark:text-gray-300 transition-colors duration-300">
                This powerful yet controlled approach allows for customised treatments that target fine lines, wrinkles, acne scars, pigmentation and uneven skin texture. By resurfacing the outer layers while stimulating deeper dermal repair, 3D VJUVE™ delivers both immediate skin refinement and long-term rejuvenation.
              </p>

              <p className="dark:text-gray-300 transition-colors duration-300">Suitable for the treatment of:</p>
              <p className='font-bold text-black dark:text-white transition-colors duration-300'>
                What is 3D VJUVE™ Fractional CO2 Laser good for?
              </p>
              <p className="dark:text-gray-300 transition-colors duration-300 text-base">
                <span className="font-bold">• Skin resurfacing:</span> Improves overall texture, smoothness and radiance.
              </p>
              <p className="dark:text-gray-300 transition-colors duration-300 text-base">
                <span className="font-bold">• Wrinkles and fine lines:</span> Reduces the appearance of lines around the eyes, mouth and forehead.
              </p>
              <p className="dark:text-gray-300 transition-colors duration-300 text-base">
                <span className="font-bold">• Acne scars:</span> Visibly softens and smooths acne scarring.
              </p>
              <p className="dark:text-gray-300 transition-colors duration-300 text-base">
                <span className="font-bold">• Surgical & trauma scars:</span> Improves the appearance of raised or indented scars.
              </p>
              <p className="dark:text-gray-300 transition-colors duration-300 text-base">
                <span className="font-bold">• Pigmentation & sun damage:</span> Targets uneven skin tone, sun spots and discolouration.
              </p>
              <p className="dark:text-gray-300 transition-colors duration-300 text-base">
                <span className="font-bold">• Stretch marks:</span> Helps improve skin texture and appearance.
              </p>

              <p className="dark:text-gray-300 transition-colors duration-300 text-base">
                <span className="font-bold">• Pore size:</span> Minimises enlarged pores for a more refined complexion.
              </p>

              <p className="dark:text-gray-300 transition-colors duration-300 text-base">
                <span className="font-bold">• Skin laxity:</span> Stimulates collagen to tighten and firm ageing skin.
              </p>

              <p className="dark:text-gray-300 transition-colors duration-300 text-base">
                <span className="font-bold">• Uneven skin tone:</span> Restores clarity and brightness.
              </p>

              <p className="dark:text-gray-300 transition-colors duration-300 text-base">
                <span className="font-bold">• Dermal regeneration:</span> Encourages new collagen and elastin production for long-term skin health.
              </p>
            </div>
            <div className="pt-2">
              <ViewTransitionLink
                href={"/about-us" as Href}
                target="_blank"
                className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
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
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1774117805/csbaxx90nfrqb02bj6gn.avif"
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
