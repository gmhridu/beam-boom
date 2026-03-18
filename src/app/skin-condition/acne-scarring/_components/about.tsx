"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-8 md:py-16 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Left leaf decoration (behind everything) */}
      <div className="absolute top-0 left-0 w-20 h-20 md:w-132 opacity-5">
        <img
          src={
            "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772995282/pdfqaiq7knldhi9y3prm.avif"
          }
          alt="Round shape"
        />
      </div>

      {/* Right gray vertical panel */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="bb-subtitle text-sm font-medium text-gray-600 tracking-wide uppercase">
              Beam & Boom
            </span>
            <h2 className="bb-title text-2xl md:text-5xl font-bold text-nowrap text-gray-900">
              Acne Scarring
            </h2>

            <p className="bb-light-description text-gray-600 leading-relaxed text-lg">
              Acne scarring can remain long after breakouts have cleared, often
              leaving uneven skin texture, visible marks and areas of
              indentation that affect the overall appearance of the skin. These
              scars commonly appear on the cheeks, temples and jawline, and can
              vary in depth and severity.
            </p>
            <p className="bb-light-description text-gray-600 leading-relaxed text-lg">
              At Beam & Bloom, we offer advanced laser treatments designed to
              visibly improve the appearance of acne scars and restore smoother,
              healthier-looking skin. By stimulating collagen production deep
              within the skin, these treatments encourage natural skin
              regeneration, helping to refine texture and improve overall skin
              tone.
            </p>

            <ViewTransitionLink
              href={"/about-us" as Href}
              target="_blank"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              Read more
              <ExternalLink size={16} />
            </ViewTransitionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
