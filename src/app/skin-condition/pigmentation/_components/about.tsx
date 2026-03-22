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
              Pigmentation Irregularities
            </h2>
            <div className="bb-light-description text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-10 space-y-4 transition-colors duration-300">
              <p>
                Pigmentation irregularities occur when the skin produces too
                much or too little melanin, the natural pigment responsible for
                skin colour. This can lead to uneven patches of darker or
                lighter skin that affect the overall tone and clarity of the
                complexion.
              </p>

              <p>
                These changes in pigmentation can develop for a number of
                reasons, including sun exposure, hormonal changes, inflammation,
                acne, or skin trauma. Pigmentation concerns can vary in
                appearance and may develop gradually over time.
              </p>

              <p className="font-bold text-black dark:text-white pt-4 transition-colors duration-300">
                Common types of pigmentation irregularities include:
              </p>

              <ul className="space-y-4 transition-colors duration-300">
                <li>
                  <span className="font-bold dark:text-white">• Hyperpigmentation</span> –
                  Darkened patches of skin caused by excess melanin production.
                  This can occur after inflammation, acne, or skin irritation.
                </li>
                <li>
                  <span className="font-bold dark:text-white">• Sun Spots (Age Spots)</span> –
                  Pigmented areas that appear after prolonged sun exposure,
                  commonly found on the face, hands, chest, and shoulders.
                </li>
                <li>
                  <span className="font-bold dark:text-white">• Melasma</span> – A hormonal form
                  of pigmentation that often appears as symmetrical patches on
                  the cheeks, forehead, or upper lip.
                </li>
                <li>
                  <span className="font-bold dark:text-white">
                    • Post-Inflammatory Pigmentation
                  </span>{" "}
                  – Dark marks that remain on the skin after acne, injury, or
                  skin inflammation.
                </li>
              </ul>

              <p className="pt-6">
                At Beam & Bloom, we understand how pigmentation concerns can
                impact confidence and the overall appearance of the skin. Our
                clinic offers advanced treatments designed to resurface the
                skin, restore balance, and improve overall skin tone.
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
          {/* <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative h-70 sm:h-87.5 md:h-100 lg:h-125 w-full sm:w-87.5 md:w-112.5 lg:w-150 overflow-hidden z-10">
              <Image
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1774168136/pa09k7aanb9zs1pu5eil.avif"
                alt="About Beam & Bloom Clinic"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
