import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { QuoteForm } from '@/components/QuoteForm';
// Using edited image without car
import heroImage from '@/assets/hero-house-clean.jpg';
import warrantyBadge from '@/assets/warranty-badge.png';

export const Hero = () => {
  return (
    <section className="relative min-h-[450px] lg:min-h-[600px] bg-cover bg-center bg-no-repeat hero-curved" style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'center 70%' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero hero-curved"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-12 lg:py-32 flex items-end min-h-[400px] lg:min-h-[550px]">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
            Painters Christchurch
            <br />
            Interior & Exterior Painting
          </h1>
          
          {/* Key points */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-10 text-lg lg:text-xl">
            <div className="flex items-center gap-2">
              <span>5 Year Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <span>30 Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Professional Painters</span>
            </div>
          </div>
          
          <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
            Leading Christchurch painters delivering quality finishes for homes & businesses at competitive prices.
          </p>
          
          <QuoteForm>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-xl px-12 py-6 font-semibold bg-green-600 hover:bg-green-700 text-white border-green-600 mt-8"
            >
              Get FREE Quote
            </Button>
          </QuoteForm>
        </div>
      </div>
    </section>
  );
};