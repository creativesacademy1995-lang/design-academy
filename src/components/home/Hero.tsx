"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background with Ambient Glows */}
            <div className="absolute inset-0 z-0 bg-grid opacity-20" />
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="container relative z-10">
                <div className="flex flex-col items-center text-center space-y-10 max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-sm font-medium animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
                        <span className="text-slate-300">Enrollment open for 2026</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black font-heading leading-[1.1] text-white animate-fade-in-up delay-100">
                        Design the <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 text-glow">
                            Future Today
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-400 max-w-3xl leading-relaxed animate-fade-in-up delay-200">
                        Join the world&apos;s most innovative design academy. Learn from industry giants at Google, Apple, and Netflix. Your career starts here.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 w-full justify-center animate-fade-in-up delay-300">
                        <Button size="lg" variant="gradient" className="text-lg h-16 px-10 group" asChild>
                            <Link href="/courses">
                                Explore Courses <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg h-16 px-10 group backdrop-blur-xl" asChild>
                            <Link href="/admissions">
                                <Play className="mr-2 h-5 w-5 fill-white" /> Watch Intro
                            </Link>
                        </Button>
                    </div>

                    {/* Abstract UI Elements Float */}
                    <div className="absolute -left-20 top-1/2 hidden xl:block animate-float animation-delay-500">
                        <div className="glass p-6 rounded-2xl border-white/10 w-64 rotate-12">
                            <div className="h-2 w-12 bg-primary rounded-full mb-4" />
                            <div className="space-y-2">
                                <div className="h-4 w-full bg-white/10 rounded" />
                                <div className="h-4 w-3/4 bg-white/10 rounded" />
                            </div>
                        </div>
                    </div>

                    <div className="absolute -right-20 top-1/3 hidden xl:block animate-float">
                        <div className="glass p-6 rounded-2xl border-white/10 w-64 -rotate-12">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">A</div>
                                <div className="h-3 w-20 bg-white/10 rounded-full" />
                            </div>
                            <div className="h-20 w-full bg-white/5 rounded-xl border border-white/5" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
