import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const team = [
  {
    name: "Aditya Prasad",
    role: "Co-Founder",
    image: "/images/aditya-prasad.png",
    points: [
      "Taking decisions for the long term vision of the business",
      "Bringing resources that are valuable",
    ],
  },
  {
    name: "Agrim Thevar Jain",
    role: "Co-Founder",
    image: "/images/agrim-thevar-jain.jpg",
    points: [
      "Overseeing operations, ensuring quality control",
      "Strategic planning and task management",
    ],
  },
  {
    name: "Karan Kaushal",
    role: "Chief Operating Officer (COO)",
    image: "/images/karan-kaushal.webp",
    points: [
      "Overseeing daily operations and execution",
      "Streamlining processes and improving efficiency",
      "Driving team performance and accountability",
      "Ensuring alignment with business strategy and growth goals",
    ],
  },
];

const TeamSection = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="team" className="relative py-28 md:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-heading text-sm tracking-widest uppercase mb-4 block">Our Team</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            The People Behind <span className="text-gradient">Vezos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`glass-card rounded-2xl p-8 text-center transition-all duration-700 hover:border-primary/40 group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${300 + i * 200}ms` }}
            >
              <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-5">{member.role}</p>
              <ul className="text-muted-foreground text-sm space-y-2 text-left">
                {member.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-primary mt-1 text-xs">▸</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
