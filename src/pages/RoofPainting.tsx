import { Header } from '@/components/Header';
import { Welcome } from '@/components/Welcome';
import { TrustedCompany } from '@/components/TrustedCompany';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const RoofPainting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Custom Roof Painting Hero Section */}
      <section className="relative min-h-[450px] lg:min-h-[600px] bg-cover bg-center bg-no-repeat hero-curved" style={{ backgroundImage: 'url(/lovable-uploads/914c1559-aa21-40dc-b4da-78a748cae32b.png)' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero hero-curved"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-12 lg:py-32 flex items-end min-h-[400px] lg:min-h-[550px]">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
              Roof Painting Services
              <br />
              Christchurch
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
              Professional roof painting and restoration services to protect and beautify your Christchurch property.
            </p>
            
            <Button variant="hero" size="lg" className="text-xl px-12 py-6 font-semibold bg-blue-600 hover:bg-blue-700 text-white border-blue-600 mt-8">
              Get FREE Quote
            </Button>
          </div>
        </div>
      </section>

      <Welcome />
      <TrustedCompany />
      <Services />
      <Process />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default RoofPainting;