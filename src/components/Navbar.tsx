"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useAdmissions } from "@/components/AdmissionsContext"
import { motion, AnimatePresence } from "framer-motion"

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
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()
  const { openModal } = useAdmissions()

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out h-16 md:h-20 flex items-center",
        scrolled
          ? "bg-slate-950/40 backdrop-blur-2xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      {/* Premium Glass Top Highlight Line */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity duration-500",
        scrolled ? "opacity-100" : "opacity-0"
      )} />
      <div className="container flex items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="relative">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all">
              DA
            </div>
            <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-white tracking-tight leading-none group-hover:text-primary transition-colors">
              DESIGN ACADEMY
            </span>
            <span className="text-[9px] text-slate-500 font-medium tracking-wider uppercase">
              Est. 1995
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-all hover:text-white relative py-2 group",
                pathname === item.href
                  ? "text-white"
                  : "text-slate-400"
              )}
            >
              {item.name}
              {/* Active/Hover Indicator */}
              <motion.div
                className={cn(
                  "absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full origin-left",
                  pathname === item.href ? "scale-x-100" : "scale-x-0"
                )}
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/20 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
          ))}

          <Button
            size="default"
            className="rounded-full px-6 h-10 font-bold bg-main-gradient text-white hover:opacity-90 transition-all ml-4 border-0 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:scale-105 active:scale-95"
            onClick={() => openModal()}
          >
            Apply Now
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white relative z-50 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          type="button"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.div>
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-background/98 backdrop-blur-2xl z-40 flex items-center justify-center md:hidden"
            >
              <nav className="flex flex-col gap-6 text-center">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-4xl font-black uppercase tracking-tighter transition-all",
                        pathname === item.href
                          ? "text-primary scale-110 drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                          : "text-white/50 hover:text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    size="lg"
                    className="mt-8 bg-main-gradient text-white hover:opacity-90 rounded-full text-xl px-16 h-16 font-black border-0 shadow-2xl shadow-primary/40"
                    onClick={() => {
                      setIsOpen(false)
                      openModal()
                    }}
                  >
                    Apply Now
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
