"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

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
        <section className="py-24 md:py-32 relative bg-background overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10">
                <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
                    <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-tighter">Success Stories</Badge>
                    <h2 className="text-4xl md:text-7xl font-black font-heading text-white">Trust the Process.</h2>
                    <p className="text-lg md:text-xl text-slate-400">
                        Join thousands of graduates who have transformed their careers through our immersive learning experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <Card key={i} className="bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-all duration-500 relative group p-8">
                            <Quote className="absolute top-8 right-8 h-12 w-12 text-white/5 group-hover:text-primary/10 transition-colors" />
                            <CardContent className="p-0 space-y-6">
                                <div className="flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-xl font-medium text-slate-200 leading-relaxed italic">
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>
                                <div className="flex items-center gap-4 pt-4">
                                    <Avatar className="h-14 w-14 border-2 border-primary/20">
                                        <AvatarImage src={testimonial.image} />
                                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                                        <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
