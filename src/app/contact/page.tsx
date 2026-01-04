"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background pt-20">
            <section className="relative py-24 md:py-48 bg-grid overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
                <div className="container relative z-10 space-y-8">
                    <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-tighter">Support & Inquiry</Badge>
                    <h1 className="text-5xl md:text-9xl font-black font-heading text-white leading-[0.9]">Say <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Hello.</span></h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
                        Have a question about our curriculum, admissions, or anything else? We&apos;re here to help.
                    </p>
                </div>
            </section>

            <div className="container py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Form */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black font-heading text-white">Send a Message.</h2>
                            <p className="text-lg text-slate-400 max-w-md">Our team typically responds within 4-6 business hours.</p>
                        </div>
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-1">First Name</label>
                                    <Input placeholder="Jane" className="h-14 bg-white/5 border-white/10 rounded-2xl focus:ring-primary" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-1">Last Name</label>
                                    <Input placeholder="Doe" className="h-14 bg-white/5 border-white/10 rounded-2xl focus:ring-primary" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-1">Email Address</label>
                                <Input type="email" placeholder="jane@example.com" className="h-14 bg-white/5 border-white/10 rounded-2xl focus:ring-primary" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-1">Inquiry Type</label>
                                <select className="flex h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-2 text-sm text-white font-bold tracking-wide focus:ring-2 focus:ring-primary outline-none">
                                    <option className="bg-slate-900">General Inquiry</option>
                                    <option className="bg-slate-900">Admissions</option>
                                    <option className="bg-slate-900">Partnership</option>
                                    <option className="bg-slate-900">Support</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-1">Your Message</label>
                                <Textarea
                                    className="flex min-h-[200px] w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-slate-300 focus:ring-primary outline-none"
                                    placeholder="What would you like to discuss?"
                                />
                            </div>
                            <Button type="submit" size="lg" variant="gradient" className="h-16 w-full text-lg font-black group">
                                Send Inquiry <Send className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Button>
                        </form>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="space-y-12">
                        <div className="grid gap-6">
                            {[
                                { icon: Mail, title: "Email Us", vals: ["hello@designacademy.edu", "support@designacademy.edu"] },
                                { icon: Phone, title: "Call Us", vals: ["+1 (555) 000-0000", "Mon-Fri / 9am - 6pm EST"] },
                                { icon: MapPin, title: "Visit Us", vals: ["123 Creative Ave, Design District", "New York, NY 10012"] }
                            ].map((item, i) => (
                                <Card key={i} className="bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-all p-8 group">
                                    <CardContent className="flex items-start gap-8 p-0">
                                        <div className="h-16 w-16 shrink-0 rounded-[1.5rem] bg-primary/10 flex items-center justify-center text-primary group-hover:rotate-6 transition-transform">
                                            <item.icon className="h-8 w-8" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-black text-white">{item.title}</h3>
                                            {item.vals.map((v, j) => (
                                                <p key={j} className="text-lg text-slate-400 font-medium">{v}</p>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest pl-1">Connect on Social</h3>
                            <div className="flex gap-4">
                                {[Twitter, Instagram, Facebook, Linkedin].map((Icon, i) => (
                                    <Button key={i} variant="outline" size="icon" className="h-14 w-14 rounded-2xl border-white/10 hover:bg-primary hover:text-white transition-all">
                                        <Icon className="h-6 w-6" />
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Map Overlay */}
                        <div className="w-full h-[400px] border border-white/5 rounded-[2.5rem] overflow-hidden relative group">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
