'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { FiMusic, FiStar } from 'react-icons/fi'
import { PiWineFill } from 'react-icons/pi'
import { BsMoonStarsFill } from 'react-icons/bs'

const bars = Array.from({ length: 20 })

const loungeFeatures = [
  {
    icon: <FiMusic size={24} className="text-[#4A7C35]" />,
    title: 'Live Music',
    desc: 'Every weekend, we host live jazz and acoustic sessions that transform the atmosphere into pure magic.',
  },
  {
    icon: <PiWineFill size={24} className="text-[#4A7C35]" />,
    title: 'Curated Spirits',
    desc: 'An extensive selection of rare spirits, aged whiskeys, and craft cocktails curated by our master mixologist.',
  },
  {
    icon: <BsMoonStarsFill size={22} className="text-[#4A7C35]" />,
    title: 'Late Night Vibes',
    desc: "From 22:00, the lounge transforms into Prishtina's most exclusive nightlife experience.",
  },
]

export default function LoungeSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="lounge" className="relative py-24 md:py-32 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/img/femaleschilling.jpg"
          alt="BORNÉ Lounge"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/75 to-black" />
      </div>

      {/* Ambient gradient pulse */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#4A7C3508] via-transparent to-[#4A7C3508]"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            className="text-xs tracking-[0.5em] text-[#4A7C35] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Late Night
          </motion.p>
          <motion.h2
            className="font-serif text-5xl sm:text-6xl md:text-8xl font-light text-white leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            The <span className="text-gradient-gold italic">Lounge</span>
          </motion.h2>
          <motion.p
            className="font-serif text-base sm:text-xl text-white/35 italic mt-6 max-w-lg mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            &ldquo;Where the night comes alive and time slows to a perfect rhythm.&rdquo;
          </motion.p>
        </div>

        {/* Equalizer bars */}
        <motion.div
          className="flex items-end justify-center gap-[3px] h-12 md:h-16 mb-16 md:mb-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {bars.map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 md:w-2 bg-gradient-to-t from-[#4A7C35] to-[#6BAF4E] rounded-t-sm"
              animate={{
                height: [
                  `${15 + ((i * 17) % 40)}%`,
                  `${55 + ((i * 13) % 40)}%`,
                  `${15 + ((i * 17) % 40)}%`,
                ],
              }}
              transition={{
                duration: 0.8 + (i % 5) * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: (i % 6) * 0.1,
              }}
            />
          ))}
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8 mb-16 md:mb-20">
          {loungeFeatures.map((item, i) => (
            <motion.div
              key={i}
              className="group text-center px-4 py-8 glass rounded-xl border border-white/5 hover:border-[#4A7C3530] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.12 }}
            >
              <div className="w-14 h-14 rounded-full bg-[#4A7C3512] border border-[#4A7C3530] flex items-center justify-center mx-auto mb-5 group-hover:bg-[#4A7C3520] transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-white mb-3 group-hover:text-[#4A7C35] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Rating strip */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65 }}
        >
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
              <FiStar
                key={i}
                size={13}
                style={{ fill: i <= 4 ? '#4A7C35' : 'none', color: '#4A7C35' }}
              />
            ))}
          </div>
          <span className="text-white/50 text-xs tracking-[0.3em]">4.7 · 35 REVIEWS</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <p className="text-white/25 text-[10px] tracking-[0.5em] uppercase mb-6">
            Reserve Your Late Night Experience
          </p>
          <button
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-12 md:px-16 py-4 md:py-5 border border-[#4A7C3550] text-[#4A7C35] text-xs tracking-[0.4em] uppercase overflow-hidden hover:shadow-[0_0_50px_rgba(74,124,53,0.25)] transition-shadow duration-500"
          >
            <span className="relative z-10">Book The Lounge</span>
            <div className="absolute inset-0 bg-[#4A7C3510] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
