"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Check, ChevronDown, Rocket, ShieldCheck, CreditCard, Sparkles } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useAdmissions } from "@/components/AdmissionsContext"

export default function AdmissionsPage() {
    const { openModal } = useAdmissions()
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    return (
        <div className="min-h-screen bg-background pb-32 pt-20">
            {/* Header */}
            <section className="relative py-24 md:py-48 bg-grid overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
                <div className="container relative z-10 text-center space-y-8">
                    <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-tighter">Your Future Starts Here</Badge>
                    <h1 className="text-5xl md:text-9xl font-black font-heading text-white leading-[0.9]">Join the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Elite.</span></h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Admissions for the Summer 2026 cohort are now formally open. We look for passion, drive, and the hunger to innovate.
                    </p>
                    <div className="flex justify-center pt-4">
                                    <Button size="lg" variant="gradient" className="h-16 px-12 text-lg rounded-2xl" onClick={() => openModal()}>
                            Start Your Application
                        </Button>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-32 relative">
                <div className="container">
                    <div className="text-center space-y-4 mb-24 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-8xl font-black font-heading text-white">The Path.</h2>
                        <p className="text-lg text-slate-400">A transparent 3-step process to secure your spot at the academy.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative px-4 md:px-0">
                        <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-white/5 -z-10" />
                        {[
                            { step: 1, title: "Curated Application", desc: "Submit your details and any previous work. We value potential over pedigree.", icon: Sparkles },
                            { step: 2, title: "Cultural Interview", desc: "A 1:1 session with a mentor to ensure our culture is the right fit for your goals.", icon: ShieldCheck },
                            { step: 3, title: "Formal Onboarding", desc: "Receive your acceptance package and join our vibrant global community.", icon: Rocket }
                        ].map((s) => (
                            <div key={s.step} className="group text-center space-y-8">
                                <div className="w-32 h-32 rounded-[2.5rem] bg-slate-900 border border-white/5 flex items-center justify-center mx-auto relative group-hover:border-primary/50 transition-colors duration-500 shadow-2xl">
                                    <div className="absolute -top-4 -right-4 h-12 w-12 rounded-2xl bg-primary text-white text-xl font-black flex items-center justify-center shadow-glow-primary">
                                        {s.step}
                                    </div>
                                    <s.icon className="h-12 w-12 text-slate-500 group-hover:text-primary transition-colors duration-500" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black text-white">{s.title}</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed max-w-xs mx-auto">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-32 bg-slate-900/40 relative">
                <div className="container">
                    <div className="text-center space-y-4 mb-24 max-w-3xl mx-auto">
                        <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-tighter">Tuition Plans</Badge>
                        <h2 className="text-4xl md:text-8xl font-black font-heading text-white">Invest in You.</h2>
                        <p className="text-lg text-slate-400">Flexible payment options designed for modern learners.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { name: "Single Course", price: "$499", features: ["Full access to curriculum", "Peer-led reviews", "Certificate of completion", "Lifetime access"], color: "border-white/5" },
                            { name: "Full Professional", price: "$1,499", features: ["Everything in Single Course", "1:1 Industry Mentorship", "Custom Portfolio Review", "Guaranteed Job Interview", "Career Concierge"], popular: true, color: "border-primary/40 shadow-glow-primary" },
                            { name: "Enterprise", price: "Custom", features: ["For teams & startups", "Custom learning paths", "LMS Integration", "Dedicated Slack channel"], color: "border-white/5" }
                        ].map((plan, i) => (
                            <Card key={i} className={cn("relative flex flex-col p-8 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.04]", plan.color, plan.popular ? "scale-105 z-10" : "")}>
                                {plan.popular && <div className="absolute top-0 left-1/2 -track-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 text-xs rounded-full font-black uppercase tracking-widest shadow-glow-primary">Highly Recommended</div>}
                                <CardHeader className="p-0 mb-10 text-center">
                                    <CardTitle className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">{plan.name}</CardTitle>
                                    <div className="text-6xl font-black text-white mb-2">{plan.price}</div>
                                    <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">one-time formal payment</p>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-6 pt-0">
                                    {plan.features.map((f, index) => (
                                        <div key={index} className="flex items-center gap-4">
                                            <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                                <Check className="h-3 w-3" />
                                            </div>
                                            <span className="text-slate-300 font-medium">{f}</span>
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter className="px-0 pt-10">
                                    <Button className="w-full h-14 rounded-2xl font-black text-lg" variant={plan.popular ? "gradient" : "outline"}>Secure Your Plan</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-20 glass p-12 rounded-[2.5rem] border-white/5 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
                        <div className="h-24 w-24 rounded-3xl bg-primary/10 flex items-center justify-center shrink-0">
                            <CreditCard className="h-10 w-10 text-primary" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-3xl font-black text-white">Full-Tuition Scholarships.</h3>
                            <p className="text-slate-400 text-lg leading-relaxed">We commit 5% of all revenue to scholarships for designers from underrepresented backgrounds. No catch, just talent recognition.</p>
                            <Button variant="link" className="p-0 text-primary font-bold text-lg">Apply for Financial Aid →</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-32 bg-background pb-48">
                <div className="container max-w-4xl">
                    <h2 className="text-4xl md:text-8xl font-black font-heading text-white text-center mb-24">Q & A.</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Is any prior experience required for the programs?", a: "No. We have foundation tracks designed to take you from a total beginner to an entry-level professional in 12 weeks." },
                            { q: "How much time should I commit per week?", a: "For our intensive bootcamps, we recommend 15-20 hours of focused work including live sessions." },
                            { q: "Do you offer job guarantees?", a: "While we don&apos;t 'guarantee' jobs, 95% of our professional track students land roles within 6 months of completion." },
                            { q: "Can I switch courses after I've started?", a: "Yes, you can pivot to a different track within the first 14 days of your program starting." }
                        ].map((faq, i) => (
                            <div key={i} className="group border border-white/5 rounded-[2rem] overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                                <button
                                    className="w-full flex items-center justify-between p-8 text-left"
                                    onClick={() => toggleFaq(i)}
                                >
                                    <span className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">{faq.q}</span>
                                    <ChevronDown className={cn("h-6 w-6 text-slate-500 transition-transform duration-500", openFaq === i ? "rotate-180" : "")} />
                                </button>
                                <div className={cn(
                                    "px-8 overflow-hidden transition-all duration-500 ease-in-out",
                                    openFaq === i ? "max-h-96 pb-8" : "max-h-0"
                                )}>
                                    <p className="text-lg text-slate-400 leading-relaxed border-t border-white/5 pt-6">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
