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
              Beam & Bloom
            </span>
            <h2 className="bb-title text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Laser Hair Removal
              <br />
              at Beam & Bloom
            </h2>

            <div className="bb-light-description text-sm sm:text-base md:text-lg max-w-2xl space-y-3 md:space-y-4">
              <p>
                At <span className='font-bold'>Beam & Bloom</span> in Dartford, we offer advanced laser hair removal treatments designed to safely and effectively reduce unwanted hair while leaving your skin smooth and irritation-free.
              </p>
              <p>
                Our modern laser technology targets the hair follicle with precise pulses of light energy, helping to slow and reduce future hair growth. The treatment is suitable for a wide range of skin tones and areas of the body, providing a long-lasting alternative to shaving, waxing, and other temporary hair removal methods.
              </p>
              <p>
                Laser hair removal is one of the most popular treatments for achieving smoother skin and long-term hair reduction. Sessions are quick, comfortable, and performed by trained professionals using high-quality equipment designed for safe and effective results.
              </p>
              <p>
                With multiple sessions, hair becomes progressively finer and less noticeable, helping you achieve smoother skin and greater confidence.
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
