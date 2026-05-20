import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SERVICE_OPTIONS } from "@/data/services";

export function SmartScheduleModal({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    doctor: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de iniciar um agendamento rápido.
*Nome:* ${formData.name}
*Serviço escolhido:* ${formData.service}
*Preferência de profissional:* ${formData.doctor || "Sem preferência"}

Pode me passar os horários disponíveis?`;

    const url = `https://wa.me/5588996992574?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-3xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl text-primary">Agendamento Rápido</DialogTitle>
          <DialogDescription className="text-foreground/70">
            Escolha o procedimento e envie uma mensagem pronta para concluir pelo WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Seu Nome</Label>
            <Input
              id="name"
              name="name"
              placeholder="Digite seu nome completo"
              required
              value={formData.name}
              onChange={handleChange}
              className="h-12 border-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Serviço Desejado</Label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="flex h-12 w-full items-center justify-between rounded-md border border-primary/20 bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary/50"
            >
              <option value="" disabled>
                Selecione um serviço
              </option>
              {SERVICE_OPTIONS.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="doctor">
              Médico de Preferência{" "}
              <span className="text-muted-foreground text-xs font-normal">(Opcional)</span>
            </Label>
            <select
              id="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="flex h-12 w-full items-center justify-between rounded-md border border-primary/20 bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary/50"
            >
              <option value="">Sem preferência</option>
              <option value="Dr. Pedro Victor">Dr. Pedro Victor</option>
              <option value="Dra. Bruna Vasconcelos">Dra. Bruna Vasconcelos</option>
            </select>
          </div>

          <Button
            type="submit"
            className="w-full h-12 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white gap-2 font-medium"
          >
            Continuar no WhatsApp <ArrowRight size={18} />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
