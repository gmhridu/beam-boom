import { Metadata } from "next";
import About from "./_components/about";
import Banner from "./_components/banner";
import Procedure from "./_components/procedure";
import Consultation from './_components/consultation';
import OurPrices from './_components/our-prices';

export const metadata: Metadata = {
  title: "Stretch Marks Treatment Dartford | Beam & Bloom",
  description:
    "Reduce the appearance of stretch marks with our advanced non-surgical treatments in Dartford. Expert care for smoother, firmer skin.",
  keywords: [
    "stretch marks treatment Dartford",
    "striae removal Kent",
    "laser stretch mark reduction Dartford",
    "post-pregnancy skin treatment Kent",
    "Fractional CO2 laser Dartford",
    "Beam and Bloom clinic",
    "laser skin clinic Kent",
  ],
  openGraph: {
    title: "Stretch Marks Treatment Dartford | Beam & Bloom",
    description:
      "Advanced non-surgical solutions for smoother, firmer skin. Expert stretch marks treatment in Dartford.",
    url: "https://beamandbloomclinic.com/skin-condition/stretch-marks",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774163588/skuc2aem4mg0xd0diyj1.avif",
        width: 1200,
        height: 630,
        alt: "Stretch Marks Treatment at Beam & Bloom",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stretch Marks Treatment Dartford | Beam & Bloom",
    description:
      "Expert non-surgical treatments for smoother, firmer skin and stretch mark reduction in Dartford.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774163588/skuc2aem4mg0xd0diyj1.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/skin-condition/stretch-marks",
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

export default function StretchMarks() {
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
