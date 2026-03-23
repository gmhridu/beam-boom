import { Metadata } from "next";
import About from "./_components/about";
import Banner from "./_components/banner";
import Consultation from "./_components/consultation";
import Procedure from "./_components/procedure";

export const metadata: Metadata = {
  title: "Soprano Titanium Laser Hair Removal Dartford | Beam & Bloom",
  description:
    "Experience painless and effective laser hair removal with Soprano Titanium at Beam & Bloom Dartford. Suitable for all skin types and body areas.",
  keywords: [
    "Soprano Titanium laser hair removal Dartford",
    "painless laser hair removal Kent",
    "laser hair removal all skin types",
    "permanent hair reduction Dartford",
    "laser skin clinic Kent",
  ],
  openGraph: {
    title: "Soprano Titanium Laser Hair Removal Dartford | Beam & Bloom",
    description:
      "Advanced, painless laser hair removal using Soprano Titanium technology. Get smooth, hair-free skin at our Dartford clinic.",
    url: "https://beamandbloomclinic.com/treatment/soprano-titanium-laser-hair-removal",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774117019/tr4pq98joc2rusofo6un.avif",
        width: 1200,
        height: 630,
        alt: "Soprano Titanium Laser Hair Removal at Beam & Bloom",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soprano Titanium Laser Hair Removal Dartford | Beam & Bloom",
    description:
      "Safe, painless, and effective laser hair removal for all skin tones in Dartford.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774117019/tr4pq98joc2rusofo6un.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/treatment/soprano-titanium-laser-hair-removal",
  },
};

export default function SopranoTitaniumLaserHairRemovalPage() {
  return (
    <main>
      <Banner />
      <About />
      <Procedure />
      <Consultation />
    </main>
  );
}
