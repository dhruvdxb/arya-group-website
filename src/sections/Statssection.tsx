'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '@/constants'
import { fadeUp, staggerContainer } from '@/utils/animations'

function useCounter(target: number, inView: boolean, duration = 2200) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress)
      setCount(Math.round(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return count
}

function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useCounter(stat.value, inView, 2000 + index * 200)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative text-center lg:text-left p-8 lg:p-10 border border-white/5 hover:border-gold/20 transition-all duration-500 overflow-hidden"
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top accent */}
      <div className="w-8 h-px bg-gold/40 mx-auto lg:mx-0 mb-8 group-hover:w-16 transition-all duration-500" />

      {/* Number */}
      <div className="font-display text-[clamp(3.5rem,7vw,6rem)] font-light leading-none mb-3">
        <span className="text-gradient-gold">
          {count}{stat.suffix}
        </span>
      </div>

      {/* Label */}
      <h3 className="font-body text-base font-light tracking-[0.08em] text-white mb-1.5">
        {stat.label}
      </h3>

      {/* Description */}
      <p className="font-body text-[12px] tracking-[0.12em] text-white/30 uppercase">
        {stat.description}
      </p>
    </motion.div>
  )
}

export default function StatsSection() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="stats" className="relative py-28 lg:py-40 overflow-hidden bg-primary">
      {/* Edge lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(201,169,110,0.04),transparent)]" />

      {/* Background pool image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=1920&q=50"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20 lg:mb-28"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold/50" />
            <span className="font-body text-[11px] tracking-[0.35em] text-gold/70 uppercase">
              By the Numbers
            </span>
            <div className="h-px w-10 bg-gold/50" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] text-white"
          >
            A Legacy of{' '}
            <em className="text-gradient-gold not-italic">Excellence</em>
          </motion.h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="bg-primary">
              <StatCard stat={stat} index={i} />
            </div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-20 lg:mt-28 text-center max-w-3xl mx-auto"
        >
          <div className="font-display text-5xl text-gold/20 mb-4 leading-none">"</div>
          <p className="font-display text-xl lg:text-2xl italic font-light text-white/50 leading-relaxed">
            Every pool we build is a reflection of our commitment to transforming spaces
            into extraordinary aquatic experiences.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gold/30" />
            <span className="font-body text-[11px] tracking-[0.25em] text-gold/50 uppercase">
              Arya Group Philosophy
            </span>
            <div className="h-px w-10 bg-gold/30" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}