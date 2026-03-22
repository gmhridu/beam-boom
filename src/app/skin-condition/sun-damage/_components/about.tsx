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
            <span className="bb-subtitle text-xs sm:text-sm font-medium text-gray-600 tracking-wide uppercase">
              Beam & Boom
            </span>
            <h2 className="bb-title text-2xl md:text-5xl font-bold text-nowrap text-gray-900">
              Sun Damage
            </h2>
            <div className="bb-light-description text-base md:text-lg  max-w-2xl mb-10 space-y-4">
              <p>
                Sun damage is one of the most common causes of premature skin
                ageing. Prolonged exposure to ultraviolet (UV) rays can break
                down the skin’s natural collagen and elastin, leading to visible
                changes such as uneven pigmentation, rough texture, fine lines,
                and sun spots.
              </p>

              <div className="pt-4">
                <p className="font-bold text-black mb-2 uppercase tracking-wider">
                  Common signs of sun-damaged skin include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>
                      <span className="font-semibold">
                        Sun Spots (Age Spots)
                      </span>{" "}
                      – Dark patches caused by excess melanin production
                      following UV exposure.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>
                      <span className="font-semibold">Uneven Skin Tone</span> –
                      Areas of pigmentation that make the skin appear blotchy or
                      discoloured.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>
                      <span className="font-semibold">
                        Fine Lines & Wrinkles
                      </span>{" "}
                      – UV damage accelerates the breakdown of collagen,
                      contributing to premature ageing.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>
                      <span className="font-semibold">
                        Rough or Uneven Texture
                      </span>{" "}
                      – Sun damage can leave the skin feeling coarse and less
                      smooth.
                    </span>
                  </li>
                </ul>
              </div>
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
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1774167593/c7hnbbougvq9iz1h6rfn.avif"
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
