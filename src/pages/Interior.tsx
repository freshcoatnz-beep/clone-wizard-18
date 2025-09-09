import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Palette, Home, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-house-no-car.jpg';
import guaranteeBadge from '@/assets/guarantee-badge.png';

const Interior = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Same style as home page */}
      <section className="relative min-h-[450px] lg:min-h-[600px] bg-cover bg-center bg-no-repeat hero-curved" style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'center 70%' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero hero-curved"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-12 lg:py-18">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
              Interior Painting Services
              <br />
              Professional Indoor Painting
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
            
            <Button variant="hero" size="lg" className="text-xl px-12 py-6 font-semibold bg-blue-600 hover:bg-blue-700 text-white border-blue-600 mt-8">
              Get FREE Interior Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Guarantee badge - Outside hero section */}
      <div className="relative bg-background">
        <div className="absolute -top-8 left-0 hidden lg:block z-10">
          <img 
            src={guaranteeBadge} 
            alt="5 Year Guarantee" 
            className="w-40 h-40"
          />
        </div>
      </div>

      {/* Welcome Section - Similar to home page */}
      <section className="py-2 lg:py-4 bg-background">
        <div className="container mx-auto px-4 ml-64 mr-48">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
                Professional Interior Painting
              </h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Need expert interior painters in Christchurch who deliver flawless results?
                <strong className="text-brand-gray"> Freshcoat Painting</strong> specializes in transforming homes with premium interior painting services.
              </p>
              <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                From single rooms to whole house makeovers, our skilled team ensures a hassle-free experience with a 5-year workmanship guarantee. We use only premium brands like <strong className="text-brand-gray">Resene, Dulux, and Wattyl</strong> for lasting, beautiful results.
              </p>
              <Button variant="cta" size="lg">
                Get your free interior quote today
              </Button>
            </div>

            {/* Image */}
            <div className="flex justify-end">
              <div className="w-1/6">
                <Card className="p-0 overflow-hidden shadow-medium">
                  <div className="aspect-[5/3] bg-secondary rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/be3e0313-1934-48ae-9df1-636887be9531.png" 
                      alt="Interior Painting Example" 
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray">Interior Painting Services</h2>
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

      <Footer />
    </div>
  );
};

export default Interior;