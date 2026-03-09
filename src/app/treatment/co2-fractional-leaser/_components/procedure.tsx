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
                The laser delivers high-energy pulses (up to ~3000 mJ per pulse)
                via the 1540 nm wavelength.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                The energy penetrates to the dermis (under the skin’s surface)
                to create microscopic “columns” or zones of thermal injury,
                triggering the body’s healing response: new collagen, elastin,
                and extracellular matrix are produced.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                For acne: It specifically targets sebaceous glands to reduce oil
                production, destroys acne-causing bacteria (e.g., P. acnes), and
                clears deep pore congestion—while still leaving the skin surface
                intact.
              </p>

              <p className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-4">
                The built-in cooling (and sometimes vacuum) system protects the
                epidermis and helps with comfort and safety.
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
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/micro-300x300-1.jpg"
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
