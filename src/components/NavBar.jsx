import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

export const NavBar = () => {
  const NavItem = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed z-50 transition-all duration-300 w-full",
        isScrolled ? "py-2  backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className=" flex items-center justify-between max-md:justify-evenly container max-w-7xl lg:px-20 md:px-15">
        <div className="">
          <a href="#hero" className="text-4xl font-semibold">
            Eldrian<span className="text-primary font-extrabold">AI</span>
          </a>
        </div>
        {/* Desktop Navbar */}
        <div className="flex justify-center lg:gap-9 max-md:hidden ">
          {NavItem.map((item, key) => {
            return (
              <a key={key} className="rounded-full py px-2" href={item.href}>
                {item.name}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button className="primary-button">Get Started</button>
          <button
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile Navbar */}
        <div
          className={cn(
            "fixed inset-0 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md z-40",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {NavItem.map((item, key) => (
              <a
                onClick={() => setIsMenuOpen((prev) => !prev)}
                key={key}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
