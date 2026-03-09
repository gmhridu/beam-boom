import Image from "next/image";

export default function Procedure() {
  return (
    <section id="procedure" className="py-16 md:py-24 bg-gray-50 banner-wrp relative overflow-hidden">
      {/* right side */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-white z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center justify-between mb-12">
          <div className="flex flex-col gap-6">
            <div className="space-y-4 text-[#757575]">
              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                Stretch marks are a common type of skin scarring that occur when the skin stretches or shrinks rapidly. This sudden change can cause the collagen and elastin fibres that support the skin to break down. As the skin heals, stretch marks may form.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                Although stretch marks are very common, not everyone develops them. Hormonal changes, genetics, and rapid changes in body size can all increase the likelihood of stretch marks appearing.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                Stretch marks often develop during periods of rapid physical change, including:
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                <span className="text-black font-medium mr-1">•</span> Growth spurts during puberty
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                <span className="text-black font-medium mr-1">•</span> Pregnancy
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                <span className="text-black font-medium mr-1">•</span> Rapid weight loss or gain
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                <span className="text-black font-medium mr-1">•</span> Weight training with rapid muscle growth
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                When stretch marks first appear, they may be <span className="text-black font-medium">red, purple, pink, or dark brown</span>, depending on your skin tone. At this stage they can sometimes feel slightly raised or itchy.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                Over time, stretch marks typically fade in colour and become lighter or silvery in appearance as they settle into the skin.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                At <span className="text-black font-medium">Beam & Bloom</span>, we offer advanced treatments designed to improve the appearance of stretch marks by stimulating collagen production and encouraging the skin to repair and regenerate. Our personalised treatment plans are tailored to your skin type and concerns to help achieve smoother, healthier-looking skin.
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
