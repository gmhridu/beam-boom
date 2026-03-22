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
              Enlarged Pores & Blackheads
            </h2>
            <div className="bb-light-description text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-10 space-y-4 transition-colors duration-300">
              <p>
                Enlarged pores and blackheads are common skin concerns that can
                affect the overall appearance and texture of the skin. Pores are
                small openings in the skin that release oil and sweat, but when
                excess oil, dead skin cells, and debris accumulate, they can
                become clogged and more visible.
              </p>
              <p>
                Blackheads form when pores become blocked with oil (sebum) and
                dead skin cells. When this material is exposed to air, it
                oxidises and turns dark, creating the appearance of small black
                spots on the skin. Enlarged pores often appear more noticeable
                in areas where oil production is higher, such as the nose,
                cheeks, forehead, and chin.
              </p>

              <p className="font-bold text-black dark:text-white pt-4 transition-colors duration-300">
                Factors that contribute to enlarged pores and blackheads
                include:
              </p>

              <ul className="space-y-4 transition-colors duration-300">
                <li>
                  <span className="font-bold">• Excess Oil Production</span> –
                  Overactive sebaceous glands can cause pores to stretch and
                  appear larger.
                </li>
                <li>
                  <span className="font-bold">• Dead Skin Cell Build-Up</span> –
                  When dead skin cells accumulate on the surface, they can block
                  pores and contribute to congestion.
                </li>
                <li>
                  <span className="font-bold">• Loss of Skin Elasticity</span> –
                  As collagen levels decrease with age, pores may appear more
                  prominent.
                </li>
                <li>
                  <span className="font-bold">• Genetics and Skin Type</span> –
                  Some individuals are naturally more prone to enlarged pores
                  and congestion.
                </li>
              </ul>

              <p className="pt-6">
                At Beam & Bloom, we understand how enlarged pores and blackheads
                can impact the overall smoothness and clarity of the skin. Our
                clinic offers advanced treatments designed to deeply resurface
                the skin, improve texture, and refine pore size.
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
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1773079624/vuwrnee1c83mjnf9frze.avif"
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
