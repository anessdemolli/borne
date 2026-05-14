'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiArrowDown } from 'react-icons/hi'

const heroImages = ['/img/femaleschilling.jpg', '/img/food1.jpg', '/img/cocktail.jpg', '/img/food2.jpg']

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px circle at ${x}% ${y}%, rgba(74,124,53,0.07), transparent 60%)`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToNext = () => {
    const el = document.querySelector('#showcase')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images */}
      {heroImages.map((img, i) => (
        <motion.div
          key={img}
          className="absolute inset-0"
          animate={{ opacity: i === currentImage ? 1 : 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: i === currentImage ? 1.08 : 1 }}
            transition={{ duration: 6, ease: 'easeInOut' }}
          >
            <Image
              src={img}
              alt={`BORNÉ atmosphere ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10" />

      {/* Mouse-follow glow */}
      <div ref={glowRef} className="absolute inset-0 z-10 pointer-events-none transition-all duration-300" />

      {/* Floating Particles — fewer on mobile via count */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px rounded-full bg-[#4A7C35]"
            style={{
              left: `${(i * 5.5 + 3) % 100}%`,
              top: `${(i * 7.3 + 10) % 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.7, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Image dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentImage ? 'w-8 h-1 bg-[#4A7C35]' : 'w-1 h-1 bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          className="text-[10px] md:text-xs tracking-[0.5em] text-[#4A7C35] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          Est. 2024 · Prishtina
        </motion.p>

        <motion.h1
          className="font-serif text-[4rem] sm:text-7xl md:text-[10rem] lg:text-[14rem] font-light tracking-[0.05em] leading-none text-white gold-glow"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 2.9, ease: [0.76, 0, 0.24, 1] }}
        >
          BORNÉ
        </motion.h1>

        <motion.div
          className="luxury-line w-24 md:w-32 my-5 md:my-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 3.3 }}
        />

        <motion.p
          className="font-serif text-lg sm:text-xl md:text-3xl lg:text-4xl font-light text-white/70 italic tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          Where fine dining meets nightlife.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 md:mt-12 w-full max-w-xs sm:max-w-none sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.7 }}
        >
          <button
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 sm:px-10 py-4 bg-[#4A7C35] text-white text-xs tracking-[0.3em] uppercase font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(74,124,53,0.5)]"
          >
            <span className="relative z-10">Reserve Table</span>
            <div className="absolute inset-0 bg-[#6BAF4E] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button
            onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 sm:px-10 py-4 border border-white/30 text-white/80 text-xs tracking-[0.3em] uppercase hover:border-[#4A7C35] hover:text-[#4A7C35] transition-all duration-300"
          >
            Explore Menu
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 hover:text-[#4A7C35] transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2 }}
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  )
}
