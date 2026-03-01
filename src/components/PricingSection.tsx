import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    desc: "For agencies starting to scale",
    features: ["Up to 3 service verticals", "Weekly reporting", "Email support", "Standard SLA", "Basic white-label assets"],
    highlighted: false,
  },
  {
    name: "Standard",
    desc: "For growing agencies",
    features: ["Up to 5 service verticals", "Bi-weekly strategy calls", "Dedicated account manager", "Priority SLA", "Custom white-label reports", "Slack integration"],
    highlighted: true,
  },
  {
    name: "Premium",
    desc: "For enterprise agencies",
    features: ["All 7 service verticals", "Weekly strategy calls", "Senior account team", "Fastest SLA", "Full brand customization", "API access", "Quarterly business reviews"],
    highlighted: false,
  },
];

const PricingSection = () => {
  const { ref, visible } = useScrollAnimation(0.1);

  return (
    <section id="pricing" ref={ref} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`font-heading text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Service Plans
          </h2>
          <p className={`text-muted-foreground transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
            Flexible engagement models for every stage of growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`glass-card p-8 rounded-2xl transition-all duration-700 ${p.highlighted ? "md:-translate-y-4 glow-border" : ""}`}
              style={{ transitionDelay: `${i * 150}ms`, opacity: visible ? 1 : 0, transform: visible ? (p.highlighted ? "translateY(-16px)" : undefined) : "translateY(20px)" }}
            >
              <h3 className="font-heading text-2xl font-bold mb-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>
              <ul className="space-y-3 mb-8">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-heading font-semibold transition-all duration-300 ${
                  p.highlighted
                    ? "bg-primary text-primary-foreground hover:scale-105 animate-pulse-glow"
                    : "border border-border hover:border-primary hover:text-primary"
                }`}
              >
                Custom Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
