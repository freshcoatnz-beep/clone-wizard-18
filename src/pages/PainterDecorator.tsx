import { Helmet } from '@/lib/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QuoteForm } from '@/components/QuoteForm';
import { Check, Home, Shield, Palette } from '@/components/icons-lite';
import { InView } from '@/components/InView';
import { useDeferredMount } from '@/hooks/use-deferred-mount';

const heroImage = '/exterior-hero-house.webp';
const welcomeImage = '/exterior-welcome-house.webp';
const guaranteeBadge = '/guarantee-badge.webp';

const PainterDecorator = () => {
  const deferred = useDeferredMount();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Painter and Decorator Christchurch",
    "description": "Experienced painter and decorator in Christchurch. Interior and exterior painting and decorating, premium paints, 5-year workmanship guarantee. Free quotes.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Freshcoat Painting",
      "areaServed": "Christchurch"
    },
    "serviceType": "Painting and Decorating",
    "url": "https://www.freshcoat.co.nz/painter-and-decorator-christchurch",
    "areaServed": [
      { "@type": "City", "name": "Christchurch" },
      { "@type": "AdministrativeArea", "name": "Canterbury" }
    ]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.freshcoat.co.nz/" },
      { "@type": "ListItem", "position": 2, "name": "Painter and Decorator Christchurch", "item": "https://www.freshcoat.co.nz/painter-and-decorator-christchurch" }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What does a painter and decorator do?", "acceptedAnswer": { "@type": "Answer", "text": "A painter and decorator prepares surfaces, repairs minor damage, and applies paint, wallpaper or specialty finishes to walls, ceilings, trim and exteriors. At Freshcoat we handle the full process — colour consultation, prep, painting and a clean tidy finish — for homes across Christchurch." } },
      { "@type": "Question", "name": "How much does a painter and decorator cost in Christchurch?", "acceptedAnswer": { "@type": "Answer", "text": "Most Christchurch painting and decorating jobs land between $4,500 and $15,000 depending on size, condition and whether it's interior, exterior or both. Freshcoat provides a free fixed-price quote after an on-site visit." } },
      { "@type": "Question", "name": "Are your painters and decorators insured and guaranteed?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every Freshcoat job is backed by a 5-year workmanship guarantee and full public liability insurance, including height-safe cover for two-storey homes." } },
      { "@type": "Question", "name": "Do you offer colour and finish advice?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our painters and decorators can help you choose Resene, Dulux or Wattyl colours and finishes that suit your home, lighting and lifestyle — included free with every quote." } },
      { "@type": "Question", "name": "How long does a painting and decorating job take?", "acceptedAnswer": { "@type": "Answer", "text": "A typical 3–4 bedroom interior takes 5–10 working days. A full exterior repaint takes 1–3 weeks depending on cladding, prep and weather. Firm timelines are confirmed in your written quote." } }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Painter and Decorator Christchurch | 5 Year Guarantee | Freshcoat</title>
        <meta name="description" content="Experienced painter and decorator in Christchurch. Interior & exterior painting and decorating, premium Resene & Dulux paints, 5-year guarantee. Free quotes — 022 0366586." />
        <meta name="keywords" content="painter and decorator christchurch, painters and decorators christchurch, painter decorator christchurch, decorators christchurch, interior decorators christchurch" />
        <link rel="canonical" href="https://www.freshcoat.co.nz/painter-and-decorator-christchurch" />
        <link rel="preload" as="image" href={heroImage} fetchPriority="high" />
        <meta property="og:title" content="Painter and Decorator Christchurch | Freshcoat Painting" />
        <meta property="og:description" content="Trusted Christchurch painter and decorator. Interior & exterior, 5-year guarantee, free quotes." />
        <meta property="og:url" content="https://www.freshcoat.co.nz/painter-and-decorator-christchurch" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>

        {/* Hero */}
        <section className="relative min-h-[540px] lg:min-h-[690px] bg-cover bg-center bg-no-repeat hero-curved" style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'center 25%' }}>
          <div className="absolute inset-0 bg-gradient-hero hero-curved"></div>
          <div className="relative container mx-auto px-4 py-12 lg:py-32 flex items-end min-h-[490px] lg:min-h-[640px]">
            <div className="max-w-5xl mx-auto text-center text-white">
              <h1 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
                Painter and Decorator Christchurch
              </h1>
              <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-10 text-lg lg:text-xl">
                <div className="flex items-center gap-2"><span>5 Year Guarantee</span></div>
                <div className="flex items-center gap-2"><span>Interior & Exterior</span></div>
                <div className="flex items-center gap-2"><span>30+ Years Experience</span></div>
              </div>
              <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
                Experienced painter and decorator services across Christchurch — beautiful interior and exterior finishes, expert colour advice, and a 5-year workmanship guarantee on every job.
              </p>
              <QuoteForm>
                <Button variant="hero" size="lg" className="text-xl px-12 py-6 font-semibold bg-green-600 hover:bg-green-700 text-white border-green-600 mt-8">
                  Get FREE Quote
                </Button>
              </QuoteForm>
            </div>
          </div>
        </section>

        <div className="relative bg-background">
          <div className="absolute -top-20 left-0 hidden lg:block z-10">
            <img src={guaranteeBadge} alt="5 Year Guarantee" className="w-40 h-40" loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Welcome */}
        <section className="py-2 lg:py-4 pb-4 bg-background">
          <div className="container mx-auto px-4 ml-64 mr-48">
            <div className="grid lg:grid-cols-2 gap-3 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
                  Christchurch's Trusted Painter and Decorator
                </h2>
                <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                  Looking for an experienced <strong className="text-brand-gray">painter and decorator in Christchurch</strong>? Freshcoat Painting has been transforming Canterbury homes for over 30 years — combining flawless preparation, premium paints and a friendly, tidy approach.
                </p>
                <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                  Whether it's a single feature wall, a full interior repaint or an exterior refresh, our painters and decorators deliver a stress-free experience using <strong className="text-brand-gray">Resene, Dulux and Wattyl</strong> products — all backed by a 5-year guarantee.
                </p>
                <QuoteForm>
                  <Button variant="cta" size="lg" className="bg-green-600 hover:bg-green-700">Get FREE Quote</Button>
                </QuoteForm>
              </div>
              <div className="flex justify-end">
                <div className="max-w-md w-full">
                  <Card className="p-0 overflow-hidden shadow-medium">
                    <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden">
                      <img src={welcomeImage} alt="Painter and decorator Christchurch" className="w-full h-full object-cover" />
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {deferred && (<>
        {/* Services Overview */}
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray">Our Painting and Decorating Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Full-service painters and decorators — inside, outside and everything in between.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Home className="w-8 h-8 text-primary" /></div>
                <h3 className="text-xl font-semibold mb-3">Interior Decorating</h3>
                <p className="text-muted-foreground">Walls, ceilings, trim, doors and feature spaces — low-VOC paints, expert colour advice and a tidy finish.</p>
                <a href="/interior" className="inline-block mt-4 text-brand-red font-semibold hover:underline">Interior painters Christchurch →</a>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Palette className="w-8 h-8 text-primary" /></div>
                <h3 className="text-xl font-semibold mb-3">Exterior Painting</h3>
                <p className="text-muted-foreground">Weatherboard, brick, plaster and trim with weather-resistant coatings built for the Christchurch climate.</p>
                <a href="/exterior" className="inline-block mt-4 text-brand-red font-semibold hover:underline">Exterior painters Christchurch →</a>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Shield className="w-8 h-8 text-primary" /></div>
                <h3 className="text-xl font-semibold mb-3">Roof Painting</h3>
                <p className="text-muted-foreground">Long-life roof coatings for metal and tile roofs that protect your home from UV, rust and weather.</p>
                <a href="/roof-painting" className="inline-block mt-4 text-brand-red font-semibold hover:underline">Roof painting Christchurch →</a>
              </Card>
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-brand-gray">Why Choose Freshcoat Painters and Decorators?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-3"><Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" /><div><h3 className="font-semibold mb-1 text-brand-gray">30+ Years Decorating Christchurch Homes</h3><p className="text-muted-foreground">Three decades of painting and decorating across every Christchurch suburb.</p></div></div>
                <div className="flex items-start gap-3"><Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" /><div><h3 className="font-semibold mb-1 text-brand-gray">5 Year Workmanship Guarantee</h3><p className="text-muted-foreground">Written warranty on every interior and exterior painting job.</p></div></div>
                <div className="flex items-start gap-3"><Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" /><div><h3 className="font-semibold mb-1 text-brand-gray">Premium Paints Only</h3><p className="text-muted-foreground">Resene, Dulux and Wattyl — the products that last in our climate.</p></div></div>
                <div className="flex items-start gap-3"><Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" /><div><h3 className="font-semibold mb-1 text-brand-gray">Fully Insured</h3><p className="text-muted-foreground">Public liability cover and height-safe certified for two-storey homes.</p></div></div>
                <div className="flex items-start gap-3"><Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" /><div><h3 className="font-semibold mb-1 text-brand-gray">Clean, Tidy, Respectful</h3><p className="text-muted-foreground">Furniture protected, floors covered, daily clean-up — we treat your home like our own.</p></div></div>
                <div className="flex items-start gap-3"><Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" /><div><h3 className="font-semibold mb-1 text-brand-gray">Free Fixed Quotes</h3><p className="text-muted-foreground">On-site visit, written quote, no obligation — and the price quoted is the price you pay.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <InView minHeight="800px"><section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-brand-gray text-center">Painter and Decorator Christchurch — FAQs</h2>
            <div className="space-y-6">
              {faqData.mainEntity.map((item: any) => (
                <div key={item.name} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-brand-gray">{item.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section></InView>
        </>)}

        </main>
        <InView minHeight="400px"><Footer /></InView>
      </div>
    </>
  );
};

export default PainterDecorator;