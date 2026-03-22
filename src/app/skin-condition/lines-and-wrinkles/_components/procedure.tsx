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
              Fine Lines & Wrinkles Treatment
            </h2>
            <div className="space-y-4 text-[#757575] dark:text-gray-300 transition-colors duration-300">
              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                For more visible lines or deeper wrinkles, we often recommend
                our{" "}
                <span className="text-black dark:text-white font-semibold">
                  Fractional CO2 Laser treatment
                </span>
                .
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                This advanced resurfacing technology works by renewing the skin
                at a deeper level, stimulating powerful collagen renewal and
                helping to smooth the appearance of wrinkles while improving
                skin tone and elasticity.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4 text-black dark:text-white italic">
                Each treatment plan is tailored to your individual skin concerns
                to achieve natural, refined results. Over a series of
                treatments, the skin appears smoother, firmer and more
                refreshed.
              </p>

              <div className="pt-6">
                <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider">
                  BEST FOR
                </h3>
                <p className="text-base sm:text-lg lg:text-xl mb-6">
                  This treatment is ideal for individuals looking to improve
                  visible signs of ageing and restore smoother, more
                  youthful-looking skin.
                </p>
                <p className="text-base sm:text-lg lg:text-xl mb-4 font-medium text-black dark:text-white">
                  Common concerns treated include:
                </p>
                <ul className="space-y-2 text-base sm:text-lg lg:text-xl">
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Fine lines around the eyes (crow’s feet)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Forehead lines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Smile lines and lip lines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Early to moderate wrinkles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Loss of skin firmness and elasticity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black dark:text-white">•</span>
                    <span>Dull or ageing skin texture</span>
                  </li>
                </ul>
                <p className="mt-8 text-base sm:text-lg lg:text-xl italic">
                  Treatment areas can include the face, neck and décolletage,
                  helping to restore a more refined and rejuvenated appearance.
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
                alt="Fine Lines & Wrinkles Treatment"
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
