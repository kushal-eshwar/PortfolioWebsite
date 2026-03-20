"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ContentCard } from "./content-card"

interface ContentItem {
  id: number
  title: string
  description: string
  stats: string
  image: string
}

interface ContentRowProps {
  title: string
  items: ContentItem[]
}

export function ContentRow({ title, items }: ContentRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const scrollAmount = rowRef.current.clientWidth * 0.75
      const newScrollLeft =
        direction === "left" ? rowRef.current.scrollLeft - scrollAmount : rowRef.current.scrollLeft + scrollAmount

      rowRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" })
    }
  }

  const handleScroll = () => {
    if (rowRef.current) {
      setShowLeftArrow(rowRef.current.scrollLeft > 0)
      setShowRightArrow(rowRef.current.scrollLeft < rowRef.current.scrollWidth - rowRef.current.clientWidth - 10)
    }
  }

  return (
    <section className="relative px-4 sm:px-6 lg:px-16">
      <h2 className="mb-4 text-xl font-semibold text-foreground sm:text-2xl">{title}</h2>

      <div className="group relative">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 z-10 hidden h-full w-12 items-center justify-center bg-gradient-to-r from-background to-transparent opacity-0 transition-opacity group-hover:opacity-100 md:flex"
          >
            <ChevronLeft className="h-8 w-8 text-foreground" />
          </button>
        )}

        {/* Content Row */}
        <div
          ref={rowRef}
          onScroll={handleScroll}
          className="carousel-row hide-scrollbar flex gap-2 overflow-x-auto pb-4 sm:gap-3"
        >
          {items.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-0 z-10 hidden h-full w-12 items-center justify-center bg-gradient-to-l from-background to-transparent opacity-0 transition-opacity group-hover:opacity-100 md:flex"
          >
            <ChevronRight className="h-8 w-8 text-foreground" />
          </button>
        )}
      </div>
    </section>
  )
}
