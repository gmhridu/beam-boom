import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Procedure() {
  return (
    <section id="procedure" className="py-16 md:py-24 bg-gray-50 banner-wrp relative overflow-hidden">
      {/* right side - lg only */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-white z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center justify-between mb-12">

          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 sm:gap-6 items-start mb-6 sm:mb-10 lg:mb-14">
              <Button size={"lg"} className="h-12 sm:h-14 w-auto sm:w-60 px-5 sm:px-6 text-base sm:text-lg">
                How it works
              </Button>

              <Button
                size={"lg"}
                className="h-12 sm:h-14 w-auto sm:w-40 px-5 sm:px-6 text-base sm:text-lg bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
              >
                The Procedure
              </Button>
              <Button
                size={"lg"}
                className="h-12 sm:h-14 w-auto sm:w-40 px-5 sm:px-6 text-base sm:text-lg bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
              >
                FAQ
              </Button>

              <Button
                size={"lg"}
                className="h-12 sm:h-14 w-auto sm:w-50 px-5 sm:px-6 text-base sm:text-lg bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
              >
                Aftercare instructions
              </Button>
            </div>

            {/* Text Content */}
            <div className="space-y-4 text-[#757575]">
              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                Skin boosters are{" "}
                <span className="font-bold">
                  hyaluronic acid-based injections
                </span>{" "}
                that are delivered into the deeper layers of the skin. Unlike
                traditional dermal fillers that add volume to specific areas,
                skin boosters work by:
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                <span className="font-bold text-gray-800">Deep hydration </span>
                : Drawing moisture into the skin to keep it plump and soft.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                <span className="font-bold text-gray-800">
                  Improving elasticity{" "}
                </span>
                : Enhancing the skin’s natural elasticity for a firmer, more
                youthful appearance.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                <span className="font-bold text-gray-800">
                  Smoothing fine lines and wrinkles{" "}
                </span>
                : Softening lines and imperfections for a smoother complexion.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                <span className="font-bold text-gray-800">
                  Enhancing skin texture{" "}
                </span>
                : Making the skin feel smoother and more even.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                Hyaluronic acid (HA) is a naturally occurring substance in the
                skin that helps to retain moisture. As we age, the amount of HA
                in our skin decreases, leading to dryness, fine lines, and loss
                of elasticity. Skin boosters replenish your skin’s HA levels,
                making it look hydrated, healthy, and refreshed.
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
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/10/istockphoto-1781553776-612x612-1.jpg"
                alt="About Pulse Laser Clinic"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
