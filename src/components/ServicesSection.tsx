import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Search, Share2, Palette, Film, Award, Globe } from "lucide-react";

const services = [
  { icon: TrendingUp, title: "Performance Marketing", desc: "Paid media campaigns that drive measurable ROI across all channels." },
  { icon: Search, title: "Search Optimization", desc: "Technical and content SEO strategies that build lasting organic growth." },
  { icon: Share2, title: "Social Media", desc: "End-to-end social management, content creation, and community building." },
  { icon: Palette, title: "Creative Production", desc: "High-impact ad creatives, landing pages, and conversion assets." },
  { icon: Film, title: "Design & Animation", desc: "Motion graphics, UI design, and visual storytelling at scale." },
  { icon: Award, title: "Branding & Authority", desc: "Brand positioning, PR strategies, and thought leadership content." },
  { icon: Globe, title: "Website & App Development", desc: "Custom web and mobile solutions with modern tech stacks." },
];

const ServicesSection = () => {
  const { ref, visible } = useScrollAnimation(0.1);

  return (
    <section id="services" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`font-heading text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Core Services
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
            Seven verticals. One invisible backend. Everything your clients need, delivered under your brand.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass-card p-6 rounded-2xl group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:glow-border"
              style={{ transitionDelay: `${i * 80}ms`, opacity: visible ? 1 : 0, transform: visible ? undefined : "translateY(20px)" }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <s.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
