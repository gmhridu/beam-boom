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
          ? "bg-white text-black border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 shadow"
          : "dark:bg-white dark:text-black"
      }`}
    >
      {label}
    </Button>
  );

  const faqs = [
    {
      q: "How much downtime is there?",
      a: "Downtime typically ranges from 2–7 days depending on the intensity of the treatment. You may experience redness, dryness, and light peeling as the skin heals.",
    },
    {
      q: "Is the treatment suitable for all skin types?",
      a: "This treatment is suitable for many skin types, however a consultation is required to assess your skin and ensure it is safe and appropriate for you.",
    },
    {
      q: "Does 3D VJUVE™ Fractional CO2 Laser hurt?",
      a: "Most clients describe the sensation as warm with a mild prickling feeling. Discomfort levels vary depending on the treatment intensity, but it is generally well tolerated.",
    },
    {
      q: "When can I return to normal activities?",
      a: "Most clients can return to normal daily activities immediately, however social downtime may be required while redness and peeling settle.",
    },
    {
      q: "Are the results permanent?",
      a: "Results can be long-lasting, particularly for concerns such as scarring. However, the natural ageing process continues, and maintenance treatments may be recommended.",
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
                <div className="space-y-4">
                  <p className="text-base sm:text-lg lg:text-xl">
                    The 3D VJUVE™ Fractional CO2 Laser works by delivering
                    precise, controlled micro-beams of laser energy into the
                    skin. This creates tiny, targeted micro-injuries in both the
                    surface and deeper layers of the skin, triggering the body’s
                    natural healing response.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl">
                    As the skin repairs itself, new collagen and elastin are
                    produced, helping to resurface, tighten and rejuvenate the
                    skin from within.
                  </p>

                  <h3 className="text-lg font-semibold text-black dark:text-white transition-colors duration-300 mt-6">
                    How the Treatment Works
                  </h3>

                  <div className="space-y-3">
                    <p className="text-base sm:text-lg">
                      <span className="font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                        Fractional CO2 Technology:
                      </span>{" "}
                      The laser creates microscopic channels in the skin,
                      removing damaged outer layers while stimulating deeper
                      tissue. This dual action helps to improve skin texture,
                      reduce scarring and soften fine lines.
                    </p>
                    <p className="text-base sm:text-lg">
                      <span className="font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                        Collagen Stimulation:
                      </span>{" "}
                      By heating the deeper layers of the skin, the treatment
                      activates natural collagen production. This leads to
                      firmer, smoother and more youthful-looking skin over time.
                    </p>
                    <p className="text-base sm:text-lg">
                      <span className="font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                        Skin Renewal:
                      </span>{" "}
                      As the skin heals, old, damaged cells are replaced with
                      fresh, healthy skin, improving tone, clarity and overall
                      appearance.
                    </p>
                  </div>

                  <h3 className="text-lg font-semibold text-black dark:text-white transition-colors duration-300 mt-6">
                    Treatment Customisation
                  </h3>
                  <p className="text-base sm:text-lg">
                    Every treatment is tailored to your skin and your goals. For
                    deeper concerns such as acne scarring or stretch marks,
                    settings can be adjusted to deliver more intensive
                    resurfacing. For overall skin rejuvenation, a lighter
                    approach can be used to improve tone, texture and radiance
                    with reduced downtime.
                  </p>

                   <h3 className="text-lg font-semibold text-black dark:text-white transition-colors duration-300 mt-6">
                    What This Means for You
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base sm:text-lg list-disc list-inside">
                    <li>Smoother, more refined skin</li>
                    <li>Improved texture and tone</li>
                    <li>Reduction in scars and fine lines</li>
                    <li>Firmer, more youthful-looking skin</li>
                  </ul>
                </div>
              )}

              {activeTab === "procedure" && (
                <div className="space-y-4">
                  <p className="text-base sm:text-lg lg:text-xl">
                    Your treatment is carefully tailored to focus on your
                    individual skin concerns. Using the 3D VJUVE™ Fractional CO2
                    Laser, we adjust the settings to target specific areas such
                    as acne scarring, uneven texture, or overall skin
                    rejuvenation, all within the same session.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl">
                    For example, more targeted settings may be used on areas
                    with deeper scarring, while a lighter approach can be
                    applied across the rest of the skin to improve tone and
                    texture.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl">
                    Once the treatment is complete, appropriate skincare
                    products are applied to support the healing process and
                    enhance results.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl">
                    Before leaving, your practitioner will apply SPF to protect
                    the skin. Following treatment, it is normal to experience
                    temporary redness, mild swelling, and a light grid pattern
                    in the treated area.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl">
                    Downtime typically ranges between 2–7 days depending on the
                    intensity of the treatment. During this time, you may notice
                    dryness, slight itching, or flaking as the skin renews
                    itself. This is a normal part of the healing process, and
                    full aftercare guidance will be provided.
                  </p>
                </div>
              )}

              {activeTab === "faq" && (
                <div className="space-y-6 text-[#757575]">
                  {faqs.map((faq, i) => (
                    <div key={i}>
                      <h3 className="text-lg font-semibold text-black dark:text-white transition-colors duration-300 mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-base sm:text-lg">{faq.a}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "aftercare" && (
                <div className="space-y-4">
                  <p className="text-base sm:text-lg lg:text-xl">
                    To support optimal healing and long-lasting results, please
                    follow the guidelines below:
                  </p>
                  <ul className="list-disc ml-5 text-base sm:text-lg space-y-2">
                    <li>
                      Apply a clean, cool compress (10 seconds on / 5 seconds
                      off) for 20–30 minutes to help reduce heat and
                      discomfort.
                    </li>
                    <li>
                      Keep your head elevated when resting for the first 24–48
                      hours to minimise swelling.
                    </li>
                    <li>
                      Stay well hydrated and avoid alcohol or excessive caffeine
                      for 24–48 hours.
                    </li>
                    <li>
                      Apply a recommended healing cream (such as Biafine or
                      Aquaphor) regularly to keep the skin hydrated and
                      protected.
                    </li>
                    <li>
                      After 24 hours, gently cleanse the skin using a mild
                      cleanser. Avoid exfoliants, retinols, and active acids
                      until fully healed.
                    </li>
                    <li>
                      Avoid strenuous exercise, saunas, and steam rooms for at
                      least 5–7 days.
                    </li>
                    <li>
                      Avoid direct sun exposure and apply SPF 50 daily once the
                      skin has settled.
                    </li>
                  </ul>
                  <p className="text-base sm:text-lg lg:text-xl">
                    Mild redness, dryness, peeling, and flaking are normal and
                    form part of the skin’s natural healing process.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:block">
            <div className="relative lg:-right-21.75 w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-150 h-64 sm:h-80 md:h-100 lg:h-125 overflow-hidden z-10 dark:bg-white dark:rounded-lg dark:p-4 transition-all duration-300">
              <Image
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1774117892/wi2rcgq2fpjmnypq4cmg.avif"
                alt="Beam & Bloom Logo"
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
