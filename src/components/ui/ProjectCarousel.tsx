'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import {
  ImageUniversalStudio,
  FlagThailand,
  FlagMalaysia,
  FlagSingapore,
} from '@/assets/images'

type Attraction = {
  name: string
  src: string
  location: string
  about: string
  history: string
  flags?: string[]
}

const flagMap = {
  FlagThailand,
  FlagMalaysia,
  FlagSingapore,
}

const imageMap = {
  ImageUniversalStudio
}

const AttractionCarousel = ({
  attractions,
  texts,
}: {
  attractions: Attraction[]
  texts: { location: string; about: string, history: string }
}) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let animationFrame: number
    const scrollSpeed = 1

    const loopScroll = () => {
      if (!container) return
      if (!isHovered) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0
        } else {
          container.scrollLeft += scrollSpeed
        }
      }
      animationFrame = requestAnimationFrame(loopScroll)
    }

    animationFrame = requestAnimationFrame(loopScroll)
    return () => cancelAnimationFrame(animationFrame)
  }, [isHovered])

  return (
    <div
      className="h-[50vh] overflow-x-auto overflow-y-hidden pr-2 relative mb-8 scrollbar-hide"
      ref={scrollRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-6 w-max mt-8">
        {[...attractions, ...attractions, ...attractions, ...attractions, ...attractions, ...attractions, ...attractions, ...attractions, ...attractions, ...attractions].map((attraction, i) => (
          <div
            key={i}
            className="group relative w-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105"
          >
            <Image
              src={imageMap[attraction.src as keyof typeof imageMap]}
              alt="Attraction Background"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 opacity-100 group-hover:opacity-0">
              <h3 className="text-white mb-2">{attraction.name}</h3>

              <div className="flex items-center gap-3 mb-3">
                {attraction.flags?.map((flagName, idx) => {
                  const flagImage = flagMap[flagName as keyof typeof flagMap]
                  if (!flagImage) return null
                  return (
                    <Image
                      key={idx}
                      src={flagImage}
                      alt={flagName}
                      width={28}
                      height={28}
                      className="rounded-full border border-white"
                    />
                  )
                })}
              </div>
            </div>

            <div className="absolute inset-0 bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center text-left overflow-y-auto">
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-1">
                  {texts.location}
                </h4>
                <p className="text-sm">{attraction.location}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">{texts.about}</h4>
                <p className="text-sm">{attraction.about}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">{texts.history}</h4>
                <p className="text-sm">{attraction.history}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AttractionCarousel
