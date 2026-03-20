import { Navbar } from "@/components/navbar"
import { TechnicalSkills } from "@/components/technical-skills"
import { Footer } from "@/components/footer"

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <TechnicalSkills />
      </div>
      <Footer />
    </main>
  )
}
