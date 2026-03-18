"use client";

// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { Href, ViewTransitionLink } from "../view-transition-link";

export default function Footer() {

  return (
    <footer
      className="relative bg-gray-950 text-gray-200 pt-16 pb-10 overflow-hidden"
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 - Logo + Social */}
          <div className="footer-logo-block">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logos/B&B-01.png"
                alt="Beam & Bloom Logo"
                width={180}
                height={60}
                className="h-12 w-auto brightness-110"
                priority
              />
            </Link>

            <div className="footer-social-icon mt-4">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-xl font-bold"
                  >
                    f
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-xl font-bold"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-xl font-bold"
                  >
                    insta
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 - Opening Hours */}
          <div className="footer-middle-block">
            <h4 className="text-xl font-semibold text-white mb-6">
              Opening Hours
            </h4>
            <div className="space-y-3">
              <p>
                <span className="font-medium">Monday–Friday:</span> 09:00 –
                19:00
              </p>
              <p>
                <span className="font-medium">Saturday:</span> 09:00 – 18:00
              </p>
              <p>
                <span className="font-medium">Sunday:</span> 09:00 – 18:00
              </p>
            </div>
          </div>

          {/* Column 3 - Newsletter */}
          <div className="footer-middle-block">
            <h4 className="text-xl font-semibold text-white mb-4">
              Signup to receive 10% off
            </h4>
            <p className="text-gray-300 mb-6 text-sm">
              off your first treatment and for our latest offers
            </p>

            <form className="flex items-center gap-3 max-w-sm">
              <input
                type="email"
                placeholder="E-mail"
                className="flex-1 px-4 py-3 rounded bg-gray-800/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="p-3.5 text-white bg-white rounded hover:bg-white/80 transition backdrop-blur-sm"
                aria-label="Subscribe"
              >
                <div className="w-[22px] h-[22px] flex items-center justify-center bg-black rounded-full text-white text-[10px] font-bold">
                  GO
                </div>
              </button>
            </form>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="footer-contact-block ">
            <h4 className="text-xl font-semibold text-white mb-6">
              Contact Info
            </h4>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Phone Number</p>
                  <a
                    href="tel:07894908026"
                    className="text-white hover:text-blue-300 transition"
                  >
                    078 9490 8026
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Email Address</p>
                  <a
                    href="mailto:Info@beamandbloomclinic.com"
                    className="text-white hover:text-blue-300 transition"
                  >
                    Info@beamandbloomclinic.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Address Info</p>
                  <p className="text-white leading-relaxed text-sm">
                    Landale Gardens
                    <br />
                    Dartford, DA1 2QB
                    <br />
                    Kent, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="relative z-10 mt-16 pt-8 border-t border-gray-700/50 text-center text-sm text-gray-500">
          <p>
            © 2026 Beam & Bloom. All Rights Reserved.
            <span className="mx-3">|</span>
            <ViewTransitionLink
              href={"/terms-and-conditions" as Href}
              className="hover:text-gray-300 transition"
            >
              Terms and Conditions
            </ViewTransitionLink>
            <span className="mx-2">|</span>
            <ViewTransitionLink
              href={"/refund-and-returns-policy" as Href}
              className="hover:text-gray-300 transition"
            >
              Refund and Returns Policy
            </ViewTransitionLink>
          </p>
        </div>
      </div>
    </footer>
  );
}
