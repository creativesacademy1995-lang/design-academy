import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <Section variant="hero" withGrid className="text-center bg-grid">
                <div className="container relative z-10 space-y-10 max-w-4xl mx-auto pt-32 pb-24 md:pt-48 md:pb-32">
                    <FadeIn delay={0.1}>
                        <Badge variant="outline" className="px-4 py-2 rounded-full glass border-white/10 text-sm font-medium text-slate-300">Our Story</Badge>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <h1 className="text-5xl md:text-8xl font-black font-heading leading-[1.1] text-white">Architects of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 text-glow">Ambition.</span></h1>
                    </SlideUp>
                    <FadeIn delay={0.4}>
                        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            We are more than just a school. We are a collective of world-class creators dedicated to redefining the boundaries of design education.
                        </p>
                    </FadeIn>
                </div>
            </Section>

            {/* Mission Vision Values */}
            <Section spacing="default">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Our Mission", icon: Target, text: "Empowering the next generation of creative leaders through immersive, industry-first education." },
                        { title: "Our Vision", icon: Eye, text: "To be the global benchmark for creative excellence and the birth-place of future design legends." },
                        { title: "Our Values", icon: Heart, text: "Obsession with quality, relentless innovation, and a commitment to radical inclusivity." }
                    ].map((item, i) => (
                        <StaggerItem key={i}>
                            <Card className="group p-10 bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-all duration-500 h-full">
                                <CardContent className="space-y-6 p-0">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:rotate-6 transition-transform">
                                        <item.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-black font-heading text-white">{item.title}</h3>
                                    <p className="text-lg text-slate-400 leading-relaxed">{item.text}</p>
                                </CardContent>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Founders Message */}
            <Section variant="alternate" className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <SlideUp className="relative group" delay={0.2} once={true}>
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative rounded-[2.5rem] shadow-2xl w-full border border-white/10 transition-all duration-700 aspect-square overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop"
                                alt="Founder"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute bottom-10 left-10 glass border-white/20 p-6 rounded-2xl">
                            <p className="text-white font-black text-2xl">Sarah Vance</p>
                            <p className="text-primary font-bold uppercase tracking-widest text-xs">Founder &amp; Executive Director</p>
                        </div>
                    </SlideUp>
                    <div className="space-y-10">
                        <FadeIn delay={0.3}>
                            <Badge variant="outline" className="px-4 py-2 text-primary border-primary/20 bg-primary/5 uppercase tracking-tighter">Director&apos;s Note</Badge>
                        </FadeIn>
                        <SlideUp delay={0.4}>
                            <h2 className="text-4xl md:text-7xl font-black font-heading text-white leading-tight">Bridging the Gap.</h2>
                        </SlideUp>
                        <FadeIn delay={0.5}>
                            <blockquote className="text-2xl md:text-3xl font-medium italic text-slate-300 border-l-8 border-primary pl-10 py-4 leading-relaxed bg-white/5 rounded-r-3xl">
                                &ldquo;We didn&apos;t build Design Academy to follow trends. We built it to create the people who define them. Education should be as fast as the industry it serves.&rdquo;
                            </blockquote>
                        </FadeIn>
                        <FadeIn delay={0.6}>
                            <p className="text-xl text-slate-400 leading-relaxed">
                                With over 15 years in Silicon Valley, Sarah saw a massive disconnect between student portfolios and industry requirements. Design Academy is the direct response to that problem.
                            </p>
                            <Button size="lg" variant="gradient" className="h-16 px-10 mt-8">Read Our Story <ArrowRight className="ml-2 h-5 w-5" /></Button>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* Team Grid */}
            <Section spacing="default" className="pb-32">
                <div className="text-center space-y-4 mb-24 max-w-3xl mx-auto">
                    <FadeIn delay={0.1}>
                        <Badge variant="outline" className="px-4 py-2 text-primary border-primary/20 bg-primary/5 uppercase tracking-tighter">The Leadership</Badge>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <h2 className="text-4xl md:text-8xl font-black font-heading text-white">The Makers.</h2>
                        <p className="text-lg text-slate-400">Our leadership team consists of visionaries from the world&apos;s most innovative tech companies.</p>
                    </SlideUp>
                </div>
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {[
                        { img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400", name: "Alex Thorne", role: "Head of Design" },
                        { img: "https://images.unsplash.com/photo-1534030347209-5678988a80a8?q=80&w=400", name: "David Miller", role: "VP of Curriculum" },
                        { img: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=400", name: "Elena Rossi", role: "Director of UX" },
                        { img: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=400", name: "Marco Polo", role: "Growth Lead" }
                    ].map((member, i) => (
                        <StaggerItem key={i}>
                            <div className="text-center space-y-6 group">
                                <div className="overflow-hidden rounded-[2.5rem] relative aspect-[4/5]">
                                    <Image src={member.img} alt={member.name} fill className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-black text-white">{member.name}</h3>
                                    <p className="text-sm font-bold text-primary uppercase tracking-widest">{member.role}</p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>
        </div>
    )
}
