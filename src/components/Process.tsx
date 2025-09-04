import { Card } from '@/components/ui/card';
import { FileText, Shield, Paintbrush, CheckCircle } from 'lucide-react';

export const Process = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Free Quote & Colour Consultation',
      description: 'Our team visits your site, provides expert colour advice, and offers a transparent, fixed quote.'
    },
    {
      icon: Shield,
      title: 'Full Preparation & Surface Protection',
      description: 'We cover all furniture and flooring, repair damaged areas, and prepare each surface thoroughly.'
    },
    {
      icon: Paintbrush,
      title: 'Professional Painting with Premium Products',
      description: 'We apply high-quality paint from leading brands such as Dulux and Taubmans, using advanced techniques for even, long-lasting coverage.'
    },
    {
      icon: CheckCircle,
      title: 'Final Inspection & Customer Sign-Off',
      description: 'We walk through every job with you before we leave to ensure total satisfaction. No mess, no stress – just great results.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
            Our Freshcoat Painting Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step process ensures every project is completed to the highest standard, making us the painters Christchurch prefers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={step.title} className="p-6 text-center hover:shadow-medium transition-shadow relative">
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              
              <step.icon size={48} className="mx-auto mb-4 text-brand-red mt-4" />
              <h3 className="text-lg font-bold mb-4 text-brand-gray">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};