import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"

import { HeroStats } from "@/components/hero-stats"
import { FadeInView } from "@/components/motion/fade-in-view"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-linear-to-br from-navy via-navy to-navy-dark">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,150,90,0.2),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,197,239,0.1),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,58,95,0.4),transparent_70%)]"
      />
      <div
        aria-hidden
        className="hero-noise pointer-events-none absolute inset-0 opacity-[0.03]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-gold/40 to-transparent"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-24 pt-32 lg:px-8 lg:pt-40">
        <div className="max-w-3xl">
          <FadeInView>
            <div className="axis-line mb-4" aria-hidden />
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Consultoria estratégica em pessoas
            </p>

            <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Estratégia e inovação no{" "}
              <span className="text-gold">EIXO</span> do seu negócio
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Identificamos, atraímos e selecionamos profissionais para
              posições-chave — com metodologia estruturada, visão estratégica e
              foco em resultados duradouros.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                variant="gold"
                size="lg"
                className="cta-glow"
                icon={<ArrowRight />}
                iconPosition="end"
                asChild
              >
                <Link href="#contato">Falar com especialista</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="#servicos">Conhecer serviços</Link>
              </Button>
            </div>
          </FadeInView>

          <HeroStats />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link
          href="#sobre"
          aria-label="Rolar para a próxima seção"
          className="flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-gold focus-visible:text-gold focus-visible:outline-none"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">
            Explorar
          </span>
          <ChevronDown className="size-5 animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
