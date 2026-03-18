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
        <img src={"/images/about-us-leaves.png"} alt="Round shape" />
      </div>

      {/* Right gray vertical panel */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="pulse-subtitle text-sm font-medium text-gray-600 tracking-wide uppercase">
              Beam & Bloom
            </span>
            <h2 className="pulse-title text-2xl md:text-5xl font-bold text-nowrap text-gray-900">
              Double Chin & Sagging Neck
            </h2>
            <div className="pulse-light-description text-base md:text-lg  max-w-2xl mb-10 space-y-4">
              <p>
                A double chin and sagging neck can develop as a result of ageing, genetics, weight changes, or a gradual loss of collagen and skin elasticity. Over time, the skin beneath the chin and around the neck may begin to loosen, creating a softer jawline and the appearance of excess fullness under the chin.
              </p>
              <p>
                As collagen and elastin production naturally decline with age, the skin can lose its firmness and structure. This can lead to loose skin, fine lines, and reduced definition around the lower face and neck area.
              </p>

              <p className="font-bold text-black pt-4">
                Common concerns associated with this area include:
              </p>

              <ul className="space-y-4">
                <li>
                  <span className="font-bold">
                    • Loose or Sagging Skin
                  </span>{" "}
                  – Reduced collagen can cause the skin around the neck and jawline to appear less firm.
                </li>
                <li>
                  <span className="font-bold">• Loss of Jawline Definition</span> –
                  Skin laxity may soften the natural contour of the jawline.
                </li>
                <li>
                  <span className="font-bold">• Double Chin Appearance</span> –
                  A combination of loose skin and excess tissue can create fullness beneath the chin.
                </li>
                <li>
                  <span className="font-bold">• Fine Lines and Wrinkles</span> –
                  The neck area is particularly prone to visible signs of ageing.
                </li>
              </ul>

              <p className="pt-6">
                At <span className='font-bold'>Beam & Bloom</span>, we understand how changes to the jawline and neck area can affect overall facial balance and confidence. Our clinic offers advanced treatments designed to tighten the skin and restore a more defined, youthful appearance.
              </p>
              <p className="pt-6">
                One of the most effective treatments we offer for this concern is Fractional CO₂ Laser Skin Resurfacing.
              </p>

              <p className="pt-6">
                This advanced laser technology works by creating microscopic channels within the skin, stimulating the body’s natural healing response and encouraging the production of new collagen and elastin. As the skin regenerates, it becomes firmer, smoother, and more tightened.
              </p>

              <p className="pt-6">
                Fractional CO₂ laser treatment can help:
              </p>

              <ul className="space-y-4">
                <li>
                  • Tighten loose skin around the neck and jawline
                </li>
                <li>
                  <span className="font-bold">• Loss of Jawline Definition</span> –
                  Skin laxity may soften the natural contour of the jawline.
                </li>
                <li>
                  • Improve skin firmness and elasticity
                </li>
                <li>
                  • Stimulate collagen production
                </li>
                <li>
                  • Smooth fine lines and wrinkles
                </li>
                <li>
                  • Improve overall contour and definition
                </li>
              </ul>

              <p className="pt-6">
                Over time, the skin becomes noticeably firmer and more lifted as collagen rebuilds and the skin’s structure improves.
              </p>

              <p className="pt-6">
                During your consultation at Beam & Bloom, our specialist will carefully assess the skin and discuss your concerns before creating a personalised treatment plan designed to achieve natural-looking, long-lasting results.
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
