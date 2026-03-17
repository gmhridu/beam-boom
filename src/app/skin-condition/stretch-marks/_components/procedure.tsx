import Image from "next/image";

export default function Procedure() {
  return (
    <section
      id="procedure"
      className="py-16 md:py-24 bg-gray-50 banner-wrp relative overflow-hidden"
    >
      {/* right side */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-white z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center justify-between mb-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
              Laser Stretch Mark Removal
            </h2>
            <div className="space-y-4 text-[#757575]">
              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                For deeper or more established stretch marks, we often recommend
                our{" "}
                <span className="text-black font-semibold">
                  Fractional CO2 Laser treatment
                </span>
                , which resurfaces the skin and stimulates powerful collagen
                renewal.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                This advanced technology can significantly soften the appearance
                of stretch marks while improving skin firmness and texture. Each
                treatment plan is tailored to your skin type and concerns to
                achieve the best possible results. A course of treatments spaced
                several weeks apart is typically recommended for optimal
                improvement.
              </p>

              <div className="pt-6">
                <h3 className="text-lg md:text-xl font-bold text-black mb-4 uppercase tracking-wider">
                  BEST FOR
                </h3>
                <p className="text-base sm:text-lg lg:text-xl mb-6">
                  This treatment is ideal for individuals looking to improve the
                  appearance of stretch marks and overall skin quality.
                </p>

                <h3 className="text-lg md:text-xl font-bold text-black mb-4 uppercase tracking-wider">
                  Common concerns treated include:
                </h3>
                <ul className="space-y-2 text-base sm:text-lg lg:text-xl">
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Pregnancy stretch marks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Weight fluctuation stretch marks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Growth-related stretch marks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Older or more established stretch marks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Uneven skin texture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Loss of skin elasticity</span>
                  </li>
                </ul>

                <p className="mt-8 text-base sm:text-lg lg:text-xl font-medium text-black">
                  Treatment areas can include the abdomen, hips, thighs,
                  buttocks and arms, helping to restore smoother, more refined
                  skin over time.
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
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1773080339/dm3i9p9pizrudpxicfs4.avif"
                alt="About Pulse Laser Clinic"
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
