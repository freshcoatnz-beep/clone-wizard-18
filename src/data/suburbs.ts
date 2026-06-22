export interface Suburb {
  slug: string;
  name: string;
  intro: string;
  highlights: string[];
  faqs?: { question: string; answer: string }[];
}

export const suburbs: Suburb[] = [
  {
    slug: 'riccarton',
    name: 'Riccarton',
    intro:
      "Freshcoat Painting provides trusted interior, exterior and roof painting services across Riccarton. From character bungalows on Clyde Road to modern townhouses near Westfield, we deliver a flawless finish backed by our 5-year guarantee.",
    highlights: [
      'Local Riccarton painters with 30+ years experience',
      'Specialists in weatherboard and plaster exteriors common in the area',
      'Free, no-obligation quotes — usually within 24 hours',
    ],
  },
  {
    slug: 'merivale',
    name: 'Merivale',
    intro:
      "Painting Merivale's beautiful character homes and high-end residences is what we love. Freshcoat brings premium products, careful preparation and meticulous workmanship to every Merivale project — interior or exterior.",
    highlights: [
      'Heritage and character home painting specialists',
      'Premium low-VOC paints suitable for occupied homes',
      'Discreet, respectful crews who treat your property like their own',
    ],
  },
  {
    slug: 'papanui',
    name: 'Papanui',
    intro:
      "Whether you're refreshing a family home in Papanui or repainting a tired roof to lift kerb appeal, Freshcoat Painting delivers quality results at fair prices. Local Christchurch painters you can trust.",
    highlights: [
      'Interior, exterior and roof painting all under one roof',
      'Transparent fixed-price quotes — no surprises',
      'Fully insured and Site Safe trained painters',
    ],
  },
  {
    slug: 'fendalton',
    name: 'Fendalton',
    intro:
      "Fendalton homes deserve premium care. Our experienced painters handle everything from large character villas to contemporary architectural builds, with the attention to detail your home deserves.",
    highlights: [
      'Premium painting for high-value Fendalton homes',
      'Colour consultation available on request',
      '5-year workmanship warranty on every job',
    ],
  },
  {
    slug: 'ilam',
    name: 'Ilam',
    intro:
      "Serving Ilam homeowners, landlords and student rentals alike, Freshcoat Painting provides reliable, on-time painting services with quality finishes that last.",
    highlights: [
      'Fast turnaround for rental refreshes between tenancies',
      'Neat, clean worksites — we leave your home tidier than we found it',
      'Competitive pricing with no hidden costs',
    ],
  },
  {
    slug: 'cashmere',
    name: 'Cashmere',
    intro:
      "Looking for a trusted Cashmere house painter? Freshcoat Painting has been painting homes across Cashmere, Cashmere Hills, Westmorland and the Port Hills for 30+ years. From character bungalows on Hackthorne Road to modern hillside builds with panoramic views, our Cashmere painters deliver flawless interior, exterior and roof painting backed by a 5-year workmanship guarantee.",
    highlights: [
      'Local Cashmere house painters — 30+ years on the Port Hills',
      'Weather-tough exterior coatings for sun, wind and rain exposure',
      'Roof painting and restoration — Colorsteel, metal and tile',
      'Free fixed-price quotes across Cashmere — usually within 24 hours',
    ],
    faqs: [
      {
        question: 'How much does it cost to paint a house in Cashmere?',
        answer:
          'Exterior house painting in Cashmere typically costs $5,500–$13,000 depending on house size, cladding (weatherboard, plaster, brick), access on sloped sites and surface condition. Interior repaints start around $3,500. We provide a free fixed-price quote after an on-site inspection.',
      },
      {
        question: 'Do you paint hillside and steep-access homes in Cashmere?',
        answer:
          'Yes — many Cashmere properties sit on steep sections with tricky access. Our Cashmere painters are Site Safe trained and fully insured, using scaffolding, harnesses and elevated work platforms where needed to deliver a safe, quality finish.',
      },
      {
        question: 'What paint do you use on Cashmere exteriors?',
        answer:
          'We use premium weather-resistant systems from Resene, Dulux and Wattyl — chosen specifically for the harsh sun, wind and rain that Cashmere and the Port Hills get. All exterior work is backed by our 5-year workmanship guarantee.',
      },
      {
        question: 'How long will it take to paint my Cashmere home?',
        answer:
          'Most Cashmere exterior repaints take 5–10 working days depending on size, prep and weather. Interior repaints are typically 2–5 days per project. We give you a clear schedule with your quote and stick to it.',
      },
    ],
  },
  {
    slug: 'sumner',
    name: 'Sumner',
    intro:
      "Sumner's coastal location means salt air and harsh UV — Freshcoat uses marine-grade and UV-stable products to protect your home against the elements, with a finish that looks great for years.",
    highlights: [
      'Coastal-grade paint systems for salt-exposed homes',
      'Specialists in weatherboard and exterior cladding',
      'Local painters who understand Sumner conditions',
    ],
  },
  {
    slug: 'rolleston',
    name: 'Rolleston',
    intro:
      "Servicing Rolleston and the wider Selwyn district, Freshcoat Painting brings city-quality workmanship to your doorstep. Interior, exterior and new-build painting — all backed by our 5-year guarantee.",
    highlights: [
      'New-build painting for Rolleston subdivisions',
      'Interior repaints and full exterior projects',
      'Punctual, professional painters who finish on time',
    ],
  },
  {
    slug: 'bryndwr',
    name: 'Bryndwr',
    intro:
      "Freshcoat Painting proudly serves Bryndwr and the surrounding Christchurch suburbs. Whether it's a fresh interior, weatherproof exterior, or full roof restoration, we deliver the same quality finish we'd want in our own homes.",
    highlights: [
      'Local Bryndwr painting service with 30+ years experience',
      'Free quotes across northwest Christchurch',
      'Premium products with a 5-year workmanship warranty',
    ],
  },
  {
    slug: 'halswell',
    name: 'Halswell',
    intro:
      "Halswell's mix of new builds and established family homes keeps us busy. Freshcoat Painting delivers fresh interiors, weather-tough exteriors and roof restorations across Halswell — all backed by our 5-year guarantee.",
    highlights: [
      'New-build and repaint specialists across Halswell',
      'Free fixed-price quotes — usually within 24 hours',
      'Fully insured painters with 30+ years experience',
    ],
  },
  {
    slug: 'st-albans',
    name: 'St Albans',
    intro:
      "From character villas off Edgeware Road to modern townhouses, St Albans homes get the meticulous prep and quality finish Freshcoat is known for. Interior, exterior and roof painting — done right the first time.",
    highlights: [
      'Character and villa painting specialists',
      'Low-VOC paints suitable for occupied homes',
      '5-year workmanship guarantee on every job',
    ],
  },
  {
    slug: 'spreydon',
    name: 'Spreydon',
    intro:
      "Freshcoat Painting serves Spreydon homeowners and landlords with reliable, on-time interior and exterior painting. Quality finishes, fair pricing, and zero hassle from quote to clean-up.",
    highlights: [
      'Interior repaints and full exterior projects',
      'Rental refresh turnarounds between tenancies',
      'Transparent fixed-price quotes — no surprises',
    ],
  },
  {
    slug: 'beckenham',
    name: 'Beckenham',
    intro:
      "Beckenham's character bungalows and family homes deserve careful, experienced painters. Freshcoat brings premium products and meticulous prep to every Beckenham project — interior or exterior.",
    highlights: [
      'Heritage and character home painting specialists',
      'Premium weather-resistant exterior coatings',
      'Discreet crews who treat your home like their own',
    ],
  },
  {
    slug: 'sydenham',
    name: 'Sydenham',
    intro:
      "From inner-city homes to small commercial spaces, Freshcoat Painting handles Sydenham projects of every size. Quality workmanship, fair pricing and a 5-year guarantee on everything we do.",
    highlights: [
      'Residential and small commercial painting',
      'Punctual, professional painters who finish on time',
      'Fully insured and Site Safe trained',
    ],
  },
  {
    slug: 'burnside',
    name: 'Burnside',
    intro:
      "Burnside families and homeowners trust Freshcoat for interior makeovers, exterior weatherproofing and roof restorations. Local Christchurch painters delivering quality you can see.",
    highlights: [
      'Interior, exterior and roof painting all under one roof',
      'Free no-obligation quotes — usually within 24 hours',
      '5-year workmanship warranty on every job',
    ],
  },
  {
    slug: 'avonhead',
    name: 'Avonhead',
    intro:
      "Freshcoat Painting serves Avonhead with reliable interior and exterior painting services. From single rooms to full repaints, we deliver flawless finishes backed by our 5-year guarantee.",
    highlights: [
      'Local Avonhead painters with 30+ years experience',
      'Premium paints — Resene, Dulux and Wattyl',
      'Neat, clean worksites — we tidy up after ourselves',
    ],
  },
  {
    slug: 'hornby',
    name: 'Hornby',
    intro:
      "Servicing Hornby and the wider southwest Christchurch area, Freshcoat brings quality workmanship to interior, exterior and roof painting projects. Free quotes, fair prices and zero hassle.",
    highlights: [
      'Interior repaints and full exterior projects',
      'Roof painting and restoration — metal and tile',
      'Competitive pricing with no hidden costs',
    ],
  },
  {
    slug: 'lincoln',
    name: 'Lincoln',
    intro:
      "Freshcoat Painting brings city-quality workmanship to Lincoln and the surrounding Selwyn district. New-build painting, interior repaints and full exterior projects — all backed by our 5-year guarantee.",
    highlights: [
      'New-build painting for Lincoln subdivisions',
      'Interior and exterior repaints across Selwyn',
      'Punctual, professional painters who finish on time',
    ],
  },
];
