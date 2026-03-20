import { Navbar } from "@/components/navbar"
import { ProjectsRow } from "@/components/projects-row"
import { Footer } from "@/components/footer"

const projects = [
  {
    id: 1,
    title: "Fullstack-GenAI",
    subtitle: "Full-stack Generative AI Application",
    image: "/PortfolioWebsite/llm-analytics-platform-dark.jpg",
    description: [
      "Full-stack Generative AI application featuring an interactive TypeScript-based frontend and Python backend microservices",
      "Implements LLM-powered conversational AI with RAG architecture for context-aware responses",
      "Includes real-time streaming responses, conversation history management, and semantic search capabilities using vector embeddings",
      "Deployed as containerized microservices with RESTful API integration enabling seamless frontend-backend communication",
    ],
    techStack: ["TypeScript", "React", "Python", "FastAPI", "LangChain", "RAG", "Pinecone", "PostgreSQL", "Docker", "AWS"],
    githubUrl: "https://github.com/kushal-eshwar",
  },
  {
    id: 2,
    title: "Java-SpringBoot",
    subtitle: "Enterprise Backend Application",
    image: "/PortfolioWebsite/java-springboot-enterprise-dark.jpg",
    description: [
      "Enterprise-grade backend application built with Java Spring Boot demonstrating modern microservices architecture",
      "Implements secure RESTful APIs with JWT authentication, role-based access control, and comprehensive data validation",
      "Features layered architecture with service layer, repository pattern, and DTO mapping for clean separation of concerns",
      "Includes automated unit and integration testing, API documentation with Swagger, and containerized deployment",
    ],
    techStack: ["Java", "Spring Boot", "Spring Security", "JPA", "Hibernate", "MySQL", "Docker", "Kubernetes", "JUnit"],
    githubUrl: "https://github.com/kushal-eshwar",
  },
  {
    id: 3,
    title: "MultiChatClient-Application",
    subtitle: "Real-Time Multi-Client Chat",
    image: "/PortfolioWebsite/ai-neural-network-visualization-dark.jpg",
    description: [
      "Real-time multi-client chat application built with Python demonstrating advanced networking and concurrent programming",
      "Implements client-server architecture using socket programming with support for multiple simultaneous connections",
      "Features custom message protocol for reliable delivery, user authentication, broadcast and private messaging",
      "Includes robust error handling, connection management, and logging for production reliability",
    ],
    techStack: ["Python", "Socket Programming", "TCP/IP", "Threading", "Asyncio", "JSON Protocol"],
    githubUrl: "https://github.com/kushal-eshwar",
  },
  {
    id: 4,
    title: "Network-Emulator",
    subtitle: "Network Simulation Tool",
    image: "/PortfolioWebsite/streaming-ml-system-dark.jpg",
    description: [
      "Network simulation and emulation tool built with Python for testing distributed systems and network protocols",
      "Implements configurable network topologies with simulated latency, packet loss, bandwidth constraints, and routing behaviors",
      "Features custom packet forwarding logic, network topology visualization, and performance metrics collection",
      "Useful for testing application resilience, distributed algorithm correctness, and network protocol behavior",
    ],
    techStack: ["Python", "Socket Programming", "Scapy", "NetworkX", "Threading", "Matplotlib", "Pytest"],
    githubUrl: "https://github.com/kushal-eshwar",
  },
  {
    id: 5,
    title: "WriteRightAI",
    subtitle: "AI-Powered Writing Assistant",
    image: "/PortfolioWebsite/nlp-text-processing-dark.jpg",
    description: [
      "AI-powered writing assistant and grammar correction tool leveraging large language models for intelligent text improvement",
      "Implements multi-stage text processing pipeline including grammar checking, style enhancement, and tone adjustment",
      "Features real-time error detection, sentence restructuring recommendations, and context-aware suggestions",
      "Built with FastAPI backend exposing RESTful APIs and interactive Streamlit frontend for demonstration",
    ],
    techStack: ["Python", "OpenAI GPT", "Hugging Face", "spaCy", "NLTK", "FastAPI", "Streamlit"],
    githubUrl: "https://github.com/kushal-eshwar",
  },
  {
    id: 6,
    title: "LLM Prompt Engineering & Evaluation",
    subtitle: "Structured Data Extraction Pipeline",
    image: "/PortfolioWebsite/machine-learning-pipeline-dark.jpg",
    description: [
      "Built structured data extraction pipelines using LLMs with schema enforcement and hallucination detection",
      "Implemented RAGAS-based evaluation with precision, recall, and grounding accuracy metrics",
      "Automated model version comparison to detect regressions and validate metric quality",
    ],
    techStack: ["Python", "LLMs", "RAGAS", "Prompt Engineering", "Schema Validation", "Evaluation Pipelines"],
    githubUrl: "https://github.com/kushal-eshwar",
  },
  {
    id: 7,
    title: "A/B Testing & Experiment Infrastructure",
    subtitle: "End-to-End Experiment Framework",
    image: "/PortfolioWebsite/data-analytics-dashboard-dark.jpg",
    description: [
      "Designed end-to-end experiment frameworks with stratified sampling and statistical significance testing",
      "Implemented lift measurement ensuring metrics used to judge experiment winners were semantically aligned with business outcomes",
      "Built automated pipelines for experiment analysis and reporting",
    ],
    techStack: ["Python", "Statistical Analysis", "A/B Testing", "Stratified Sampling", "Data Analytics"],
    githubUrl: "https://github.com/kushal-eshwar",
  },
  {
    id: 8,
    title: "Conversational Analytics Platform",
    subtitle: "Snowflake-Based Analytics",
    image: "/PortfolioWebsite/business-intelligence-ai-dark.jpg",
    description: [
      "Built Snowflake-based analytical pipelines and Streamlit dashboards visualizing behavioral trends and performance drivers",
      "Implemented LLM-derived metrics enabling stakeholders to connect qualitative conversation insights to quantitative business results",
      "Created interactive visualizations for real-time data exploration and reporting",
    ],
    techStack: ["Snowflake", "Streamlit", "Python", "LLMs", "Data Visualization", "SQL"],
    githubUrl: "https://github.com/kushal-eshwar",
  },
  {
    id: 9,
    title: "Entity Resolution & Data Quality Framework",
    subtitle: "Record Linkage Pipeline",
    image: "/PortfolioWebsite/entity-resolution-data-quality-dark.jpg",
    description: [
      "Designed record linkage and deduplication pipelines with normalization and schema validation",
      "Implemented lineage tracking producing high-fidelity, production-ready datasets",
      "Built data quality monitoring for downstream analytics and ML modeling",
    ],
    techStack: ["Python", "Record Linkage", "Data Quality", "Schema Validation", "ETL", "Data Lineage"],
    githubUrl: "https://github.com/kushal-eshwar",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <ProjectsRow title="Featured Projects" items={projects} />
      </div>
      <Footer />
    </main>
  )
}
