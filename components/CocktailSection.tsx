'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const cocktails = [
  {
    name: 'Gold Rush',
    price: '€22',
    img: '/img/cocktail.jpg',
    ingredients: ['Aged Whiskey', 'Honey Syrup', 'Fresh Lemon', 'Gold Leaf'],
    desc: 'A bold, warming cocktail that embodies luxury in every sip.',
    color: 'from-amber-900/30',
  },
  {
    name: 'Tropical Escape',
    price: '€19',
    img: '/img/cocktail1.jpg',
    ingredients: ['Blue Curaçao', 'Coconut Rum', 'Pineapple Juice', 'Mint'],
    desc: 'A vibrant escape to paradise in a glass.',
    color: 'from-blue-900/30',
  },
  {
    name: 'Spice Garden',
    price: '€20',
    img: '/img/cocktail2.jpg',
    ingredients: ['Mezcal', 'Cinnamon Syrup', 'Fresh Ginger', 'Lime'],
    desc: 'Complex spice notes balanced with citrus brightness.',
    color: 'from-orange-900/30',
  },
  {
    name: 'BORNÉ Signature',
    price: '€24',
    img: '/img/cocktail3.jpg',
    ingredients: ['Premium Gin', 'Rose Water', 'Elderflower', 'Prosecco'],
    desc: 'Our signature creation — the taste of BORNÉ.',
    color: 'from-rose-900/30',
  },
  {
    name: 'Pink Blossom',
    price: '€18',
    img: '/img/pinkcocktail.jpg',
    ingredients: ['Vodka', 'Lychee Liqueur', 'Rose Syrup', 'Champagne'],
    desc: 'Delicate, floral, and utterly feminine.',
    color: 'from-pink-900/30',
  },
  {
    name: 'The Celebration',
    price: '€26',
    img: '/img/cheeringcocktail.jpg',
    ingredients: ['Dom Perignon', 'Cognac Float', 'Gold Dust', 'Citrus Zest'],
    desc: 'For moments that deserve nothing but the finest.',
    color: 'from-yellow-900/30',
  },
]

export default function CocktailSection() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const prev = () => setCurrent(c => (c - 1 + cocktails.length) % cocktails.length)
  const next = () => setCurrent(c => (c + 1) % cocktails.length)
  const cocktail = cocktails[current]

  return (
    <section id="cocktails" className="relative py-32 bg-[#080808] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/img/cocktail.jpg')] bg-cover bg-center opacity-[0.06] blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#4A7C3508] blur-[150px]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.p
            className="text-xs tracking-[0.5em] text-[#4A7C35] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Liquid Art
          </motion.p>
          <motion.h2
            className="font-serif text-5xl md:text-7xl font-light text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Signature <span className="text-gradient-gold italic">Cocktails</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={cocktail.img}
                    alt={cocktail.name}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cocktail.color} to-transparent`} />
                </motion.div>
              </AnimatePresence>

              {/* Ring glow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-[#4A7C3530] pointer-events-none" />
            </div>

            {/* Navigation */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#4A7C3520] hover:border-[#4A7C35] transition-all duration-300 border border-white/10"
              >
                <FiChevronLeft className="text-white" size={18} />
              </button>
              <div className="flex gap-2">
                {cocktails.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === current ? 'w-6 h-1.5 bg-[#4A7C35]' : 'w-1.5 h-1.5 bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#4A7C3520] hover:border-[#4A7C35] transition-all duration-300 border border-white/10"
              >
                <FiChevronRight className="text-white" size={18} />
              </button>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xs tracking-[0.4em] text-[#4A7C35] uppercase mb-4">
                  {String(current + 1).padStart(2, '0')} / {String(cocktails.length).padStart(2, '0')}
                </p>
                <h3 className="font-serif text-4xl md:text-5xl text-white mb-4">{cocktail.name}</h3>
                <p className="text-[#4A7C35] text-2xl font-light mb-6">{cocktail.price}</p>
                <div className="luxury-line w-16 mb-6" />
                <p className="text-white/60 leading-relaxed mb-8 text-base">{cocktail.desc}</p>

                <div>
                  <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-4">Ingredients</p>
                  <div className="flex flex-wrap gap-2">
                    {cocktail.ingredients.map(ing => (
                      <span
                        key={ing}
                        className="px-4 py-2 glass text-xs tracking-[0.1em] text-white/70 border border-[#4A7C3520] rounded-full hover:border-[#4A7C3560] hover:text-[#4A7C35] transition-all duration-300"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
