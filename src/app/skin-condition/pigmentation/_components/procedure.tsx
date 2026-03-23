import Image from "next/image";

export default function Procedure() {
  return (
    <section
      id="procedure"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 banner-wrp relative overflow-hidden transition-colors duration-300"
    >
      {/* right side */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-white dark:bg-gray-900 z-0 pointer-events-none transition-colors duration-300" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center justify-between mb-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Pigmentation Treatment
            </h2>
            <div className="space-y-4 text-[#757575] dark:text-gray-300 transition-colors duration-300">
              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                One of the most effective treatments available is{" "}
                <span className="text-black dark:text-white font-semibold transition-colors duration-300">
                  Fractional CO₂ Laser Skin Resurfacing
                </span>
                .
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                This advanced laser technology works by creating controlled
                micro-channels in the skin, which stimulates the body’s natural
                healing response and encourages the production of new collagen
                and healthy skin cells. As the skin renews itself, uneven
                pigmentation can gradually fade, revealing a clearer and more
                even complexion.
              </p>

              <div className="pt-6">
                <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider transition-colors duration-300">
                  Fractional CO₂ laser treatment can help:
                </h3>
                <ul className="space-y-2 text-base sm:text-lg lg:text-xl transition-colors duration-300">
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Improve uneven skin tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Reduce visible pigmentation patches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Stimulate collagen production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Improve skin texture and clarity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Restore a brighter, more balanced complexion</span>
                  </li>
                </ul>

                <p className="mt-8 text-base sm:text-lg lg:text-xl italic transition-colors duration-300">
                  Over time, the skin becomes smoother, clearer, and more even
                  as new, healthy skin replaces damaged cells.
                </p>

                <p className="mt-6 text-base sm:text-lg lg:text-xl font-medium text-black dark:text-white transition-colors duration-300">
                  During your consultation at Beam & Bloom, our specialist will
                  carefully assess your skin and create a personalised treatment
                  plan tailored to your individual skin type and concerns.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          {/* <div className="relative flex justify-center lg:block">
            <div
              className="relative
              lg:-right-21.75
              w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-150
              h-64 sm:h-80 md:h-100 lg:h-125
              overflow-hidden z-10"
            >
              <Image
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1774168288/e0w8zsr7o11krsbkyvic.avif"
                alt="About Beam & Bloom Clinic"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
