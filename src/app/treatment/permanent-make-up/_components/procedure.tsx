"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

type Tab = "how" | "procedure" | "faq" | "after-care";

export default function Procedure() {
  const [activeTab, setActiveTab] = useState<Tab>("how");

  const faqs = [
    {
      q: "How long does permanent make-up last?",
      a: "Permanent make-up typically lasts 1–3 years, depending on factors such as skin type, lifestyle, and aftercare.",
    },
    {
      q: "Does the treatment hurt?",
      a: "Most clients find the treatment very manageable. A numbing cream is applied before the procedure.",
    },
    {
      q: "How long does the treatment take?",
      a: "Most permanent make-up treatments take 1–2 hours depending on the area being treated.",
    },
    {
      q: "What areas can be treated?",
      a: "Eyebrows (Microblading or Powder Brows), Eyeliner, Lip Blush.",
    },
    {
      q: "Is there any downtime?",
      a: "The treated area may appear slightly red or swollen immediately after the procedure, but this usually settles within a few hours or days.",
    },
    {
      q: "Will the colour look natural?",
      a: "Yes. The goal is to enhance your natural features and create a soft natural appearance.",
    },
  ];

  return (
    <section
      id="procedure"
      className="py-16 md:py-24 bg-gray-50 banner-wrp relative overflow-hidden"
    >
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-white z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center mb-12">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6">

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-10">
              <Button
                size="lg"
                onClick={() => setActiveTab("how")}
                className={`h-12 sm:h-14 px-6 ${activeTab !== "how"
                  ? "bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
                  : ""
                  }`}
              >
                How it works
              </Button>

              <Button
                size="lg"
                onClick={() => setActiveTab("procedure")}
                className={`h-12 sm:h-14 px-6 ${activeTab !== "procedure"
                  ? "bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
                  : ""
                  }`}
              >
                The Procedure
              </Button>

              <Button
                size="lg"
                onClick={() => setActiveTab("faq")}
                className={`h-12 sm:h-14 px-6 ${activeTab !== "faq"
                  ? "bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
                  : ""
                  }`}
              >
                FAQ
              </Button>

              <Button
                size="lg"
                onClick={() => setActiveTab("after-care")}
                className={`h-12 sm:h-14 px-6 ${activeTab !== "after-care"
                  ? "bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
                  : ""
                  }`}
              >
                After Care Instructions
              </Button>
            </div>

            {/* TAB CONTENT */}

            {activeTab === "how" && (
              <div className="space-y-4 text-[#757575]">
                <p className="text-lg">
                  Permanent make-up is a cosmetic treatment that enhances your
                  natural features using specialised micropigmentation
                  techniques.
                </p>

                <p className="text-lg">
                  This treatment can enhance areas such as{" "}
                  <span className="font-medium text-black">
                    eyebrows, eyeliner and lips
                  </span>
                  , helping create a more balanced appearance.
                </p>

                <p className="text-lg">
                  At <span className="font-medium text-black">Beam & Bloom</span>
                  , every treatment is customised to suit your skin tone and
                  facial structure.
                </p>

                <p className="text-lg">
                  Permanent make-up is ideal for clients who want to save time
                  on their daily beauty routine while maintaining a polished
                  look.
                </p>
              </div>
            )}

            {activeTab === "procedure" && (
              <div className="space-y-4 text-[#757575]">
                <p className="text-lg">
                  Your permanent make-up treatment begins with a detailed
                  consultation where we design the shape and colour that best
                  suits your features.
                </p>

                <p className="text-lg">
                  The treatment area is cleaned and numbing cream is applied to
                  ensure comfort.
                </p>

                <p className="text-lg">
                  Using a specialised micropigmentation device, pigment is
                  deposited into the skin with precise movements.
                </p>

                <p className="text-lg">
                  The treatment typically takes between 1–2 hours depending on
                  the area.
                </p>

                <p className="text-lg">
                  A follow-up appointment is recommended several weeks later to
                  perfect the colour and shape.
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
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>
            )}


            {activeTab === "after-care" && (
              <div className="space-y-4 text-[#757575]">
                <p className="text-lg">
                  For the first 7–10 days keep the treated area clean and dry.
                  Avoid excessive sweating, saunas, swimming pools and direct
                  sun exposure.
                </p>
                <p className="text-lg">
                  Light flaking or dryness may occur during healing. Allow
                  the skin to heal naturally.
                </p>
              </div>
            )}
          </div>



          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:block">
            <div
              className="relative lg:-right-21.75 w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-150
              h-64 sm:h-80 md:h-100 lg:h-125 overflow-hidden z-10"
            >
              <Image
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1773075451/qenobuxamu3uby30kpmj.avif"
                alt="Permanent make-up treatment"
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
