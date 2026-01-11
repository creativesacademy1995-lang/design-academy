import { cn } from "@/lib/utils"
import React from "react"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    variant?: "default" | "hero" | "alternate" | "grid"
    spacing?: "none" | "tight" | "default" | "loose"
    container?: boolean
    withGrid?: boolean
    className?: string
    id?: string
}

export function Section({
    children,
    variant = "default",
    spacing = "default",
    container = true,
    withGrid = false,
    className,
    id,
    ...props
}: SectionProps) {
    const variants = {
        default: "bg-background",
        hero: "relative flex items-center justify-center overflow-hidden min-h-[90vh]",
        alternate: "bg-slate-900/50",
        grid: "bg-grid relative overflow-hidden",
    }

    const spacings = {
        none: "py-0",
        tight: "py-16 md:py-24", // 64px / 96px
        default: "py-24 md:py-32", // 96px / 128px
        loose: "py-32 md:py-48", // 128px / 192px
    }

    const spacingClass = variant === "hero" ? "pt-32 pb-24 md:pt-48 md:pb-32" : spacings[spacing]

    return (
        <section
            id={id}
            className={cn(
                variants[variant],
                variant !== "hero" && spacingClass, // Hero handles its own specific padding
                className
            )}
            {...props}
        >
            {(variant === "grid" || withGrid) && (
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
            )}

            {container ? (
                <div className="container mx-auto px-6 md:px-10 relative z-10">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    )
}
