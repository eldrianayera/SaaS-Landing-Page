import { ArrowUpFromLineIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ScrollToTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
      setIsScrolled(bottom);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={cn(
        "z-35 fixed bottom-3 right-4 animate-bounce bg-foreground p-2 rounded-full",
        !isScrolled && "hidden"
      )}
    >
      <ArrowUpFromLineIcon className="text-background" />
    </button>
  );
};
