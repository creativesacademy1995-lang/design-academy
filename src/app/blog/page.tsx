"use client"

import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"
import { Search, Calendar, User, Filter } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const blogPosts = [
    {
        slug: "future-of-ui-design",
        title: "The Future of UI Design: 2026 Trends",
        excerpt: "Explore the emerging trends that are reshaping how we interact with digital products, from adaptive interfaces to spatial computing.",
        category: "Trends",
        author: "Sarah Jenkins",
        date: "Jan 12, 2026",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=800&auto=format&fit=crop",
        color: "from-purple-500 to-blue-500"
    },
    {
        slug: "design-systems-guide",
        title: "A Complete Guide to Design Systems",
        excerpt: "Why you need one, how to build one, and tools to maintain it. A comprehensive deep dive for scaling teams.",
        category: "Development",
        author: "David Chen",
        date: "Jan 05, 2026",
        image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=800&auto=format&fit=crop",
        color: "from-blue-500 to-indigo-500"
    },
    {
        slug: "accessible-design",
        title: "Designing for Accessibility First",
        excerpt: "Accessibility isn&apos;t an afterthought. Learn practical steps to ensure your designs are inclusive for everyone.",
        category: "UX",
        author: "Elena Rodriguez",
        date: "Dec 20, 2025",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop",
        color: "from-indigo-500 to-purple-500"
    }
]

const categories = ["All", "Trends", "UX", "Development", "Career"]

export default function BlogIndex() {
    const [search, setSearch] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredPosts = blogPosts.filter(post => {
        const matchSearch = post.title.toLowerCase().includes(search.toLowerCase())
        const matchCat = selectedCategory === "All" || post.category === selectedCategory
        return matchSearch && matchCat
    })

    return (
        <div className="min-h-screen bg-background pb-32 pt-20">
            {/* Header */}
            <section className="relative py-24 bg-grid border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
                <div className="container relative z-10 text-center space-y-8">
                    <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-tighter">Insights & News</Badge>
                    <h1 className="text-5xl md:text-9xl font-black font-heading text-white leading-[0.9]">Word from <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Studio &amp; Labs.</span></h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        In-depth articles, industry news, and success stories from our global creative community.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto pt-8">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                            <Input
                                placeholder="Search articles..."
                                className="pl-12 h-14 bg-white/5 border-white/10 rounded-2xl text-lg"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={cn(
                                        "px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
                                        selectedCategory === cat ? "bg-primary text-white" : "text-slate-400 hover:text-white bg-white/5"
                                    )}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mt-20">
                {/* Search & Filter Bar */}
                <div className="flex flex-col lg:flex-row gap-8 mb-20 items-center justify-between glass p-8 rounded-3xl border-white/5">
                    <div className="relative w-full lg:w-[400px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                        <Input
                            placeholder="Search articles..."
                            className="pl-12 h-14 bg-white/5 border-white/10 rounded-xl text-lg"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-4 w-full lg:w-auto">
                        <Filter className="h-5 w-5 text-primary shrink-0" />
                        <div className="flex gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/5 overflow-x-auto no-scrollbar w-full lg:w-auto">
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
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredPosts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col h-full">
                            <Card className="h-full overflow-hidden border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                                    <Badge className={`absolute top-6 left-6 bg-gradient-to-r ${post.color} border-0 text-white shadow-lg`}>
                                        {post.category}
                                    </Badge>
                                </div>
                                <CardContent className="pt-8 px-8 flex-grow space-y-4">
                                    <h2 className="text-2xl font-black font-heading text-white group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-400 text-lg line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </CardContent>
                                <CardFooter className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-widest border-t border-white/5 p-8">
                                    <div className="flex items-center gap-2">
                                        <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                                            <User className="h-4 w-4" />
                                        </div>
                                        {post.author}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        {post.date}
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    )
}
