import { Helmet } from '@/lib/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { QuoteForm } from '@/components/QuoteForm';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const categoryColors: Record<string, string> = {
  Interior: 'bg-blue-100 text-blue-800',
  Exterior: 'bg-green-100 text-green-800',
  Roof: 'bg-amber-100 text-amber-800',
  Commercial: 'bg-purple-100 text-purple-800',
  Guide: 'bg-gray-100 text-gray-800',
};

const Projects = () => {
  const title = 'Projects & Painting Guides | Freshcoat Painting Christchurch';
  const description =
    'Browse real painting projects and expert guides from Freshcoat Painting. Before & after stories, cost guides, and tips from Christchurch\'s trusted painters.';
  const url = 'https://www.freshcoat.co.nz/projects';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url,
    isPartOf: { '@type': 'WebSite', name: 'Freshcoat Painting', url: 'https://www.freshcoat.co.nz' },
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="bg-gradient-hero text-white py-16 lg:py-24">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl lg:text-5xl font-bold mb-6">
                Projects & Painting Guides
              </h1>
              <p className="text-lg lg:text-xl max-w-3xl mx-auto mb-8 opacity-95">
                Real projects, honest pricing guides and expert advice from Christchurch painters with 30+ years experience.
              </p>
              <QuoteForm>
                <Button
                  size="lg"
                  className="text-xl px-12 py-6 font-semibold bg-green-600 hover:bg-green-700 text-white"
                >
                  Get FREE Quote
                </Button>
              </QuoteForm>
            </div>
          </section>

          {/* Project Cards */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <a key={project.slug} href={`/projects/${project.slug}`}>
                    <Card className="h-full hover:shadow-medium transition-shadow overflow-hidden flex flex-col">
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className={categoryColors[project.category] || 'bg-gray-100 text-gray-800'}>
                            {project.category}
                          </Badge>
                          {project.suburb && (
                            <span className="text-sm text-muted-foreground">{project.suburb}</span>
                          )}
                        </div>
                        <h2 className="font-bold text-xl mb-3 text-brand-gray leading-snug">
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground text-sm mb-4 flex-grow">
                          {project.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(project.date).toLocaleDateString('en-NZ', {
                              month: 'short',
                              year: 'numeric',
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {project.readTime}
                          </span>
                        </div>
                        <div className="mt-4 flex items-center text-brand-red font-medium text-sm">
                          Read more <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-brand-red text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg mb-8 opacity-95">
                Get a free, fixed-price quote — usually within 24 hours.
              </p>
              <QuoteForm>
                <Button size="lg" className="text-xl px-12 py-6 font-semibold bg-white text-brand-red hover:bg-gray-100">
                  Get FREE Quote
                </Button>
              </QuoteForm>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
