import { HeroSection } from "../sections/HeroSection";
import { NavBar } from "../components/Navbar";
import { TrustedBy } from "../components/TrustedBy.";

export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Theme Toggle */}
      {/* NavBar */}
      <NavBar />
      {/* Main Content */}
      <HeroSection />
      <TrustedBy />
      {/* Footer */}
    </div>
  );
};
