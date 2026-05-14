'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 600)
          return 100
        }
        return prev + 2
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center"
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative w-24 h-24">
              <Image src="/img/logo.png" alt="BORNÉ" fill className="object-contain" />
            </div>
            <div className="text-center">
              <h1 className="font-serif text-4xl md:text-5xl tracking-[0.3em] text-gradient-gold">BORNÉ</h1>
              <p className="text-xs tracking-[0.5em] text-[#4A7C3580] mt-2 uppercase">Food Club</p>
            </div>
            <div className="w-48 h-[1px] bg-[#2C2C2E] relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#4A7C35] to-[#6BAF4E]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              />
            </div>
            <p className="text-xs tracking-[0.3em] text-[#ffffff40]">{progress}%</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
