import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import guaranteeBadge from '@/assets/guarantee-badge.png';

export const Welcome = () => {
  return (
    <>
      {/* Guarantee badge - Outside hero section */}
      <div className="relative bg-background">
        <div className="absolute -top-8 left-0 hidden lg:block z-10">
          <img 
            src={guaranteeBadge} 
            alt="5 Year Guarantee" 
            className="w-40 h-40"
          />
        </div>
      </div>
      
      <section className="py-2 lg:py-4 bg-background">
      <div className="container mx-auto px-4 ml-48">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
              Welcome to Freshcoat Painting
            </h2>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Need trusted painters in Christchurch who deliver flawless results?
              <strong className="text-brand-gray"> Freshcoat Painting</strong> has been transforming homes, Roofs, and small commercial spaces across Christchurch for over 30 years.
            </p>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              From interior makeovers to exterior protection, our skilled team ensures a hassle-free experience with a 5-year workmanship guarantee. We're fully insured and work exclusively with leading brands like <strong className="text-brand-gray">Resene, Dulux, and Wattyl</strong>—so you can count on a durable, high-quality finish every time.
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