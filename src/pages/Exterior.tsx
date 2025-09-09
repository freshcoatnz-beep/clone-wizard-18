import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Award, CheckCircle, Star, Clock } from "lucide-react";

const Exterior = () => {
  const services = [
    {
      title: "House Exterior Painting",
      description: "Complete exterior house painting with premium weather-resistant paints",
      features: ["Weather protection", "Color consultation", "Surface preparation", "Quality guarantee"]
    },
    {
      title: "Deck & Fence Painting",
      description: "Restore and protect your outdoor wooden structures",
      features: ["Wood staining", "Weather sealing", "Deck restoration", "Fence painting"]
    },
    {
      title: "Commercial Exterior",
      description: "Professional exterior painting for commercial properties",
      features: ["Minimal disruption", "Professional finish", "Durable materials", "Quick turnaround"]
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Weather Protection",
      description: "Our premium exterior paints provide long-lasting protection against Christchurch weather conditions."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality Materials",
      description: "We use only the finest exterior paints and primers designed for New Zealand conditions."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Efficient Service",
      description: "Professional exterior painting completed on time with minimal disruption to your daily routine."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Exterior Painting Services
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Transform your property's exterior with professional painting services in Christchurch
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Get FREE Quote
              </Button>
              <a href="tel:+6422036658" className="flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
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
              Our Exterior Painting Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional exterior painting solutions for residential and commercial properties in Christchurch
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
              Why Choose Our Exterior Painting?
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
              Our Exterior Painting Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Free Consultation", description: "We assess your property and provide a detailed quote" },
              { step: "2", title: "Surface Preparation", description: "Thorough cleaning, scraping, and priming of all surfaces" },
              { step: "3", title: "Professional Painting", description: "Expert application using premium exterior paints" },
              { step: "4", title: "Final Inspection", description: "Quality check and cleanup to ensure perfect results" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-brand-gray mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Exterior?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free quote for your exterior painting project today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get FREE Quote
            </Button>
            <a href="tel:+6422036658" className="flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
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

export default Exterior;