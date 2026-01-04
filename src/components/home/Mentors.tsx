"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Twitter, Linkedin, Globe } from "lucide-react"

const mentors = [
    {
        name: "Alex Rivera",
        role: "Senior Product Designer",
        company: "Google",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
        bio: "Ex-Meta, teaching spatial design and advanced prototyping."
    },
    {
        name: "Sarah Chen",
        role: "UX Research Lead",
        company: "Airbnb",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
        bio: "Specializing in inclusive design and cognitive psychology in UX."
    },
    {
        name: "Marcus Thorne",
        role: "Visual Design Director",
        company: "Apple",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
        bio: "Helping students master typography and color theory at scale."
    },
    {
        name: "Elena Vance",
        role: "Interaction Designer",
        company: "Netflix",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        bio: "Expert in motion design and entertainment-focused interfaces."
    }
]

export function Mentors() {
    return (
        <section className="py-24 md:py-32 relative bg-background">
            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="space-y-4 max-w-2xl">
                        <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-tighter">Industry Experts</Badge>
                        <h2 className="text-4xl md:text-6xl font-black font-heading text-white">Learn from the Best.</h2>
                        <p className="text-lg text-slate-400">
                            Our mentors aren&apos;t just teachers; they&apos;re world-class practitioners building the products you use every day.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-white/10 hover:bg-white/5">
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-white/10 hover:bg-white/5">
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mentors.map((mentor, i) => (
                        <Card key={i} className="group border-white/5 bg-white/[0.02] overflow-hidden hover:-translate-y-2 transition-all duration-500">
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <Image src={mentor.image} alt={mentor.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                        <button className="h-8 w-8 rounded-full glass border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                                            <Twitter className="h-4 w-4" />
                                        </button>
                                        <button className="h-8 w-8 rounded-full glass border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                                            <Linkedin className="h-4 w-4" />
                                        </button>
                                        <button className="h-8 w-8 rounded-full glass border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                                            <Globe className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{mentor.name}</h3>
                                    <p className="text-slate-300 text-sm font-medium">{mentor.role} @ {mentor.company}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
