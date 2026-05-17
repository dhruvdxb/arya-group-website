'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '@/constants'
import { fadeUp, staggerContainer } from '@/utils/animations'

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#c9a96e">
          <path d="M6 1l1.4 2.8 3.1.5-2.2 2.2.5 3.1L6 8.2l-2.8 1.4.5-3.1L1.5 4.3l3.1-.5L6 1z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <motion.div
      layout
      className="group glass border border-white/6 hover:border-gold/20 p-8 lg:p-10 relative overflow-hidden transition-all duration-500"
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top border glow on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Quote mark */}
        <div className="font-display text-6xl text-gold/15 leading-none mb-4 -ml-1">"</div>

        {/* Stars */}
        <div className="mb-5">
          <StarRating count={testimonial.rating} />
        </div>

        {/* Quote */}
        <p className="font-body font-light text-[15px] text-white/60 leading-relaxed mb-8 italic">
          {testimonial.quote}
        </p>

        {/* Divider */}
        <div className="w-10 h-px bg-gold/25 mb-6 group-hover:w-16 transition-all duration-500" />

        {/* Author */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/20">
            <span className="font-display text-sm font-light text-gold">
              {testimonial.initials}
            </span>
          </div>
          <div>
            <p className="font-body text-[14px] font-medium text-white">{testimonial.name}</p>
            <p className="font-body text-[12px] text-white/35 tracking-wide">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="testimonials" className="relative py-28 lg:py-40 bg-secondary overflow-hidden">
      {/* Edge decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-gold/4 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-ocean/4 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16 lg:mb-24 text-center"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold/50" />
            <span className="font-body text-[11px] tracking-[0.35em] text-gold/70 uppercase">
              Client Stories
            </span>
            <div className="h-px w-10 bg-gold/50" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] text-white mb-6"
          >
            Voices of{' '}
            <em className="text-gradient-gold not-italic">Distinction</em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body font-light text-[15px] text-white/40 max-w-xl mx-auto leading-relaxed"
          >
            Our work speaks through those who live with it every day.
          </motion.p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </div>

        {/* Google reviews badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 lg:mt-20 flex justify-center"
        >
          <div className="flex items-center gap-4 glass border border-white/6 px-6 py-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill="#c9a96e">
                  <path d="M6 1l1.4 2.8 3.1.5-2.2 2.2.5 3.1L6 8.2l-2.8 1.4.5-3.1L1.5 4.3l3.1-.5L6 1z" />
                </svg>
              ))}
            </div>
            <div>
              <span className="font-body text-[13px] text-white/60">
                Rated <strong className="text-white font-medium">4.9/5</strong> from
                <strong className="text-white font-medium"> 200+</strong> verified clients
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}