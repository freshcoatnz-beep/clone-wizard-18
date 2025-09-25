import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Clock, Shield, Award, Users, Palette } from 'lucide-react';

const About = () => {
  const features = [
    "30+ Years of hands-on experience",
    "Personalised service from first call to completion",
    "Genuine advice from qualified painters",
    "Free no-obligation quotes",
    "Transparent pricing with no hidden costs",
    "Premium product range with latest technology",
    "Environmentally sustainable practices",
    "OH&S compliance and workplace safety priority",
    "Professional, punctual and courteous painters",
    "Fully licensed, registered and insured",
    "Exceptional value for money"
  ];

  const values = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Communication",
      description: "We offer value not only in money, but in communications and business conduct. We build relationships through word of mouth and returning clients. We encourage on-site meetings to discuss your needs and offer the best solutions available."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Safety",
      description: "We respect your property and space. Our tradesmen are valued team members, not contractors. All staff are inducted through OH&S standards and we place high importance on workplace safety for both our team and clients."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Time",
      description: "We value your time and manage projects to agreed timelines and schedules. We often work with clients to limit business disruptions and schedule work during holidays or out of hours to suit you."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-brand-gray">
                We are the leaders
              </h1>
              <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
                Freshcoat Painting is a leading full-service Christchurch based painting company with over 30 years of experience. Our work goes beyond colour swatches and paint techniques, we create curb appeal and stunning spaces you will love.
              </p>
              <Button variant="cta" size="lg">
                Get a quote
              </Button>
            </div>
            <div className="flex justify-center">
              <Card className="p-8 bg-white shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-gray mb-2">30+ Years</h3>
                  <p className="text-muted-foreground">Of Experience</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-brand-gray text-center">
              A Local Christchurch Painting Company with A Reputation for Excellence
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We have an impressive portfolio of clients ranging from residential property owners, hotel chains, shopping centres and large public corporations. Excellence is the hallmark of our work and our reputation for offering value is well known. We consistently deliver quality results because we complete projects neatly, on time and our team of meticulous qualified painters have a talented eye for detail.
              </p>
              
              <p>
                We deliver a comprehensive range of painting services for your home, business or development projects that will address all of your painting needs. We manage various painting projects both interior and exterior including restoration work, painting new developments, maintenance services, protective coatings, wood treatments, anti-graffiti systems and spray finishes.
              </p>
              
              <p className="font-semibold text-brand-gray">
                We help you increase the value and appearance of your assets because presentation is everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-brand-gray text-center">
              What Can You Expect When Working with Us?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-lg font-medium text-brand-gray">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="cta" size="lg">
                Get a quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Excellence is our mission. We create experiences, not just services, with stunning work and exceptional customer service.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-gray">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-brand-gray text-center">
              Our Vision & Values
            </h2>
            
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-brand-gray">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Freshcoat Painting our vision is to create an experience, not just a service. Our primary focus is on producing stunning and admirable work while providing our customers with exceptional customer service. Quality work, transparency and ethical interactions are what we base our services on. We strive for consistency and reliability in addition to superior trade skills.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  We value the environment and actively encourage the use of 'greener' paint systems and use ethical disposal and usage practices. We continually research the latest systems available and stay ahead of evolving technology so that we can provide the most up to date information and guidance for our clients.
                </p>
              </Card>
              
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-brand-gray">Our Values</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What sets us apart from our competition is our commitment to quality workmanship and maintaining a high standard on all our paint jobs, irrespective if the project is a small home reno or a large-scale development project. We dedicate and commit the same level of professionalism, integrity, expertise and attention to detail across all jobs undertaken.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Cleanliness is important on a job site and we endeavour to keep it tidy and presentable at all times. This not only keeps the workplace safe for our clients but our painters as well. With over 30 years of painting experience, we bring the highest level of expertise to any project and strive to achieve the look you desire for your property.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Christchurch's 'Go-To' Painting Company
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We produce quality work for satisfied customers time after time. Get your obligation-free quote today.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Get FREE Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;