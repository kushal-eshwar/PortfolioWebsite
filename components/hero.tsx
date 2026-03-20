// "use client"

// import { useEffect, useState } from "react"
// import Link from "next/link"
// import { Play } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export function HeroSection() {
//   const [mounted, setMounted] = useState(false)
//   useEffect(() => { setMounted(true) }, [])

//   return (
//     <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
//       <div className="absolute inset-0">
//         <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/futuristic-ai-data-visualization-dark-cinematic.jpg`} alt="Hero background" className="h-full w-full object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
//       </div>
//       <div className={`relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-16 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
//         <div className="max-w-2xl">
//           <div className="mb-6 flex items-center gap-6">
//             <div className="h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full border-4 border-primary/50 shadow-lg shadow-primary/20">
//               <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/PortfolioWebsite/profile-picture.jpg`} alt="Kushal Eshwar Reddy Gudibandi" className="w-64 h-64 rounded-full object-cover scale-125" />
//             </div>
//             <div>
//               <p className="mb-1 text-sm font-medium tracking-widest text-primary uppercase">Portfolio</p>
//               <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground">Kushal Eshwar Reddy<br /><span className="text-primary">Gudibandi</span></h1>
//             </div>
//           </div>
//           <p className="mb-2 text-xl text-muted-foreground">Software Engineer | AI Systems | Cloud Infrastructure</p>
//           <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground">Experience across software engineering, LLMs, Python, AI, machine learning, and data science, with a focus on building scalable systems and solving real-world problems using data-driven and intelligent approaches.</p>
//           <div className="flex flex-wrap gap-4">
//             <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
//               <Link href="/projects"><Play className="h-5 w-5 fill-current" />Explore My Work</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      className="relative h-[85vh] min-h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/futuristic-ai-data-visualization-dark-cinematic.jpg')"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div
        className={`relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-16 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-2xl">

          {/* Profile + Name */}
          <div className="mb-6 flex items-center gap-6">
            <div className="h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full border-4 border-primary/50 shadow-lg shadow-primary/20">
              <img
                src="/profile-picture.jpg"
                alt="Kushal Eshwar Reddy Gudibandi"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div>
              <p className="mb-1 text-sm font-medium tracking-widest text-primary uppercase">
                Portfolio
              </p>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Kushal Eshwar Reddy <br />
                <span className="text-primary">Gudibandi</span>
              </h1>
            </div>
          </div>

          {/* Subtitle */}
          <p className="mb-2 text-xl text-gray-300">
            Software Engineer | AI Systems | Cloud Infrastructure
          </p>

          {/* Description */}
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-400">
            Experience across software engineering, LLMs, Python, AI, machine learning, and data science, 
            with a focus on building scalable systems and solving real-world problems using data-driven 
            and intelligent approaches.
          </p>

          {/* Button */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <Link href="/projects">
                <Play className="h-5 w-5 fill-current" />
                Explore My Work
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}