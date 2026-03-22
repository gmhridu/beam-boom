import { Metadata } from "next";
import Banner from "./_components/banner";
import About from "./_components/about";
import Procedure from "./_components/procedure";
import Consultation from "./_components/consultation";
import OurPrices from "./_components/our-prices";
import RemovalSlider from "./_components/removal-slider";
import AsSeenIn from "./_components/as-seen-as";

export const metadata: Metadata = {
  title: "Permanent Make-up Dartford | Beam & Bloom",
  description:
    "Expert permanent make-up treatments in Dartford. Enhance your natural beauty with professional eyebrow, eyeliner, and lip blush services at Beam & Bloom.",
  keywords: [
    "permanent make-up Dartford",
    "microblading Kent",
    "powder brows Dartford",
    "lip blush treatment Kent",
    "permanent eyeliner Dartford",
    "cosmetic tattooing Kent",
    "semi-permanent make-up Dartford",
  ],
  openGraph: {
    title: "Permanent Make-up Dartford | Beam & Bloom",
    description:
      "Achieve effortless beauty with our advanced permanent make-up treatments. Natural-looking results for brows, eyes, and lips in our Dartford clinic.",
    url: "https://beamandbloomclinic.com/treatment/permanent-make-up",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774119392/qppcjoczk3ovopwabqg0.avif",
        width: 1200,
        height: 630,
        alt: "Permanent Make-up treatment at Beam & Bloom",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Permanent Make-up Dartford | Beam & Bloom",
    description:
      "Professional permanent make-up services for eyebrows, eyes, and lips in Dartford.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774119392/qppcjoczk3ovopwabqg0.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/treatment/permanent-make-up",
  },
};

export default function PermanentMakeUpPage() {
  return (
    <main>
      <Banner />
      <About />
      <Procedure />
      <AsSeenIn />
      <RemovalSlider />
      <Consultation />
      <OurPrices />
    </main>
  );
}
