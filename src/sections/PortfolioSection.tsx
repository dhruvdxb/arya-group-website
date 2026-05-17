'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PORTFOLIO_ITEMS } from '@/constants'
import { fadeUp, staggerContainer } from '@/utils/animations'

function PortfolioCard({ item, className = '' }: { item: typeof PORTFOLIO_ITEMS[0]; className?: string }) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      className={`group relative overflow-hidden cursor-pointer ${className}`}
    >
      {/* Image */}
      <motion.img
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.08, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
        }}
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
        style={{ filter: 'brightness(0.65) saturate(0.8)' }}
      />

      {/* Base overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

      {/* Hover overlay */}
      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1, transition: { duration: 0.4 } },
        }}
        className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-ocean/10"
      />

      {/* Category badge */}
      <div className="absolute top-5 left-5">
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-gold/80 px-3 py-1.5 border border-gold/25 glass-dark">
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <motion.div
          variants={{
            rest: { y: 8, opacity: 0.8 },
            hover: { y: 0, opacity: 1, transition: { duration: 0.4 } },
          }}
        >
          <p className="font-body text-[11px] tracking-[0.2em] text-white/40 mb-1.5 uppercase">{item.location}</p>
          <h3 className="font-display text-xl lg:text-2xl font-light text-white mb-3">{item.title}</h3>
          <motion.div
            variants={{
              rest: { width: 0 },
              hover: { width: '40px', transition: { duration: 0.4, delay: 0.1 } },
            }}
            className="h-px bg-gold"
          />
        </motion.div>
      </div>

      {/* View arrow */}
      <motion.div
        variants={{
          rest: { opacity: 0, scale: 0.8, x: 10 },
          hover: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.3 } },
        }}
        className="absolute top-5 right-5 w-10 h-10 border border-white/20 flex items-center justify-center glass-dark"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 12L12 2M12 2H5M12 2v7" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </motion.div>
    </motion.div>
  )
}

export default function PortfolioSection() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="portfolio" className="relative py-28 lg:py-40 bg-secondary overflow-hidden">
      {/* Top edge */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24 gap-8"
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-gold/50" />
              <span className="font-body text-[11px] tracking-[0.35em] text-gold/70 uppercase">
                Our Work
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] text-white"
            >
              Selected{' '}
              <em className="text-gradient-gold not-italic">Portfolio</em>
            </motion.h2>
          </div>

          <motion.a
            variants={fadeUp}
            href="#footer"
            whileHover={{ scale: 1.03 }}
            className="hidden lg:flex items-center gap-3 font-body text-[12px] tracking-[0.2em] text-gold/70 uppercase hover:text-gold transition-colors duration-300 group"
          >
            View All Projects
            <div className="w-8 h-px bg-gold/50 group-hover:w-12 transition-all duration-300" />
          </motion.a>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Large item top-left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <PortfolioCard item={PORTFOLIO_ITEMS[0]} className="h-72 md:h-96 lg:h-full min-h-[500px]" />
          </motion.div>

          {/* Medium items right column */}
          {[PORTFOLIO_ITEMS[1], PORTFOLIO_ITEMS[2]].map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <PortfolioCard item={item} className="h-60 lg:h-[240px]" />
            </motion.div>
          ))}

          {/* Bottom row */}
          {[PORTFOLIO_ITEMS[3], PORTFOLIO_ITEMS[4], PORTFOLIO_ITEMS[5]].map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <PortfolioCard item={item} className="h-56 lg:h-64" />
            </motion.div>
          ))}
        </div>

        {/* Mobile view all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:hidden mt-10 flex justify-center"
        >
          <a
            href="#footer"
            className="flex items-center gap-3 font-body text-[12px] tracking-[0.2em] text-gold/70 uppercase hover:text-gold transition-colors duration-300"
          >
            View All Projects →
          </a>
        </motion.div>
      </div>
    </section>
  )
}