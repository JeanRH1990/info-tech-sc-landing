import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto custa um site profissional?",
    answer:
      "O valor varia de acordo com a complexidade e as funcionalidades desejadas. Entre em contato conosco para um orçamento personalizado e sem compromisso. Trabalhamos com preços justos e acessíveis.",
  },
  {
    question: "Vocês atendem em qual região?",
    answer:
      "Atendemos em Santa Catarina, com foco na região de Joinville e arredores. Para serviços de criação de sites e configuração de WhatsApp Business, podemos atender remotamente em todo o Brasil.",
  },
  {
    question: "Como funciona a integração do WhatsApp Business?",
    answer:
      "Realizamos a configuração completa da sua conta comercial no WhatsApp Business, incluindo perfil profissional, catálogo de produtos/serviços, mensagens automáticas e respostas rápidas. O processo é rápido e simples.",
  },
  {
    question: "Qual o prazo de entrega de um site?",
    answer:
      "O prazo varia conforme o projeto, mas em geral entregamos sites de uma página (landing page) em até 7 dias úteis. Projetos mais complexos podem levar de 2 a 4 semanas.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer:
      "Sim! Oferecemos suporte técnico após a entrega de todos os nossos serviços. Estamos sempre disponíveis para ajudar com dúvidas, ajustes e manutenções necessárias.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 text-foreground">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
