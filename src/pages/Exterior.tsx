import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QuoteForm } from '@/components/QuoteForm';
import { Check, Palette, Home, Shield } from 'lucide-react';
import heroImage from '@/assets/exterior-hero-house.jpg';
import exteriorWelcomeImage from '@/assets/exterior-welcome-house.jpg';
import guaranteeBadge from '@/assets/guarantee-badge.png';

const Exterior = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Exterior Painting Services Christchurch",
    "description": "Professional exterior house painting in Christchurch. Weather-resistant coatings, expert preparation, 5-year warranty on all exterior work.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Freshcoat Painting",
      "areaServed": "Christchurch"
    },
    "serviceType": "Exterior Painting",
    "url": "https://freshcoatpainting.co.nz/exterior"
  };

  return (
    <>
      <Helmet>
        <title>Exterior Painting Christchurch | House Exterior Painters | Freshcoat</title>
        <meta name="description" content="Professional exterior painting in Christchurch. Weather-resistant coatings, expert surface preparation. 5-year guarantee. Free quotes available!" />
        <meta name="keywords" content="exterior painting christchurch, house exterior painting, weatherboard painting, exterior house painters" />
        <link rel="canonical" href="https://freshcoatpainting.co.nz/exterior" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
      
      {/* Hero Section - Same style as home page */}
      <section className="relative min-h-[540px] lg:min-h-[690px] bg-cover bg-center bg-no-repeat hero-curved" style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'center 25%' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero hero-curved"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-12 lg:py-32 flex items-end min-h-[490px] lg:min-h-[640px]">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
              Exterior Painting
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
              Transform your home's exterior with professional painting services. Quality finishes that protect and beautify.
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
            className="w-40 h-40"
          />
        </div>
      </div>

      {/* Welcome Section - Similar to home page */}
      <section className="py-2 lg:py-4 pb-4 bg-background">
        <div className="container mx-auto px-4 ml-64 mr-48">
          <div className="grid lg:grid-cols-2 gap-3 items-start">
            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
                Exterior Painting
              </h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Need expert exterior painters in Christchurch who deliver flawless results?
                <strong className="text-brand-gray"> Freshcoat Painting</strong> specializes in transforming homes with premium exterior painting services.
              </p>
              <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                From single walls to complete house exteriors, our skilled team ensures a hassle-free experience with a 5-year workmanship guarantee. We use only premium brands like <strong className="text-brand-gray">Resene, Dulux, and Wattyl</strong> for lasting, beautiful results.
              </p>
              <QuoteForm>
                <Button variant="cta" size="lg" className="bg-green-600 hover:bg-green-700">
                  Get FREE Quote
                </Button>
              </QuoteForm>
            </div>

            {/* Image */}
            <div className="flex justify-end">
              <div className="max-w-md w-full">
                <Card className="p-0 overflow-hidden shadow-medium">
                  <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden">
                    <img 
                      src={exteriorWelcomeImage} 
                      alt="Modern House Exterior" 
                      className="w-full h-full object-cover"
                    />
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray">Exterior Painting</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive exterior painting solutions for every surface of your home
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">House Painting</h3>
              <p className="text-muted-foreground">
                Professional painting for weatherboards, brick, and concrete with weather-resistant finishes.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Complete Exterior</h3>
              <p className="text-muted-foreground">
                Full exterior makeovers including walls, trim, and architectural features with coordinated colors.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Surface Prep</h3>
              <p className="text-muted-foreground">
                Thorough preparation including cleaning, scraping, and priming for weather protection and durability.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Similar to home page */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-brand-gray">Why Choose Freshcoat for Exterior Painting?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-brand-gray">30+ Years Experience</h3>
                  <p className="text-muted-foreground">Decades of expertise in exterior painting across Christchurch.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-brand-gray">5 Year Guarantee</h3>
                  <p className="text-muted-foreground">Comprehensive warranty on all exterior painting work.</p>
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
                  <p className="text-muted-foreground">Meticulous cleanup and protection of your property and surroundings.</p>
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

        </main>
        <Footer />
      </div>
    </>
  );

};

export default Exterior;