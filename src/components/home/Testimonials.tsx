"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Section } from "@/components/ui/section"

const testimonials = [
    {
        name: "Jordan Smith",
        role: "UI Designer @ Canva",
        content: "The curriculum is intense but rewarding. I went from zero to landing my dream job in just 6 months. The mentorship is truly world-class.",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
        rating: 5
    },
    {
        name: "Sofia Rodriguez",
        role: "Product Designer @ Spotify",
        content: "Design Academy taught me how to think, not just how to use tools. The community here is incredible and supportive even after graduation.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
        rating: 5
    },
    {
        name: "Liam Chen",
        role: "UX Lead @ Microsoft",
        content: "A transformative experience. The focus on real-world projects helped me build a portfolio that stood out in a competitive market.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
        rating: 5
    }
]

export function Testimonials() {
    return (
        <Section spacing="default" className="relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="text-center space-y-6 mb-24 max-w-3xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Success Stories</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black font-heading text-white leading-[1.1] tracking-tight">
                    Trust the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">Process.</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
                    Join thousands of graduates who have transformed their careers through our immersive learning experience.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {testimonials.map((testimonial, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all duration-500 rounded-[2.5rem] relative group p-10 flex flex-col justify-between"
                    >
                        <Quote className="absolute top-10 right-10 h-16 w-16 text-white/5 group-hover:text-primary/10 transition-colors" />

                        <div className="space-y-8">
                            <div className="flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-xl font-medium text-slate-200 leading-relaxed">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>
                        </div>

                        <div className="flex items-center gap-4 mt-12">
                            <div className="relative">
                                <Avatar className="h-16 w-16 border-2 border-primary/20 p-1">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
                                    <AvatarImage src={testimonial.image} className="rounded-full overflow-hidden" />
                                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                                </Avatar>
                            </div>
                            <div>
                                <h4 className="font-black text-white text-xl tracking-tight">{testimonial.name}</h4>
                                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">{testimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}
