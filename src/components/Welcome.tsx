import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import guaranteeBadge from '@/assets/guarantee-badge.png';

export const Welcome = () => {
  return (
    <>
      {/* Guarantee badge - Outside hero section */}
      <div className="relative bg-background">
        <div className="absolute top-4 left-8 hidden lg:block z-10">
          <img 
            src={guaranteeBadge} 
            alt="5 Year Guarantee" 
            className="w-40 h-40"
          />
        </div>
      </div>
      
      <section className="py-8 lg:py-12 bg-background">
      <div className="container mx-auto px-4 ml-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
              Welcome to Freshcoat Painting Pty Ltd
            </h2>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Looking for reliable painters in Christchurch who deliver professional, high-quality finishes? 
              <strong className="text-brand-gray"> Freshcoat Painting</strong> is a leading painting company with over 20 years of experience transforming homes, strata, and small commercial properties throughout Christchurch.
            </p>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              Whether you need interior or exterior painting, our expert team provides seamless, stress-free service backed by a 5-year workmanship warranty. As fully insured professionals using premium brands like <strong className="text-brand-gray">Dulux, Taubmans, and Wattyl</strong>, we guarantee lasting results and complete customer satisfaction.
            </p>
            <Button variant="cta" size="lg">
              Get your free painting quote today
            </Button>
          </div>

          {/* Images grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="p-0 overflow-hidden shadow-medium">
              <div className="aspect-[3/4] bg-secondary rounded-lg">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Interior Painting
                  <br />
                  West Pennant Hills
                </div>
              </div>
            </Card>
            <Card className="p-0 overflow-hidden shadow-medium mt-8">
              <div className="aspect-[3/5] bg-secondary rounded-lg">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Exterior Painting
                  <br />
                  2 Storey Home
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};