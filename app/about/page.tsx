import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}
