import { Navbar } from "@/components/navbar"
import { ExpertiseSection } from "@/components/expertise-section"
import { Footer } from "@/components/footer"

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <ExpertiseSection />
      </div>
      <Footer />
    </main>
  )
}
