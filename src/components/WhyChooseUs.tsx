import { Card } from '@/components/ui/card';
import { Award, DollarSign, Clock, Users } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Exceptional Workmanship & Clean Finish',
      description: 'We take pride in doing the job right the first time. Our painters focus on neat lines, thorough coats, and polished results.'
    },
    {
      icon: DollarSign,
      title: 'Transparent, Competitive Pricing',
      description: 'No hidden fees or surprise charges. We provide detailed, upfront quotes so you know exactly what to expect.'
    },
    {
      icon: Clock,
      title: 'Reliable & On-Time Service',
      description: 'We respect your time and schedule. Our team arrives when promised and completes projects within the agreed timeframe.'
    },
    {
      icon: Users,
      title: 'Fully Trained & Professional Team',
      description: 'Our painters are skilled professionals who treat your property with care and maintain the highest standards of workmanship.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
            What Makes Us Christchurch's Best House Painters
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            There are many painting companies in Christchurch - but few offer the professionalism, reliability, and attention to detail that we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 text-center hover:shadow-medium transition-shadow">
              <feature.icon size={48} className="mx-auto mb-4 text-brand-red" />
              <h3 className="text-lg font-bold mb-4 text-brand-gray">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};