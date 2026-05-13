import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
});

function Sobre() {
  return (
    <div className="py-24 container px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary mb-16">Sobre a Clínica</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="bg-secondary aspect-square rounded-2xl flex items-center justify-center">
            <User size={120} className="text-primary/20" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Dr. Pedro e Dra. Bruna</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nossa clínica é liderada pelo casal de cirurgiões-dentistas Dr. Pedro e Dra. Bruna, reconhecidos pela excelência técnica e pelo cuidado humanizado com cada paciente.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Equipados com tecnologia de ponta e um ambiente acolhedor, nossa missão é transformar o atendimento odontológico em uma experiência segura e tranquila.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 border rounded-2xl">
            <h3 className="text-xl font-bold mb-2">Missão</h3>
            <p className="text-muted-foreground">Proporcionar saúde e estética bucal com as melhores técnicas da odontologia moderna.</p>
          </div>
          <div className="p-8 border rounded-2xl">
            <h3 className="text-xl font-bold mb-2">Visão</h3>
            <p className="text-muted-foreground">Ser a referência em atendimento odontológico premium em toda a região de Itapipoca.</p>
          </div>
          <div className="p-8 border rounded-2xl">
            <h3 className="text-xl font-bold mb-2">Valores</h3>
            <p className="text-muted-foreground">Ética, profissionalismo, humanização e constante inovação tecnológica.</p>
          </div>
        </div>
      </div>
    </div>
  );
}