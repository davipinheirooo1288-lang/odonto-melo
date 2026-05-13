import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Sparkles, Smile, ShieldCheck, HeartPulse, Stethoscope, Baby, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  component: Servicos,
  head: () => ({
    meta: [
      { title: "Serviços | Odonto Melo - Itapipoca-CE" },
      { name: "description", content: "Implantes, lentes de contato, ortodontia, clareamento e reabilitação oral. Conheça todos os tratamentos da Clínica Odonto Melo." },
    ],
  }),
});

const WHATSAPP_URL = "https://wa.me/5588996992574";

function Servicos() {
  const categories = [
    {
      title: "Estética Avançada",
      tagline: "Sorriso de cinema",
      icon: Sparkles,
      items: [
        { name: "Lentes de Contato Dental", desc: "Facetas ultrafinas em cerâmica para um sorriso perfeito." },
        { name: "Facetas de Resina", desc: "Solução estética acessível com resultados imediatos." },
        { name: "Clareamento Dental", desc: "Até 6 tons mais claros em sessões seguras no consultório." },
        { name: "Onlay & Inlay", desc: "Restaurações estéticas que preservam o dente natural." },
      ],
    },
    {
      title: "Reabilitação Oral",
      tagline: "Função e estética devolvidas",
      icon: HeartPulse,
      items: [
        { name: "Implantes Dentários", desc: "Implantes osseointegrados de última geração." },
        { name: "Próteses Fixas e Removíveis", desc: "Encaixe perfeito com aparência natural." },
        { name: "Tratamento de Canal", desc: "Endodontia indolor com tecnologia rotatória." },
        { name: "Restaurações Estéticas", desc: "Resina composta de alta performance." },
      ],
    },
    {
      title: "Saúde & Prevenção",
      tagline: "Cuidado para a vida toda",
      icon: ShieldCheck,
      items: [
        { name: "Ortodontia", desc: "Aparelhos fixos, estéticos e alinhadores invisíveis." },
        { name: "Periodontia", desc: "Saúde da gengiva e tecidos de suporte." },
        { name: "Odontopediatria", desc: "Atendimento lúdico e preventivo para crianças." },
        { name: "Cirurgias", desc: "Extrações e cirurgias orais com mínima invasão." },
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary/40 py-20 lg:py-28 border-b">
        <div className="container px-6 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 font-semibold">Portfólio de Cuidados</span>
          <h1 className="font-serif text-4xl md:text-6xl text-primary mt-4 mb-6 leading-[1.05]">
            Tratamentos desenhados para o <span className="italic-serif">seu sorriso.</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Uma linha completa de procedimentos odontológicos com tecnologia de ponta, sempre com foco em conforto, estética natural e resultados duradouros.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-28">
        <div className="container px-6 space-y-24">
          {categories.map((cat, idx) => (
            <div key={idx} className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <cat.icon className="text-accent mb-6" size={36} strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-[0.25em] text-foreground/50 font-semibold">{cat.tagline}</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-primary mt-3 leading-tight">{cat.title}</h2>
                </div>
              </div>

              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border">
                {cat.items.map((item, i) => (
                  <div key={i} className="bg-card p-8 group hover:bg-secondary/40 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <Check className="text-accent mt-1 shrink-0" size={18} strokeWidth={2.5} />
                      <h3 className="font-serif text-xl text-primary">{item.name}</h3>
                    </div>
                    <p className="text-sm text-foreground/60 leading-relaxed pl-8">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container px-6 text-center max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            Não sabe por onde <span className="italic-serif">começar?</span>
          </h2>
          <p className="text-primary-foreground/70 mb-10">
            Agende uma avaliação. Vamos entender o que você deseja e desenhar o plano de tratamento ideal para o seu sorriso.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <Button size="lg" className="rounded-full px-8 h-14 bg-accent text-accent-foreground hover:bg-accent/90 gap-2 group">
              Agendar Avaliação
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
