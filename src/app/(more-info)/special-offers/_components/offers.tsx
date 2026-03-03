import Image from "next/image";

const Offers = () => {
  return (
    <section className="p-4 sm:p-6 md:p-8 bg-gray-50 relative overflow-visible">
      {/* Right white vertical panel — lg only */}
      <div
        className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] z-10 pointer-events-none"
        style={{
          backgroundImage: "url(/images/background.png)",
          backgroundSize: "140%",
          backgroundPosition: "center top",
          backgroundRepeat: "repeat",
          opacity: 0.2,
          filter: "brightness(1.04) contrast(0.96) saturate(0.92)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-8 md:mb-12">

          {/* Left Content */}
          <div className="flex flex-col items-start justify-start">
            <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-left text-gray-900">
                New clients receive 10% off your first treatment
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-light text-gray-600 max-w-2xl text-left mb-8 sm:mb-12 md:mb-20">
                We offer all new clients 10% off their first treatment or first
                course of treatments. You can book an initial laser or skin
                consultation online or via phone, and the discount will be
                applied at point of payment.
              </p>
            </div>

            <div className="px-0 sm:px-5 space-y-4 sm:space-y-6 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-left text-gray-900">
                Refer a friend & receive 10% off your next treatment
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-light text-gray-600 max-w-2xl text-left">
                *Terms and conditions apply
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end lg:items-start">
            <div className="relative
              w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none
              lg:w-100 lg:ml-24 lg:mt-8
              h-56 sm:h-72 md:h-96 lg:h-102.5
              overflow-hidden z-20 rounded-lg">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/skin-treatment-image.jpg"
                alt="Special Offers at Pulse Laser Clinic"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offers;
