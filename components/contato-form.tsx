"use client"

import { FormEvent, useState } from "react"
import { FaWhatsapp } from "react-icons/fa6"

import { Button } from "@/components/ui/button"
import { contactInfo } from "@/lib/contact"
import { cn } from "@/lib/utils"

const fieldClassName = cn(
  "input-premium w-full rounded-xl border border-border-light bg-surface-subtle px-4 py-3",
  "text-sm text-text-primary placeholder:text-text-muted",
  "outline-none focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
)

export function ContatoForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const text = [
      "Olá! Gostaria de falar com um especialista da EIXO.",
      "",
      `*Nome:* ${form.name}`,
      `*E-mail:* ${form.email}`,
      form.company ? `*Empresa:* ${form.company}` : null,
      form.phone ? `*Telefone:* ${form.phone}` : null,
      "",
      `*Mensagem:*`,
      form.message,
    ]
      .filter(Boolean)
      .join("\n")

    const url = `https://wa.me/${contactInfo.phone.whatsapp}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  return (
    <form
      id="contato-form"
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 shadow-xl shadow-navy/10 ring-1 ring-border-light lg:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
        Envie uma mensagem
      </p>
      <h3 className="mt-3 font-heading text-2xl font-semibold text-navy">
        Fale com um especialista
      </h3>
      <p className="mt-2 text-sm text-text-secondary">
        Preencha o formulário e iniciaremos a conversa pelo WhatsApp.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="contact-name" className="sr-only">
            Nome completo
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Nome completo *"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={fieldClassName}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="sr-only">
            E-mail
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="E-mail *"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={fieldClassName}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="sr-only">
            Telefone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="Telefone"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={fieldClassName}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-company" className="sr-only">
            Empresa
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            placeholder="Empresa"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className={fieldClassName}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="sr-only">
            Mensagem
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            placeholder="Como podemos ajudar? *"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className={cn(fieldClassName, "resize-none")}
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="cta-glow mt-6 w-full sm:w-auto"
        icon={<FaWhatsapp />}
        iconPosition="start"
      >
        Enviar via WhatsApp
      </Button>

      <p className="mt-4 text-xs text-text-muted">
        Resposta em até 24 horas úteis. Seus dados não serão compartilhados.
      </p>
    </form>
  )
}
