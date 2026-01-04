import { Hero } from "@/components/home/Hero"
import { Stats } from "@/components/home/Stats"
import { FeaturedCourses } from "@/components/home/FeaturedCourses"
import { HowItWorks } from "@/components/home/HowItWorks"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { Mentors } from "@/components/home/Mentors"
import { Testimonials } from "@/components/home/Testimonials"
import { Partners } from "@/components/home/Partners"
import { CtaBanner } from "@/components/home/CtaBanner"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <FeaturedCourses />
      <HowItWorks />
      <WhyChooseUs />
      <Mentors />
      <Testimonials />
      <Partners />
      <CtaBanner />
    </div>
  )
}
