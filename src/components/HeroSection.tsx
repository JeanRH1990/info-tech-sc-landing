import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import coverPhoto from "@/assets/cover-photo.png";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center section-dark overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={coverPhoto}
          alt="Info TECH SC - Capa"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero/95 to-hero/80" />
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary-glow/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Soluções em Tecnologia
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 animate-fade-in text-hero-foreground">
            Transforme seu negócio com{" "}
            <span className="text-gradient">tecnologia profissional</span>
          </h1>

          <p className="text-lg md:text-xl text-hero-foreground/70 mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed">
            Sites profissionais, redes Wi-Fi e cabeadas, e integração do WhatsApp Business. 
            Soluções sob medida para impulsionar o seu empreendimento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              onClick={() => scrollTo("#servicos")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 gap-2 group"
            >
              Ver Serviços
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#contato")}
              className="border-hero-foreground/20 text-hero-foreground hover:bg-hero-foreground/10 text-base px-8"
            >
              Entre em Contato
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-hero-foreground/40" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
