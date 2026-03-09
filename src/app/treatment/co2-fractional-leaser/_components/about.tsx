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
              Beam & Boom
            </span>
            <h2 className="pulse-title text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              ClearSkin Pro Acne
              <br />
              Treatment
            </h2>
            <div className="pulse-light-description text-sm sm:text-base md:text-lg max-w-2xl space-y-3 md:space-y-4">
              <p>
                At Beam & Boom Aesthetic Clinic we pride ourselves on offering
                the latest Harmony XL Pro ClearSkin treatment to help treat
                active acne (vulgaris) and acne scars. Using the latest in laser
                acne treatment, our specialist clinic based in Fitzrovia,
                London, assist in reducing the signs and scars of acne in a pain
                free, quick process that has no downtime.
              </p>
              <p>
                ClearSkin PRO is a non-ablative fractional laser treatment with
                a wavelength of 1540 nm. The energy from this laser penetrates
                to the dermis (under the skin’s surface) to create microscopic
                “columns” or zones of thermal injury, triggering the body’s
                healing response: new collagen, elastin, and extracellular
                matrix are produced. It specifically targets sebaceous glands to
                reduce oil production, destroys acne-causing bacteria (e.g., P.
                acnes), and clears deep pore congestion, while still leaving the
                skin surface intact meaning there is little to no downtime with
                this treatment.
              </p>
              <p>A course of 4-6 treatments is required at 2 week intervals.</p>
              <p>Suitable for the treatment of:</p>
              <p>
                <span className="font-bold">• Active acne</span> (including
                moderate to severe forms) such as papules, pustules and
                nodules.{" "}
              </p>
              <p>
                <span className="font-bold">• Excess oiliness</span> and
                overactive sebaceous glands and enlarged pores.
              </p>
              <p>
                <span className="font-bold">• Acne scarring</span> and uneven
                skin texture (post acne marks).
              </p>
              <p>
                <span className="font-bold">• Skin rejuvenation</span> fine
                lines, wrinkles, laxity, uneven tone and texture.
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
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1773043904/ufbp9wtt73zatigyxsos.avif"
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
