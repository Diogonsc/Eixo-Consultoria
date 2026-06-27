"use client"

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion"
import { useRef } from "react"

import { useInViewOnce } from "@/hooks/use-in-view-once"

type StaggerContainerProps = HTMLMotionProps<"div"> & {
  stagger?: number
  delayChildren?: number
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0.1,
  ...props
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInViewOnce(ref)
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView || prefersReducedMotion ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : stagger,
            delayChildren: prefersReducedMotion ? 0 : delayChildren,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  y = 20,
}: {
  children: React.ReactNode
  className?: string
  y?: number
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={{
        hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
