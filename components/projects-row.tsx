"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectCard } from "./project-card"
import { ProjectDetailModal } from "./project-detail-modal"

interface ProjectItem {
  id: number
  title: string
  subtitle: string
  image: string
  description: string[]
  techStack: string[]
  githubUrl?: string
}

interface ProjectsRowProps {
  title: string
  items: ProjectItem[]
}

export function ProjectsRow({ title, items }: ProjectsRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleCardClick = (project: ProjectItem) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <section id="projects" className="relative px-4 sm:px-8 md:px-12">
        <h2 className="mb-4 text-2xl font-semibold text-foreground sm:text-xl md:text-2xl">{title}</h2>

        <div className="group relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-2 top-1/2 z-10 flex h-full -translate-y-1/2 items-center justify-center bg-gradient-to-r from-background to-transparent px-2 opacity-0 transition-opacity group-hover:opacity-100 sm:-left-4 sm:px-4"
          >
            <ChevronLeft className="h-8 w-8 text-foreground sm:h-10 sm:w-10" />
          </button>

          {/* Scrollable Content */}
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scroll-smooth scrollbar-hide sm:gap-3"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {items.map((item) => (
              <ProjectCard key={item.id} item={item} onClick={() => handleCardClick(item)} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 top-1/2 z-10 flex h-full -translate-y-1/2 items-center justify-center bg-gradient-to-l from-background to-transparent px-2 opacity-0 transition-opacity group-hover:opacity-100 sm:-right-4 sm:px-4"
          >
            <ChevronRight className="h-8 w-8 text-foreground sm:h-10 sm:w-10" />
          </button>
        </div>
      </section>

      <ProjectDetailModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}
