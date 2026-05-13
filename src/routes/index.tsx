import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Star, ArrowRight, Sparkles, Smile, ShieldCheck, HeartPulse, Stethoscope,
  Baby, Quote, MapPin, Clock, Phone, Check, Award, Heart,
  MessageCircle, Instagram, Facebook
} from "lucide-react";
import clinicHero from "@/assets/clinic-hero.jpg";
import clinicRoom from "@/assets/clinic-room.jpg";
import smileWoman from "@/assets/smile-woman.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5588996992574?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";

function Index() {
  const serviceCategories = [
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

  const days = [
    { d: "Segunda-feira", h: "08:00 – 19:00" },
    { d: "Terça-feira", h: "08:00 – 19:00" },
    { d: "Quarta-feira", h: "08:00 – 19:00" },
    { d: "Quinta-feira", h: "08:00 – 19:00" },
    { d: "Sexta-feira", h: "08:00 – 19:00" },
    { d: "Sábado", h: "08:00 – 12:00" },
    { d: "Domingo", h: "Fechado", closed: true },
  ];

  return (
    <div>
      {/* ── HERO ── */}
      <section id="inicio" className="relative overflow-hidden">
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
              <a href="#servicos">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-primary/20 hover:bg-secondary text-primary">
                  Ver Serviços
                </Button>
              </a>
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

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="py-24 lg:py-32 bg-background">
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

          {/* Cards resumo */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border mb-20">
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

          {/* Categorias detalhadas */}
          <div className="space-y-24">
            {serviceCategories.map((cat, idx) => (
              <div key={idx} className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-28">
                    <cat.icon className="text-accent mb-6" size={36} strokeWidth={1.5} />
                    <span className="text-xs uppercase tracking-[0.25em] text-foreground/50 font-semibold">{cat.tagline}</span>
                    <h3 className="font-serif text-3xl md:text-4xl text-primary mt-3 leading-tight">{cat.title}</h3>
                  </div>
                </div>
                <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border">
                  {cat.items.map((item, i) => (
                    <div key={i} className="bg-card p-8 group hover:bg-secondary/40 transition-colors">
                      <div className="flex items-start gap-3 mb-3">
                        <Check className="text-accent mt-1 shrink-0" size={18} strokeWidth={2.5} />
                        <h4 className="font-serif text-xl text-primary">{item.name}</h4>
                      </div>
                      <p className="text-sm text-foreground/60 leading-relaxed pl-8">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="py-24 lg:py-32 bg-secondary/40">
        <div className="container px-6 grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img src={smileWoman} alt="Sorriso de paciente" className="rounded-3xl aspect-[3/4] object-cover w-full" loading="lazy" width={1024} height={1280} />
              <img src={clinicRoom} alt="Sala de atendimento" className="rounded-3xl aspect-[3/4] object-cover w-full mt-12" loading="lazy" width={1024} height={1280} />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 font-semibold">Nossa História</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 mb-6 leading-tight">
              Excelência que nasce da <span className="italic-serif">paixão.</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6">
              A Odonto Melo foi criada por Dr. Pedro Victor e Dra. Bruna com o desejo de oferecer em Itapipoca um atendimento odontológico de outro nível — onde tecnologia, sofisticação e acolhimento andam juntos.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Reconhecidos pela atenção aos detalhes, pelo carinho com cada paciente e pela busca constante por aperfeiçoamento, formaram uma equipe que trata cada sorriso como único.
            </p>
            <div className="space-y-4">
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
          </div>
        </div>

        {/* Valores */}
        <div className="container px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 font-semibold">Nossos Valores</span>
            <h3 className="font-serif text-4xl md:text-5xl text-primary mt-4 leading-tight">
              O que nos move <span className="italic-serif">todos os dias.</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Inovação", desc: "Atualizados com o que há de mais moderno na odontologia mundial." },
              { icon: Heart, title: "Humanização", desc: "Entendemos seus medos para um atendimento sem dor e acolhedor." },
              { icon: ShieldCheck, title: "Segurança", desc: "Protocolos rigorosos de biossegurança e esterilização." },
            ].map((v, i) => (
              <div key={i} className="bg-card border rounded-3xl p-10">
                <v.icon className="text-accent mb-6" size={32} strokeWidth={1.5} />
                <h4 className="font-serif text-2xl text-primary mb-3">{v.title}</h4>
                <p className="text-foreground/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
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

      {/* ── CONTATO ── */}
      <section id="contato" className="py-24 lg:py-32 bg-secondary/40">
        <div className="container px-6">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 font-semibold">Vamos conversar</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 mb-4 leading-tight">
              Estamos prontos para te <span className="italic-serif">receber.</span>
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              Escolha o canal que preferir. Nossa equipe responde com agilidade e carinho.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Canais */}
            <div className="lg:col-span-7 space-y-4">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: "(88) 99699-2574", href: WHATSAPP_URL, accent: true },
                { icon: Phone, label: "Telefone", value: "(88) 99699-2574", href: "tel:+5588996992574" },
                { icon: MapPin, label: "Endereço", value: "Av. Duque de Caxias, 948, Centro — Itapipoca-CE", href: "https://maps.google.com/?q=Av.+Duque+de+Caxias,+948+Itapipoca" },
                { icon: Instagram, label: "Instagram", value: "@clinicaodontomelo", href: "https://instagram.com/clinicaodontomelo" },
                { icon: Facebook, label: "Facebook", value: "/clinicaodontomelo1", href: "https://facebook.com/clinicaodontomelo1" },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-6 p-6 rounded-2xl border transition-all group ${c.accent ? 'bg-primary text-primary-foreground border-primary hover:bg-primary/90' : 'bg-card hover:border-primary/40'}`}
                >
                  <div className={`h-14 w-14 rounded-full flex items-center justify-center shrink-0 ${c.accent ? 'bg-accent/20 text-accent' : 'bg-secondary text-primary'}`}>
                    <c.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-xs uppercase tracking-[0.2em] font-semibold mb-1 ${c.accent ? 'text-accent' : 'text-foreground/50'}`}>{c.label}</p>
                    <p className={`font-serif text-xl ${c.accent ? '' : 'text-primary'}`}>{c.value}</p>
                  </div>
                  <ArrowRight size={20} className={`${c.accent ? 'text-accent' : 'text-primary/30'} group-hover:translate-x-1 transition-transform`} />
                </a>
              ))}
            </div>

            {/* Horários */}
            <div className="lg:col-span-5">
              <div className="bg-card rounded-3xl p-10 border lg:sticky lg:top-28">
                <span className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 font-semibold">Horários</span>
                <h3 className="font-serif text-3xl text-primary mt-3 mb-8 leading-tight">
                  Quando você pode <span className="italic-serif">nos visitar.</span>
                </h3>
                <div className="space-y-3">
                  {days.map((d, i) => (
                    <div key={i} className={`flex justify-between text-sm py-2 border-b border-border/60 last:border-0 ${d.closed ? 'opacity-50' : ''}`}>
                      <span className="text-foreground/70">{d.d}</span>
                      <span className="font-medium text-primary">{d.h}</span>
                    </div>
                  ))}
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="block mt-8">
                  <Button size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 h-14">
                    Agendar pelo WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="mt-16 rounded-3xl overflow-hidden border aspect-[16/7]">
            <iframe
              title="Localização Odonto Melo"
              src="https://www.google.com/maps?q=Av.+Duque+de+Caxias,+948,+Centro,+Itapipoca,+CE&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
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
