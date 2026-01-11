"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Twitter, Linkedin, Globe } from "lucide-react"
import { Section } from "@/components/ui/section"

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
        <Section spacing="default" className="relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 relative z-10">
                <div className="space-y-6 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                        <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Industry Experts</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black font-heading text-white leading-[1.1] tracking-tight">
                        Learn from <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">the Best.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
                        Our mentors aren&apos;t just teachers; they&apos;re world-class practitioners building the products you use every day.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full h-14 w-14 border-white/10 hover:bg-white/5 group">
                        <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full h-14 w-14 border-white/10 hover:bg-white/5 group">
                        <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {mentors.map((mentor, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -12 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group relative rounded-[2.5rem] bg-white/[0.03] border border-white/5 overflow-hidden backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-500"
                    >
                        <div className="relative aspect-[4/5] m-2 overflow-hidden rounded-[2rem]">
                            <Image
                                src={mentor.image}
                                alt={mentor.name}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                            {/* Social Overlay */}
                            <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                <button className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                                    <Twitter className="h-4 w-4" />
                                </button>
                                <button className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                                    <Linkedin className="h-4 w-4" />
                                </button>
                            </div>

                            {/* Info Overlay */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-2xl font-black text-white leading-tight mb-1">{mentor.name}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-primary font-bold text-xs uppercase tracking-wider">{mentor.role}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                                    <span className="text-slate-400 font-bold text-xs uppercase tracking-wider">{mentor.company}</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-2">
                            <p className="text-slate-500 text-sm font-medium line-clamp-2 leading-relaxed">
                                {mentor.bio}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}
