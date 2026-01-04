import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background pb-48 pt-20">
            <section className="relative py-24 md:py-48 bg-grid overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
                <div className="container relative z-10 max-w-4xl space-y-8">
                    <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-tighter">Legal Documentation</Badge>
                    <h1 className="text-5xl md:text-8xl font-black font-heading text-white leading-[0.9]">Privacy &amp; <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Governance.</span></h1>
                    <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                        Transparency is one of our core values. Learn how we handle your data and the terms guiding our academy.
                    </p>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest pt-4">Last updated: January 1, 2026</p>
                </div>
            </section>

            <div className="container max-w-4xl mt-32">
                <Accordion type="single" collapsible className="w-full space-y-6">
                    {[
                        { val: "item-1", title: "1. Information Collection", content: "We collect personal data such as contact information and portfolio links to facilitate your learning journey. This data is stored securely and never sold to third parties." },
                        { val: "item-2", title: "2. Data Usage Policy", content: "Your information allows us to provide personalized mentorship, track your progress, and issue certificates. We process data based on your explicit consent and our legitimate educational interests." },
                        { val: "item-3", title: "3. Cookie Governance", content: "We use essential and analytical cookies to improve your user experience. You can manage your preferences at any time through your browser settings." },
                        { val: "item-4", title: "4. Your Legal Rights", content: "Under GDPR and CCPA, you have the right to access, rectify, or delete your personal data. Contact our support team to initiate these requests." },
                        { val: "item-5", title: "5. Terms of Enrollment", content: "By applying, you agree to our academic integrity policy. We reserve the right to revoke access if our community guidelines are violated." }
                    ].map((item, i) => (
                        <AccordionItem key={i} value={item.val} className="border border-white/5 rounded-[2rem] px-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                            <AccordionTrigger className="text-xl md:text-2xl font-bold text-white py-8 hover:no-underline hover:text-primary transition-colors">
                                {item.title}
                            </AccordionTrigger>
                            <AccordionContent className="text-lg text-slate-400 leading-relaxed pb-8 border-t border-white/5 pt-6">
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="mt-32 p-12 glass border-white/5 rounded-[2.5rem] text-center space-y-6">
                    <h3 className="text-2xl font-black text-white">Need Clarification?</h3>
                    <p className="text-slate-400 text-lg max-w-md mx-auto">If you have technical questions regarding our privacy architecture, please reach out to our legal team.</p>
                    <p className="text-primary font-bold text-lg">legal@designacademy.edu</p>
                </div>
            </div>
        </div>
    )
}
