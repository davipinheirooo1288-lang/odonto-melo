import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Sparkles, Smile, ShieldCheck, HeartPulse, Stethoscope, Baby, Quote, MapPin, Clock, Phone } from "lucide-react";
import clinicHero from "@/assets/clinic-hero.jpg";
import clinicRoom from "@/assets/clinic-room.jpg";
import smileWoman from "@/assets/smile-woman.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5588996992574?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container px-6 pt-12 pb-20 lg:pt-20 lg:pb-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 mb-8">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-current" />)}
              </div>
              <span className="text-xs font-medium text-foreground/70">5,0 · 101 avaliações no Google</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.05] mb-8">
              Seu sorriso com <br />
              <span className="italic-serif">cuidado premium.</span>
            </h1>

            <p className="text-lg text-foreground/70 leading-relaxed mb-10 max-w-lg">
              Referência em odontologia em Itapipoca-CE. Tecnologia, conforto e o atendimento humano que você merece — com Dr. Pedro Victor e Dra. Bruna.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <Button size="lg" className="rounded-full px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group">
                  Agendar Consulta
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link to="/servicos">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-primary/20 hover:bg-secondary text-primary">
                  Ver Serviços
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="arch-mask overflow-hidden aspect-[4/5] shadow-elegant">
                <img src={clinicHero} alt="Recepção da Clínica Odonto Melo" className="w-full h-full object-cover" width={1024} height={1280} />
              </div>
              <div className="absolute -left-4 -bottom-6 lg:-left-10 lg:-bottom-8 bg-card rounded-2xl shadow-soft p-5 max-w-[220px] border">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                    <Smile className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-primary leading-none">+101</p>
                    <p className="text-xs text-foreground/60 mt-1">sorrisos transformados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="bg-primary text-primary-foreground">
          <div className="container px-6 py-12 grid grid-cols-2 lg:grid-cols-4 divide-x divide-primary-foreground/10">
            {[
              { num: "5,0", label: "Avaliação Google", italic: false },
              { num: "101+", label: "Pacientes Felizes", italic: false },
              { num: "10+", label: "Anos de Experiência", italic: false },
              { num: "Premium", label: "Atendimento Humanizado", italic: true },
            ].map((s, i) => (
              <div key={i} className="text-center px-4">
                <p className={`font-serif text-3xl md:text-4xl text-accent ${s.italic ? 'italic' : ''}`}>{s.num}</p>
                <p className="text-xs md:text-sm text-primary-foreground/70 mt-2 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container px-6">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 font-semibold">Nossas Especialidades</span>
              <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 leading-tight">
                Tratamentos pensados <br /> para <span className="italic-serif">cada detalhe</span> do seu sorriso.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-12 flex lg:items-end">
              <p className="text-foreground/60 leading-relaxed">
                Da estética avançada à reabilitação completa, oferecemos uma linha completa de procedimentos com tecnologia de ponta e zelo absoluto pelo paciente.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border">
            {[
              { title: "Lentes de Contato", desc: "A estética dos famosos com facetas ultrafinas que respeitam o dente natural.", icon: Sparkles },
              { title: "Implantes Dentários", desc: "Recupere a função e a confiança com implantes osseointegrados de última geração.", icon: ShieldCheck },
              { title: "Clareamento Dental", desc: "Sorriso até 6 tons mais claros em sessões rápidas e seguras no consultório.", icon: Smile },
              { title: "Ortodontia", desc: "Aparelhos fixos, estéticos e alinhadores invisíveis para todas as idades.", icon: Stethoscope },
              { title: "Próteses & Reabilitação", desc: "Próteses fixas e removíveis com encaixe perfeito e estética natural.", icon: HeartPulse },
              { title: "Odontopediatria", desc: "Cuidado lúdico e preventivo desenhado para o sorriso dos pequenos.", icon: Baby },
            ].map((s, i) => (
              <div key={i} className="bg-card p-10 group hover:bg-secondary/50 transition-colors">
                <div className="flex items-start justify-between mb-8">
                  <s.icon className="text-primary" size={28} strokeWidth={1.5} />
                  <ArrowRight size={20} className="text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-3">{s.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/servicos">
              <Button variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground px-8 h-12">
                Ver todos os serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT / EXPERIENCE */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <div className="container px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img src={smileWoman} alt="Sorriso de paciente" className="rounded-3xl aspect-[3/4] object-cover w-full" loading="lazy" width={1024} height={1280} />
              <img src={clinicRoom} alt="Sala de atendimento" className="rounded-3xl aspect-[3/4] object-cover w-full mt-12" loading="lazy" width={1024} height={1280} />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 font-semibold">Sobre a Clínica</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 mb-6 leading-tight">
              Uma experiência <span className="italic-serif">acolhedora</span> de ponta a ponta.
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Na Odonto Melo, cada paciente é recebido como convidado. Unimos um ambiente sofisticado a uma equipe técnica de excelência, conduzida pelos doutores Pedro Victor e Bruna, para que você se sinta seguro a cada visita.
            </p>

            <div className="space-y-5 mb-10">
              {[
                "Equipamentos digitais de última geração",
                "Protocolos rígidos de biossegurança",
                "Atendimento humanizado e sem dor",
                "Resultados estéticos naturais e duradouros",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full border-2 border-accent flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/sobre">
              <Button variant="link" className="text-primary text-base p-0 h-auto font-semibold gap-2 group">
                Conhecer nossa história
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 font-semibold">Depoimentos</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 leading-tight">
              O que nossos <span className="italic-serif">pacientes</span> dizem.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Raquel Albuquerque", text: "Não tenho palavras pra expressar o quanto amo o trabalho desse casal. Excelentes profissionais e uma atenção incrível com cada paciente." },
              { name: "Graziela Teixeira", text: "Atendimento impecável! A Dra. Bruna é muito atenciosa, cuidadosa e extremamente profissional, assim como o Dr. Pedro Victor." },
              { name: "Francisco Jailon", text: "Atendimento altamente humanizado e profissional. Parabéns pelo excelente trabalho! Por isso sou cliente." },
            ].map((t, i) => (
              <div key={i} className="bg-card border rounded-3xl p-10 flex flex-col">
                <Quote className="text-accent mb-6" size={32} strokeWidth={1.5} />
                <p className="text-foreground/80 leading-relaxed mb-8 flex-1">{t.text}</p>
                <div className="flex items-center justify-between pt-6 border-t">
                  <div>
                    <p className="font-serif text-lg text-primary">{t.name}</p>
                    <p className="text-xs text-foreground/50 mt-1">Paciente verificado</p>
                  </div>
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-current" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / VISIT */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-accent blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent blur-[120px]" />
        </div>

        <div className="container px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Visite-nos</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 leading-tight">
                Pronto para o seu <br />
                <span className="italic-serif">sorriso ideal?</span>
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-10 max-w-md">
                Estamos à disposição para te receber. Agende sua consulta e dê o primeiro passo para um sorriso que você vai amar mostrar.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <Button size="lg" className="rounded-full px-8 h-14 bg-accent text-accent-foreground hover:bg-accent/90 gap-2 group">
                  Falar no WhatsApp
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Endereço", value: "Av. Duque de Caxias, 948 — Centro, Itapipoca-CE" },
                { icon: Clock, label: "Horário", value: "Seg a Sex 08h–19h · Sáb 08h–12h" },
                { icon: Phone, label: "Telefone", value: "(88) 99699-2574" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-5 p-6 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur">
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <c.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent mb-1 font-semibold">{c.label}</p>
                    <p className="text-primary-foreground/90">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
