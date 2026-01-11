"use client"

import Link from "next/link"
import { Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-background pt-24 pb-12 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
                    {/* Brand Column (Span 4) */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="inline-block">
                            <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 font-heading">
                                Design Academy.
                            </span>
                        </Link>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                            Empowering the next generation of digital creators. We blend technical mastery with creative chaos to forge the industry&apos;s best talent.
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Stay Updated</h4>
                            <div className="flex gap-2 max-w-md">
                                <Input
                                    placeholder="Enter your email"
                                    className="bg-white/5 border-white/10 text-white rounded-xl h-12 focus:ring-primary/50 placeholder:text-slate-600"
                                />
                                <Button variant="gradient" size="icon" className="h-12 w-12 rounded-xl shrink-0">
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="space-y-6">
                            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Platform</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/courses" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">Courses</Link>
                                </li>
                                <li>
                                    <Link href="/admissions" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">Admissions</Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">Scholarships</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Company</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/about" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6 col-span-2 md:col-span-1">
                            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Connect</h4>
                            <div className="flex flex-col gap-4">
                                <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-white group">
                                    <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Twitter className="h-4 w-4" />
                                    </div>
                                    <span className="text-sm font-medium">Twitter</span>
                                </a>
                                <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-white group">
                                    <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Instagram className="h-4 w-4" />
                                    </div>
                                    <span className="text-sm font-medium">Instagram</span>
                                </a>
                                <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-white group">
                                    <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Linkedin className="h-4 w-4" />
                                    </div>
                                    <span className="text-sm font-medium">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm font-medium">
                        © {new Date().getFullYear()} Design Academy Inc.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-slate-500 hover:text-white text-sm font-medium transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-slate-500 hover:text-white text-sm font-medium transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Giant Watermark Text */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
                <h1 className="text-[20vw] font-black font-heading text-white leading-none text-center select-none whitespace-nowrap">
                    DESIGN ACADEMY
                </h1>
            </div>
        </footer>
    )
}
