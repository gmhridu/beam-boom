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
              Pores & Blackheads Treatment
            </h2>
            <div className="space-y-4 text-[#757575]">
              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                One of the most effective treatments available for refining pore
                size and clearing congestion is{" "}
                <span className="text-black font-semibold">
                  Fractional CO₂ Laser Skin Resurfacing
                </span>
                .
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                This advanced laser technology works by creating microscopic
                treatment zones within the skin. These tiny channels stimulate
                the body’s natural healing response and encourage the production
                of new collagen and elastin, helping to tighten the skin and
                refine enlarged pores.
              </p>

              <div className="pt-6">
                <h3 className="text-lg md:text-xl font-bold text-black mb-4 uppercase tracking-wider">
                  Fractional CO₂ laser treatment can help:
                </h3>
                <ul className="space-y-2 text-base sm:text-lg lg:text-xl">
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Reduce the appearance of enlarged pores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Improve overall skin texture and smoothness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Stimulate collagen production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Clear congested pores and blackheads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Enhance overall skin clarity and tone</span>
                  </li>
                </ul>

                <p className="mt-8 text-base sm:text-lg lg:text-xl italic">
                  Over time, the skin becomes smoother, firmer, and more refined
                  as new collagen is produced.
                </p>

                <p className="mt-6 text-base sm:text-lg lg:text-xl font-medium text-black">
                  During your consultation at Beam & Bloom, our specialist will
                  carefully assess your skin type and concerns before creating a
                  personalised treatment plan tailored to your individual needs
                  and goals.
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
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/a4e99078-e507-42d2-b302-0a752462a5ec.jpg"
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
