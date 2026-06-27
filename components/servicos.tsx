import { FadeInView } from "@/components/motion/fade-in-view"
import { ServicosGrid } from "@/components/servicos-grid"

export function Servicos() {
  return (
    <section id="servicos" className="scroll-mt-24 bg-surface px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <div className="axis-line mb-4" aria-hidden />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Serviços
          </p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl text-text-primary md:text-4xl">
            Soluções sob medida para cada desafio
          </h2>
        </FadeInView>

        <ServicosGrid />
      </div>
    </section>
  )
}
