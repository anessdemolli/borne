'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiClock, FiPhone, FiStar } from 'react-icons/fi'

export default function LocationSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="location" className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-[#4A7C3508] blur-[100px]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <motion.p
            className="text-xs tracking-[0.5em] text-[#4A7C35] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Find Us
          </motion.p>
          <motion.h2
            className="font-serif text-5xl md:text-7xl font-light text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Our <span className="text-gradient-gold italic">Location</span>
          </motion.h2>

          {/* Google Rating Badge */}
          <motion.a
            href="https://maps.app.goo.gl/M565+6P"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-8 px-6 py-3 glass border border-[#4A7C3530] rounded-full hover:border-[#4A7C3560] transition-all duration-300 group"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
          >
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <FiStar
                  key={i}
                  size={12}
                  className={i <= 4 ? 'text-[#4A7C35] fill-[#4A7C35]' : 'text-[#4A7C3580]'}
                  style={{ fill: i <= 4 ? '#4A7C35' : 'none' }}
                />
              ))}
            </div>
            <span className="text-white text-sm font-medium">4.7</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-white/40 text-xs tracking-wide">35 reviews on Google</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            className="relative h-[450px] glass rounded-2xl overflow-hidden border border-[#4A7C3520]"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://maps.google.com/maps?q=30+Luan+Haradinaj+Prishtina+Kosovo&output=embed"
              width="100%"
              height="100%"
              style={{ filter: 'invert(90%) hue-rotate(180deg) brightness(0.7) saturate(0.5)', border: 0 }}
              allowFullScreen
              loading="lazy"
              title="BORNÉ Food Club Location"
            />
            {/* Animated pin overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center"
              >
                <div className="w-5 h-5 rounded-full bg-[#4A7C35] shadow-[0_0_24px_rgba(74,124,53,0.9)]" />
                <div className="w-px h-5 bg-gradient-to-b from-[#4A7C35] to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Address */}
            <motion.div
              className="glass rounded-xl p-6 border border-[#4A7C3510] hover:border-[#4A7C3530] transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4A7C3510] flex items-center justify-center flex-shrink-0 group-hover:bg-[#4A7C3520] transition-colors">
                  <FiMapPin size={18} className="text-[#4A7C35]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-[#4A7C3580] uppercase mb-2">Address</p>
                  <p className="text-white/80 text-sm font-medium">30 Luan Haradinaj</p>
                  <p className="text-white/50 text-sm">Prishtinë 10000, Kosovo</p>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              className="glass rounded-xl p-6 border border-[#4A7C3510] hover:border-[#4A7C3530] transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4A7C3510] flex items-center justify-center flex-shrink-0 group-hover:bg-[#4A7C3520] transition-colors">
                  <FiClock size={18} className="text-[#4A7C35]" />
                </div>
                <div className="w-full">
                  <p className="text-[10px] tracking-[0.3em] text-[#4A7C3580] uppercase mb-3">Opening Hours</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {[
                      { day: 'Mon – Fri', hours: '07:00 – 00:00' },
                      { day: 'Saturday', hours: '10:30 – 00:00' },
                      { day: 'Sunday', hours: 'Closed', closed: true },
                    ].map(row => (
                      <div key={row.day} className="contents">
                        <p className="text-white/40 text-xs">{row.day}</p>
                        <p className={`text-xs font-medium ${row.closed ? 'text-white/25' : 'text-white/70'}`}>
                          {row.hours}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="glass rounded-xl p-6 border border-[#4A7C3510] hover:border-[#4A7C3530] transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4A7C3510] flex items-center justify-center flex-shrink-0 group-hover:bg-[#4A7C3520] transition-colors">
                  <FiPhone size={18} className="text-[#4A7C35]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-[#4A7C3580] uppercase mb-2">Reservations</p>
                  <a
                    href="tel:+38348259259"
                    className="text-white/80 text-sm font-medium hover:text-[#4A7C35] transition-colors"
                  >
                    +383 48 259 259
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Get Directions CTA */}
            <motion.a
              href="https://www.google.com/maps/search/30+Luan+Haradinaj+Prishtina+Kosovo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 py-4 border border-[#4A7C3540] text-[#4A7C35] text-xs tracking-[0.3em] uppercase hover:bg-[#4A7C35] hover:text-black transition-all duration-300 rounded-lg"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.65 }}
            >
              <FiMapPin size={14} />
              Get Directions on Google Maps
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
