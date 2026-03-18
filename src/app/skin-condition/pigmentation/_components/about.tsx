"use client";

import { Href, ViewTransitionLink } from "@/components/view-transition-link";
import { ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-8 md:py-16 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Left leaf decoration (behind everything) */}
      <div className="absolute top-0 left-0 w-20 h-20 md:w-132 opacity-5">
        <img
          src={
            "https://res.cloudinary.com/dyq0ij1yk/image/upload/f_auto,q_auto:eco,w_auto,dpr_auto,c_limit/v1772995282/pdfqaiq7knldhi9y3prm.avif"
          }
          alt="Round shape"
        />
      </div>

      {/* Right gray vertical panel */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="bb-subtitle text-sm font-medium text-gray-600 tracking-wide uppercase">
              Beam & Bloom
            </span>
            <h2 className="bb-title text-2xl md:text-5xl font-bold text-nowrap text-gray-900">
              Pigmentation Irregularities
            </h2>
            <div className="bb-light-description text-base md:text-lg  max-w-2xl mb-10 space-y-4">
              <p>
                Pigmentation irregularities occur when the skin produces too
                much or too little melanin, the natural pigment responsible for
                skin colour. This can lead to uneven patches of darker or
                lighter skin that affect the overall tone and clarity of the
                complexion.
              </p>

              <p>
                These changes in pigmentation can develop for a number of
                reasons, including sun exposure, hormonal changes, inflammation,
                acne, or skin trauma. Pigmentation concerns can vary in
                appearance and may develop gradually over time.
              </p>

              <p className="font-bold text-black pt-4">
                Common types of pigmentation irregularities include:
              </p>

              <ul className="space-y-4">
                <li>
                  <span className="font-bold">• Hyperpigmentation</span> –
                  Darkened patches of skin caused by excess melanin production.
                  This can occur after inflammation, acne, or skin irritation.
                </li>
                <li>
                  <span className="font-bold">• Sun Spots (Age Spots)</span> –
                  Pigmented areas that appear after prolonged sun exposure,
                  commonly found on the face, hands, chest, and shoulders.
                </li>
                <li>
                  <span className="font-bold">• Melasma</span> – A hormonal form
                  of pigmentation that often appears as symmetrical patches on
                  the cheeks, forehead, or upper lip.
                </li>
                <li>
                  <span className="font-bold">
                    • Post-Inflammatory Pigmentation
                  </span>{" "}
                  – Dark marks that remain on the skin after acne, injury, or
                  skin inflammation.
                </li>
              </ul>

              <p className="pt-6">
                At Beam & Bloom, we understand how pigmentation concerns can
                impact confidence and the overall appearance of the skin. Our
                clinic offers advanced treatments designed to resurface the
                skin, restore balance, and improve overall skin tone.
              </p>
            </div>
            <ViewTransitionLink
              href={"/about-us" as Href}
              target="_blank"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              Read more
              <ExternalLink size={16} />
            </ViewTransitionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
