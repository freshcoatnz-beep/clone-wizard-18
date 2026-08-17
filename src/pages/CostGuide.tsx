import { Helmet } from '@/lib/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QuoteForm } from '@/components/QuoteForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const costFaqs = [
  {
    question: 'What are painting rates per m2 in NZ?',
    answer:
      'Across New Zealand, typical 2026 painting rates are $35–$55 per m² for interior walls and ceilings, $45–$80 per m² for exterior cladding, and $25–$45 per m² for roof painting. Rates include preparation, primer where needed, and two top coats. Auckland and Wellington sit at the higher end; Christchurch and Canterbury are usually mid-range.',
  },
  {
    question: 'How much does it cost to paint a house in Christchurch?',
    answer:
      'In Christchurch, interior painting typically costs $35–$55 per square metre and exterior painting costs $45–$80 per square metre. A standard 3-bedroom home interior repaint usually runs $6,000–$12,000, and a full exterior repaint $8,000–$18,000 depending on size, surface condition, and access.',
  },
  {
    question: 'How much does it cost to paint one room?',
    answer:
      'A standard bedroom (around 12–15 m²) costs approximately $450–$900 to paint, including two coats and basic preparation. Larger living rooms range $900–$1,800. Bathrooms and kitchens cost slightly more due to moisture-resistant paints and detail work.',
  },
  {
    question: 'How much does roof painting cost?',
    answer:
      'Roof painting in Christchurch costs $25–$45 per square metre. A typical 150 m² roof costs $3,750–$6,750 including pressure washing, primer, and two top coats. Metal and tile roofs are priced similarly, but heavily rusted or moss-covered roofs require additional prep.',
  },
  {
    question: 'What factors affect painting costs?',
    answer:
      'The main cost drivers are: surface area (m²), surface condition (peeling, rust, mould add prep cost), access (two-storey or steep sites need scaffolding), paint quality (premium Resene/Dulux costs more but lasts longer), number of coats, and colour changes (dark over light needs extra coats).',
  },
  {
    question: 'Are quotes free?',
    answer:
      'Yes — Freshcoat Painting provides free, no-obligation written quotes for all painting work in Christchurch. We inspect the property, discuss your colour and finish preferences, and email a detailed line-itemised quote within 1–2 business days.',
  },
  {
    question: 'Do painters charge by the hour or by the job?',
    answer:
      'Most professional Christchurch painters, including Freshcoat, quote a fixed price per job based on square metres and scope. This protects you from surprise hourly charges. Hourly rates ($55–$85/hr) typically only apply to small touch-up jobs.',
  },
];

const costRows = [
  { job: 'Interior painting (per m² of wall/ceiling)', price: '$35 – $55 / m²' },
  { job: 'Exterior painting (per m² of cladding)', price: '$45 – $80 / m²' },
  { job: 'Roof painting (per m² of roof area)', price: '$25 – $45 / m²' },
  { job: 'Single bedroom (12–15 m²)', price: '$450 – $900' },
  { job: 'Living room / lounge (20–30 m²)', price: '$900 – $1,800' },
  { job: '3-bedroom home interior repaint', price: '$6,000 – $12,000' },
  { job: '4-bedroom home interior repaint', price: '$10,000 – $16,000' },
  { job: 'Exterior repaint — 3-bed weatherboard', price: '$8,000 – $14,000' },
  { job: 'Exterior repaint — 4-bed two-storey', price: '$14,000 – $22,000' },
  { job: 'Roof painting (150 m² metal/tile)', price: '$3,750 – $6,750' },
  { job: 'Fence painting (per linear metre)', price: '$25 – $45' },
];

const CostGuide = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: costFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.freshcoat.co.nz/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Painting Cost Guide',
        item: 'https://www.freshcoat.co.nz/painting-cost-guide',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Painting Cost Guide Christchurch 2026 — Interior, Exterior & Roof Prices',
    description:
      'How much does house painting cost in Christchurch? Detailed 2026 pricing for interior, exterior, and roof painting including per m² rates and full-home estimates.',
    author: { '@type': 'Organization', name: 'Freshcoat Painting' },
    publisher: {
      '@type': 'Organization',
      name: 'Freshcoat Painting',
      logo: { '@type': 'ImageObject', url: 'https://www.freshcoat.co.nz/og-image.jpg' },
    },
    datePublished: '2026-05-17',
    dateModified: '2026-05-17',
    mainEntityOfPage: 'https://www.freshcoat.co.nz/painting-cost-guide',
  };

  return (
    <>
      <Helmet>
        <title>Painting Rates Per m2 NZ 2026 | Christchurch Costs</title>
        <meta
          name="description"
          content="Painting rates per m2 NZ 2026: interior $35-$55, exterior $45-$80, roof $25-$45 per m2. Christchurch per-room prices. Free quote in 24 hours."
        />
        <link rel="canonical" href="https://www.freshcoat.co.nz/painting-cost-guide" />
        <meta property="og:title" content="Painting Rates Per m2 NZ 2026 | Christchurch Costs" />
        <meta property="og:description" content="NZ painting rates per m² for interior, exterior and roof painting, plus Christchurch per-room and whole-home costs." />
        <meta property="og:url" content="https://www.freshcoat.co.nz/painting-cost-guide" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="bg-brand-gray text-white py-16 lg:py-24">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <nav aria-label="Breadcrumb" className="text-sm text-gray-300 mb-4">
                <a href="/" className="hover:text-white">Home</a>
                <span className="mx-2">/</span>
                <span>Painting Cost Guide</span>
              </nav>
              <h1 className="text-3xl lg:text-5xl font-bold mb-6">
                Painting Rates Per m² in NZ — Christchurch Cost Guide (2026)
              </h1>
              <p className="text-lg lg:text-xl opacity-95 leading-relaxed mb-8">
                What are the painting rates per m2 in NZ? Interior painting runs $35–$55/m², exterior $45–$80/m², and roof painting $25–$45/m². Below are real 2026 Christchurch prices from a local painter with 30+ years of experience.
              </p>
              <QuoteForm>
                <Button variant="hero" size="lg" className="bg-green-600 hover:bg-green-700 text-white text-xl px-10 py-6 font-semibold">
                  Get FREE Quote
                </Button>
              </QuoteForm>
            </div>
          </section>

          {/* Quick answer */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <Card className="p-6 lg:p-8 border-l-4 border-l-green-600">
                <h2 className="text-2xl font-bold mb-3 text-brand-gray">Quick answer</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In Christchurch, expect to pay <strong className="text-brand-gray">$35–$55/m² for interior painting</strong>,{' '}
                  <strong className="text-brand-gray">$45–$80/m² for exterior painting</strong>, and{' '}
                  <strong className="text-brand-gray">$25–$45/m² for roof painting</strong>. A typical 3-bedroom home interior repaint costs $6,000–$12,000; a full exterior repaint costs $8,000–$18,000.
                </p>
              </Card>
            </div>
          </section>

          {/* Price table */}
          <section className="py-12 bg-secondary/5">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-brand-gray text-center">
                Painting Rates Per m² and Average Prices (2026)
              </h2>
              <div className="overflow-hidden rounded-lg shadow-medium bg-white">
                <table className="w-full">
                  <thead className="bg-brand-gray text-white">
                    <tr>
                      <th className="text-left px-6 py-4 text-lg">Job</th>
                      <th className="text-right px-6 py-4 text-lg">Typical price (NZD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costRows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 text-base text-brand-gray">{row.job}</td>
                        <td className="px-6 py-4 text-right text-base font-semibold text-brand-gray">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Prices are GST-inclusive estimates for jobs in the Christchurch / Canterbury region using premium paints. Final price depends on surface condition, access, and finish.
              </p>
            </div>
          </section>

          {/* What affects cost */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-brand-gray">
                What affects the cost of painting?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { t: 'Surface area', d: 'Painters quote per square metre, so larger rooms and homes cost more — but the per-m² rate often drops on bigger jobs.' },
                  { t: 'Surface condition', d: 'Peeling, flaking, rust, mould, or filling cracks all add prep hours. Sound surfaces are cheapest to repaint.' },
                  { t: 'Access & height', d: 'Two-storey homes, steep sites, or jobs needing scaffolding add 15–30% to exterior pricing.' },
                  { t: 'Paint quality', d: 'Premium Resene, Dulux, and Wattyl paints cost more but last 8–12 years versus 4–6 years for budget paints.' },
                  { t: 'Number of coats', d: 'Most jobs need two top coats. Dark colours over light (or vice versa) often need a third coat or tinted primer.' },
                  { t: 'Detail & trim', d: 'Lots of doors, window frames, mouldings, and feature walls add cutting-in time.' },
                ].map((item) => (
                  <Card key={item.t} className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-brand-gray">{item.t}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.d}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 bg-secondary/5">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-brand-gray text-center">
                Painting Cost FAQs
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {costFaqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold text-brand-gray">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-brand-gray text-white text-center">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get an exact price for your home</h2>
              <p className="text-lg mb-8 opacity-95">
                Every property is different. Book a free on-site quote — we'll measure, inspect, and email you a detailed itemised price within 1–2 business days.
              </p>
              <QuoteForm>
                <Button variant="hero" size="lg" className="bg-green-600 hover:bg-green-700 text-white text-xl px-10 py-6 font-semibold">
                  Get FREE Quote
                </Button>
              </QuoteForm>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CostGuide;