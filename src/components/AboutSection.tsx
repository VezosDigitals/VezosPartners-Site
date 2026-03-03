import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Eye, Zap } from "lucide-react";

const pillars = [
  { icon: Shield, title: "NDA-Protected", desc: "Every engagement is fully confidential. Your clients never know we exist." },
  { icon: Eye, title: "Invisible by Design", desc: "We operate as your backend team — seamless, silent, and scalable." },
  { icon: Zap, title: "Built for Scale", desc: "From 1 campaign to 1,000 — our infrastructure grows with your agency." },
];

const AboutSection = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-heading text-sm tracking-widest uppercase mb-4 block">About Us</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            The Agency Behind <span className="text-gradient">Your Agency</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Vezos Partners is a white-label digital fulfillment company built exclusively for agencies. 
            We handle the execution — performance marketing, SEO, creative production, development, and more — 
            so you can focus on growth, client relationships, and scaling your brand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`glass-card rounded-2xl p-8 text-center transition-all duration-700 hover:border-primary/40 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <p.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
