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
