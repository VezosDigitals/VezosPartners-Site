import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const studies = [
  {
    title: "E-Commerce Brand Scaling",
    metric: "+25% Sales Growth",
    metricValue: 25,
    desc: "Performance marketing overhaul for a DTC brand through a mid-size agency.",
    data: [
      { m: "Jan", v: 40 }, { m: "Feb", v: 45 }, { m: "Mar", v: 52 },
      { m: "Apr", v: 58 }, { m: "May", v: 65 }, { m: "Jun", v: 78 },
    ],
  },
  {
    title: "SaaS Lead Generation",
    metric: "+3.8x ROAS",
    metricValue: 380,
    desc: "Multi-channel paid media campaign delivering exceptional return on ad spend.",
    data: [
      { m: "Jan", v: 20 }, { m: "Feb", v: 35 }, { m: "Mar", v: 50 },
      { m: "Apr", v: 62 }, { m: "May", v: 70 }, { m: "Jun", v: 85 },
    ],
  },
  {
    title: "B2B Organic Growth",
    metric: "+60% Organic Visibility",
    metricValue: 60,
    desc: "Full-spectrum SEO engagement driving qualified organic traffic at scale.",
    data: [
      { m: "Jan", v: 30 }, { m: "Feb", v: 38 }, { m: "Mar", v: 42 },
      { m: "Apr", v: 55 }, { m: "May", v: 68 }, { m: "Jun", v: 80 },
    ],
  },
];

const CaseStudiesSection = () => {
  const { ref, visible } = useScrollAnimation(0.1);

  return (
    <section id="case-studies" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`font-heading text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Case Studies
          </h2>
          <p className={`text-muted-foreground transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
            Real results, delivered invisibly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((s, i) => (
            <div
              key={s.title}
              className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-all duration-500"
              style={{ transitionDelay: `${i * 150}ms`, opacity: visible ? 1 : 0, transform: visible ? undefined : "translateY(20px)" }}
            >
              <div className="text-3xl font-heading font-bold text-primary mb-1">{s.metric}</div>
              <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{s.desc}</p>
              <div className="h-40 w-full">
                {visible && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={s.data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                      <XAxis dataKey="m" tick={{ fontSize: 10, fill: "hsl(0 0% 40%)" }} axisLine={false} tickLine={false} />
                      <YAxis hide domain={[0, 100]} />
                      <Bar dataKey="v" fill="hsl(312, 100%, 50%)" radius={[4, 4, 0, 0]} opacity={0.8} animationDuration={1500} animationEasing="ease-out" />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
