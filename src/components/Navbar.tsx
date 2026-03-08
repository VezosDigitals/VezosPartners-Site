import { useState, useEffect } from "react";

const links = ["Services", "Why Vezos", "Process", "Case Studies", "Pricing", "FAQ", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id.toLowerCase().replace(/\s+/g, "-"))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass py-3" : "py-5 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <img src="/logo.png" alt="Vezos Partners" className="h-16 md:h-20" />
        
        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              {l}
            </button>
          ))}
          <button onClick={() => scrollTo("Contact")} className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold animate-pulse-glow transition-transform hover:scale-105">
            Become a Partner
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden flex flex-col gap-1.5" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={`w-6 h-0.5 bg-foreground transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-xl p-6 flex flex-col gap-4">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="text-left text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </button>
          ))}
          <button onClick={() => scrollTo("Contact")} className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold mt-2">
            Become a Partner
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
