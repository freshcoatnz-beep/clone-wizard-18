import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import guaranteeBadge from '@/assets/guarantee-badge.png';

const Commercial = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - matches your current hero */}
      <section className="relative min-h-[450px] lg:min-h-[600px] bg-cover bg-center bg-no-repeat hero-curved" style={{ backgroundImage: 'url(/lovable-uploads/be3e0313-1934-48ae-9df1-636887be9531.png)' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero hero-curved"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-12 lg:py-32 flex items-end min-h-[400px] lg:min-h-[550px]">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
              Exterior Painting
            </h1>
            
            {/* Key points */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-10 text-lg lg:text-xl">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Professional Painters</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>30+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>5 Year Warranty</span>
              </div>
            </div>
            
            <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
              Professional exterior painters for Christchurch homes with guaranteed quality & competitive rates.
            </p>
            
            <Button variant="hero" size="lg" className="text-xl px-12 py-6 font-semibold bg-red-600 hover:bg-red-700 text-white border-red-600 mt-8">
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

      {/* Main Content Section - matches Advanced Painting layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div>
              <img 
                src="/lovable-uploads/be3e0313-1934-48ae-9df1-636887be9531.png" 
                alt="Front of the house showing a perfectly painted exterior" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
                Christchurch's Best Exterior Painting
              </h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Looking to refresh your home's exterior or boost its street appeal? Freshcoat Painting specialises in high-quality exterior painting across Christchurch.
              </p>
              <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                With over 30 years of experience, we deliver stunning, long-lasting finishes using premium paints and expert techniques – all backed by our 5-year workmanship guarantee.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-brand-gray">We are painting experts:</h3>
              <ul className="space-y-2 mb-8">
                <li className="text-lg">
                  <a href="/exterior" className="text-primary hover:underline">• Exterior House Painting</a>
                </li>
                <li className="text-lg">
                  <a href="/roof-painting" className="text-primary hover:underline">• Roof Painting</a>
                </li>
                <li className="text-lg">
                  <a href="/maintenance-painting" className="text-primary hover:underline">• Maintenance Painting</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-brand-gray">
            Feedback From Our Customers
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-600">J</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-gray">J</h4>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Fantastic work from the team, they completed the full exterior house paint within the estimated timescale and the new paint scheme is wonderful. Professional and reliable service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-600">N</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-gray">Ness Ethero</h4>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                The team from Freshcoat Painting were extremely friendly and accommodating. Their attention to detail was exceptional and I couldn't recommend them more highly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-600">R</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-gray">Rohan Sharma</h4>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Excellent job on our property. They arrived on time each day and completed the job in the timeframe promised. The team worked hard and delivered quality results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Home Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray text-center">
              Transform Your Home with Expert Exterior Painting Services
            </h2>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed text-center">
              A professionally painted exterior doesn't just look better – it protects your home from harsh Christchurch weather and increases its value.
            </p>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed text-center">
              Whether you're preparing to sell or just want to modernise your façade, our team brings precision, care and a flawless finish to every job.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
              Why Choose Freshcoat Painting for Exterior Painting in Christchurch?
            </h2>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              We're not just painters – we're committed professionals who treat your home with the same care we'd give our own. From prep to final coat, we ensure every detail is handled right.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-lg">Over 30 years of experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-lg">Fully insured and OH&S compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-lg">5-year workmanship warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-lg">Trusted brands like Resene & Dulux</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-lg">Reliable, clean and respectful teams</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-lg">Highly competitive rates</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-brand-gray mt-12">
              Trusted by Christchurch Homeowners Since 1994
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've built our reputation on punctuality, professionalism and a commitment to delivering exactly what we promise. No shortcuts. No hidden costs. Just exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
              Our Exterior Painting Services
            </h2>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              We offer full-service exterior painting for all property types across Christchurch. Whether you're repainting a weatherboard home, rendered façade or a multi-storey residence, we've got you covered.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-brand-gray">
              Full-Service Solutions for Every Surface
            </h3>
            <p className="text-lg mb-6 text-muted-foreground">
              Our experienced painters can transform the following:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
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

            <p className="text-lg text-muted-foreground leading-relaxed">
              For exterior surfaces, we use weatherproof, UV-resistant and anti-mould paints where needed to ensure long-lasting protection.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-gray mt-12">
              Residential & Multi-Dwelling Properties
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We handle jobs of all sizes. From small homes to large strata complexes, every project we complete is handled with the same attention to detail and care.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray text-center">
              What to Expect – Our Exterior Painting Process
            </h2>
            <p className="text-lg mb-12 text-muted-foreground leading-relaxed text-center">
              We believe a smooth process leads to a better finish. Here's how we make it easy:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-gray">Step 1 – Consultation & Quote</h3>
                <p className="text-muted-foreground">
                  We start with a detailed site inspection to understand your goals, surface condition and project scope. You'll receive a transparent, competitive quote with no surprises.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-gray">Step 2 – Surface Preparation & Repairs</h3>
                <p className="text-muted-foreground">
                  Preparation is key to durability. We clean, sand, fill and prime all surfaces, addressing flaking, cracks or water damage to ensure the paint adheres perfectly.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-gray">Step 3 – Premium Painting & Finishing</h3>
                <p className="text-muted-foreground">
                  We apply high-quality paints in carefully chosen colours and coats, ensuring a smooth, even finish that stands up to Christchurch's weather conditions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-gray">Step 4 – Final Inspection & Site Clean-Up</h3>
                <p className="text-muted-foreground">
                  We walk you through the finished result, address any touch-ups, and leave your property clean and tidy – ready to impress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
              Why Exterior Painting Matters in Christchurch's Climate
            </h2>
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

      {/* Quality Guarantee */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
              Quality You Can See – Our Workmanship Guarantee
            </h2>
            <p className="text-lg mb-12 text-muted-foreground">
              We don't cut corners. Every exterior job we complete is backed by our workmanship and attention to detail.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-gray">5-Year Workmanship Warranty</h3>
                <p className="text-muted-foreground">
                  Enjoy peace of mind knowing your investment is protected. If any issues arise due to our work, we'll make it right – no questions asked.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-gray">Fully Insured & Compliant</h3>
                <p className="text-muted-foreground">
                  Your safety and ours come first. We follow strict safety protocols and carry full public liability insurance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-gray">Premium Paints from Resene & Dulux</h3>
                <p className="text-muted-foreground">
                  We use only the highest quality paints designed for New Zealand conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Commercial;