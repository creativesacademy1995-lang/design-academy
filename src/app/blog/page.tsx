"use client"

import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Search, Calendar, User, Filter } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion"

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"

type BlogItem = {
  id: number
  title: string
  content?: string
  slug: string
  is_active?: boolean
  publishedAt?: string
  thumbnail?: { url: string } | null
  // If you later add these:
  author?: { name: string } | null
  category?: { name: string } | null
}

const categories = ["All", "Trends", "UX", "Development", "Career"]

function makeExcerpt(text = "", max = 140) {
  const clean = text.replace(/\s+/g, " ").trim()
  return clean.length > max ? clean.slice(0, max) + "..." : clean
}

export default function BlogIndex() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [posts, setPosts] = useState<BlogItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        // populate=thumbnail is important for image
        const res = await fetch(`${STRAPI_URL}/api/blogs?populate=thumbnail`)
        const json = await res.json()

        const mapped: BlogItem[] = (json?.data || []).map((item: any) => {
          const a = item // Strapi v5 returns fields directly in item (as your screenshot shows)
          return {
            id: a.id,
            title: a.title,
            content: a.content,
            slug: a.slug,
            is_active: a.is_active,
            publishedAt: a.publishedAt,
            thumbnail: a.thumbnail?.url ? { url: a.thumbnail.url } : null,
          }
        })

        setPosts(mapped)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const filteredPosts = useMemo(() => {
    return posts
      .filter((p) => p.is_active !== false)
      .filter((post) => {
        const matchSearch = post.title.toLowerCase().includes(search.toLowerCase())
        // Category abhi Strapi me nahi hai, is liye yahan "All" only
        const matchCat = selectedCategory === "All" || true
        return matchSearch && matchCat
      })
  }, [posts, search, selectedCategory])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Section variant="hero" withGrid spacing="none" className="border-b border-white/5 text-center bg-grid">

        <div className="container relative z-10 space-y-10 pt-32 pb-24 md:pt-48 md:pb-32 max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <Badge variant="outline" className="px-4 py-2 rounded-full glass border-white/10 text-sm font-medium text-slate-300">
              Insights & News
            </Badge>
          </FadeIn>

          <SlideUp delay={0.2}>
            <h1 className="text-5xl md:text-8xl font-black font-heading leading-[1.1] text-white">
              Word from <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 text-glow">
                Studio &amp; Labs.
              </span>
            </h1>
          </SlideUp>

          <FadeIn delay={0.4}>
            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              In-depth articles, industry news, and success stories from our global creative community.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section spacing="default" className="pb-32">
        {/* Search & Filter Bar */}
        <FadeIn delay={0.5} className="flex flex-col lg:flex-row gap-8 mb-20 items-center justify-between glass p-8 rounded-3xl border-white/5">
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
            <div className="flex gap-2 bg-white/5 p-2 rounded-2xl border border-white/5 overflow-x-auto no-scrollbar w-full lg:w-auto">
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
        </FadeIn>

        {loading ? (
          <div className="text-slate-400">Loading...</div>
        ) : (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => {
              const imageUrl = post.thumbnail?.url
                ? `${STRAPI_URL}${post.thumbnail.url}`
                : "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=800&auto=format&fit=crop"

              return (
                <StaggerItem key={post.id}>
                  <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full">
                    <Card className="h-full overflow-hidden border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 flex flex-col">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                        <Badge className="absolute top-6 left-6 bg-white/10 border-white/10 text-white">
                          Blog
                        </Badge>
                      </div>

                      <CardContent className="pt-8 px-8 flex-grow space-y-4">
                        <h2 className="text-2xl font-black font-heading text-white group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                          {post.title}
                        </h2>
                        <p className="text-slate-400 text-lg line-clamp-3 leading-relaxed">
                          {makeExcerpt(post.content || "")}
                        </p>
                      </CardContent>

                      <CardFooter className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-widest border-t border-white/5 p-8">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                            <User className="h-4 w-4" />
                          </div>
                          Admin
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {post.publishedAt ? new Date(post.publishedAt).toDateString() : ""}
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        )}
      </Section>
    </div>
  )
}
