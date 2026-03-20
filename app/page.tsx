import { Navbar } from "@/components/navbar"
import { HomeSection } from "@/components/home-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <HomeSection />
      </div>
      <Footer />
    </main>
  )
}
