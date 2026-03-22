import { Metadata } from "next";
import About from "./_components/about";
import Banner from "./_components/banner";
import Consultation from "./_components/consultation";
import OurPrices from "./_components/our-prices";
import Procedure from "./_components/procedure";

export const metadata: Metadata = {
  title: "Enlarged Pores and Blackheads Treatment Dartford | Beam & Bloom",
  description:
    "Refine your skin texture and clear blackheads with our advanced laser treatments in Dartford. Professional care for enlarged pores and congested skin.",
  keywords: [
    "enlarged pores treatment Dartford",
    "blackhead removal Kent",
    "Carbon Laser Facial Dartford",
    "skin congestion treatment Kent",
    "pore tightening Dartford",
    "Beam and Bloom clinic",
    "laser skin clinic Kent",
  ],
  openGraph: {
    title: "Enlarged Pores and Blackheads Treatment Dartford | Beam & Bloom",
    description:
      "Advanced laser treatments for refined, clearer skin. Expert care for enlarged pores and blackheads in Dartford.",
    url: "https://beamandbloomclinic.com/skin-condition/enlarged-pores-blackheads",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774163588/skuc2aem4mg0xd0diyj1.avif",
        width: 1200,
        height: 630,
        alt: "Enlarged Pores and Blackheads Treatment at Beam & Bloom",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enlarged Pores and Blackheads Treatment Dartford | Beam & Bloom",
    description:
      "Expert laser treatments for clearer skin in Dartford. Reduce enlarged pores and blackheads.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774163588/skuc2aem4mg0xd0diyj1.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/skin-condition/enlarged-pores-blackheads",
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

export default function EnlargedPoresPage() {
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
