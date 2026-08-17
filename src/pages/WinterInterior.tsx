import { Helmet } from '@/lib/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QuoteForm } from '@/components/QuoteForm';
import { Check, Shield, Home, Palette } from '@/components/icons-lite';
import { Phone, Star, Award, MapPin } from 'lucide-react';
import { InView } from '@/components/InView';

const heroImage = '/interior-hero-room.webp';

const url = 'https://www.freshcoat.co.nz/winter-interior-painting-christchurch';
const title = 'Winter Interior Painters Christchurch | Freshcoat';
const description =
  'Winter is the best time to paint inside. Trusted Christchurch interior painters, low-VOC paints, fast bookings & 5-year guarantee. Get a free quote.';

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is winter a good time to paint the inside of my house in Christchurch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — winter is the best season for interior painting in Christchurch. Painters are more available, lead times are shorter, indoor temperatures are easy to control with heating, and modern low-VOC paints cure cleanly indoors. You also avoid the summer rush when exterior jobs dominate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will paint dry properly in cold Christchurch weather?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indoors, yes. We heat and ventilate the rooms we work in to keep them above 10°C — the minimum recommended by Resene and Dulux for water-based paints. Drying takes a little longer than summer, but the finish is just as good (often better, because dust is lower in winter).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to leave my house during winter interior painting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost never. We use low-odour, low-VOC paints from Resene, Dulux and Wattyl, work room by room and ventilate carefully so you can keep living at home throughout the project.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you start a winter interior repaint?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In winter we can usually start within 1–2 weeks of accepting a quote — much faster than the 4–8 week wait common in summer. Book early in the season to lock in your preferred dates.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a winter interior repaint cost in Christchurch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Interior painting in Christchurch typically runs $35–$55 per square metre of wall, or roughly $400–$800 per room. Freshcoat provides a free fixed written quote after an on-site visit — no surprises.',
      },
    },
  ],
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.freshcoat.co.nz/' },
    { '@type': 'ListItem', position: 2, name: 'Interior Painting', item: 'https://www.freshcoat.co.nz/interior' },
    { '@type': 'ListItem', position: 3, name: 'Winter Interior Painting', item: url },
  ],
};

const serviceData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Winter Interior Painting Christchurch',
  serviceType: 'Interior Painting',
  description,
  url,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Freshcoat Painting',
    areaServed: 'Christchurch',
    telephone: '+64-22-036-6586',
    email: 'michael@freshcoat.co.nz',
  },
  areaServed: [
    { '@type': 'City', name: 'Christchurch' },
    { '@type': 'AdministrativeArea', name: 'Canterbury' },
  ],
  offers: {
    '@type': 'Offer',
    priceCurrency: 'NZD',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'NZD',
      minPrice: 35,
      maxPrice: 55,
      unitText: 'per square metre',
    },
    availability: 'https://schema.org/InStock',
  },
};

const WinterInterior = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="winter interior painting christchurch, interior painters christchurch winter, indoor painting christchurch, winter house painting, interior repaint christchurch, off-season painters christchurch"
        />
        <link rel="canonical" href={url} />
        <link rel="preload" as="image" href={heroImage} fetchPriority="high" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section
            className="relative min-h-[540px] lg:min-h-[640px] bg-cover bg-center hero-curved"
            style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'center 70%' }}
          >
            <div className="absolute inset-0 bg-gradient-hero hero-curved" />
            <div className="relative container mx-auto px-4 py-16 lg:py-28 flex items-center min-h-[540px] lg:min-h-[640px]">
              <div className="max-w-4xl mx-auto text-center text-white">
                <span className="inline-block bg-brand-red px-4 py-1 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
                  Winter Special — Book Now
                </span>
                <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                  Winter Interior Painters Christchurch
                </h1>
                <p className="text-xl lg:text-2xl mb-8 opacity-95 leading-relaxed">
                  Winter is the perfect season to repaint inside — shorter wait times,
                  low-odour paints and a fresh, warm home ready for spring.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <QuoteForm>
                    <Button size="lg" className="text-xl px-12 py-6 font-semibold bg-green-600 hover:bg-green-700 text-white border-green-600">
                      Get FREE Quote
                    </Button>
                  </QuoteForm>
                  <a href="tel:+64220366586">
                    <Button size="lg" variant="outline" className="text-xl px-12 py-6 font-semibold bg-white text-brand-gray hover:bg-gray-100">
                      <Phone className="mr-2 w-5 h-5" /> 022 0366586
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Trust row — fast credibility for paid traffic */}
          <section className="bg-white border-b">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm md:text-base text-brand-gray">
                <span className="flex items-center gap-2 font-semibold">
                  <Award className="w-5 h-5 text-brand-red" /> 30+ Years Experience
                </span>
                <span className="flex items-center gap-2 font-semibold">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /> Qualified Painter &amp; Decorator
                </span>
                <span className="flex items-center gap-2 font-semibold">
                  <MapPin className="w-5 h-5 text-brand-red" /> Locally Owned — All Christchurch
                </span>
                <span className="hidden md:flex items-center gap-2 font-semibold">
                  <Check className="w-5 h-5 text-green-600" /> Free Fixed-Price Quotes
                </span>
              </div>
            </div>
          </section>

          {/* Why winter */}
          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray">
                  Why Paint Indoors This Winter?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Most homeowners wait until summer — which is exactly why winter is smarter.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Shorter wait times', desc: 'Start in 1–2 weeks instead of the 4–8 week summer queue. Painters are available, not booked solid.' },
                  { title: 'Easier on your schedule', desc: 'Less outdoor entertaining means less disruption — we work around your routine, room by room.' },
                  { title: 'Modern low-VOC paints', desc: 'Resene, Dulux and Wattyl water-based paints cure indoors at 10°C+ with minimal odour. You stay in the house.' },
                  { title: 'A fresh home for spring', desc: 'Walk into spring with a beautifully repainted interior — without losing summer weekends to drop sheets.' },
                  { title: 'Better dust control', desc: 'Closed windows and lower outdoor pollen mean a cleaner finish on walls, trim and ceilings.' },
                  { title: 'Lock in winter pricing', desc: 'Book before September and lock in current rates before the spring rush bumps lead times and demand.' },
                ].map((b) => (
                  <Card key={b.title} className="p-6 flex gap-4">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1 text-brand-gray">{b.title}</h3>
                      <p className="text-muted-foreground">{b.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* How we work in winter */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center text-brand-gray">
                How We Paint Indoors in Winter
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Shield, title: 'Heated & ventilated rooms', desc: 'We keep working rooms above 10°C and ventilate carefully so paint cures cleanly.' },
                  { icon: Palette, title: 'Low-odour premium paints', desc: 'Resene Zylone Sheen, Dulux Wash&Wear, Wattyl I.D. — all water-based, low-VOC.' },
                  { icon: Home, title: 'Live-in friendly', desc: 'Room-by-room scheduling, furniture protected, floors covered, tidy clean-up each evening.' },
                ].map((s) => (
                  <Card key={s.title} className="p-6 text-center">
                    <s.icon className="w-10 h-10 mx-auto mb-3 text-brand-red" />
                    <h3 className="font-bold text-lg mb-2 text-brand-gray">{s.title}</h3>
                    <p className="text-muted-foreground">{s.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <InView minHeight="600px">
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-brand-gray text-center">
                  Winter Interior Painting — FAQs
                </h2>
                <div className="space-y-6">
                  {faqData.mainEntity.map((item: any) => (
                    <div key={item.name} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 text-brand-gray">{item.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.acceptedAnswer.text}</p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-muted-foreground mt-8">
                  More on our main{' '}
                  <a href="/interior" className="text-brand-red font-semibold hover:underline">
                    interior painting page
                  </a>{' '}
                  or see our{' '}
                  <a href="/painting-cost-guide" className="text-brand-red font-semibold hover:underline">
                    painting cost guide
                  </a>
                  .
                </p>
              </div>
            </section>
          </InView>

          {/* CTA */}
          <section className="py-16 bg-brand-red text-white">
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Book Your Winter Interior Repaint
              </h2>
              <p className="text-lg mb-8 opacity-95">
                Free fixed-price quote, usually within 24 hours. 5-year workmanship guarantee on every job.
              </p>
              <QuoteForm>
                <Button size="lg" className="text-xl px-12 py-6 font-semibold bg-white text-brand-red hover:bg-gray-100">
                  Get FREE Quote
                </Button>
              </QuoteForm>
            </div>
          </section>
        </main>
        <InView minHeight="400px"><Footer /></InView>

        {/* Sticky mobile call/quote bar — high-converting for paid clicks */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg flex">
          <a
            href="tel:+64220366586"
            className="flex-1 flex items-center justify-center gap-2 py-3 font-semibold text-brand-gray bg-white"
          >
            <Phone className="w-5 h-5 text-brand-red" /> Call Now
          </a>
          <QuoteForm>
            <button className="flex-1 py-3 font-semibold text-white bg-brand-red">
              Get FREE Quote
            </button>
          </QuoteForm>
        </div>
        {/* Spacer so sticky bar doesn't cover footer content on mobile */}
        <div className="md:hidden h-14" aria-hidden="true" />
      </div>
    </>
  );
};

export default WinterInterior;