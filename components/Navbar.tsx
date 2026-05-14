'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Experience', href: '#showcase' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Cocktails', href: '#cocktails' },
  { label: 'Book', href: '#booking' },
  { label: 'Location', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <div className={`mx-4 md:mx-8 rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'glass' : ''
        }`}>
          {/* Logo */}
          <Link href="/" className="relative w-14 h-14 flex-shrink-0">
            <Image src="/img/logo.png" alt="BORNÉ" fill className="object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs tracking-[0.2em] text-white/60 hover:text-[#4A7C35] transition-colors duration-300 uppercase relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#4A7C35] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('#booking')}
              className="px-6 py-2.5 border border-[#4A7C35] text-[#4A7C35] text-xs tracking-[0.2em] uppercase hover:bg-[#4A7C35] hover:text-black transition-all duration-300 rounded-full"
            >
              Reserve Table
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center z-[1001] relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-[1px] bg-[#4A7C35] origin-center"
              animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-4 h-[1px] bg-[#4A7C35] ml-auto origin-center"
              animate={menuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-[1px] bg-[#4A7C35] origin-center"
              animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center lg:hidden"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Ambient gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(74,124,53,0.06)_0%,_transparent_70%)]" />

            {/* Logo at top */}
            <div className="absolute top-8 left-8">
              <Image src="/img/logo.png" alt="BORNÉ" width={56} height={56} className="object-contain" />
            </div>

            <div className="flex flex-col items-center gap-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-serif text-4xl md:text-5xl text-white hover:text-[#4A7C35] transition-colors duration-300 tracking-wider"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick('#booking')}
                className="mt-4 px-10 py-4 border border-[#4A7C35] text-[#4A7C35] text-sm tracking-[0.3em] uppercase hover:bg-[#4A7C35] hover:text-black transition-all duration-300 rounded-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.07 }}
              >
                Reserve Table
              </motion.button>
            </div>

            {/* Social links */}
            <motion.div
              className="absolute bottom-10 flex gap-8 text-white/40 text-xs tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span>Instagram</span>
              <span>•</span>
              <span>Facebook</span>
              <span>•</span>
              <span>TikTok</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
