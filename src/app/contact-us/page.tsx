import { Metadata } from "next";
import Banner from "./_components/banner";
import ContactFormSection from "./_components/contact-form";
import ContactInfo from "./_components/contact-info";

export const metadata: Metadata = {
  title: "Contact Beam & Bloom Clinic Dartford | Book Your Consultation",
  description:
    "Get in touch with Beam & Bloom Clinic in Dartford. Book a consultation, ask a question, or find our clinic location in Kent for premium laser and skin treatments.",
  keywords: [
    "contact Beam and Bloom Dartford",
    "book skin consultation Kent",
    "laser clinic phone number Dartford",
    "aesthetic clinic email Kent",
    "Beam and Bloom clinic location",
  ],
  openGraph: {
    title: "Contact Beam & Bloom Clinic | Book Your Consultation",
    description:
      "Connect with our expert team in Dartford. Your journey to radiant skin starts here.",
    url: "https://beamandbloomclinic.com/contact-us",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1772993687/afnkbgzglz8tm4yy3uva.avif",
        width: 1200,
        height: 630,
        alt: "Contact Beam & Bloom Clinic",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Beam & Bloom Clinic | Book Your Consultation",
    description:
      "Reach out to our Dartford clinic for expert skin and laser care advice.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1772993687/afnkbgzglz8tm4yy3uva.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/contact-us",
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

export default function ContactUsPage() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Banner />
      <ContactInfo />
      <ContactFormSection />
    </main>
  );
}
