import { Metadata } from "next";
import About from "./_components/about";
import Banner from "./_components/banner";
import NewsletterSignup from "./_components/news-letter-sign-up";
import Offers from "./_components/offers";

export const metadata: Metadata = {
  title: "Special Offers & Laser Treatment Deals Dartford | Beam & Bloom Clinic",
  description:
    "Save on advanced laser and aesthetic treatments at Beam & Bloom Clinic in Dartford. Explore our latest special offers and package deals for premium skin care.",
  keywords: [
    "laser treatment deals Dartford",
    "aesthetic discounts Kent",
    "skin clinic offers Dartford",
    "Beam and Bloom special offers",
    "HydraFacial discounts Kent",
    "laser hair removal packages Dartford",
  ],
  openGraph: {
    title: "Special Offers & Laser Treatment Deals | Beam & Bloom Clinic",
    description:
      "Exclusive deals on advanced non-surgical treatments. Exceptional value for premium care in Dartford.",
    url: "https://beamandbloomclinic.com/special-offers",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1772993687/afnkbgzglz8tm4yy3uva.avif",
        width: 1200,
        height: 630,
        alt: "Beam & Bloom Clinic Special Offers",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Offers & Laser Treatment Deals | Beam & Bloom Clinic",
    description:
      "View our latest treatment offers and packages for premium aesthetic care in Dartford.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1772993687/afnkbgzglz8tm4yy3uva.avif"],
  },
  alternates: {
    canonical: "https://beamandbloomclinic.com/special-offers",
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

export default function SpecialOfferPage() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Banner />
      <About />
      <Offers />
      <NewsletterSignup />
    </main>
  );
}
