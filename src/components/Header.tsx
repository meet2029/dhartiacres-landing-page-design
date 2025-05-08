
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/f7e751d7-92b0-438a-b23c-403433aeed1f.png" 
            alt="Dhartiacres Logo" 
            className="h-10"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-dhartiacres-dark hover:text-dhartiacres-blue font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-dhartiacres-dark hover:text-dhartiacres-blue font-medium transition-colors"
          >
            About
          </a>
          <a
            href="#properties"
            className="text-dhartiacres-dark hover:text-dhartiacres-blue font-medium transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-dhartiacres-dark hover:text-dhartiacres-blue font-medium transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          variant="ghost"
          size="sm"
          className="md:hidden"
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 animate-fade-in">
            <nav className="flex flex-col items-center gap-4">
              <a
                href="#home"
                className="text-dhartiacres-dark hover:text-dhartiacres-blue font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-dhartiacres-dark hover:text-dhartiacres-blue font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#properties"
                className="text-dhartiacres-dark hover:text-dhartiacres-blue font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-dhartiacres-dark hover:text-dhartiacres-blue font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
