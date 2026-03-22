"use client";

import Image from "next/image";

export default function MeetTheTeam() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="bb-title text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Meet Baiba</h2>
          <p className="bb-subtitle text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
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
          </div>
        </div>
      </div>
    </section>
  );
}
