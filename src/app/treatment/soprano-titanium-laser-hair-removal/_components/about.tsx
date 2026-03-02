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
              Soprano Titanium
              <br />
              Laser Hair Removal
            </h2>

            <div className="pulse-light-description text-sm sm:text-base md:text-lg max-w-2xl space-y-3 md:space-y-4">
              <p>
                We are proud to be one of the first clinics in London to use the
                brand new Soprano Titanium Laser Hair Removal technology. If you
                are one of the many millions of people who suffer from unwanted
                hair and want a long-lasting solution, we can offer you a safe,
                effective and painless way to remove unwanted hair through the
                state of the art Soprano Titanium laser. With faster than ever
                treatment times, you can now treat half of your body during your
                lunch hour, painlessly and effortlessly at our London clinic.
              </p>
              <p>
                Soprano Titanium is the next-generation of laser hair removal.
                It’s an effective and permanent hair reduction solution that is
                simple and easy. It takes cutting-edge medical laser technology
                and combines it with the comfort and convenience of a trip to
                the spa. In fact, Soprano Titanium uses new breakthrough
                technology that has been described as one of the most
                comfortable laser hair removal options available. If you’ve had
                laser hair removal elsewhere and thought it was too
                uncomfortable, come and experience the difference.
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
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/AdobeStock_276177323-1-scaled.jpeg"
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
