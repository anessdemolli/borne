'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const showcaseItems = [
  { img: '/img/food5.jpg', label: 'Culinary Art', span: 'col-span-2 row-span-2' },
  { img: '/img/cocktail1.jpg', label: 'Craft Cocktails', span: '' },
  { img: '/img/femaleschilling.jpg', label: 'Lounge Vibes', span: '' },
  { img: '/img/food3.jpg', label: 'Fine Dining', span: '' },
  { img: '/img/cheeringcocktail.jpg', label: 'Social Nights', span: 'col-span-2' },
]

export default function ShowcaseSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="showcase" className="relative py-32 bg-black overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#4A7C3510] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div ref={ref} className="text-center mb-20">
          <motion.p
            className="text-xs tracking-[0.5em] text-[#4A7C35] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            The Experience
          </motion.p>
          <motion.h2
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Experience{' '}
            <span className="text-gradient-gold italic">BORNÉ</span>
          </motion.h2>
          <motion.div
            className="luxury-line w-24 mx-auto mt-8"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${item.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#4A7C3540] transition-all duration-500" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[10px] tracking-[0.4em] text-[#4A7C35] uppercase mb-1">Discover</p>
                <p className="font-serif text-xl text-white">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
