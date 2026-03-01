import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Server, Eye, Shield, Layers, Users, Clock, CheckCircle } from "lucide-react";

const points = [
  { icon: Server, title: "Unified Backend System", desc: "One integrated platform powering all service verticals." },
  { icon: Eye, title: "True White-Label Execution", desc: "Your brand, your client relationships — we stay invisible." },
  { icon: Shield, title: "NDA-Protected Operations", desc: "Every engagement is fully confidential by default." },
  { icon: Layers, title: "Scalable Infrastructure", desc: "Handle 10 or 10,000 campaigns without missing a beat." },
  { icon: Users, title: "Dedicated Account Managers", desc: "A single point of contact for every partnership." },
  { icon: Clock, title: "Time-Zone Aligned Teams", desc: "We work when you work. No midnight Slack messages." },
  { icon: CheckCircle, title: "Predictable Delivery Framework", desc: "SOPs, milestones, and deadlines you can rely on." },
];

const WhyVezosSection = () => {
  const { ref, visible } = useScrollAnimation(0.1);

  return (
    <section id="why-vezos" ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left text */}
        <div className="flex-1">
          <h2 className={`font-heading text-4xl md:text-5xl font-bold mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Why <span className="text-gradient">Vezos</span>
          </h2>
          <div className="space-y-6">
            {points.map((p, i) => (
              <div
                key={p.title}
                className="flex gap-4 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms`, opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)" }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right floating elements */}
        <div className={`flex-1 relative min-h-[400px] hidden lg:block transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          {/* Floating UI cards */}
          {[
            { top: "5%", left: "10%", delay: "0s", label: "API Gateway", w: "140px" },
            { top: "20%", left: "55%", delay: "0.5s", label: "Auth Module", w: "130px" },
            { top: "45%", left: "5%", delay: "1s", label: "Analytics", w: "120px" },
            { top: "40%", left: "50%", delay: "1.5s", label: "CDN Layer", w: "110px" },
            { top: "70%", left: "25%", delay: "2s", label: "Database", w: "130px" },
            { top: "65%", left: "60%", delay: "2.5s", label: "Queue", w: "100px" },
          ].map((el, i) => (
            <div
              key={i}
              className="absolute glass-card px-4 py-3 rounded-xl text-xs text-muted-foreground animate-float"
              style={{ top: el.top, left: el.left, animationDelay: el.delay, width: el.w }}
            >
              <div className="w-2 h-2 rounded-full bg-primary/50 mb-1" />
              {el.label}
            </div>
          ))}
          {/* Connecting lines (decorative) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-primary/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-primary/5" />
        </div>
      </div>
    </section>
  );
};

export default WhyVezosSection;
