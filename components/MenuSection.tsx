'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const categories = ['All', 'Signature', 'Breakfast', 'Dinner', 'Sushi', 'Burgers', 'Desserts', 'Cocktails']

const menuItems = [
  { name: 'Truffle Risotto', price: '€28', cat: 'Signature', img: '/img/food5.jpg', desc: 'Black truffle, arborio rice, aged parmesan', badge: "Chef's Pick", tag: 'Most Loved' },
  { name: 'Pan-Seared Salmon', price: '€32', cat: 'Dinner', img: '/img/food4.jpg', desc: 'Atlantic salmon, citrus butter, seasonal greens' },
  { name: 'Signature Burger', price: '€18', cat: 'Burgers', img: '/img/eatingburger.jpg', desc: 'Wagyu beef, aged cheddar, truffle aioli', tag: 'Most Loved' },
  { name: 'Sweet Dreams', price: '€14', cat: 'Desserts', img: '/img/dessert1.jpg', desc: 'Chocolate fondant, vanilla gelato, gold leaf', badge: 'Signature' },
  { name: 'Gold Rush', price: '€22', cat: 'Cocktails', img: '/img/cocktail.jpg', desc: 'Aged whiskey, honey, lemon, gold flakes', tag: 'Most Loved' },
  { name: 'Morning Glory', price: '€16', cat: 'Breakfast', img: '/img/food1.jpg', desc: 'Eggs benedict, smoked salmon, hollandaise' },
  { name: 'Dragon Roll', price: '€24', cat: 'Sushi', img: '/img/food6.jpg', desc: 'Prawn tempura, avocado, spicy mayo', badge: 'New' },
  { name: 'Mediterranean Feast', price: '€35', cat: 'Dinner', img: '/img/food3.jpg', desc: 'Grilled seabass, olive tapenade, herbs' },
  { name: 'Blush', price: '€18', cat: 'Cocktails', img: '/img/cocktail3.jpg', desc: 'Rose gin, elderflower, champagne foam' },
  { name: 'The BORNÉ Bowl', price: '€22', cat: 'Signature', img: '/img/food2.jpg', desc: 'Quinoa, roasted vegetables, tahini, pomegranate', badge: "Chef's Pick" },
]

type MenuItem = typeof menuItems[0]

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const filtered = activeCategory === 'All' ? menuItems : menuItems.filter(i => i.cat === activeCategory)

  return (
    <section id="menu" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('/img/food5.jpg')] bg-cover bg-center opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            className="text-xs tracking-[0.5em] text-[#4A7C35] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Culinary Journey
          </motion.p>
          <motion.h2
            className="font-serif text-5xl md:text-7xl font-light text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Our <span className="text-gradient-gold italic">Menu</span>
          </motion.h2>
        </div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#4A7C35] text-black border-[#4A7C35]'
                  : 'border-white/20 text-white/50 hover:border-[#4A7C35] hover:text-[#4A7C35]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                className="group relative glass rounded-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  {item.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#4A7C35] text-black text-[9px] tracking-[0.2em] uppercase font-medium">
                      {item.badge}
                    </div>
                  )}
                  {item.tag && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 border border-[#4A7C3540] text-[#4A7C35] text-[9px] tracking-[0.2em] uppercase">
                      {item.tag}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-serif text-lg text-white group-hover:text-[#4A7C35] transition-colors">{item.name}</h3>
                    <span className="text-[#4A7C35] font-light text-base ml-2">{item.price}</span>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                  <p className="text-xs tracking-[0.2em] text-[#4A7C3580] uppercase mt-3">{item.cat}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4A7C3540] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative max-w-md w-full glass rounded-2xl overflow-hidden"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-64">
                <Image src={selectedItem.img} alt={selectedItem.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-3xl text-white">{selectedItem.name}</h3>
                  <span className="text-[#4A7C35] text-2xl font-light">{selectedItem.price}</span>
                </div>
                <p className="text-white/50 mb-2 text-xs tracking-[0.2em] uppercase text-[#4A7C35]">{selectedItem.cat}</p>
                <p className="text-white/70 leading-relaxed">{selectedItem.desc}</p>
                <button
                  className="mt-6 w-full py-3 bg-[#4A7C35] text-black text-xs tracking-[0.3em] uppercase font-medium hover:bg-[#6BAF4E] transition-colors"
                  onClick={() => {
                    setSelectedItem(null)
                    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Reserve &amp; Order
                </button>
                <button
                  className="mt-3 w-full py-2 text-white/40 text-xs hover:text-white transition-colors"
                  onClick={() => setSelectedItem(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
