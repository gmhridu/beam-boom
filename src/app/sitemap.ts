import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://beamandbloomclinic.com'

  // Standard routes
  const routes = [
    '',
    '/about-us',
    '/contact-us',
    '/pricing',
    '/shop',
    '/special-offers',
    '/testimonials',
    '/terms-and-conditions',
    '/refund-and-returns-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Treatment routes
  const treatments = [
    '/treatment/laser-tattoo-removal',
    '/treatment/soprano-titanium-laser-hair-removal',
    '/treatment/3d-vjuve-fractional-co2-laser',
    '/treatment/skin-boosters-biostimulators',
    '/treatment/permanent-make-up',
    '/treatment/carbon-laser-facial',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Skin condition routes
  const skinConditions = [
    '/skin-condition/acne-scarring',
    '/skin-condition/surgical-scars',
    '/skin-condition/lines-and-wrinkles',
    '/skin-condition/enlarged-pores-blackheads',
    '/skin-condition/double-chin-saggy-neck',
    '/skin-condition/sun-damage',
    '/skin-condition/stretch-marks',
    '/skin-condition/oily-skin',
    '/skin-condition/pigmentation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...treatments, ...skinConditions]
}
