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
                    Skin boosters are <strong>hyaluronic acid-based injections</strong> delivered into deeper layers of the skin.
                  </p>

                  <p className="text-lg">
                    <strong className="text-gray-800">Deep hydration:</strong> Drawing moisture into the skin to keep it plump and soft.
                  </p>

                  <p className="text-lg">
                    <strong className="text-gray-800">Improving elasticity:</strong> Enhancing the skin’s natural elasticity.
                  </p>

                  <p className="text-lg">
                    <strong className="text-gray-800">Smoothing fine lines:</strong> Softening wrinkles and imperfections.
                  </p>

                  <p className="text-lg">
                    <strong className="text-gray-800">Enhancing texture:</strong> Creating smoother, healthier looking skin.
                  </p>

                  <p className="text-lg">
                    Hyaluronic acid naturally occurs in the skin but decreases with age. Skin boosters restore hydration and radiance.
                  </p>
                </>
              )}

              {activeTab === "procedure" && (
                <>
                  <p className="text-lg">
                    Your treatment begins with a consultation to assess your skin and determine the best approach.
                  </p>

                  <p className="text-lg">
                    The area is cleansed and numbing cream may be applied for comfort.
                  </p>

                  <p className="text-lg">
                    Using very fine injections, small amounts of hyaluronic acid are delivered into the skin.
                  </p>

                  <p className="text-lg">
                    Treatment usually takes <strong>20–30 minutes</strong> depending on the area.
                  </p>

                  <p className="text-lg">
                    A course of <strong>2–3 sessions</strong> spaced several weeks apart is typically recommended.
                  </p>
                </>
              )}

              {activeTab === "faq" && (
                <>
                  <p className="text-lg"><strong>How long do skin boosters last?</strong><br />Results usually last 6–12 months.</p>

                  <p className="text-lg"><strong>Are skin boosters the same as fillers?</strong><br />No. Boosters improve skin quality while fillers restore volume.</p>

                  <p className="text-lg"><strong>Is the treatment painful?</strong><br />Most clients find it very tolerable and numbing cream can be used.</p>

                  <p className="text-lg"><strong>Is there any downtime?</strong><br />Mild redness or swelling may appear for 24–48 hours.</p>

                  <p className="text-lg"><strong>When will I see results?</strong><br />Hydration improves within days and skin quality improves over weeks.</p>
                </>
              )}

              {activeTab === "aftercare" && (
                <>
                  <p className="text-lg">To achieve the best results please follow these aftercare guidelines:</p>

                  <ul className="list-disc ml-5 text-lg space-y-2">
                    <li>Avoid touching the treated area for 24 hours</li>
                    <li>Avoid strenuous exercise for 24 hours</li>
                    <li>Avoid saunas, steam rooms, and hot baths for 48 hours</li>
                    <li>Avoid alcohol for 24 hours</li>
                    <li>Avoid applying makeup for 12–24 hours</li>
                  </ul>

                  <p className="text-lg">
                    Mild redness or swelling is normal and should settle quickly. Contact the Beam & Bloom team if you have any concerns.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:block">
            <div className="relative lg:-right-21.75 w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-150 h-64 sm:h-80 md:h-100 lg:h-125 overflow-hidden z-10">
              <Image
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1773076162/ifrxko9ahyoyrcwozfi8.avif"
                alt="Skin booster treatment"
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
