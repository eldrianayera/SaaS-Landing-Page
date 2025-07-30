import { Sun } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";

export const NavBar = () => {
  return (
    <div className="flex items-center justify-evenly container p-5 ">
      <div>
        <a href="#hero" className="text-4xl font-semibold">
          Eldrian<span className="text-primary font-extrabold">AI</span>
        </a>
      </div>
      <div className="flex gap-7">
        <a href="#hero">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#pricing">Pricing</a>
      </div>
      <div className="flex items-center gap-3">
        <button className="primary-button">Get Started</button>
        <ThemeToggle />
      </div>
    </div>
  );
};
