"use client"

import { BookOpen, Target, Rocket } from "lucide-react"

const steps = [
    {
        number: "01",
        title: "Choose Your Path",
        description: "Select from our range of industry-aligned courses.",
        icon: BookOpen
    },
    {
        number: "02",
        title: "Learn by Doing",
        description: "Work on real-world projects with expert mentorship.",
        icon: Target
    },
    {
        number: "03",
        title: "Get Certified",
        description: "Earn your certificate and launch your dream career.",
        icon: Rocket
    }
]

export function HowItWorks() {
    return (
        <section className="py-20 bg-background text-foreground">
            <div className="container">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading">How It Works</h2>
                    <p className="text-muted-foreground">Your journey to becoming a pro designer in 3 simple steps.</p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                    {/* Connecting line for desktop - simplified implementation */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -z-10" />

                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <div key={index} className="flex flex-col items-center text-center space-y-4 relative bg-background">
                                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center border-4 border-background shadow-lg mb-4 z-10">
                                    <Icon className="w-10 h-10 text-primary" />
                                </div>
                                <div className="space-y-2 max-w-xs">
                                    <div className="text-sm font-bold text-primary uppercase tracking-wider">Step {step.number}</div>
                                    <h3 className="text-xl font-bold">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
