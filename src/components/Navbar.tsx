"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useAdmissions } from "@/components/AdmissionsContext"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Admissions", href: "/admissions" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()
    const { openModal } = useAdmissions()

    React.useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] h-20 flex items-center">
            <div className="container">
                <div className="glass flex h-14 md:h-16 items-center justify-between px-6 rounded-2xl border-white/5 backdrop-blur-2xl">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 bg-main-gradient rounded-lg rotate-12 transition-transform group-hover:rotate-0" />
                        <span className="text-xl font-black text-white font-heading tracking-tighter">
                            DESIGN <span className="text-slate-400 font-medium">ACADEMY</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-xs font-bold uppercase tracking-widest transition-all hover:text-white",
                                    pathname === item.href
                                        ? "text-primary text-glow"
                                        : "text-slate-400"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button variant="gradient" size="sm" className="rounded-xl px-6 h-10 shadow-glow-primary" onClick={openModal}>
                            Apply Now
                        </Button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-400 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[-1] bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all animate-fade-in-up">
                    <nav className="flex flex-col gap-8 text-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-3xl font-black font-heading uppercase tracking-tighter transition-colors",
                                    pathname === item.href
                                        ? "text-primary text-glow"
                                        : "text-slate-400"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button size="lg" variant="gradient" className="mt-8" onClick={openModal}>
                            Join Academy
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}
