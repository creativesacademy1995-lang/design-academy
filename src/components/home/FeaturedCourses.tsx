"use client"

import Link from "next/link"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Clock, Video, ArrowRight } from "lucide-react"

const courses = [
    {
        id: 1,
        title: "UI/UX Design Masterclass",
        category: "Design",
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
        rating: 4.8,
        reviews: 85,
        duration: "8 Weeks",
        type: "Recorded",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
        price: "$399",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 3,
        title: "Full-Stack Design Systems",
        category: "Development",
        rating: 5.0,
        reviews: 42,
        duration: "10 Weeks",
        type: "Live Classes",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        price: "$599",
        color: "from-emerald-500 to-teal-500"
    }
]

export function FeaturedCourses() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="space-y-4 max-w-2xl">
                        <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-tighter">Our Popular Tracks</Badge>
                        <h2 className="text-4xl md:text-6xl font-bold font-heading text-white">Elevate your career.</h2>
                        <p className="text-lg text-slate-400">
                            Curated paths designed to transform you into a professional designer in months, not years.
                        </p>
                    </div>
                    <Button variant="outline" size="lg" className="group" asChild>
                        <Link href="/courses">
                            View All Courses <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <Card key={course.id} className="group border-white/5 bg-white/[0.02] overflow-hidden flex flex-col h-full hover:border-primary/30 transition-all duration-500">
                            <div className="relative h-64 overflow-hidden">
                                <Image src={course.image} alt={course.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                                <Badge className={`absolute top-6 left-6 bg-gradient-to-r ${course.color} border-0 text-white shadow-lg`}>
                                    {course.category}
                                </Badge>
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                                    <div className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-xl text-xs font-bold border-white/10 text-white">
                                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        {course.rating}
                                    </div>
                                    <span className="text-2xl font-black text-white">{course.price}</span>
                                </div>
                            </div>

                            <CardHeader className="p-8 flex-1">
                                <CardTitle className="leading-tight group-hover:text-primary transition-colors text-2xl font-black">{course.title}</CardTitle>
                                <div className="flex items-center gap-4 pt-6 text-slate-500 font-bold text-sm uppercase tracking-widest">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-primary" /> {course.duration}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Video className="w-4 h-4 text-primary" /> {course.type}
                                    </div>
                                </div>
                            </CardHeader>

                            <CardFooter className="p-8 pt-0">
                                <Button className="w-full h-12 rounded-xl" variant="gradient" asChild>
                                    <Link href="/courses">Learn More</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
