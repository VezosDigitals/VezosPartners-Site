import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyVezosSection from "@/components/WhyVezosSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <WhyVezosSection />
    <ProcessSection />
    <TeamSection />
    {/* <TestimonialsSection /> */}
    {/* <PricingSection/> */}
    <FAQSection />
    <ContactSection />
    <FooterSection />
  </main>
);

export default Index;
