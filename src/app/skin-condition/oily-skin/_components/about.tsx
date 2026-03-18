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
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="bb-subtitle text-sm font-medium text-gray-600 tracking-wide uppercase">
              Beam & Bloom
            </span>
            <h2 className="bb-title text-2xl md:text-5xl font-bold text-nowrap text-gray-900">
              Oily Skin
            </h2>
            <div className="bb-light-description text-base md:text-lg  max-w-2xl mb-10 space-y-4">
              <p>
                Oily skin occurs when the sebaceous glands produce excess sebum,
                the natural oil that helps protect and hydrate the skin. While
                sebum is essential for maintaining healthy skin, overproduction
                can lead to concerns such as enlarged pores, blackheads,
                congestion, and frequent breakouts.
              </p>
              <p>
                Excess oil can cause the skin to appear shiny, particularly
                across the forehead, nose, and chin (the T-zone). When oil mixes
                with dead skin cells and bacteria, it can block pores and
                contribute to blackheads, blemishes, and uneven skin texture.
              </p>

              <p className="font-bold text-black pt-4">
                Several factors can contribute to oily skin, including:
              </p>

              <ul className="space-y-4">
                <li>
                  <span className="font-bold">
                    • Overactive Sebaceous Glands
                  </span>{" "}
                  – Increased oil production can make pores appear larger and
                  the skin more prone to congestion.
                </li>
                <li>
                  <span className="font-bold">• Hormonal Changes</span> –
                  Fluctuations in hormones can stimulate oil production,
                  particularly during adolescence or periods of hormonal
                  imbalance.
                </li>
                <li>
                  <span className="font-bold">• Genetics and Skin Type</span> –
                  Some individuals naturally produce more oil than others.
                </li>
                <li>
                  <span className="font-bold">• Environmental Factors</span> –
                  Heat, humidity, and certain skincare products can also
                  increase oil production.
                </li>
              </ul>

              <p className="pt-6">
                At Beam & Bloom, we understand that oily and congested skin can
                affect both skin clarity and confidence. Our clinic offers
                advanced treatments designed to deeply cleanse the pores,
                regulate oil production, and restore balance to the skin.
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
