'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SERVICES } from '@/constants'
import { fadeUp, staggerContainer, scaleIn } from '@/utils/animations'

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative glass border border-white/6 hover:border-white/15 transition-all duration-500 overflow-hidden cursor-pointer"
      style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
    >
      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }}
      />

      <div className="relative z-10 p-8 lg:p-10">
        {/* Icon */}
        <div className="mb-6">
          <span
            className="font-display text-4xl transition-colors duration-300"
            style={{ color: service.accent + '80' }}
          >
            {service.icon}
          </span>
        </div>

        {/* Subtitle */}
        <p
          className="font-body text-[11px] tracking-[0.3em] uppercase mb-3 transition-colors duration-300"
          style={{ color: service.accent + 'aa' }}
        >
          {service.subtitle}
        </p>

        {/* Title */}
        <h3 className="font-display text-2xl lg:text-3xl font-light text-white mb-4 leading-tight group-hover:text-white transition-colors duration-300">
          {service.title}
        </h3>

        {/* Divider */}
        <div
          className="w-10 h-px mb-5 opacity-30 group-hover:opacity-70 group-hover:w-16 transition-all duration-500"
          style={{ background: service.accent }}
        />

        {/* Description */}
        <p className="font-body font-light text-[14px] text-white/45 group-hover:text-white/65 leading-relaxed transition-colors duration-300">
          {service.description}
        </p>

        {/* Arrow */}
        <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="font-body text-[11px] tracking-[0.2em] uppercase" style={{ color: service.accent }}>
            Learn More
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: service.accent }}>
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="services" className="relative py-28 lg:py-40 bg-primary overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-ocean/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-20 lg:mb-28 max-w-3xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold/50" />
            <span className="font-body text-[11px] tracking-[0.35em] text-gold/70 uppercase">
              What We Build
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] text-white mb-6"
          >
            Architectural Pool{' '}
            <em className="text-gradient-gold not-italic">Experiences</em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body font-light text-[15px] text-white/45 leading-relaxed max-w-xl"
          >
            Each pool is a unique architectural statement — engineered with precision,
            designed with artistry, and built to exceed the expectations of the most
            discerning clients.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {SERVICES.map((service, i) => (
            <div key={service.id} className="bg-primary">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}