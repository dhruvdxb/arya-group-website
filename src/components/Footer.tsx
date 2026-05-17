'use client'

import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/constants'
import { fadeUp, staggerContainer } from '@/utils/animations'

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#03050f] border-t border-white/6 overflow-hidden">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main footer grid */}
        <div className="py-20 lg:py-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="font-display text-3xl font-light tracking-[0.2em] text-white mb-1">ARYA</div>
              <div className="font-body text-[10px] tracking-[0.35em] text-gold/50 uppercase">Group · Est. 2009</div>
            </div>
            <div className="w-10 h-px bg-gold/30 mb-6" />
            <p className="font-body font-light text-[14px] text-white/35 leading-relaxed mb-8">
              India's premier luxury swimming pool architecture and construction firm — crafting exceptional aquatic environments since 2009.
            </p>
            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919876543210?text=Hello%20Arya%20Group%2C%20I'd%20like%20to%20discuss%20a%20pool%20project."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-5 py-3 border border-[#25d366]/30 text-[#25d366] hover:bg-[#25d366]/8 hover:border-[#25d366]/60 transition-all duration-300 font-body text-[12px] tracking-[0.15em] uppercase"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.552 4.107 1.516 5.843L.057 23.882c-.07.284.195.535.478.469l6.172-1.432A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.938 0-3.754-.524-5.315-1.437l-.381-.225-3.945.915.924-3.86-.248-.396A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat on WhatsApp
            </motion.a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-[11px] tracking-[0.3em] text-gold/60 uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body font-light text-[14px] text-white/35 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-[11px] tracking-[0.3em] text-gold/60 uppercase mb-6">Services</h4>
            <ul className="space-y-3">
              {['Farmhouse Pools', 'Infinity Pools', 'Villa Pools', 'Rooftop Pools', 'Resort Pools', 'Pool Renovation'].map((s) => (
                <li key={s}>
                  <a href="#services" className="font-body font-light text-[14px] text-white/35 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-px bg-gold group-hover:w-4 transition-all duration-300" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[11px] tracking-[0.3em] text-gold/60 uppercase mb-6">Contact Us</h4>
            <div className="space-y-5">
              <div>
                <p className="font-body text-[11px] tracking-[0.2em] text-white/25 uppercase mb-1">Address</p>
                <p className="font-body font-light text-[14px] text-white/45 leading-relaxed">
                  123 Luxury Plaza, Ring Road<br />
                  Surat, Gujarat 395007<br />
                  India
                </p>
              </div>
              <div>
                <p className="font-body text-[11px] tracking-[0.2em] text-white/25 uppercase mb-1">Phone</p>
                <a href="tel:+919876543210" className="font-body font-light text-[14px] text-white/45 hover:text-gold transition-colors duration-300">
                  +91 98765 43210
                </a>
              </div>
              <div>
                <p className="font-body text-[11px] tracking-[0.2em] text-white/25 uppercase mb-1">Email</p>
                <a href="mailto:hello@aryagroup.in" className="font-body font-light text-[14px] text-white/45 hover:text-gold transition-colors duration-300">
                  hello@aryagroup.in
                </a>
              </div>

              {/* Social links */}
              <div className="pt-2">
                <p className="font-body text-[11px] tracking-[0.2em] text-white/25 uppercase mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      aria-label={s.name}
                      className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/30 transition-all duration-300"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[12px] text-white/20 tracking-wide">
            © {new Date().getFullYear()} Arya Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-[12px] text-white/20 hover:text-gold/60 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="font-body text-[12px] text-white/20 hover:text-gold/60 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}