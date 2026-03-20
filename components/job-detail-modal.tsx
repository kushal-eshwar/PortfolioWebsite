"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface JobDetail {
  id: number
  title: string
  company: string
  period: string
  image: string
  sections: {
    title: string
    items: string[]
  }[]
  techStack?: string[]
}

interface JobDetailModalProps {
  job: JobDetail | null
  isOpen: boolean
  onClose: () => void
}

export function JobDetailModal({ job, isOpen, onClose }: JobDetailModalProps) {
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

  if (!isOpen || !job) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-lg bg-card shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        {/* Header Image */}
        <div className="relative h-48 sm:h-64">
          <img src={job.image || "/placeholder.svg"} alt={job.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground hover:bg-background transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-2xl font-bold text-card-foreground sm:text-3xl">{job.title}</h2>
            <p className="text-lg text-primary font-medium">{job.company}</p>
            <p className="text-sm text-muted-foreground">{job.period}</p>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-16rem)] p-6 space-y-6">
          {job.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-card-foreground mb-3 flex items-center gap-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Tech Stack */}
          {job.techStack && job.techStack.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {job.techStack.map((tech, index) => (
                  <span key={index} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
