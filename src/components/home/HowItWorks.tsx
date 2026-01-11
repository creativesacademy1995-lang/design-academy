"use client"

import { BookOpen, Target, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"

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
        <Section spacing="default" className="relative overflow-hidden">
            {/* Fancy Background Glows */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-x-1/2 -z-10" />

            <div className="text-center mb-24 space-y-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
                >
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">The Architecture</span>
                </motion.div>

                <h2 className="text-5xl md:text-8xl font-black font-heading text-white leading-[1] tracking-tighter">
                    How it <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">Works.</span>
                </h2>

                <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                    Your evolution into a pro designer in 3 high-impact phases.
                </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4">
                {/* Visual Connector - Moving particles or gradient trail */}
                <div className="hidden md:block absolute top-24 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent -z-10 overflow-hidden">
                    <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                </div>

                {steps.map((step, index) => {
                    const Icon = step.icon
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -12 }}
                            className="relative flex flex-col items-center group"
                        >
                            {/* Fancy Card Design */}
                            <div className="relative mb-12">
                                <div className="w-48 h-48 rounded-[3rem] bg-slate-900 border border-white/10 flex items-center justify-center relative shadow-[0_0_60px_-15px_rgba(0,0,0,0.5)] group-hover:border-primary/40 transition-all duration-700 overflow-hidden backdrop-blur-xl">
                                    {/* Inner Glows */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
                                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/10 blur-[60px] group-hover:bg-primary/20 transition-all" />

                                    <Icon className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
                                </div>

                                {/* Floating Number Tag */}
                                <motion.div
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                                    className="absolute -top-6 -right-6 h-16 w-16 rounded-3xl bg-slate-900 border border-white/10 shadow-2xl flex items-center justify-center z-20 backdrop-blur-xl group-hover:bg-primary transition-colors duration-500"
                                >
                                    <span className="text-2xl font-black text-white group-hover:scale-110 transition-transform">{step.number}</span>
                                </motion.div>
                            </div>

                            <div className="text-center space-y-4">
                                <h3 className="text-3xl font-black text-white tracking-tighter group-hover:text-primary transition-colors">{step.title}</h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-bold max-w-[280px]">
                                    {step.description}
                                </p>
                            </div>

                            {/* Decorative element for fancy look */}
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    )
                })}
            </div>
        </Section>
    )
}
