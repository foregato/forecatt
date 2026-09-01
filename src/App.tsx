import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import WhyPricesSection from "@/components/WhyPricesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhySection />
        <ServicesSection />
        <PricingSection />
        <WhyPricesSection />
        <PortfolioSection />
        <ProcessSection />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
