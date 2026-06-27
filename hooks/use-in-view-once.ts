"use client"

import { useEffect, useState, type RefObject } from "react"

export function useInViewOnce<T extends Element>(
  ref: RefObject<T | null>,
  margin = "-80px"
) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || inView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: margin, threshold: 0.1 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, inView, margin])

  return inView
}
