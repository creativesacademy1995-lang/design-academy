import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default async function BlogPostPage() {
    // const { slug } = await params; (Removed to fix unused var error)

    // Mock post data retrieval
    const post = {
        title: "The Future of UI Design: 2026 Trends",
        date: "Jan 12, 2026",
        author: "Sarah Jenkins",
        category: "Trends",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200",
        content: `
      <p>As we step into 2026, the landscape of user interface design is undergoing a paradigm shift. The convergence of spatial computing, AI-driven layouts, and hyper-personalization is creating a new canvas for designers.</p>
      
      <h3>1. Spatial Interfaces</h3>
      <p>With the widespread adoption of AR glasses, interfaces are no longer confined to 2D screens. Designers must now think in depth, layers, and distance. Interactions are becoming more gestural and voice-based, reducing the reliance on traditional clicks and taps.</p>
      
      <h3>2. AI-Generated layouts</h3>
      <p>Static layouts are becoming a thing of the past. Applications now adapt in real-time to user behavior, generating layouts that optimize for the specific task at hand. This requires a shift from designing pages to designing flexible systems.</p>
      
      <blockquote>&quot;The role of the designer is shifting from creator of artifacts to curator of experiences.&quot;</blockquote>
      
      <h3>3. Neo-Glassmorphism</h3>
      <p>The glassmorphism trend has evolved. It&apos;s now thinner, more performant, and dynamic. We see it used to create depth in flat screens, giving users a sense of context without overwhelming them.</p>
      
      <p>In conclusion, 2026 is the year where the screen boundary dissolves. Are you ready?</p>
    `
    }

    return (
        <article className="min-h-screen bg-background pb-20">
            {/* Hero Image */}
            <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 container">
                    <Button variant="outline" size="sm" className="mb-6 backdrop-blur-md bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
                        <Link href="/blog">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                        </Link>
                    </Button>
                    <Badge className="mb-4">{post.category}</Badge>
                    <h1 className="text-3xl md:text-5xl font-bold font-heading text-white max-w-4xl leading-tight mb-4">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-white/80">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>

            <div className="container mt-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    {/* Rendering HTML content dangerously for this mock. In real app use a markdown parser. */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
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

                    <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                        <h3 className="font-bold mb-2">Subscribe to our newsletter</h3>
                        <p className="text-sm text-muted-foreground mb-4">Get the latest design trends delivered to your inbox.</p>
                        <div className="flex gap-2">
                            <input className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Email" />
                            <Button size="sm">Join</Button>
                        </div>
                    </div>
                </aside>
            </div>
        </article>
    )
}
