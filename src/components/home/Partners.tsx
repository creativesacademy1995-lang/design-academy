"use client"

import { Section } from "@/components/ui/section"
import { motion } from "framer-motion"

export function Partners() {
    const partners = ["Google", "Microsoft", "Airbnb", "Spotify", "Uber", "Adobe", "Figma", "Notion"];

    return (
        <Section spacing="default" container={true} className="border-y border-white/5 overflow-hidden relative py-20">
            {/* Subtle ambient lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.05),transparent_50%)]" />

            <div className="text-center mb-16 relative z-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-white text-3xl font-black uppercase tracking-[0.5em] mb-4"
                >
                    Global Network
                </motion.h2>
                <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex relative w-full overflow-hidden h-[120px] items-center">
                    {/* Edge fades */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent z-20" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent z-20" />

                    <motion.div
                        animate={{ x: [0, -1920] }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex whitespace-nowrap gap-16 md:gap-24 items-center"
                    >
                        {[...partners, ...partners, ...partners, ...partners, ...partners].map((partner, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.1 }}
                                className="group cursor-default"
                            >
                                <span className="text-4xl md:text-5xl font-black text-slate-500 group-hover:text-primary transition-all duration-500 uppercase tracking-tighter select-none font-heading relative">
                                    {partner}
                                    {/* Subtle purple glow behind on hover */}
                                    <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full -z-10" />
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Section>
    )
}
