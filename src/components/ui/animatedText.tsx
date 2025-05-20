'use client'

import { animate, stagger } from 'motion'
import { splitText } from 'motion-plus'
import { useEffect, useRef } from 'react'

const SplitText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return

      containerRef.current.style.visibility = 'visible'

      const { words } = splitText(containerRef.current.querySelector('h1')!)

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: 'spring',
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      )
    })
  }, [])

  return (
    <div className="container" ref={containerRef}>
      <h1 className="text-6xl md:text-9xl font-bold">{text}</h1>
      <Stylesheet />
    </div>
  )
}

export default SplitText

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 700px;
                text-align: left;
                visibility: hidden;
                flex-wrap: wrap;
            }

            .split-word {
                will-change: transform, opacity;
                display: inline-block;
                margin-right: 0.25em; /* add space between words */
            }
        `}</style>
  )
}
