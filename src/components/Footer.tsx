"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-12 md:py-16">
            <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col gap-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 font-heading">
                            Design Academy
                        </span>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        Empowering the next generation of creative leaders through world-class design education.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold font-heading">Academy</h3>
                    <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
                    <Link href="/courses" className="text-sm text-muted-foreground hover:text-primary">Courses</Link>
                    <Link href="/admissions" className="text-sm text-muted-foreground hover:text-primary">Admissions</Link>
                    <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold font-heading">Support</h3>
                    <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Help Center</Link>
                    <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
                    <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold font-heading">Contact</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>hello@designacademy.edu</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mt-0.5" />
                        <span>
                            123 Creative Ave<br />
                            Design District, NY 10012
                        </span>
                    </div>
                </div>
            </div>
            <div className="container mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Design Academy. All rights reserved.
            </div>
        </footer>
    )
}
