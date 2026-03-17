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

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="pulse-subtitle text-sm font-medium text-gray-600 tracking-wide uppercase">
              Beam & Bloom
            </span>
            <h2 className="pulse-title text-2xl md:text-5xl font-bold text-nowrap text-gray-900">
              Stretch Mark Treatment
            </h2>
            <div className="pulse-light-description text-base md:text-lg  max-w-2xl mb-10 space-y-4">
              <p>
                Stretch marks are a natural result of the skin stretching during
                periods of rapid change such as pregnancy, weight fluctuation or
                growth. They commonly appear on areas such as the abdomen, hips,
                thighs and arms, and can affect both men and women.
              </p>

              <p>
                At Beam & Bloom, we offer advanced laser treatments designed to
                visibly improve the appearance of stretch marks while restoring
                smoother, healthier-looking skin. Our treatments work by
                stimulating collagen and elastin deep within the skin,
                encouraging natural regeneration and improving overall skin
                texture and tone.
              </p>
            </div>
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
