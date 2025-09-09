import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Building, Users, Award, CheckCircle, Star, Briefcase } from "lucide-react";

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
      <section className="relative bg-gradient-to-br from-gray-700 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Commercial Painting Services
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Professional commercial painting solutions for businesses across Christchurch
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Get FREE Quote
              </Button>
              <a href="tel:+6422036658" className="flex items-center justify-center gap-2 bg-white text-gray-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
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
              Our Commercial Painting Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive commercial painting solutions tailored to your business needs
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
              Why Choose Us for Commercial Projects?
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
              Our Commercial Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Site Assessment", description: "Comprehensive evaluation of your commercial property" },
              { step: "2", title: "Custom Planning", description: "Detailed project plan tailored to your business needs" },
              { step: "3", title: "Professional Execution", description: "Expert painting with minimal business disruption" },
              { step: "4", title: "Quality Assurance", description: "Final inspection and ongoing maintenance support" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-brand-gray mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by businesses across Christchurch for quality commercial painting
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Building size={32} />, title: "Offices", description: "Corporate buildings and office complexes" },
              { icon: <Briefcase size={32} />, title: "Retail", description: "Shops, restaurants, and commercial spaces" },
              { icon: <Award size={32} />, title: "Healthcare", description: "Medical facilities and clinics" },
              { icon: <Users size={32} />, title: "Education", description: "Schools and educational institutions" }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg">
                <div className="text-gray-700 flex justify-center mb-3">
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
      <section className="py-16 bg-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation for your commercial painting project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get FREE Quote
            </Button>
            <a href="tel:+6422036658" className="flex items-center justify-center gap-2 bg-white text-gray-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
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

export default Commercial;