"use client"

import {
  FaEnvelope,
  FaGlobe,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { developerInfo } from "@/lib/developer"

const contactMethods = [
  {
    label: "E-mail",
    value: developerInfo.email.display,
    href: developerInfo.email.href,
    icon: FaEnvelope,
  },
  {
    label: "WhatsApp",
    value: developerInfo.whatsapp.display,
    href: developerInfo.whatsapp.href,
    icon: FaWhatsapp,
  },
  {
    label: developerInfo.linkedin.label,
    value: "Perfil profissional",
    href: developerInfo.linkedin.href,
    icon: FaLinkedinIn,
  },
  {
    label: developerInfo.website.label,
    value: developerInfo.website.display,
    href: developerInfo.website.href,
    icon: FaGlobe,
  },
] as const

export function DeveloperCredit() {
  return (
    <Dialog>
      <p className="pt-2 text-center text-xs text-white/35">
        Desenvolvido por{" "}
        <DialogTrigger
          type="button"
          className="font-medium text-white/50 underline decoration-white/20 underline-offset-2 transition-colors hover:text-gold hover:decoration-gold/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
        >
          {developerInfo.name}
        </DialogTrigger>
      </p>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{developerInfo.name}</DialogTitle>
          <DialogDescription>
            Desenvolvedor responsável por este site. Entre em contato pelos
            canais abaixo.
          </DialogDescription>
        </DialogHeader>

        <ul className="flex flex-col gap-3">
          {contactMethods.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-xl border border-border-light bg-surface p-4 transition-all hover:border-gold/30 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold-light">
                  <Icon className="size-4 text-gold" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {value}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  )
}
