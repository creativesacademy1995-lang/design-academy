"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import * as React from "react"

import { Card, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, Video, ArrowRight } from "lucide-react"
import JoinNowClient from "@/components/JoinNowClient"
import { Section } from "@/components/ui/section"
import { StaggerContainer, StaggerItem } from "@/components/ui/motion"

export type CourseCard = {
  id: number | string
  title: string
  description?: string
  category?: string
  rating?: number
  reviews?: number
  duration?: string
  type?: string
  // ✅ support both
  image?: string
  imageUrl?: string

  price?: string
  color?: string
  slug?: string | null
  level?: string
}

const FALLBACK =
  "https://via.placeholder.com/800x450.png?text=Course+Image&bg=111827&fg=ffffff"

export default function FeaturedCoursesClient({ courses }: { courses: CourseCard[] }) {
  return (
    <Section spacing="default" className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="space-y-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Our Popular Tracks</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-black font-heading text-white leading-[1.1] tracking-tight">
            Elevate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">Career.</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
            Curated paths designed to transform you into a professional designer in months, not years.
          </p>
        </div>

        <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-white/10 hover:bg-white/5 group" asChild>
          <Link href="/courses">
            View All Courses{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course) => {
          const href = course.slug ? `/courses/${course.slug}` : "/courses"
          const img = course.imageUrl || course.image || FALLBACK

          return (
            <StaggerItem key={String(course.id)}>
              <Link href={href} className="group h-full block">
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full flex flex-col rounded-[2rem] bg-white/[0.03] border border-white/5 overflow-hidden backdrop-blur-sm hover:bg-white/[0.06] hover:border-primary/30 transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden m-2 rounded-[1.5rem]">
                    <Image
                      src={img}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge
                        className={`bg-gradient-to-r ${course.color || "from-purple-500 to-indigo-500"} border-0 text-white font-bold px-3 py-1`}
                      >
                        {course.category || "Design"}
                      </Badge>

                      <Badge className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-3 py-1">
                        {course.level || "Beginner"}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 pb-4 flex-1 flex flex-col">
                    <h3 className="text-2xl font-black font-heading text-white group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {course.title}
                    </h3>

                    {!!course.description && (
                      <p className="text-slate-500 font-medium text-sm mt-3 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>
                    )}

                    {/* Stats */}
                    <div className="flex items-center gap-4 mt-6">
                      <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-white">{course.rating ?? 5}</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-slate-800" />
                      <span className="text-slate-500 font-bold text-sm">
                        {course.reviews ?? 0} reviews
                      </span>
                    </div>

                    {/* Meta Row */}
                    <div className="flex items-center gap-6 mt-6">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Clock className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs font-bold text-slate-400">{course.duration || "—"}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Video className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs font-bold text-slate-400">{course.type || "Recorded"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Area */}
                  <div className="p-8 pt-4 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Tuition</span>
                      <span className="text-3xl font-black text-white">{course.price || "—"}</span>
                    </div>

                    <div onClick={(e) => e.preventDefault()}>
                      <JoinNowClient courseName={course.title} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </Section>
  )
}
