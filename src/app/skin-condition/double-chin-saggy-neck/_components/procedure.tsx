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
              Double Chin & Saggy Neck Treatment
            </h2>
            <div className="space-y-4 text-[#757575] dark:text-gray-300 transition-colors duration-300">
              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                To address skin laxity and unwanted fat under the chin, we often combine advanced technologies like{" "}
                <span className="text-black dark:text-white font-semibold transition-colors duration-300">
                  Fractional CO₂ Laser Resurfacing
                </span>{" "}
                with targeted tightening protocols.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4 transition-colors duration-300">
                This approach helps to stimulate deep collagen production, tightening the skin's structure and improving the overall contour of the jawline and neck area without the need for surgery.
              </p>

              <div className="pt-6">
                <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider transition-colors duration-300">
                  Benefits for the neck & jawline include:
                </h3>
                <ul className="space-y-2 text-base sm:text-lg lg:text-xl transition-colors duration-300">
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Visible tightening of loose skin (saggy neck)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Improved definition along the jawline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Reduction in the appearance of a double chin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Enhanced skin firmness and elasticity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Smoother skin texture on the neck and chest</span>
                  </li>
                </ul>

                <p className="mt-8 text-base sm:text-lg lg:text-xl italic transition-colors duration-300">
                  Each session is tailored to your unique anatomy to achieve refined, natural-looking results.
                </p>

                <p className="mt-6 text-base sm:text-lg lg:text-xl font-medium text-black dark:text-white transition-colors duration-300">
                  During your private consultation at Beam & Bloom, our experts will design a plan that restores your confidence and contours your features beautifully.
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
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1773079624/vuwrnee1c83mjnf9frze.avif"
                alt="Double Chin Treatment"
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
