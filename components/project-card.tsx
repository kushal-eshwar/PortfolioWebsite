"use client"

import Image from "next/image"
import { Play, Info } from "lucide-react"

interface ProjectItem {
  id: number
  title: string
  subtitle: string
  image: string
  description: string[]
  techStack: string[]
  githubUrl?: string
}

interface ProjectCardProps {
  item: ProjectItem
  onClick: () => void
}

export function ProjectCard({ item, onClick }: ProjectCardProps) {
  return (
    <div
      className="group relative min-w-[160px] flex-shrink-0 cursor-pointer transition-transform duration-300 hover:z-10 hover:scale-110 sm:min-w-[200px] md:min-w-[280px]"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden rounded-sm bg-muted">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-all duration-300 group-hover:brightness-50"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex gap-2 mb-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Play className="h-4 w-4 fill-current" />
            </button>
            {/* <button className="flex h-8 w-8 items-center justify-center rounded-full border border-muted-foreground/50 bg-background/50 text-foreground hover:border-foreground">
              <Info className="h-4 w-4" />
            </button> */}
          </div>
          <p className="text-xm text-foreground font-medium">{item.title}</p>
          <p className="text-xm text-muted-foreground">Click to view details</p>
        </div>
      </div>

      {/* Title below card */}
      <div className="mt-2 px-1">
        <p className="text-xm font-medium text-foreground truncate">{item.title}</p>
        <p className="text-xm text-muted-foreground truncate">{item.subtitle}</p>
      </div>
    </div>
  )
}
