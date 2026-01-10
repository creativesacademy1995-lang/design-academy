import FeaturedCoursesClient, { type CourseCard } from "./FeaturedCoursesClient"
import type { ReactElement } from "react"

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
const FALLBACK_IMAGE =
  "https://via.placeholder.com/800x450.png?text=Course+Image&bg=111827&fg=ffffff"

function slugify(title = "") {
  return title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function formatPrice(price: unknown) {
  if (typeof price === "number") return `Rs ${price.toLocaleString()}`
  if (typeof price === "string" && price.trim()) return price.trim()
  return ""
}

async function getCourses(): Promise<CourseCard[]> {
  const url =
  `${STRAPI_URL}/api/courses?filters[is_active][$eq]=true` +
  `&populate=thumbnail` +
  `&pagination[limit]=3`


  try {
    const res = await fetch(url, { cache: "no-store" })

    if (!res.ok) {
      const body = await res.text().catch(() => "<unable to read body>")
      console.error(
        `[FeaturedCourses] Strapi fetch failed ${res.status} ${res.statusText}: ${body}`,
      )
      return []
    }

    const json = await res.json()
    const data = Array.isArray(json?.data) ? json.data : []

    return data.map((item: any, idx: number) => {
      // Strapi v4: item.attributes, Strapi v5: fields direct
      const a = item?.attributes ?? item ?? {}

      const thumbUrl =
        a?.thumbnail?.data?.attributes?.url || // v4 media
        a?.thumbnail?.url ||
        null

      const imageUrl = thumbUrl ? `${STRAPI_URL}${thumbUrl}` : FALLBACK_IMAGE

      const title = a?.title || "Untitled"
      const slug = a?.slug ? String(a.slug) : slugify(title)

      const mapped: CourseCard = {
        id: item?.id ?? a?.id ?? `course-${idx}-${slug}`,
        slug,
        title,
        description: a?.description || "",

        category: a?.category || "Design",
        level: a?.level || "Beginner",
        duration: a?.duration || "",
        type: a?.type || "Recorded",
        rating: a?.rating ?? 5.0,
        reviews: a?.reviews ?? 0,

        // important: support both keys
        imageUrl,
        image: imageUrl,

        price: formatPrice(a?.price),
        color: a?.color || "from-purple-500 to-indigo-500",
      }

      return mapped
    })
  } catch (err) {
    console.error("[FeaturedCourses] fetch error:", err)
    return []
  }
}

export async function FeaturedCourses() {
  const courses = await getCourses()

  return <FeaturedCoursesClient courses={courses} />
}
