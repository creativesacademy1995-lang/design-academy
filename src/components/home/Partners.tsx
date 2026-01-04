"use client"

export function Partners() {
    const partners = ["Google", "Microsoft", "Airbnb", "Spotify", "Uber", "Adobe", "Figma", "Notion"];

    return (
        <section className="py-20 border-y border-white/5 bg-background overflow-hidden relative">
            <div className="container text-center mb-12">
                <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Strategic Recruitment Partners</p>
            </div>

            <div className="flex relative w-full overflow-hidden">
                {/* Gradient Fades for edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap gap-16 md:gap-32 items-center">
                    {[...partners, ...partners, ...partners].map((partner, i) => (
                        <span key={i} className="text-3xl md:text-5xl font-black text-white/10 font-heading select-none hover:text-primary/30 transition-colors duration-500 uppercase tracking-tighter">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
            `}} />
        </section>
    )
}
