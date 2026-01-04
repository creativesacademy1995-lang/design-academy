"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CtaBanner() {
    return (
        <section className="py-24 container">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 border border-white/10 p-12 md:p-24 text-center">
                {/* Glow Effects */}
                <div className="absolute top-0 left-0 w-full h-full bg-main-gradient opacity-10 blur-[100px] pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-20 animate-pulse" />

                <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                    <div className="flex justify-center">
                        <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center animate-float">
                            <Sparkles className="h-8 w-8 text-primary shadow-glow-primary" />
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-8xl font-black font-heading text-white leading-[1.1]">
                        Ready to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Transform?</span>
                    </h2>

                    <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Apply today for our 2026 cohort. Limited seats available for the world&apos;s most immersive design curriculum.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                        <Button size="lg" variant="gradient" className="h-16 px-12 text-lg group" asChild>
                            <Link href="/admissions">
                                Apply Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-16 px-12 text-lg glass" asChild>
                            <Link href="/courses">Explore Curriculum</Link>
                        </Button>
                    </div>

                    <p className="text-sm font-medium text-slate-500 uppercase tracking-widest pt-8">
                        Next Cohort Starts March 1st, 2026
                    </p>
                </div>
            </div>
        </section>
    )
}
