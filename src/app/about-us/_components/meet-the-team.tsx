"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function MeetTheTeam() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="pulse-title text-3xl md:text-4xl font-bold">Meet The Team</h2>
          <p className="pulse-subtitle text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
            Beam & Bloom Clinic
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative w-full h-96 md:h-112 lg:h-128 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772996213/ye9sgjzlreiszyutlzms.avif"
              alt="Baiba - Founder of Beam & Bloom"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right: Biography */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              Baiba’s passion for helping people feel confident in their own skin. Based in Dartford, Baiba has built her business around the belief that beauty treatments should feel personal, empowering, and completely tailored to each individual.
            </p>
            <p>
              Trained in Permanent Makeup (PMU), facial skin boosters, laser hair removal, laser tattoo removal, and Fractional CO2 resurfacing, Baiba combines advanced aesthetic expertise with a gentle, artistic touch to deliver natural, confidence-enhancing results.
            </p>
            <p>
              At Beam and Bloom, every journey begins with a conversation. Baiba has created a warm, welcoming space where clients feel comfortable, listened to, and supported from consultation through to aftercare. Her commitment to ongoing training and modern, clinically proven treatments ensures safe, effective results, with many clients returning not just for the treatments, but for the trust and care they experience.
            </p>
            <p>
              Beam and Bloom isn’t just about aesthetics, it’s about helping you beam with confidence and bloom into your best self.
            </p>
            <ViewTransitionLink
              href={"/about-us" as Href}
              target="_blank"
              className="inline-flex items-center gap-2 bg-black dark:bg-white dark:text-black text-white px-6 py-3 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Read more
              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
            </ViewTransitionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
