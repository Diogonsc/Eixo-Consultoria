"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigationItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como Atuamos", href: "#como-atuamos" },
  { label: "Contato", href: "#contato" },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "border-b border-border-light/50 bg-white/90 py-3 shadow-sm shadow-navy/5 backdrop-blur-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex shrink-0 items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2"
          aria-label="EIXO Consultoria — Página inicial"
        >
          <Image
            src="/logo-eixo.png"
            alt="Logotipo EIXO Consultoria"
            width={40}
            height={40}
            className="size-10 object-contain"
            priority
          />
          <div className="flex flex-col leading-none">
            <span
              className={cn(
                "font-heading text-2xl font-semibold tracking-tight transition-colors",
                scrolled ? "text-navy" : "text-white"
              )}
            >
              EIXO
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold">
              Consultoria
            </span>
          </div>
        </Link>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 md:flex"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "nav-link text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2",
                scrolled
                  ? "text-text-secondary hover:text-gold"
                  : "text-white/90 hover:text-gold"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button
            variant="gold"
            size="sm"
            className="cta-glow"
            icon={<ArrowRight />}
            iconPosition="end"
            asChild
          >
            <Link href="#contato">Falar com especialista</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 md:hidden",
            scrolled
              ? "text-navy hover:bg-surface-subtle"
              : "text-white hover:bg-white/10"
          )}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className={cn(
            "border-t px-6 py-6 md:hidden",
            scrolled
              ? "border-border-light bg-white/95 backdrop-blur-lg"
              : "border-white/10 bg-navy-dark/95 backdrop-blur-md"
          )}
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40",
                  scrolled ? "text-text-primary hover:text-gold" : "text-white hover:text-gold"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="gold"
              size="default"
              className="cta-glow mt-2 w-full"
              icon={<ArrowRight />}
              iconPosition="end"
              asChild
            >
              <Link href="#contato" onClick={() => setMobileOpen(false)}>
                Falar com especialista
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
