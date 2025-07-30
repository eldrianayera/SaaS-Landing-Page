import { HeroSection } from "../sections/HeroSection";
import { NavBar } from "../components/Navbar";
import { TrustedBy } from "../components/TrustedBy.";
import { ServicesSection } from "../sections/ServicesSection";
import { AboutSection } from "../sections/AboutSection";
import { PricingSection } from "../sections/PricingSection";
import { CallToAction } from "../sections/CallToAction";
import { Footer } from "../sections/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Theme Toggle */}
      {/* NavBar */}
      <NavBar />
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
