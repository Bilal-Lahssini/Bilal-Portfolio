import { useState, useEffect, useRef } from "react"; // 1. useRef toegevoegd
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Over mij", href: "#overmij" },
  { label: "Skills", href: "#skills" },
  { label: "Projecten", href: "#projecten" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false); // Dynamische staat

  useEffect(() => {
    const handleScroll = () => {
      // We kijken naar de hoogte van het huidige venster (omdat je hero 'min-h-screen' is)
      const heroHeight = window.innerHeight;
      
      // Pas als de gebruiker voorbij de hero-sectie scrollt (min de hoogte van de navbar zelf), veranderen we de stijl
      if (window.scrollY > (heroHeight - 80)) {
        setIsScrolledPastHero(true);
      } else {
        setIsScrolledPastHero(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <nav 
          className={cn(
            "flex items-center justify-center gap-1 rounded-full px-2 h-12 transition-all duration-500 shadow-lg max-w-md w-full border",
            // Op het blauw blijft hij wit/transparant. Op het wit wordt hij lichtblauw/transparant met donkere letters.
            isScrolledPastHero 
              ? "bg-blue-500/10 backdrop-blur-lg border-blue-500/20 text-blue-600" 
              : "bg-white/10 backdrop-blur-md border-white/20 text-white/90"
          )}
        >
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              size="sm"
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "rounded-full transition-all duration-300 font-medium",
                isScrolledPastHero 
                  ? "text-blue-600/90 hover:text-blue-700 hover:bg-blue-500/15" 
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              {link.label}
            </Button>
          ))}

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "md:hidden rounded-full transition-colors duration-300",
              isScrolledPastHero ? "text-blue-600 hover:bg-blue-500/15" : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Sluit menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </nav>
      </header>

      {/* Mobiel menu */}
      <div
        className={cn(
          "fixed top-20 left-4 right-4 z-40 md:hidden overflow-hidden transition-all duration-300 ease-in-out rounded-2xl",
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div 
          className={cn(
            "p-4 flex flex-col gap-2 shadow-lg border transition-all duration-300 backdrop-blur-lg",
            isScrolledPastHero 
              ? "bg-white/80 border-blue-500/20" 
              : "bg-white/10 border-white/20"
          )}
        >
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              className={cn(
                "justify-start rounded-full",
                isScrolledPastHero 
                  ? "text-blue-600 hover:text-blue-700 hover:bg-blue-500/15" 
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
