"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useAdmissions } from "@/components/AdmissionsContext"
import { Section } from "@/components/ui/section"

export function CtaBanner() {
    const { openModal } = useAdmissions()

    return (
        <Section spacing="default" className="relative overflow-hidden">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-12 md:p-20 text-center group backdrop-blur-xl">
                {/* Dynamic Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />

                <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                    <div className="flex justify-center">
                        <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                            <Sparkles className="h-8 w-8 text-primary shadow-glow-primary" />
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black font-heading text-white leading-[1.1] tracking-tight">
                        Ready to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">Transform?</span>
                    </h2>

                    <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-medium">
                        Apply today for our 2026 cohort. Limited seats available for the world&apos;s most immersive design curriculum.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                        <Button
                            size="lg"
                            variant="gradient"
                            className="h-12 px-8 text-base rounded-full group shadow-2xl shadow-primary/20"
                            onClick={() => openModal()}
                        >
                            Apply Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-12 px-8 text-base rounded-full border-white/10 hover:bg-white/5 backdrop-blur-md"
                            asChild
                        >
                            <Link href="/courses">Explore Curriculum</Link>
                        </Button>
                    </div>

                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                        <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">Next Cohort Starts March 1st, 2026</span>
                    </div>
                </div>
            </div>
        </Section>
    )
}
