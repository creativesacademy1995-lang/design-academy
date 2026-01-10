import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import JoinNowClient from "@/components/JoinNowClient"
import { Button } from "@/components/ui/button"

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"

type StrapiCourseV5 = {
  id: number
  title?: string
  description?: string
  slug?: string
  price?: number
  duration?: string
  level?: string
  is_active?: boolean
  thumbnail?: { url?: string } | null
  publishedAt?: string
}

type StrapiCourseV4 = {
  id: number
  attributes?: {
    title?: string
    description?: string
    slug?: string
    price?: number
    duration?: string
    level?: string
    is_active?: boolean
    thumbnail?: { data?: { attributes?: { url?: string } } }
    publishedAt?: string
  }
}

function getAttr(item: any) {
  return item?.attributes ? item.attributes : item
}

function getThumbUrl(item: any): string | undefined {
  // v5: thumbnail.url
  const v5 = item?.thumbnail?.url
  if (v5) return v5

  // v4: attributes.thumbnail.data.attributes.url
  const v4 = item?.attributes?.thumbnail?.data?.attributes?.url
  if (v4) return v4

  return undefined
}

async function getCourse(slug: string): Promise<StrapiCourseV5 | StrapiCourseV4 | null> {
  // simple and safe populate (only thumbnail exists in your Course)
  const url =
    `${STRAPI_URL}/api/courses?filters[slug][$eq]=${encodeURIComponent(slug)}` +
    `&populate=thumbnail`

  const res = await fetch(url, { cache: "no-store" })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Strapi error ${res.status}: ${text}`)
  }

  const json = await res.json()
  return json?.data?.[0] ?? null
}

// Next.js 15: params can be Promise
export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = await getCourse(slug)

  if (!course) {
    return (
      <main className="container py-16">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <Link href="/courses" className="underline">
          Back to Courses
        </Link>
      </main>
    )
  }

  const a: any = getAttr(course)

  const title = a?.title || "Untitled"
  const description = a?.description || ""
  const level = a?.level || "Beginner"
  const duration = a?.duration || ""
  const isActive = a?.is_active !== false
  const priceText = typeof a?.price === "number" ? `$${a.price}` : ""
  const thumb = getThumbUrl(course)

  const imageUrl = thumb
    ? `${STRAPI_URL}${thumb}`
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"

  if (!isActive) {
    return (
      <main className="container py-16">
        <h1 className="text-2xl font-bold">This course is not active</h1>
        <Link href="/courses" className="underline">
          Back to Courses
        </Link>
      </main>
    )
  }

  return (
    <article className="min-h-screen bg-background pb-24">
      {/* Hero */}
      <div className="w-full h-[420px] md:h-[520px] relative overflow-hidden">
        <Image src={imageUrl} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 container">
          <Button
            variant="outline"
            size="sm"
            className="mb-6 backdrop-blur-md bg-white/10 text-white border-white/20 hover:bg-white/20"
            asChild
          >
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge>{level}</Badge>
            {duration ? (
              <Badge variant="outline" className="text-white border-white/20 bg-white/10">
                <Clock className="h-3.5 w-3.5 mr-1" /> {duration}
              </Badge>
            ) : null}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-heading text-white max-w-4xl leading-tight mb-4">
            {title}
          </h1>

          <div className="text-white/80 flex items-center gap-3">
            {priceText ? <span className="font-bold text-white">{priceText}</span> : null}
            {priceText && duration ? <span>•</span> : null}
            {duration ? <span>{duration}</span> : null}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mt-12 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>About this course</h2>
          <div className="whitespace-pre-wrap">{description || "No description yet."}</div>
        </div>

        <aside className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-bold mb-3">Enroll</h3>
            <p className="text-sm text-muted-foreground mb-4">
              This is UI only. Later we can connect it to Apply Now / Checkout.
            </p>

            <JoinNowClient courseName={title} />
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-bold mb-3">Details</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <div className="flex justify-between">
                <span>Level</span>
                <span className="text-white">{level}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration</span>
                <span className="text-white">{duration || "—"}</span>
              </div>
              <div className="flex justify-between">
                <span>Price</span>
                <span className="text-white">{priceText || "—"}</span>
              </div>
              <div className="flex justify-between">
                <span>Slug</span>
                <span className="text-white">{slug}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </article>
  )
}
