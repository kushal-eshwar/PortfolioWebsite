"use client"

import { MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative px-4 sm:px-8 md:px-12 py-8">
      <h2 className="text-2xl font-semibold text-foreground mb-6">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main About Card */}
        <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          I'm a Software Engineer with over 5 years of experience building AI systems that actually work in production. I focus on taking cutting-edge ML research especially around LLMs, agentic AI, and RAG pipelines and turning it into reliable systems that companies can depend on.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
           My career has been about solving increasingly complex problems at scale. I've built LLM-powered agent frameworks that handle millions of queries every day, designed ML infrastructure that stays up 99.9% of the time, and created distributed systems that process massive amounts of data without breaking. The work I've done has influenced major business decisions and helped teams deploy code 70% faster.
What drives me is the challenge of making AI work in the real world. It's one thing to get a model working in a notebook; it's another to deploy it at scale with proper monitoring, fault tolerance, and performance guarantees. I love that intersection between software engineering discipline and AI innovation where you need both to ship something valuable.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
         Right now, I'm deep into agentic AI systems and multi-agent orchestration. There's so much potential in these areas, and I'm excited about turning the latest research into production systems that teams can actually use and rely on.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="flex flex-col gap-4">
          <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">Location</h3>
            </div>
            <p className="text-muted-foreground text-lg">United States</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">Education</h3>
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-muted-foreground text-lg font-medium">M.S. Computer Science</p>
                <p className="text-muted-foreground text-sm">Florida State University, Tallahassee</p>
                <p className="text-muted-foreground text-sm">Aug 2022 - May 2024</p>
              </div>
              <div>
                <p className="text-muted-foreground text-lg font-medium">B.Tech Computer Science (AI/ML)</p>
                <p className="text-muted-foreground text-sm">SRM University, AP, India</p>
                <p className="text-muted-foreground text-sm">Jul 2018 - May 2022</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">Experience</h3>
            </div>
            <p className="text-muted-foreground text-lg">5+ Years in Software Engineering</p>
            <p className="text-muted-foreground text-lg">AI/ML,GEN AI & Cloud Infrastructure</p>
          </div>
        </div>
      </div>
    </section>
  )
}
