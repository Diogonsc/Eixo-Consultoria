import {
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaMapPin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6"

import { CtaBanner } from "@/components/cta-banner"
import { ContatoForm } from "@/components/contato-form"
import { FadeInView } from "@/components/motion/fade-in-view"
import { contactInfo } from "@/lib/contact"

const contactMethods = [
  {
    label: "Telefone",
    value: contactInfo.phone.display,
    href: contactInfo.phone.href,
    icon: FaPhone,
  },
  {
    label: "E-mail",
    value: contactInfo.email.display,
    href: contactInfo.email.href,
    icon: FaEnvelope,
  },
  {
    label: "Endereço",
    value: `${contactInfo.address.street}, ${contactInfo.address.city}`,
    href: undefined,
    icon: FaMapPin,
  },
] as const

export function Contato() {
  const whatsappUrl = `https://wa.me/${contactInfo.phone.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de falar com um especialista da EIXO Consultoria."
  )}`

  return (
    <section
      id="contato"
      className="scroll-mt-24 bg-surface px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <CtaBanner />

        <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeInView>
              <div className="axis-line mb-4" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Fale conosco
              </p>
              <h3 className="mt-4 font-heading text-2xl text-text-primary md:text-3xl">
                Vamos conversar sobre o seu próximo passo
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
                Entre em contato e descubra como a EIXO pode ajudar sua empresa a
                encontrar e desenvolver os profissionais que impulsionarão o
                crescimento.
              </p>
            </FadeInView>

            <div className="mt-8 flex flex-col gap-3">
              {contactMethods.map(({ label, value, href, icon: Icon }, index) => {
                const content = (
                  <>
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
                  </>
                )

                if (href) {
                  return (
                    <FadeInView key={label} delay={0.08 * (index + 1)}>
                      <a
                        href={href}
                        className="flex items-start gap-4 rounded-2xl border border-border-light bg-white p-5 shadow-sm transition-all duration-300 hover:border-gold/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
                      >
                        {content}
                      </a>
                    </FadeInView>
                  )
                }

                return (
                  <FadeInView key={label} delay={0.08 * (index + 1)}>
                    <div className="flex items-start gap-4 rounded-2xl border border-border-light bg-white p-5 shadow-sm">
                      {content}
                    </div>
                  </FadeInView>
                )
              })}
            </div>

            <FadeInView delay={0.35}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-cta mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:w-auto"
              >
                <FaWhatsapp className="size-5" aria-hidden />
                Chamar no WhatsApp
              </a>
            </FadeInView>

            <FadeInView className="mt-8 flex items-center gap-4" delay={0.4}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                Redes
              </p>
              <div className="flex gap-3">
                {contactInfo.social.map(({ label, href }) => {
                  const Icon = label === "Instagram" ? FaInstagram : FaLinkedinIn

                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex size-10 items-center justify-center rounded-xl border border-border-light bg-white text-gold shadow-sm transition-colors hover:border-gold/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
                    >
                      <Icon className="size-4" aria-hidden />
                    </a>
                  )
                })}
              </div>
            </FadeInView>
          </div>

          <FadeInView delay={0.15}>
            <ContatoForm />
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
