"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Procedure() {
  const [activeTab, setActiveTab] = useState<
    "how-it-works" | "procedure" | "faq" | "aftercare"
  >("how-it-works");

  const faqs = [
    {
      q: "How many sessions will I need?",
      a: "Most clients require 6–8 sessions to achieve the best results. This can vary depending on the treatment area, hair thickness, and individual hair growth cycle.",
    },
    {
      q: "Does laser hair removal hurt?",
      a: "Laser hair removal is generally well tolerated. Most clients describe the sensation as a mild snapping feeling or gentle warmth on the skin.",
    },
    {
      q: "How long does each session take?",
      a: "Treatment time depends on the size of the area. Smaller areas such as the upper lip may take only a few minutes, while larger areas like the legs may take longer.",
    },
    {
      q: "Is laser hair removal permanent?",
      a: "Laser hair removal provides long-term hair reduction. Over time, hair grows back finer, lighter, and more slowly.",
    },
    {
      q: "Can all skin types be treated?",
      a: "Modern diode laser technology is suitable for many skin tones. During your consultation we will assess your skin and determine the safest treatment approach.",
    },
    {
      q: "Is there any downtime?",
      a: "There is minimal downtime. The skin may appear slightly red or sensitive immediately after treatment, but this typically settles within a few hours.",
    },
  ];

  return (
    <section
      id="procedure"
      className="py-16 md:py-24 bg-gray-50 banner-wrp relative overflow-hidden"
    >
      {/* right side */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-white z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center justify-between mb-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4 sm:gap-6 items-start mb-6 sm:mb-10 lg:mb-14">
              <Button
                size={"lg"}
                onClick={() => setActiveTab("how-it-works")}
                className={`h-12 sm:h-14 w-auto sm:w-60 px-5 sm:px-6 text-base sm:text-lg ${activeTab === "how-it-works"
                    ? ""
                    : "bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
                  }`}
              >
                How it works
              </Button>

              <Button
                size={"lg"}
                onClick={() => setActiveTab("procedure")}
                className={`h-12 sm:h-14 w-auto sm:w-40 px-5 sm:px-6 text-base sm:text-lg ${activeTab === "procedure"
                    ? ""
                    : "bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
                  }`}
              >
                The Procedure
              </Button>
              <Button
                size={"lg"}
                onClick={() => setActiveTab("faq")}
                className={`h-12 sm:h-14 w-auto sm:w-40 px-5 sm:px-6 text-base sm:text-lg ${activeTab === "faq"
                    ? ""
                    : "bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
                  }`}
              >
                FAQ
              </Button>

              <Button
                size={"lg"}
                onClick={() => setActiveTab("aftercare")}
                className={`h-12 sm:h-14 w-auto sm:w-50 px-5 sm:px-6 text-base sm:text-lg ${activeTab === "aftercare"
                    ? ""
                    : "bg-white text-black border-gray-300 hover:bg-gray-100 shadow"
                  }`}
              >
                Aftercare instructions
              </Button>
            </div>

            {activeTab === "how-it-works" && (
              <div className="space-y-4 text-[#757575]">
                <p className="text-base sm:text-lg lg:text-xl">
                  Laser hair removal works by using concentrated light energy to
                  target the pigment in the hair follicle. The laser safely
                  delivers controlled pulses of light into the skin, where the
                  energy is absorbed by the hair root.
                </p>
                <p className="text-base sm:text-lg lg:text-xl">
                  This energy heats the follicle and disrupts its ability to
                  produce new hair, helping to gradually reduce hair growth over
                  time. The surrounding skin remains unharmed, making the
                  treatment both safe and effective when performed by trained
                  professionals.
                </p>
                <p className="text-base sm:text-lg lg:text-xl">
                  At Beam & Bloom, we use advanced diode laser technology, which
                  is designed to provide precise and consistent energy to the
                  hair follicle while maintaining comfort during treatment. The
                  built-in cooling system helps protect the skin and makes the
                  treatment more comfortable compared to traditional hair
                  removal methods.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-medium text-black">
                  Diode laser hair removal is suitable for many areas of the
                  body including:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-base sm:text-lg lg:text-xl list-disc list-inside">
                  <li>Face</li>
                  <li>Underarms</li>
                  <li>Bikini line</li>
                  <li>Legs</li>
                  <li>Arms</li>
                  <li>Back</li>
                </ul>
                <p className="text-base sm:text-lg lg:text-xl">
                  Because hair grows in different cycles, multiple sessions are
                  required to effectively target hairs during their active
                  growth phase. Over time, hair becomes finer, lighter, and less
                  noticeable, leaving skin smoother and easier to maintain.
                </p>
              </div>
            )}

            {activeTab === "procedure" && (
              <div className="space-y-4 text-[#757575]">
                <p className="text-base sm:text-lg lg:text-xl">
                  Before your first treatment, you will attend a consultation
                  where we assess your skin type, hair growth, and medical
                  history to ensure the treatment is suitable for you. During
                  this appointment, we will explain the process, answer any
                  questions, and create a personalised treatment plan.
                </p>
                <p className="text-base sm:text-lg lg:text-xl">
                  On the day of your treatment, the area will be cleaned and
                  prepared. You will be given protective eyewear to shield your
                  eyes from the laser light. The diode laser device will then be
                  gently passed over the treatment area, delivering controlled
                  pulses of light that target the hair follicle.
                </p>
                <p className="text-base sm:text-lg lg:text-xl">
                  The treatment is designed to be quick and comfortable. Thanks
                  to the built-in cooling system of the diode laser, the skin is
                  protected and the sensation is often described as mild warmth
                  or a light snapping feeling.
                </p>
                <p className="text-base sm:text-lg lg:text-xl">
                  After the treatment, a soothing product may be applied to calm
                  the skin. The treated area may appear slightly red for a short
                  period, but this usually settles quickly. Clear aftercare
                  instructions will be provided to help your skin recover and
                  ensure the best results.
                </p>
                <p className="text-base sm:text-lg lg:text-xl">
                  Because hair grows in cycles, multiple sessions are required
                  to achieve long-term hair reduction.
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

            {activeTab === "aftercare" && (
              <div className="space-y-4 text-[#757575]">
                <p className="text-base sm:text-lg lg:text-xl">
                  After your laser hair removal treatment, it is important to
                  follow the recommended aftercare to protect your skin and
                  maximise your results.
                </p>
                <p className="text-base sm:text-lg lg:text-xl">
                  For the first 24–48 hours, avoid excessive heat such as hot
                  baths, saunas, steam rooms, and intense exercise.
                </p>
                <p className="text-base sm:text-lg lg:text-xl">
                  You should also avoid direct sun exposure and always apply SPF
                  30 or higher to protect the treated area.
                </p>
                <p className="text-base sm:text-lg lg:text-xl">
                  Do not wax or pluck the treated hair between sessions. Shaving
                  is acceptable if needed, as it does not affect the hair
                  follicle targeted by the laser.
                </p>
                <p className="text-base sm:text-lg lg:text-xl">
                  The treated area may appear slightly red or feel warm
                  immediately after the session. This is normal and usually
                  settles quickly. Applying a soothing cream or aloe vera can
                  help calm the skin if required.
                </p>
                <p className="text-base sm:text-lg lg:text-xl">
                  Following these aftercare guidelines will help ensure your
                  skin heals properly and that your laser treatments deliver the
                  best possible results.
                </p>
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
                src="https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1774117019/tr4pq98joc2rusofo6un.avif"
                alt="About Beam & Bloom Clinic"
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

