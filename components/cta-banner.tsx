import { ArrowUpRight, Briefcase } from "lucide-react"
import Link from "next/link"

import { FadeInView } from "@/components/motion/fade-in-view"
import { contactInfo } from "@/lib/contact"

export function CtaBanner() {
  const whatsappUrl = `https://wa.me/${contactInfo.phone.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de agendar uma conversa estratégica com a EIXO Consultoria."
  )}`

  return (
    <div className="relative overflow-hidden rounded-3xl bg-navy p-8 shadow-xl shadow-navy/15 lg:p-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,150,90,0.15),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,197,239,0.08),transparent_50%)]"
      />

      <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <FadeInView className="lg:col-span-7">
          <div className="axis-line mb-4" aria-hidden />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Próximo passo
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-snug text-white md:text-4xl lg:text-[2.25rem] lg:leading-tight">
            Pronto para encontrar o talento que vai transformar sua empresa?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            Nossa equipe está disponível para uma conversa estratégica sem
            compromisso.
          </p>
        </FadeInView>

        <FadeInView
          className="flex flex-col gap-4 lg:col-span-5 lg:items-stretch"
          delay={0.12}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-glow inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Agendar conversa estratégica
            <ArrowUpRight className="size-4" aria-hidden />
          </a>

          <Link
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-transparent px-8 py-4 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            <Briefcase className="size-4" aria-hidden />
            Ver vagas abertas
          </Link>
        </FadeInView>
      </div>
    </div>
  )
}
