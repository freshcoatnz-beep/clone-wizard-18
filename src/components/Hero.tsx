import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import heroImage from '@/assets/hero-house.jpg';
import satisfactionBadge from '@/assets/satisfaction-badge.png';

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Painters Sydney | Professional
            <br />
            Interior & Exterior Painting
          </h1>
          
          {/* Key points */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mb-8 text-lg">
            <div className="flex items-center gap-2">
              <Check size={20} className="text-green-400" />
              <span>Professional Painters</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={20} className="text-green-400" />
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={20} className="text-green-400" />
              <span>5 Year Warranty</span>
            </div>
          </div>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Leading Sydney painters delivering quality finishes for homes & businesses at competitive prices.
          </p>
          
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Get FREE Quote
          </Button>
        </div>
      </div>
      
      {/* Satisfaction badge */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <img 
          src={satisfactionBadge} 
          alt="100% Satisfaction Guaranteed" 
          className="w-24 h-24 drop-shadow-lg"
        />
      </div>
    </section>
  );
};