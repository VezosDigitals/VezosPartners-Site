import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { q: "Do you work with end clients?", a: "No. Vezos Partners exclusively serves agencies. We never engage with your end clients directly. Your client relationships remain 100% yours." },
  { q: "Do you sign NDAs?", a: "Absolutely. Every partnership begins with a comprehensive NDA. Confidentiality is foundational to our operating model." },
  { q: "Can you take over existing projects?", a: "Yes. We regularly onboard in-progress campaigns and projects. Our team conducts a thorough audit and creates a seamless transition plan." },
  { q: "What communication tools do you use?", a: "We adapt to your workflow — Slack, Teams, WhatsApp, or email. We integrate into your existing communication stack." },
  { q: "Do you provide staging servers?", a: "Yes. For development projects, we provide dedicated staging environments for review before any deliverable goes live." },
  //{ q: "What payment methods are accepted?", a: "We accept wire transfers, ACH, and credit card payments. Monthly and quarterly billing cycles are available." },
  //{ q: "Can your team work in different time zones?", a: "Yes. We have team members across multiple time zones and align working hours to your agency's schedule for real-time collaboration." },
];

const FAQSection = () => {
  const { ref, visible } = useScrollAnimation(0.1);

  return (
    <section id="faq" ref={ref} className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className={`font-heading text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          FAQ
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className={`glass-card rounded-xl px-6 border-0 transition-all duration-700`}
              style={{ transitionDelay: `${i * 80}ms`, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(15px)" }}
            >
              <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline hover:text-primary transition-colors py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
