import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Welcome } from '@/components/Welcome';
import { TrustedCompany } from '@/components/TrustedCompany';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Freshcoat Painting",
    "description": "Professional painting services in Christchurch with 30+ years experience. Interior, exterior, and roof painting with 5-year warranty.",
      "url": "https://www.freshcoat.co.nz",
      "telephone": "+64-22-036-6586",
      "email": "michael@freshcoat.co.nz",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Christchurch",
      "addressRegion": "Canterbury", 
      "addressCountry": "NZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-43.5321",
      "longitude": "172.6362"
    },
    "openingHours": "Mo-Fr 07:00-17:00",
    "priceRange": "$$",
    "areaServed": "Christchurch",
    "serviceType": ["Interior Painting", "Exterior Painting", "Roof Painting", "Commercial Painting"],
      "image": "https://www.freshcoat.co.nz/og-image.jpg"
  };

  return (
    <>
      <Helmet>
        <title>Painters Christchurch | Professional Interior & Exterior Painting Services</title>
        <meta name="description" content="Leading Christchurch painters with 30+ years experience. Professional interior, exterior & roof painting with 5-year guarantee. Get your free quote today!" />
        <meta name="keywords" content="painters christchurch, house painting, interior painting, exterior painting, roof painting, professional painters" />
        <link rel="canonical" href="https://www.freshcoat.co.nz/" />
        <meta property="og:title" content="Painters Christchurch | Professional Interior & Exterior Painting Services" />
        <meta property="og:description" content="Leading Christchurch painters with 30+ years experience. Interior, exterior & roof painting with 5-year guarantee." />
        <meta property="og:url" content="https://www.freshcoat.co.nz/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.freshcoat.co.nz/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Welcome />
          <TrustedCompany />
          <Services />
          <Process />
          <WhyChooseUs />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
