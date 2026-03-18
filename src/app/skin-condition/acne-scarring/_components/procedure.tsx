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
              Acne Scarring
            </h2>
            <div className="space-y-4 text-[#757575]">
              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                For deeper or more established acne scarring, we often recommend
                our Fractional CO2 Laser treatment. This advanced resurfacing
                technology works by renewing the skin at a deeper level,
                triggering powerful collagen regeneration to soften the
                appearance of scars and promote smoother, more even skin.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                Each treatment plan is tailored to your individual skin concerns
                to achieve the best possible results. Over a series of
                treatments, the skin gradually becomes clearer, smoother and
                more refined.
              </p>

              <div className="pt-6">
                <h3 className="text-lg md:text-xl font-bold text-black mb-4 uppercase tracking-wider">
                  BEST FOR
                </h3>
                <p className="text-base sm:text-lg lg:text-xl mb-6">
                  This treatment is ideal for individuals looking to improve the
                  appearance of acne scars and uneven skin texture.
                </p>
                <p className="text-base sm:text-lg lg:text-xl mb-4 font-medium text-black">
                  Common concerns treated include:
                </p>
                <ul className="space-y-2 text-base sm:text-lg lg:text-xl">
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Atrophic acne scars (indented scars)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Boxcar and rolling scars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Uneven skin texture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Post-acne skin damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Enlarged pores associated with acne scarring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Dull or uneven skin tone</span>
                  </li>
                </ul>
                <p className="mt-8 text-base sm:text-lg lg:text-xl italic">
                  Treatment areas typically include the face, cheeks, temples
                  and jawline, helping to restore smoother, clearer and more
                  balanced skin.
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
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1773079624/vuwrnee1c83mjnf9frze.avif"
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
