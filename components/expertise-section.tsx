"use client"

import { Brain, Cloud, Database, Cpu, Code2, LineChart } from "lucide-react"

const expertiseAreas = [
  {
    icon: Brain,
    title: "Multi-Agent AI Systems",
    description: "Design and build production-grade agentic workflows and RAG systems using LangGraph, LangChain, and modern LLM orchestration frameworks for complex reasoning tasks.",
    highlights: ["LangGraph", "LangChain", "RAG Systems", "Agentic Workflows"],
  },
  {
    icon: Cpu,
    title: "LLM Engineering & Optimization",
    description: "Expert in RAG pipelines, embeddings, prompt engineering, quantization, and batch inference, optimizing latency, accuracy, and cost in real-world deployments.",
    highlights: ["RAG Pipelines", "Prompt Engineering", "Quantization", "Batch Inference"],
  },
  {
    icon: LineChart,
    title: "High-Performance LLM Inference",
    description: "Optimize inference using batching, caching, GPU tuning, and memory optimization, achieving significant latency reduction and improved throughput.",
    highlights: ["GPU Tuning", "Caching", "Memory Optimization", "Latency Reduction"],
  },
  {
    icon: Cloud,
    title: "Cloud-Native AI & MLOps",
    description: "Develop scalable ML systems using AWS (Lambda, ECS, EKS), Kubernetes, Docker, Terraform, with CI/CD, monitoring, and high availability (99.9% uptime).",
    highlights: ["AWS/ECS/EKS", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    icon: Database,
    title: "Real-Time Distributed Systems",
    description: "Build event-driven systems with Kafka and Spark for streaming data, enabling sub-second processing and high-throughput analytics.",
    highlights: ["Kafka", "Spark", "Event-Driven", "Streaming"],
  },
  {
    icon: Code2,
    title: "Data Engineering & Pipelines",
    description: "Design scalable ETL pipelines and data workflows using Spark, SQL, and distributed processing for large-scale datasets.",
    highlights: ["ETL Pipelines", "Spark", "SQL", "Distributed Processing"],
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="relative px-4 sm:px-8 md:px-12 py-8">
      <h2 className="text-2xl font-semibold text-foreground mb-6">Areas of Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {expertiseAreas.map((area, index) => {
          const Icon = area.icon
          return (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground pt-2">{area.title}</h3>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {area.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {area.highlights.map((highlight, hIndex) => (
                  <span
                    key={hIndex}
                    className="px-3 py-1 text-xm bg-secondary text-secondary-foreground rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
