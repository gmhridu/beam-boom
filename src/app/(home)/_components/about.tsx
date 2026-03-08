"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    rating: "4.9/5",
    platform: "Treatwell Reviews",
    link: "https://www.treatwell.co.uk/place/pulse-laser-aesthetic-clinic/",
  },
  {
    rating: "5/5",
    platform: "Facebook Reviews",
    link: "https://en-gb.facebook.com/PulseLaserClinic/about/",
  },
  {
    rating: "5/5",
    platform: "Google Reviews",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x4876052c9916e861:0x41505362713b919f",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-8 md:py-16 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Left leaf decoration (behind everything) */}
      <div className="absolute top-0 left-0 w-20 h-20 md:w-132 opacity-5">
        <img src={"/images/about-us-leaves.png"} alt="Round shape" />
      </div>

      {/* Right gray vertical panel */}
      <div className="hidden sm:block absolute top-0 right-0 bottom-0 w-[17.7%] bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <span className="pulse-subtitle text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wide uppercase">
              BEAM & BLOOM CLINIC
            </span>
            <h2 className="pulse-title text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              About Us
            </h2>
            <div className="pulse-light-description text-sm sm:text-base md:text-lg max-w-2xl mb-6 md:mb-10 space-y-3 md:space-y-4">
              <p>
                <span className="pulse-light-description text-sm sm:text-base md:text-lg max-w-2xl space-y-3 md:space-y-4">
                  Beam and Bloom is a specialist skin and laser clinic based in Dartford, founded from Baiba’s passion for helping people feel confident in their own skin.
                </span>
                With advanced training in Permanent Make Up (PMU), laser hair removal, laser tattoo removal and Fractional CO2 resurfacing, Baiba combines clinical precision with a gentle, artistic approach to deliver natural, confidence-enhancing results.
              </p>
              <p>
                Every journey begins with a conversation. From consultation to aftercare, Beam and Bloom offers a warm, welcoming space where treatments are tailored to you, using modern, clinically proven technology with safety and care at the forefront.
              </p>
              <p>
                Beam and Bloom isn’t just about aesthetics. It’s about helping you beam with confidence and bloom into your best self.
              </p>
            </div>
            <ViewTransitionLink
              href={"/about-us" as Href}
              target="_blank"
              className="inline-flex items-center gap-2 bg-black dark:bg-white dark:text-black text-white px-6 sm:px-8 py-2.5 sm:py-3 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Read more
              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
            </ViewTransitionLink>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative h-70 sm:h-87.5 md:h-100 lg:h-125 w-full sm:w-87.5 md:w-112.5 lg:w-150 overflow-hidden z-10">
              <Image
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772384750/rtzfjtzanlhnrvza0zbx.avif"
                alt="About Pulse Laser Clinic"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
