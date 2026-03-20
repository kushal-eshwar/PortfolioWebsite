"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Github, GraduationCap, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomeSection() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (

      
      <section id="home" className="relative px-4 sm:px-8 md:px-12 py-8 min-h-screen flex items-center" style={{
  backgroundImage: `url('/PortfolioWebsite/hero-bg.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // backgroundAttachment: 'fixed'
}}>
  <div className="absolute inset-0 bg-black/60" />
  <div className={`relative z-10 w-full transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

      <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Profile Header */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-8">
          {/* Profile Picture */}
          <div className="relative">
            <div className="h-40 w-40 sm:h-48 sm:w-48 overflow-hidden rounded-full border-4 border-primary/50 shadow-lg shadow-primary/20">
              <img 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/PortfolioWebsite/profile-picture.jpg` } 
                alt="Kushal Eshwar Reddy Gudibandi" 
                className="w-64 h-64 rounded-full object-cover translate-x-0.9 -mt-12"
              />
            </div>

            <p className="mt-4 text-muted-foreground text-lg text-center w-full">
              AI/ML | GenAI | Python
            </p>
            {/* <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-green-500 border-4 border-background" /> */}
          </div>

          {/* Name and Title */}
          <div className="text-center lg:text-left flex-1">
            <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">Welcome to my World</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Kushal Eshwar Reddy
              <br />
              <span className="text-primary">Gudibandi</span>
            </h1>

       <p className="text-xl text-muted-foreground mb-6">
        <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-foreground" />
              <span className="text-foreground">MS in Computer Science</span>
                           <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">Florida State University</span>
              </div>
{/* 
            <p className="text-xl text-muted-foreground mb-6">
              AI/ML | GenAI | Python
            </p> */}
       </p>

            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              <a 
                href="https://github.com/kushal-eshwar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kushal-eshwar-reddy-gudibandi-b92420167/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a 
                href="mailto:kushalgudibandi@gmail.com"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/projects">
                  Explore My Work
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-2 lg:col-span-2 gap-6">
          {/* <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"> */}
            {/* <h2 className="text-xl font-semibold text-foreground mb-4">About Me</h2> */}
            <p className="text-muted-foreground text-xl leading-relaxed pt-8">
          Software Engineer specializing in AI and scalable systems, building production-grade solutions using machine learning and generative AI. Experienced in developing LLM-powered applications, RAG pipelines, and cloud-based systems to solve real-world problems. Passionate about creating reliable, high-performance software at the intersection of engineering and AI.
            </p>
            {/* <p className="text-muted-foreground leading-relaxed">
              My journey in tech has taken me from building high-throughput data pipelines to architecting LLM-powered 
              RAG systems serving millions of queries. I thrive at the intersection of software engineering and AI, 
              where I can apply rigorous engineering practices to create scalable, reliable machine learning systems.
            </p> */}
          {/* </div> */}

          {/* Quick Stats */}
          <div className="flex flex-col gap-4">
            <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors text-center">
              <p className="text-3xl font-bold text-primary mb-1">99%</p>
              <p className="text-muted-foreground text-sm">Uptime Achieved</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors text-center">
              <p className="text-3xl font-bold text-primary mb-1">5M+</p>
              <p className="text-muted-foreground text-sm">Events Processed Daily</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors text-center">
              <p className="text-3xl font-bold text-primary mb-1">$50M+</p>
              <p className="text-muted-foreground text-sm">Business Impact</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
