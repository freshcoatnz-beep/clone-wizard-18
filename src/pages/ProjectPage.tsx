import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from '@/lib/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Testimonials } from '@/components/Testimonials';
import { QuoteForm } from '@/components/QuoteForm';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';
import { Calendar, Clock, ArrowLeft, Phone } from 'lucide-react';

const categoryColors: Record<string, string> = {
  Interior: 'bg-blue-100 text-blue-800',
  Exterior: 'bg-green-100 text-green-800',
  Roof: 'bg-amber-100 text-amber-800',
  Commercial: 'bg-purple-100 text-purple-800',
  Guide: 'bg-gray-100 text-gray-800',
};

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const url = `https://www.freshcoat.co.nz/projects/${project.slug}`;

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: project.title,
    description: project.metaDescription,
    image: 'https://www.freshcoat.co.nz/og-image.jpg',
    url,
    datePublished: project.date,
    dateModified: project.date,
    author: {
      '@type': 'Organization',
      name: 'Freshcoat Painting',
      url: 'https://www.freshcoat.co.nz',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Freshcoat Painting',
      logo: { '@type': 'ImageObject', url: 'https://www.freshcoat.co.nz/og-image.jpg' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const faqStructuredData = project.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: project.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <Helmet>
        <title>{project.metaTitle}</title>
        <meta name="description" content={project.metaDescription} />
        <meta name="keywords" content={project.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={project.metaTitle} />
        <meta property="og:description" content={project.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleStructuredData)}</script>
        {faqStructuredData && (
          <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
        )}
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="bg-gradient-hero text-white py-12 lg:py-20">
            <div className="container mx-auto px-4">
              <a
                href="/projects"
                className="inline-flex items-center text-white/90 hover:text-white mb-6 text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Projects
              </a>
              <div className="flex items-center gap-3 mb-4">
                <Badge className={categoryColors[project.category] || 'bg-white/20 text-white'}>
                  {project.category}
                </Badge>
                {project.suburb && (
                  <span className="text-white/80 text-sm">{project.suburb}</span>
                )}
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold mb-4 max-w-4xl">
                {project.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-white/80">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(project.date).toLocaleDateString('en-NZ', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {project.readTime}
                </span>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  {project.excerpt}
                </p>

                {project.content.map((section, i) => (
                  <div key={i} className="mb-10">
                    {section.heading && (
                      <h2 className="text-2xl font-bold text-brand-gray mb-4">
                        {section.heading}
                      </h2>
                    )}
                    {section.body.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-foreground leading-relaxed mb-4 whitespace-pre-line"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}

                {/* FAQ */}
                {project.faq && project.faq.length > 0 && (
                  <div className="mt-14">
                    <h2 className="text-2xl font-bold text-brand-gray mb-6">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {project.faq.map((item, i) => (
                        <Card key={i} className="p-5">
                          <h3 className="font-semibold text-brand-gray mb-2">
                            {item.question}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          <Testimonials />

          {/* CTA */}
          <section className="py-16 bg-brand-red text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Get Your Free Painting Quote
              </h2>
              <p className="text-lg mb-8 opacity-95">
                Based in Christchurch, painting homes across Canterbury. Free fixed-price quotes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <QuoteForm>
                  <Button
                    size="lg"
                    className="text-xl px-12 py-6 font-semibold bg-white text-brand-red hover:bg-gray-100"
                  >
                    Get FREE Quote
                  </Button>
                </QuoteForm>
                <a href="tel:+6422036658">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-xl px-12 py-6 font-semibold bg-white text-brand-gray hover:bg-gray-100"
                  >
                    <Phone className="mr-2" /> 022 0366586
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProjectPage;
