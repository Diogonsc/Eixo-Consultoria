import { ComoAtuamosTimeline } from "@/components/como-atuamos-timeline"
import { HighlightCard } from "@/components/highlight-card"
import { FadeInView } from "@/components/motion/fade-in-view"

export function ComoAtuamos() {
  return (
    <section
      id="como-atuamos"
      className="scroll-mt-24 bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <div className="axis-line mb-4" aria-hidden />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Como Atuamos
          </p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl text-text-primary md:text-4xl">
            Método claro, entrega consistente
          </h2>
          <p className="mt-4 max-w-3xl text-text-secondary">
            Cada etapa foi desenhada para maximizar a qualidade da contratação e
            minimizar riscos — com transparência e comunicação em todo o
            processo.
          </p>
        </FadeInView>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <FadeInView className="lg:col-span-4 lg:sticky lg:top-28" delay={0.1}>
            <HighlightCard
              label="Prazo médio"
              title="45 — 60 dias"
              description="Da briefing até a contratação efetivada"
              variant="dark"
            />

            <p className="mt-6 text-sm leading-relaxed text-text-muted">
              Processo consultivo com marcos definidos, reportes periódicos e
              alinhamento contínuo com o cliente em cada fase.
            </p>
          </FadeInView>

          <ComoAtuamosTimeline />
        </div>
      </div>
    </section>
  )
}
