"use client"

import { Zap, Users, Trophy, Layout } from "lucide-react"
import { Card } from "@/components/ui/card"

const benefits = [
    {
        title: "Elite Mentors",
        description: "Learn from designers at top-tier tech giants.",
        icon: Users,
        color: "bg-purple-500/10 text-purple-400",
    },
    {
        title: "Dynamic Curriculum",
        description: "Always updated with the latest industry shifts.",
        icon: Layout,
        color: "bg-blue-500/10 text-blue-400",
    },
    {
        title: "Career Accelerator",
        description: "95% of our students land roles within 6 months.",
        icon: Trophy,
        color: "bg-amber-500/10 text-amber-400",
    },
    {
        title: "Global Network",
        description: "Join a thriving community of 5k+ creatives.",
        icon: Zap,
        color: "bg-emerald-500/10 text-emerald-400",
    },
]

export function WhyChooseUs() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container relative z-10">
                <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-7xl font-black font-heading text-white">The Academy Standard.</h2>
                    <p className="text-lg md:text-xl text-slate-400">
                        We don&apos;t just teach tools. We build the world&apos;s most capable design thinkers and visual problem solvers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, i) => {
                        const Icon = benefit.icon
                        return (
                            <Card key={i} className="bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-all duration-500 hover:shadow-glow-primary group">
                                <div className="p-8 space-y-6">
                                    <div className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
