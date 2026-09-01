import { Button } from '@/components/ui/button';
import { QuoteForm } from '@/components/QuoteForm';

const heroImage = '/hero-house-clean.webp';

export const Hero = () => {
  return (
    <section className="relative min-h-[450px] lg:min-h-[600px] bg-cover bg-center bg-no-repeat hero-curved" style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'center 70%' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero hero-curved"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-12 lg:py-32 flex items-end min-h-[400px] lg:min-h-[550px]">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 lg:mb-8 leading-tight">
            Painters Christchurch
            <br />
            House Painting Company
          </h1>
          
          {/* Key points */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 lg:gap-16 mb-6 lg:mb-10 text-base sm:text-lg lg:text-xl">
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
          
          <p className="text-base sm:text-lg lg:text-2xl mb-6 lg:mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
            Leading painters in Christchurch — interior, exterior & roof painting for homes and businesses across Canterbury. Google rated, 30+ years' experience, 5-year guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mt-4 lg:mt-8">
            <QuoteForm>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto text-lg lg:text-xl px-8 lg:px-12 py-6 font-semibold bg-green-600 hover:bg-green-700 text-white border-green-600"
              >
                Get FREE Quote
              </Button>
            </QuoteForm>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg lg:text-xl px-8 lg:px-12 py-6 font-semibold bg-white/10 text-white border-white hover:bg-white hover:text-brand-gray"
            >
              <a href="tel:+64220366586">Call 022 0366586</a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};