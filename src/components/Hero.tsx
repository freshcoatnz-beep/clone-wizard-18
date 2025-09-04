import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import heroImage from '@/assets/hero-house.jpg';
import warrantyBadge from '@/assets/warranty-badge.png';

export const Hero = () => {
  return (
    <section className="relative min-h-[700px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 lg:py-40">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Painters Sydney | Professional
            <br />
            Interior & Exterior Painting
          </h1>
          
          {/* Key points */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-10 text-lg lg:text-xl">
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
          
          <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
            Leading Sydney painters delivering quality finishes for homes & businesses at competitive prices.
          </p>
          
          <Button variant="hero" size="lg" className="text-xl px-12 py-6 font-semibold">
            Get FREE Quote
          </Button>
        </div>
      </div>
      
      {/* 5 Year Warranty badge */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <img 
          src={warrantyBadge} 
          alt="5 Year Warranty" 
          className="w-24 h-24 drop-shadow-lg"
        />
      </div>
    </section>
  );
};