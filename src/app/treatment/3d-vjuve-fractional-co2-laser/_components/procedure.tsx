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
      className={`h-12 sm:h-14 px-6 ${activeTab !== tab
        ? "bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
        : ""
        }`}
    >
      {label}
    </Button>
  );

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
              {tabButton("how", "How it works")}
              {tabButton("procedure", "The Procedure")}
              {tabButton("faq", "FAQ")}
              {tabButton("aftercare", "Aftercare instructions")}
            </div>

            {/* CONTENT */}
            <div className="space-y-4 text-[#757575]">

              {activeTab === "how" && (
                <>
                  <p className="text-lg">
                    The 3D VJUVE™ Fractional CO2 Laser delivers controlled fractional energy to achieve both <strong>surface resurfacing and deep dermal regeneration</strong>.
                  </p>

                  <p className="text-lg">
                    <strong className="text-gray-800">Ablative Resurfacing:</strong> Removes microscopic columns of damaged outer skin to reduce wrinkles, scars, and sun damage.
                  </p>

                  <p className="text-lg">
                    <strong className="text-gray-800">Dermal Thermal Stimulation:</strong> Controlled heat penetrates the dermis to stimulate new collagen and elastin production.
                  </p>

                  <p className="text-lg">
                    <strong className="text-gray-800">Micro-Channel Formation:</strong> Precise channels trigger the body’s repair response and enhance skincare product absorption.
                  </p>

                  <p className="text-lg">
                    New collagen-rich tissue replaces treated areas, leading to significant skin remodelling, tightening, and long-term rejuvenation.
                  </p>
                </>
              )}

              {activeTab === "procedure" && (
                <>
                  <p className="text-lg">
                    We begin by applying a <strong>topical anaesthetic cream</strong> for 30–45 minutes to ensure maximum comfort.
                  </p>

                  <p className="text-lg">
                    Laser settings (energy, depth, and density) are fully customised based on your specific concerns, from fine lines to deep acne scarring.
                  </p>

                  <p className="text-lg">
                    Multiple settings can be combined in one session to address different areas of the face or body effectively.
                  </p>

                  <p className="text-lg">
                    After treatment, soothing serums are applied; the laser's micro-channels allow these products to absorb more effectively.
                  </p>

                  <p className="text-lg">
                    Immediate effects including redness, warmth, and a mild grid-like pattern are normal. Downtime typically ranges between <strong>3–7 days</strong>.
                  </p>
                </>
              )}

              {activeTab === "faq" && (
                <>
                  <p className="text-lg">
                    <strong>Does 3D VJUVE™ Fractional CO2 Laser hurt?</strong><br />
                    Most clients describe the sensation as warm with a mild prickling feeling. It is generally very manageable with topical anaesthetic.
                  </p>

                  <p className="text-lg">
                    <strong>How long before I expect to see results?</strong><br />
                    Texture and brightness improve within 7–10 days. The most significant results develop over <strong>4–12 weeks</strong> as new collagen forms.
                  </p>

                  <p className="text-lg">
                    <strong>How many sessions will I need?</strong><br />
                    Some see excellent results after one session; deeper scarring or advanced ageing may require <strong>2–3 treatments</strong>.
                  </p>

                  <p className="text-lg">
                    <strong>How far apart will my sessions be?</strong><br />
                    Treatments are typically spaced <strong>4–6 weeks apart</strong> to allow for adequate healing and optimal collagen stimulation.
                  </p>

                  <p className="text-lg">
                    <strong>Can I wear makeup straight after treatment?</strong><br />
                    We recommend waiting at least <strong>5–7 days</strong>, or until the skin has fully healed and peeling has stopped.
                  </p>
                </>
              )}

              {activeTab === "aftercare" && (
                <>
                  <p className="text-lg">To ensure optimal healing and long-lasting results, please follow these guidelines:</p>

                  <ul className="list-disc ml-5 text-lg space-y-2">
                    <li>Cool the area gently using a clean cold compress (10s on/5s off) for 20–30 mins.</li>
                    <li>Keep your head elevated when resting for the first 24–48 hours to minimise swelling.</li>
                    <li>Stay well hydrated and avoid alcohol or excessive caffeine for 24–48 hours.</li>
                    <li>Apply a recommended healing cream (e.g., Biafine or Aquaphor) liberally and frequently.</li>
                    <li>Gently cleanse after 24 hours using a mild cleanser; avoid exfoliants, retinols, and acids.</li>
                    <li>Avoid strenuous exercise, saunas, and steam rooms for at least 5–7 days.</li>
                  </ul>

                  <p className="text-lg">
                    Avoid direct sun exposure and apply <strong>SPF 50 sunscreen</strong> after the first 24 hours. Peeling and flaking are expected.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:block">
            <div className="relative lg:-right-21.75 w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-150 h-64 sm:h-80 md:h-100 lg:h-125 overflow-hidden z-10">
              <Image
                src="/logos/B&B-01.png"
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
