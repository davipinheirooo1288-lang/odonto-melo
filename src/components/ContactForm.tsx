import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Loader2, ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { SERVICE_OPTIONS } from "@/data/services";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    doctor: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Format the WhatsApp message beautifully
    const text = `Olá! Gostaria de realizar um agendamento.
*Nome:* ${formData.name}
*Serviço:* ${formData.service || "Avaliação Geral"}
*Preferência de Médico:* ${formData.doctor || "Sem preferência"}
${formData.message ? `*Observações:* ${formData.message}` : ""}`;

    const url = `https://wa.me/5588996992574?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setStatus("success");
      // Open WhatsApp in a new tab
      window.open(url, "_blank");

      // Reset form
      setFormData({
        name: "",
        service: "",
        doctor: "",
        message: "",
      });

      // Reset status back to idle
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-card rounded-3xl p-8 lg:p-10 border shadow-soft w-full max-w-xl mx-auto">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold block mb-2">
          Agendamento Rápido & Inteligente
        </span>
        <h3 className="font-serif text-3xl text-primary leading-tight">Marque sua Consulta</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nome */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground/80 font-medium">
            Seu Nome Completo <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Digite seu nome completo"
            required
            value={formData.name}
            onChange={handleChange}
            className="h-12 border-primary/20 focus-visible:ring-primary/50 text-base"
          />
        </div>

        {/* Serviços (Todos os 10 novos serviços inclusos!) */}
        <div className="space-y-2">
          <Label htmlFor="service" className="text-foreground/80 font-medium">
            Qual serviço deseja escolher? <span className="text-destructive">*</span>
          </Label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="flex h-12 w-full items-center justify-between rounded-md border border-primary/20 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50 text-foreground bg-card"
          >
            <option value="" disabled>
              Selecione um procedimento
            </option>
            {SERVICE_OPTIONS.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Médico de Preferência */}
        <div className="space-y-2">
          <Label htmlFor="doctor" className="text-foreground/80 font-medium">
            Médico de Preferência{" "}
            <span className="text-muted-foreground text-xs font-normal">(Opcional)</span>
          </Label>
          <select
            id="doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="flex h-12 w-full items-center justify-between rounded-md border border-primary/20 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-primary/50 text-foreground bg-card"
          >
            <option value="">Sem preferência (Qualquer especialista)</option>
            <option value="Dr. Pedro Victor">Dr. Pedro Victor</option>
            <option value="Dra. Bruna Vasconcelos">Dra. Bruna Vasconcelos</option>
          </select>
        </div>

        {/* Mensagem Opcional */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground/80 font-medium">
            Mensagem ou Dúvida{" "}
            <span className="text-muted-foreground text-xs font-normal">(Opcional)</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Se desejar, envie uma mensagem ou observação especial..."
            value={formData.message}
            onChange={handleChange}
            className="min-h-[100px] resize-none border-primary/20 focus-visible:ring-primary/50 text-base"
          />
        </div>

        {/* Botão de Envio */}
        <Button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={`w-full h-14 rounded-full text-base font-semibold shadow-soft transition-all duration-300 gap-2 ${
            status === "success"
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-[#25D366] hover:bg-[#20bd5a] text-white"
          }`}
        >
          {status === "idle" && (
            <span className="flex items-center justify-center gap-2">
              Confirmar no WhatsApp <ArrowRight size={18} />
            </span>
          )}
          {status === "loading" && (
            <span className="flex items-center justify-center gap-2">
              <Loader2 size={18} className="animate-spin" /> Processando...
            </span>
          )}
          {status === "success" && (
            <span className="flex items-center justify-center gap-2">
              <Check size={18} /> Redirecionando!
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}
