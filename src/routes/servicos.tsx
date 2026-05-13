import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Sparkles, Smile, UserCheck, HeartPulse, ShieldCheck, Zap } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  component: Servicos,
});

function Servicos() {
  const categories = [
    {
      title: "Estética Avançada",
      icon: <Sparkles className="text-primary" />,
      items: ["Facetas de Resina", "Lentes de Contato", "Clareamento Dental", "Onlay/Inlay"]
    },
    {
      title: "Reabilitação Oral",
      icon: <HeartPulse className="text-primary" />,
      items: ["Implantes", "Próteses", "Restaurações", "Tratamento de Canal"]
    },
    {
      title: "Prevenção e Saúde",
      icon: <ShieldCheck className="text-primary" />,
      items: ["Tratamento Periodontal", "Ortodontia", "Atendimento Infantil", "Cirurgias"]
    }
  ];

  return (
    <div className="py-24 md:py-32">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Portfólio de Cuidados</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">Tratamentos desenhados para o seu sorriso</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Oferecemos uma gama completa de serviços odontológicos, utilizando tecnologia de ponta para garantir resultados estéticos e funcionais.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1 p-10 bg-secondary/30 rounded-[2.5rem] sticky top-32">
                <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm">
                  {cat.icon}
                </div>
                <h2 className="text-3xl font-bold mb-4">{cat.title}</h2>
                <p className="text-muted-foreground mb-6">Procedimentos especializados com foco em precisão e conforto.</p>
                <Zap size={40} className="text-primary/10" />
              </div>
              
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {cat.items.map((item, i) => (
                  <Card key={i} className="p-8 border-none bg-background shadow-sm hover:shadow-elegant transition-all rounded-3xl flex items-center gap-4 group">
                    <div className="h-2 w-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                    <span className="text-xl font-semibold">{item}</span>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}