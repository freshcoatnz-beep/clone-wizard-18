import { Helmet } from '@/lib/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QuoteForm } from '@/components/QuoteForm';
import { Check, Shield, Home, Palette } from '@/components/icons-lite';
import { Phone } from 'lucide-react';
import { InView } from '@/components/InView';

const heroImage = '/interior-hero-room.webp';

const url = 'https://www.freshcoat.co.nz/new-home-painting-christchurch';
const title = 'New Home Painter Christchurch | New Build Painting';
const description =
  'New home painter in Christchurch — new build interior & exterior painting for builders and homeowners. Qualified, insured, free fixed quotes. Call 022 0366586.';

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you paint new builds in Christchurch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Freshcoat Painting regularly paints new homes across Christchurch and Canterbury, working directly with builders, project managers and homeowners. We handle the full pre-paint programme — gib stopping checks, sealing, priming and finish coats — plus exterior cladding, soffits, trim and joinery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to paint a new home in Christchurch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New build painting in Christchurch is usually quoted per square metre of floor area or as a fixed contract price. As a guide, interior work runs $35–$55 per square metre of wall and exterior work $45–$80 per square metre. We provide a free fixed written quote from your plans or an on-site visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you work to a builder\u2019s programme and deadlines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We schedule around the other trades and hit pre-agreed dates for sealing, undercoats and final coats so handover is not delayed. Michael manages every job personally, so builders deal with one point of contact from start to finish.',
      },
    },
    {
      '@type': 'Question',
      name: 'What paint systems do you use on new homes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We spray and roll premium Resene, Dulux and Wattyl systems specified for new construction — sealers over fresh plasterboard, washable low-sheen interiors, enamel or waterborne enamel on trim and joinery, and UV-stable exterior coatings suited to Canterbury conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer a warranty on new build painting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. New home painting is covered by our 5-year workmanship guarantee, and we are fully insured with public liability cover for work on active building sites.',
      },
    },
  ],
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.freshcoat.co.nz/' },
    { '@type': 'ListItem', position: 2, name: 'New Home Painting Christchurch', item: url },
  ],
};

const serviceData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'New Home Painting Christchurch',
  serviceType: 'New Build House Painting',
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
};

const NewHomePainting = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="new home painter christchurch, new build painters christchurch, new home painting christchurch, new build painting, painters for builders christchurch, residential painter christchurch, new house painting canterbury"
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
            className="relative min-h-[480px] lg:min-h-[600px] bg-cover bg-center hero-curved"
            style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'center 70%' }}
          >
            <div className="absolute inset-0 bg-gradient-hero hero-curved" />
            <div className="relative container mx-auto px-4 py-14 lg:py-28 flex items-center min-h-[480px] lg:min-h-[600px]">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                  New Home Painter Christchurch
                </h1>
                <p className="text-lg lg:text-2xl mb-8 opacity-95 leading-relaxed">
                  New build interior and exterior painting for Christchurch builders and
                  homeowners — on programme, on budget, and finished to handover standard.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <QuoteForm>
                    <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white border-green-600">
                      Get FREE Quote
                    </Button>
                  </QuoteForm>
                  <a href="tel:+64220366586">
                    <Button size="lg" className="px-6 py-4 text-base font-semibold bg-green-600 hover:bg-green-700 text-white border-green-600">
                      <Phone className="mr-2 w-5 h-5" /> Call Michael
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Intro */}
          <section className="py-14 lg:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
                New Build Painting Across Christchurch &amp; Canterbury
              </h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Freshcoat Painting is a qualified painter and decorator with 30+ years' experience
                painting new homes across Christchurch — from single-level builds in Rolleston and
                Lincoln to architectural homes in Fendalton and Cashmere.
              </p>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                We work directly with builders and with homeowners running their own build. Every
                job is managed by Michael personally, so you get one point of contact, a clear
                programme of works and a fixed price agreed before we start.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Already living in your home? See our{' '}
                <a href="/interior" className="text-brand-blue font-semibold hover:underline">interior painting</a>,{' '}
                <a href="/exterior" className="text-brand-blue font-semibold hover:underline">exterior painting</a> and{' '}
                <a href="/roof-painting" className="text-brand-blue font-semibold hover:underline">roof painting</a> services.
              </p>
            </div>
          </section>

          {/* What's included */}
          <section className="py-14 bg-secondary/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center text-brand-gray">
                What's Included in a New Home Paint
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Home, title: 'Interior finishing', desc: 'Sealer over fresh plasterboard, two finish coats to walls and ceilings, plus enamel to trim, doors and joinery.' },
                  { icon: Palette, title: 'Exterior coatings', desc: 'Weatherboard, plaster, brick, soffits, fascia and garage doors in UV-stable systems built for Canterbury.' },
                  { icon: Shield, title: 'Site-ready crew', desc: 'Fully insured, tidy, and scheduled around other trades so your handover date never slips.' },
                ].map((s) => (
                  <Card key={s.title} className="p-6 text-center">
                    <s.icon className="w-10 h-10 mx-auto mb-3 text-brand-blue" />
                    <h3 className="font-bold text-lg mb-2 text-brand-gray">{s.title}</h3>
                    <p className="text-muted-foreground">{s.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why builders choose us */}
          <section className="py-14 lg:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center text-brand-gray">
                Why Builders &amp; Homeowners Choose Freshcoat
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Qualified painter and decorator', desc: '30 years in the trade, including spray finishing, wall coverings and specialist coatings.' },
                  { title: 'Fixed price from your plans', desc: 'Send through plans or book a site visit — you get a written fixed quote, not an hourly estimate.' },
                  { title: 'Premium paint systems only', desc: 'Resene, Dulux and Wattyl products specified correctly for new construction surfaces.' },
                  { title: '5-year workmanship guarantee', desc: 'Written guarantee on every new home we paint, plus full public liability insurance.' },
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
              <p className="text-center text-muted-foreground mt-8">
                See a recent example:{' '}
                <a href="/projects/new-build-painting-rolleston" className="text-brand-blue font-semibold hover:underline">
                  new-build painting in Rolleston
                </a>
                .
              </p>
            </div>
          </section>

          {/* FAQ */}
          <InView minHeight="600px">
            <section className="py-14 bg-white">
              <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-brand-gray text-center">
                  New Home Painting — FAQs
                </h2>
                <div className="space-y-6">
                  {faqData.mainEntity.map((item: any) => (
                    <div key={item.name} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-3 text-brand-gray">{item.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.acceptedAnswer.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </InView>

          {/* CTA */}
          <section className="py-14 bg-brand-blue text-white">
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Painting a New Home in Christchurch?
              </h2>
              <p className="text-lg mb-8 opacity-95">
                Free fixed-price quote, usually within 24 hours. Plans welcome.
              </p>
              <QuoteForm>
                <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-white text-brand-blue hover:bg-gray-100">
                  Get FREE Quote
                </Button>
              </QuoteForm>
            </div>
          </section>
        </main>
        <InView minHeight="400px"><Footer /></InView>
      </div>
    </>
  );
};

export default NewHomePainting;
