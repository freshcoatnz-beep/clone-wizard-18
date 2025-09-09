import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Palette, Home, Shield } from 'lucide-react';

const Interior = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Interior Painting Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your home's interior with our professional painting services. From single rooms to whole house makeovers, we deliver exceptional quality and lasting beauty.
            </p>
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Get Free Interior Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Room Painting</h3>
              <p className="text-muted-foreground">
                Professional painting for bedrooms, living rooms, kitchens, and bathrooms with premium finishes.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Whole House</h3>
              <p className="text-muted-foreground">
                Complete interior makeovers with consistent color schemes and professional coordination.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
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

      {/* Process Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Interior Painting Process</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consultation & Color Selection</h3>
                  <p className="text-muted-foreground">
                    We meet with you to understand your vision, assess the space, and help you choose the perfect colors and finishes.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Surface Preparation</h3>
                  <p className="text-muted-foreground">
                    Professional preparation including cleaning, filling holes, sanding, and applying primer for optimal paint adhesion.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Painting</h3>
                  <p className="text-muted-foreground">
                    Application of premium paints using proper techniques for smooth, even coverage and professional results.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Inspection</h3>
                  <p className="text-muted-foreground">
                    Final walkthrough to ensure every detail meets our high standards and your expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Freshcoat for Interior Painting?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">30+ Years Experience</h3>
                  <p className="text-muted-foreground">Decades of expertise in interior painting across Christchurch.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">5 Year Guarantee</h3>
                  <p className="text-muted-foreground">Comprehensive warranty on all interior painting work.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Premium Paints</h3>
                  <p className="text-muted-foreground">Exclusive use of Resene, Dulux, and Wattyl premium paints.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Fully Insured</h3>
                  <p className="text-muted-foreground">Complete peace of mind with full insurance coverage.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Clean & Tidy</h3>
                  <p className="text-muted-foreground">Meticulous cleanup and protection of your furniture and floors.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Free Quotes</h3>
                  <p className="text-muted-foreground">No-obligation assessments and competitive pricing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Interior?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's bring your interior design vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Call 022 0366586
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Interior;