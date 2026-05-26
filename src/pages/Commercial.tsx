import { Helmet } from '@/lib/head';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { QuoteForm } from '@/components/QuoteForm';
import { InView } from '@/components/InView';
import { useDeferredMount } from '@/hooks/use-deferred-mount';
const guaranteeBadge = '/guarantee-badge.webp';

const Commercial = () => {
  const deferred = useDeferredMount();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Painters Christchurch",
    "description": "Professional commercial painting services in Christchurch. Office buildings, retail spaces, industrial facilities. 30+ years experience, 5-year warranty.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Freshcoat Painting",
      "areaServed": "Christchurch"
    },
    "serviceType": "Commercial Painting",
    "url": "https://www.freshcoat.co.nz/commercial",
    "areaServed": [
      { "@type": "City", "name": "Christchurch" },
      { "@type": "AdministrativeArea", "name": "Canterbury" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "NZD",
      "availability": "https://schema.org/InStock",
      "description": "Custom quotes for commercial properties"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial Painting Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Painting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retail & Hospitality Painting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial & Warehouse Painting" } }
      ]
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.freshcoat.co.nz/" },
      { "@type": "ListItem", "position": 2, "name": "Commercial Painters", "item": "https://www.freshcoat.co.nz/commercial" }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do commercial painters in Christchurch charge?",
        "acceptedAnswer": { "@type": "Answer", "text": "Commercial painting in Christchurch typically ranges from $45–$85 per square metre depending on surface condition, access, paint specification and whether work is done in-hours or after-hours. We provide a fixed written quote after a free site inspection — no surprises." }
      },
      {
        "@type": "Question",
        "name": "Can you paint outside business hours to avoid disruption?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We regularly schedule commercial jobs after-hours, on weekends or in staged sections so your Christchurch business can keep trading. Low-VOC paints are used in occupied spaces to minimise odour." }
      },
      {
        "@type": "Question",
        "name": "Are you fully insured for commercial sites?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Freshcoat Painting carries full public liability insurance, Site Safe documentation, and we provide site-specific safety plans, SWMS and JSAs for every commercial project in Christchurch." }
      },
      {
        "@type": "Question",
        "name": "What types of commercial property do you paint?",
        "acceptedAnswer": { "@type": "Answer", "text": "We paint offices, retail stores, cafés and restaurants, schools, medical and dental clinics, warehouses, factories, body-corporate apartment blocks, hotels and motels right across Christchurch and Canterbury." }
      },
      {
        "@type": "Question",
        "name": "How long does a commercial paint job take?",
        "acceptedAnswer": { "@type": "Answer", "text": "A small office repaint can be completed in 2–4 days, while large warehouses or multi-storey buildings typically take 1–3 weeks. We provide a clear programme of works with each quote." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Commercial Painters Christchurch | Freshcoat</title>
        <meta name="description" content="Professional commercial painters in Christchurch for offices, retail, warehouses, schools &amp; body corporate. After-hours work, fully insured, 5-year warranty. Free quote." />
        <meta name="keywords" content="commercial painters, commercial painters christchurch, commercial painting, commercial painters nz, office painting, retail painting, industrial painting christchurch, spray painting contractors, commercial painting christchurch, office painters christchurch, warehouse painters, retail painters, body corporate painters" />
        <link rel="canonical" href="https://www.freshcoat.co.nz/commercial" />
        <link rel="preload" as="image" href="/commercial-hero.webp" fetchPriority="high" />
        <meta property="og:title" content="Commercial Painters Christchurch | Freshcoat" />
        <meta property="og:description" content="Professional commercial painters for Christchurch offices, retail and industrial properties. 30+ years experience, 5-year warranty." />
        <meta property="og:url" content="https://www.freshcoat.co.nz/commercial" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
      
      {/* Hero Section - matches your current hero */}
      <section className="relative min-h-[550px] lg:min-h-[700px] bg-cover bg-center bg-no-repeat hero-curved" style={{ backgroundImage: 'url(/commercial-hero.webp)' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero hero-curved"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-12 lg:py-32 flex items-end min-h-[500px] lg:min-h-[650px]">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
              Commercial Painters Christchurch
            </h1>
            
            {/* Key points */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-10 text-lg lg:text-xl">
              <div className="flex items-center gap-2">
                <span>Professional Painters</span>
              </div>
              <div className="flex items-center gap-2">
                <span>30+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span>5 Year Warranty</span>
              </div>
            </div>
            
            <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
              Trusted commercial painters in Christchurch for offices, retail stores, warehouses, schools and body corporate buildings — after-hours scheduling, minimal disruption and a 5-year workmanship guarantee.
            </p>
            
            <QuoteForm>
              <Button variant="hero" size="lg" className="text-xl px-12 py-6 font-semibold bg-green-600 hover:bg-green-700 text-white border-green-600 mt-8">
                Get FREE Quote
              </Button>
            </QuoteForm>
          </div>
        </div>
      </section>

      {/* Guarantee badge - Outside hero section */}
      <div className="relative bg-background">
        <div className="absolute -top-20 left-0 hidden lg:block z-10">
          <img 
            src={guaranteeBadge} 
            alt="5 Year Guarantee" 
            className="w-40 h-40" loading="lazy" decoding="async" />
        </div>
      </div>

      {/* Main Content Section - matches Advanced Painting layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="lg:col-span-3">
              <img 
                src="/commercial-van.webp" 
                alt="Freshcoat Painting van in commercial warehouse showing professional equipment" 
                className="w-full rounded-lg shadow-lg" loading="lazy" decoding="async" />
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
                Christchurch's Trusted Commercial Painting Contractor
              </h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Looking to refresh your commercial property or boost its professional appeal? Freshcoat Painting is a fully insured commercial painting contractor specialising in office, retail, industrial and body-corporate work right across Christchurch and Canterbury.
              </p>
              <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                With over 30 years of experience painting Christchurch businesses, we deliver long-lasting commercial finishes using Resene and Dulux premium paints, scaffold and EWP access where needed, and Site Safe compliant crews — all backed by our 5-year workmanship guarantee.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-brand-gray">Commercial painting services we provide:</h3>
              <ul className="space-y-2 mb-8">
                <li className="text-lg">• Office &amp; corporate fit-out painting</li>
                <li className="text-lg">• Retail, hospitality &amp; café repaints</li>
                <li className="text-lg">• Warehouse, factory &amp; industrial coatings</li>
                <li className="text-lg">• Body corporate &amp; multi-unit complexes</li>
                <li className="text-lg">• Schools, childcare &amp; medical facilities</li>
                <li className="text-lg">• Line marking, epoxy floors &amp; protective coatings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Transform Your Home Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray text-center">
              Transform Your Business with Expert Commercial Painting Services
            </h2>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed text-center">
              A professionally painted commercial property doesn't just look better – it creates a positive impression for customers and protects your building from harsh Christchurch weather.
            </p>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed text-center">
              Whether you're updating your office, retail space, or industrial facility, our team brings precision, care and a flawless finish to every commercial project.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      {deferred && (<><section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
              Why Choose Freshcoat Painting for Commercial Painting in Christchurch?
            </h2>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              We're not just painters – we're committed professionals who treat your commercial property with the same care we'd give our own. From prep to final coat, we ensure every detail is handled right.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-2">
                <span className="text-lg">Over 30 years of experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">Fully insured and OH&S compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">5-year workmanship warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">Trusted brands like Resene & Dulux</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">Reliable, clean and respectful teams</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">Highly competitive rates</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-brand-gray mt-12">
              Trusted by Christchurch Businesses Since 1994
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From CBD offices and Riccarton retail to industrial sites in Hornby and Sockburn, Christchurch businesses choose Freshcoat for our punctuality, tidy site management and a finish that lasts. No shortcuts. No hidden costs. Just exceptional commercial results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
              Our Commercial Painting Services
            </h2>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              We offer full-service commercial painting for all business types across Christchurch. Whether you're repainting an office building, retail space, warehouse or industrial facility, we've got you covered.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-brand-gray">
              Commercial Property Types We Paint in Christchurch
            </h3>
            <p className="text-lg mb-6 text-muted-foreground">
              Whatever your premises, we have crews and equipment to handle it safely and on schedule:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div><strong>Offices &amp; corporate buildings</strong> — interior repaints, lobbies, meeting rooms, stairwells and exterior cladding.</div>
                <div><strong>Retail &amp; shopfronts</strong> — high-impact storefronts, signage prep, fit-outs and quick-turnaround refreshes.</div>
                <div><strong>Hospitality</strong> — cafés, restaurants, bars and hotels painted overnight to avoid trading downtime.</div>
                <div><strong>Warehouses &amp; factories</strong> — high-bay walls, structural steel, epoxy floors and line marking.</div>
              </div>
              <div className="space-y-3">
                <div><strong>Schools &amp; childcare</strong> — low-VOC paints, after-school and term-break programmes.</div>
                <div><strong>Medical &amp; dental clinics</strong> — antimicrobial coatings and staged work in occupied spaces.</div>
                <div><strong>Body corporate &amp; apartments</strong> — exterior repaints, common areas and weatherproofing for Christchurch's coastal climate.</div>
                <div><strong>Government &amp; council</strong> — compliant documentation, H&amp;S plans and approved subcontractor processes.</div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We specify the right product for every commercial surface — anti-graffiti, intumescent fire-rated, anti-mould, anti-corrosive metal primers and high-build epoxies — to deliver durability that stands up to daily commercial wear and Christchurch weather.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-brand-gray mt-12">
              Minimal Disruption to Your Business
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We know downtime costs money. Freshcoat schedules commercial work after-hours, on weekends or in staged zones so your business keeps trading. Crews arrive in uniform, set up clean containment, use low-odour paints in occupied areas and leave the site spotless every day.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray text-center">
              What to Expect – Our Commercial Painting Process
            </h2>
            <p className="text-lg mb-12 text-muted-foreground leading-relaxed text-center">
              We believe a smooth process leads to a better finish. Here's how we make it easy:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-gray">Step 1 – Consultation & Quote</h3>
                <p className="text-muted-foreground">
                  We start with a detailed site inspection to understand your goals, surface condition and project scope. You'll receive a transparent, competitive quote with no surprises.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-gray">Step 2 – Surface Preparation & Repairs</h3>
                <p className="text-muted-foreground">
                  Preparation is key to durability. We clean, sand, fill and prime all surfaces, addressing flaking, cracks or water damage to ensure the paint adheres perfectly.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-gray">Step 3 – Premium Painting & Finishing</h3>
                <p className="text-muted-foreground">
                  We apply high-quality paints in carefully chosen colours and coats, ensuring a smooth, even finish that stands up to Christchurch's weather conditions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-gray">Step 4 – Final Inspection & Site Clean-Up</h3>
                <p className="text-muted-foreground">
                  We walk you through the finished result, address any touch-ups, and leave your property clean and tidy – ready to impress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
              Why Commercial Painting Matters in Christchurch's Climate
            </h2>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              Christchurch's nor'westers, salt-laden coastal air, UV and freeze-thaw cycles are tough on commercial paintwork. Quality products and proper preparation are vital to protect your building's exterior, signage and steelwork — and to extend the time between repaints.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gray">Protect Your Premises from Weather Damage</h3>
                <p className="text-lg mb-4 text-muted-foreground">Our commercial exterior coatings shield your building from:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span>Sun damage and fading</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Mould and mildew</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Flaking, peeling and blistering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Cracks from temperature extremes</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gray">Enhance Brand Image &amp; Property Value</h3>
                <p className="text-lg text-muted-foreground">
                  A freshly painted commercial property signals a professional, well-run business. It lifts kerb appeal for customers, supports brand colours and protects the asset value of your Christchurch building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <InView minHeight="900px"><section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-brand-gray text-center">
              Commercial Painting Christchurch — FAQs
            </h2>
            <div className="space-y-6">
              {faqData.mainEntity.map((item: any) => (
                <div key={item.name} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-brand-gray">{item.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <QuoteForm>
                <Button variant="hero" size="lg" className="text-xl px-12 py-6 font-semibold bg-green-600 hover:bg-green-700 text-white border-green-600">
                  Get FREE Quote
                </Button>
              </QuoteForm>
            </div>
          </div>
        </div>
      </section></InView>

      {/* Quality Guarantee */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-brand-gray">
              Quality You Can See – Our Workmanship Guarantee
            </h2>
            <p className="text-lg mb-12 text-muted-foreground">
              We don't cut corners. Every exterior job we complete is backed by our workmanship and attention to detail.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-gray">5-Year Workmanship Warranty</h3>
                <p className="text-muted-foreground">
                  Enjoy peace of mind knowing your investment is protected. If any issues arise due to our work, we'll make it right – no questions asked.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-gray">Fully Insured & Compliant</h3>
                <p className="text-muted-foreground">
                  Your safety and ours come first. We follow strict safety protocols and carry full public liability insurance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-brand-gray">Premium Paints from Resene & Dulux</h3>
                <p className="text-muted-foreground">
                  We use only the highest quality paints designed for New Zealand conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </>)}
        </main>
        <InView minHeight="400px"><Footer /></InView>
      </div>
    </>
  );
};

export default Commercial;