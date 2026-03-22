import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";

import Footer from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppinsLight = Poppins({
  weight: "300",
  variable: "--font-poppins-light",
  subsets: ["latin"],
});

const ivyModeSemiBold = localFont({
  src: "../fonts/ivy-mode-semi-bold.woff2",
  variable: "--font-ivy-mode-semi-bold",
  display: "swap",
});

const ivyModeRegular = localFont({
  src: "../fonts/IvyMode-Regular.ttf",
  variable: "--font-ivy-mode-regular",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Beam & Bloom | Advanced Laser & Skin Clinic in Dartford",
    template: "%s | Beam & Bloom",
  },
  description:
    "Boutique aesthetic clinic in Dartford specialising in advanced laser hair removal, tattoo removal, CO2 resurfacing, and Permanent Make Up. Achieve natural, confidence-boosting results.",
  keywords: [
    "laser hair removal Dartford",
    "skin clinic Kent",
    "tattoo removal",
    "CO2 laser resurfacing",
    "permanent makeup",
    "aesthetic treatments",
    "Beam and Bloom",
  ],
  authors: [{ name: "Beam & Bloom" }],
  creator: "Beam & Bloom",
  publisher: "Beam & Bloom",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://beamandbloomclinic.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beam & Bloom | Advanced Laser & Skin Clinic in Dartford",
    description:
      "Restore, refine and rejuvenate your skin with advanced laser and skin treatments in Dartford, Kent.",
    url: "https://beamandbloomclinic.com",
    siteName: "Beam & Bloom",
    images: [
      {
        url: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1772993590/uabp4egesz6iryvwgv6w.avif",
        width: 1200,
        height: 630,
        alt: "Beam & Bloom Clinic Banner",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beam & Bloom | Advanced Laser & Skin Clinic in Dartford",
    description:
      "Boutique aesthetic clinic specialising in advanced laser and skin treatments.",
    images: ["https://res.cloudinary.com/dyq0ij1yk/image/upload/v1772993590/uabp4egesz6iryvwgv6w.avif"],
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

const THEME_INIT_SCRIPT = `(function(){
  try{
    var stored = window.localStorage.getItem('theme');
    var mode = (stored==='light'||stored==='dark'||stored==='auto') ? stored : 'auto';

    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var resolved = mode==='auto' ? (prefersDark ? 'dark' : 'light') : mode;

    var root = document.documentElement;
    root.classList.remove('light','dark');
    root.classList.add(resolved);

    if(mode==='auto'){
      root.removeAttribute('data-theme')
    } else {
      root.setAttribute('data-theme', mode)
    }

    root.style.colorScheme = resolved;
  } catch(e){}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-arp="" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppinsLight.variable} ${ivyModeSemiBold.variable} ${ivyModeRegular.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
