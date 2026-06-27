import { cn } from "@/lib/utils"

type HighlightCardProps = {
  label: string
  title: string
  description: string
  variant?: "dark" | "light"
}

export function HighlightCard({
  label,
  title,
  description,
  variant = "light",
}: HighlightCardProps) {
  const isDark = variant === "dark"

  return (
    <article
      className={cn(
        "rounded-3xl p-6 lg:p-8",
        isDark ? "bg-navy" : "bg-white ring-1 ring-border-light shadow-sm"
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
        {label}
      </p>
      <h3
        className={cn(
          "mt-4 font-heading text-3xl font-semibold md:text-4xl",
          isDark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-4 text-sm leading-relaxed",
          isDark ? "text-white/60" : "text-text-secondary"
        )}
      >
        {description}
      </p>
    </article>
  )
}
