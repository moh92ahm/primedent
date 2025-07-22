'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface RotatingImageStripProps {
  images: string[]
}

const RotatingImageStrip: React.FC<RotatingImageStripProps> = ({ images }) => {
  const stripRef = useRef<HTMLDivElement>(null)
  const [visibleCount, setVisibleCount] = useState(15)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1536) setVisibleCount(18) // 2xl
      else if (width >= 1280) setVisibleCount(14) // xl
      else if (width >= 1024) setVisibleCount(12) // lg
      else if (width >= 768) setVisibleCount(8) // md
      else setVisibleCount(6) // sm
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (stripRef.current) {
        stripRef.current.scrollLeft += e.deltaY * 0.7 // scroll horizontally with vertical scroll
      }
    }

    const container = stripRef.current
    if (container) container.addEventListener('wheel', handleScroll)
    return () => container?.removeEventListener('wheel', handleScroll)
  }, [])

  const placeholdersNeeded = Math.max(0, visibleCount - images.length)
  const totalItems = Math.max(images.length, visibleCount)
  const middleIndex = totalItems / 2

  return (
    <div className="py-10 bg-transparent">
      <div
        ref={stripRef}
        className="flex space-x-4 px-6 transition-transform duration-300 ease-out justify-center"
      >
        {Array.from({ length: totalItems }).map((_, idx) => {
          const offset = idx - middleIndex
          const rotation = offset * 5
          const translateY = Math.pow(offset, 2) * -1.2 + 40 // More natural curve
          const scale = 1 - Math.abs(offset) * 0.04
          const image = images[idx]

          return (
            <div
              key={`item-${idx}`}
              className="min-w-[120px] h-[160px] rounded shadow-lg flex-shrink-0 transition-all duration-700 ease-in-out opacity-0 animate-fadeIn"
              style={{
                transform: `rotate(${rotation}deg) translateY(${translateY}px) scale(${scale})`,
                transformOrigin: 'bottom center',
                animationDelay: `${idx * 50}ms`,
                animationFillMode: 'forwards',
              }}
            >
              {image ? (
                <Image
                  src={image}
                  alt={`Image ${idx + 1}`}
                  width={120}
                  height={160}
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 rounded" />
              )}
            </div>
          )
        })}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>


  )
}

export default RotatingImageStrip
