import CoursesClient, { type CourseUI } from "./CoursesClient"

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"

type StrapiCourseV5 = {
  id: number
  documentId?: string
  title?: string
  description?: string
  slug?: string
  price?: number
  duration?: string
  level?: string
  is_active?: boolean
  thumbnail?: { url?: string } | null
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
  }
}

function getThumbUrlFromAny(item: any): string | undefined {
  // v5 style: thumbnail.url
  const v5 = item?.thumbnail?.url
  if (v5) return v5

  // v4 style: attributes.thumbnail.data.attributes.url
  const v4 = item?.attributes?.thumbnail?.data?.attributes?.url
  if (v4) return v4

  return undefined
}

async function getCourses(): Promise<CourseUI[]> {
  // Only populate thumbnail (because your Course model has thumbnail)
  const url = `${STRAPI_URL}/api/courses?populate=thumbnail`

  const res = await fetch(url, { cache: "no-store" })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Strapi error ${res.status}: ${text}`)
  }

  const json = await res.json()
  const data = (json?.data ?? []) as Array<StrapiCourseV5 | StrapiCourseV4>

  return data
    .map((item: any) => {
      const a = item?.attributes ? item.attributes : item // v4 vs v5

      const thumb = getThumbUrlFromAny(item)
      const imageUrl = thumb ? `${STRAPI_URL}${thumb}` : undefined

      return {
        id: item.id,
        slug: a?.slug || String(item.id),
        title: a?.title || "Untitled",
        description: a?.description || "",
        level: a?.level || "Beginner",
        duration: a?.duration || "",
        price: typeof a?.price === "number" ? `$${a.price}` : "",
        is_active: a?.is_active !== false,
        imageUrl,
        // optional UI-only fields:
        category: "Design",
        type: "Recorded",
        rating: 5.0,
        reviews: 0,
        color: "from-purple-500 to-indigo-500",
      } satisfies CourseUI
    })
    // show only active
    .filter((c) => c.is_active !== false)
}

export default async function CoursesPage() {
  const courses = await getCourses()
  return <CoursesClient initialCourses={courses} />
}
