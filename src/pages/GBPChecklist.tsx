import { Helmet } from '@/lib/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QuoteForm } from '@/components/QuoteForm';
import { Check, AlertTriangle, Star, Camera, FileText, MapPin, Phone, Clock, Globe, PenTool } from 'lucide-react';

const GBPChecklist = () => {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Google Business Profile Optimisation Checklist for Tradespeople in Christchurch',
    description:
      'A step-by-step checklist to optimise your Google Business Profile as a painter, decorator, or tradesperson in Christchurch — from setup to reviews and photos.',
    author: { '@type': 'Organization', name: 'Freshcoat Painting and Decorating' },
    publisher: {
      '@type': 'Organization',
      name: 'Freshcoat Painting and Decorating',
      logo: { '@type': 'ImageObject', url: 'https://www.freshcoat.co.nz/og-image.jpg' },
    },
    datePublished: '2026-05-29',
    dateModified: '2026-05-29',
    mainEntityOfPage: 'https://www.freshcoat.co.nz/google-business-profile-checklist',
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.freshcoat.co.nz/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Google Business Profile Checklist',
        item: 'https://www.freshcoat.co.nz/google-business-profile-checklist',
      },
    ],
  };

  const setupSteps = [
    { title: 'Claim or create your profile', desc: 'Go to business.google.com and claim your business. Use the exact trading name "Freshcoat Painting and Decorating" — consistency matters for NAP (Name, Address, Phone) citations across the web.' },
    { title: 'Select the correct primary category', desc: 'Choose "Painter" as your primary category. You can add secondary categories like "Interior painter", "Exterior painter", or "Commercial painter".' },
    { title: 'Add your service areas', desc: 'List every Christchurch suburb you cover: Fendalton, Merivale, Riccarton, Halswell, Cashmere, Sumner, Rolleston, etc. This helps you show up in "painters near me" searches in those areas.' },
    { title: 'Enter exact NAP details', desc: 'Use the same business name, address, and phone number (022 036 6586) everywhere online — website, Yellow, Builderscrack, NoCowboys, etc. Any inconsistency hurts rankings.' },
    { title: 'Write a keyword-rich description', desc: 'Use all 750 characters. Include: "Christchurch painters", "interior painting", "exterior painting", "roof painting", "commercial painting", "30+ years experience", and "free quotes".' },
    { title: 'Set your hours', desc: 'Add accurate opening hours. Even if you work by appointment, set standard hours (e.g., Mon–Fri 7am–6pm) and note "Closed" days clearly.' },
    { title: 'Add appointment/booking link', desc: 'Link to your website contact page or quote form. Freshcoat uses /contact or the quote modal — make it easy for customers to reach you directly from the profile.' },
    { title: 'Verify your listing', desc: 'Google will send a postcard with a PIN to your business address. This is mandatory — you cannot rank in the local pack without verification.' },
  ];

  const photoCategories = [
    { type: 'Logo', why: 'Reinforces brand recognition in search results' },
    { type: 'Cover photo', why: 'First impression — use your best exterior painting shot' },
    { type: 'Team / owner photo', why: 'Builds trust; people hire people, not businesses' },
    { type: 'Before & after gallery', why: 'The #1 reason people choose a painter — visual proof' },
    { type: 'Work-in-progress shots', why: 'Shows professionalism and attention to prep work' },
    { type: 'Tools & products', why: 'Signals quality (premium Resene / Dulux paints)' },
    { type: 'Vehicle with branding', why: 'Reinforces legitimacy and local presence' },
    { type: 'Customer testimonials with photos', why: 'Social proof that converts browsers into callers' },
  ];

  const reviewTactics = [
    { title: 'Ask immediately after completion', desc: 'Strike while the customer is happiest — ideally the same day you finish. Send a text with a direct review link.' },
    { title: 'Use a QR code on your invoice', desc: 'Print a QR code linking to your Google review page on every invoice and quote. Make it effortless.' },
    { title: 'Follow up once if needed', desc: 'Send a polite reminder 3–5 days later: "Hi [Name], if you have 30 seconds, a quick Google review really helps us grow. Link: [URL]"' },
    { title: 'Respond to every review', desc: 'Reply to every review — good and bad — within 24 hours. Use keywords naturally: "Thanks for the kind words about your Fendalton exterior repaint!"' },
    { title: 'Never buy or fake reviews', desc: 'Google aggressively filters fake reviews. A sudden spike of 10 five-star reviews with no text will get removed and can trigger a suspension.' },
  ];

  const postingSchedule = [
    { freq: 'Weekly', action: 'Add a photo of recent work with a short caption' },
    { freq: 'Fortnightly', action: 'Publish a "What We Do" post (interior, exterior, roof, commercial)' },
    { freq: 'Monthly', action: 'Share a seasonal tip or offer (e.g., winter interior painting special)' },
    { freq: 'Ongoing', action: 'Update Q&A with common customer questions and answers' },
  ];

  const commonMistakes = [
    'Using a residential address if you are a mobile service — use a real office or warehouse address if possible, or your home if that is your registered business address.',
    'Ignoring negative reviews — always respond professionally and offer to make it right.',
    'Keyword-stuffing the business name — "Freshcoat Painting and Decorating | Best Painters Christchurch" can get you suspended.',
    'Letting the profile go stale — profiles with no new photos or posts in 3+ months rank lower.',
    'Forgetting to add services and pricing — use the Services tab to list "Interior Painting", "Exterior Painting", "Roof Painting", etc. with starting prices.',
  ];

  return (
    <>
      <Helmet>
        <title>Google Business Profile Checklist for Tradespeople | Freshcoat</title>
        <meta
          name="description"
          content="Step-by-step checklist to optimise your Google Business Profile as a painter or tradesperson in Christchurch. From setup to reviews, photos, and posts."
        />
        <link rel="canonical" href="https://www.freshcoat.co.nz/google-business-profile-checklist" />
        <meta property="og:title" content="Google Business Profile Checklist for Tradespeople | Freshcoat" />
        <meta property="og:description" content="Optimise your Google Business Profile with this actionable checklist for painters and tradespeople in Christchurch." />
        <meta property="og:url" content="https://www.freshcoat.co.nz/google-business-profile-checklist" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
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
                <span>Google Business Profile Checklist</span>
              </nav>
              <h1 className="text-3xl lg:text-5xl font-bold mb-6">
                Google Business Profile Checklist for Tradespeople
              </h1>
              <p className="text-lg lg:text-xl opacity-95 leading-relaxed mb-8">
                A practical, step-by-step guide to ranking in the Google local pack as a painter or tradesperson in Christchurch. Most businesses skip half these steps — do them all and you will outrank 80% of competitors.
              </p>
              <QuoteForm>
                <Button variant="hero" size="lg" className="bg-green-600 hover:bg-green-700 text-white text-xl px-10 py-6 font-semibold">
                  Get FREE Quote
                </Button>
              </QuoteForm>
            </div>
          </section>

          {/* Why GBP matters */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-brand-gray text-center">
                Why Your Google Business Profile Matters More Than Your Website
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <Card className="p-6">
                  <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-brand-gray">46% of all Google searches</h3>
                  <p className="text-muted-foreground">are local intent. When someone searches "painters near me", the local pack (the map with 3 listings) gets clicked more than organic results.</p>
                </Card>
                <Card className="p-6">
                  <Phone className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-brand-gray">60% of mobile users</h3>
                  <p className="text-muted-foreground">call a business directly from the local pack without ever visiting the website. Your GBP is your new homepage.</p>
                </Card>
                <Card className="p-6">
                  <Clock className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-brand-gray">2–4 weeks</h3>
                  <p className="text-muted-foreground">is how fast a well-optimised GBP can start generating calls. Website SEO takes 4–8 months. GBP is the fastest win in local search.</p>
                </Card>
              </div>
            </div>
          </section>

          {/* Setup checklist */}
          <section className="py-16 bg-secondary/5">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray text-center">
                Phase 1: Setup & Verification
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Get the foundation right. A profile with missing fields or incorrect categories will struggle to rank regardless of how many reviews you collect.
              </p>
              <div className="space-y-6">
                {setupSteps.map((step, i) => (
                  <Card key={i} className="p-6 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-lg">
                        {i + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-brand-gray">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Photos */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray text-center">
                Phase 2: Photos — The #1 Ranking Factor You Control
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Businesses with 10+ photos get 42% more direction requests and 35% more website clicks. Fresh photos every 2 weeks signal to Google that you are active and legitimate.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {photoCategories.map((photo, i) => (
                  <Card key={i} className="p-5 flex items-start gap-3">
                    <Camera className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-brand-gray">{photo.type}</h3>
                      <p className="text-muted-foreground text-sm">{photo.why}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-brand-gray font-semibold flex items-center gap-2">
                  <PenTool className="w-5 h-5 text-blue-600" />
                  Pro tip: Rename your image files before uploading
                </p>
                <p className="text-muted-foreground mt-2">
                  Instead of <code className="bg-white px-2 py-0.5 rounded text-sm">IMG_4829.jpg</code>, use <code className="bg-white px-2 py-0.5 rounded text-sm">exterior-painting-fendalton-weatherboard-freshcoat.jpg</code>. Google reads filenames for context.
                </p>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section className="py-16 bg-secondary/5">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray text-center">
                Phase 3: Reviews — Social Proof That Sells
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Review quantity, velocity (how fast you get them), and response rate all factor into local ranking. Here is how Freshcoat built a 5.0-star profile with 7 reviews — and the playbook to scale to 50+.
              </p>
              <div className="space-y-6">
                {reviewTactics.map((tactic, i) => (
                  <Card key={i} className="p-6 flex gap-4">
                    <Star className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-brand-gray">{tactic.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{tactic.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-100">
                <p className="text-brand-gray font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  The "review gap" opportunity in Christchurch
                </p>
                <p className="text-muted-foreground mt-2">
                  Most Christchurch painters have 0–5 reviews. The top 3 in the local pack typically have 15–50. There is a massive opportunity to dominate by consistently asking every customer. A painter with 25 genuine 5-star reviews will outrank a competitor with a 10-year-old website and 2 reviews.
                </p>
              </div>
            </div>
          </section>

          {/* Posts & updates */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray text-center">
                Phase 4: Posts, Updates & Q&A
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Google rewards active profiles. Treat your GBP like a mini social media channel. Regular posts and Q&A answers boost relevance signals for your target keywords.
              </p>
              <div className="overflow-hidden rounded-lg shadow-medium bg-white">
                <table className="w-full">
                  <thead className="bg-brand-gray text-white">
                    <tr>
                      <th className="text-left px-6 py-4 text-lg">Frequency</th>
                      <th className="text-left px-6 py-4 text-lg">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {postingSchedule.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 text-base font-semibold text-brand-gray">{row.freq}</td>
                        <td className="px-6 py-4 text-base text-brand-gray">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-brand-gray">Post ideas that work</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>"Just finished this exterior repaint in Cashmere — full colour change from beige to Resene Half Sea Fog."</li>
                    <li>"Winter special: Book interior painting in June/July and save 10% on labour."</li>
                    <li>"FAQ: How long does roof paint last in Christchurch? Answer: 8–12 years with proper prep."</li>
                    <li>"New project starting: 4-bedroom new build in Rolleston. Follow for before & after photos."</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-brand-gray">Q&A to pre-populate</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-brand-gray">Q:</strong> Do you offer free quotes?<br /><strong className="text-brand-gray">A:</strong> Yes — we provide free, no-obligation on-site quotes across Christchurch.</li>
                    <li><strong className="text-brand-gray">Q:</strong> What areas do you service?<br /><strong className="text-brand-gray">A:</strong> All Christchurch suburbs including Fendalton, Merivale, Riccarton, Halswell, Sumner, and Rolleston.</li>
                    <li><strong className="text-brand-gray">Q:</strong> Are you licensed and insured?<br /><strong className="text-brand-gray">A:</strong> Yes — fully licensed, registered, and insured for residential and commercial work.</li>
                  </ul>
                </Card>
              </div>
            </div>
          </section>

          {/* Common mistakes */}
          <section className="py-16 bg-secondary/5">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-brand-gray text-center">
                Common Mistakes That Kill Your GBP Ranking
              </h2>
              <div className="space-y-4">
                {commonMistakes.map((mistake, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-red-100">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-brand-gray leading-relaxed">{mistake}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick checklist summary */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-brand-gray text-center">
                The 60-Second Weekly GBP Checklist
              </h2>
              <Card className="p-8 bg-green-50 border-green-200">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Add 1–2 new photos of recent work',
                    'Respond to any new reviews',
                    'Check for new Q&A and answer them',
                    'Post an update or offer',
                    'Verify hours are still accurate',
                    'Check insights for search terms customers used',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-brand-gray font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-brand-gray text-white text-center">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Need Help with Your Online Presence?
              </h2>
              <p className="text-lg mb-8 opacity-95">
                Freshcoat Painting and Decorating handles its own SEO, GBP, and marketing in-house. If you are a fellow tradesperson looking for a painter who understands digital marketing and delivers quality work — we would love to quote your next project.
              </p>
              <QuoteForm>
                <Button variant="hero" size="lg" className="bg-green-600 hover:bg-green-700 text-white text-xl px-10 py-6 font-semibold">
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

export default GBPChecklist;
