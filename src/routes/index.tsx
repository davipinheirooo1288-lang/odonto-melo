import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Star,
  ArrowRight,
  Sparkles,
  Smile,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Baby,
  MapPin,
  Clock,
  Phone,
  Check,
  Award,
  Heart,
  MessageCircle,
  Instagram,
  Facebook,
  PlayCircle,
  Expand,
} from "lucide-react";
import { Testimonials } from "@/components/Testimonials";
import { VideoModal } from "@/components/VideoModal";
import { ImageLightbox } from "@/components/ImageLightbox";
import { useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import { SmartScheduleModal } from "@/components/SmartScheduleModal";
import { SERVICE_IMAGE_CARDS } from "@/data/services";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5588996992574?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";

function Index() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const days = [
    { d: "Segunda-feira", h: "08:00 – 19:00" },
    { d: "Terça-feira", h: "08:00 – 19:00" },
    { d: "Quarta-feira", h: "08:00 – 19:00" },
    { d: "Quinta-feira", h: "08:00 – 19:00" },
    { d: "Sexta-feira", h: "08:00 – 19:00" },
    { d: "Sábado", h: "08:00 – 12:00" },
    { d: "Domingo", h: "Fechado", closed: true },
  ];

  const testimonialsData = [
    {
      name: "Samara Lívia",
      text: "Quero parabenizar aos cirurgiões dr Pedro e Bruna , são excelentes!!! Ambiente tranquilo , que nos deixa mais avontade e seguro em certos procedimentos. Na recepção tem uma moça super simpática Marjory Ellen , que faz um ótimo atendimento. Minha família , os que moram aqui em Itapipoca passa por esse casal super profissionais !! Parabéns a toda equipe !!!",
    },
    {
      name: "Iasmin Teixeira Nogueira",
      text: "eu amo ser atendida pela a clínica em especial pela a doutora Bruna e a sua técnica que auxilia , me sinto muito tranquila e a vontade , nunca sentir um pingo de dor , ela tem um cuidado incrível . Obg pela a delicadeza sempre 👏🏻💗",
    },
    {
      name: "Francisco Douglas",
      text: "Gostaria de expressar a minha sincera satisfação com o atendimento que recebi na clínica, desde o agendamento até o final do tratamento, a experiência foi incrível. Parabéns pelo excelente trabalho!!",
    },
    {
      name: "MARIA DAMILA DE MENESES VIDAL",
      text: "Atendimento excelente, profissionais de alta qualidade, atenciosos! sempre que for necessário irei voltar.",
    },
    {
      name: "Josiane Ferreira",
      text: "Excelente atendimento, o espaço é maravilhoso e os profissionais são altamente qualificados.",
    },
    {
      name: "Claudenice Magalhaes",
      text: "Atendimento maravilhoso, e profissionais de verdade , os melhores💞",
    },
    {
      name: "Carol Damasceno",
      text: "O melhor atendimento! E quanto a Dra. Bruna sem comentários 🥰🤌🏻",
    },
    {
      name: "Laisa Sousa",
      text: "Amei o atendimento e o cuidado que toda a equipe tem com cada um dos pacientes!",
    },
    {
      name: "Angela Patricia Vidal",
      text: "Já fui atendida pelos dois profissionais e gostei bastante do atendimento.",
    },
    {
      name: "Bianca Oliveira",
      text: "Excelente atendimento Profissionais qualificados Ambiente agradável Um arraso👏🏻👏🏻👏🏻",
    },
    {
      name: "Daniele Morais",
      text: "a melhor clínica odontológica de Itapipoca, profissionais altamente competentes e classificados! indico de olhos fechados!!",
    },
    {
      name: "Cliente Anônimo",
      text: "Uma experiência ótima, indico sem medo nenhum ☺️",
    },
  ];

  return (
    <div>
      {/* ── HERO ── */}
      <section
        id="inicio"
        className="relative flex items-center justify-center overflow-hidden pt-20"
        style={{ width: "100%", minHeight: "100vh", backgroundColor: "#fdfcf8" }}
      >
        {/* Imagem de Fundo - cobre 100% da tela */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/inicio.png"
            alt="Fundo"
            className="w-full h-full object-cover"
            style={{ backgroundColor: "#fdfcf8" }}
          />
        </div>

        <div className="container px-6 py-20 relative z-10 min-h-[80vh] flex flex-col justify-end">
          <div className="max-w-2xl">
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group w-full sm:w-auto shadow-soft text-base"
                >
                  Agendar Consulta
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </a>
              <SmartScheduleModal>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-12 border border-primary/30 bg-background/50 hover:bg-secondary transition-all text-base font-medium text-primary w-full sm:w-auto justify-center gap-2"
                >
                  Agendamento Rápido
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </SmartScheduleModal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORPO CLÍNICO ── */}
      <section id="corpo-clinico" className="py-24 lg:py-32 bg-background">
        <div className="container px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold">
              Corpo Clínico
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 leading-tight">
              Especialistas em <span className="italic-serif">transformar vidas.</span>
            </h2>
          </div>

          <div className="space-y-24">
            {/* Dr. Pedro */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant border relative">
                  <img
                    src="/images/capa video dr.png"
                    alt="Capa Dr. Pedro"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                    <span className="font-serif text-4xl md:text-5xl text-white leading-none mb-2 drop-shadow-lg">
                      Dr. Pedro Victor Melo
                    </span>
                    <span className="text-sm text-white/90 uppercase tracking-wider font-semibold drop-shadow-md">
                      Cirurgião Dentista
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center mb-20">
                    <VideoModal videoSrc="/media/Dr. Pedro Victor.mp4">
                      <button className="relative z-10 h-20 w-20 rounded-full bg-background/90 text-primary flex items-center justify-center shadow-soft hover:scale-110 transition-transform group-hover:text-accent cursor-pointer">
                        <PlayCircle size={40} strokeWidth={1.5} />
                      </button>
                    </VideoModal>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                  Dr. Pedro Victor Melo
                </h3>
                <p className="text-accent font-medium mb-6 uppercase tracking-wider text-sm">
                  Cirurgião Dentista
                </p>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    O Dr. Pedro Victor Melo une conhecimento, experiência clínica e uma visão humana
                    da odontologia para transformar sorrisos com segurança e responsabilidade. Sua
                    trajetória é marcada pela dedicação aos estudos, pela busca constante por
                    evolução e pelo compromisso em oferecer um atendimento claro, acolhedor e
                    personalizado.
                  </p>
                  <p>
                    Mais do que realizar procedimentos, seu objetivo é entender cada paciente,
                    explicar cada etapa do tratamento e construir uma relação de confiança. Com
                    atuação voltada para resultados naturais, saúde bucal e bem-estar, o Dr. Pedro
                    acredita que um sorriso bem cuidado impacta diretamente na autoestima e na
                    qualidade de vida.
                  </p>
                  <p>
                    Na Clínica Odonto Melo, cada atendimento é conduzido com seriedade, planejamento
                    e atenção aos mínimos detalhes, sempre priorizando conforto, segurança e
                    excelência.
                  </p>
                </div>
              </div>
            </div>

            {/* Dra. Bruna — thumbnail com fundo rose-dourado */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-1 lg:order-1">
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                  Dra. Bruna Vasconcelos
                </h3>
                <p className="text-accent font-medium mb-6 uppercase tracking-wider text-sm">
                  Cirurgiã Dentista
                </p>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    A Dra. Bruna Vasconcelos carrega em sua trajetória uma história de esforço,
                    inspiração e paixão pelo cuidado com o próximo. Desde a formação acadêmica, sua
                    rotina foi marcada por dedicação intensa, estudo constante e o desejo de
                    entregar sempre o melhor para cada paciente.
                  </p>
                  <p>
                    Seu atendimento une técnica, delicadeza e escuta atenta, criando uma experiência
                    mais leve, segura e humanizada. Para ela, cuidar de um sorriso vai além da
                    estética: é também devolver confiança, conforto e bem-estar.
                  </p>
                  <p>
                    Com olhar detalhista e abordagem acolhedora, a Dra. Bruna busca compreender as
                    necessidades individuais de cada pessoa, oferecendo tratamentos planejados com
                    responsabilidade, carinho e naturalidade nos resultados.
                  </p>
                  <p>
                    Na Odonto Melo, sua missão é fazer com que cada paciente se sinta bem cuidado
                    desde o primeiro contato até a finalização do tratamento.
                  </p>
                </div>
              </div>
              <div className="order-2 lg:order-2 relative group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant border relative">
                  <img
                    src="/images/capa video dra.png"
                    alt="Capa Dra. Bruna"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                    <span className="font-serif text-4xl md:text-5xl text-white leading-none mb-2 drop-shadow-lg">
                      Dra. Bruna Vasconcelos
                    </span>
                    <span className="text-sm text-white/90 uppercase tracking-wider font-semibold drop-shadow-md">
                      Cirurgiã Dentista
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center mb-20">
                    <VideoModal videoSrc="/media/Dra Bruna Vasconcelos..mp4">
                      <button className="relative z-10 h-20 w-20 rounded-full bg-background/90 text-primary flex items-center justify-center shadow-soft hover:scale-110 transition-transform group-hover:text-pink-400 cursor-pointer">
                        <PlayCircle size={40} strokeWidth={1.5} />
                      </button>
                    </VideoModal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOSSA HISTÓRIA ── */}
      <section id="sobre" className="py-24 lg:py-32 bg-secondary border-y">
        <div className="container px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 group">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-elegant border relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/50 to-accent/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="font-serif text-3xl md:text-4xl text-white drop-shadow-md">
                  Nossa História
                </span>
                <span className="text-sm text-white/80 uppercase tracking-wider">
                  Clínica Odonto Melo
                </span>
              </div>
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <VideoModal videoSrc="/media/sobre nos.mp4">
                  <button className="relative z-10 flex flex-col items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
                    <div className="h-16 w-16 rounded-full bg-background/90 text-primary flex items-center justify-center shadow-soft">
                      <PlayCircle size={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-background font-medium tracking-widest uppercase text-sm drop-shadow-md">
                      Assistir Vídeo
                    </span>
                  </button>
                </VideoModal>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold">
              Nossa História
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 mb-6 leading-tight">
              O propósito por trás <span className="italic-serif">de cada sorriso.</span>
            </h2>
            <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
              <p>
                A Clínica Odonto Melo nasceu com o propósito de oferecer uma odontologia moderna,
                humanizada e completa, unindo profissionais qualificados, estrutura acolhedora e
                tratamentos planejados de forma individual.
              </p>
              <p>
                Aqui, cada paciente é recebido com atenção, respeito e transparência. Acreditamos
                que um bom tratamento começa pela escuta: entender as necessidades, explicar as
                possibilidades e construir, junto com o paciente, o melhor caminho para alcançar
                saúde, estética e bem-estar.
              </p>
              <p>
                Nossa clínica conta com um ambiente preparado para proporcionar conforto, segurança
                e uma experiência mais tranquila em todas as etapas do atendimento. Trabalhamos com
                responsabilidade, tecnologia e dedicação para entregar resultados que valorizam a
                naturalidade do sorriso e a confiança de cada pessoa.
              </p>
              <p className="font-serif text-2xl text-primary italic pt-4">
                "Na Odonto Melo, o sorriso é tratado com técnica, carinho e propósito. Nosso
                compromisso é cuidar de você como único."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="py-24 lg:py-32 bg-background">
        <div className="container px-6">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold">
                Nossas Especialidades
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 leading-tight">
                Tratamentos pensados <br /> para <span className="italic-serif">cada detalhe</span>{" "}
                do seu sorriso.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-12 flex lg:items-end">
              <p className="text-foreground/70 leading-relaxed text-lg">
                Da estética avançada à reabilitação completa, oferecemos uma linha premium de
                procedimentos com tecnologia de ponta e zelo absoluto pelo paciente.
              </p>
            </div>
          </div>

          {/* Cards resumo com Imagens */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {SERVICE_IMAGE_CARDS.map((s, i) => (
              <div
                key={i}
                className="group rounded-3xl overflow-hidden border bg-card hover:shadow-elegant transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openLightbox(i);
                }}
                aria-label={`Ver imagem ampliada: ${s.title}`}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-12 w-12 rounded-full bg-background/80 flex items-center justify-center shadow-lg">
                      <Expand size={22} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="absolute bottom-4 left-6 right-6 font-serif text-2xl text-white">
                    {s.title}
                  </h3>
                </div>
                <div className="p-6 flex-1">
                  <p className="text-foreground/70 leading-relaxed">
                    Clique na imagem para ampliar.
                  </p>
                  <Button
                    variant="link"
                    className="px-0 mt-4 text-primary group-hover:text-accent font-semibold flex items-center gap-2"
                  >
                    Ver Imagem <Expand size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className="py-24 lg:py-32 bg-secondary border-y">
        <div className="container px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold">
              Depoimentos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 leading-tight">
              A satisfação de <br />
              <span className="italic-serif">nossos pacientes.</span>
            </h2>
          </div>

          <Testimonials testimonials={testimonialsData} />
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="py-24 lg:py-32 bg-background">
        <div className="container px-6">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold">
              Vamos conversar
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mt-4 mb-4 leading-tight">
              Sua jornada para um <span className="italic-serif">novo sorriso começa aqui.</span>
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              Entre em contato, tire suas dúvidas e agende sua avaliação. Nossa equipe está pronta
              para lhe atender com carinho.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Informações */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Endereço",
                    desc: "Av. Duque de Caxias, 948, Centro, Itapipoca - CE",
                  },
                  { icon: Phone, title: "Telefone", desc: "(88) 99699-2574" },
                  { icon: MessageCircle, title: "WhatsApp", desc: "(88) 99699-2574" },
                  { icon: Clock, title: "Horário", desc: "Seg a Sex: 08h às 19h\nSáb: 08h às 12h" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center shrink-0 border border-primary/10">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-1">{item.title}</h4>
                      <p className="text-foreground/70 whitespace-pre-line leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <Button
                    size="lg"
                    className="w-full rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white h-12 text-base font-medium shadow-soft"
                  >
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="lg:col-span-7 flex items-center">
              <ContactForm />
            </div>
          </div>

          {/* Mapa */}
          <div className="mt-20 rounded-3xl overflow-hidden border shadow-soft aspect-[21/9] md:aspect-[21/7]">
            <iframe
              title="Localização Odonto Melo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.473550727907!2d-39.5855894!3d-3.4994458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c049a04f966791%3A0xdd9a1b5a1be40f9b!2sCl%C3%ADnica+Odonto+Melo!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX DE IMAGENS ── */}
      <ImageLightbox
        images={SERVICE_IMAGE_CARDS}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
        initialIndex={lightboxIndex}
      />
    </div>
  );
}
