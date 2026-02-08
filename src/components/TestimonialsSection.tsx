import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Dono de Restaurante",
    text: "A Info TECH SC criou um site incrível para o meu restaurante. O atendimento foi excelente e o resultado superou minhas expectativas!",
    initials: "CM",
  },
  {
    name: "Ana P.",
    role: "Empreendedora",
    text: "Configuraram toda a rede Wi-Fi da minha loja em poucas horas. Agora tenho internet estável em todos os pontos. Recomendo muito!",
    initials: "AP",
  },
  {
    name: "Roberto S.",
    role: "Consultor",
    text: "A integração do WhatsApp Business profissionalizou meu atendimento. Os clientes elogiam a rapidez nas respostas. Serviço nota 10!",
    initials: "RS",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 text-foreground">
            O que dizem nossos clientes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A satisfação dos nossos clientes é o que nos motiva a continuar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-border/50 hover:border-primary/20 transition-all duration-300"
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-card-foreground/80 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm text-card-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
