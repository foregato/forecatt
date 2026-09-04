import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import ResultsSection from "@/components/ResultsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import WhyPricesSection from "@/components/WhyPricesSection";
import TrustBadges from "@/components/TrustBadges";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCta from "@/components/MobileCta";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhySection />
        <ResultsSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <PricingSection />
        <WhyPricesSection />
        <TrustBadges />
        <PortfolioSection />
        <ProcessSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCta />
    </>
  );
}
