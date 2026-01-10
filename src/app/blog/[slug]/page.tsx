import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"

type StrapiThumb = {
  url?: string
  formats?: {
    large?: { url?: string }
    medium?: { url?: string }
    small?: { url?: string }
    thumbnail?: { url?: string }
  }
}

type StrapiBlog = {
  id: number
  title?: string
  content?: any // text OR blocks
  slug?: string
  is_active?: boolean
  publishedAt?: string
  thumbnail?: StrapiThumb | null
}

async function getPost(slug: string): Promise<StrapiBlog | null> {
  const url =
    `${STRAPI_URL}/api/blogs?filters[slug][$eq]=${encodeURIComponent(slug)}` +
    `&populate=thumbnail`

  const res = await fetch(url, { cache: "no-store" })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Strapi error ${res.status}: ${text}`)
  }

  const json = await res.json()
  return (json?.data?.[0] as StrapiBlog) ?? null
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return (
      <main className="container py-16">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/blog" className="underline">Back to Blog</Link>
      </main>
    )
  }

  const title = post.title || "Untitled"
  const isActive = post.is_active !== false

  // thumbnail url pick (large -> medium -> small -> url)
  const thumb =
    post.thumbnail?.formats?.large?.url ||
    post.thumbnail?.formats?.medium?.url ||
    post.thumbnail?.formats?.small?.url ||
    post.thumbnail?.url

  const imageUrl = thumb
    ? `${STRAPI_URL}${thumb}`
    : "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200"

  const date = post.publishedAt ? new Date(post.publishedAt).toDateString() : ""
  const postSlug = post.slug || slug

  if (!isActive) {
    return (
      <main className="container py-16">
        <h1 className="text-2xl font-bold">This post is not active</h1>
        <Link href="/blog" className="underline">Back to Blog</Link>
      </main>
    )
  }

  // content can be text OR blocks
  const contentText =
    typeof post.content === "string"
      ? post.content
      : JSON.stringify(post.content, null, 2)

  return (
    <article className="min-h-screen bg-background pb-20">
      <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
        <Image src={imageUrl} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 container">
          <Button
            variant="outline"
            size="sm"
            className="mb-6 backdrop-blur-md bg-white/10 text-white border-white/20 hover:bg-white/20"
            asChild
          >
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>

          <Badge className="mb-4">Blog</Badge>

          <h1 className="text-3xl md:text-5xl font-bold font-heading text-white max-w-4xl leading-tight mb-4">
            {title}
          </h1>

          <div className="flex items-center gap-4 text-white/80">
            <span>By Admin</span>
            {date ? (
              <>
                <span>•</span>
                <span>{date}</span>
              </>
            ) : null}
            <span>•</span>
            <span className="opacity-80">{postSlug}</span>
          </div>
        </div>
      </div>

      <div className="container mt-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="whitespace-pre-wrap">{contentText}</div>
        </div>

        <aside className="space-y-8">
          <div className="p-6 rounded-xl bg-secondary/10 border">
            <h3 className="font-bold mb-4">Share this article</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon"><Twitter className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon"><Facebook className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon"><Linkedin className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon"><Share2 className="h-4 w-4" /></Button>
            </div>
          </div>
        </aside>
      </div>
    </article>
  )
}
