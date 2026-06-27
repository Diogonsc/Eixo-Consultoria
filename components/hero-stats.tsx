"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useRef } from "react"

import { CountUp } from "@/components/motion/count-up"
import { useInViewOnce } from "@/hooks/use-in-view-once"

const stats = [
  { value: 2, suffix: "+", label: "Anos de experiência" },
  { value: 20, suffix: "", label: "Projetos entregues" },
  { value: null, display: "360°", label: "Visão estratégica" },
] as const

export function HeroStats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInViewOnce(ref, "-40px")
  const prefersReducedMotion = useReducedMotion()

  return (
    <div
      ref={ref}
      className="mt-12 grid grid-cols-3 gap-x-4 gap-y-0 border-t border-white/10 pt-10 sm:gap-x-8 lg:mt-14"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{
            duration: 0.5,
            delay: prefersReducedMotion ? 0 : index * 0.12,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="min-w-0 text-center sm:text-left"
        >
          <p className="font-heading text-3xl text-gold sm:text-4xl md:text-5xl">
            {"display" in stat ? (
              <motion.span
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : undefined}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {stat.display}
              </motion.span>
            ) : (
              <CountUp value={stat.value} suffix={stat.suffix} />
            )}
          </p>
          <p className="mt-1.5 text-[11px] leading-snug text-white/65 sm:mt-2 sm:text-sm sm:leading-normal">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
