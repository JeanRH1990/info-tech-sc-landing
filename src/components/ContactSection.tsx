import { useState } from "react";
import { Send, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Preencha os campos obrigatórios",
        description: "Nome, e-mail e mensagem são obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Mensagem enviada! ✅",
      description: "Entraremos em contato em breve. Obrigado!",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-20 md:py-28 section-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 text-section-dark-foreground">
            Entre em contato
          </h2>
          <p className="text-section-dark-foreground/60 mt-4 max-w-xl mx-auto">
            Envie uma mensagem ou nos encontre nas redes sociais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <div>
            {isSubmitted ? (
              <div className="text-center py-12 bg-section-dark-foreground/5 border border-section-dark-foreground/10 rounded-2xl">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold font-display text-section-dark-foreground mb-2">
                  Mensagem enviada!
                </h3>
                <p className="text-section-dark-foreground/60">
                  Obrigado pelo contato. Responderemos em breve!
                </p>
                <Button
                  variant="outline"
                  className="mt-6 border-section-dark-foreground/20 text-section-dark-foreground hover:bg-section-dark-foreground/10"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", message: "" });
                  }}
                >
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    name="name"
                    placeholder="Seu nome *"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={100}
                    className="bg-section-dark-foreground/5 border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus-visible:ring-primary"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu e-mail *"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength={255}
                    className="bg-section-dark-foreground/5 border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus-visible:ring-primary"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Seu telefone (opcional)"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={20}
                    className="bg-section-dark-foreground/5 border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus-visible:ring-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem *"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={1000}
                    rows={5}
                    className="bg-section-dark-foreground/5 border-section-dark-foreground/10 text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus-visible:ring-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                </Button>
              </form>
            )}
          </div>

          {/* Social links */}
          <div className="flex flex-col justify-center items-center lg:items-start gap-8">
            <div>
              <h3 className="text-lg font-bold font-display text-section-dark-foreground mb-2">
                Nos acompanhe nas redes
              </h3>
              <p className="text-section-dark-foreground/60 text-sm">
                Siga-nos para novidades e dicas de tecnologia
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-xs">
              <a
                href="https://www.instagram.com/info.tech.sc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-section-dark-foreground/5 border border-section-dark-foreground/10 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-section-dark-foreground group-hover:text-primary transition-colors">
                    Instagram
                  </p>
                  <p className="text-xs text-section-dark-foreground/50">
                    @info.tech.sc
                  </p>
                </div>
              </a>

              <a
                href="https://www.facebook.com/inf.tech.sc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-section-dark-foreground/5 border border-section-dark-foreground/10 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <Facebook className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-section-dark-foreground group-hover:text-primary transition-colors">
                    Facebook
                  </p>
                  <p className="text-xs text-section-dark-foreground/50">
                    Info TECH SC
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
