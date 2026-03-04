import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import CaseStudySection from "@/components/CaseStudySection";
import ProcessSection from "@/components/ProcessSection";
import PricingCTA from "@/components/PricingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <CaseStudySection />
      <ProcessSection />
      <PricingCTA />
      <Footer />
    </div>
  );
};

export default Index;
