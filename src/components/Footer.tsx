import { Instagram, Facebook } from "lucide-react";
import logoNoBg from "@/assets/logo-no-bg.png";

const footerLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-hero border-t border-hero-foreground/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoNoBg} alt="Info TECH SC" className="h-10 w-auto" />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-hero-foreground/50 hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/info.tech.sc/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-hero-foreground/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-hero-foreground/60 hover:text-primary" />
            </a>
            <a
              href="https://www.facebook.com/inf.tech.sc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-hero-foreground/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-hero-foreground/60 hover:text-primary" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-hero-foreground/10 text-center">
          <p className="text-sm text-hero-foreground/40">
            © 2026 Info TECH SC — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
