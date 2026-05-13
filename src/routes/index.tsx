import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, Smile, Sparkles, UserCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-secondary/10 pt-20">
        <div className="container px-4 text-center z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 animate-in fade-in slide-in-from-bottom-2">
            ODONTOLOGIA PREMIUM EM ITAPIPOCA
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-primary leading-[1.1]">
            Sorrisos que <br /> transformam vidas.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            A Odonto Melo une tecnologia de ponta e cuidado humanizado para oferecer a você a melhor experiência odontológica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-primary hover:bg-primary/90 shadow-elegant">
              Agendar Consulta
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg border-primary/20 hover:bg-primary/5">
              Conhecer Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-background">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Nossas Especialidades</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">Soluções completas para sua saúde e estética bucal</h2>
            </div>
            <Button variant="link" className="text-primary text-lg p-0 h-auto font-bold flex items-center gap-2">
              Ver todos os serviços <Sparkles size={20} />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Implantes Dentários", desc: "Recupere sua confiança e função mastigatória com tecnologia de ponta.", icon: <Sparkles className="text-primary" /> },
              { title: "Lentes de Contato", desc: "A estética dos famosos ao seu alcance com facetas de resina e cerâmica.", icon: <Smile className="text-primary" /> },
              { title: "Ortodontia Moderna", desc: "Alinhamento preciso e discreto para todas as idades.", icon: <UserCheck className="text-primary" /> },
              { title: "Harmonização", desc: "Realce sua beleza natural com procedimentos seguros e personalizados.", icon: <Sparkles className="text-primary" /> },
              { title: "Canal e Periodontia", desc: "Tratamentos especializados para preservar sua saúde bucal.", icon: <Sparkles className="text-primary" /> },
              { title: "Odontopediatria", desc: "Cuidado lúdico e preventivo para o sorriso dos pequenos.", icon: <Smile className="text-primary" /> },
            ].map((service, index) => (
              <Card key={index} className="group p-10 border-none bg-secondary/30 hover:bg-secondary/60 transition-all duration-500 rounded-3xl cursor-pointer">
                <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="container px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">O que nossos pacientes sentem</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Raquel Albuquerque", text: "Não tenho palavras pra expressar o quanto Amoooooo o trabalho desse casal, excelentes profissionais e sem falar a atenção que tem com cada paciente." },
              { name: "Graziela Teixeira", text: "Atendimento impecável! A Dra. Bruna é muito atenciosa, cuidadosa e extremamente profissional, assim como o Dr. Pedro Victor." },
              { name: "Maria Macedo", text: "Ambiente tranquilo, que nos deixa mais à vontade e seguros em certos procedimentos. Equipe excelente!" },
            ].map((t, i) => (
              <div key={i} className="p-10 bg-white/10 rounded-[2.5rem] backdrop-blur-xl border border-white/10 hover:bg-white/15 transition-colors">
                <div className="flex text-accent mb-6 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-current" />)}
                </div>
                <p className="text-xl mb-8 leading-relaxed font-medium">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    {t.name[0]}
                  </div>
                  <p className="font-bold text-lg">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 bg-secondary/20">
        <div className="container px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
            <span className="text-2xl font-bold">⭐ 5.0 Google Reviews</span>
            <span className="text-2xl font-bold">Itapipoca - CE</span>
            <span className="text-2xl font-bold">+101 Avaliações</span>
            <span className="text-2xl font-bold">Atendimento Humanizado</span>
          </div>
        </div>
      </section>
    </div>
  );
}