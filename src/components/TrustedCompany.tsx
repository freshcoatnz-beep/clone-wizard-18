import { Card } from '@/components/ui/card';
import { Shield, Users, Award } from 'lucide-react';

export const TrustedCompany = () => {
  const serviceAreas = [
    'Hills District',
    'Hornsby', 
    'North Shore',
    'Inner West',
    'City of Sydney',
    'Parramatta',
    'Blacktown',
    'Western Sydney'
  ];

  const features = [
    {
      icon: Users,
      title: 'Over Two Decades of Local Experience',
      description: "We've helped hundreds of clients across the Hills Shire, Eastern Suburbs, Northern Beaches, and greater Sydney. Our professional painters in Sydney have the local knowledge and expertise to do the job right."
    },
    {
      icon: Award,
      title: 'Trusted by Sydney Property Owners',
      description: 'Our company is known for being punctual, polite, and detail-focused. Whether we\'re painting a single room or an entire property, for heritage homes or modern renovations, we treat every space with respect and care.'
    },
    {
      icon: Shield,
      title: 'Fully Insured, OH&S Compliant, and Guaranteed',
      description: 'Freshcoat Painting is fully insured and complies with all OH&S standards. Plus, every job is backed by a 5-year workmanship warranty for your total peace of mind.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
            Trusted Sydney Painting Company
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We understand what homeowners and property managers want from a painting contractor: quality workmanship, reliability, and honest pricing. That's exactly what we deliver, all across Sydney.
          </p>
        </div>

        {/* Service Areas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {serviceAreas.map((area) => (
            <Card key={area} className="p-4 text-center hover:shadow-medium transition-shadow">
              <h3 className="font-semibold text-brand-gray">{area}</h3>
            </Card>
          ))}
        </div>

        {/* Sample Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            'Rosebery Living Room',
            'Kellyville Exterior',
            'Gordon Interior'
          ].map((project) => (
            <Card key={project} className="p-0 overflow-hidden shadow-medium">
              <div className="aspect-[4/5] bg-gradient-card rounded-lg">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  After - {project}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 text-center hover:shadow-medium transition-shadow">
              <feature.icon size={48} className="mx-auto mb-4 text-brand-red" />
              <h3 className="text-xl font-bold mb-4 text-brand-gray">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};