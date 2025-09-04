import { Card } from '@/components/ui/card';
import { Home, Palette, Brush, Wrench, RefreshCw } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Interior Painting',
      description: 'We provide crisp, clean finishes on all interior surfaces, including walls, ceilings, trims, doors, and more. Our painters protect your belongings and ensure minimal disruption while working.',
      features: [
        'Living rooms, bedrooms, kitchens, and bathrooms',
        'Feature walls and decorative finishes', 
        'Apartment painting and renovations'
      ],
      image: 'Interior painting sample'
    },
    {
      icon: Palette,
      title: 'Exterior Painting',
      description: 'Our exterior house painters in Christchurch use weather-resistant coatings designed for the local climate. We prep surfaces thoroughly to ensure long-lasting durability and vibrant curb appeal.',
      features: [
        'Full house repaints',
        'Fences, eaves, and weatherboards',
        'Rendered and brick surfaces'
      ],
      image: 'Exterior house painting'
    },
    {
      icon: Brush,
      title: 'Painting & Decorating',
      description: 'Our painting & decorating service enhances both the look and feel of your home. From detailed trim work to feature walls, our expert team helps you achieve a polished finish.',
      features: [
        'Decorative finishes & colour feature walls',
        'Cornices, skirtings & architraves',
        'Modernising dated interiors with clean, sharp detailing'
      ],
      image: 'Paint swatches and brushes'
    },
    {
      icon: Wrench,
      title: 'House Painting Preparation & Repairs',
      description: 'We don\'t just paint – we prep. Our team use drop sheets to protect your property, fills cracks, smooths surfaces, and patches holes for complete surface preparation.',
      features: [],
      image: null
    },
    {
      icon: RefreshCw,
      title: 'Maintenance Painting Services',
      description: 'Need a touch-up or annual repaint? Our painting maintenance programs are perfect for strata buildings, rentals, and busy family homes.',
      features: [],
      image: null
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
            Comprehensive Painting Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We specialise in residential and small-scale commercial painting services across Christchurch. Whether you're renovating, selling, or just updating your property, our painters have you covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="p-6 hover:shadow-medium transition-shadow">
              <service.icon size={48} className="text-brand-red mb-4" />
              <h3 className="text-xl font-bold mb-4 text-brand-gray">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              
              {service.features.length > 0 && (
                <div className="mb-4">
                  <p className="font-semibold text-brand-gray mb-2">Ideal for:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-red mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.image && (
                <div className="mt-4">
                  <div className="aspect-[4/3] bg-secondary rounded-lg flex items-center justify-center text-muted-foreground text-sm">
                    {service.image}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};