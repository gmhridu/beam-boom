import { Metadata } from "next";
import About from './_components/about';
import Banner from './_components/banner';
import Consultation from './_components/consultation';
import OurPrices from './_components/our-prices';
import Procedure from './_components/procedure';
import RemovalSlider from './_components/removal-slider';

export const metadata: Metadata = {
  title: "3D Vjuve Fractional CO2 Laser Dartford | Beam & Bloom",
  description:
    "Advanced skin resurfacing and rejuvenation with 3D Vjuve Fractional CO2 Laser at Beam & Bloom Dartford. Treat scars, wrinkles, and pigmentation.",
  keywords: [
    "3D Vjuve Fractional CO2 Laser Dartford",
    "CO2 laser skin resurfacing Kent",
    "acne scar treatment Dartford",
    "skin rejuvenation Kent",
    "fractional laser therapy Dartford",
    "stretch mark removal Kent",
  ],
  openGraph: {
    title: "3D Vjuve Fractional CO2 Laser Dartford | Beam & Bloom",
    description:
      "Transform your skin with advanced fractional CO2 laser technology. Effective for scarring, aging, and texture at our Dartford clinic.",
    url: "https://beamandbloomclinic.com/treatment/3d-vjuve-fractional-co2-laser",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774117805/csbaxx90nfrqb02bj6gn.avif",
        width: 1200,
        height: 630,
        alt: "3D Vjuve Fractional CO2 Laser Treatment at Beam & Bloom",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Vjuve Fractional CO2 Laser Dartford | Beam & Bloom",
    description:
      "Revolutionary fractional CO2 laser for skin resurfacing and scar reduction in Dartford.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774117805/csbaxx90nfrqb02bj6gn.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/treatment/3d-vjuve-fractional-co2-laser",
  },
};

export default function ThreeD_Vjuve_Fractional_CO2_Laser() {
  return (
    <div>
      <Banner />
      <About />
      <Procedure />
      <RemovalSlider />
      <Consultation />
      <OurPrices />
    </div>
  );
}
