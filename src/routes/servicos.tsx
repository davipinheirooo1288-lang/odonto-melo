import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos")({
  component: Servicos,
});

function Servicos() {
  const servicos = [
    "Restauração", "Clareamento", "Facetas de resina", "Lentes de contato", 
    "Onlay", "Prótese", "Implantes", "Tratamento de canal", 
    "Tratamento periodontal", "Cirurgia", "Ortodontia", "Atendimento infantil"
  ];

  return (
    <div className="py-24 container px-4">
      <h1 className="text-4xl font-bold text-center mb-16 text-primary">Nossos Serviços Especializados</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicos.map((s) => (
          <div key={s} className="p-6 bg-card border rounded-lg shadow-sm hover:shadow-elegant transition-all">
            <h3 className="font-semibold text-lg text-primary">{s}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}