import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const faqs = [
  {
    question: 'How much does house painting cost in Christchurch?',
    answer:
      'Interior painting in Christchurch typically ranges from $35–$55 per square metre, while exterior painting ranges from $45–$80 per square metre depending on surface condition, access, and paint choice. A standard 3-bedroom home interior repaint usually costs between $6,000 and $12,000. Freshcoat Painting provides free, no-obligation written quotes so you know the exact price upfront.',
  },
  {
    question: 'How long does it take to paint a house?',
    answer:
      'A full interior repaint of a 3-bedroom home generally takes 5–10 working days, while a full exterior repaint takes 7–14 days depending on weather, prep work required, and the size of the property. Single rooms can often be completed in 1–2 days.',
  },
  {
    question: 'What is the best time of year to paint a house exterior in Christchurch?',
    answer:
      'The best time for exterior painting in Christchurch is from October to April, when temperatures are consistently above 10°C and humidity is lower. Spring and autumn are ideal — paint cures properly and you avoid frost. We can paint year-round on dry days, but winter projects are scheduled carefully around the weather.',
  },
  {
    question: 'Do you offer a guarantee on your painting work?',
    answer:
      'Yes — every Freshcoat Painting job comes with a 5-year workmanship guarantee. We are also fully insured and only use premium paints from Resene, Dulux, and Wattyl, which carry their own product warranties.',
  },
  {
    question: 'Do I need to move furniture before the painters arrive?',
    answer:
      'No, our team will move furniture away from walls and protect everything with drop sheets and plastic covers. We treat your home with care and put everything back exactly where it was when the job is finished.',
  },
  {
    question: 'Which suburbs in Christchurch do you service?',
    answer:
      'We service all of Christchurch and Canterbury, including Riccarton, Merivale, Fendalton, Papanui, Ilam, Burnside, Cashmere, St Albans, Halswell, and surrounding areas. If you are unsure whether we cover your suburb, get in touch — we travel across the wider Canterbury region.',
  },
  {
    question: 'Do you provide free quotes?',
    answer:
      'Yes, all quotes are free and come with no obligation. We visit your property, discuss your needs, and provide a detailed written quote covering preparation, paint, labour, and timeframe.',
  },
  {
    question: 'What paint brands do you use?',
    answer:
      'We exclusively use premium New Zealand paint brands: Resene, Dulux, and Wattyl. These offer the best durability, colour retention, and finish quality for the Christchurch climate.',
  },
];

export const FAQ = () => {
  return (
    <section className="py-16 bg-secondary/5" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-brand-gray">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Answers to common questions about our painting services in Christchurch.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-gray">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};