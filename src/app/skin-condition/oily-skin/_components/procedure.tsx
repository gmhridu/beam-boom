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
              Carbon Laser Facial
            </h2>
            <div className="space-y-4 text-[#757575] dark:text-gray-300 transition-colors duration-300">
              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                One of the most effective treatments for oily and congested skin
                is the{" "}
                <span className="font-bold text-black dark:text-white transition-colors duration-300">
                  Carbon Laser Facial
                </span>
                .
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                Often referred to as the “Hollywood Facial,” this advanced
                treatment combines a medical-grade carbon mask with laser
                technology to deeply cleanse the skin and remove impurities. The
                carbon absorbs oil, dirt, and dead skin cells from within the
                pores, while the laser energy gently heats and vaporises the
                carbon particles, exfoliating the skin and clearing congestion.
              </p>

              <div className="pt-6">
                <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider transition-colors duration-300">
                  Carbon Laser Facial treatment can help:
                </h3>
                <ul className="space-y-2 text-base sm:text-lg lg:text-xl transition-colors duration-300">
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Reduce excess oil production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Deeply cleanse and tighten pores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Improve blackheads and congestion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Smooth skin texture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Brighten and refresh the complexion</span>
                  </li>
                </ul>

                <p className="mt-8 text-base sm:text-lg lg:text-xl italic transition-colors duration-300">
                  The treatment is gentle, quick, and requires minimal downtime,
                  making it ideal for those looking to improve oily skin while
                  achieving a clearer, more refined complexion.
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
          <div className="relative flex justify-center lg:block">
            <div
              className="relative
              lg:-right-21.75
              w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-150
              h-64 sm:h-80 md:h-100 lg:h-125
              overflow-hidden z-10"
            >
              <Image
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1774167977/kyfivp5igxasc3viufqx.avif"
                alt="About Beam & Bloom Clinic"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
