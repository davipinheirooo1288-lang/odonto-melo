import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageSquare, Clock, Calendar } from "lucide-react";

export const Route = createFileRoute("/contato")({
  component: Contato,
});

function Contato() {
  const contactInfo = [
    { icon: <Phone />, label: "Telefone", value: "(88) 99699-2574" },
    { icon: <MessageSquare />, label: "WhatsApp", value: "(88) 99699-2574" },
    { icon: <MapPin />, label: "Endereço", value: "Av. Duque de Caxias, 948, Centro, Itapipoca - CE" },
  ];

  return (
    <div className="py-24 md:py-32">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Canais de Atendimento</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8">Vamos conversar sobre o seu sorriso?</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                Nossa equipe está pronta para te atender com agilidade e carinho. Escolha a melhor forma de contato para você.
              </p>
              
              <div className="grid gap-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-secondary/30 rounded-3xl group hover:bg-secondary/50 transition-colors">
                    <div className="p-4 bg-white rounded-2xl text-primary shadow-sm group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-xl font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-primary text-primary-foreground p-12 rounded-[3rem] shadow-elegant relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                <div className="relative z-10">
                  <Calendar className="mb-6 h-12 w-12 text-accent" />
                  <h2 className="text-3xl font-bold mb-6">Horário de Atendimento</h2>
                  <div className="space-y-4 text-lg">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>Segunda a Sexta</span>
                      <span className="font-bold">08:00 – 19:00</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>Sábado</span>
                      <span className="font-bold">08:00 – 12:00</span>
                    </div>
                    <div className="flex justify-between opacity-60">
                      <span>Domingo</span>
                      <span className="font-bold">Fechado</span>
                    </div>
                  </div>
                  <Button size="lg" className="w-full mt-10 bg-white text-primary hover:bg-accent hover:text-accent-foreground rounded-full font-bold h-14">
                    Agendar pelo WhatsApp
                  </Button>
                </div>
              </div>

              <div className="p-8 border-2 border-dashed border-primary/20 rounded-[2.5rem] text-center">
                <Clock className="mx-auto mb-4 text-primary opacity-40" size={32} />
                <p className="text-muted-foreground">Respostas em até 30 minutos durante o horário comercial.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}