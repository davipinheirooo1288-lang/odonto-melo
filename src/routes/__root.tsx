import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Instagram, Facebook, Menu, X, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import appCss from "../styles.css?url";

const WHATSAPP_URL = "https://wa.me/5588996992574?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      <Link to="/" onClick={onClick} className="text-sm tracking-wide hover:text-primary transition-colors" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>Início</Link>
      <Link to="/servicos" onClick={onClick} className="text-sm tracking-wide hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>Serviços</Link>
      <Link to="/sobre" onClick={onClick} className="text-sm tracking-wide hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>Sobre</Link>
      <Link to="/contato" onClick={onClick} className="text-sm tracking-wide hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>Contato</Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full glass">
      <div className="container px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="text-2xl font-serif font-semibold text-primary tracking-tight">Odonto</span>
          <span className="italic-serif text-2xl text-primary/80">Melo</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <NavLinks />
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://instagram.com/clinicaodontomelo" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors"><Instagram size={18} /></a>
          <a href="https://facebook.com/clinicaodontomelo1" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors"><Facebook size={18} /></a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 h-11 ml-2">
              Agendar Consulta
            </Button>
          </a>
        </div>

        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="flex flex-col gap-5 p-6">
            <NavLinks onClick={() => setIsOpen(false)} />
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full h-11">
                Agendar Consulta
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function FloatingWhatsapp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-elegant flex items-center justify-center hover:scale-110 transition-transform"
    >
      <MessageCircle size={26} />
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-2 mb-5">
            <span className="text-3xl font-serif font-semibold">Odonto</span>
            <span className="italic-serif text-3xl opacity-80">Melo</span>
          </div>
          <p className="text-primary-foreground/70 max-w-sm leading-relaxed mb-8">
            Odontologia premium em Itapipoca-CE. Cuidado humanizado, tecnologia de ponta e resultados que transformam vidas.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com/clinicaodontomelo" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all">
              <Instagram size={16} />
            </a>
            <a href="https://facebook.com/clinicaodontomelo1" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-5 font-semibold">Navegação</h4>
          <ul className="space-y-3 text-primary-foreground/70">
            <li><Link to="/" className="hover:text-accent transition-colors">Início</Link></li>
            <li><Link to="/servicos" className="hover:text-accent transition-colors">Serviços</Link></li>
            <li><Link to="/sobre" className="hover:text-accent transition-colors">Sobre Nós</Link></li>
            <li><Link to="/contato" className="hover:text-accent transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-5 font-semibold">Atendimento</h4>
          <ul className="space-y-4 text-primary-foreground/70">
            <li className="flex items-start gap-3"><Phone size={16} className="mt-1 shrink-0 text-accent" /> (88) 99699-2574</li>
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-1 shrink-0 text-accent" /> Av. Duque de Caxias, 948<br />Centro, Itapipoca - CE</li>
            <li className="flex items-start gap-3"><Mail size={16} className="mt-1 shrink-0 text-accent" /> contato@odontomelo.com.br</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container px-6 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Clínica Odonto Melo. Todos os direitos reservados.</p>
          <p>CRO-CE • Atendimento humanizado desde sempre.</p>
        </div>
      </div>
    </footer>
  );
}


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado. Tente recarregar ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Odonto Melo | Clínica Odontológica Premium em Itapipoca-CE" },
      { name: "description", content: "Clínica Odonto Melo: implantes, lentes de contato, ortodontia e atendimento humanizado em Itapipoca-CE com Dr. Pedro e Dra. Bruna. 5,0 estrelas no Google." },
      { name: "author", content: "Odonto Melo" },
      { property: "og:title", content: "Odonto Melo | Especialistas em Sorrisos" },
      { property: "og:description", content: "Excelência em saúde bucal e estética dental em Itapipoca-CE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="min-h-[70vh]">
        <Outlet />
      </main>
      <FloatingWhatsapp />
      <Footer />
    </QueryClientProvider>
  );
}
