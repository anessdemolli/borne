'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { FiInstagram, FiHeart } from 'react-icons/fi'

const galleryItems = [
  { img: '/img/food1.jpg', likes: '1.2K' },
  { img: '/img/cocktail2.jpg', likes: '856' },
  { img: '/img/food4.jpg', likes: '2.1K' },
  { img: '/img/femaleschilling.jpg', likes: '3.4K' },
  { img: '/img/food5.jpg', likes: '1.8K' },
  { img: '/img/pinkcocktail.jpg', likes: '967' },
  { img: '/img/food2.jpg', likes: '1.5K' },
  { img: '/img/cheeringcocktail.jpg', likes: '4.2K' },
  { img: '/img/food3.jpg', likes: '721' },
]

const testimonials = [
  {
    text: "BORNÉ is not just a restaurant — it's an experience that lingers in your memory long after you leave.",
    author: 'A. Krasniqi', role: 'Food Critic',
  },
  {
    text: 'The atmosphere, the food, the cocktails — everything is perfection. My favorite place in Prishtina.',
    author: 'M. Gashi', role: 'Regular Guest',
  },
  {
    text: 'An elite dining experience that rivals the best restaurants in Europe. Absolutely exceptional.',
    author: 'E. Berisha', role: 'Lifestyle Blogger',
  },
]

export default function SocialSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="social" className="relative py-32 bg-black overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.p
            className="text-xs tracking-[0.5em] text-[#4A7C35] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            @bornefoodclub
          </motion.p>
          <motion.h2
            className="font-serif text-5xl md:text-7xl font-light text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            The <span className="text-gradient-gold italic">Moments</span>
          </motion.h2>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-2 md:columns-3 gap-3 mb-20">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              className="relative break-inside-avoid mb-3 group overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06 }}
            >
              <div className={`relative ${i % 3 === 0 ? 'h-64' : i % 3 === 1 ? 'h-48' : 'h-56'} overflow-hidden`}>
                <Image
                  src={item.img}
                  alt={`BORNÉ moment ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col gap-2">
                  <FiInstagram size={24} className="text-white" />
                  <div className="flex items-center gap-1 text-white text-sm">
                    <FiHeart size={14} />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Stats */}
        <motion.div
          className="grid grid-cols-3 gap-6 mb-20 max-w-lg mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {[
            { num: '12.4K', label: 'Followers' },
            { num: '340+', label: 'Posts' },
            { num: '98%', label: 'Satisfaction' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-serif text-3xl text-[#4A7C35] mb-1">{stat.num}</p>
              <p className="text-xs tracking-[0.2em] text-white/40 uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="glass rounded-xl p-8 border border-[#4A7C3515] hover:border-[#4A7C3530] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <p className="font-serif text-3xl text-[#4A7C35] mb-4">&ldquo;</p>
              <p className="text-white/70 leading-relaxed text-sm italic mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="luxury-line mb-4" />
              <p className="text-white/80 text-sm font-medium">{t.author}</p>
              <p className="text-[#4A7C3560] text-xs tracking-[0.2em] uppercase mt-1">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
