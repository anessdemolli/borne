'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = cursorDotRef.current
    if (!cursor || !dot) return

    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.08
      cursorY += (mouseY - cursorY) * 0.08
      cursor.style.left = cursorX + 'px'
      cursor.style.top = cursorY + 'px'
      requestAnimationFrame(animate)
    }

    const handleMouseEnter = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)'
      cursor.style.borderColor = 'rgba(74,124,53,0.8)'
      cursor.style.background = 'rgba(74,124,53,0.1)'
    }

    const handleMouseLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)'
      cursor.style.borderColor = 'rgba(74,124,53,0.5)'
      cursor.style.background = 'transparent'
    }

    document.addEventListener('mousemove', moveCursor)
    animate()

    const links = document.querySelectorAll('a, button, [data-cursor]')
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter)
      link.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 rounded-full border border-[#4A7C3580] pointer-events-none z-[10000] transition-all duration-300"
        style={{ transform: 'translate(-50%, -50%)', left: '-100px', top: '-100px' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-1.5 h-1.5 rounded-full bg-[#4A7C35] pointer-events-none z-[10001]"
        style={{ transform: 'translate(-50%, -50%)', left: '-100px', top: '-100px' }}
      />
    </>
  )
}
