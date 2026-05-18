import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QuoteForm } from '@/components/QuoteForm';
import { Check, Palette, Home, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-house-no-car.webp';
import interiorHeroImage from '@/assets/interior-hero-room.webp';
import interiorWelcomeImage from '@/assets/interior-welcome-room.webp';
import guaranteeBadge from '@/assets/guarantee-badge.webp';

const Interior = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Interior Painting Services Christchurch",
    "description": "Professional interior painting services for homes and businesses in Christchurch. Expert painters with 5-year guarantee on all work.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Freshcoat Painting",
      "areaServed": "Christchurch"
    },
    "serviceType": "Interior Painting",
    "url": "https://www.freshcoat.co.nz/interior",
    "areaServed": [
      { "@type": "City", "name": "Christchurch" },
      { "@type": "AdministrativeArea", "name": "Canterbury" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "NZD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "NZD",
        "minPrice": 35,
        "maxPrice": 55,
        "unitText": "per square metre"
      },
      "availability": "https://schema.org/InStock"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Interior Painting Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Room Painting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Whole House Interior Repaint" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Surface Preparation & Priming" } }
      ]
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.freshcoat.co.nz/" },
      { "@type": "ListItem", "position": 2, "name": "Interior Painting", "item": "https://www.freshcoat.co.nz/interior" }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does interior painting cost in Christchurch?", "acceptedAnswer": { "@type": "Answer", "text": "Interior painting in Christchurch typically ranges from $35–$55 per square metre of wall area, or roughly $400–$800 per room depending on size, ceiling height, surface condition and number of colours. Freshcoat provides a free, fixed written quote after an on-site inspection." } },
      { "@type": "Question", "name": "How long does it take to paint the inside of a house?", "acceptedAnswer": { "@type": "Answer", "text": "A single room takes 1–2 days, while a full 3-bedroom Christchurch home usually takes 5–10 working days including prep, two coats and trim. We give a clear day-by-day schedule with every quote." } },
      { "@type": "Question", "name": "Do I need to move out during interior painting?", "acceptedAnswer": { "@type": "Answer", "text": "Almost never. We use low-VOC paints, work room by room, and protect your furniture and floors with drop sheets and plastic so you can keep living in the home throughout the project." } },
      { "@type": "Question", "name": "What paint brands do you use?", "acceptedAnswer": { "@type": "Answer", "text": "We use premium interior paints from Resene, Dulux and Wattyl, chosen for durability, washability and low odour. We're happy to colour-match any brand you prefer." } },
      { "@type": "Question", "name": "Is your interior painting guaranteed?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every interior job from Freshcoat is backed by a 5-year workmanship guarantee, and we're fully insured for your peace of mind." } }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Interior Painting Christchurch | Freshcoat Painting</title>
        <meta name="description" content="Expert interior painting in Christchurch. Transform your home with professional painters. Premium paints, 5-year guarantee. Get your free quote today!" />
        <meta name="keywords" content="interior painting christchurch, house painting, room painting, wall painting, residential painting" />
        <link rel="canonical" href="https://www.freshcoat.co.nz/interior" />
        <meta property="og:title" content="Interior Painting Christchurch | Freshcoat Painting" />
        <meta property="og:description" content="Expert interior painting in Christchurch. Premium paints, 5-year guarantee. Free quotes today." />
        <meta property="og:url" content="https://www.freshcoat.co.nz/interior" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
      
      {/* Hero Section - Same style as home page */}
      <section className="relative min-h-[540px] lg:min-h-[690px] bg-cover bg-center bg-no-repeat hero-curved" style={{ backgroundImage: `url(${interiorHeroImage})`, backgroundPosition: 'center 70%' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero hero-curved"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-12 lg:py-32 flex items-end min-h-[490px] lg:min-h-[640px]">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
              Interior Painting
            </h1>
            
            {/* Key points */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-10 text-lg lg:text-xl">
              <div className="flex items-center gap-2">
                <span>5 Year Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Premium Paints</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Expert Painters</span>
              </div>
            </div>
            
            <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
              Transform your home's interior with professional painting services. Quality finishes for every room.
            </p>
            
            <QuoteForm>
              <Button variant="hero" size="lg" className="text-xl px-12 py-6 font-semibold bg-green-600 hover:bg-green-700 text-white border-green-600 mt-8">
                Get FREE Quote
              </Button>
            </QuoteForm>
          </div>
        </div>
      </section>

      {/* Guarantee badge - Outside hero section */}
      <div className="relative bg-background">
        <div className="absolute -top-20 left-0 hidden lg:block z-10">
          <img 
            src={guaranteeBadge} 
            alt="5 Year Guarantee" 
            className="w-40 h-40" loading="lazy" decoding="async" />
        </div>
      </div>

      {/* Welcome Section - Similar to home page */}
      <section className="py-2 lg:py-4 bg-background">
        <div className="container px-4 ml-64 mr-48">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
                Interior Painting
              </h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Need expert interior painters in Christchurch who deliver flawless results?
                <strong className="text-brand-gray"> Freshcoat Painting</strong> specializes in transforming homes with premium interior painting services.
              </p>
              <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                From single rooms to whole house makeovers, our skilled team ensures a hassle-free experience with a 5-year workmanship guarantee. We use only premium brands like <strong className="text-brand-gray">Resene, Dulux, and Wattyl</strong> for lasting, beautiful results.
              </p>
              <QuoteForm>
                <Button variant="cta" size="lg" className="bg-green-600 hover:bg-green-700">
                  Get FREE Quote
                </Button>
              </QuoteForm>
            </div>

            {/* Image */}
            <div className="flex justify-end">
              <div className="max-w-xl w-full">
                <Card className="p-0 overflow-hidden shadow-medium">
                  <div className="aspect-[5/3] bg-secondary rounded-lg overflow-hidden">
                    <img 
                      src={interiorWelcomeImage} 
                      alt="Modern Interior Design" 
                      className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray">Interior Painting</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive interior painting solutions for every room in your home
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Room Painting</h3>
              <p className="text-muted-foreground">
                Professional painting for bedrooms, living rooms, kitchens, and bathrooms with premium finishes.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Whole House</h3>
              <p className="text-muted-foreground">
                Complete interior makeovers with consistent color schemes and professional coordination.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Surface Prep</h3>
              <p className="text-muted-foreground">
                Thorough preparation including filling, sanding, and priming for long-lasting results.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Similar to home page */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-brand-gray">Why Choose Freshcoat for Interior Painting?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-brand-gray">30+ Years Experience</h3>
                  <p className="text-muted-foreground">Decades of expertise in interior painting across Christchurch.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-brand-gray">5 Year Guarantee</h3>
                  <p className="text-muted-foreground">Comprehensive warranty on all interior painting work.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-brand-gray">Premium Paints</h3>
                  <p className="text-muted-foreground">Exclusive use of Resene, Dulux, and Wattyl premium paints.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-brand-gray">Fully Insured</h3>
                  <p className="text-muted-foreground">Complete peace of mind with full insurance coverage.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-brand-gray">Clean & Tidy</h3>
                  <p className="text-muted-foreground">Meticulous cleanup and protection of your furniture and floors.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-brand-gray">Free Quotes</h3>
                  <p className="text-muted-foreground">No-obligation assessments and competitive pricing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-brand-gray text-center">Interior Painting Christchurch — FAQs</h2>
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

        </main>
        <Footer />
      </div>
    </>
  );
};

export default Interior;