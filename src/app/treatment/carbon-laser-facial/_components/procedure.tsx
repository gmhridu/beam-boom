"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

type Tab = "how" | "procedure" | "faq" | "aftercare";

export default function Procedure() {
  const [activeTab, setActiveTab] = useState<Tab>("how");

  const tabButton = (tab: Tab, label: string) => (
    <Button
      size="lg"
      onClick={() => setActiveTab(tab)}
      className={`h-12 sm:h-14 px-6 ${
        activeTab !== tab
          ? "bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 shadow transition-colors duration-300"
          : "bg-black dark:bg-white text-white dark:text-black transition-colors duration-300"
      }`}
    >
      {label}
    </Button>
  );

  const faqs = [
    {
      q: "Does the Carbon Laser Facial hurt?",
      a: "Most clients describe the treatment as comfortable, with a light warming or tingling sensation on the skin.",
    },
    {
      q: "How long before I see results?",
      a: "You will notice an immediate improvement in skin clarity, smoothness and radiance. Results continue to improve with regular treatments.",
    },
    {
      q: "How many sessions will I need?",
      a: "Some clients see great results after one treatment, however a course of treatments may be recommended for ongoing skin concerns such as acne or oiliness.",
    },
    {
      q: "How often can I have this treatment?",
      a: "This treatment can typically be performed every 2–4 weeks depending on your skin type and goals.",
    },
    {
      q: "Is there any downtime?",
      a: "There is little to no downtime. You may experience slight redness immediately after treatment, which usually settles within a few hours.",
    },
    {
      q: "Can I wear makeup after treatment?",
      a: "Makeup can usually be applied after 24 hours, once the skin has settled.",
    },
  ];

  return (
    <section
      id="procedure"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 banner-wrp relative overflow-hidden transition-colors duration-300"
    >
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-white dark:bg-gray-900 z-0 pointer-events-none transition-colors duration-300" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center mb-12">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6">
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-10">
              {tabButton("how", "How it works")}
              {tabButton("procedure", "The Procedure")}
              {tabButton("faq", "FAQ")}
              {tabButton("aftercare", "Aftercare instructions")}
            </div>

            {/* CONTENT */}
            <div className="space-y-4 text-[#757575] dark:text-gray-300 transition-colors duration-300">
              {activeTab === "how" && (
                <div className="space-y-4 text-[#757575] dark:text-gray-300 transition-colors duration-300">
                  <p className="text-base sm:text-lg lg:text-xl transition-colors duration-300">
                    The laser delivers high-energy pulses (up to ~3000 mJ per
                    pulse) via the 1540 nm wavelength.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl transition-colors duration-300">
                    The energy penetrates to the dermis (under the skin’s
                    surface) to create microscopic “columns” or zones of thermal
                    injury, triggering the body’s healing response: new
                    collagen, elastin, and extracellular matrix are produced.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl transition-colors duration-300">
                    For acne: It specifically targets sebaceous glands to reduce
                    oil production, destroys acne-causing bacteria (e.g., P.
                    acnes), and clears deep pore congestion—while still leaving
                    the skin surface intact.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl transition-colors duration-300">
                    The built-in cooling system protects the epidermis and helps
                    with comfort and safety.
                  </p>
                </div>
              )}

              {activeTab === "procedure" && (
                <div className="space-y-4 text-[#757575] dark:text-gray-300 transition-colors duration-300">
                  <p className="text-base sm:text-lg lg:text-xl transition-colors duration-300">
                    Your Carbon Laser Facial begins with a thorough cleanse to
                    prepare the skin.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl transition-colors duration-300">
                    A thin layer of medical-grade carbon is then applied to the
                    face, allowing it to penetrate deep into the pores and bind
                    to oil, dirt and impurities.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl transition-colors duration-300">
                    Once the carbon has settled, a laser is passed over the
                    skin. The laser targets and removes the carbon particles,
                    along with dead skin cells and excess oil, providing a deep
                    cleanse and gentle exfoliation.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl transition-colors duration-300">
                    The treatment also delivers controlled heat into the skin,
                    stimulating collagen production and helping to refine pores,
                    smooth texture and improve overall skin tone.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl transition-colors duration-300">
                    Following the treatment, soothing skincare and SPF are
                    applied, leaving your skin feeling instantly refreshed,
                    clearer and more radiant.
                  </p>
                </div>
              )}

              {activeTab === "faq" && (
                <div className="space-y-6 text-[#757575] dark:text-gray-300 transition-colors duration-300">
                  {faqs.map((faq, i) => (
                    <div key={i}>
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-2 transition-colors duration-300">
                        {faq.q}
                      </h3>
                      <p className="text-base sm:text-lg transition-colors duration-300">{faq.a}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "aftercare" && (
                <div className="space-y-4 text-[#757575] dark:text-gray-300 transition-colors duration-300">
                  <p className="text-base sm:text-lg lg:text-xl transition-colors duration-300">
                    To maintain your results and protect your skin, please
                    follow the guidelines below:
                  </p>
                  <ul className="list-disc ml-5 text-base sm:text-lg space-y-2 transition-colors duration-300">
                    <li className="transition-colors duration-300">
                      Avoid touching or applying heavy products to the skin for
                      the rest of the day
                    </li>
                    <li className="transition-colors duration-300">Keep the skin clean and well hydrated</li>
                    <li className="transition-colors duration-300">
                      Avoid active skincare (retinols, acids, exfoliants) for 48
                      hours
                    </li>
                    <li className="transition-colors duration-300">
                      Avoid excessive heat, saunas, and strenuous exercise for
                      24 hours
                    </li>
                    <li className="transition-colors duration-300">
                      Avoid direct sun exposure and apply SPF 50 daily
                    </li>
                    <li className="transition-colors duration-300">Do not pick or irritate the skin</li>
                  </ul>
                  <p className="text-base sm:text-lg lg:text-xl transition-colors duration-300">
                    Mild redness may occur immediately after treatment, but this
                    typically subsides within a few hours.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:block">
            <div className="relative lg:-right-21.75 w-full max-w-sm sm:max-w-md md:max-w-xl lg:w-150 h-64 sm:h-80 md:h-100 lg:h-125 overflow-hidden z-10">
              <Image
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1774282884/bzp8gtnqank2i7mzxw5y.avif"
                alt="Carbon Laser Facial treatment steps at Beam & Bloom"
                fill
                className="object-contain rounded-lg p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
