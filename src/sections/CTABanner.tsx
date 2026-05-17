'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/utils/animations'

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-60px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const yBg = useTransform(scrollYProgress, [0, 1], [-80, 80])
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1.1, 1.0])

  return (
    <section
      ref={sectionRef}
      className="relative py-40 lg:py-56 overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: yBg, scale: scaleImg }}>
        <img
          src="https://images.unsplash.com/photo-1545579536700-df96bdb3f61c?w=1920&q=85"
          alt="Luxury pool"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.3) saturate(0.7)' }}
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-transparent to-primary/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_30%,rgba(5,8,22,0.8)_100%)]" />

      {/* Gold light flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          ref={headerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold/50" />
            <span className="font-body text-[11px] tracking-[0.35em] text-gold/70 uppercase">
              Begin Your Journey
            </span>
            <div className="h-px w-12 bg-gold/50" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.0] text-white mb-6"
          >
            Build Your Dream
            <br />
            <em className="text-gradient-gold not-italic">Swimming Pool</em>
            <br />
            With Arya Group
          </motion.h2>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="font-body font-light text-[15px] text-white/45 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            From concept to completion, we handle every detail with precision and artistry.
            Let's create something extraordinary together — a pool that defines your space
            for generations.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://wa.me/919876543210?text=Hello%20Arya%20Group%2C%20I'd%20like%20to%20discuss%20a%20pool%20project."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-10 py-5 bg-gold text-primary font-body font-medium text-[13px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:shadow-gold-lg inline-flex items-center gap-3"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.552 4.107 1.516 5.843L.057 23.882c-.07.284.195.535.478.469l6.172-1.432A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.938 0-3.754-.524-5.315-1.437l-.381-.225-3.945.915.924-3.86-.248-.396A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp Us
            </motion.a>

            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-5 border border-white/20 text-white font-body font-light text-[13px] tracking-[0.2em] uppercase hover:border-gold/50 hover:text-gold transition-all duration-400 inline-flex items-center gap-3 backdrop-blur-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call Now
            </motion.a>
          </motion.div>

          {/* Assurance badges */}
          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-wrap justify-center gap-8"
          >
            {[
              'Free Site Consultation',
              '10-Year Structural Warranty',
              'Premium Materials Only',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-gold/40 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                </div>
                <span className="font-body text-[12px] tracking-[0.1em] text-white/40">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}