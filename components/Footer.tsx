'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiInstagram, FiFacebook, FiTwitter, FiMail } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'

const navLinks = [
  { label: 'Experience', href: '#showcase' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Cocktails', href: '#cocktails' },
  { label: 'Booking', href: '#booking' },
  { label: 'Location', href: '#location' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#050505] border-t border-[#4A7C3515] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#4A7C3540] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-10">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="relative w-16 h-16 mb-6">
              <Image src="/img/logo.png" alt="BORNÉ" fill className="object-contain" />
            </div>
            <h3 className="font-serif text-2xl text-white mb-2">BORNÉ FOOD CLUB</h3>
            <p className="text-[#4A7C35] text-xs tracking-[0.3em] uppercase mb-4">Where Fine Dining Meets Nightlife</p>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-3">
              An exclusive culinary experience in the heart of Prishtina, where every visit becomes an unforgettable story.
            </p>
            <p className="text-white/30 text-xs">30 Luan Haradinaj, Prishtinë 10000</p>
            <a href="tel:+38348259259" className="text-white/30 text-xs hover:text-[#4A7C35] transition-colors">+383 48 259 259</a>
            <div className="flex gap-4 mt-6">
              {[
                { icon: <FiInstagram size={18} />, href: '#' },
                { icon: <FiFacebook size={18} />, href: '#' },
                { icon: <FaTiktok size={16} />, href: '#' },
                { icon: <FiTwitter size={18} />, href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-[#4A7C35] hover:border-[#4A7C3540] transition-all duration-300 border border-white/10"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] tracking-[0.4em] text-[#4A7C3580] uppercase mb-6">Navigation</p>
            <div className="flex flex-col gap-3">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-white/40 text-sm hover:text-[#4A7C35] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-[10px] tracking-[0.4em] text-[#4A7C3580] uppercase mb-6">Newsletter</p>
            <p className="text-white/40 text-sm mb-4">Stay informed about exclusive events and new menu launches.</p>
            {!subscribed ? (
              <div className="relative">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#4A7C35] py-3 pr-10 text-white placeholder-white/20 outline-none text-sm transition-colors"
                />
                <button
                  onClick={() => email && setSubscribed(true)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-[#4A7C35] hover:text-[#6BAF4E] transition-colors"
                >
                  <FiMail size={16} />
                </button>
              </div>
            ) : (
              <p className="text-[#4A7C35] text-sm">Thank you for subscribing!</p>
            )}
          </div>
        </div>

        <div className="luxury-line mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/20 text-xs tracking-wider">
          <p>© {new Date().getFullYear()} BORNÉ Food Club. All rights reserved.</p>
          <p>30 Luan Haradinaj, Prishtinë 10000, Kosovo</p>
          <div className="flex gap-6">
            <span className="hover:text-[#4A7C35] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#4A7C35] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
