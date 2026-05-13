import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/contato")({
  component: Contato,
});

function Contato() {
  return (
    <div className="py-24 container px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-6">Entre em Contato</h1>
          <p className="text-muted-foreground mb-8">
            Estamos prontos para cuidar do seu sorriso. Entre em contato conosco pelos canais abaixo ou visite nossa clínica em Itapipoca.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-secondary p-3 rounded-full"><Phone className="text-primary" /></div>
              <div>
                <p className="text-sm text-muted-foreground uppercase font-semibold">Telefone</p>
                <p className="text-lg">(88) 99699-2574</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-secondary p-3 rounded-full"><MapPin className="text-primary" /></div>
              <div>
                <p className="text-sm text-muted-foreground uppercase font-semibold">Endereço</p>
                <p className="text-lg">Av. Duque de Caxias, 948, Centro - Itapipoca, CE</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-secondary p-3 rounded-full"><MessageSquare className="text-primary" /></div>
              <div>
                <p className="text-sm text-muted-foreground uppercase font-semibold">WhatsApp</p>
                <p className="text-lg">(88) 99699-2574</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card border p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Agendar por Mensagem</h2>
          <p className="mb-6 text-muted-foreground">Clique no botão abaixo para iniciar uma conversa direta via WhatsApp.</p>
          <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">
            Conversar no WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}