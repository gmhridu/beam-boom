import { Metadata } from "next";
import About from "./_components/about";
import Banner from "./_components/banner";
import Procedure from './_components/procedure';
import Consultation from './_components/consultation';
import OurPrices from './_components/our-prices';
export const metadata: Metadata = {
  title: "Double Chin and Saggy Neck Treatment Dartford | Beam & Bloom",
  description:
    "Tighten and contour your neck and jawline with our advanced non-surgical treatments in Dartford. Expert care for double chin and skin laxity.",
  keywords: [
    "double chin treatment Dartford",
    "neck tightening Kent",
    "saggy neck treatment Dartford",
    "jawline contouring Kent",
    "non-surgical neck lift Dartford",
    "Beam and Bloom clinic",
    "laser skin clinic Kent",
  ],
  openGraph: {
    title: "Double Chin and Saggy Neck Treatment Dartford | Beam & Bloom",
    description:
      "Advanced non-surgical solutions for a firmer neck and jawline. Expert care in Dartford.",
    url: "https://beamandbloomclinic.com/skin-condition/double-chin-saggy-neck",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774163588/skuc2aem4mg0xd0diyj1.avif",
        width: 1200,
        height: 630,
        alt: "Double Chin and Saggy Neck Treatment at Beam & Bloom",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Double Chin and Saggy Neck Treatment Dartford | Beam & Bloom",
    description:
      "Expert non-surgical treatments for a firmer neck and jawline in Dartford.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774163588/skuc2aem4mg0xd0diyj1.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/skin-condition/double-chin-saggy-neck",
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

export default function DoubleChinSaggyNeckPage() {
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
