import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Award, Heart, ShieldCheck, ArrowRight, Check } from "lucide-react";
import clinicHero from "@/assets/clinic-hero.jpg";
import clinicRoom from "@/assets/clinic-room.jpg";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
  head: () => ({
    meta: [
      { title: "Sobre | Odonto Melo - Itapipoca-CE" },
      { name: "description", content: "Conheça a história da Clínica Odonto Melo, conduzida por Dr. Pedro Victor e Dra. Bruna em Itapipoca-CE." },
    ],
  }),
});

const WHATSAPP_URL = "https://wa.me/5588996992574";

function Sobre() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary/40 py-20 lg:py-28 border-b">
        <div className="container px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 font-semibold">Nossa História</span>
            <h1 className="font-serif text-4xl md:text-6xl text-primary mt-4 mb-6 leading-[1.05]">
              Excelência que nasce da <span className="italic-serif">paixão.</span>
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              A Odonto Melo foi criada por Dr. Pedro Victor e Dra. Bruna com o desejo de oferecer em Itapipoca um atendimento odontológico de outro nível — onde tecnologia, sofisticação e acolhimento andam juntos.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={clinicHero} alt="Recepção da clínica" className="rounded-3xl aspect-[3/4] object-cover" loading="lazy" width={1024} height={1280} />
            <img src={clinicRoom} alt="Sala de atendimento" className="rounded-3xl aspect-[3/4] object-cover mt-12" loading="lazy" width={1024} height={1280} />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 font-semibold">Quem conduz</span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mt-3 leading-tight">
              Dr. Pedro Victor <br />& <span className="italic-serif">Dra. Bruna</span>
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-foreground/70 leading-relaxed text-lg">
            <p>
              Um casal de cirurgiões-dentistas apaixonados pela profissão, comprometidos em entregar resultados que combinam ciência, arte e cuidado humano em cada atendimento.
            </p>
            <p>
              Reconhecidos pela atenção aos detalhes, pelo carinho com cada paciente e pela busca constante por aperfeiçoamento, formaram uma equipe que trata cada sorriso como único.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {[
                "Ambiente planejado para o seu conforto",
                "Equipe técnica altamente qualificada",
                "Tecnologia de última geração",
                "Resultados naturais e duradouros",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-base text-foreground/80">
                  <Check className="text-accent mt-1 shrink-0" size={18} strokeWidth={2.5} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="container px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 font-semibold">Nossos Valores</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 leading-tight">
              O que nos move <span className="italic-serif">todos os dias.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Inovação", desc: "Atualizados com o que há de mais moderno na odontologia mundial." },
              { icon: Heart, title: "Humanização", desc: "Entendemos seus medos para um atendimento sem dor e acolhedor." },
              { icon: ShieldCheck, title: "Segurança", desc: "Protocolos rigorosos de biossegurança e esterilização." },
            ].map((v, i) => (
              <div key={i} className="bg-card border rounded-3xl p-10">
                <v.icon className="text-accent mb-6" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-primary mb-3">{v.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container px-6 text-center max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            Venha nos <span className="italic-serif">conhecer.</span>
          </h2>
          <p className="text-primary-foreground/70 mb-10">
            Será um prazer recebê-lo na nossa clínica em Itapipoca.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <Button size="lg" className="rounded-full px-8 h-14 bg-accent text-accent-foreground hover:bg-accent/90 gap-2 group">
              Agendar Visita
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
