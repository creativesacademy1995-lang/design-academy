"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <Section variant="hero" withGrid={false} spacing="none" container={false} className="min-h-screen flex items-center bg-background relative overflow-hidden pt-32 pb-16">
      {/* Background System */}
      <div className="absolute inset-0 bg-background overflow-hidden pointer-events-none">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />

        {/* Animated Glow Blobs */}
        <motion.div
          animate={{
            x: [0, 100, 0, -100, 0],
            y: [0, 50, 100, 50, 0],
            scale: [1, 1.2, 1, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0, 80, 0],
            y: [0, 100, 50, 100, 0],
            scale: [1, 0.9, 1.1, 1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-indigo-500/5 rounded-full blur-[150px]"
        />

        {/* Layered Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:100px_100px]">
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-background opacity-60" />
        </div>

        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] brightness-75 contrast-125 mix-blend-overlay" />
      </div>

      <div className="w-full relative z-10 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Centered Content */}
          <div className="text-center mb-16 space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-semibold text-primary">AI-Powered Design Education</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black font-heading leading-[1.5] text-white px-4 py-8 overflow-visible"
            >
              Unlock the{" "}
              <span className="inline-flex items-center gap-2">
                <motion.span
                  animate={{
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.1, 1],
                    x: [0, 10, 0, -10, 0],
                    y: [0, -10, 0, 10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-primary/70 inline-block font-sans drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                >
                  ⚡
                </motion.span>
                Future of
              </span>
              <br />
              Design with{" "}
              <span className="inline-flex items-center gap-2">
                <motion.span
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 360],
                    opacity: [0.5, 0.8, 0.5],
                    x: [0, -12, 0, 12, 0],
                    y: [0, 12, 0, -12, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="text-primary/70 inline-block font-sans drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                >
                  ✨
                </motion.span>
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-indigo-400 pb-3 drop-shadow-[0_0_20px_rgba(124,58,237,0.2)]">
                  Design Academy
                </span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Experience world-class, innovative, and efficient design education.
              <br />
              Master your creative skills anytime, anywhere with real-time mentorship.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <Button
                size="lg"
                className="rounded-full px-10 h-14 text-base font-black bg-main-gradient text-white hover:opacity-90 transition-all group shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)] border-0"
                asChild
              >
                <Link href="/admissions">
                  Open Account
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full px-10 h-14 text-base font-bold text-white bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all group shadow-2xl"
                asChild
              >
                <Link href="/courses">
                  Find out more
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Dashboard Widgets */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {/* My Goals Widget */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02, backgroundColor: "rgba(15, 23, 42, 0.8)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="glass rounded-3xl p-6 backdrop-blur-xl bg-slate-900/60 border border-white/10 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-400">My goals</h3>
                <span className="text-xs text-slate-500">Week 1</span>
              </div>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white font-medium">UI Design Mastery</span>
                    <span className="text-slate-400">80%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-primary to-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white font-medium">Motion Graphics</span>
                    <span className="text-slate-400">60%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">Complete 5 more projects to unlock certification</p>
            </motion.div>

            {/* Portfolio Stats Widget */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02, backgroundColor: "rgba(15, 23, 42, 0.8)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="glass rounded-3xl p-6 backdrop-blur-xl bg-slate-900/60 border border-white/10 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DA</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Portfolio / USD</p>
                    <p className="text-xs text-slate-400">Your Progress</p>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Projects</p>
                  <p className="text-2xl font-black text-white">1535</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Students</p>
                  <p className="text-2xl font-black text-white">10/25</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Awards</p>
                  <p className="text-2xl font-black text-white">397</p>
                </div>
              </div>
            </motion.div>

            {/* Monthly Stats Widget */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02, backgroundColor: "rgba(15, 23, 42, 0.8)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="glass rounded-3xl p-6 backdrop-blur-xl bg-slate-900/60 border border-white/10 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-400">Monthly test</h3>
                <span className="text-xs text-green-400">Dec 15</span>
              </div>
              <div className="relative">
                {/* Circular progress */}
                <div className="w-32 h-32 mx-auto relative">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-slate-800"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      className="text-primary"
                      initial={{ strokeDasharray: "0 352" }}
                      animate={{ strokeDasharray: "264 352" }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-black text-white">75%</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 text-center mt-4">Score: 85/100 points</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
