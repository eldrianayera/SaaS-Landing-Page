import { HeroSection } from "../sections/HeroSection";
import { NavBar } from "../components/Navbar";

export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Theme Toggle */}
      {/* NavBar */}
      <NavBar />
      {/* Main Content */}
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      {/* Footer */}
    </div>
  );
};
