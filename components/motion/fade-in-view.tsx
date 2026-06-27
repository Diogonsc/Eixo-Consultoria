"use client"

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion"
import { useRef } from "react"

import { useInViewOnce } from "@/hooks/use-in-view-once"

type FadeInViewProps = HTMLMotionProps<"div"> & {
  delay?: number
  y?: number
  duration?: number
}

export function FadeInView({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.6,
  ...props
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInViewOnce(ref)
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
