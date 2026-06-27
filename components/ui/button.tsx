import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg p-6 border border-transparent bg-clip-padding text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        gold:
          "bg-gold text-gold-foreground hover:bg-gold/80 focus-visible:border-gold focus-visible:ring-gold/30",
        navy:
          "bg-navy text-white hover:bg-navy/80 focus-visible:border-navy focus-visible:ring-navy/30",
        cyan:
          "bg-cyan text-cyan-foreground hover:bg-cyan/80 focus-visible:border-cyan focus-visible:ring-cyan/30",
        outline:
          "border-border bg-transparent hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-input/30",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 gap-1.5 px-6 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        xs: "h-7 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        lg: "h-11 gap-1.5 px-8 has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        icon: "size-10",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function renderIcon(icon: React.ReactNode, position: "start" | "end") {
  const dataIcon = position === "start" ? "inline-start" : "inline-end"

  if (React.isValidElement<{ "data-icon"?: string }>(icon)) {
    return React.cloneElement(icon, { "data-icon": dataIcon })
  }

  return (
    <span data-icon={dataIcon} className="inline-flex shrink-0">
      {icon}
    </span>
  )
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  icon,
  iconPosition = "start",
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    icon?: React.ReactNode
    iconPosition?: "start" | "end"
  }) {
  const Comp = asChild ? Slot.Root : "button"
  const isIconOnly = icon != null && children == null
  const resolvedSize = isIconOnly && size === "default" ? "icon" : size
  const iconElement = icon ? renderIcon(icon, iconPosition) : null

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={resolvedSize}
      className={cn(buttonVariants({ variant, size: resolvedSize, className }))}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {iconPosition === "start" && iconElement}
          {children}
          {iconPosition === "end" && iconElement}
        </>
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
