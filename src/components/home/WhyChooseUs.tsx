"use client"

import { Zap, Users, Trophy, Layout } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Section } from "@/components/ui/section"


const benefits = [
    {
        title: "Elite Mentors",
        description: "Learn from designers at top-tier tech giants like Google & Meta.",
        icon: Users,
        color: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30",
        shadow: "shadow-purple-500/10"
    },
    {
        title: "Dynamic Curriculum",
        description: "Always updated with the latest industry shifts and AI tools.",
        icon: Layout,
        color: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30",
        shadow: "shadow-blue-500/10"
    },
    {
        title: "Career Accelerator",
        description: "95% of our students land roles within 6 months of graduation.",
        icon: Trophy,
        color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
        shadow: "shadow-amber-500/10"
    },
    {
        title: "Global Network",
        description: "Join a thriving community of 5k+ creatives worldwide.",
        icon: Zap,
        color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
        shadow: "shadow-emerald-500/10"
    },
]

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0], index: number }) {
    const Icon = benefit.icon
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-full"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="group h-full p-6 md:p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 flex flex-col items-center text-center shadow-2xl"
            >
                {/* Visual Glow behind icon */}
                <div className={`absolute top-8 w-20 h-20 rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity bg-gradient-to-br ${benefit.color}`} />

                <div
                    style={{ transform: "translateZ(50px)" }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} border ${benefit.color.split(' ').pop()} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-2xl relative z-10`}
                >
                    <Icon className="w-8 h-8 drop-shadow-lg" />
                </div>

                <div style={{ transform: "translateZ(40px)" }} className="space-y-3 relative z-10">
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight">
                        {benefit.title}
                    </h3>
                    <p className="text-slate-400 font-medium leading-relaxed text-xs md:text-sm">
                        {benefit.description}
                    </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-5 w-8 h-1 rounded-full bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-16`} />
            </div>
        </motion.div>
    )
}

export function WhyChooseUs() {
    return (
        <Section spacing="default" className="relative overflow-hidden py-24 md:py-32 px-8 md:px-24">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none animate-pulse" />

            <div className="text-center space-y-6 mb-20 max-w-4xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">The Advantage</span>
                </div>

                <h2 className="text-5xl md:text-8xl font-black font-heading leading-[1.1] text-white tracking-tight">
                    The Academy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">Standard.</span>
                </h2>

                <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    We don&apos;t just teach tools. We architect the world&apos;s most capable design thinkers, equipping them with the vision to lead the future of digital experience.
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-20 perspective-1000">
                    {benefits.map((benefit, i) => (
                        <BenefitCard key={i} benefit={benefit} index={i} />
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </Section>
    )
}
