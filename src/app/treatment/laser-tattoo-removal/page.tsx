import { Metadata } from "next";
import About from "./_components/about";
import Banner from "./_components/banner";
import Consultation from "./_components/consultation";
import OurPrices from "./_components/our-prices";
import Procedure from "./_components/procedure";
import RemovalSlider from "./_components/removal-slider";

export const metadata: Metadata = {
  title: "Laser Tattoo Removal Dartford | Safe & Effective | Beam & Bloom",
  description:
    "Professional laser tattoo removal in Dartford. Our advanced picosecond laser technology safely fades and removes tattoos of all colours with minimal risk of scarring.",
  keywords: [
    "laser tattoo removal Dartford",
    "tattoo removal Kent",
    "picosecond laser tattoo removal",
    "safe tattoo fading",
    "laser skin clinic Dartford",
  ],
  openGraph: {
    title: "Laser Tattoo Removal Dartford | Safe & Effective | Beam & Bloom",
    description:
      "Looking for safe and effective tattoo removal? Our Dartford clinic uses advanced laser technology to help you fade or completely remove unwanted tattoos.",
    url: "https://beamandbloomclinic.com/treatment/laser-tattoo-removal",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1773073036/jfhp4hqkwemzubyd0h1e.avif",
        width: 1200,
        height: 630,
        alt: "Laser Tattoo Removal treatment at Beam & Bloom",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Tattoo Removal Dartford | Safe & Effective | Beam & Bloom",
    description:
      "Advanced laser tattoo removal in Dartford. Safe, effective, and professional care.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1773073036/jfhp4hqkwemzubyd0h1e.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/treatment/laser-tattoo-removal",
  },
};

export default function LaserTattooRemovalPage() {
  return (
    <main>
      <Banner />
      <About />
      <Procedure />
      <RemovalSlider />
      <Consultation />
      <OurPrices />
    </main>
  );
}
