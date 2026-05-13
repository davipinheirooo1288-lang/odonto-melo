import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { MessageSquare, Phone, Instagram, Facebook, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import appCss from "../styles.css?url";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link to="/" className="hover:text-primary transition-colors font-medium" activeProps={{ className: "text-primary" }}>Início</Link>
      <Link to="/servicos" className="hover:text-primary transition-colors font-medium" activeProps={{ className: "text-primary" }}>Serviços</Link>
      <Link to="/sobre" className="hover:text-primary transition-colors font-medium" activeProps={{ className: "text-primary" }}>Sobre</Link>
      <Link to="/contato" className="hover:text-primary transition-colors font-medium" activeProps={{ className: "text-primary" }}>Contato</Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b">
      <div className="container px-4 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          Odonto Melo
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            Agendar Agora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4 p-6 text-center">
            <NavLinks />
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full w-full">
              Agendar Agora
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-primary mb-4">Odonto Melo</h3>
          <p className="text-muted-foreground max-w-sm mb-6">
            Transformando sorrisos e vidas com excelência e cuidado em Itapipoca-CE.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/clinicaodontomelo" className="p-2 bg-primary/20 rounded-full hover:bg-primary/30 transition-colors">
              <Instagram size={20} className="text-primary" />
            </a>
            <a href="https://facebook.com/clinicaodontomelo1" className="p-2 bg-primary/20 rounded-full hover:bg-primary/30 transition-colors">
              <Facebook size={20} className="text-primary" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Acesso Rápido</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/sobre">Sobre Nós</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Atendimento</h4>
          <p className="text-muted-foreground">(88) 99699-2574</p>
          <p className="text-muted-foreground mt-2">Av. Duque de Caxias, 948<br />Itapipoca - CE</p>
        </div>
      </div>
      <div className="container px-4 mt-16 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Odonto Melo. Todos os direitos reservados.
      </div>
    </footer>
  );
}


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
      { title: "Odonto Melo | Clínica Odontológica Premium em Itapipoca" },
      { name: "description", content: "A Clínica Odonto Melo oferece implantes, facetas, ortodontia e atendimento humanizado com Dr. Pedro e Dra. Bruna em Itapipoca - CE." },
      { name: "author", content: "Odonto Melo" },
      { property: "og:title", content: "Odonto Melo | Especialistas em Sorrisos" },
      { property: "og:description", content: "Excelência em saúde bucal com atendimento premium em Itapipoca." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
      <Footer />
    </QueryClientProvider>
  );
}