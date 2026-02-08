"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Href, ViewTransitionLink } from "@/components/view-transition-link";

const reviews = [
  {
    rating: "4.9/5",
    platform: "Treatwell Reviews",
    link: "https://www.treatwell.co.uk/place/pulse-laser-aesthetic-clinic/",
  },
  {
    rating: "5/5",
    platform: "Facebook Reviews",
    link: "https://en-gb.facebook.com/PulseLaserClinic/about/",
  },
  {
    rating: "5/5",
    platform: "Google Reviews",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x4876052c9916e861:0x41505362713b919f",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="pulse-subtitle text-sm font-medium text-gray-600 tracking-wide uppercase">
              Pulse Laser
            </span>
            <h2 className="pulse-title text-3xl md:text-4xl font-bold text-gray-900">
              The Clinic
            </h2>
            <div className="pulse-light-description text-base md:text-lg  max-w-2xl mb-10 space-y-4">
              <p>
                <span className="pulse-description">
                  Located in the prestigious Fitzrovia area of London,{" "}
                </span>
                Pulse Laser Aesthetic Clinic is a distinguished clinic
                recognised for its outstanding results, state-of-the-art
                procedures, and unmatched client service. The clinic was
                established in 2012 by sisters Maria Dinopoulos and Dr Christina
                Philippeos who have a shared passion for aesthetic treatments
                with a personal touch. Our ethos revolves around crafting a
                bespoke journey for each client, utilising cutting-edge and
                scientifically backed treatments to deliver unmatched results in
                our luxurious and welcoming facility.
              </p>
              <p>
                With an unwavering commitment to excellence, which is evident
                from our outstanding client reviews and testimonials, our highly
                experienced team continuously strives for growth and
                development, all while ensuring that our client-centred approach
                remains infused with that unique personal touch that sets us
                apart.
              </p>
            </div>
            {/* <ViewTransitionLink
              href={"/about-us" as Href}
              target="_blank"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              Read more
              <ExternalLink size={16} />
            </ViewTransitionLink> */}
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-100 md:h-125 w-75 md:w-150 overflow-hidden z-10">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/09/0O9A2759-edit-Edit-copy-scaled.jpg"
                alt="About Pulse Laser Clinic"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="absolute top-0 right-0 bottom-0 w-75 md:w-102.5 bg-gray-50">
          <div className="flex flex-col h-full w-full justify-center gap-6 p-6">
            {reviews.map((review) => (
              <ViewTransitionLink
                key={review.platform}
                href={review.link as Href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-50 hover:bg-gray-100 transition-colors p-8 rounded-lg text-center"
              >
                <h3 className="block-title mb-2 group-hover:scale-105 transition-transform">
                  {review.rating}
                </h3>
                <p className="block-details">{review.platform}</p>
              </ViewTransitionLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
