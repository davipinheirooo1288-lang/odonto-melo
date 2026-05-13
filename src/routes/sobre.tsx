import { createFileRoute } from "@tanstack/react-router";
import { User, Award, Heart, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
});

function Sobre() {
  return (
    <div className="py-24 md:py-32">
      <div className="container px-4">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="bg-secondary rounded-[3rem] aspect-[4/5] flex items-center justify-center overflow-hidden">
               <User size={200} className="text-primary/10" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-10 rounded-[2.5rem] shadow-elegant hidden md:block max-w-[280px]">
              <p className="text-2xl font-bold mb-2">Dr. Pedro & Dra. Bruna</p>
              <p className="opacity-80">Especialistas dedicados ao seu sorriso.</p>
            </div>
          </div>
          
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Nossa História</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8">Excelência que vem da paixão pela Odontologia</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A Odonto Melo nasceu do desejo de Dr. Pedro e Dra. Bruna em oferecer um atendimento diferenciado em Itapipoca. Um lugar onde o paciente não é apenas um número, mas um convidado especial.
            </p>
            <div className="space-y-4">
              {[
                "Ambiente planejado para o seu conforto",
                "Equipe técnica altamente qualificada",
                "Tecnologia de última geração em todos os processos",
                "Foco em resultados naturais e duradouros"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-lg font-medium">
                  <CheckCircle2 className="text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Award />, title: "Inovação", desc: "Constantemente atualizados com o que há de mais moderno na odontologia mundial." },
            { icon: <Heart />, title: "Humanização", desc: "Entendemos seus medos e expectativas para um atendimento sem dor e acolhedor." },
            { icon: <ShieldCheck />, title: "Segurança", desc: "Protocolos rigorosos de biossegurança e esterilização para sua total tranquilidade." }
          ].map((v, i) => (
            <div key={i} className="p-12 bg-secondary/30 rounded-[2.5rem] hover:bg-secondary/50 transition-colors">
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm text-primary">
                {v.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
