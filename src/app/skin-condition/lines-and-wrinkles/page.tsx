import { Metadata } from "next";
import About from "./_components/about";
import Banner from "./_components/banner";
import Consultation from "./_components/consultation";
import OurPrices from "./_components/our-prices";
import Procedure from "./_components/procedure";

export const metadata: Metadata = {
  title: "Lines and Wrinkles Treatment Dartford | Beam & Bloom",
  description:
    "Reduce the appearance of fine lines and wrinkles with our advanced anti-ageing laser treatments in Dartford. Restore your skin's youthful glow and smoothness.",
  keywords: [
    "lines and wrinkles treatment Dartford",
    "Fractional CO2 Laser Kent",
    "anti-ageing treatments Dartford",
    "laser skin resurfacing Kent",
    "wrinkle reduction Dartford",
    "skin tightening Kent",
    "Beam and Bloom clinic",
  ],
  openGraph: {
    title: "Lines and Wrinkles Treatment Dartford | Beam & Bloom",
    description:
      "Advanced laser treatments for a smoother, more youthful complexion. Expert care for lines and wrinkles in Dartford.",
    url: "https://beamandbloomclinic.com/skin-condition/lines-and-wrinkles",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1773079624/vuwrnee1c83mjnf9frze.avif",
        width: 1200,
        height: 630,
        alt: "Lines and Wrinkles Treatment at Beam & Bloom",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lines and Wrinkles Treatment Dartford | Beam & Bloom",
    description:
      "Expert laser treatments for smoother, younger-looking skin in Dartford. Reduce fine lines and wrinkles.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1773079624/vuwrnee1c83mjnf9frze.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/skin-condition/lines-and-wrinkles",
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

export default function LinesAndWrinklesPage() {
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
