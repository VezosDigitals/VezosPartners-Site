const links = ["Services", "Why Vezos", "Process", "FAQ", "Contact"];

const FooterSection = () => {
  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase().replace(/\s+/g, "-"))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo */}
        <img src="/logo.png" alt="Vezos Partners" className="h-12" />

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </button>
          ))}
        </div>

        {/* Contact Buttons */}
        <div className="flex items-center gap-4">
          
          {/* Phone Button */}
          <a
            href="tel:+916207398003"
            className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition"
          >
            Call Us
          </a>

          {/* Email Button */}
          <a
            href="mailto:hello@vezosdigitals.com"
            className="px-5 py-2 rounded-full border border-border text-sm text-foreground hover:bg-muted transition"
          >
            hello@vezosdigitals.com
          </a>

        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} Vezos Partners. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
