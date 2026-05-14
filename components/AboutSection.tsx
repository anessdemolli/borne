'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  const ref = useRef(null)
  const imgRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section id="about" className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#4A7C3508] blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#4A7C3508] blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            className="relative h-[500px] md:h-[650px] overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div ref={imgRef} className="absolute inset-[-10%] w-[120%] h-[120%]">
              <motion.div style={{ y }} className="w-full h-full">
                <Image
                  src="/img/food6.jpg"
                  alt="BORNÉ Interior"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            {/* Gold corner accents */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-[#4A7C3560]" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-[#4A7C3560]" />
            {/* Stats overlay */}
            <div className="absolute bottom-8 left-8 glass px-6 py-4 rounded-lg">
              <p className="font-serif text-3xl text-[#4A7C35]">2024</p>
              <p className="text-xs tracking-[0.3em] text-white/50 uppercase mt-1">Est. Prishtina</p>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.p
              className="text-xs tracking-[0.5em] text-[#4A7C35] uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Story
            </motion.p>
            <motion.h2
              className="font-serif text-5xl md:text-6xl font-light text-white leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A Place Where{' '}
              <span className="text-gradient-gold italic">Luxury</span>{' '}
              Meets Flavor
            </motion.h2>

            <motion.div
              className="luxury-line w-16 mb-8"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            />

            <motion.p
              className="text-white/60 leading-relaxed text-base mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              BORNÉ Food Club was born from a singular vision: to create a space where the art of fine dining
              transcends mere sustenance. Every detail — from our hand-curated menu to our atmosphere —
              is crafted to immerse you in an experience that lingers long after the last bite.
            </motion.p>

            <motion.p
              className="text-white/40 leading-relaxed text-sm mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Our philosophy is simple: exceptional ingredients, masterful preparation,
              and an ambiance that transforms every visit into a memory. We don&apos;t just serve food —
              we orchestrate evenings that become part of your story.
            </motion.p>

            <motion.div
              className="grid grid-cols-3 gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {[
                { num: '150+', label: 'Menu Items' },
                { num: '50+', label: 'Cocktails' },
                { num: '∞', label: 'Experiences' },
              ].map((stat) => (
                <div key={stat.label} className="text-center border-l border-[#4A7C3530] pl-4">
                  <p className="font-serif text-3xl text-[#4A7C35] mb-1">{stat.num}</p>
                  <p className="text-xs tracking-[0.2em] text-white/40 uppercase">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.button
              onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-4 text-[#4A7C35] text-xs tracking-[0.3em] uppercase hover:gap-6 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span>Explore Our Menu</span>
              <div className="w-8 h-[1px] bg-[#4A7C35] group-hover:w-12 transition-all duration-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
