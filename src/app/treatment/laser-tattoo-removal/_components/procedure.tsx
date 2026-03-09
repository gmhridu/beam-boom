"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Procedure() {
  const [activeTab, setActiveTab] = useState<"procedure" | "faq">("procedure");

  const faqs = [
    {
      q: "How many sessions will I need?",
      a: "The number of sessions varies depending on the size, colour, age, and depth of the tattoo. Most tattoos require between 6–10 treatments spaced several weeks apart for the best results.",
    },
    {
      q: "Does laser tattoo removal hurt?",
      a: "Most clients describe the sensation as similar to a rubber band snapping against the skin. Treatments are quick, and numbing cream can be applied to help make the procedure more comfortable.",
    },
    {
      q: "Can all tattoo colours be removed?",
      a: "Modern laser technology can target a wide range of colours. Dark colours such as black and blue tend to respond the fastest, while lighter colours such as green, yellow, and pastel shades may take longer.",
    },
    {
      q: "How long does each session take?",
      a: "Treatment time depends on the size of the tattoo. Small tattoos can take as little as 5 minutes, while larger pieces may take longer.",
    },
    {
      q: "Is there any downtime?",
      a: "There is minimal downtime. The treated area may appear red, slightly swollen, or sensitive for a short period after the treatment. This usually settles within a few days.",
    },
    {
      q: "Will the tattoo disappear completely?",
      a: "In many cases tattoos can be significantly faded or completely removed. However, results depend on factors such as ink type, tattoo age, skin type, and depth of pigment.",
    },
    {
      q: "How long should I wait between sessions?",
      a: "Treatments are typically spaced 6–8 weeks apart to allow your skin to heal and your body time to naturally remove the broken ink particles.",
    },
    {
      q: "Is laser tattoo removal safe?",
      a: "Yes. When performed by trained professionals using medical-grade equipment, laser tattoo removal is a safe and effective treatment with a low risk of scarring when aftercare instructions are followed.",
    },
  ];

  return (
    <section
      id="procedure"
      className="py-16 md:py-24 bg-gray-50 banner-wrp relative overflow-hidden"
    >
      {/* right side - lg only */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-white z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center justify-between mb-12">

          {/* Left Content */}
          <div className="flex flex-col gap-6">

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 sm:gap-6 items-start mb-6 sm:mb-10 lg:mb-14">
              <Button
                size="lg"
                onClick={() => setActiveTab("procedure")}
                className={`h-12 sm:h-14 w-auto sm:w-60 px-5 sm:px-6 text-base sm:text-lg ${
                  activeTab === "procedure"
                    ? ""
                    : "bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
                }`}
              >
                The Procedure
              </Button>

              <Button
                size="lg"
                onClick={() => setActiveTab("faq")}
                className={`h-12 sm:h-14 w-auto sm:w-40 px-5 sm:px-6 text-base sm:text-lg ${
                  activeTab === "faq"
                    ? ""
                    : "bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
                }`}
              >
                FAQ
              </Button>
            </div>

            {/* Tab Content */}
            {activeTab === "procedure" && (
              <div className="space-y-4 text-[#757575]">
                <p className="text-base sm:text-lg lg:text-xl">
                  Before your first treatment, you will attend a consultation where we assess your tattoo, skin type, and medical history. During this appointment we will also perform a small patch test to see how your skin responds to the laser and determine the most effective settings for your treatment.
                </p>

                <p className="text-base sm:text-lg lg:text-xl">
                  On the day of your treatment, you will be provided with protective eyewear to ensure your eyes are shielded during the procedure. Depending on the size and sensitivity of the tattoo, a numbing cream may be applied beforehand to maximise comfort.
                </p>

                <p className="text-base sm:text-lg lg:text-xl">
                  During the session, the laser delivers short pulses of energy into the tattoo pigment. This energy breaks the ink particles down into tiny fragments without harming the surrounding skin.
                </p>

                <p className="text-base sm:text-lg lg:text-xl">
                  After the treatment, a soothing cream and protective dressing will be applied to the treated area along with clear aftercare instructions.
                </p>

                <p className="text-base sm:text-lg lg:text-xl">
                  Multiple sessions are usually required to gradually fade and remove the tattoo safely as your body naturally clears the fragmented ink over time.
                </p>

                <p className="text-base sm:text-lg lg:text-xl">
                  If you would like to discuss your tattoo removal treatment plan or book a consultation at{" "}
                  <span className="text-black font-medium">
                    Beam & Bloom in Dartford
                  </span>
                  , please get in touch and our team will be happy to help.
                </p>
              </div>
            )}

            {activeTab === "faq" && (
              <div className="space-y-6 text-[#757575]">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-base sm:text-lg">{faq.a}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:block">
            <div
              className="relative
              lg:-right-21.75
              w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-150
              h-64 sm:h-80 md:h-100 lg:h-125
              overflow-hidden z-10"
            >
              <Image
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1773073036/jfhp4hqkwemzubyd0h1e.avif"
                alt="Laser tattoo removal procedure"
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
