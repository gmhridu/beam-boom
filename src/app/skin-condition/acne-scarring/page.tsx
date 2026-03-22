import { Metadata } from "next";
import About from "./_components/about";
import Banner from "./_components/banner";
import Procedure from "./_components/procedure";
import Consultation from './_components/consultation';
import OurPrices from './_components/our-prices';

export const metadata: Metadata = {
  title: "Acne Scarring Treatment Dartford | Beam & Bloom",
  description:
    "Visibly improve the appearance of acne scars with our advanced laser treatments in Dartford. Restore smoother, healthier-looking skin with Fractional CO2 Laser technology.",
  keywords: [
    "acne scarring treatment Dartford",
    "Fractional CO2 Laser Kent",
    "skin resurfacing Dartford",
    "acne scar removal Kent",
    "smooth skin treatments",
    "atrophic scar treatment",
    "Beam and Bloom clinic",
  ],
  openGraph: {
    title: "Acne Scarring Treatment Dartford | Beam & Bloom",
    description:
      "Restore your skin's natural texture. Our advanced laser treatments target acne scarring for smoother, clearer skin.",
    url: "https://beamandbloomclinic.com/skin-condition/acne-scarring",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1773079624/vuwrnee1c83mjnf9frze.avif",
        width: 1200,
        height: 630,
        alt: "Acne Scarring Treatment at Beam & Bloom",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acne Scarring Treatment Dartford | Beam & Bloom",
    description:
      "Advanced laser treatments for acne scarring in Dartford. Restore smoother, healthier skin.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1773079624/vuwrnee1c83mjnf9frze.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/skin-condition/acne-scarring",
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

export default function AcneScarringPage() {
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
