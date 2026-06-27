"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import {
  FaClipboardCheck,
  FaFileLines,
  FaHandshake,
  FaMapLocationDot,
  FaUserCheck,
} from "react-icons/fa6"

import { useInViewOnce } from "@/hooks/use-in-view-once"
import { cn } from "@/lib/utils"

const steps = [
  {
    title: "Imersão",
    description:
      "Entendemos o negócio, a cultura e os desafios específicos da posição antes de qualquer ação.",
    icon: FaHandshake,
  },
  {
    title: "Mapeamento",
    description:
      "Identificamos os melhores profissionais do mercado com abordagem ativa, discreta e qualificada.",
    icon: FaMapLocationDot,
  },
  {
    title: "Avaliação",
    description:
      "Avaliamos competências técnicas, comportamentais e o fit cultural de cada candidato em profundidade.",
    icon: FaClipboardCheck,
  },
  {
    title: "Apresentação",
    description:
      "Entregamos shortlist qualificado com relatórios executivos para apoiar a decisão do cliente.",
    icon: FaFileLines,
  },
  {
    title: "Integração",
    description:
      "Acompanhamos o onboarding e os primeiros 90 dias do profissional contratado.",
    icon: FaUserCheck,
  },
] as const

export function ComoAtuamosTimeline() {
  const ref = useRef<HTMLOListElement>(null)
  const inView = useInViewOnce(ref)
  const prefersReducedMotion = useReducedMotion()

  return (
    <ol
      ref={ref}
      className="list-none space-y-0 lg:col-span-8"
      aria-label="Etapas do processo"
    >
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1
        const Icon = step.icon

        return (
          <motion.li
            key={step.title}
            className="relative flex gap-5 pb-10 last:pb-0 lg:gap-6"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{
              duration: 0.5,
              delay: prefersReducedMotion ? 0 : index * 0.12,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {!isLast && (
              <motion.div
                aria-hidden
                className="absolute left-5 top-14 bottom-0 w-px origin-top bg-linear-to-b from-gold/50 to-gold/10 lg:left-6"
                initial={prefersReducedMotion ? { scaleY: 1 } : { scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : undefined}
                transition={{
                  duration: 0.6,
                  delay: prefersReducedMotion ? 0 : index * 0.12 + 0.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            )}

            <motion.div
              className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-sm font-semibold text-white ring-4 ring-white lg:size-12 lg:text-base"
              initial={prefersReducedMotion ? false : { scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : undefined}
              transition={{
                duration: 0.4,
                delay: prefersReducedMotion ? 0 : index * 0.12 + 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </motion.div>

            <motion.article
              className={cn(
                "min-w-0 flex-1 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border-light",
                "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md lg:p-6"
              )}
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold-light">
                  <Icon className="size-4 text-gold lg:size-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-navy lg:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.article>
          </motion.li>
        )
      })}
    </ol>
  )
}
