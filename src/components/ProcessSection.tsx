import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Cpu, Package } from "lucide-react";

const steps = [
  { icon: Target, title: "Strategy Alignment", desc: "We map your service needs, SOPs, and delivery expectations." },
  { icon: Cpu, title: "Backend Execution", desc: "Our specialists execute campaigns across all verticals." },
  { icon: Package, title: "White-Label Delivery", desc: "You receive branded reports, assets, and results — ready for your clients." },
];

const ProcessSection = () => {
  const { ref, visible } = useScrollAnimation(0.2);

  return (
    <section id="process" ref={ref} className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`font-heading text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            How It Works
          </h2>
          <p className={`text-muted-foreground transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
            Three steps to invisible execution.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5">
            <div
              className="h-full rounded-full"
              style={{
                backgroundColor: visible ? "hsl(312 100% 50% / 0.3)" : "transparent",
                width: visible ? "100%" : "0%",
                transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.5s ease"
              }}
            />
          </div>

          {steps.map((s, i) => (
            <div
              key={s.title}
              className="flex-1 text-center transition-all duration-700"
              style={{ transitionDelay: `${i * 300}ms`, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
            >
              <div className="w-24 h-24 rounded-full glass-card mx-auto flex items-center justify-center mb-6 glow-magenta-sm">
                <s.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
