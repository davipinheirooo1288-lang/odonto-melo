import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, Smile, Sparkles, UserCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container relative z-10 px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-primary">
            Clínica Odonto Melo
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Excelência em saúde bucal, unindo técnica avançada e atendimento humanizado em Itapipoca.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90">
              Agendar Consulta
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-primary/20">
              Ver Serviços
            </Button>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-24 container px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Nossos Especialidades</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Implantes", icon: <Sparkles className="h-8 w-8 text-primary" /> },
            { title: "Facetas de Resina", icon: <Smile className="h-8 w-8 text-primary" /> },
            { title: "Ortodontia", icon: <UserCheck className="h-8 w-8 text-primary" /> },
            { title: "Atendimento Infantil", icon: <Smile className="h-8 w-8 text-primary" /> },
            { title: "Clareamento", icon: <Sparkles className="h-8 w-8 text-primary" /> },
            { title: "Cirurgia", icon: <UserCheck className="h-8 w-8 text-primary" /> },
          ].map((service) => (
            <Card key={service.title} className="p-6 border-none shadow-sm hover:shadow-elegant transition-all">
              <CardContent className="flex flex-col items-center text-center">
                <div className="mb-4 bg-secondary p-4 rounded-full">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">O que dizem nossos pacientes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Raquel Albuquerque", text: "Excelente profissionais, me sinto muito bem acolhida e segura!" },
              { name: "Graziela Teixeira", text: "Atendimento impecável! Dra. Bruna e Dr. Pedro são profissionais ímpares." },
              { name: "Amândio Ferreira", text: "A equipe faz o possível para que o paciente se sinta à vontade." },
            ].map((t, i) => (
              <Card key={i} className="p-6">
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="fill-current h-5 w-5" />)}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{t.text}"</p>
                <p className="font-semibold">{t.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="py-16 bg-foreground text-background">
        <div className="container px-4 grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xl font-bold mb-4 flex items-center"><MapPin className="mr-2" /> Localização</h4>
            <p>Av. Duque de Caxias, 948 - Centro, Itapipoca - CE</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 flex items-center"><Phone className="mr-2" /> Contato</h4>
            <p>(88) 99699-2574</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 flex items-center"><Clock className="mr-2" /> Horário</h4>
            <p>Segunda-Sexta: 08:00–19:00</p>
            <p>Sábado: 08:00–12:00</p>
          </div>
        </div>
      </footer>
    </div>
  );
}