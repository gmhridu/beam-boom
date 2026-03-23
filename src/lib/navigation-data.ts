// lib/navigation-data.ts

import type { Href } from "@/components/view-transition-link";

export interface NavigationLink {
  name: string;
  href: Href;
}

export interface NavigationGroup {
  name: string;
  children: NavigationLink[];
}

export type NavigationItem = NavigationLink | NavigationGroup;

export const navigationData = [
  { name: "HOME", href: "/" as Href },
  { name: "ABOUT US", href: "/about-us" as Href },
  {
    name: "TREATMENTS",
    children: [
      {
        name: "Laser Tattoo Removal",
        href: "/treatment/laser-tattoo-removal" as Href,
      },
      {
        name: "Laser Hair Removal",
        href: "/treatment/laser-hair-removal" as Href,
      },
      {
        name: "3D Vjuve Fractional CO2 Laser",
        href: "/treatment/3d-vjuve-fractional-co2-laser" as Href,
      },
      {
        name: "Skin Boosters / Biostimulators",
        href: "/treatment/skin-boosters-biostimulators" as Href,
      },
      {
        name: "Permanent Make Up",
        href: "/treatment/permanent-make-up" as Href,
      },
      {
        name: "Carbon Laser Facial",
        href: "/treatment/carbon-laser-facial" as Href,
      },
    ],
  },
  {
    name: "SKIN CONDITION",
    children: [
      { name: "Acne Scarring", href: "/skin-condition/acne-scarring" as Href },
      {
        name: "Surgical Scars",
        href: "/skin-condition/surgical-scars" as Href,
      },
      {
        name: "Lines and Wrinkles",
        href: "/skin-condition/lines-and-wrinkles" as Href,
      },
      {
        name: "Pores & Blackheads",
        href: "/skin-condition/enlarged-pores-blackheads" as Href,
      },
      {
        name: "Double Chin / Saggy Neck",
        href: "/skin-condition/double-chin-saggy-neck" as Href,
      },
      {
        name: "Sun Damage",
        href: "/skin-condition/sun-damage" as Href,
      },
      {
        name: "Stretch Marks",
        href: "/skin-condition/stretch-marks" as Href,
      },
      {
        name: "Oily Skin",
        href: "/skin-condition/oily-skin" as Href,
      },
      {
        name: "Pigmentation",
        href: "/skin-condition/pigmentation" as Href,
      },
    ],
  },
  { name: "PRICING", href: "/pricing" as Href },
  {
    name: "MORE INFO",
    children: [
      { name: "Special Offers", href: "/special-offers" as Href },
      { name: "Testimonials", href: "/testimonials" as Href },
    ],
  },
  { name: "CONTACT US", href: "/contact-us" as Href },
] as const satisfies readonly NavigationItem[];
