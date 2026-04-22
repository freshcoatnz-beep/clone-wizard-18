import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Testimonials } from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QuoteForm } from '@/components/QuoteForm';
import { Check, Phone, Shield, Award, Home } from 'lucide-react';
import { suburbs } from '@/data/suburbs';

const SuburbPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const suburb = suburbs.find((s) => s.slug === slug);

  if (!suburb) return <Navigate to="/" replace />;

  const url = `https://www.freshcoat.co.nz/painters/${suburb.slug}`;
  const title = `Painters ${suburb.name} | House Painting ${suburb.name} Christchurch`;
  const description = `Trusted painters in ${suburb.name}, Christchurch. Interior, exterior & roof painting with a 5-year guarantee. Free quotes from Freshcoat Painting.`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Freshcoat Painting — ${suburb.name}`,
    description,
    url,
    telephone: '+64-22-036-6586',
    email: 'michael@freshcoat.co.nz',
    address: {
      '@type': 'PostalAddress',
      addressLocality: suburb.name,
      addressRegion: 'Canterbury',
      addressCountry: 'NZ',
    },
    areaServed: { '@type': 'Place', name: `${suburb.name}, Christchurch` },
    priceRange: '$$',
    serviceType: ['Interior Painting', 'Exterior Painting', 'Roof Painting'],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={`painters ${suburb.name.toLowerCase()}, house painting ${suburb.name.toLowerCase()}, ${suburb.name.toLowerCase()} painters, exterior painting ${suburb.name.toLowerCase()}, interior painting ${suburb.name.toLowerCase()}`}
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="bg-gradient-hero text-white py-16 lg:py-24">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl lg:text-5xl font-bold mb-6">
                Painters {suburb.name}
                <br />
                <span className="text-2xl lg:text-3xl font-medium opacity-95">
                  Interior, Exterior & Roof Painting
                </span>
              </h1>
              <p className="text-lg lg:text-xl max-w-3xl mx-auto mb-8 opacity-95">
                {suburb.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <QuoteForm>
                  <Button
                    size="lg"
                    className="text-xl px-12 py-6 font-semibold bg-green-600 hover:bg-green-700 text-white border-green-600"
                  >
                    Get FREE Quote
                  </Button>
                </QuoteForm>
                <a href="tel:+6422036658">
                  <Button size="lg" variant="outline" className="text-xl px-12 py-6 font-semibold bg-white text-brand-gray hover:bg-gray-100">
                    <Phone className="mr-2" /> 022 0366586
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* Why us in this suburb */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray">
                  Why {suburb.name} Chooses Freshcoat
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Local Christchurch painters delivering quality, reliability and value across {suburb.name}.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {suburb.highlights.map((h) => (
                  <Card key={h} className="p-6 text-center">
                    <Check className="w-10 h-10 text-green-600 mx-auto mb-3" />
                    <p className="font-medium text-brand-gray">{h}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Services in this suburb */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center text-brand-gray">
                Painting Services in {suburb.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Home, title: 'Interior Painting', href: '/interior', desc: `Refresh any room in your ${suburb.name} home with professional interior painting.` },
                  { icon: Shield, title: 'Exterior Painting', href: '/exterior', desc: `Weather-tough exterior coatings to protect your ${suburb.name} property.` },
                  { icon: Award, title: 'Roof Painting', href: '/roof-painting', desc: `Restore and protect your roof — metal or tile — across ${suburb.name}.` },
                  { icon: Check, title: 'Commercial', href: '/commercial', desc: `Office, retail and commercial painting for ${suburb.name} businesses.` },
                ].map((s) => (
                  <a key={s.title} href={s.href}>
                    <Card className="p-6 h-full hover:shadow-medium transition-shadow text-center">
                      <s.icon className="w-12 h-12 mx-auto mb-3 text-brand-red" />
                      <h3 className="font-bold text-lg mb-2 text-brand-gray">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <Testimonials />

          {/* Final CTA */}
          <section className="py-16 bg-brand-red text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready for a Free Quote in {suburb.name}?
              </h2>
              <p className="text-lg mb-8 opacity-95">
                Get in touch today — we usually respond within 24 hours.
              </p>
              <QuoteForm>
                <Button size="lg" className="text-xl px-12 py-6 font-semibold bg-white text-brand-red hover:bg-gray-100">
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

export default SuburbPage;
