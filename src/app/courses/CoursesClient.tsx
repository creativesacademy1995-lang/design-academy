"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useAdmissions } from "@/components/AdmissionsContext"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Star, Clock, Video, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

const FALLBACK_IMAGE =
  "https://via.placeholder.com/800x450.png?text=Course+Image&bg=111827&fg=ffffff"

function CourseImage({ src, alt }: { src?: string; alt?: string }) {
  const [currentSrc, setCurrentSrc] = React.useState(src || FALLBACK_IMAGE)

  return (
    <Image
      src={currentSrc}
      alt={alt || ""}
      fill
      onError={() => {
        if (currentSrc !== FALLBACK_IMAGE) setCurrentSrc(FALLBACK_IMAGE)
      }}
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />
  )
}

export type CourseUI = {
  id: number
  slug?: string | null
  title: string
  description?: string
  level?: string
  duration?: string
  price?: string
  is_active?: boolean
  imageUrl?: string
  category?: string // optional (if you add later in Strapi)
  type?: string // optional (if you add later in Strapi)
  rating?: number // optional
  reviews?: number // optional
  color?: string
}

const categories = ["All", "Design", "Development", "Animation"]
const levels = ["All", "Beginner", "Intermediate", "Advanced"]

export default function CoursesClient({ initialCourses }: { initialCourses: CourseUI[] }) {
  const [search, setSearch] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [selectedLevel, setSelectedLevel] = React.useState("All")
  const { openModal } = useAdmissions()

  const filteredCourses = initialCourses.filter((course) => {
    const matchesSearch = (course.title || "").toLowerCase().includes(search.toLowerCase())
    // For filtering, use the actual stored values (don't default missing values to a real category/level)
    const matchesCategory =
      selectedCategory === "All" || (course.category ?? "") === selectedCategory
    const matchesLevel = selectedLevel === "All" || (course.level ?? "") === selectedLevel
    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <div className="min-h-screen bg-background pb-32 pt-20">
      {/* Header */}
      <section className="relative py-24 bg-grid border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="container relative z-10 text-center space-y-6">
          <Badge
            variant="outline"
            className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-tighter"
          >
            Course Catalog
          </Badge>

          <h1 className="text-5xl md:text-8xl font-black font-heading text-white">
            Full-Stack <br /> Design Skills.
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose from our selection of programs designed to take you from beginner to professional.
          </p>
        </div>
      </section>

      <div className="container mt-20">
        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20 items-center justify-between glass p-8 rounded-3xl border-white/5">
          <div className="relative w-full lg:w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <Input
              placeholder="Search courses..."
              className="pl-12 h-14 bg-white/5 border-white/10 rounded-xl text-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full lg:w-auto items-start md:items-center">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Filter className="h-5 w-5 text-primary shrink-0" />
              <div className="flex gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/5 overflow-x-auto no-scrollbar w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={cn(
                      "px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap shrink-0",
                      selectedCategory === cat
                        ? "bg-primary text-white shadow-glow-primary"
                        : "text-slate-400 hover:text-white"
                    )}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest shrink-0">
                Level:
              </span>
              <select
                className="h-14 rounded-xl border border-white/10 bg-white/5 px-6 py-1 text-sm text-white font-bold focus:ring-2 focus:ring-primary outline-none w-full md:min-w-[160px]"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl} className="bg-slate-900">
                    {lvl}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => {
              const displayCategory = course.category ?? "Design"
              const displayLevel = course.level ?? "Beginner"

              const card = (
                <Card
                  className="h-full flex flex-col group border-white/5 bg-white/[0.02] overflow-hidden hover:-translate-y-2 duration-500">

                  <div className="relative h-64 overflow-hidden">
                    <CourseImage src={course.imageUrl} alt={course.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge
                        className={`bg-gradient-to-r ${
                          course.color || "from-purple-500 to-indigo-500"
                        } border-0 text-white`}
                      >
                        {displayCategory}
                      </Badge>
                      <Badge variant="outline" className="glass border-white/20 text-white">
                        {displayLevel}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="p-8">
                    <CardTitle className="text-2xl font-black font-heading group-hover:text-primary transition-colors leading-tight mb-2">
                      {course.title}
                    </CardTitle>

                    {course.description ? (
                      <p className="text-sm text-slate-400 mt-2 line-clamp-2">{course.description}</p>
                    ) : null}

                    {/* rating optional */}
                    <div className="flex items-center text-amber-500 font-bold">
                      <Star className="w-4 h-4 mr-1.5 fill-current" />
                      {course.rating ?? 5.0}
                      <span className="text-slate-500 ml-2 font-medium">
                        ({course.reviews ?? 0} reviews)
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="px-8 flex-grow">
                    <div className="flex items-center justify-between text-sm font-bold text-slate-400">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        {course.duration || "—"}
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="w-5 h-5 text-primary" />
                        {course.type || "Recorded"}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-8 border-t border-white/5 flex items-center justify-between">
                    <span className="text-3xl font-black text-white">{course.price || "—"}</span>
                      <Button
                        type="button"
                        variant="gradient"
                        className="rounded-xl px-8 h-12 shadow-glow-primary"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                          e.preventDefault()
                          e.stopPropagation()
                          // attempt to stop any other handlers (robust against parent Link)
                          try {
                            ;(e.nativeEvent as Event).stopImmediatePropagation()
                          } catch {}

                          // Open the shared Admissions modal; pass slug so the modal can prefill
                          void openModal(course.slug ?? null)
                        }}
                      >
                        Join Now
                      </Button>
                  </CardFooter>
                </Card>
              )

              // If slug is present, wrap in a Next `Link`. Otherwise render the card without a link
              if (course.slug) {
                return (
                  <Link href={`/courses/${encodeURIComponent(String(course.slug))}`} key={course.id} className="group">
                    {card}
                  </Link>
                )
              }

              return (
                <div key={course.id} className="group">
                  {card}
                </div>
              )
            })
          ) : (
            <div className="col-span-full text-center py-32 glass border-white/5 rounded-[2rem]">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 mb-6">
                <Search className="h-10 w-10 text-slate-500" />
              </div>
              <h3 className="text-3xl font-black text-white mb-2">No matching courses</h3>
              <p className="text-slate-400 max-w-sm mx-auto">
                Try changing filters or search text.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
