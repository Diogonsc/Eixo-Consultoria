import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaLinkedinIn, FaMapPin, FaPhone } from "react-icons/fa6"

import { contactInfo } from "@/lib/contact"

const navigationItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como Atuamos", href: "#como-atuamos" },
  { label: "Contato", href: "#contato" },
] as const

function InstagramIcon({ className }: { className?: string }) {
  return (
    <FaInstagram className={className} />
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <FaLinkedinIn className={className} />
  )
}

const legalLinks = [
  { label: "Política de Privacidade", href: "#privacidade" },
  { label: "LGPD", href: "#lgpd" },
  { label: "Termos de Uso", href: "#termos" },
] as const

const socialLinks = contactInfo.social.map((item) => ({
  ...item,
  icon: item.label === "Instagram" ? InstagramIcon : LinkedInIcon,
}))

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="axis-line mb-10" aria-hidden />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6 lg:gap-8">
          <div className="md:col-span-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
              aria-label="EIXO Consultoria — Página inicial"
            >
              <Image
                src="/logo-eixo.png"
                alt="Logotipo EIXO Consultoria"
                width={40}
                height={40}
                className="size-10 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-heading text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-gold">
                  EIXO
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold">
                  Consultoria
                </span>
              </div>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Consultoria estratégica em pessoas — metodologia estruturada,
              visão estratégica e foco em resultados duradouros.
            </p>
          </div>

          <nav aria-label="Rodapé" className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Navegação
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Contato
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              <li>
                <address className="flex not-italic gap-3 text-sm leading-relaxed text-white/80">
                  <FaMapPin
                    className="mt-0.5 size-4 shrink-0 text-gold"
                    aria-hidden
                  />
                  <span>
                    {contactInfo.address.street}
                    <br />
                    {contactInfo.address.city}
                  </span>
                </address>
              </li>
              <li>
                <a
                  href={contactInfo.phone.href}
                  className="inline-flex items-start gap-3 text-sm leading-relaxed text-white/80 transition-colors hover:text-gold"
                >
                  <FaPhone
                    className="mt-0.5 size-4 shrink-0 text-gold"
                    aria-hidden
                  />
                  <span>{contactInfo.phone.display}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Redes sociais
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-white/80 transition-colors hover:text-gold"
                  >
                    <Icon className="size-4 text-gold" aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/50">
              © {currentYear} EIXO Consultoria. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/40">
              Estratégia e inovação no eixo do seu negócio.
            </p>
          </div>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-white/45 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
