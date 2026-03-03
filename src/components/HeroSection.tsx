import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
        {/* Floating shapes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 animate-float"
            style={{
              width: `${60 + i * 40}px`,
              height: `${60 + i * 40}px`,
              background: `radial-gradient(circle, hsl(312 100% 50% / ${0.3 - i * 0.03}), transparent)`,
              top: `${15 + i * 12}%`,
              left: `${10 + i * 14}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i * 1.5}s`,
            }}
          />
        ))}
        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`p-${i}`}
            className="absolute w-1 h-1 rounded-full bg-primary/30 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Watermark logo */}
      <img src="/logo.png" alt="" className="absolute opacity-[0.03] w-[600px] pointer-events-none select-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col items-center text-center gap-12">
        <div className={`max-w-4xl transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
            <span className="block animate-text-reveal" style={{ animationDelay: "0.2s" }}>Invisible</span>
            <span className="block animate-text-reveal" style={{ animationDelay: "0.5s" }}>Execution.</span>
            <span className="block text-gradient animate-text-reveal" style={{ animationDelay: "0.8s" }}>Scalable Power.</span>
          </h1>
          <p className={`text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-10 transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            White-label digital fulfillment engine built exclusively for agencies.
          </p>
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <button onClick={() => scrollTo("contact")} className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-lg animate-pulse-glow transition-transform hover:scale-105">
              Become a Partner
            </button>
            <button onClick={() => scrollTo("contact")} className="px-8 py-4 rounded-xl border border-foreground/20 text-foreground font-heading font-semibold text-lg hover:bg-primary hover:border-primary transition-all duration-300">
              Book Strategy Call
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={() => scrollTo("about")} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-scroll-indicator">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default HeroSection;
