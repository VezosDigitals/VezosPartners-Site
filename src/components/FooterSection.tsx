const links = ["Services", "Why Vezos", "Process", /* "Case Studies", "Pricing" */, "FAQ", "Contact"];

const FooterSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase().replace(/\s+/g, "-"))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <img src="/logo.png" alt="Vezos Partners" className="h-12" />
        <div className="flex flex-wrap items-center justify-center gap-6">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Vezos Partners. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
