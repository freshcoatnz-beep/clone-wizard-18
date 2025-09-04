import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Welcome } from '@/components/Welcome';
import { TrustedCompany } from '@/components/TrustedCompany';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Welcome />
      <TrustedCompany />
      <Services />
      <Process />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
