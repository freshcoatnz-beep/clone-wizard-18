import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Wrench, Shield, Home, CheckCircle, Star, Award, Hammer } from "lucide-react";

const HousePreparation = () => {
  const services = [
    {
      title: "Surface Preparation",
      description: "Comprehensive surface preparation to ensure perfect paint adhesion",
      features: ["Power washing", "Scraping & sanding", "Crack filling", "Primer application"]
    },
    {
      title: "Minor Repairs",
      description: "Essential repairs to prepare your property for painting",
      features: ["Hole patching", "Wood rot repair", "Caulking & sealing", "Trim replacement"]
    },
    {
      title: "Weatherboard Repairs",
      description: "Specialized weatherboard maintenance and repair services",
      features: ["Board replacement", "Gap sealing", "Nail pop fixes", "Weather protection"]
    }
  ];

  const benefits = [
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Professional Repairs",
      description: "Expert repair work using quality materials to ensure lasting results."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Long-lasting Protection",
      description: "Proper preparation and repairs prevent future damage and extend paint life."
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Complete Solutions",
      description: "From minor touch-ups to major repairs, we handle all preparation needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              House Preparation & Repairs
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Professional preparation and repair services to ensure perfect painting results in Christchurch
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Get FREE Quote
              </Button>
              <a href="tel:+6422036658" className="flex items-center justify-center gap-2 bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                <Phone size={20} />
                022 0366586
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Our Preparation & Repair Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thorough preparation and professional repairs to ensure your paint job lasts for years to come
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
                      <CheckCircle size={16} className="text-green-600" />
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
              Why Proper Preparation Matters
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
              Our Preparation Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Property Assessment", description: "Thorough inspection to identify all repair and preparation needs" },
              { step: "2", title: "Surface Cleaning", description: "Power washing and deep cleaning of all surfaces" },
              { step: "3", title: "Repairs & Preparation", description: "Complete all necessary repairs and surface preparation" },
              { step: "4", title: "Quality Check", description: "Final inspection to ensure surfaces are ready for painting" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-brand-gray mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Common Issues We Fix
            </h2>
            <p className="text-xl text-muted-foreground">
              We handle all the preparation work so your paint job looks perfect and lasts longer
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Hammer size={32} />, title: "Nail Pops", description: "Fix protruding nails and smooth surfaces" },
              { icon: <Shield size={32} />, title: "Cracks & Holes", description: "Fill and repair all surface imperfections" },
              { icon: <Home size={32} />, title: "Rotten Wood", description: "Replace damaged weatherboards and trim" },
              { icon: <Wrench size={32} />, title: "Poor Caulking", description: "Remove old caulk and apply fresh sealing" }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg">
                <div className="text-orange-600 flex justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-gray mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Get Your Property Ready for Painting
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional preparation and repairs for the perfect paint finish
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get FREE Quote
            </Button>
            <a href="tel:+6422036658" className="flex items-center justify-center gap-2 bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              <Phone size={20} />
              Call Now: 022 0366586
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HousePreparation;