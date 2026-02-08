import { Globe, Wifi, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description:
      "Criação de sites modernos, responsivos e otimizados para SEO. Sua presença online profissional para atrair mais clientes.",
    features: ["Design responsivo", "Otimizado para SEO", "Carregamento rápido"],
  },
  {
    icon: Wifi,
    title: "Redes Wi-Fi e Cabeadas",
    description:
      "Instalação e configuração de redes para empresas e residências. Internet estável e segura em todos os ambientes.",
    features: ["Cobertura total", "Segurança avançada", "Suporte técnico"],
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business",
    description:
      "Integração e configuração inicial do WhatsApp Business. Automatize seu atendimento e profissionalize sua comunicação.",
    features: ["Configuração completa", "Catálogo de produtos", "Respostas rápidas"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 text-foreground">
            O que oferecemos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Soluções completas em tecnologia para o crescimento do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold font-display mb-3 text-card-foreground">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
