import { Helmet } from '@/lib/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, MessageSquare, ArrowRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const reviewUrl = 'https://g.page/r/CR4Ie-y0WfnAEBM/review';

const emailTemplates = [
  {
    label: 'Residential client',
    subject: 'Quick favour — a Google review from you would mean a lot',
    body: `Hi [Name],

Hope you are loving the freshly painted [rooms/house]!

If you have 30 seconds, a quick Google review would genuinely help our small local business. No need to write an essay — just honest feedback.

Leave your review here:
${reviewUrl}

Thanks again for choosing Freshcoat Painting and Decorating.

Michael Burke
Freshcoat Painting and Decorating
022 036 6586`,
  },
  {
    label: 'Commercial client',
    subject: 'Thanks for the project — would you leave us a Google review?',
    body: `Hi [Name],

Thanks for trusting Freshcoat Painting and Decorating with the [office/warehouse/building] repaint.

If you are happy with the result, would you mind leaving a quick Google review? It really helps other Christchurch businesses find us.

Leave your review here:
${reviewUrl}

Thanks,
Michael Burke
Freshcoat Painting and Decorating
022 036 6586`,
  },
  {
    label: 'SMS / Text follow-up',
    subject: '',
    body: `Hi [Name] — thanks again for choosing Freshcoat. If you have 30 seconds, a Google review would really help us grow: ${reviewUrl} Thanks, Michael`,
  },
];

const ReviewUs = () => {
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    navigator.clipboard.writeText(emailTemplates[index].body);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.freshcoat.co.nz/' },
      { '@type': 'ListItem', position: 2, name: 'Leave a Google Review', item: 'https://www.freshcoat.co.nz/review-us' },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Leave a Google Review | Freshcoat Painting and Decorating</title>
        <meta
          name="description"
          content="Happy with our painting? Leave Freshcoat Painting and Decorating a quick Google review. It takes 30 seconds and helps other Christchurch homeowners find us."
        />
        <link rel="canonical" href="https://www.freshcoat.co.nz/review-us" />
        <meta property="og:title" content="Leave a Google Review | Freshcoat Painting and Decorating" />
        <meta property="og:description" content="Leave Freshcoat Painting and Decorating a quick Google review. It takes 30 seconds and helps other Christchurch homeowners find us." />
        <meta property="og:url" content="https://www.freshcoat.co.nz/review-us" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="bg-brand-gray text-white py-16 lg:py-24">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <nav aria-label="Breadcrumb" className="text-sm text-gray-300 mb-4">
                <a href="/" className="hover:text-white">Home</a>
                <span className="mx-2">/</span>
                <span>Leave a Google Review</span>
              </nav>
              <h1 className="text-3xl lg:text-5xl font-bold mb-6">
                Leave a Google Review for Freshcoat
              </h1>
              <p className="text-lg lg:text-xl opacity-95 leading-relaxed mb-8">
                Your feedback helps other Christchurch homeowners and businesses choose a painter they can trust. It takes 30 seconds — and we read every review.
              </p>
              <a href={reviewUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="bg-green-600 hover:bg-green-700 text-white text-xl px-10 py-6 font-semibold">
                  <Star className="w-5 h-5 mr-2 fill-current" />
                  Write a Google Review
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </section>

          {/* Why reviews matter */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-brand-gray text-center">
                Why Your Review Matters
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <Card className="p-6">
                  <Star className="w-10 h-10 text-yellow-500 mx-auto mb-4 fill-current" />
                  <h3 className="text-xl font-bold mb-2 text-brand-gray">Helps locals find us</h3>
                  <p className="text-muted-foreground">Google reviews are a top ranking factor in the local map pack. Your review helps us show up for "painters near me".</p>
                </Card>
                <Card className="p-6">
                  <MessageSquare className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-brand-gray">Builds trust</h3>
                  <p className="text-muted-foreground">People read reviews before hiring a painter. Honest feedback from real customers is our best advertisement.</p>
                </Card>
                <Card className="p-6">
                  <ArrowRight className="w-10 h-10 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-brand-gray">Takes 30 seconds</h3>
                  <p className="text-muted-foreground">No account needed if you are signed into Google. Just click the button, choose a star rating, and write a sentence or two.</p>
                </Card>
              </div>
            </div>
          </section>

          {/* Tips for a great review */}
          <section className="py-16 bg-secondary/5">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray text-center">
                What to Write
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                The most helpful reviews mention what we painted and where. A review like "Michael painted our Fendalton villa exterior — excellent finish" helps us rank for local searches.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-brand-gray">Great review examples</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>"Michael repainted the interior of our Riccarton home. Professional, tidy, and the finish is perfect."</li>
                    <li>"Freshcoat painted our Cashmere weatherboard exterior. Great communication and stayed on budget."</li>
                    <li>"Roof restoration on our Merivale tile roof — looks brand new. Highly recommend."</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-brand-gray">What makes a review useful</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li><strong className="text-brand-gray">What we painted:</strong> interior, exterior, roof, commercial, etc.</li>
                    <li><strong className="text-brand-gray">Where:</strong> suburb or area in Christchurch</li>
                    <li><strong className="text-brand-gray">Outcome:</strong> quality, communication, timeliness, value</li>
                    <li><strong className="text-brand-gray">Star rating:</strong> honest 1–5 star rating</li>
                  </ul>
                </Card>
              </div>
            </div>
          </section>

          {/* Copy-paste templates */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray text-center">
                Copy-Paste Templates for Freshcoat
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Use these templates when asking past clients for a review. Replace the [brackets] and send via email or text.
              </p>
              <div className="space-y-6">
                {emailTemplates.map((template, i) => (
                  <Card key={i} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-brand-gray">{template.label}</h3>
                      <Button variant="outline" size="sm" onClick={() => handleCopy(i)}>
                        {copied === i ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                        {copied === i ? 'Copied' : 'Copy'}
                      </Button>
                    </div>
                    {template.subject && (
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>Subject:</strong> {template.subject}
                      </p>
                    )}
                    <pre className="bg-secondary/30 p-4 rounded-lg text-sm text-brand-gray whitespace-pre-wrap font-sans leading-relaxed">
                      {template.body}
                    </pre>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-brand-gray text-white">
            <div className="container mx-auto px-4 max-w-3xl text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to leave your review?
              </h2>
              <p className="text-lg opacity-95 mb-8">
                One honest review from you is worth more than any ad we could run. Thank you for supporting a local Christchurch business.
              </p>
              <a href={reviewUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="bg-green-600 hover:bg-green-700 text-white text-xl px-10 py-6 font-semibold">
                  <Star className="w-5 h-5 mr-2 fill-current" />
                  Leave a Google Review
                </Button>
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ReviewUs;
