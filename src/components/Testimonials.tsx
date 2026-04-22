import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Riccarton',
    rating: 5,
    text: "Absolutely thrilled with the work Michael and his team did on our weatherboard exterior. Tidy, on-time, and the finish is flawless. Highly recommend Freshcoat to anyone in Christchurch.",
  },
  {
    name: 'David & Anna T.',
    location: 'Merivale',
    rating: 5,
    text: "We had our entire interior repainted before moving in. The crew were professional, careful with our floors, and finished ahead of schedule. The colour advice was a bonus.",
  },
  {
    name: 'James P.',
    location: 'Papanui',
    rating: 5,
    text: "Got three quotes — Freshcoat were competitive and explained everything clearly. The roof painting has completely transformed the look of our home. 5 stars.",
  },
  {
    name: 'Linda K.',
    location: 'Cashmere',
    rating: 5,
    text: "Honest, friendly, and seriously talented painters. They prepped surfaces properly which made all the difference. Will be using them again for the rentals.",
  },
  {
    name: 'Mark R.',
    location: 'Rolleston',
    rating: 5,
    text: "From the free quote to the finished job, the whole process was smooth. Quality paint, neat lines, and great communication throughout.",
  },
  {
    name: 'Hannah W.',
    location: 'Fendalton',
    rating: 5,
    text: "Couldn't be happier. The team treated our home with respect and the result speaks for itself. Best painters in Christchurch in our experience.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} className="text-yellow-500 fill-current" />
            ))}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray">
            What Christchurch Homeowners Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real reviews from real customers across Christchurch and Canterbury.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-6 hover:shadow-medium transition-shadow flex flex-col">
              <Quote className="text-brand-red mb-3" size={28} />
              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4 flex-1">"{t.text}"</p>
              <div className="border-t pt-3">
                <p className="font-bold text-brand-gray">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.location}, Christchurch</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
