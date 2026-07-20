import { Navbar } from "@/components/navbar"
import { ExperienceRow } from "@/components/experience-row"
import { Footer } from "@/components/footer"

const experience = [
  {
  id: 1,
  title: "AI/ML Engineer",
  company: "Apple",
  location: "Cupertino, CA",
  period: "June 2026 – Present",
  image: "/PortfolioWebsite/data-science-visualization-dark.jpg",
  sections: [
    {
      title: "AI/ML Model Development",
      items: [
        "Develop and improve production AI/ML solutions using Python, supporting model experimentation, inference, evaluation, and integration into large-scale applications",
      ],
    },
    {
      title: "LLM Evaluation & Validation",
      items: [
        "Create automated evaluation and validation pipelines to measure LLM response quality, identify prompt and data failures, detect model regressions, and improve production readiness",
      ],
    },
    {
      title: "Inference & ML Services",
      items: [
        "Build and integrate scalable inference services and REST APIs that connect machine learning models with internal applications, data workflows, and user-facing platform features",
      ],
    },
    {
      title: "Data & ML Pipelines",
      items: [
        "Develop reliable data ingestion, preprocessing, feature validation, and model evaluation workflows for AI/ML systems operating across Kubernetes and GCP environments",
      ],
    },
    {
      title: "Monitoring & Optimization",
      items: [
        "Monitor model quality, inference latency, throughput, error rates, and resource utilization using Datadog, Prometheus, and Grafana, and optimize systems based on production performance",
      ],
    },
    {
      title: "Cross-Functional Delivery",
      items: [
        "Collaborate with machine learning engineers, researchers, software engineers, and partner teams through design reviews, code reviews, testing, documentation, and knowledge sharing",
      ],
    },
  ],
  techStack: [
    "Python",
    "Machine Learning",
    "LLMs",
    "Model Evaluation",
    "Prompt Engineering",
    "Model Inference",
    "REST APIs",
    "Data Pipelines",
    "Kubernetes",
    "GCP",
    "Datadog",
    "Prometheus",
    "Grafana",
  ],
},
  {
    id: 2,
    title: "AI/ML Software Engineer",
    company: "State of Florida",
    location: "Tallahassee, FL",
    period: "November 2024 – May 2026",
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
    id: 3,
    title: "Machine Learning Engineer",
    company: "United Cloud Technologies",
    location: "Dallas, TX",
    period: "July 2024 – November 2024",
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
  }
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
