import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Building, Users, Award, CheckCircle, Star, Briefcase, Shield } from "lucide-react";
import guaranteeBadge from '@/assets/guarantee-badge.png';

const Commercial = () => {
  const services = [
    {
      title: "Office Buildings",
      description: "Professional painting services for office complexes and corporate buildings",
      features: ["Minimal disruption", "After-hours work", "Quality finishes", "Project management"]
    },
    {
      title: "Retail Spaces",
      description: "Specialized painting for shops, restaurants, and retail environments",
      features: ["Brand color matching", "Quick turnaround", "Durable finishes", "Schedule flexibility"]
    },
    {
      title: "Industrial Facilities",
      description: "Heavy-duty painting solutions for warehouses and manufacturing facilities",
      features: ["Industrial coatings", "Safety compliance", "Protective finishes", "Large-scale projects"]
    }
  ];

  const benefits = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Commercial Expertise",
      description: "Specialized experience in commercial painting with understanding of business needs."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Professional Team",
      description: "Trained commercial painters who work efficiently with minimal business disruption."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Project Management",
      description: "Comprehensive project management to ensure on-time, on-budget completion."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[450px] lg:min-h-[600px] bg-cover bg-center bg-no-repeat hero-curved" style={{ backgroundImage: 'url(/lovable-uploads/be3e0313-1934-48ae-9df1-636887be9531.png)' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero hero-curved"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-12 lg:py-32 flex items-end min-h-[400px] lg:min-h-[550px]">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
              Exterior Painting
              <br />
              Christchurch
            </h1>
            
            {/* Key points */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-10 text-lg lg:text-xl">
              <div className="flex items-center gap-2">
                <span>5 Year Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span>30 Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Professional Painters</span>
              </div>
            </div>
            
            <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
              Professional exterior painters for Christchurch homes with guaranteed quality & competitive rates.
            </p>
            
            <Button variant="hero" size="lg" className="text-xl px-12 py-6 font-semibold bg-blue-600 hover:bg-blue-700 text-white border-blue-600 mt-8">
              Get FREE Quote
            </Button>
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
      <section className="py-2 lg:py-4 bg-background">
        <div className="container mx-auto px-4 ml-64 mr-48">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
                Christchurch's Best Exterior Painting
              </h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Looking to refresh your home's exterior or boost its street appeal?
                <strong className="text-brand-gray"> Freshcoat Painting</strong> specialises in high-quality exterior painting across Christchurch.
              </p>
              <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                With over 30 years of experience, we deliver stunning, long-lasting finishes using premium paints and expert techniques – all backed by our 5-year workmanship guarantee.
              </p>
              <Button variant="cta" size="lg">
                Get FREE Quote
              </Button>
            </div>

            {/* Image */}
            <div className="flex justify-end">
              <div className="max-w-xs">
                <Card className="p-0 overflow-hidden shadow-medium">
                  <div className="aspect-[5/3] bg-secondary rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/be3e0313-1934-48ae-9df1-636887be9531.png" 
                      alt="Exterior Painting Example" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Home Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">Transform Your Home with Expert Exterior Painting Services</h2>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              A professionally painted exterior doesn't just look better – it protects your home from harsh Christchurch weather and increases its value.
              Whether you're preparing to sell or just want to modernise your façade, our team brings precision, care and a flawless finish to every job.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">Why Choose Freshcoat for Exterior Painting in Christchurch?</h2>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              We're not just painters – we're committed professionals who treat your home with the same care we'd give our own. From prep to final coat, we ensure every detail is handled right.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-brand-gray">Over 30 years of experience</h3>
                  <p className="text-muted-foreground">Decades of expertise in exterior painting across Christchurch.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-brand-gray">Fully insured and compliant</h3>
                  <p className="text-muted-foreground">Complete peace of mind with full insurance coverage.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-brand-gray">5-year workmanship warranty</h3>
                  <p className="text-muted-foreground">Comprehensive warranty on all exterior painting work.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-brand-gray">Trusted brands like Resene & Dulux</h3>
                  <p className="text-muted-foreground">Exclusive use of premium paint brands for lasting results.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-brand-gray">Reliable, clean and respectful teams</h3>
                  <p className="text-muted-foreground">Professional service with meticulous cleanup.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-brand-gray">Highly competitive rates</h3>
                  <p className="text-muted-foreground">Quality service at fair, transparent pricing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Exterior Painting Services */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray">Our Exterior Painting Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer full-service exterior painting for all property types across Christchurch. Whether you're repainting a weatherboard home, rendered façade or a multi-storey residence, we've got you covered.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-brand-gray">Full-Service Solutions for Every Surface</h3>
            <p className="text-lg mb-6 text-muted-foreground">Our experienced painters can transform the following:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Brickwork and render</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Weatherboard and timber cladding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Fascias, gutters and downpipes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Garage doors, fences & gates</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Eaves, verandahs, pergolas & decks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Exterior window frames and shutters</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Multi-dwelling properties</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Commercial buildings</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg mt-6 text-muted-foreground">
              For exterior surfaces, we use weatherproof, UV-resistant and anti-mould paints where needed to ensure long-lasting protection.
            </p>
          </div>
        </div>
      </section>

      {/* Our Exterior Painting Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray">What to Expect – Our Exterior Painting Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe a smooth process leads to a better finish. Here's how we make it easy:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-gray">Consultation & Quote</h3>
              <p className="text-muted-foreground">
                We start with a detailed site inspection to understand your goals, surface condition and project scope.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-gray">Surface Preparation</h3>
              <p className="text-muted-foreground">
                We clean, sand, fill and prime all surfaces, addressing flaking, cracks or water damage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-gray">Premium Painting</h3>
              <p className="text-muted-foreground">
                We apply high-quality paints ensuring a smooth, even finish that stands up to Christchurch weather.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-gray">Final Inspection</h3>
              <p className="text-muted-foreground">
                We walk you through the finished result and leave your property clean and tidy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Exterior Painting Matters */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">Why Exterior Painting Matters in Christchurch's Climate</h2>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              Christchurch's sun, wind and varying weather can be tough on paintwork. That's why quality products and proper preparation are vital to protect your home and extend the life of your exterior finish.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gray">Protect Your Home from Weather Damage</h3>
                <p className="text-lg mb-4 text-muted-foreground">Our professional exterior painting shields your surfaces from:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Sun damage and fading</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Mould and mildew</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Flaking, peeling and blistering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Cracks from temperature extremes</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gray">Enhance Street Appeal and Property Value</h3>
                <p className="text-lg text-muted-foreground">
                  A fresh coat of paint instantly updates your home's look and leaves a lasting impression – perfect whether you're staying long-term or planning to sell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Guarantee Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">Quality You Can See – Our Workmanship Guarantee</h2>
            <p className="text-lg mb-12 text-muted-foreground">
              We don't cut corners. Every exterior job we complete is backed by our workmanship and attention to detail.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-brand-gray">5-Year Workmanship Warranty</h3>
                <p className="text-muted-foreground">
                  Peace of mind knowing your investment is protected. If any issues arise due to our work, we'll make it right.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-brand-gray">Fully Insured & Compliant</h3>
                <p className="text-muted-foreground">
                  Your safety and ours come first. We follow strict safety protocols and carry full public liability insurance.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-brand-gray">Premium Paints from Resene & Dulux</h3>
                <p className="text-muted-foreground">
                  We use only the highest quality paints designed for New Zealand conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Home's Exterior?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation for your exterior painting project today
          </p>
          <Button variant="hero" size="lg" className="text-xl px-12 py-6 font-semibold bg-white hover:bg-gray-100 text-primary border-white">
            Get FREE Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Commercial;