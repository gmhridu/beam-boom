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
              Sun Damage Treatment
            </h2>
            <div className="space-y-4 text-[#757575]">
              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                At Beam & Bloom, we offer advanced treatments designed to
                resurface damaged skin, restore clarity, and stimulate collagen
                production. One of the most effective treatments available is{" "}
                <span className="text-black font-semibold">
                  Fractional CO₂ Laser Skin Resurfacing
                </span>
                .
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                This advanced technology works by delivering controlled laser
                energy into the skin, creating microscopic treatment zones that
                stimulate the body’s natural healing response. As the skin
                repairs itself, it produces new collagen and healthy skin cells,
                helping to improve tone, texture, and overall skin quality.
              </p>

              <div className="pt-6">
                <h3 className="text-lg md:text-xl font-bold text-black mb-4 uppercase tracking-wider">
                  Fractional CO₂ laser treatment can help:
                </h3>
                <ul className="space-y-2 text-base sm:text-lg lg:text-xl">
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>
                      Reduce the appearance of sun spots and pigmentation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Improve uneven skin tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Smooth rough skin texture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>Stimulate collagen production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-black">•</span>
                    <span>
                      Restore a brighter, more youthful-looking complexion
                    </span>
                  </li>
                </ul>

                <p className="mt-8 text-base sm:text-lg lg:text-xl italic">
                  Over time, the skin becomes clearer, smoother, and more even
                  in appearance as new collagen forms and damaged skin cells are
                  replaced.
                </p>

                <p className="mt-6 text-base sm:text-lg lg:text-xl font-medium text-black">
                  During your consultation at Beam & Bloom, our specialist will
                  carefully assess your skin and create a personalised treatment
                  plan tailored to your skin type and individual concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
