import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CounterSection from "@/components/CounterSection";
import ServicesSection from "@/components/ServicesSection";
import WhyVezosSection from "@/components/WhyVezosSection";
import ProcessSection from "@/components/ProcessSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <CounterSection />
    <ServicesSection />
    <WhyVezosSection />
    <ProcessSection />
    <CaseStudiesSection />
    <TestimonialsSection />
    <PricingSection />
    <FAQSection />
    <ContactSection />
    <FooterSection />
  </main>
);

export default Index;
