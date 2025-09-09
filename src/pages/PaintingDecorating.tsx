import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Palette, Brush, Home, CheckCircle, Star, Award } from "lucide-react";

const PaintingDecorating = () => {
  const services = [
    {
      title: "Interior Decorating",
      description: "Complete interior design and decorating services to transform your space",
      features: ["Color consultation", "Design planning", "Wallpaper installation", "Feature walls"]
    },
    {
      title: "Wallpaper Installation",
      description: "Professional wallpaper hanging and removal services",
      features: ["Pattern matching", "Bubble-free finish", "Wall preparation", "Removal service"]
    },
    {
      title: "Specialty Finishes",
      description: "Unique decorative finishes and textures for distinctive interiors",
      features: ["Textured walls", "Faux finishes", "Decorative painting", "Accent features"]
    }
  ];

  const benefits = [
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "Design Expertise",
      description: "Professional color consultation and design advice to create the perfect atmosphere."
    },
    {
      icon: <Brush className="w-8 h-8 text-blue-600" />,
      title: "Quality Craftsmanship",
      description: "Skilled decorators with attention to detail for flawless finishes."
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Complete Transformation",
      description: "From concept to completion, we transform your space into your dream home."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Painting & Decorating Services
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Transform your home with professional painting and decorating services in Christchurch
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Get FREE Quote
              </Button>
              <a href="tel:+6422036658" className="flex items-center justify-center gap-2 bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
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
              Our Painting & Decorating Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete decorating solutions to bring your vision to life with style and sophistication
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
              Why Choose Our Decorating Services?
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
              Our Decorating Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Design Consultation", description: "We discuss your vision and provide expert design advice" },
              { step: "2", title: "Color & Material Selection", description: "Choose the perfect colors and materials for your space" },
              { step: "3", title: "Professional Application", description: "Expert installation with attention to every detail" },
              { step: "4", title: "Final Styling", description: "Perfect finishing touches to complete your transformation" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-brand-gray mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Our Decorating Work
            </h2>
            <p className="text-xl text-muted-foreground">
              See how we've transformed homes across Christchurch
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Palette size={48} className="text-purple-400 mx-auto mb-2" />
                  <p className="text-muted-foreground">Project Gallery</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation for your painting and decorating project today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get FREE Quote
            </Button>
            <a href="tel:+6422036658" className="flex items-center justify-center gap-2 bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
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

export default PaintingDecorating;