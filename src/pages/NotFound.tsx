import { Helmet } from 'react-helmet-async';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found - 404 | Freshcoat Painting Christchurch</title>
        <meta name="description" content="Sorry, the page you're looking for doesn't exist. Return to Freshcoat Painting homepage for professional painting services in Christchurch." />
        <link rel="canonical" href="https://freshcoatpainting.co.nz/404" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex items-center justify-center py-32">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-6xl font-bold mb-6 text-brand-gray">404</h1>
            <h2 className="text-3xl font-bold mb-4 text-brand-gray">Page Not Found</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Sorry, the page you're looking for doesn't exist. It may have been moved or deleted.
            </p>
            <div className="space-y-4">
              <a 
                href="/" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Return to Home
              </a>
              <div className="text-center">
                <p className="text-muted-foreground mb-4">Looking for our services?</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/interior" className="text-primary hover:underline">Interior Painting</a>
                  <a href="/exterior" className="text-primary hover:underline">Exterior Painting</a>
                  <a href="/roof-painting" className="text-primary hover:underline">Roof Painting</a>
                  <a href="/commercial" className="text-primary hover:underline">Commercial Painting</a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
