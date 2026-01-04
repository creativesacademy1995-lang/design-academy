"use client"

import * as React from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Star, Clock, Video, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock Data
const allCourses = [
    {
        id: 1,
        title: "UI/UX Design Masterclass",
        category: "Design",
        level: "Intermediate",
        rating: 4.9,
        reviews: 128,
        duration: "12 Weeks",
        type: "Live Classes",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d4f?q=80&w=800&auto=format&fit=crop",
        price: "$499",
        color: "from-purple-500 to-indigo-500"
    },
    {
        id: 2,
        title: "Advanced Motion Graphics",
        category: "Animation",
        level: "Advanced",
        rating: 4.8,
        reviews: 85,
        duration: "8 Weeks",
        type: "Recorded",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
        price: "$399",
        color: "from-blue-500 to-indigo-500"
    },
    {
        id: 3,
        title: "Full-Stack Design Systems",
        category: "Development",
        level: "Advanced",
        rating: 5.0,
        reviews: 42,
        duration: "10 Weeks",
        type: "Live Classes",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        price: "$599",
        color: "from-indigo-500 to-blue-500"
    },
    {
        id: 4,
        title: "Graphic Design Fundamentals",
        category: "Design",
        level: "Beginner",
        rating: 4.7,
        reviews: 210,
        duration: "6 Weeks",
        type: "Recorded",
        image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=800&auto=format&fit=crop",
        price: "$299",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 5,
        title: "Webflow for Designers",
        category: "Development",
        level: "Intermediate",
        rating: 4.9,
        reviews: 56,
        duration: "4 Weeks",
        type: "Recorded",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
        price: "$199",
        color: "from-blue-400 to-cyan-400"
    },
    {
        id: 6,
        title: "3D Modeling with Blender",
        category: "Animation",
        level: "Beginner",
        rating: 4.8,
        reviews: 95,
        duration: "8 Weeks",
        type: "Live Classes",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3caf?q=80&w=800&auto=format&fit=crop",
        price: "$349",
        color: "from-orange-500 to-red-500"
    }
]

const categories = ["All", "Design", "Development", "Animation"]
const levels = ["All", "Beginner", "Intermediate", "Advanced"]

export default function CoursesPage() {
    const [search, setSearch] = React.useState("")
    const [selectedCategory, setSelectedCategory] = React.useState("All")
    const [selectedLevel, setSelectedLevel] = React.useState("All")

    const filteredCourses = allCourses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
        const matchesLevel = selectedLevel === "All" || course.level === selectedLevel
        return matchesSearch && matchesCategory && matchesLevel
    })

    return (
        <div className="min-h-screen bg-background pb-32 pt-20">
            {/* Header */}
            <section className="relative py-24 bg-grid border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
                <div className="container relative z-10 text-center space-y-6">
                    <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-tighter">Course Catalog</Badge>
                    <h1 className="text-5xl md:text-8xl font-black font-heading text-white">Full-Stack <br /> Design Skills.</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Choose from our selection of industry-leading programs designed to take you from beginner to professional.
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
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        className={cn(
                                            "px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap shrink-0",
                                            selectedCategory === cat ? "bg-primary text-white shadow-glow-primary" : "text-slate-400 hover:text-white"
                                        )}
                                        onClick={() => setSelectedCategory(cat)}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest shrink-0">Level:</span>
                            <select
                                className="h-14 rounded-xl border border-white/10 bg-white/5 px-6 py-1 text-sm text-white font-bold focus:ring-2 focus:ring-primary outline-none w-full md:min-w-[160px]"
                                value={selectedLevel}
                                onChange={(e) => setSelectedLevel(e.target.value)}
                            >
                                {levels.map(lvl => (
                                    <option key={lvl} value={lvl} className="bg-slate-900">{lvl}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <Card key={course.id} className="h-full flex flex-col group border-white/5 bg-white/[0.02] overflow-hidden hover:-translate-y-2 duration-500">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <Badge className={`bg-gradient-to-r ${course.color} border-0 text-white`}>{course.category}</Badge>
                                        <Badge variant="outline" className="glass border-white/20 text-white">{course.level}</Badge>
                                    </div>
                                </div>
                                <CardHeader className="p-8">
                                    <CardTitle className="text-2xl font-black font-heading group-hover:text-primary transition-colors leading-tight mb-2">
                                        {course.title}
                                    </CardTitle>
                                    <div className="flex items-center text-amber-500 font-bold">
                                        <Star className="w-4 h-4 mr-1.5 fill-current" />
                                        {course.rating} <span className="text-slate-500 ml-2 font-medium">({course.reviews} reviews)</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="px-8 flex-grow">
                                    <div className="flex items-center justify-between text-sm font-bold text-slate-400">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-primary" />
                                            {course.duration}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Video className="w-5 h-5 text-primary" />
                                            {course.type}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-8 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-3xl font-black text-white">{course.price}</span>
                                    <Button variant="gradient" className="rounded-xl px-8 h-12 shadow-glow-primary">Join Now</Button>
                                </CardFooter>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-32 glass border-white/5 rounded-[2rem]">
                            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 mb-6">
                                <Search className="h-10 w-10 text-slate-500" />
                            </div>
                            <h3 className="text-3xl font-black text-white mb-2">No matching courses</h3>
                            <p className="text-slate-400 max-w-sm mx-auto">Try adjusting your filters or search terms to find what you&apos;re looking for.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
