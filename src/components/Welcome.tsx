import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QuoteForm } from '@/components/QuoteForm';
import guaranteeBadge from '@/assets/guarantee-badge.webp';

export const Welcome = () => {
  return (
    <>
      {/* Guarantee badge - Outside hero section */}
      <div className="relative bg-background">
        <div className="absolute -top-20 left-0 hidden lg:block z-10">
          <img 
            src={guaranteeBadge} 
            alt="5 Year Guarantee" 
            className="w-40 h-40" loading="lazy" decoding="async" />
        </div>
      </div>
      
      <section className="py-2 lg:py-4 bg-background">
      <div className="container px-4 ml-64 mr-48">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
              Painters in Christchurch — Trusted House Painting Company &amp; Contractors
            </h2>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Looking for experienced <a href="/painter-and-decorator-christchurch" className="text-brand-red hover:underline font-semibold">painters and decorators in Christchurch</a> who deliver flawless results?
              <strong className="text-brand-gray"> Freshcoat Painting</strong> has been transforming homes, roofs, and small commercial spaces across Christchurch for over 30 years.
            </p>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              As one of the top <a href="/house-painters-christchurch" className="text-brand-red hover:underline font-semibold">painting companies in Christchurch</a>, we handle everything from <a href="/interior" className="text-brand-red hover:underline font-semibold">interior makeovers</a> to <a href="/exterior" className="text-brand-red hover:underline font-semibold">exterior protection</a>. Our skilled team ensures a hassle-free experience with a 5-year workmanship guarantee. We're fully insured and work exclusively with leading brands like <strong className="text-brand-gray">Resene, Dulux, and Wattyl</strong>—so you can count on a durable, high-quality finish every time.
            </p>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              Our Christchurch painters serve every suburb — including <a href="/painters/fendalton" className="text-brand-red hover:underline font-semibold">Fendalton</a>, Merivale, Riccarton, Ilam, Papanui, <a href="/painters/cashmere" className="text-brand-red hover:underline font-semibold">Cashmere house painters</a>, St Albans, Sumner and Halswell — plus Rolleston and Lincoln across greater Canterbury.
            </p>
            <QuoteForm>
              <Button variant="cta" size="lg" className="bg-green-600 hover:bg-green-700">
                Get FREE Quote
              </Button>
            </QuoteForm>
          </div>

          {/* Images grid */}
          <div>
            <Card className="p-0 overflow-hidden shadow-medium">
              <div className="aspect-[5/3] bg-secondary rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/be3e0313-1934-48ae-9df1-636887be9531.webp" 
                  alt="Interior painting project in a Christchurch home — freshly painted living space by Freshcoat Painting" 
                  className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};