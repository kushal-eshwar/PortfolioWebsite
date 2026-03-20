"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const techCategories = [
  {
    id: 1,
    title: "Applied AI & Generative Intelligence",
    icon: "🧠",
    skills: ["OpenAI", "Hugging Face", "LangChain"],
    focus: [
      "Applied Generative AI",
      "NLP",
      "Prompt Engineering",
      "Text Summarization",
      "Semantic Search",
      "Embedding-based Retrieval",
    ],
  },
  {
    id: 2,
    title: "Machine Learning & Analytics",
    icon: "🚀",
    skills: ["scikit-learn", "XGBoost", "PyTorch", "TensorFlow"],
    focus: [
      "Feature Engineering",
      "Classification & Regression",
      "Model Evaluation",
      "Data-driven Modeling",
      "Statistical Analysis",
    ],
  },
  {
    id: 3,
    title: "Data Analysis & Visualization",
    icon: "📊",
    skills: ["Prometheus", "Grafana", "Tableau"],
    focus: ["KPI Tracking", "Dashboard Design", "Visual Storytelling", "Trend Analysis", "Operational Reporting"],
  },
  {
    id: 4,
    title: "Cloud & Data Platforms",
    icon: "☁️",
    skills: ["AWS", "GCP", "Azure", "Apache Spark", "Kafka"],
    focus: ["SageMaker", "S3", "Lambda", "EKS", "Redshift", "EMR", "Snowflake", "BigQuery"],
  },
  {
    id: 5,
    title: "Databases & Data Engineering",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    focus: ["SQL", "T-SQL", "PL/SQL", "ETL/ELT Pipelines", "Data Validation", "Reporting Automation"],
  },
  {
    id: 6,
    title: "Programming Languages",
    icon: "💻",
    skills: ["Python", "SQL", "Java", "Scala", "R", "Bash"],
    focus: [],
  },
]

export function TechArsenal() {
  const rowRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const scrollAmount = rowRef.current.clientWidth * 0.75
      const newScrollLeft =
        direction === "left" ? rowRef.current.scrollLeft - scrollAmount : rowRef.current.scrollLeft + scrollAmount

      rowRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" })
    }
  }

  return (
    <section id="skills" className="relative px-4 sm:px-6 lg:px-16 py-8">
      <h2 className="mb-4 text-xl font-semibold text-foreground sm:text-2xl">🛠️ Tech Arsenal</h2>

      <div className="group relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 z-10 hidden h-full w-12 items-center justify-center bg-gradient-to-r from-background to-transparent opacity-0 transition-opacity group-hover:opacity-100 md:flex"
        >
          <ChevronLeft className="h-8 w-8 text-foreground" />
        </button>

        {/* Content Row */}
        <div ref={rowRef} className="carousel-row hide-scrollbar flex gap-4 overflow-x-auto pb-4">
          {techCategories.map((category) => (
            <div
              key={category.id}
              className="flex-shrink-0 w-72 sm:w-80 rounded-md bg-card border border-border p-5 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-sm font-semibold text-card-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded bg-primary/20 text-primary border border-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {category.focus.length > 0 && (
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground leading-relaxed">{category.focus.join(" • ")}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 z-10 hidden h-full w-12 items-center justify-center bg-gradient-to-l from-background to-transparent opacity-0 transition-opacity group-hover:opacity-100 md:flex"
        >
          <ChevronRight className="h-8 w-8 text-foreground" />
        </button>
      </div>
    </section>
  )
}
