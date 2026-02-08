import { Shield, HeartHandshake, Wrench } from "lucide-react";
import logoNoBg from "@/assets/logo-no-bg.png";

const differentials = [
  {
    icon: HeartHandshake,
    title: "Atendimento Personalizado",
    description: "Cada projeto recebe atenção dedicada às suas necessidades específicas.",
  },
  {
    icon: Shield,
    title: "Preço Justo",
    description: "Soluções profissionais com valores acessíveis para o seu negócio.",
  },
  {
    icon: Wrench,
    title: "Soluções Sob Medida",
    description: "Tecnologia adaptada à realidade e aos objetivos do seu empreendimento.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 section-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left: text */}
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 text-section-dark-foreground">
              Por que escolher a{" "}
              <span className="text-gradient">Info TECH SC</span>?
            </h2>
            <p className="text-section-dark-foreground/70 mt-5 leading-relaxed">
              A Info TECH SC nasceu da paixão por tecnologia e da vontade de ajudar 
              empresas e empreendedores a crescerem no mundo digital. Oferecemos 
              soluções práticas e eficientes, sempre com foco na qualidade e no 
              resultado para o cliente.
            </p>

            <div className="mt-10 space-y-6">
              {differentials.map((diff) => (
                <div key={diff.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <diff.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-display text-section-dark-foreground">
                      {diff.title}
                    </h3>
                    <p className="text-sm text-section-dark-foreground/60 mt-1">
                      {diff.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: logo showcase */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl scale-110" />
              <div className="relative bg-section-dark-foreground/5 border border-section-dark-foreground/10 rounded-3xl p-12 md:p-16">
                <img
                  src={logoNoBg}
                  alt="Info TECH SC Logo"
                  className="w-48 md:w-64 h-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
