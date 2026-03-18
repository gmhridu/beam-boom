export default function Consultation() {
  return (
    <section
      id="consultation"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden banner-wrp"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Soft rustic side panel - lg only to avoid layout issues */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-[22%] bg-gray-50" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/40 via-transparent to-black/5 pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">

          {/* Brand */}
          <span className="text-xs tracking-[0.25em] uppercase text-gray-500 font-medium">
            Pulse Laser
          </span>

          {/* Heading */}
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
            Book Your Consultation
          </h2>

          {/* Description */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Speak with our specialists about safe and effective laser tattoo
            removal tailored to your skin and ink type.
          </p>

          {/* Form Card */}
          <div className="mt-8 sm:mt-10 lg:mt-14 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10">
            <form className="space-y-4 sm:space-y-6">

              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black/20 focus:border-black/20 text-sm sm:text-base placeholder-gray-400 transition"
                  required
                />
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base">
                  👤
                </span>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black/20 focus:border-black/20 text-sm sm:text-base placeholder-gray-400 transition"
                  required
                />
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base">
                  📞
                </span>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full mt-2 sm:mt-4 py-3 sm:py-4 bg-black text-white font-medium text-base sm:text-lg rounded-lg hover:bg-gray-900 transition flex items-center justify-center gap-2 sm:gap-3 shadow-lg"
              >
                Book Consultation
                <span className="text-lg sm:text-xl">→</span>
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
