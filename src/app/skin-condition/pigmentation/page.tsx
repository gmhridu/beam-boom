import { Metadata } from "next";
import About from "./_components/about";
import Banner from "./_components/banner";
import Procedure from "./_components/procedure";

export const metadata: Metadata = {
  title: "Pigmentation Treatment Dartford | Beam & Bloom",
  description:
    "Treat sun spots, melasma, and uneven skin tone with our advanced non-surgical pigmentation treatments in Dartford. Expert care for a clearer, more radiant complexion.",
  keywords: [
    "pigmentation treatment Dartford",
    "sun spots removal Kent",
    "melasma treatment Dartford",
    "uneven skin tone Kent",
    "laser pigmentation removal Dartford",
    "Beam and Bloom clinic",
    "laser skin clinic Kent",
  ],
  openGraph: {
    title: "Pigmentation Treatment Dartford | Beam & Bloom",
    description:
      "Advanced non-surgical solutions for clearer, more radiant skin. Expert pigmentation treatment in Dartford.",
    url: "https://beamandbloomclinic.com/skin-condition/pigmentation",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774163588/skuc2aem4mg0xd0diyj1.avif",
        width: 1200,
        height: 630,
        alt: "Pigmentation Treatment at Beam & Bloom",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pigmentation Treatment Dartford | Beam & Bloom",
    description:
      "Expert non-surgical treatments for clearer, more radiant skin and pigmentation removal in Dartford.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774163588/skuc2aem4mg0xd0diyj1.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/skin-condition/pigmentation",
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

export default function PigmentationPage() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Banner />
      <About />
      <Procedure />
    </main>
  );
}
