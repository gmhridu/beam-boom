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
        <img src={"/images/about-us-leaves.png"} alt="Round shape" />
      </div>

      {/* Right gray vertical panel */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 dark:bg-gray-800 z-0 pointer-events-none transition-colors duration-300" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="bb-subtitle text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wide uppercase transition-colors duration-300">
              Beam & Bloom
            </span>
            <h2 className="bb-title text-2xl md:text-5xl font-bold text-nowrap text-gray-900 dark:text-white transition-colors duration-300">
              Double Chin & Saggy Neck
            </h2>
            <div className="bb-light-description text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-10 space-y-4 transition-colors duration-300">
              <p>
                One of the most effective treatments we offer for this concern is
                <span className="font-semibold text-black dark:text-white transition-colors duration-300"> Fractional CO₂ Laser Skin Resurfacing.</span>
              </p>
              <p>
                This advanced laser technology works by creating microscopic channels within the skin, stimulating the body’s natural healing response and encouraging the production of new collagen and elastin. As the skin regenerates, it becomes firmer, smoother, and more tightened.
              </p>

              <p className="font-bold text-black dark:text-white pt-4 transition-colors duration-300">
                Fractional CO₂ laser treatment can help:
              </p>

              <ul className="space-y-4 transition-colors duration-300">
                <li>• Tighten loose skin around the neck and jawline</li>
                <li>
                  <span className="font-semibold">• Loss of Jawline Definition</span> – Skin laxity may soften the natural contour of the jawline.
                </li>
                <li>• Improve skin firmness and elasticity</li>
                <li>• Stimulate collagen production</li>
                <li>• Smooth fine lines and wrinkles</li>
                <li>• Improve overall contour and definition</li>
              </ul>
              <p>
                Over time, the skin becomes noticeably firmer and more lifted as collagen rebuilds and the skin’s structure improves.
              </p>

              <p>
                During your consultation at Beam & Bloom, our specialist will carefully assess the skin and discuss your concerns before creating a personalised treatment plan designed to achieve natural-looking, long-lasting results.
              </p>
            </div>
            <ViewTransitionLink
              href={"/about-us" as Href}
              target="_blank"
              className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-3 font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
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
