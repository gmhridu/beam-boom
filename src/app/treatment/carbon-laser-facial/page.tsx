import { Metadata } from "next";
import About from "./_components/about";
import Banner from "./_components/banner";
import Consultation from "./_components/consultation";
import OurPrices from "./_components/our-prices";
import Procedure from "./_components/procedure";

export const metadata: Metadata = {
  title: "Carbon Laser Facial Dartford | Beam & Bloom",
  description:
    "Revitalise your skin with our advanced Carbon Laser Facial in Dartford. Deeply cleanse, minimise pores, and achieve a radiant glow with the 'Hollywood Facial'.",
  keywords: [
    "carbon laser facial Dartford",
    "Hollywood facial Kent",
    "skin rejuvenation Dartford",
    "pore reduction treatment Kent",
    "black doll facial Dartford",
    "laser skin peeling Kent",
    "deep cleansing facial Dartford",
  ],
  openGraph: {
    title: "Carbon Laser Facial Dartford | Beam & Bloom",
    description:
      "Experience the ultimate skin detox. Our Carbon Laser Facial deeply cleanses and refreshes your complexion for instant radiance.",
    url: "https://beamandbloomclinic.com/treatment/carbon-laser-facial",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774162490/s8aixrpquvwgdjve50hx.avif",
        width: 1200,
        height: 630,
        alt: "Advanced Carbon Laser Facial at Beam & Bloom",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carbon Laser Facial Dartford | Beam & Bloom",
    description:
      "Deeply cleanse and revitalise your skin with our professional Carbon Laser Facial in Dartford.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774162490/s8aixrpquvwgdjve50hx.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/treatment/carbon-laser-facial",
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

export default function CarbonLaserFacialPage() {
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
