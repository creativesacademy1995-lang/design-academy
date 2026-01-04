"use client"

import { Users, Award, Briefcase, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

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
        <section className="py-12 relative">
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <Card key={index} className="group hover:-translate-y-1 bg-white/[0.02] border-white/5">
                                <div className="p-8 flex flex-col items-center text-center space-y-3">
                                    <div className={`p-4 rounded-2xl bg-white/5 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-4xl font-black font-heading text-white">{stat.value}</h3>
                                    <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
