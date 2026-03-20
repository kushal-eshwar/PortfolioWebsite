"use client"

import { useState } from "react"
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react"

interface ContentItem {
  id: number
  title: string
  description: string
  stats: string
  image: string
}

interface ContentCardProps {
  item: ContentItem
}

export function ContentCard({ item }: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group/card relative flex-shrink-0 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Card */}
      <div className="relative h-40 w-64 overflow-hidden rounded-sm sm:h-44 sm:w-72 md:h-48 md:w-80">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover/card:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
      </div>

      {/* Expanded Card on Hover */}
      <div
        className={`absolute left-1/2 top-0 z-20 w-72 -translate-x-1/2 overflow-hidden rounded-md bg-card shadow-2xl transition-all duration-300 sm:w-80 ${
          isHovered ? "scale-110 opacity-100" : "pointer-events-none scale-100 opacity-0"
        }`}
      >
        {/* Image */}
        <div className="relative h-40 sm:h-44">
          <img src={item.image || "/placeholder.svg"} alt={item.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Action Buttons */}
          <div className="mb-3 flex items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background hover:bg-foreground/80 transition-colors">
              <Play className="h-4 w-4 fill-current" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-muted-foreground/50 text-foreground hover:border-foreground transition-colors">
              <Plus className="h-4 w-4" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-muted-foreground/50 text-foreground hover:border-foreground transition-colors">
              <ThumbsUp className="h-4 w-4" />
            </button>
            <button className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-muted-foreground/50 text-foreground hover:border-foreground transition-colors">
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          {/* Stats */}
          <div className="mb-2 flex items-center gap-2 text-xs">
            <span className="font-semibold text-green-500">{item.stats}</span>
          </div>

          {/* Title */}
          <h3 className="mb-1 text-sm font-semibold text-card-foreground line-clamp-2">{item.title}</h3>

          {/* Description */}
          <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
        </div>
      </div>
    </div>
  )
}
