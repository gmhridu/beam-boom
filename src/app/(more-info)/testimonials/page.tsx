import { Metadata } from "next";
import Banner from "./_components/banner";
import TestimonialsSection from "./_components/testimonial-section";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews Dartford | Beam & Bloom Clinic",
  description:
    "Read what our clients say about their experience at Beam & Bloom Clinic in Dartford. Trusted reviews for advanced laser and aesthetic treatments.",
  keywords: [
    "laser clinic reviews Dartford",
    "aesthetic treatment testimonials Kent",
    "Beam and Bloom clinic reviews",
    "skin care treatment feedback Dartford",
    "trusted laser clinic Kent",
  ],
  openGraph: {
    title: "Client Testimonials & Reviews | Beam & Bloom Clinic",
    description:
      "See the results and hear from our satisfied clients. Excellence in aesthetic care in Dartford.",
    url: "https://beamandbloomclinic.com/testimonials",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1772993687/afnkbgzglz8tm4yy3uva.avif",
        width: 1200,
        height: 630,
        alt: "Beam & Bloom Clinic Testimonials",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials & Reviews | Beam & Bloom Clinic",
    description:
      "Real stories and real results from our valued clients in Dartford.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1772993687/afnkbgzglz8tm4yy3uva.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/testimonials",
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

export default function TestimonialsPage() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Banner />
      <TestimonialsSection />
    </main>
  );
}
