"use client"

import Link from "next/link"
import Image from "next/image"
import * as React from "react"

import { Card, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, Video, ArrowRight } from "lucide-react"
import JoinNowClient from "@/components/JoinNowClient"

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
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <Badge
              variant="outline"
              className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-tighter"
            >
              Our Popular Tracks
            </Badge>

            <h2 className="text-4xl md:text-6xl font-bold font-heading text-white">
              Elevate your career.
            </h2>

            <p className="text-lg text-slate-400">
              Curated paths designed to transform you into a professional designer in months, not years.
            </p>
          </div>

          <Button variant="outline" size="lg" className="group" asChild>
            <Link href="/courses">
              View All Courses{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => {
            const href = course.slug ? `/courses/${course.slug}` : "/courses"
            const img = course.imageUrl || course.image || FALLBACK

            return (
              <Link key={String(course.id)} href={href} className="group">
                <Card className="border-white/5 bg-white/[0.02] overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:border-primary/30 transition-all duration-500 cursor-pointer">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={img}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 flex gap-2">
                      {/* ✅ fixed gradient badge */}
                      <Badge
                        className={`bg-gradient-to-r ${
                          course.color || "from-purple-500 to-indigo-500"
                        } border-0 text-white`}
                      >
                        {course.category || "Design"}
                      </Badge>

                      <Badge variant="outline" className="glass border-white/20 text-white">
                        {course.level || "Beginner"}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-black font-heading text-white group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {course.title}
                    </h3>

                    {/* ✅ description show */}
                    {!!course.description && (
                      <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                        {course.description}
                      </p>
                    )}

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-4 text-amber-500 font-bold text-sm">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-white">{course.rating ?? 5}</span>
                      <span className="text-slate-500 font-medium">
                        ({course.reviews ?? 0} reviews)
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm font-bold text-slate-400 mt-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>{course.duration || "—"}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Video className="w-5 h-5 text-primary" />
                        <span>{course.type || "Recorded"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <CardFooter className="p-8 pt-0 flex items-center justify-between">
                    <span className="text-3xl font-black text-white">{course.price || "—"}</span>

                    {/* ✅ Join Now opens admission form (NOT detail link) */}
                    <div onClick={(e) => e.preventDefault()}>
                      <JoinNowClient courseName={course.title} />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
