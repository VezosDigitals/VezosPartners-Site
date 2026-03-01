import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CEO", agency: "Growth Collective", quote: "Vezos became our invisible backend. Our clients think we have a team of 50 — we have 8." },
  { name: "Marcus Wright", role: "Founder", agency: "Apex Digital", quote: "We scaled from 12 to 45 clients in 6 months without hiring a single person. Vezos made it possible." },
  { name: "Elena Rodriguez", role: "Managing Director", agency: "Nova Agency", quote: "The NDA-protected execution gives us complete confidence. Our clients never know, and that's the point." },
  { name: "David Kim", role: "Partner", agency: "Kinetic Media", quote: "Predictable delivery, consistent quality, zero drama. Exactly what we needed to scale." },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">What Partners Say</h2>

        <div className="relative">
          <div className="overflow-hidden">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${i === active ? "opacity-100 translate-x-0" : "opacity-0 absolute inset-0 translate-x-8"}`}
              >
                <div className={`glass-card p-8 md:p-12 rounded-2xl text-center ${i === active ? "glow-border" : ""}`}>
                  <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center text-2xl font-heading font-bold text-primary">
                    {t.name[0]}
                  </div>
                  <p className="text-lg md:text-xl text-foreground/90 mb-8 italic leading-relaxed">"{t.quote}"</p>
                  <div className="font-heading font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role} · {t.agency}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => setActive(p => (p - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-primary w-6" : "bg-muted-foreground/30"}`} />
              ))}
            </div>
            <button onClick={() => setActive(p => (p + 1) % testimonials.length)} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
