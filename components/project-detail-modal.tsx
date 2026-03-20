"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X, Github, ExternalLink } from "lucide-react"

interface ProjectItem {
  id: number
  title: string
  subtitle: string
  image: string
  description: string[]
  techStack: string[]
  githubUrl?: string
}

interface ProjectDetailModalProps {
  project: ProjectItem | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 mx-4 max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-lg bg-card shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground transition-colors hover:bg-background"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Scrollable Content */}
        <div className="max-h-[90vh] overflow-y-auto">
          {/* Header Image */}
          <div className="relative h-48 sm:h-64">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{project.title}</h2>
              <p className="mt-1 text-xl text-muted-foreground">{project.subtitle}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* GitHub Link */}
            {/* {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Github className="h-4 w-4" />
                View on GitHub
                <ExternalLink className="h-3 w-3" />
              </a>
            )} */}

            {/* Project Details */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Project Highlights</h3>
              <ul className="space-y-2">
                {project.description.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-xl text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-muted px-3 py-1 text-xl font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
