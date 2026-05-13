import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageCircle, Instagram, Facebook, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contato")({
  component: Contato,
  head: () => ({
    meta: [
      { title: "Contato | Odonto Melo - Itapipoca-CE" },
      { name: "description", content: "Agende sua consulta na Clínica Odonto Melo. Av. Duque de Caxias, 948, Centro, Itapipoca-CE. (88) 99699-2574." },
    ],
  }),
});

const WHATSAPP_URL = "https://wa.me/5588996992574?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";

function Contato() {
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
      {/* Hero */}
      <section className="bg-secondary/40 py-20 lg:py-28 border-b">
        <div className="container px-6 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 font-semibold">Vamos conversar</span>
          <h1 className="font-serif text-4xl md:text-6xl text-primary mt-4 mb-6 leading-[1.05]">
            Estamos prontos para te <span className="italic-serif">receber.</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Escolha o canal que preferir. Nossa equipe responde com agilidade e carinho.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="container px-6 grid lg:grid-cols-12 gap-10">
          {/* Contact channels */}
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

          {/* Hours */}
          <div className="lg:col-span-5">
            <div className="bg-secondary/40 rounded-3xl p-10 border lg:sticky lg:top-28">
              <span className="text-xs uppercase tracking-[0.25em] text-accent-foreground/70 font-semibold">Horários</span>
              <h2 className="font-serif text-3xl text-primary mt-3 mb-8 leading-tight">
                Quando você pode <span className="italic-serif">nos visitar.</span>
              </h2>
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
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container px-6">
          <div className="rounded-3xl overflow-hidden border aspect-[16/7]">
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
    </div>
  );
}
