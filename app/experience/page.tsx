import { Navbar } from "@/components/navbar"
import { ExperienceRow } from "@/components/experience-row"
import { Footer } from "@/components/footer"

const experience = [
  {
    id: 1,
    title: "Software Engineer AI",
    company: "Florida Department of Revenue",
    location: "Tallahassee, FL",
    period: "November 2024 – Present",
    image: "/PortfolioWebsite/government-finance-analytics-dark.jpg",
    sections: [
      {
        title: "LLM & RAG Systems",
        items: [
          "Designed and deployed production-grade Python/FastAPI APIs powering LLM-based RAG workflows over multi-million record datasets, improving semantic answer precision by 40% and reducing inference latency by 35% through batching and caching strategies",
        ],
      },
      {
        title: "GPU Optimization",
        items: [
          "Optimized GPU-based inference workloads using batch scheduling, memory tuning, and model quantization techniques to improve GPU utilization by 20% and reduce per-request token costs",
        ],
      },
      {
        title: "Cloud Infrastructure",
        items: [
          "Deployed serverless AI services (AWS Lambda, ECS, Terraform IaC) with structured logging and observability, achieving 99.9% uptime and reducing MTTR by 30% via proactive monitoring and alerting",
        ],
      },
    ],
    techStack: ["Python", "FastAPI", "LLMs", "RAG", "AWS Lambda", "ECS", "Terraform", "GPU Optimization"],
  },
  {
    id: 2,
    title: "Machine Learning Engineer",
    company: "Firstnet Global",
    location: "Dallas, TX",
    period: "January 2023 – November 2024",
    image: "/PortfolioWebsite/cloud-ml-engineering-dark.jpg",
    sections: [
      {
        title: "Distributed AI Systems",
        items: [
          "Built scalable Python microservices using Docker and Kubernetes, enabling distributed AI inference and processing 500K+ streaming events/day via Kafka + Spark with sub-100ms latency",
        ],
      },
      {
        title: "LLM Applications",
        items: [
          "Developed LLM-integrated applications (RAG pipelines, conversational agents, hybrid retrieval systems) and optimized container auto-scaling, reducing infrastructure costs by 25% while improving throughput",
        ],
      },
    ],
    techStack: ["Python", "Docker", "Kubernetes", "Kafka", "Spark", "LLMs", "RAG", "Microservices"],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Silicon Matrix",
    location: "Hyderabad, India",
    period: "December 2020 – July 2022",
    image: "/PortfolioWebsite/data-science-visualization-dark.jpg",
    sections: [
      {
        title: "Data Pipeline Engineering",
        items: [
          "Developed high-throughput Python multiprocessing data pipelines processing 500K+ daily records, improving SQL query performance by 30% and achieving 99.8% data accuracy through validation and optimization techniques",
        ],
      },
      {
        title: "ML Integration",
        items: [
          "Assisted in integrating machine learning scoring modules into backend systems to support real-time prediction and automated decision workflows in enterprise applications",
        ],
      },
    ],
    techStack: ["Python", "SQL", "Multiprocessing", "Data Pipelines", "ML Integration", "Backend Systems"],
  },
]

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <ExperienceRow title="Professional Journey" items={experience} />
      </div>
      <Footer />
    </main>
  )
}
