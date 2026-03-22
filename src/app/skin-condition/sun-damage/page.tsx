import { Metadata } from "next";
import About from "./_components/about";
import Banner from "./_components/banner";
import Procedure from "./_components/procedure";
import Consultation from './_components/consultation';
import OurPrices from './_components/our-prices';

export const metadata: Metadata = {
  title: "Sun Damage and Pigmentation Treatment Dartford | Beam & Bloom",
  description:
    "Repair sun-damaged skin and reduce pigmentation with our advanced laser treatments in Dartford. Professional care for solar lentigines and uneven skin tone.",
  keywords: [
    "sun damage treatment Dartford",
    "pigmentation removal Kent",
    "solar lentigines treatment Dartford",
    "uneven skin tone Kent",
    "laser skin resurfacing Dartford",
    "Beam and Bloom clinic",
    "laser skin clinic Kent",
  ],
  openGraph: {
    title: "Sun Damage and Pigmentation Treatment Dartford | Beam & Bloom",
    description:
      "Advanced laser solutions for sun-damaged skin and pigmentation. Expert care in Dartford.",
    url: "https://beamandbloomclinic.com/skin-condition/sun-damage",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774163588/skuc2aem4mg0xd0diyj1.avif",
        width: 1200,
        height: 630,
        alt: "Sun Damage Treatment at Beam & Bloom",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun Damage and Pigmentation Treatment Dartford | Beam & Bloom",
    description:
      "Expert laser treatments for sun-damaged skin and pigmentation in Dartford.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774163588/skuc2aem4mg0xd0diyj1.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/skin-condition/sun-damage",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function SunDamagePage() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Banner />
      <About />
      <Procedure />
      <Consultation />
      <OurPrices />
    </main>
  );
}
