'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

const timeSlots = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30']

const bookingTypes = [
  { val: 'dining', label: 'Fine Dining', sub: 'À la carte experience' },
  { val: 'vip', label: 'VIP Lounge', sub: 'Exclusive table service' },
  { val: 'private', label: 'Private Event', sub: 'Full venue hire' },
]

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2',
    type: 'dining', special: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const InputField = ({
    label, fieldKey, type = 'text', placeholder,
  }: { label: string; fieldKey: string; type?: string; placeholder?: string }) => (
    <div className="group relative">
      <label className="block text-[9px] tracking-[0.35em] text-[#4A7C3590] uppercase mb-2.5 font-medium">
        {label}
      </label>
      <input
        type={type}
        required
        placeholder={placeholder}
        value={formData[fieldKey as keyof typeof formData]}
        onChange={e => setFormData(f => ({ ...f, [fieldKey]: e.target.value }))}
        className="w-full bg-transparent border-b border-white/10 group-hover:border-[#4A7C3530] focus:border-[#4A7C35] pb-3 pt-1 text-white placeholder-white/15 outline-none text-sm transition-all duration-300 tracking-wide"
      />
    </div>
  )

  return (
    <section id="booking" className="relative py-24 md:py-32 bg-[#040404] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#4A7C3530] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(74,124,53,0.04),transparent)]" />

      <div ref={ref} className="max-w-2xl mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="text-[10px] tracking-[0.55em] text-[#4A7C35] uppercase mb-5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Join Us
          </motion.p>
          <motion.h2
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white mb-5 leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Make a <span className="text-gradient-gold italic">Reservation</span>
          </motion.h2>
          <motion.div
            className="luxury-line w-12 mx-auto mb-5"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.2 }}
          />
          <motion.p
            className="text-white/35 text-sm leading-relaxed max-w-sm mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
          >
            Secure your place at Prishtina&apos;s most exclusive dining experience
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="relative"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {/* Booking type selector */}
              <div className="grid grid-cols-3 gap-2 md:gap-3 mb-10 md:mb-12">
                {bookingTypes.map(type => (
                  <button
                    key={type.val}
                    type="button"
                    onClick={() => setFormData(f => ({ ...f, type: type.val }))}
                    className={`relative py-4 px-2 text-center transition-all duration-300 border rounded-sm ${
                      formData.type === type.val
                        ? 'border-[#4A7C35] bg-[#4A7C3510]'
                        : 'border-white/8 hover:border-[#4A7C3525]'
                    }`}
                  >
                    <span className={`block text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-medium mb-1 transition-colors ${
                      formData.type === type.val ? 'text-[#4A7C35]' : 'text-white/40'
                    }`}>
                      {type.label}
                    </span>
                    <span className="hidden md:block text-[8px] tracking-wide text-white/20">
                      {type.sub}
                    </span>
                  </button>
                ))}
              </div>

              {/* Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 mb-9">
                <InputField label="Full Name" fieldKey="name" placeholder="Your name" />
                <InputField label="Email Address" fieldKey="email" type="email" placeholder="your@email.com" />
                <InputField label="Phone" fieldKey="phone" type="tel" placeholder="+383 48 259 259" />
                <InputField label="Date" fieldKey="date" type="date" />
              </div>

              <div className="luxury-line mb-9" />

              {/* Guests */}
              <div className="mb-9">
                <label className="block text-[9px] tracking-[0.35em] text-[#4A7C3590] uppercase mb-4 font-medium">
                  Number of Guests
                </label>
                <div className="flex gap-2 flex-wrap">
                  {['1', '2', '3', '4', '5', '6', '7', '8+'].map(n => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setFormData(f => ({ ...f, guests: n }))}
                      className={`w-10 h-10 md:w-11 md:h-11 text-sm transition-all duration-300 border rounded-sm ${
                        formData.guests === n
                          ? 'bg-[#4A7C35] text-white border-[#4A7C35]'
                          : 'border-white/10 text-white/35 hover:border-[#4A7C3535] hover:text-white/60'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mb-9">
                <label className="block text-[9px] tracking-[0.35em] text-[#4A7C3590] uppercase mb-4 font-medium">
                  Preferred Time
                </label>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData(f => ({ ...f, time }))}
                      className={`px-3 md:px-4 py-2 text-xs tracking-wide transition-all duration-300 border rounded-sm ${
                        formData.time === time
                          ? 'bg-[#4A7C35] text-white border-[#4A7C35]'
                          : 'border-white/10 text-white/35 hover:border-[#4A7C3535] hover:text-white/60'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special requests */}
              <div className="mb-10 group">
                <label className="block text-[9px] tracking-[0.35em] text-[#4A7C3590] uppercase mb-2.5 font-medium">
                  Special Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="Allergies, special occasions, preferences..."
                  value={formData.special}
                  onChange={e => setFormData(f => ({ ...f, special: e.target.value }))}
                  className="w-full bg-transparent border-b border-white/10 group-hover:border-[#4A7C3530] focus:border-[#4A7C35] pb-3 pt-1 text-white placeholder-white/15 outline-none text-sm transition-all duration-300 resize-none tracking-wide"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group w-full py-4 md:py-5 bg-[#4A7C35] text-white text-[10px] tracking-[0.45em] uppercase font-medium relative overflow-hidden hover:shadow-[0_8px_40px_rgba(74,124,53,0.35)] transition-shadow duration-300"
              >
                <span className="relative z-10">Confirm Reservation</span>
                <div className="absolute inset-0 bg-[#6BAF4E] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <p className="text-center text-white/15 text-[10px] mt-4 tracking-wide">
                Your details are kept private and never shared.
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              className="text-center py-16 md:py-20"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full border border-[#4A7C35] bg-[#4A7C3510] flex items-center justify-center mx-auto mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              >
                <FiCheck size={26} className="text-[#4A7C35]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-[10px] tracking-[0.5em] text-[#4A7C35] uppercase mb-4">Confirmed</p>
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 font-light">
                  Reservation Received
                </h3>
                <div className="luxury-line w-12 mx-auto my-6" />
                <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto mb-2">
                  We look forward to welcoming you to BORNÉ.
                </p>
                <p className="text-[#4A7C35] text-xs tracking-wide">
                  A confirmation will be sent to your email.
                </p>
              </motion.div>

              <motion.button
                onClick={() => setSubmitted(false)}
                className="mt-10 px-8 py-3 border border-white/10 text-white/30 text-[10px] tracking-[0.3em] uppercase hover:border-[#4A7C3530] hover:text-[#4A7C35] transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                New Reservation
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
