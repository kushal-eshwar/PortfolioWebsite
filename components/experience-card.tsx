"use client"

import { Play, Info } from "lucide-react"

interface ExperienceItem {
  id: number
  title: string
  company: string
  period: string
  image: string
}

interface ExperienceCardProps {
  item: ExperienceItem
  onClick: () => void
}

export function ExperienceCard({ item, onClick }: ExperienceCardProps) {
  return (
    <div className="group/card relative flex-shrink-0 cursor-pointer" onClick={onClick}>
      {/* Base Card */}
      <div className="relative h-40 w-64 overflow-hidden rounded-sm sm:h-44 sm:w-72 md:h-48 md:w-80">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover/card:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

        {/* Card Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-semibold text-card-foreground line-clamp-1">{item.title}</h3>
          <p className="text-xm text-primary">{item.company}</p>
          <p className="text-xm text-muted-foreground">{item.period}</p>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-3">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors">
              <Play className="h-5 w-5 fill-current" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground/80 text-foreground hover:border-foreground transition-colors">
              <Info className="h-4 w-4" />
            </button>
          </div>
          <p className="absolute bottom-4 text-xs text-muted-foreground">Click to view details</p>
        </div>
      </div>
    </div>
  )
}
