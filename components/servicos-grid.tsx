"use client"

import { FaSearch, FaRegStar } from "react-icons/fa"
import { FaBrain, FaUserGroup } from "react-icons/fa6"

import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/stagger-container"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Executive Search",
    description:
      "Mapeamento e atração de líderes para posições estratégicas, com abordagem consultiva e discreta.",
    icon: FaSearch,
    badges: ["C-Level", "Diretores", "Gerentes e Supervisores"],
    variant: "dark" as const,
    featured: true,
  },
  {
    title: "Assessment Center",
    description:
      "Avaliação aprofundada de perfil comportamental, competências de liderança e alinhamento cultural.",
    icon: FaRegStar,
    badges: ["Comportamental", "Liderança", "Alinhamento Cultural"],
    variant: "light" as const,
  },
  {
    title: "RH Estratégico",
    description:
      "Apoio estruturado na gestão estratégica de pessoas, cultura organizacional e estruturação de times.",
    icon: FaUserGroup,
    badges: ["Diagnóstico", "Cultura Organizacional", "Estruturação de Times"],
    variant: "light" as const,
  },
  {
    title: "Assessment Comportamental",
    description:
      "Programas customizados para fortalecer lideranças existentes e preparar a próxima geração de gestores.",
    icon: FaBrain,
    badges: ["Coaching", "Mentoria", "Feedback"],
    variant: "dark" as const,
  },
] as const

type Service = (typeof services)[number]

function ServiceCard({
  title,
  description,
  icon: Icon,
  badges,
  variant,
  featured,
}: Service & { featured?: boolean }) {
  const isDark = variant === "dark"

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-all duration-300 lg:p-10",
        "hover:-translate-y-1.5",
        isDark
          ? "bg-navy shadow-lg shadow-navy/20 hover:shadow-xl hover:shadow-navy/30"
          : "bg-white shadow-md shadow-navy/5 ring-1 ring-border-light hover:shadow-lg hover:shadow-navy/10",
        featured && "ring-1 ring-gold/30"
      )}
    >
      {isDark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,150,90,0.12),transparent_60%)]"
        />
      )}

      {featured && (
        <Badge className="absolute right-6 top-6 z-10 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white ring-0">
          Mais Procurado
        </Badge>
      )}

      <div className="relative flex flex-1 flex-col">
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-2xl",
            isDark ? "bg-gold/15" : "bg-gold-light"
          )}
        >
          <Icon className="size-5 text-gold" aria-hidden />
        </div>

        <h3
          className={cn(
            "mt-6 font-heading text-2xl font-semibold md:text-3xl",
            isDark ? "text-white" : "text-navy",
            featured && "pr-24"
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "mt-4 flex-1 text-sm leading-relaxed",
            isDark ? "text-white/65" : "text-text-secondary"
          )}
        >
          {description}
        </p>

        <div
          className={cn(
            "mt-8 flex flex-wrap gap-2 border-t pt-6",
            isDark ? "border-white/10" : "border-border-light"
          )}
        >
          {badges.map((badge) => (
            <Badge
              key={badge}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium",
                isDark
                  ? "bg-white/10 text-white/85 ring-1 ring-white/15"
                  : "bg-surface text-navy ring-1 ring-border-light"
              )}
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}

export function ServicosGrid() {
  return (
    <StaggerContainer className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-16">
      {services.map((service) => (
        <StaggerItem key={service.title}>
          <ServiceCard {...service} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}
