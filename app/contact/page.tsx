import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Contact from "@/components/contact"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
