export interface Project {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  excerpt: string;
  category: 'Interior' | 'Exterior' | 'Roof' | 'Commercial' | 'Guide';
  suburb?: string;
  date: string;
  readTime: string;
  content: ProjectSection[];
  faq?: { question: string; answer: string }[];
}

export interface ProjectSection {
  heading?: string;
  body: string[];
}

export const projects: Project[] = [
  {
    slug: 'exterior-repaint-fendalton-weatherboard',
    title: 'Exterior Weatherboard Repaint — Fendalton Character Home',
    metaTitle: 'Exterior Weatherboard Painting Fendalton | Before & After',
    metaDescription: 'See how Freshcoat transformed a weathered Fendalton character home with a full exterior repaint. Premium Resene coatings, thorough prep, and a 5-year guarantee.',
    keywords: 'exterior painting fendalton, weatherboard painting christchurch, house painter fendalton, exterior repaint christchurch, weatherboard repaint',
    excerpt:
      'A full exterior weatherboard repaint on a 1960s Fendalton character home — from tired, peeling paint to a fresh, durable finish backed by our 5-year guarantee.',
    category: 'Exterior',
    suburb: 'Fendalton',
    date: '2026-03-15',
    readTime: '4 min read',
    content: [
      {
        heading: 'The Challenge',
        body: [
          'This Fendalton home had not been painted in over 15 years. The weatherboards were showing significant peeling, chalking and bare timber exposure on the north-facing walls where UV damage was most severe. The client wanted a premium finish that would protect the home for at least another decade.',
          'Fendalton homes often feature detailed timber joinery, decorative bargeboards and multi-gabled rooflines — all of which demand meticulous preparation and careful brushwork rather than a quick spray-and-go approach.',
        ],
      },
      {
        heading: 'Our Process',
        body: [
          'We began with a full surface inspection, identifying areas of rot, loose putty and failed paint. All peeling sections were sanded back to sound substrate using Festool dust-extraction sanders to keep the site clean.',
          'Bare timber was primed with Resene Wood Primer, followed by two full coats of Resene Lumbersider in the client\'s chosen colour. We hand-brushed all detailed areas including window sashes, corner mouldings and decorative brackets, then rolled and back-brushed the broad weatherboard surfaces for consistent coverage.',
          'The roofline and gutters were carefully masked and protected. We completed the entire job over 8 working days, with daily clean-up and a full site tidy on completion.',
        ],
      },
      {
        heading: 'The Result',
        body: [
          'The home now presents a crisp, modern appearance while retaining its character charm. The Resene Lumbersider system provides a tough, flexible coating designed specifically for New Zealand\'s UV and moisture cycles.',
          'The client was thrilled with the transformation and has since referred two neighbouring properties.',
        ],
      },
    ],
    faq: [
      {
        question: 'How long does exterior weatherboard painting last in Christchurch?',
        answer: 'With proper preparation and premium acrylic systems like Resene Lumbersider or Dulux Weathershield, a quality exterior repaint typically lasts 10–15 years in Christchurch conditions. Our 5-year workmanship guarantee covers defects in application.',
      },
      {
        question: 'Do you paint during winter in Christchurch?',
        answer: 'We avoid exterior painting when temperatures drop below 10°C or when rain is forecast. In Christchurch, this means we focus on exterior work from October through April, and shift to interior projects during the cooler months.',
      },
    ],
  },
  {
    slug: 'interior-painting-three-bedroom-christchurch',
    title: 'Full Interior Repaint — 3-Bedroom Christchurch Home',
    metaTitle: 'Interior House Painting Cost Christchurch | 3 Bedroom Guide',
    metaDescription: 'How long does interior painting take for a 3-bedroom home in Christchurch? See our real project timeline, costs and process — with a 5-year guarantee.',
    keywords: 'interior painting christchurch, house painting cost christchurch, 3 bedroom house painting cost, interior painter christchurch, how long does painting take',
    excerpt:
      'A complete interior repaint of a 3-bedroom Christchurch family home — ceilings, walls, trim and doors — finished in 5 days with zero disruption to the household.',
    category: 'Interior',
    suburb: 'Halswell',
    date: '2026-02-20',
    readTime: '5 min read',
    content: [
      {
        heading: 'The Brief',
        body: [
          'The owners of this Halswell home wanted to modernise their interiors before listing the property for sale. Every room needed fresh paint: ceilings, walls, doors, skirtings and architraves. The family was living in the house during the work, so low-VOC products and a tidy, organised workflow were essential.',
        ],
      },
      {
        heading: 'Our Approach',
        body: [
          'We used Resene SpaceCote Low Sheen on walls and ceilings — a waterborne enamel with minimal odour and excellent washability. All trim was finished in Resene Lustacryl semi-gloss for durability.',
          'Our team worked room-by-room, moving furniture to the centre, covering with clean drop sheets, and completing each space before moving on. This meant the family always had usable living areas and bedrooms each evening.',
          'Preparation included filling nail holes, sanding previous paint imperfections, caulking gaps between skirtings and walls, and spot-priming any stained or repaired areas.',
        ],
      },
      {
        heading: 'Timeline & Cost',
        body: [
          'The entire interior was completed in 5 working days. This included a 3-bedroom, 2-bathroom home with an open-plan kitchen and living area, plus a separate lounge and hallway.',
          'For budgeting purposes, a full interior repaint of this size in Christchurch typically ranges from $8,000–$14,000 depending on surface condition, number of colours and level of detail. We provide fixed written quotes so there are no surprises.',
        ],
      },
    ],
    faq: [
      {
        question: 'How long does it take to paint the interior of a 3-bedroom house?',
        answer: 'A professional crew can complete a full interior repaint of a 3-bedroom home in 4–6 working days, assuming standard ceilings, walls, doors and trim. Larger homes or those with extensive repairs may take longer.',
      },
      {
        question: 'Can we stay in the house while it is being painted?',
        answer: 'Absolutely. We use low-VOC and zero-VOC paints with minimal odour, work room-by-room to keep living spaces usable, and tidy up thoroughly at the end of each day. Many of our clients live in their homes during the project.',
      },
    ],
  },
  {
    slug: 'roof-restoration-merivale-tile-roof',
    title: 'Roof Restoration — Merivale Concrete Tile Roof',
    metaTitle: 'Roof Painting Merivale Christchurch | Tile Roof Restoration',
    metaDescription: 'See how Freshcoat restored a faded concrete tile roof in Merivale using specialised roof coatings. 10+ year coating life, moss treatment and full guarantee.',
    keywords: 'roof painting merivale, roof restoration christchurch, tile roof painting, roof painter christchurch, concrete tile roof coating',
    excerpt:
      'A complete roof restoration on a 25-year-old concrete tile roof in Merivale — moss treatment, pressure wash, repairs and a premium coating system that will last 10+ years.',
    category: 'Roof',
    suburb: 'Merivale',
    date: '2026-01-10',
    readTime: '4 min read',
    content: [
      {
        heading: 'The Condition',
        body: [
          'This Merivale home had a concrete tile roof that had faded significantly and was showing patches of moss and lichen growth, particularly on the southern faces. The owners were concerned about water ingress and wanted to extend the roof\'s life rather than replace it.',
        ],
      },
      {
        heading: 'The Restoration Process',
        body: [
          'We began with a thorough pressure wash using a specialised roof cleaning solution to remove all moss, lichen and dirt buildup. Any cracked or broken tiles were replaced, and the ridge capping was re-bedded and re-pointed where needed.',
          'Once dry, we applied a penetrating sealer/primer followed by two coats of a premium acrylic roof coating formulated for concrete and terracotta tiles. This coating is flexible, UV-stable and resists future moss regrowth.',
          'The entire process took 4 days, and we scheduled the work during a settled weather window to ensure proper curing.',
        ],
      },
      {
        heading: 'The Outcome',
        body: [
          'The roof was transformed from a patchy grey-green to a deep, consistent charcoal. More importantly, the coating system provides a protective barrier that will extend the roof\'s serviceable life by at least 10 years.',
          'Roof restoration is typically 60–70% cheaper than a full roof replacement, making it one of the highest-ROI home improvements available.',
        ],
      },
    ],
    faq: [
      {
        question: 'How long does roof painting last on concrete tiles?',
        answer: 'With proper preparation and a premium acrylic roof coating, a restored concrete tile roof should last 10–15 years in Christchurch conditions. We use coatings specifically designed for New Zealand\'s UV and weather exposure.',
      },
      {
        question: 'Should I replace or restore my tile roof?',
        answer: 'If the underlying tiles and structure are sound, restoration is almost always the better value. It costs 60–70% less than replacement and adds 10–15 years of life. We assess every roof honestly and will tell you if replacement is the better option.',
      },
    ],
  },
  {
    slug: 'new-build-painting-rolleston',
    title: 'New-Build Painting — Rolleston Family Home',
    metaTitle: 'New Build Painters Rolleston Christchurch | Freshcoat',
    metaDescription: 'Premium new-build painting for a Rolleston family home. We work with builders and homeowners to deliver flawless finishes from pre-paint inspection to handover.',
    keywords: 'new build painter christchurch, new house painting rolleston, painting new build christchurch, house painter rolleston',
    excerpt:
      'Working alongside a local builder, we delivered the interior and exterior painting for a new 4-bedroom home in Rolleston — from gib stopping to the final coat.',
    category: 'Interior',
    suburb: 'Rolleston',
    date: '2025-12-05',
    readTime: '4 min read',
    content: [
      {
        heading: 'The Project',
        body: [
          'This new-build project in a Rolleston subdivision required a full interior and exterior paint job for a 4-bedroom, 2-bathroom family home with an attached double garage. We were engaged by the builder to complete the painting from pre-paint stage through to final handover.',
        ],
      },
      {
        heading: 'Our Role in the Build',
        body: [
          'We began with a pre-paint inspection to identify any gib imperfections, nail pops or surface issues that needed rectification before painting. This step is critical — paint will not hide poor substrate preparation.',
          'All interior walls and ceilings received a professional stop and sand, followed by a pigmented sealer and two coats of Resene SpaceCote Low Sheen. Exterior weatherboards were primed and finished with two coats of Resene Lumbersider.',
          'We coordinated our schedule around other trades, ensuring the painter was always the last trade in each room to avoid damage to fresh paint.',
        ],
      },
      {
        heading: 'Builder & Homeowner Benefits',
        body: [
          'Builders appreciate our punctuality, clean sites and willingness to work within tight construction schedules. Homeowners get a flawless finish and our 5-year workmanship guarantee from day one.',
          'We regularly work with builders across Christchurch and the Selwyn district on new-build and renovation projects.',
        ],
      },
    ],
  },
  {
    slug: 'commercial-office-repaint-riccarton',
    title: 'Commercial Office Repaint — Riccarton Business Park',
    metaTitle: 'Commercial Painters Riccarton Christchurch | Office Painting',
    metaDescription: 'Minimal-disruption commercial painting for a Riccarton office suite. Evening and weekend work, fast turnaround, and a professional finish that impressed staff and clients.',
    keywords: 'commercial painter christchurch, office painting christchurch, commercial painting riccarton, business painter christchurch',
    excerpt:
      'A 300m² office suite repaint in Riccarton completed over two weekends with zero disruption to the Monday–Friday business operations.',
    category: 'Commercial',
    suburb: 'Riccarton',
    date: '2025-11-18',
    readTime: '3 min read',
    content: [
      {
        heading: 'The Requirement',
        body: [
          'A Riccarton-based technology company needed their office refreshed before a major client visit. The challenge was that the space was fully occupied Monday–Friday, so all painting had to happen outside business hours.',
        ],
      },
      {
        heading: 'Out-of-Hours Execution',
        body: [
          'We worked Friday evenings and full Saturdays and Sundays over two consecutive weekends. Our crew of three painters completed the reception area, three meeting rooms, open-plan workspace and kitchenette.',
          'All furniture was either moved or carefully covered. We used low-odour, fast-drying products so the space was fully usable by Monday morning with no residual smell.',
        ],
      },
      {
        heading: 'Result & Feedback',
        body: [
          'The client\'s feedback was exceptional: "The team was professional, quiet and left everything exactly as they found it. Our staff walked in Monday to a completely transformed office."',
          'We regularly handle commercial painting for offices, retail spaces and medical suites across Christchurch, with flexible scheduling to suit your business.',
        ],
      },
    ],
  },
  {
    slug: 'painting-cost-guide-2026-christchurch',
    title: 'How Much Does House Painting Cost in Christchurch? (2026 Guide)',
    metaTitle: 'House Painting Cost Christchurch 2026 | Price Guide',
    metaDescription: 'Transparent 2026 pricing for house painting in Christchurch. Interior, exterior and roof painting costs explained — with real project examples and no hidden fees.',
    keywords: 'house painting cost christchurch, painter cost christchurch, how much does painting cost, painting prices christchurch, house painter rates nz',
    excerpt:
      'A transparent breakdown of what house painting costs in Christchurch in 2026 — from interior rooms to full exteriors and roof restorations, with real project pricing.',
    category: 'Guide',
    date: '2026-04-01',
    readTime: '7 min read',
    content: [
      {
        heading: 'Interior Painting Costs',
        body: [
          'Interior painting is typically priced per room or by square metre. In Christchurch in 2026, expect to pay:\n\n• Single room (walls only): $600–$1,200\n• Single room (walls, ceiling, trim): $1,200–$2,200\n• Full 3-bedroom home interior: $8,000–$14,000\n• Full 4-bedroom home interior: $12,000–$20,000\n\nFactors that affect pricing include surface condition (more prep = more cost), ceiling height, number of colours, and whether the home is occupied during painting.',
        ],
      },
      {
        heading: 'Exterior Painting Costs',
        body: [
          'Exterior painting costs depend on home size, cladding type, access difficulty and surface condition. Typical Christchurch pricing:\n\n• Small single-storey weatherboard home: $6,000–$10,000\n• Standard two-storey weatherboard home: $10,000–$18,000\n• Large or complex home: $18,000–$30,000+\n\nPlaster and brick homes often require different coating systems, which can affect pricing. Scaffolding for two-storey homes is usually included in our quotes.',
        ],
      },
      {
        heading: 'Roof Painting Costs',
        body: [
          'Roof restoration and painting is one of the most cost-effective ways to improve your home\'s appearance and extend roof life:\n\n• Standard concrete or metal tile roof: $4,000–$8,000\n• Large or steep-pitch roof: $8,000–$14,000\n\nThis includes cleaning, repairs, priming and two full coating coats. Roof restoration is typically 60–70% cheaper than full replacement.',
        ],
      },
      {
        heading: 'Why Prices Vary',
        body: [
          'The biggest variable is preparation. A home with peeling paint, rotten timber or failed plaster will require significantly more labour before a single coat of paint goes on. We always provide a fixed written quote after an on-site inspection so you know exactly what you are paying for.',
          'We use only premium paints from Resene, Dulux and Wattyl — no cheap alternatives that will fail in two years. Our 5-year workmanship guarantee means we stand behind every job.',
        ],
      },
    ],
    faq: [
      {
        question: 'Do you charge by the hour or by the job?',
        answer: 'We quote by the job, not by the hour. After an on-site inspection, we provide a fixed written quote that covers all labour, materials and preparation. The price we quote is the price you pay — no hidden extras.',
      },
      {
        question: 'Is scaffolding included in exterior painting quotes?',
        answer: 'For most two-storey homes, scaffolding is included in our exterior painting quotes. We use licensed scaffolding companies and factor this cost into our fixed price. You will never be surprised by an additional scaffolding bill.',
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'For larger projects, we can arrange staged payments — typically a deposit on booking, a progress payment at midpoint, and the balance on completion. We are happy to discuss what works for your situation.',
      },
    ],
  },
];
