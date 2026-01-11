"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"
import { Section } from "@/components/ui/section"
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <Section variant="hero" withGrid spacing="none" className="text-center relative overflow-hidden bg-grid">

                <div className="container relative z-10 space-y-10 pt-32 pb-24 md:pt-48 md:pb-32 max-w-4xl mx-auto">
                    <FadeIn delay={0.1}>
                        <Badge variant="outline" className="px-4 py-2 rounded-full glass border-white/10 text-sm font-medium text-slate-300">Support & Inquiry</Badge>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <h1 className="text-5xl md:text-8xl font-black font-heading leading-[1.1] text-white">Say <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 text-glow">Hello.</span></h1>
                    </SlideUp>
                    <FadeIn delay={0.4}>
                        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Have a question about our curriculum, admissions, or anything else? We&apos;re here to help.
                        </p>
                    </FadeIn>
                </div>
            </Section>

            <Section spacing="default" className="pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Contact Form */}
                    <SlideUp delay={0.3} className="glass p-8 md:p-12 rounded-[2.5rem] border-white/10 space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black font-heading text-white leading-tight">
                                Send a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 text-glow">Message.</span>
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                Our team typically responds within 4-6 business hours.
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">First Name</label>
                                    <Input placeholder="Jane" className="h-14 bg-white/5 border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-600 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Last Name</label>
                                    <Input placeholder="Doe" className="h-14 bg-white/5 border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-600 transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Email Address</label>
                                <Input type="email" placeholder="jane@example.com" className="h-14 bg-white/5 border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-600 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Inquiry Type</label>
                                <select className="flex h-14 w-full rounded-xl border border-white/10 bg-white/5 px-6 py-2 text-sm text-white font-bold tracking-wide focus:ring-2 focus:ring-primary/50 outline-none transition-all">
                                    <option className="bg-slate-900">General Inquiry</option>
                                    <option className="bg-slate-900">Admissions</option>
                                    <option className="bg-slate-900">Partnership</option>
                                    <option className="bg-slate-900">Support</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Your Message</label>
                                <Textarea
                                    className="flex min-h-[200px] w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary/50 outline-none resize-none transition-all"
                                    placeholder="What would you like to discuss?"
                                />
                            </div>
                            <Button type="submit" size="lg" variant="gradient" className="h-14 w-full text-lg font-black group rounded-xl shadow-glow-primary">
                                Send Inquiry <Send className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Button>
                        </form>
                    </SlideUp>

                    {/* Contact Info & Map */}
                    <div className="space-y-10">
                        <StaggerContainer className="grid gap-6">
                            {[
                                { icon: Mail, title: "Email Us", vals: ["hello@designacademy.edu", "support@designacademy.edu"] },
                                { icon: Phone, title: "Call Us", vals: ["+1 (555) 000-0000", "Mon-Fri / 9am - 6pm EST"] },
                                { icon: MapPin, title: "Visit Us", vals: ["123 Creative Ave, Design District", "New York, NY 10012"] }
                            ].map((item, i) => (
                                <StaggerItem key={i}>
                                    <Card className="glass border-white/10 hover:bg-white/5 transition-all p-8 group overflow-hidden relative">
                                        <CardContent className="flex items-start gap-6 p-0 relative z-10">
                                            <div className="h-14 w-14 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                                                <item.icon className="h-6 w-6" />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-xl font-black text-white">{item.title}</h3>
                                                {item.vals.map((v, j) => (
                                                    <p key={j} className="text-slate-400 font-medium text-sm">{v}</p>
                                                ))}
                                            </div>
                                        </CardContent>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100" />
                                    </Card>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        <FadeIn delay={0.6} className="glass p-8 rounded-[2rem] border-white/10 space-y-6">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Connect on Social</h3>
                            <div className="flex gap-4">
                                {[Twitter, Instagram, Facebook, Linkedin].map((Icon, i) => (
                                    <Button key={i} variant="outline" size="icon" className="h-12 w-12 rounded-xl border-white/10 bg-white/5 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                        <Icon className="h-5 w-5" />
                                    </Button>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Map Overlay */}
                        <FadeIn delay={0.8} className="w-full h-[300px] border border-white/10 rounded-[2rem] overflow-hidden relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1626359045612!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="grayscale hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                        </FadeIn>
                    </div>
                </div>
            </Section>
        </div>
    )
}
