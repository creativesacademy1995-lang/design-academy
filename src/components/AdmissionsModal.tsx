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
    "Web Design & Development"
]

export function AdmissionsModal() {
    const { isOpen, closeModal } = useAdmissions()
    const [formData, setFormData] = React.useState({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        education: "",
        motivation: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Application submitted:", formData)
        // TODO: Add actual form submission logic
        alert("Thank you for your application! We'll be in touch soon.")
        closeModal()
        // Reset form
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            course: "",
            education: "",
            motivation: ""
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    // Close on Escape key
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                closeModal()
            }
        }
        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [isOpen, closeModal])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={closeModal}
                aria-hidden="true"
            />

            {/* Modal */}
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
                            <p className="text-slate-400 mt-2">
                                Be the first to know when we launch new courses and programs.
                            </p>
                        </div>
                        <button
                            onClick={closeModal}
                            className="h-10 w-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors shrink-0"
                            aria-label="Close modal"
                        >
                            <X className="h-6 w-6 text-slate-400" />
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Full Name */}
                    <div className="space-y-3">
                        <Label htmlFor="fullName" className="text-xs font-black text-slate-500 uppercase tracking-widest pl-1">
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

                    {/* Email Address */}
                    <div className="space-y-3">
                        <Label htmlFor="email" className="text-xs font-black text-slate-500 uppercase tracking-widest pl-1">
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

                    {/* Phone Number */}
                    <div className="space-y-3">
                        <Label htmlFor="phone" className="text-xs font-black text-slate-500 uppercase tracking-widest pl-1">
                            Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={handleChange}
                            className="h-14 bg-white/5 border-white/10 rounded-xl text-lg focus:ring-primary"
                        />
                    </div>

                    {/* Interested Course */}
                    <div className="space-y-3">
                        <Label htmlFor="course" className="text-xs font-black text-slate-500 uppercase tracking-widest pl-1">
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
                            {courses.map(course => (
                                <option key={course} value={course} className="bg-slate-900">{course}</option>
                            ))}
                        </select>
                    </div>

                    {/* Educational Background */}
                    <div className="space-y-3">
                        <Label htmlFor="education" className="text-xs font-black text-slate-500 uppercase tracking-widest pl-1">
                            Educational Background <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="education"
                            name="education"
                            type="text"
                            required
                            placeholder="e.g., Bachelor's in Computer Science"
                            value={formData.education}
                            onChange={handleChange}
                            className="h-14 bg-white/5 border-white/10 rounded-xl text-lg focus:ring-primary"
                        />
                    </div>

                    {/* Motivation */}
                    <div className="space-y-3">
                        <Label htmlFor="motivation" className="text-xs font-black text-slate-500 uppercase tracking-widest pl-1">
                            Why do you want to join? <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                            id="motivation"
                            name="motivation"
                            required
                            placeholder="Tell us about your goals and why you're interested in this program..."
                            value={formData.motivation}
                            onChange={handleChange}
                            className="min-h-[120px] bg-white/5 border-white/10 rounded-xl text-lg focus:ring-primary resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        size="lg"
                        variant="gradient"
                        className="w-full h-16 text-lg font-black rounded-xl"
                    >
                        Submit Application
                    </Button>

                    <p className="text-xs text-slate-500 text-center mt-4">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </form>
            </div>
        </div>
    )
}
