"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type MotionProps = {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
    once?: boolean
}

export function FadeIn({ children, className, delay = 0, duration = 0.5, once = true }: MotionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function SlideUp({ children, className, delay = 0, duration = 0.5, once = true }: MotionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function ScaleIn({ children, className, delay = 0, duration = 0.5, once = true }: MotionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const StaggerContainer = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const StaggerItem = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Specialized Text Reveal
export function TextReveal({ children, className, delay = 0 }: MotionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
