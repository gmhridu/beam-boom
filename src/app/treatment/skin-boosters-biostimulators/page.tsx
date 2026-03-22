import { Metadata } from "next";
import About from "./_components/about";
import Banner from "./_components/banner";
import Consultation from "./_components/consultation";
import OurPrices from "./_components/our-prices";
import Procedure from "./_components/procedure";

export const metadata: Metadata = {
  title: "Skin Boosters & Biostimulators Dartford | Beam & Bloom",
  description:
    "Revitalise and hydrate your skin with advanced skin boosters and biostimulators at Beam & Bloom Dartford. Improve skin quality, elasticity, and radiance.",
  keywords: [
    "skin boosters Dartford",
    "biostimulators Kent",
    "injectable skin treatments Kent",
    "Profhilo treatment Dartford",
    "Polynucleotides Kent",
    "skin hydration therapy Dartford",
    "collagen stimulation Kent",
  ],
  openGraph: {
    title: "Skin Boosters & Biostimulators Dartford | Beam & Bloom",
    description:
      "Advanced non-surgical skin rejuvenation to restore moisture, stimulate collagen, and enhance skin quality in our Dartford clinic.",
    url: "https://beamandbloomclinic.com/treatment/skin-boosters-biostimulators",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774118978/rkpimdqejkvmdqgc1jh2.avif",
        width: 1200,
        height: 630,
        alt: "Skin Boosters treatment at Beam & Bloom",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skin Boosters & Biostimulators Dartford | Beam & Bloom",
    description:
      "Revolutionary injectable treatments for skin hydration and collagen stimulation in Dartford.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774118978/rkpimdqejkvmdqgc1jh2.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/treatment/skin-boosters-biostimulators",
  },
};

export default function SkinBoostersBiostimulatorsPage() {
  return (
    <main>
      <Banner />
      <About />
      <Procedure />
      <Consultation />
      <OurPrices />
    </main>
  );
}
