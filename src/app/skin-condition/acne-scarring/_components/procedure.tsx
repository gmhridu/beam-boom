import Image from "next/image";

export default function Procedure() {
  return (
    <section id="procedure" className="py-16 md:py-24 bg-gray-50 banner-wrp relative overflow-hidden">
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
                Acne scarring can develop as a result of severe or prolonged acne. When inflammation damages the skin tissue, it can leave behind marks or indentations that remain long after the acne has cleared.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                Scarring is more likely to occur with deeper types of acne such as nodules and cysts, particularly if the skin is squeezed or picked during breakouts. These scars can vary in appearance depending on how the skin heals.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                There are three common types of acne scars:
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                <span className="font-medium text-black">• Ice Pick Scars</span> – Small, deep holes in the skin that appear as if the surface has been punctured. These scars extend deep into the skin and can be more difficult to treat.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                <span className="font-medium text-black">• Rolling Scars</span> – Caused by bands of scar tissue forming beneath the skin, creating a wave-like or uneven texture across the skin’s surface.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                <span className="font-medium text-black">• Boxcar Scars</span> – Wider, round or oval depressions in the skin that create a crater-like appearance.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                At <span className='font-medium text-black'>Beam & Bloom</span>, we understand how acne scarring can impact both skin confidence and overall appearance. Our clinic offers advanced treatments designed to improve skin texture, stimulate collagen production, and reduce the visibility of acne scars.
              </p>
              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                Depending on your skin type and the severity of scarring, treatment options may include <span className='font-medium text-black'>advanced laser treatments, skin resurfacing, or microneedling</span> to help restore smoother, healthier-looking skin.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                During your consultation, our specialist will carefully assess your skin and create a <span className='font-medium text-black'>personalised treatment plan</span> tailored to your individual needs and goals.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:block">
            <div className="relative
              lg:-right-21.75
              w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-150
              h-64 sm:h-80 md:h-100 lg:h-125
              overflow-hidden z-10">
              <Image
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1773079624/vuwrnee1c83mjnf9frze.avif"
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
