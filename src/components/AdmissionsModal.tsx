"use client"

import * as React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useAdmissions } from "./AdmissionsContext"

const courses = [
  "UI/UX Design Masterclass",
  "Advanced Motion Graphics",
  "Full-Stack Design Systems",
  "Product Design Fundamentals",
  "Branding & Identity Design",
  "Web Design & Development",
]

// ✅ makes a safe slug: "Advanced Motion Graphics" -> "advanced-motion-graphics"
function slugify(input: string) {
  return (input || "")
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function AdmissionsModal() {
  const { isOpen, closeModal, selectedCourse } = useAdmissions()

  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    city: "",
    education: "",
    motivation: "",
  })

  const [submitting, setSubmitting] = React.useState(false)
  const [submissionStatus, setSubmissionStatus] = React.useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = React.useState("")

  const resetAndClose = React.useCallback(() => {
    closeModal()
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course: "",
      city: "",
      education: "",
      motivation: "",
    })
    setSubmissionStatus("idle")
    setErrorMessage("")
    setSubmitting(false)
  }, [closeModal])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setSubmitting(true)
    setSubmissionStatus("idle")
    setErrorMessage("")

    const courseName = formData.course
    const courseSlug = slugify(courseName)

    // ✅ Better message: keep education + motivation
    const finalMessage =
      `Motivation:\n${formData.motivation || ""}` +
      (formData.education ? `\n\nEducation:\n${formData.education}` : "")

    const payload = {
      data: {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city || "",

        // ✅ Save BOTH (if Strapi has course field, it will store it)
        course: courseName || "",
        course_slug: courseSlug || "",

        message: finalMessage,
      },
    }

    try {
      const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
      const res = await fetch(`${baseUrl}/api/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const text = await res.text().catch(() => "<no body>")
        throw new Error(`Strapi responded ${res.status}: ${text}`)
      }

      setSubmissionStatus("success")
    } catch (err: any) {
      console.error("[Admissions] submit error:", err)
      setErrorMessage(err?.message || "Submission failed")
      setSubmissionStatus("error")
    } finally {
      setSubmitting(false)
    }
  }

  // Close on Escape
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) resetAndClose()
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, resetAndClose])

  // Prefill course from context when opened
  React.useEffect(() => {
    if (!isOpen) return
    setSubmissionStatus("idle")
    setErrorMessage("")
    setSubmitting(false)
    setFormData((prev) => ({ ...prev, course: selectedCourse ?? prev.course }))
  }, [isOpen, selectedCourse])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={resetAndClose} aria-hidden="true" />

      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass border-white/10 rounded-[2rem] shadow-2xl animate-fade-in-up"
        role="dialog"
        aria-modal="true"
        aria-labelledby="admissions-title"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 p-8 rounded-t-[2rem]">
          <div className="flex items-center justify-between">
            <div>
              <h2 id="admissions-title" className="text-3xl md:text-4xl font-black font-heading text-white">
                Apply Now
              </h2>
              <p className="text-slate-400 mt-2">Fill this form and we will contact you soon.</p>
            </div>

            <button
              onClick={resetAndClose}
              className="h-10 w-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="h-6 w-6 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Success */}
        {submissionStatus === "success" ? (
          <div className="p-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 border border-green-500/20">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>

            <h3 className="text-2xl font-black text-white">Application Submitted</h3>

            <p className="mt-2 text-slate-400">
              We received your application.
              {formData.course ? (
                <>
                  <br />
                  <span className="text-slate-300">Course: {formData.course}</span>
                </>
              ) : null}
              <br />
              We will contact you within 24–48 hours.
            </p>

            <div className="mt-6">
              <Button type="button" size="lg" variant="gradient" className="w-full h-14 text-base font-black rounded-xl" onClick={resetAndClose}>
                Done
              </Button>
            </div>

            <p className="text-xs text-slate-500 text-center mt-4">We respect your privacy.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="h-14 bg-white/5 border-white/10 rounded-xl text-lg focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="h-14 bg-white/5 border-white/10 rounded-xl text-lg focus:ring-primary"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="0300 0000000"
                value={formData.phone}
                onChange={handleChange}
                className="h-14 bg-white/5 border-white/10 rounded-xl text-lg focus:ring-primary"
              />
            </div>

            {/* City (NEW) */}
            <div className="space-y-2">
              <Label htmlFor="city" className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">
                City
              </Label>
              <Input
                id="city"
                name="city"
                type="text"
                placeholder="Karachi"
                value={formData.city}
                onChange={handleChange}
                className="h-14 bg-white/5 border-white/10 rounded-xl text-lg focus:ring-primary"
              />
            </div>

            {/* Course */}
            <div className="space-y-2">
              <Label htmlFor="course" className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">
                Interested Course <span className="text-red-500">*</span>
              </Label>
              <select
                id="course"
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className="flex h-14 w-full rounded-xl border border-white/10 bg-white/5 px-6 py-2 text-lg text-white font-medium focus:ring-2 focus:ring-primary outline-none"
              >
                <option value="" className="bg-slate-900">Select a course</option>
                {courses.map((course) => (
                  <option key={course} value={course} className="bg-slate-900">{course}</option>
                ))}
              </select>
            </div>

            {/* Education (optional) */}
            <div className="space-y-2">
              <Label htmlFor="education" className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">
                Education (optional)
              </Label>
              <Input
                id="education"
                name="education"
                type="text"
                placeholder="e.g. BA (Last Semester)"
                value={formData.education}
                onChange={handleChange}
                className="h-14 bg-white/5 border-white/10 rounded-xl text-lg focus:ring-primary"
              />
            </div>

            {/* Motivation */}
            <div className="space-y-2">
              <Label htmlFor="motivation" className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2">
                Why do you want to join? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="motivation"
                name="motivation"
                required
                placeholder="Tell us about your goals..."
                value={formData.motivation}
                onChange={handleChange}
                className="min-h-[120px] bg-white/5 border-white/10 rounded-xl text-lg focus:ring-primary resize-none"
              />
            </div>

            <Button type="submit" size="lg" variant="gradient" className="w-full h-16 text-lg font-black rounded-xl" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Application"}
            </Button>

            {submissionStatus === "error" ? (
              <div className="text-center text-sm text-red-400">{errorMessage || "Submission failed"}</div>
            ) : null}

            <p className="text-xs text-slate-500 text-center mt-4">We respect your privacy.</p>
          </form>
        )}
      </div>
    </div>
  )
}
