"use client"

import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { useInViewOnce } from "@/hooks/use-in-view-once"

type CountUpProps = {
  value: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}

export function CountUp({
  value,
  suffix = "",
  prefix = "",
  className,
  duration = 1.8,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInViewOnce(ref, "-40px")
  const prefersReducedMotion = useReducedMotion()
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))
  const [display, setDisplay] = useState(prefersReducedMotion ? String(value) : "0")

  useEffect(() => {
    if (!inView) return
    if (prefersReducedMotion) {
      setDisplay(String(value))
      return
    }

    const controls = animate(motionValue, value, {
      duration,
      ease: [0.4, 0, 0.2, 1],
    })

    return () => controls.stop()
  }, [duration, inView, motionValue, prefersReducedMotion, value])

  useEffect(() => {
    if (prefersReducedMotion) return
    return rounded.on("change", (latest) => setDisplay(String(latest)))
  }, [prefersReducedMotion, rounded])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {prefix}
      {display}
      {suffix}
    </motion.span>
  )
}
