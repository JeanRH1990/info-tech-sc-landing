import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoNoBg from "@/assets/logo-no-bg.png";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          <img src={logoNoBg} alt="Info TECH SC" className="h-10 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-hero-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            onClick={() => scrollTo("#contato")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Fale Conosco
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-hero-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-hero/98 backdrop-blur-md border-t border-border/10 animate-fade-in">
          <nav className="container mx-auto flex flex-col gap-3 py-4 px-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-sm font-medium text-hero-foreground/80 hover:text-primary transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => scrollTo("#contato")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2"
            >
              Fale Conosco
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
