import { HeroSection } from "../sections/HeroSection";
import { NavBar } from "../components/NavBar";
import { TrustedBy } from "../components/TrustedBy.";
import { ServicesSection } from "../sections/ServicesSection";
import { AboutSection } from "../sections/AboutSection";
import { PricingSection } from "../sections/PricingSection";
import { CallToAction } from "../sections/CallToAction";
import { Footer } from "../sections/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Theme Toggle */}
      {/* NavBar */}
      <NavBar />
      <ScrollToTop />
      {/* Main Content */}
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <CallToAction />
      {/* Footer */}
      <Footer />
    </div>
  );
};
