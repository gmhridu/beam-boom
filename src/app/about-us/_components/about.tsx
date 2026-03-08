"use client";

import Image from "next/image";

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
    <section id="about" className="py-8 md:py-16 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">

      {/* Left leaf decoration (behind everything) */}
      <div className="absolute top-0 left-0 w-20 h-20 md:w-132 opacity-5">
        <img
          src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772995282/pdfqaiq7knldhi9y3prm.avif"
          alt="Decorative leaves"
          className="object-contain"
        />
      </div>

      {/* Right gray vertical panel */}
      <div className="hidden sm:block absolute top-0 right-0 bottom-0 w-[17.7%] bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <span className="pulse-subtitle text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wide uppercase">
              Beam & Bloom
            </span>
            <h2 className="pulse-title text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              The Clinic
            </h2>
            <div className="pulse-light-description text-sm sm:text-base md:text-lg max-w-2xl mb-6 md:mb-10 space-y-3 md:space-y-4">
              <p>
                <span className="pulse-description">
                  Located in Dartford, <span className='font-bold'>Beam & Bloom</span> is a modern aesthetic clinic dedicated to helping clients look and feel their best. Our clinic is known for delivering exceptional results through advanced treatments, high-quality technology, and a personalised approach to every client.

                </span>
                At Beam & Bloom, we believe that every treatment journey should be tailored to the individual. Our focus is on enhancing natural beauty through safe, effective, and results-driven treatments performed in a calm and welcoming environment.
              </p>
              <p>
                Our clinic combines professional expertise with a client-focused experience, ensuring every visitor receives the care, attention, and guidance they deserve. From your initial consultation through to your treatment and aftercare, our goal is to create a comfortable and reassuring experience while helping you achieve your aesthetic goals.
              </p>
              <p>
                With a commitment to quality, safety, and outstanding service, Beam & Bloom continues to build a reputation for delivering trusted treatments and beautiful results for clients across Dartford and the surrounding areas.
              </p>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative h-70 sm:h-87.5 md:h-100 lg:h-125 w-full sm:w-87.5 md:w-112.5 lg:w-150 overflow-hidden z-10">
              <Image
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772384750/rtzfjtzanlhnrvza0zbx.avif"
                alt="About Pulse Laser Clinic"
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
