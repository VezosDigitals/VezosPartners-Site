import { useEffect, useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const counters = [
  { end: 150, suffix: "+", label: "Active Agency Partners" },
  { end: 1200, suffix: "+", label: "Campaigns Delivered" },
  { end: 98, suffix: "%", label: "Client Retention Rate" },
  { end: 7, suffix: "+", label: "Digital Service Categories" },
];

function AnimatedNumber({ end, suffix, started }: { end: number; suffix: string; started: boolean }) {
  const [val, setVal] = useState(0);
  const frame = useRef<number>();

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * end));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => { if (frame.current) cancelAnimationFrame(frame.current); };
  }, [started, end]);

  return <>{val.toLocaleString()}{suffix}</>;
}

const CounterSection = () => {
  const { ref, visible } = useScrollAnimation(0.3);

  return (
    <section id="counters" ref={ref} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {counters.map((c, i) => (
          <div
            key={c.label}
            className="text-center transition-all duration-700"
            style={{ transitionDelay: `${i * 150}ms`, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
          >
            <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
              <AnimatedNumber end={c.end} suffix={c.suffix} started={visible} />
            </div>
            <div className="text-sm text-muted-foreground">{c.label}</div>
            <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-primary/30 glow-magenta-sm" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
