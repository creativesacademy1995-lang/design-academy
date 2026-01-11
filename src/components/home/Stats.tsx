"use client"

import { Users, Award, Briefcase, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from "@/components/ui/motion"

const stats = [
    {
        label: "Active Students",
        value: "1,200+",
        icon: Users,
        color: "text-purple-400",
    },
    {
        label: "Success Rate",
        value: "98%",
        icon: Briefcase,
        color: "text-blue-400",
    },
    {
        label: "Design Awards",
        value: "250+",
        icon: Award,
        color: "text-amber-400",
    },
    {
        label: "Hiring Partners",
        value: "45+",
        icon: Zap,
        color: "text-emerald-400",
    },
]

export function Stats() {
    return (
        <Section spacing="default" className="relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                        <StaggerItem key={index}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="group relative p-8 rounded-3xl bg-slate-950/40 border border-white/5 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-300"
                            >
                                {/* Gradient line ornament */}
                                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex flex-col items-center text-center space-y-6">
                                    <div className={`p-4 rounded-2xl bg-slate-900/80 border border-white/5 ${stat.color} shadow-lg group-hover:scale-110 group-hover:shadow-primary/20 transition-all duration-300`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-5xl font-black font-heading text-white tracking-tight">
                                            {stat.value}
                                        </h3>
                                        <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </StaggerItem>
                    )
                })}
            </StaggerContainer>
        </Section>
    )
}
