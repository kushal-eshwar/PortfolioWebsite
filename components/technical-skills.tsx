"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const skillCategories = [
  {
    title: "Programming & Development",
    skills: ["Python", "SQL", "Java", "C++", "Scala", "R", "MATLAB", "JavaScript", "TypeScript", "Bash", "Git", "Unit Testing", "Code Reviews", "CI/CD"],
  },
  {
    title: "ML Frameworks & GenAI",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "Generative Models", "LLMs", "RAG Pipelines", "Vision Transformers", "CLIP", "Model Optimization", "Quantization", "GPU Acceleration", "CUDA"],
  },
  {
    title: "ML Infrastructure & Lifecycle",
    skills: ["End-to-End ML Pipelines", "Model Training", "Production Deployment", "Inference Optimization", "MLflow", "Model Registry", "Feature Pipelines", "Experiment Tracking", "A/B Testing", "Model Serving"],
  },
  {
    title: "NLP & Language Technologies",
    skills: ["Neural Machine Translation", "Transformer Architectures", "NLP Pipelines", "ASR", "JAX", "Model Fine-Tuning", "Tokenization", "Sequence-to-Sequence", "Speech-to-Text", "Text-to-Speech"],
  },
  {
    title: "Distributed & Scalable Systems",
    skills: ["Distributed Computing", "Multi-GPU Training", "Large-Scale Parallel Processing", "Fault-Tolerant Orchestration", "High-Throughput Pipelines", "Performance Optimization"],
  },
  {
    title: "Big Data Technologies",
    skills: ["Apache Spark", "PySpark", "MapReduce", "Hadoop", "AWS EMR", "Databricks", "Delta Lake", "Large-Scale Training", "High-Throughput Data Pipelines"],
  },
  {
    title: "Cloud Platforms",
    skills: ["AWS (SageMaker, Lambda, EMR, S3, EC2)", "GCP (Vertex AI, BigQuery, Document AI)", "Azure (Azure AI, ADLS, ADF)", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "Software Engineering",
    skills: ["CI/CD", "Unit Testing", "Code Reviews", "PEP 8", "Linting", "Modular Code", "Debugging", "System Issue Resolution", "Observability", "Monitoring", "Technical Documentation"],
  },
  {
    title: "Statistical & Analytical",
    skills: ["Statistical Modeling", "Predictive Analytics", "Experimental Design", "Causal Inference", "Time Series Analysis", "Econometrics", "Optimization Techniques", "Deep Learning", "Data Mining"],
  },
  {
    title: "Data Engineering",
    skills: ["ETL/ELT Pipelines", "Apache Airflow", "Snowflake", "BigQuery", "SQL/NoSQL Databases", "Data Modeling", "Stream Processing"],
  },
  {
    title: "APIs & Backend",
    skills: ["FastAPI", "Flask", "REST APIs", "gRPC", "AsyncIO"],
  },
  {
    title: "BI & Visualization",
    skills: ["Power BI", "Tableau", "TensorBoard", "Streamlit", "Data Visualization"],
  },
]

export function TechnicalSkills() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="skills" className="relative px-4 sm:px-8 md:px-12 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-foreground">Technical Skills</h2>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("left")}
            className="h-9 w-9 rounded-full border border-border hover:bg-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll("right")}
            className="h-9 w-9 rounded-full border border-border hover:bg-secondary"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 text-xm bg-secondary text-secondary-foreground rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
