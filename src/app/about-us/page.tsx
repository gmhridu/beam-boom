import { Metadata } from "next";
import Banner from "@/app/about-us/_components/banner";
import About from "./_components/about";
import MeetTheTeam from "./_components/meet-the-team";

export const metadata: Metadata = {
  title: "About Us | Beam & Bloom Clinic Dartford",
  description:
    "Learn about Beam & Bloom, a specialist skin and laser clinic in Dartford. Founded by Baiba, we offer advanced, tailormade aesthetic treatments with a focus on natural results and client care.",
  keywords: [
    "About Beam and Bloom",
    "Baiba aesthetician Dartford",
    "skin clinic Dartford",
    "advanced laser treatments Kent",
    "boutique aesthetic clinic",
  ],
  openGraph: {
    title: "About Us | Beam & Bloom Clinic Dartford",
    description:
      "Discover the story behind Beam & Bloom and our commitment to natural, confidence-boosting skin and laser treatments.",
    url: "https://beamandbloomclinic.com/about-us",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1772996213/ye9sgjzlreiszyutlzms.avif",
        width: 1200,
        height: 630,
        alt: "Meet Baiba - Beam & Bloom founder",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Beam & Bloom Clinic Dartford",
    description:
      "Learn more about our clinic and our mission to help you beam with confidence.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1772996213/ye9sgjzlreiszyutlzms.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <main>
      <Banner />
      <About />
      <MeetTheTeam />
    </main>
  );
}
