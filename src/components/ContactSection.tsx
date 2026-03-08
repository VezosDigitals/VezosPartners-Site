import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, visible } = useScrollAnimation(0.1);

  return (
    <section id="contact" ref={ref} className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className={`font-heading text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Build Your <span className="text-gradient">Invisible Backend.</span>
          </h2>
        </div>

        {submitted ? (
          <div className="glass-card p-12 rounded-2xl text-center">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="font-heading text-2xl font-bold mb-2">Message Sent</h3>
            <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form
            action="https://formsubmit.co/vezospartners@gmail.com"
            method="POST"
            className={`glass-card p-8 md:p-10 rounded-2xl space-y-5 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={window.location.href} />
            <input type="hidden" name="_subject" value="New Contact from Vezos Partners Website" />
            <div className="grid md:grid-cols-2 gap-5">
              <input required name="name" placeholder="Name" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
              <input required name="agency" placeholder="Agency Name" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
            <input required type="email" name="email" placeholder="Email" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            <input name="services" placeholder="Services Required" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            <textarea required rows={4} name="message" placeholder="Message" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
            <button
              type="submit"
              className="relative w-full py-4 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-lg overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] animate-pulse-glow"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
