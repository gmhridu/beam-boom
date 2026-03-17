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
            <h2 className="pulse-title text-2xl md:text-5xl font-bold text-nowrap text-gray-900">
              Surgical Scars
            </h2>
            <div className="pulse-light-description text-base md:text-lg  max-w-2xl mb-10 space-y-4">
              <p>
                Surgical scars can develop following medical procedures where
                the skin has been incised or stitched during healing. While
                scarring is a natural part of the body’s repair process, the
                resulting marks can sometimes appear raised, uneven,
                discoloured, or textured, affecting both the appearance and
                confidence of the individual.
              </p>
              <p>
                The final appearance of a surgical scar depends on several
                factors, including the size and depth of the incision, the
                body’s healing response, skin type, and the location of the
                surgery. In some cases, scars may remain visible long after the
                wound has healed, creating areas of thickened tissue,
                indentation, or uneven skin texture.
              </p>

              <p className="font-bold text-black pt-4">
                Common types of surgical scars include:
              </p>

              <p>
                <span className="font-bold">• Flat Surgical Scars</span> – These
                scars lie flush with the skin but may appear lighter or darker
                than the surrounding tissue.
              </p>

              <p>
                <span className="font-bold">• Hypertrophic Scars</span> – Raised
                scars that remain within the boundaries of the surgical
                incision, often appearing red or thickened during healing.
              </p>

              <p>
                <span className="font-bold">• Indented or Atrophic Scars</span>{" "}
                – Depressed scars that occur when underlying tissue is lost
                during healing, leaving the skin with a sunken appearance.
              </p>

              <p className="pt-6">
                At Beam & Bloom, we understand how surgical scars can affect
                both skin confidence and overall appearance. Our clinic offers
                advanced treatments designed to improve the texture, tone and
                appearance of scar tissue.
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
