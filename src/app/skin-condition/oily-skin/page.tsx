import { Metadata } from "next";
import About from "./_components/about";
import Banner from "./_components/banner";
import Procedure from "./_components/procedure";
import Consultation from './_components/consultation';
import OurPrices from './_components/our-prices';

export const metadata: Metadata = {
  title: "Oily Skin Treatment Dartford | Beam & Bloom",
  description:
    "Manage oily skin and reduce excess sebum with our advanced non-surgical treatments in Dartford. Expert care for clearer, balanced skin.",
  keywords: [
    "oily skin treatment Dartford",
    "excess sebum reduction Kent",
    "clogged pores treatment Dartford",
    "HydraFacial Dartford",
    "chemical peels Kent",
    "Beam and Bloom clinic",
    "laser skin clinic Kent",
  ],
  openGraph: {
    title: "Oily Skin Treatment Dartford | Beam & Bloom",
    description:
      "Advanced non-surgical solutions for clearer, balanced skin. Expert oily skin management in Dartford.",
    url: "https://beamandbloomclinic.com/skin-condition/oily-skin",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774163588/skuc2aem4mg0xd0diyj1.avif",
        width: 1200,
        height: 630,
        alt: "Oily Skin Treatment at Beam & Bloom",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oily Skin Treatment Dartford | Beam & Bloom",
    description:
      "Expert non-surgical treatments for clearer, balanced skin and oily skin management in Dartford.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774163588/skuc2aem4mg0xd0diyj1.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/skin-condition/oily-skin",
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

export default function OilySkinPage() {
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
