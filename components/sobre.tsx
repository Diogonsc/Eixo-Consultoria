import { FaRegCheckCircle } from "react-icons/fa"

import { HighlightCard } from "@/components/highlight-card"
import { FadeInView } from "@/components/motion/fade-in-view"
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/stagger-container"

const sobreHighlights = [
  {
    label: "Fundada em",
    title: "2024",
    description: "DNA de especialistas em RH estratégico",
    variant: "dark" as const,
  },
  {
    label: "Sede",
    title: "Jundiaí",
    description: "Atuação em todo o território nacional",
    variant: "light" as const,
  },
  {
    label: "Modelo",
    title: "Boutique",
    description: "Atenção personalizada em cada processo",
    variant: "light" as const,
  },
  {
    label: "Foco",
    title: "Executivos",
    description: "Posições-chave e lideranças estratégicas",
    variant: "dark" as const,
  },
]

const servicesEixo = [
  { title: "Executive Search" },
  { title: "RH Estratégico" },
  { title: "Assessment Comportamental" },
  { title: "Desenvolvimento de Lideranças" },
]

export function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-18">
          <div>
            <FadeInView>
              <div className="axis-line mb-4" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Sobre a eixo
              </p>
              <h2 className="mt-4 font-heading text-3xl text-text-primary md:text-4xl">
                Crescimento sustentável começa com as pessoas certas
              </h2>
            </FadeInView>

            <FadeInView className="mt-6 flex flex-col gap-6" delay={0.1}>
              <p className="text-text-secondary">
                A EIXO Consultoria nasceu para apoiar empresas que entenderam que
                crescimento sustentável depende de decisões estratégicas sobre
                pessoas.
              </p>
              <p className="text-text-secondary">
                Combinamos visão estratégica, experiência em gestão de pessoas e
                metodologia estruturada para ajudar empresas a reduzir erros de
                contratação, fortalecer lideranças e acelerar resultados.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                {servicesEixo.map((item) => (
                  <p key={item.title} className="flex items-center gap-2 text-text-secondary">
                    <FaRegCheckCircle className="size-4 shrink-0 text-gold" aria-hidden />
                    <span>{item.title}</span>
                  </p>
                ))}
              </div>
            </FadeInView>
          </div>

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {sobreHighlights.map((item) => (
              <StaggerItem key={item.label}>
                <HighlightCard {...item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
