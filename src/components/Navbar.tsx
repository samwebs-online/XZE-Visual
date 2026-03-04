import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type { FC } from "react";
import { Menu, X } from "lucide-react";

const Navbar: FC<{ openCalendly?: () => void }> = ({ openCalendly }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (id === "book") {
      if (openCalendly) {
        openCalendly();
      } else {
        window.dispatchEvent(new CustomEvent("open-calendly"));
      }
      return;
    }
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
          XZE Visual
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("work")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Work
          </button>
          <button onClick={() => scrollToSection("process")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Process
          </button>
          <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
          <button
            onClick={() => scrollToSection("book")}
            className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4 animate-fade-in">
          <button onClick={() => scrollToSection("work")} className="block text-sm text-muted-foreground hover:text-foreground">Work</button>
          <button onClick={() => scrollToSection("process")} className="block text-sm text-muted-foreground hover:text-foreground">Process</button>
          <Link to="/pricing" onClick={() => setIsOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">Contact</Link>
          <button
            onClick={() => scrollToSection("book")}
            className="block text-sm bg-primary text-primary-foreground px-4 py-2 rounded-md w-full text-center"
          >
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
