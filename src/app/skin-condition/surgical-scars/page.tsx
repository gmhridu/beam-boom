import { Metadata } from "next";
import About from "./_components/about";
import Banner from "./_components/banner";
import Procedure from "./_components/procedure";
import Consultation from './_components/consultation';
import OurPrices from './_components/our-prices';

export const metadata: Metadata = {
  title: "Surgical Scars Treatment Dartford | Beam & Bloom",
  description:
    "Visibly improve the appearance of surgical scars with our advanced laser resurfacing treatments in Dartford. Professional care for scar reduction and skin smoothing.",
  keywords: [
    "surgical scar treatment Dartford",
    "Fractional CO2 Laser Kent",
    "scar reduction Dartford",
    "laser skin resurfacing Kent",
    "surgical scar removal",
    "post-surgery skin care",
    "Beam and Bloom clinic",
  ],
  openGraph: {
    title: "Surgical Scars Treatment Dartford | Beam & Bloom",
    description:
      "Advanced laser treatments to reduce the appearance of surgical scars. Restore your skin's confidence with expert care.",
    url: "https://beamandbloomclinic.com/skin-condition/surgical-scars",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1773079624/vuwrnee1c83mjnf9frze.avif",
        width: 1200,
        height: 630,
        alt: "Surgical Scars Treatment at Beam & Bloom",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surgical Scars Treatment Dartford | Beam & Bloom",
    description:
      "Expert laser treatments for surgical scar reduction in Dartford. Smooth and refine your skin.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1773079624/vuwrnee1c83mjnf9frze.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/skin-condition/surgical-scars",
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

export default function SurgicalScarsPage() {
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
