import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Home, Shield, Award, Star, Umbrella } from "lucide-react";
import guaranteeBadge from '@/assets/guarantee-badge.png';

const RoofPainting = () => {
  const services = [
    {
      title: "Metal Roof Painting",
      description: "Professional painting and restoration of metal roofing systems",
      features: ["Rust treatment", "Primer application", "Weather-resistant coating", "Color matching"]
    },
    {
      title: "Tile Roof Painting",
      description: "Specialized painting services for concrete and clay tile roofs",
      features: ["Surface preparation", "Pressure washing", "Sealing & painting", "UV protection"]
    },
    {
      title: "Roof Restoration",
      description: "Complete roof restoration including repairs and protective coatings",
      features: ["Leak repairs", "Gutter painting", "Ridge capping", "Warranty included"]
    }
  ];

  const benefits = [
    {
      icon: <Umbrella className="w-8 h-8 text-blue-600" />,
      title: "Weather Protection",
      description: "Premium roof coatings provide superior protection against harsh weather conditions."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Extended Roof Life",
      description: "Professional roof painting extends the life of your roof by years, saving money."
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Enhanced Curb Appeal",
      description: "A freshly painted roof dramatically improves your property's appearance and value."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[550px] lg:min-h-[700px] bg-cover bg-center bg-no-repeat hero-curved" style={{ backgroundImage: 'url(/src/assets/roof-hero-house.jpg)', backgroundPosition: 'center 0%' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero hero-curved"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-12 lg:py-32 flex items-end min-h-[500px] lg:min-h-[650px]">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
              Roof Painting Services
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
              Professional roof painting and restoration services to protect and beautify your Christchurch property.
            </p>
            
            <Button variant="hero" size="lg" className="text-xl px-12 py-6 font-semibold bg-green-600 hover:bg-green-700 text-white border-green-600 mt-8">
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
            alt="5 Year Guarantee Badge" 
            className="w-40 h-40"
          />
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-2 lg:py-4 pb-4 bg-background">
        <div className="container mx-auto px-4 ml-64 mr-48">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
                Professional Roof Painting
              </h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Need expert roof painters in Christchurch who deliver lasting results?
                <strong className="text-brand-gray"> Freshcoat Painting</strong> specializes in professional roof painting and restoration services.
              </p>
              <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                From metal roofs to tile restoration, our skilled team ensures superior protection with a 5-year workmanship guarantee. We use only premium roof coatings designed for <strong className="text-brand-gray">New Zealand conditions</strong>.
              </p>
              <Button variant="cta" size="lg" className="bg-green-600 hover:bg-green-700">
                Get FREE Quote
              </Button>
            </div>

            {/* Image */}
            <div className="flex justify-end">
              <div className="max-w-xl w-full">
                <Card className="p-0 overflow-hidden shadow-medium">
                  <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden">
                    <img 
                      src="/src/assets/roof-worker.jpg" 
                      alt="Professional Roof Painter at Work" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Our Roof Painting Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive roof painting solutions to protect your investment and enhance your property's value
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-brand-gray mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Why Choose Our Roof Painting Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-gray mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Our Roof Painting Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Roof Inspection", description: "Thorough assessment of roof condition and repair needs" },
              { step: "2", title: "Preparation & Cleaning", description: "High-pressure washing and surface preparation" },
              { step: "3", title: "Repairs & Priming", description: "Fix any issues and apply specialized roof primer" },
              { step: "4", title: "Professional Painting", description: "Apply premium roof paint with precision and care" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-brand-gray mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Premium Roof Coatings
            </h2>
            <p className="text-xl text-muted-foreground">
              We use only the highest quality roof paints designed for New Zealand conditions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Metal Roof Paint", description: "Advanced coatings for Colorbond and galvanized steel", features: ["15-year warranty", "Fade resistant", "Heat reflective"] },
              { title: "Tile Roof Paint", description: "Specialized paint for concrete and terracotta tiles", features: ["Flexible coating", "Crack bridging", "Mould resistant"] },
              { title: "Membrane Coatings", description: "Waterproof coatings for flat and low-slope roofs", features: ["Seamless finish", "UV protection", "Energy efficient"] }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-brand-gray mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <ul className="space-y-1">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Protect Your Roof Investment
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free quote for professional roof painting services today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-xl px-12 py-6 font-semibold bg-green-600 hover:bg-green-700 text-white border-green-600">
              Get FREE Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoofPainting;